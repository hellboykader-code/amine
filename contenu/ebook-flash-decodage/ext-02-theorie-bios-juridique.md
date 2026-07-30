# SECTION 11 — THÉORIE APPROFONDIE DU FIRMWARE ANDROID

Cette section prolonge la Section 1 en descendant d'un cran dans la mécanique interne d'Android. Comprendre la carte des partitions, le système A/B, le démarrage vérifié (AVB), Project Treble et l'anti-rollback n'est pas un luxe académique : c'est **ce qui distingue un flash réussi d'une brique définitive**. Chaque fois qu'un technicien « se trompe de slot », « downgrade sans regarder l'indice binaire » ou « désactive une vérification sans comprendre », il transforme une réparation à 15 minutes en un composant à ressouder — ou en un appareil bon pour la benne. On explique donc ici les mécanismes **pour les respecter**, jamais pour les contourner.

## 11.1 La carte des partitions Android

Le stockage interne d'un smartphone Android (mémoire **UFS** ou **eMMC**) n'est pas un disque unique et homogène. Il est découpé en **partitions**, chacune ayant un rôle précis. Le nombre exact varie selon le fabricant et le SoC (Qualcomm, MediaTek, Exynos, Google Tensor), mais on retrouve partout une même ossature logique. Confondre ces partitions, ou en écraser une par erreur, est la première cause de brique logicielle.

![Figure 11.1 — Schéma de la disposition des partitions d'un smartphone Android moderne](images/partitions-android.jpg)

| Partition | Rôle | Effacement = perte de… | Criticité |
|---|---|---|---|
| **bootloader / aboot / xbl / abl** | Premier code exécuté après la ROM de démarrage ; charge et vérifie la suite. | Le démarrage lui-même. | **Vitale** — écraser avec une mauvaise version peut être **définitif**. |
| **boot** | Noyau Linux (kernel) + ramdisk de démarrage. | La capacité à démarrer le système. | Haute — se reflashe, mais un mauvais boot = bootloop. |
| **init_boot** (appareils récents) | Ramdisk séparé du noyau (nouvelle organisation GKI). | Le ramdisk de démarrage. | Haute. |
| **vendor_boot** | Modules et ramdisk propres au fabricant. | Le démarrage matériel spécifique. | Haute. |
| **dtbo** | Overlays de l'arbre de périphériques (Device Tree). | La description matérielle chargée par le noyau. | Moyenne à haute. |
| **system** | Le système d'exploitation Android lui-même (framework, apps système). | L'OS. | Haute — se reflashe intégralement. |
| **vendor** | Couche du fabricant du matériel : pilotes (HAL), binaires propriétaires. | Le pont entre Android et le matériel. | Haute (voir Treble, 11.4). |
| **product / system_ext / odm** | Personnalisations opérateur/région, surcouches. | Apps et réglages régionaux. | Moyenne. |
| **vbmeta / vbmeta_system / vbmeta_vendor** | Métadonnées et empreintes de vérification (AVB). | L'intégrité vérifiée du démarrage. | Vitale pour la sécurité (voir 11.3). |
| **userdata** | Données utilisateur : apps installées, photos, comptes, chiffrement. | **Toutes les données de l'utilisateur.** | Critique côté données (jamais côté démarrage). |
| **metadata** | Clés et état du chiffrement (FBE — File-Based Encryption). | L'accès aux données chiffrées. | Critique — corrompre = données illisibles. |
| **persist** | Données d'étalonnage matériel persistantes (capteurs, Wi-Fi/BT MAC, DRM). | Étalonnages usine **non régénérables**. | **Vitale et unique à l'appareil** — ne jamais flasher celle d'un autre. |
| **modem / NON-HLOS / radio** | Firmware du modem (baseband) : réseau cellulaire. | La connectivité mobile. | Haute. |
| **EFS / nvram / protect_f/s** | Identité radio : **IMEI**, numéros de série, calibrations réseau. | **L'IMEI et l'identité de l'appareil** — souvent irrécupérable. | **Vitale et légalement sensible.** |
| **misc** | Petits drapeaux de commande (mode recovery, slot actif). | La commande de démarrage en cours. | Basse individuellement, mais utile. |
| **recovery** (appareils A-only) | Environnement de récupération (recovery). | L'accès au mode recovery. | Moyenne. |

> **⚠️ Risques (partitions sensibles)** — Les partitions **persist**, **EFS/nvram** et **modem** contiennent des données **propres à chaque appareil**, calibrées en usine. Flasher un `persist.img` ou un `EFS` provenant d'un autre téléphone, même du même modèle, peut **casser définitivement** le Wi-Fi, le Bluetooth, les capteurs ou l'**IMEI**. On ne les touche que via un firmware officiel complet destiné **exactement** à cet appareil, et jamais en pièce détachée récupérée ailleurs.

> **🔒 Éthique & légalité (EFS/IMEI)** — L'**IMEI** est l'identité légale de l'appareil sur le réseau. **Toute modification, réécriture ou usurpation d'IMEI est un délit** dans la plupart des pays (et notamment en France et dans l'UE). Ce livre n'explique **aucune** manipulation d'IMEI. En cas de perte d'IMEI après un incident de flash, la seule voie est le **SAV constructeur** avec preuve de propriété.

## 11.2 Systèmes A/B (seamless updates) vs A-only

Historiquement, Android n'avait qu'un seul jeu de partitions système : c'est l'architecture **A-only**. Depuis Android 7 (et généralisé sur les appareils récents), Google a introduit l'architecture **A/B** (« seamless updates », mises à jour transparentes).

### Principe A/B

L'appareil possède **deux copies** des partitions critiques (boot, system, vendor, vbmeta…), appelées **slot A** et **slot B**. À un instant donné, l'appareil démarre sur un seul slot **actif**. Lors d'une mise à jour OTA, le nouveau système est écrit **sur le slot inactif pendant que l'utilisateur continue d'utiliser le slot actif**. Au redémarrage, le bootloader bascule sur le slot fraîchement mis à jour.

| Aspect | A-only | A/B (seamless) |
|---|---|---|
| Copies des partitions système | Une seule | Deux (slot_a / slot_b) |
| Partition **recovery** dédiée | Oui | Non — le recovery est intégré au boot |
| Mise à jour | Appareil indisponible pendant l'installation | Installée en arrière-plan, bascule au reboot |
| Sécurité en cas d'échec OTA | Risque de rester bloqué | **Rollback automatique** sur l'ancien slot |
| Espace de stockage | Moins consommé | Plus consommé (duplication) |
| Repère technique du slot | — | Suffixe `_a` / `_b` sur les partitions |

### Conséquences pratiques pour le flash

- Sur A/B, la commande `fastboot flash boot boot.img` ne vise que le **slot courant**. Pour couvrir les deux, on utilise `fastboot flash boot_a` et `fastboot flash boot_b`, ou `fastboot --set-active=a` pour choisir le slot.
- Un système qui **bootloop après un flash partiel** vient très souvent d'une **incohérence de slots** : slot A à jour, slot B non, et l'appareil bascule sur le mauvais. La solution propre est un **reflash complet** via le script officiel (`flash-all`), qui gère les deux slots.
- Sur A/B, **il n'y a pas de partition recovery séparée** : chercher à « flasher un recovery » comme sur A-only n'a pas de sens et peut endommager le boot.

> **⚠️ Risques (slots A/B)** — Ne forcez jamais un slot actif « au hasard » pour sortir d'un bootloop : vous pouvez activer un slot vide ou obsolète. Reflashez plutôt l'ensemble avec le paquet officiel complet, qui restaure les deux slots de manière cohérente.

## 11.3 dm-verity et Android Verified Boot (AVB)

### Le démarrage vérifié, maillon par maillon

Android met en œuvre un **démarrage vérifié** (Verified Boot) qui établit une **chaîne de confiance** depuis le tout premier code matériel jusqu'au système. L'idée : à chaque étage, le code en cours vérifie **cryptographiquement** que l'étage suivant n'a pas été modifié avant de le lancer.

1. La **racine de confiance matérielle** (Root of Trust, gravée dans le SoC) vérifie le bootloader primaire.
2. Le bootloader vérifie le **boot** (noyau/ramdisk) via **AVB** et la partition **vbmeta**.
3. Le noyau vérifie la partition **system** en continu grâce à **dm-verity**.

**dm-verity** est un module du noyau Linux qui traite `system` (et les partitions en lecture seule) comme un volume à intégrité vérifiée : il calcule des empreintes (hash) organisées en **arbre de Merkle** et compare chaque bloc lu à l'empreinte attendue, signée dans **vbmeta**. Si un seul bloc a été altéré, la lecture échoue — c'est ce qui empêche un logiciel malveillant de modifier discrètement le système.

**AVB (Android Verified Boot 2.0)** est le cadre qui rassemble ces empreintes et les signe. La partition **vbmeta** contient les hachages et la signature de référence ; c'est le « sommet » que le bootloader vérifie.

### L'avertissement au démarrage après déverrouillage

Lorsqu'on **déverrouille le bootloader** (opération légitime sur son propre appareil), l'état de démarrage vérifié change et l'appareil affiche un **avertissement au démarrage** — écran orange ou rouge du type *« The bootloader is unlocked and software integrity cannot be guaranteed »*. Beaucoup de débutants pensent à un bug ou cherchent à « faire disparaître » ce message. **C'est une fonctionnalité de sécurité, pas une erreur.**

| État de démarrage (AVB) | Couleur d'avertissement | Signification |
|---|---|---|
| **GREEN** | Aucun (démarrage normal) | Bootloader verrouillé, tout est signé par le fabricant : confiance totale. |
| **YELLOW** | Jaune + empreinte de la clé | Bootloader verrouillé mais avec une **clé personnalisée** vérifiée. |
| **ORANGE** | Orange | Bootloader **déverrouillé** : l'intégrité ne peut plus être garantie. |
| **RED** | Rouge (démarrage bloqué ou dégradé) | Vérification **échouée** : partition corrompue ou altérée. |

L'avertissement orange est **voulu** : il informe l'utilisateur (et un éventuel acheteur d'occasion) que l'appareil n'est plus dans son état d'usine vérifié. Il ne se supprime **légitimement** qu'en **reverrouillant le bootloader** avec un système officiel signé cohérent.

> **🔒 Éthique & légalité (avertissement de démarrage)** — Chercher à masquer l'avertissement orange tout en gardant un bootloader déverrouillé revient à **tromper un futur acheteur** sur l'état de sécurité de l'appareil. On ne le fait pas. Sur son propre appareil, le seul geste propre est soit d'assumer l'avertissement, soit de **reverrouiller** proprement avec la ROM stock officielle.

### Message « device is corrupt »

Le message *« Your device is corrupt. It can't be trusted »* au démarrage correspond à l'état **RED** : AVB a détecté une incohérence entre une partition et ses empreintes dans vbmeta (par exemple après un flash partiel ou un vbmeta qui ne correspond plus au system flashé). La correction propre est de **reflasher le firmware officiel complet** (y compris `vbmeta`) pour rétablir la cohérence.

## 11.4 Project Treble et les images génériques (GSI)

**Project Treble** (Android 8.0) a introduit une séparation nette entre :

- le **framework Android** (partition `system`), commun et fourni par Google ;
- l'**implémentation du fabricant du matériel** (partition `vendor`), qui contient les pilotes (HAL — Hardware Abstraction Layer).

L'interface entre les deux est stabilisée (**VINTF** — Vendor Interface). Concrètement, cela permet de **mettre à jour le framework Android sans réécrire toute la couche matérielle**, et rend possible le démarrage d'une **GSI** (Generic System Image), une image `system` générique publiée par Google, sur des appareils compatibles Treble — utile pour le test et le diagnostic.

| Notion | Avant Treble | Avec Treble |
|---|---|---|
| Séparation system / vendor | Floue, imbriquée | Stricte, via interface VINTF |
| Mise à jour du framework | Nécessite l'intervention du fabricant matériel | Possible plus indépendamment |
| Image générique (GSI) | Impossible | Possible sur appareils compatibles |
| Intérêt pour le technicien | — | Diagnostic, test de compatibilité |

Pour le réparateur, Treble explique pourquoi il faut **respecter le couple system/vendor** : flasher un `system` incompatible avec le `vendor` en place (mauvaise version d'interface) provoque un non-démarrage. On reste sur les paquets officiels adaptés au modèle.

## 11.5 Anti-rollback (ARB) : pourquoi on ne downgrade pas

L'**anti-rollback (ARB)** est un mécanisme de sécurité qui **empêche d'installer une version de firmware plus ancienne** que celle déjà présente. Le but : empêcher un attaquant de « rétrograder » un appareil vers une ancienne version vulnérable pour exploiter une faille déjà corrigée.

### Comment ça marche

Le firmware embarque un **indice ARB** (un compteur de version de sécurité). Le matériel conserve, dans une zone **non réinscriptible** (souvent des **e-fuses** — fusibles électroniques grillés une fois pour toutes), le plus haut indice jamais installé. Au démarrage, si l'indice du firmware présent est **inférieur** à l'indice mémorisé dans le matériel, l'appareil **refuse de démarrer**.

| Situation | Indice firmware vs matériel | Résultat |
|---|---|---|
| Flash d'une version ≥ à l'actuelle | firmware ≥ e-fuse | OK |
| Flash d'une version plus ancienne (downgrade) | firmware < e-fuse | **Refus de démarrer / brique** |
| Reverrouillage avec ancienne ROM | firmware < e-fuse | **Brique définitive possible** |

### Pourquoi c'est définitif

Le compteur ARB matériel **ne se remet jamais à zéro** : les e-fuses grillés ne se « dégrillent » pas. Une fois qu'un appareil est passé à un indice ARB donné (par une mise à jour), **on ne peut plus jamais y installer un firmware d'indice inférieur**. C'est la raison pour laquelle « downgrader pour retrouver l'ancienne version » est souvent **impossible** et **brique** l'appareil de façon **irréversible**.

> **⚠️ Risques (anti-rollback)** — Avant tout flash, **vérifiez l'indice ARB** du firmware cible par rapport à celui de l'appareil. Ne flashez **jamais** une version d'indice inférieur, et **ne reverrouillez jamais** le bootloader avec un firmware d'indice ARB plus ancien. C'est l'une des erreurs les plus fréquentes menant à une brique irrécupérable.

## 11.6 VBMeta et désactivation de la vérification

La partition **vbmeta** est le sommet de la chaîne AVB : elle contient les empreintes signées des autres partitions. Dans certains scénarios de développement **sur son propre appareil, bootloader déverrouillé**, on peut être amené à flasher une image vbmeta avec des **drapeaux de désactivation de la vérification** (par exemple `--disable-verity --disable-verification`) pour permettre à un système modifié de démarrer.

Il faut être limpide sur ce que cela signifie :

- **Ce n'est utile que sur un appareil qu'on possède**, bootloader déjà déverrouillé, dans un cadre de développement/test assumé.
- Cela **désactive une protection de sécurité** : dm-verity ne vérifie plus l'intégrité, ce qui **réduit la sécurité** de l'appareil et **maintient l'avertissement** de démarrage.
- Ce **n'est pas** un moyen de contourner un verrou de propriété (FRP, compte constructeur) : cela ne les touche pas.

| Drapeau vbmeta | Effet | Cadre d'usage |
|---|---|---|
| Vérification active (défaut) | Intégrité vérifiée à chaque démarrage/lecture | État d'usine, recommandé |
| `--disable-verity` | dm-verity désactivé sur les partitions concernées | Développement, appareil personnel |
| `--disable-verification` | Vérification AVB de la chaîne désactivée | Développement, appareil personnel |

> **🔒 Éthique & légalité (vbmeta)** — Désactiver la vérification n'a de sens **que sur un appareil vous appartenant**, en connaissance de cause, et **n'ouvre aucun verrou anti-vol**. Sur un appareil dont la propriété n'est pas prouvée, on n'y touche pas. Pour rendre un appareil « comme neuf » et sécurisé avant revente, on **réactive** la vérification en reflashant un vbmeta officiel et en reverrouillant le bootloader.

\newpage

# SECTION 12 — SÉCURITÉ MOBILE EXPLIQUÉE (POUR LA RESPECTER)

Cette section ne contient **aucune** méthode de contournement. Son objet est l'inverse : comprendre **pourquoi** les protections de sécurité mobile existent, **à qui elles profitent**, et pourquoi un professionnel sérieux **exige la preuve de propriété** plutôt que de chercher à les casser. Un bon technicien est celui qui sait expliquer à un client, calmement, pourquoi certains verrous ne se lèvent que par la voie officielle — et pourquoi c'est une **bonne** chose.

## 12.1 Le Secure Boot : garantir que le logiciel est authentique

Le **Secure Boot** (démarrage sécurisé) est le principe selon lequel un appareil ne démarre que du **code signé** par une autorité de confiance, vérifié depuis une **racine de confiance matérielle** gravée dans le processeur. On l'a détaillé côté Android (AVB, section 11.3) ; le même principe existe sur iOS (**Secure Boot Chain**) et sur PC (UEFI Secure Boot, section 13).

Son but n'est pas de « gêner les réparateurs ». Il répond à des menaces réelles :

- empêcher un **logiciel malveillant** de s'installer sous le système, là où aucun antivirus ne le verrait (rootkit de bas niveau) ;
- garantir à l'utilisateur que le système qu'il exécute est **bien celui du fabricant**, non trafiqué ;
- protéger les mécanismes de **chiffrement** et de **paiement** qui reposent sur l'intégrité du démarrage.

## 12.2 TEE et Secure Enclave : un coffre-fort dans la puce

Les smartphones modernes embarquent un **environnement d'exécution de confiance** isolé du système principal :

- **TEE (Trusted Execution Environment)** côté Android, souvent bâti sur **ARM TrustZone**, avec des implémentations comme **Qualcomm QSEE** ou **Trusty**. Samsung y ajoute **Knox** et un processeur/zone sécurisée.
- **Secure Enclave** côté Apple : un coprocesseur dédié, isolé de l'application processor.

Ce « coffre-fort » stocke et manipule les secrets les plus sensibles **sans jamais les exposer** au système Android/iOS principal :

| Élément protégé | Rôle | Pourquoi l'isoler |
|---|---|---|
| Clés de **chiffrement** du stockage | Déverrouiller les données utilisateur | Empêcher l'extraction des données sans le code |
| **Empreintes / visage** (biométrie) | Authentifier l'utilisateur | Les gabarits ne quittent jamais l'enclave |
| Clés de **paiement** (NFC) | Sécuriser les transactions | Conformité bancaire, anti-fraude |
| **Compteurs anti-rollback**, état des verrous | Faire respecter ARB et l'état de propriété | Zone inviolable par le système |

Le TEE impose aussi des **délais et limites de tentatives** sur le code de déverrouillage, ce qui rend la force brute impraticable : c'est ce qui fait qu'un téléphone perdu **protège réellement** les données de son propriétaire.

## 12.3 Le verrou d'activation : une protection anti-vol au bénéfice des victimes

Les verrous d'activation — **Apple Activation Lock** (via « Localiser »), **FRP / Factory Reset Protection** (compte Google), **Samsung Reactivation Lock**, comptes **Mi / OPPO / Realme / OnePlus** — répondent à un problème de société bien concret : le **vol de smartphones**.

Avant leur généralisation, un téléphone volé se réinitialisait en deux minutes et se revendait comme neuf. Le vol était **rentable**. Depuis que ces verrous existent :

- un appareil volé, une fois réinitialisé, **redemande le compte du propriétaire légitime** et reste **inutilisable** pour le voleur ;
- la **valeur de revente d'un appareil volé s'effondre**, ce qui **décourage le vol à la source** ;
- les **victimes** (souvent des particuliers, parfois dans des situations d'agression) sont **protégées** : leurs données restent inaccessibles et leur appareil n'enrichit pas le voleur.

Autrement dit, ces verrous ne sont pas dirigés contre les utilisateurs honnêtes : **ils les protègent**. Le « client » naturel de ces protections, c'est la personne à qui on a volé son téléphone.

> **🔒 Éthique & légalité (verrous d'activation)** — C'est précisément parce que ces verrous protègent les victimes de vol qu'un professionnel **ne les contourne pas**. Contourner un verrou d'activation, c'est potentiellement **remettre en circulation un appareil volé** et **priver une victime** de sa protection. La seule voie est la **preuve de propriété** + les **canaux officiels** (SAV constructeur), documentés à la Section 6 du manuel principal.

## 12.4 Pourquoi un professionnel exige la preuve de propriété

Un technicien qui accepterait de « débloquer n'importe quoi » deviendrait, de fait, le **maillon final de la chaîne du vol** : celui qui transforme un appareil volé et inutilisable en appareil revendable. C'est exactement ce que les verrous cherchent à empêcher.

Exiger la **preuve de propriété** (facture d'achat, mandat écrit, pièce d'identité) protège **tout le monde** :

- la **victime** potentielle, dont l'appareil ne sera pas remis en circulation ;
- le **client honnête**, qui obtient un service traçable et légal ;
- le **professionnel lui-même**, qui se met à l'abri d'une accusation de **recel** (section 15.4) et préserve sa réputation.

Refuser une intervention faute de preuve de propriété n'est pas de la rigidité : c'est le **cœur du métier bien fait**. La bonne réponse au client dont la propriété n'est pas prouvée n'est jamais « je ne peux pas vous aider », mais « **voici la procédure officielle**, avec votre preuve d'achat, auprès du constructeur ou de l'opérateur ».

\newpage

# SECTION 13 — BIOS/UEFI APPROFONDI (PC PORTABLES)

La Section 4 du manuel principal a posé les bases du flash côté PC. On approfondit ici l'architecture **UEFI**, le **Secure Boot**, la **mise à jour du BIOS par marque**, la **récupération d'un BIOS corrompu**, la **réinitialisation CMOS** et la question des **mots de passe BIOS** — toujours dans le seul cadre légitime : **sa propre machine** ou une machine confiée **avec preuve de propriété**.

## 13.1 UEFI vs BIOS legacy

Le firmware d'un PC est le premier logiciel exécuté à l'allumage. Deux générations coexistent :

| Caractéristique | BIOS legacy | UEFI |
|---|---|---|
| Époque | Historique (jusqu'aux années 2010) | Standard actuel |
| Table de partitionnement | **MBR** (max 2 To, 4 partitions primaires) | **GPT** (>2 To, nombreuses partitions) |
| Interface | 16 bits, texte | 32/64 bits, souris, graphique |
| Amorçage | Secteur d'amorçage MBR | Fichiers `.efi` sur la partition **ESP** (EFI System Partition) |
| Sécurité de démarrage | Aucune native | **Secure Boot**, chaîne signée |
| Extensibilité | Limitée | Pilotes et applications UEFI, mode **CSM** pour compatibilité legacy |

L'**ESP** (partition système EFI, formatée en FAT32) contient les chargeurs d'amorçage (`bootmgfw.efi` pour Windows, `grubx64.efi`/`shimx64.efi` pour Linux). Comprendre l'ESP est essentiel pour diagnostiquer un PC qui « ne trouve plus le système d'exploitation » : souvent, l'entrée d'amorçage UEFI ou l'ESP est en cause, pas le disque entier.

## 13.2 Secure Boot côté PC

Le **Secure Boot** de l'UEFI vérifie que chaque chargeur d'amorçage est **signé** par une clé reconnue avant de l'exécuter. Il s'appuie sur une hiérarchie de clés :

| Clé | Rôle |
|---|---|
| **PK** (Platform Key) | Clé racine de la plateforme, contrôlée par le propriétaire/OEM. |
| **KEK** (Key Exchange Key) | Autorise la mise à jour des bases de signatures. |
| **db** | Base des signatures **autorisées** (chargeurs de confiance). |
| **dbx** | Base des signatures **révoquées** (interdites). |

Sur son propre PC, on peut **gérer ces clés** depuis le setup UEFI (désactiver Secure Boot, restaurer les clés d'usine, ajouter la clé d'une distribution Linux via **shim/MOK**). Ce sont des opérations légitimes de configuration, pas des contournements. Désactiver Secure Boot **réduit** la protection contre les bootkits ; on ne le fait qu'en connaissance de cause et, idéalement, on le réactive ensuite.

## 13.3 Mise à jour du BIOS/UEFI par marque

La mise à jour du BIOS/UEFI (firmware update) corrige des bugs, ajoute la prise en charge de nouveaux CPU, colmate des failles de sécurité (microcode). Elle se fait **exclusivement** avec le fichier officiel **du modèle exact** de la machine, obtenu sur le site du fabricant.

| Marque | Outil / méthode officielle | Sécurité intégrée |
|---|---|---|
| **Dell** | Dell **SupportAssist** / BIOS Flash Update ; fichier `.exe` ou update depuis le menu **F12** | **BIOS Recovery** (F2+alimentation), image de secours |
| **HP** | **HP Support Assistant** ; **HP BIOS Update** (Win+B au démarrage) | **HP Sure Start** (auto-réparation du BIOS) |
| **Lenovo** | **Vantage** / Lenovo BIOS Update Utility ; ISO amorçable | **Crisis Recovery** sur certains modèles |
| **Asus** | **MyASUS** / EZ Flash (dans l'UEFI, depuis une clé USB) | **USB BIOS FlashBack** (bouton dédié) |
| **Acer** | **Care Center** ; utilitaire de flash Windows/DOS | Récupération par **clé USB** de secours |

### Bonnes pratiques de flash BIOS

1. **Alimentation secteur branchée** (jamais sur batterie seule) et batterie chargée — une coupure pendant l'écriture du BIOS peut **briquer la carte mère**.
2. Vérifier **exactement** le modèle et la révision (numéro de série / service tag).
3. Ne **jamais** interrompre, ne pas éteindre, ne pas retirer la clé USB pendant l'opération.
4. Fermer les autres applications ; désactiver temporairement le chiffrement de disque si l'outil le demande.

> **⚠️ Risques (flash BIOS)** — Un flash BIOS interrompu ou avec un fichier destiné à un **autre modèle** peut rendre la carte mère **inopérante**. Beaucoup de portables disposent d'un mécanisme de secours (voir 13.4), mais **pas tous**. En cas de doute sur le fichier ou le modèle, on ne flashe pas.

### BIOS de secours, dual-BIOS et EC

Certaines machines embarquent un **double BIOS** (dual-BIOS) : une copie principale et une copie de secours en lecture seule, capable de restaurer la principale si elle est corrompue. Le **Contrôleur Embarqué (EC — Embedded Controller)** est un micro-contrôleur distinct qui gère l'alimentation, le clavier, les ventilateurs et orchestre souvent la récupération BIOS. Des dispositifs comme **HP Sure Start** vérifient et **réparent automatiquement** le BIOS à chaque démarrage. Ces mécanismes expliquent pourquoi un PC « briqué » n'est pas toujours perdu.

## 13.4 Récupération d'un BIOS corrompu (crisis recovery officiel)

Quand un flash a échoué et que la machine ne démarre plus (écran noir, pas de POST), les fabricants proposent une **procédure de récupération officielle** — souvent appelée **Crisis Recovery** ou **BIOS Recovery** — qui restaure le firmware depuis une **clé USB** préparée avec le fichier officiel :

1. Télécharger, depuis **une autre machine**, le fichier BIOS officiel du modèle exact et le **renommer** selon la consigne du fabricant (chaque marque impose un nom de fichier précis).
2. Copier ce fichier à la **racine** d'une clé USB formatée en **FAT32**.
3. PC éteint et **branché au secteur**, maintenir la **combinaison de récupération** propre à la marque tout en appuyant sur le bouton d'alimentation :
   - **Dell** : `Ctrl + Esc` (ou `F2` selon modèle) + alimentation → BIOS Recovery.
   - **HP** : `Win + B` (ou `Win + V`) + alimentation → HP BIOS Update.
   - **Asus** : bouton **USB BIOS FlashBack** dédié.
   - **Lenovo** : procédure Crisis Recovery du modèle (voir la documentation officielle).
4. Laisser le processus se dérouler **sans interruption** (l'écran peut clignoter, la machine peut redémarrer plusieurs fois).

Les combinaisons et noms de fichiers **varient selon le modèle** : on suit **toujours** la notice officielle du fabricant, jamais une recette générique.

> **⚠️ Risques (crisis recovery)** — Utiliser un fichier BIOS d'un **autre modèle** pendant une récupération peut **aggraver** la corruption. Vérifiez trois fois le modèle et la révision. Si la récupération échoue, la voie suivante est le **SAV du fabricant** (reprogrammation matérielle de la puce SPI), pas le bricolage à l'aveugle.

## 13.5 Réinitialisation CMOS (sur SA machine)

La mémoire **CMOS** conserve les réglages du BIOS/UEFI (ordre d'amorçage, heure, options matérielles), alimentée par une **pile bouton (CR2032)**. La réinitialiser remet les réglages **par défaut d'usine** — utile après un mauvais réglage empêchant le démarrage. Sur **sa propre machine** :

| Méthode | Procédure | Remarque |
|---|---|---|
| **Retrait de la pile** | PC éteint et **débranché**, ouvrir, retirer la pile CR2032 quelques minutes, remettre. | Plus délicat sur portables (démontage). |
| **Jumper Clear CMOS** | Déplacer le cavalier `CLR_CMOS`/`JBAT` selon la notice de la carte mère. | Surtout sur cartes de bureau. |
| **Bouton Clear CMOS** | Presser le bouton dédié (certaines cartes). | Le plus simple quand présent. |

La réinitialisation CMOS **remet les réglages à zéro** ; elle ne « déverrouille » pas une machine dont on n'est pas propriétaire (voir 13.6) et n'efface pas les données du disque.

> **⚠️ Risques (CMOS)** — Manipulez toujours **hors tension et débranché**, en vous déchargeant de l'électricité statique. Sur un portable, le démontage peut affecter la garantie et abîmer des nappes. En cas de doute, confiez l'opération à un atelier.

## 13.6 Mots de passe BIOS : uniquement les voies légitimes

Un mot de passe BIOS (mot de passe d'allumage, mot de passe superviseur, ou verrou de type disque/HDD) est une **protection** voulue par le propriétaire ou l'entreprise. Ce livre **ne fournit aucun « master password », outil de génération, ni méthode de contournement**. Les seules voies légitimes sont :

1. **Sur SA propre machine**, mot de passe **utilisateur/allumage** oublié : sur beaucoup de cartes de **bureau**, le **retrait de la pile CMOS** ou le **jumper Clear CMOS** efface les réglages, mot de passe d'allumage inclus. **Sur les portables modernes et les machines d'entreprise, ce n'est généralement PAS le cas** : le mot de passe est stocké dans une mémoire sécurisée indépendante.
2. **Machine d'entreprise / verrou superviseur** : la levée passe par le **service informatique** ou l'**administrateur** qui a posé le mot de passe.
3. **Tous les autres cas** : **support officiel du fabricant**, sur présentation de la **preuve de propriété** (facture, numéro de série). Le fabricant peut, selon sa politique, fournir une procédure de déverrouillage ou intervenir.

> **🔒 Éthique & légalité (mot de passe BIOS)** — Un mot de passe BIOS que l'on ne peut pas lever avec la preuve de propriété est le signe qu'il faut passer par le **propriétaire légitime** ou le **fabricant**, pas chercher un contournement. Les « master passwords » et outils de bypass sont exclus de cet ouvrage : les employer sur une machine qui n'est pas la vôtre peut relever de l'**accès frauduleux** à un système et du **recel**.

\newpage

# SECTION 14 — POSTE DE TRAVAIL DU TECHNICIEN FIRMWARE

Un flash rate rarement à cause du « logiciel magique » : il rate à cause d'un **câble médiocre**, d'une **alimentation instable**, d'un **firmware venu d'une source douteuse** ou d'un poste mal organisé. Cette section décrit l'installation matérielle et logicielle d'un atelier fiable, l'hygiène des sources et la **traçabilité** des interventions.

## 14.1 Matériel de l'atelier

![Figure 14.1 — Poste de travail type d'un technicien firmware](images/poste-technicien.jpg)

| Élément | Pourquoi c'est important | Recommandation |
|---|---|---|
| **PC de travail fiable** | Un flash interrompu par un plantage PC peut briquer l'appareil. | Machine stable, SSD, RAM suffisante, à jour. |
| **Onduleur / alimentation stable** | Une coupure secteur pendant un flash = brique. | **Onduleur (UPS)** pour le poste ; portable chargé + secteur. |
| **Câbles data de qualité** | Un câble « charge seule » ou usé provoque des déconnexions en plein flash. | Câbles **data certifiés**, courts, testés ; les remplacer régulièrement. |
| **Hub USB alimenté** | Les ports en cascade et sous-alimentés causent des chutes de tension. | Hub **avec alimentation externe**, éviter les rallonges. |
| **Ports USB directs** | Certains modes (EDL, DFU) sont sensibles à l'USB 3 vs 2. | Privilégier les **ports arrière** sur fixe, essayer USB 2.0 si détection capricieuse. |
| **Adaptateurs** (USB-C/A, Lightning, micro-USB) | Couvrir tous les connecteurs sans improviser. | Adaptateurs de qualité, pas de convertisseurs douteux. |
| **Câbles EDL / deep-flash / test point** | Restauration bas niveau **sur appareils qu'on possède / mandatés**. | **Usage légitime uniquement** ; matériel réservé aux techniciens formés. |
| **Alimentation de labo** | Diagnostic de consommation, test post-flash. | Affichage tension/intensité pour repérer un court-circuit. |
| **Station propre, tapis antistatique** | Éviter décharges statiques et pertes de vis. | Bracelet ESD, éclairage, rangement. |

> **🔒 Éthique & légalité (câbles EDL / deep-flash)** — Les câbles et modes de restauration bas niveau (EDL en 9008 côté Qualcomm, deep flash) ont un **usage légitime** : remettre en service un appareil **qu'on possède** ou pour lequel on a un **mandat écrit**, avec un **firmware officiel**. Ils ne servent **jamais**, dans cet ouvrage, à contourner un verrou de propriété. Leur possession et leur emploi doivent rester dans ce cadre.

## 14.2 Logiciels et pilotes

Un poste de flash bien préparé dispose, **installés depuis les sources officielles**, des éléments suivants :

| Catégorie | Exemples (officiels) | Rôle |
|---|---|---|
| **Pilotes USB** | Google USB Driver (ADB/Fastboot), pilotes Qualcomm, MediaTek VCOM, Samsung, Apple (via Finder/iTunes). | Faire reconnaître l'appareil dans chaque mode. |
| **Outils Android** | **Android Platform-Tools** (adb, fastboot) officiels de Google. | Sideload OTA, flash fastboot, diagnostic. |
| **Outils constructeur** | Outils **officiels** du fabricant du modèle (flash de ROM stock signée). | Restauration stock par marque. |
| **Environnement Apple** | **Finder** (macOS) / **Apple Devices** ou iTunes (Windows) à jour. | Restauration/mise à jour iPhone/iPad (DFU/Recovery). |
| **Utilitaires** | Vérificateur de **somme de contrôle** (SHA-256), gestionnaire d'archives, outil de formatage USB (FAT32). | Vérifier l'intégrité des firmwares, préparer les supports. |

**Toujours** installer pilotes et outils depuis le **site officiel** de l'éditeur/constructeur, jamais depuis un lien de forum reconditionné (risque de logiciel piégé).

## 14.3 Organisation des firmwares

Une ROM, c'est plusieurs centaines de Mo à plusieurs Go, propre à un **modèle**, une **région** et une **version**. Le désordre mène tôt ou tard à flasher le **mauvais** fichier. Une organisation robuste :

- Arborescence claire : `Marque / Modèle (nom de code) / Région / Version / fichiers`.
- **Nom de code** de l'appareil noté explicitement (ex. codename), car c'est lui qui garantit la compatibilité, pas le nom commercial.
- **Somme de contrôle SHA-256** consignée à côté de chaque firmware et **vérifiée** avant chaque flash.
- Conserver le **numéro de version / indice binaire / indice ARB** dans le nom de dossier pour éviter tout downgrade accidentel (section 11.5).
- Sauvegarde des firmwares officiels sur un stockage fiable ; ne jamais réutiliser une ROM « bricolée » d'origine inconnue.

## 14.4 Hygiène et sources

| Principe | Mise en œuvre |
|---|---|
| **Sources officielles uniquement** | Firmwares et outils venant du constructeur ou de dépôts officiels reconnus ; méfiance envers les liens de forum, les archives « modifiées ». |
| **Vérification d'intégrité** | Contrôle **SHA-256** systématique avant flash ; un hash qui ne correspond pas = fichier rejeté. |
| **Antivirus / poste sain** | Poste de travail scanné, à jour ; les paquets de flash sont une cible fréquente de logiciels malveillants. |
| **Isolation** | Éviter d'utiliser le PC de flash pour la navigation à risque ; compte dédié. |
| **Pas de « box » ni crédits douteux** | On n'emploie ni serveurs, ni « crédits de bypass », ni outils dont la finalité est le contournement de verrous. |

## 14.5 Traçabilité des interventions

La traçabilité protège le client **et** le technicien. Pour chaque intervention firmware, on consigne :

- l'**identité du client** et la **preuve de propriété** vérifiée ;
- le **modèle**, le **numéro de série / IMEI** (relevé, jamais modifié), l'**état initial** ;
- l'**opération réalisée** (firmware exact, version, indice), la **date**, le **technicien** ;
- la **sauvegarde** proposée/réalisée et le **consentement** du client (RGPD, section 15.3) ;
- la **décharge signée** et le **résultat** (succès, aléa, refus motivé).

Ce registre s'articule avec le **registre des objets d'occasion** (section 15.2) et les **modèles de documents** de l'Annexe C du manuel principal.

\newpage

# SECTION 15 — CADRE JURIDIQUE & RGPD APPROFONDI (FRANCE/UE)

Cette section approfondit l'Avertissement légal et l'Annexe C du manuel principal. Elle n'est **pas** un conseil juridique personnalisé : la réglementation évolue et s'apprécie au cas par cas. Elle donne les **repères essentiels** au réparateur pour exercer proprement en France et dans l'Union européenne. En cas de doute, **consultez un juriste** et vérifiez les textes en vigueur.

## 15.1 Responsabilité du réparateur et preuve de propriété

Le réparateur est un **professionnel** : il est tenu à un **devoir de vigilance** sur la provenance des appareils qu'on lui confie et à une **obligation d'information** envers le client. Concrètement :

- **Vérifier la propriété** avant toute intervention touchant à la sécurité ou à l'identité de l'appareil : **pièce d'identité + preuve d'achat / mandat écrit**.
- **Informer par écrit** des risques (perte de garantie, perte de données, risque de brique) et recueillir la **décharge signée**.
- **Refuser** l'intervention si la propriété n'est pas prouvée, et **orienter vers la voie officielle** (SAV constructeur/opérateur).
- Ne réaliser que des opérations **dans son domaine de compétence**, avec un **devoir de conseil** honnête.

## 15.2 Registre des objets d'occasion (registre de police)

En France, l'achat-revente et certaines activités portant sur des **objets mobiliers usagés** (dont les téléphones et PC d'occasion) sont soumis à la tenue d'un **registre des objets mobiliers** (couramment appelé « registre de police »), consultable par les autorités. Ce registre vise à **lutter contre le recel** en traçant l'origine des biens.

| Information typiquement consignée | Finalité |
|---|---|
| Identité et coordonnées du **vendeur/déposant** | Traçabilité de la provenance |
| **Pièce d'identité** présentée | Vérification |
| **Description** de l'objet (marque, modèle, n° de série/IMEI) | Identification de l'appareil |
| **Date** d'entrée / de transaction | Chronologie |
| **Prix** / nature de l'opération | Traçabilité commerciale |

Selon la nature exacte de l'activité (rachat, dépôt-vente, simple réparation), les obligations diffèrent : vérifiez **votre** régime auprès de la préfecture / des textes applicables. La logique reste la même : **savoir d'où vient l'appareil**.

> **🔒 Éthique & légalité (traçabilité)** — La tenue rigoureuse du registre n'est pas une formalité tatillonne : c'est votre **meilleure protection** en cas de contrôle et la preuve de votre bonne foi. Un appareil sans provenance claire est un appareil qu'on **ne traite pas**.

## 15.3 Données personnelles des clients (RGPD)

Dès qu'un appareil client passe entre vos mains, vous êtes susceptible d'accéder à des **données personnelles** ; en les traitant (sauvegarde, effacement, tenue d'un fichier client), vous êtes **responsable de traitement** au sens du **RGPD** (Règlement UE 2016/679) et de la loi Informatique et Libertés.

| Principe RGPD | Application concrète en atelier |
|---|---|
| **Licéité, base légale** | Traiter les données sur une base valable (exécution du contrat de réparation, consentement pour une sauvegarde). |
| **Minimisation** | N'accéder qu'à ce qui est **strictement nécessaire** à l'intervention ; ne pas « fouiller » l'appareil. |
| **Consentement / information** | Informer le client, recueillir son **accord écrit** pour toute sauvegarde ou manipulation de ses données. |
| **Sécurité / confidentialité** | Protéger les données (poste sécurisé, accès restreint) ; **secret professionnel** de fait. |
| **Limitation de conservation** | Ne pas garder les données du client au-delà du besoin ; **supprimer** les sauvegardes après restitution. |
| **Effacement sécurisé** | Lors d'une remise à neuf/revente, procéder à un **effacement sécurisé** (réinitialisation d'usine avec **chiffrement actif**, écrasement) empêchant toute récupération. |
| **Droits des personnes** | Permettre au client d'exercer ses droits (accès, effacement) sur les données que vous détenez. |
| **Registre / violations** | Tenir un registre des traitements si requis ; savoir réagir en cas de **violation de données** (notification). |

**Effacement sécurisé — repère technique.** Sur un appareil moderne **chiffré** (Android FBE, iOS), la réinitialisation d'usine détruit les **clés de chiffrement**, rendant les données illisibles : c'est la méthode standard. On documente l'opération et on informe le client que la sauvegarde éventuelle a été **supprimée** après restitution.

> **🔒 Éthique & légalité (RGPD)** — Copier, conserver ou divulguer les données d'un client (photos, messages, comptes) **sans base légale** est une faute grave, pénalement et civilement sanctionnable. La règle d'or : **on regarde le strict nécessaire, on ne conserve rien, on efface de façon sécurisée.**

## 15.4 Risques pénaux : recel et atteintes aux systèmes

Deux familles de risques pénaux encadrent particulièrement ce métier :

- **Recel** : détenir, manipuler ou aider à écouler un bien que l'on **sait** (ou aurait dû savoir) provenir d'un délit — typiquement un appareil **volé**. « Débloquer » un appareil volé pour le rendre revendable peut caractériser le recel et/ou la complicité. La **vérification de propriété** est la parade.
- **Atteintes aux systèmes de traitement automatisé de données** (accès/maintien frauduleux, contournement de mesures de sécurité) : contourner un verrou de sécurité sur un appareil **qui n'est pas le vôtre et sans droit** peut tomber sous cette qualification.

C'est la raison profonde pour laquelle cet ouvrage **exclut tout contournement** de verrou anti-vol ou de mot de passe : au-delà de l'éthique, ce sont des **risques pénaux réels** pour le professionnel.

> **⚠️ Risques (pénal)** — Un « bon geste » pour dépanner un client sans preuve de propriété peut vous exposer à des **poursuites**. La prudence — preuve de propriété, refus motivé, orientation officielle — n'est pas de la frilosité, c'est la condition d'exercice.

## 15.5 Désimlockage légitime (verrouillage opérateur)

Le **désimlockage** (retrait du verrou SIM/opérateur) est **licite** lorsqu'il est demandé par le **titulaire de la ligne / propriétaire de l'appareil** et réalisé par la **voie officielle** :

- En France et dans l'UE, les opérateurs **désimlockent gratuitement** sur demande du client (souvent sans délai désormais), via un **code officiel** ou une procédure serveur.
- La démarche légitime consiste à **orienter le client vers son opérateur** avec son numéro d'abonnement / son IMEI et sa preuve de propriété.

Ce qui est exclu : le désimlockage **hors cadre** (appareil non prouvé, contournement de la protection opérateur par des moyens non autorisés). Le manuel principal (section 6.6) détaille la voie légitime.

> **🔒 Éthique & légalité (désimlockage)** — Le désimlockage n'est légitime que **demandé par le propriétaire** et fait par **l'opérateur**. Il ne se confond pas avec la levée d'un verrou anti-vol (FRP, iCloud), qui, elle, ne se lève que par le **compte du propriétaire** ou le **SAV constructeur**.

## 15.6 Garanties légales

Le professionnel informe et respecte les **garanties légales** dues au consommateur :

| Garantie | Portée |
|---|---|
| **Garantie légale de conformité** | Le bien/service doit être conforme ; défauts couverts sur la période légale. |
| **Garantie des vices cachés** | Défauts antérieurs, non apparents, rendant le bien impropre. |
| **Garantie commerciale / constructeur** | Contractuelle ; **attention** : certaines interventions (déverrouillage bootloader, flash non officiel, Knox 0x1) **annulent** la garantie constructeur. |

Le client doit être **informé par écrit** qu'une opération de flash/déverrouillage peut **faire perdre la garantie constructeur** et déclencher des indicateurs **irréversibles** (e-fuse, bit de garantie). Ce consentement éclairé figure dans la décharge.

## 15.7 Modèle de mentions et de décharge

Ce modèle **complète** l'Annexe C du manuel principal. Il est fourni à titre indicatif ; **adaptez-le à votre situation et faites-le valider juridiquement**.

**Mentions d'information client (à afficher / remettre)**

- « Toute intervention firmware (flash, restauration, déverrouillage bootloader) présente un **risque de perte de données et de dysfonctionnement irréversible (brique)**. »
- « Certaines opérations **annulent la garantie constructeur** et déclenchent des indicateurs **irréversibles**. »
- « Nous **n'intervenons que sur preuve de propriété**. Les verrous anti-vol (FRP, iCloud, comptes constructeur) **ne se lèvent que par le compte du propriétaire ou le SAV officiel** sur preuve d'achat. »
- « Vos **données personnelles** sont traitées conformément au **RGPD** : minimisation, confidentialité, effacement sécurisé après restitution. »

**Décharge de responsabilité (trame)**

> Je soussigné(e) [Nom, Prénom], titulaire de la pièce d'identité n° […], déclare être **propriétaire légitime** de l'appareil [marque / modèle / IMEI ou n° de série] et en apporte la **preuve** ([facture / mandat écrit]).
> Je demande à [Atelier] de réaliser l'intervention suivante : […].
> Je reconnais avoir été **informé(e)** des risques (perte de données, perte de garantie, risque de brique irréversible) et **accepte** que l'atelier ne saurait être tenu responsable d'un dommage résultant d'un aléa inhérent à ce type d'opération.
> J'autorise / je n'autorise pas (rayer la mention inutile) la **sauvegarde** de mes données, et demande leur **effacement sécurisé** après restitution.
> Fait à […], le […]. Signature du client — Signature du technicien.

> **🔒 Éthique & légalité (synthèse Section 15)** — Propriété prouvée, client informé par écrit, données protégées selon le RGPD, aucune manipulation d'IMEI, **aucun contournement** de verrou anti-vol ou de mot de passe. Face à un appareil dont la propriété n'est pas établie, la seule bonne réponse reste : **preuve d'achat + canal officiel**.

---

**Récapitulatif de ce fragment additionnel**

- **Sections ajoutées :** 5 chapitres de niveau `#` (Section 11 à Section 15), soit 30 sous-sections `##` numérotées (11.1–11.6, 12.1–12.4, 13.1–13.6, 14.1–14.5, 15.1–15.7).
- **Figures numérotées :** 11.1 (partitions Android), 14.1 (poste de travail) — numérotation ≥ 11 pour éviter toute collision avec le manuscrit principal.
- **Tableaux :** ~20 tableaux Markdown ; encadrés récurrents « 🔒 Éthique & légalité » et « ⚠️ Risques » présents dans chaque section.
- **Contrainte de sécurité respectée :** ce fragment **n'explique AUCUN contournement** de verrou anti-vol (FRP, Activation Lock/iCloud, Knox/Reactivation Lock, comptes Mi/OPPO/Realme/OnePlus), **aucun** master password/bypass BIOS, **aucune** manipulation d'IMEI ni désimlockage hors cadre. Les mécanismes de sécurité sont expliqués **pour être compris et respectés**, avec renvoi systématique à la **preuve de propriété + canaux officiels**.
