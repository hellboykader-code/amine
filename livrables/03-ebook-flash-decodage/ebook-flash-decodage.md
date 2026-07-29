---
title: "Flash & Décodage : Maîtrise Complète"
subtitle: "Firmware, restauration logicielle et gestion légitime des verrous de propriété"
author: "MK Phone"
date: "2026"
lang: fr
toc: true
toc-depth: 3
numbersections: true
titlepage: true
titlepage-color: "1F2933"
titlepage-text-color: "FFFFFF"
book: true
documentclass: report
papersize: a4
fontsize: 11pt
geometry: "margin=2.2cm"
---

\newpage

# Couverture et présentation

**FLASH & DÉCODAGE : MAÎTRISE COMPLÈTE**

*Firmware, restauration logicielle et gestion légitime des verrous de propriété*

Édité et distribué par **MK Phone** — atelier de réparation et de maintenance mobile.

Édition 2026. Tous droits réservés.

Cet ouvrage est un guide professionnel de restauration logicielle (flash de firmware) et de récupération d'accès légitime sur les appareils mobiles, tablettes et ordinateurs. Il s'adresse aux techniciens de réparation, aux gérants de boutiques, aux étudiants en maintenance électronique et aux particuliers avertis qui interviennent **sur des appareils dont ils sont propriétaires ou pour lesquels ils disposent d'un mandat écrit**.

Il ne s'agit pas d'un catalogue de « trucs pour débloquer n'importe quel téléphone ». C'est un manuel de métier, honnête et exact, qui vous apprend à réinstaller proprement un système d'exploitation, à sortir un appareil d'un état bloqué, et à **orienter un client vers la seule voie possible lorsque la propriété n'est pas prouvée : le service après-vente officiel du constructeur ou de l'opérateur.**

---

\newpage

# AVERTISSEMENT LÉGAL ET DÉONTOLOGIQUE {#avertissement}

> **⚠️ À LIRE AVANT TOUTE MANIPULATION. EN OUVRANT ET EN UTILISANT CET OUVRAGE, VOUS ACCEPTEZ L'INTÉGRALITÉ DES CONDITIONS CI-DESSOUS.**

## Risque matériel : la brique définitive

Le flash de firmware est une opération à risque. Une coupure de courant, un câble défectueux, un fichier corrompu, un mauvais modèle de ROM ou une erreur de manipulation peuvent transformer un appareil parfaitement fonctionnel en une **« brique » (brick)**, c'est-à-dire un appareil qui ne démarre plus et qui peut être **irrécupérable**. Certaines erreurs (mauvaise version de bootloader, déclenchement d'un anti-rollback, écrasement d'une partition critique) sont **définitives** et ne se réparent qu'au niveau matériel (reprogrammation de la mémoire, remplacement de composants), voire pas du tout.

**MK Phone, l'auteur et le distributeur de cet ouvrage déclinent toute responsabilité** en cas de dommage matériel, de perte de données, de perte de garantie ou de tout autre préjudice résultant de la mise en œuvre des procédures décrites. **Vous agissez à vos propres risques.**

## Perte de garantie

De nombreuses opérations décrites ici (déverrouillage du bootloader, flash d'une ROM, modification des partitions) **annulent la garantie constructeur** et peuvent déclencher des indicateurs permanents (Knox 0x1 chez Samsung, e-fuse, bit de garantie). Ces indicateurs sont **irréversibles**. Informez toujours le client par écrit avant d'intervenir.

## Propriété de l'appareil : condition non négociable

**Vous ne devez intervenir que sur un appareil dont vous êtes propriétaire, ou pour lequel le propriétaire vous a donné un mandat écrit.** Un professionnel de la réparation a l'obligation déontologique — et souvent légale — de **s'assurer de la provenance licite** de l'appareil qu'on lui confie. Recevoir, manipuler ou « débloquer » un appareil volé ou perdu peut constituer un **recel** et engage votre responsabilité pénale.

Concrètement, avant toute intervention touchant à la sécurité ou à l'identité d'un appareil, exigez systématiquement :

- une **pièce d'identité** du client ;
- une **preuve de propriété** (facture d'achat originale, bon de commande, contrat) ;
- l'inscription au **registre client** (registre de police pour l'occasion, selon la réglementation locale) ;
- une **décharge de responsabilité signée**.

## Verrous anti-vol : ce livre ne les contourne pas

Les verrous de type FRP (Factory Reset Protection / compte Google), Apple Activation Lock (iCloud), Samsung Reactivation Lock, Mi Account, etc. **existent pour protéger les victimes de vol.** Ce livre **ne fournit AUCUN tutoriel, outil, code, exploit ou fichier permettant de les contourner** sans les identifiants ou la preuve de propriété.

À la place, la Section 6 (« Décodage ») documente **exclusivement la récupération d'accès légitime** : se reconnecter avec son propre compte, réinitialiser son mot de passe par les canaux officiels, et — lorsque le propriétaire ne peut pas prouver sa propriété — **le recours au SAV officiel du constructeur**, qui est la seule autorité habilitée à lever ces verrous sur preuve d'achat.

## Opérations réservées aux professionnels

Certaines opérations (interventions en mode EDL avec câbles de test, reprogrammation de mémoire, usage de « box » professionnelles sous licence) sont **réservées à des techniciens formés** disposant du matériel et du cadre juridique adéquats. Ne les tentez pas sans compétence.

## Protection des données (RGPD)

Lorsque vous manipulez l'appareil d'un client, vous accédez potentiellement à des **données personnelles**. Vous êtes soumis au **RGPD** (Règlement Général sur la Protection des Données, UE 2016/679) :

- ne consultez que ce qui est strictement nécessaire à l'intervention ;
- ne copiez, ne conservez, ne divulguez aucune donnée client ;
- proposez et documentez la **sauvegarde** puis l'**effacement sécurisé** ;
- tenez un registre des traitements si votre activité l'exige.

## Cadre d'usage

Cet ouvrage est vendu à titre de **documentation technique et pédagogique**. Il ne constitue ni un conseil juridique, ni une garantie de résultat. Les noms de marques (Samsung, Apple, Google, Xiaomi, OPPO, Realme, OnePlus, etc.) sont cités à titre informatif et appartiennent à leurs propriétaires respectifs. Les procédures officielles, liens et versions de logiciels évoluent : **vérifiez toujours la source officielle du constructeur** avant d'agir.

> **En résumé : propriété prouvée, sauvegarde faite, client informé, sinon on n'intervient pas.**

\newpage

# Introduction : à qui s'adresse ce livre et comment le lire

## L'esprit de l'ouvrage

Le métier de réparateur mobile a profondément changé. Il y a quinze ans, « réparer un téléphone » signifiait presque toujours une intervention matérielle : un écran cassé, une batterie fatiguée, un connecteur de charge à ressouder. Aujourd'hui, une part croissante des pannes est **logicielle** : un appareil coincé dans un redémarrage infini (*bootloop*), une mise à jour interrompue, un système corrompu après une chute de tension, une partition endommagée. Savoir **flasher un firmware** — c'est-à-dire réinstaller proprement le logiciel d'usine — est devenu une compétence aussi fondamentale que savoir remplacer un écran.

Parallèlement, les constructeurs ont massivement renforcé la **sécurité logicielle**. Les verrous anti-vol (FRP, Activation Lock, Reactivation Lock…) protègent efficacement les utilisateurs : un téléphone volé est aujourd'hui, dans l'immense majorité des cas, **inutilisable** pour le voleur. C'est une excellente nouvelle pour la société. Mais cela crée aussi des situations légitimes délicates : un client qui a oublié son mot de passe Google, une succession où l'appareil du défunt est verrouillé, une revente de parc d'entreprise mal préparée. Le rôle du professionnel n'est pas de « casser » ces verrous — il ne le peut pas, et il ne le doit pas — mais d'**accompagner le propriétaire légitime vers la bonne procédure officielle**.

Cet ouvrage assume pleinement cette double réalité :

1. Il vous rend **techniquement compétent** sur le flash de firmware, avec des procédures détaillées, marque par marque.
2. Il vous rend **déontologiquement irréprochable** sur les verrous de propriété : vous saurez expliquer, orienter, et refuser au bon moment.

## Ce que ce livre fait — et ce qu'il ne fait pas

**Ce livre fait :**

- expliquer en profondeur ce qu'est un firmware, un bootloader, un recovery, des partitions ;
- documenter le flash de ROM **stock officielle** pour réparer, mettre à jour, remettre à neuf un appareil qu'on possède ;
- lister les outils **officiels** et où les obtenir légalement ;
- décrire, pour chaque grande marque, la procédure de restauration complète ;
- expliquer **ce qu'est** chaque verrou anti-vol, **pourquoi** il existe, et la **voie légitime** de récupération d'accès sur preuve de propriété ;
- fournir une charte professionnelle et des encadrés déontologiques récurrents.

**Ce livre ne fait pas :**

- fournir des procédures de contournement de FRP, iCloud, Knox, Mi Account, etc. ;
- fournir des codes, exploits, serveurs, « crédits de bypass », fichiers de contournement ;
- expliquer comment « désimlocker » un téléphone hors du cadre légal ;
- encourager quelque manipulation que ce soit sur un appareil dont la propriété n'est pas prouvée.

Chaque fois que le vocabulaire courant du métier emploie le mot « déblocage » ou « décodage » dans un sens de contournement, **nous le réinterprétons systématiquement** comme « récupération d'accès légitime + rôle du SAV officiel ». C'est un choix assumé, et c'est la seule manière de pratiquer ce métier durablement et honnêtement.

## Comment est structuré l'ouvrage

- **Section 1 — Théorie & fondamentaux** : le socle de connaissances (firmware, ROM, bootloader, recovery, partitions, modes de flash, risques).
- **Section 2 — Logiciels & équipements** : la boîte à outils officielle du technicien.
- **Section 3 — Flash smartphone par marque** : les procédures concrètes, Samsung, Xiaomi, Google/Pixel, OPPO/Realme, OnePlus, iPhone.
- **Section 4 — Flash PC/BIOS** : mise à jour et récupération BIOS/UEFI.
- **Section 5 — Flash tablettes** : iPad et tablettes Android.
- **Section 6 — Décodage = récupération d'accès légitime** : chaque verrou, sa raison d'être, la voie officielle.
- **Annexes** : glossaire, charte professionnelle, modèles de documents.

## Conventions typographiques

Tout au long du livre, vous rencontrerez des encadrés récurrents :

> **🔒 Éthique & légalité** — rappel déontologique : exiger la preuve de propriété, refuser au bon moment, orienter vers le SAV.

> **⚠️ Risques** — le danger technique concret de l'opération décrite.

> **🛠️ Astuce pro** — le geste ou le réflexe qui fait gagner du temps et évite les erreurs.

> **❗ Erreur courante** — un problème fréquent et sa solution.

\newpage

# SECTION 1 — THÉORIE & FONDAMENTAUX

## Qu'est-ce que le firmware ?

Le **firmware** (« micrologiciel » en français) est le logiciel de bas niveau qui fait fonctionner un appareil électronique. Sur un smartphone, le firmware au sens large englobe l'ensemble des logiciels installés en usine : le **système d'exploitation** (Android, iOS), le **bootloader**, le **recovery**, les **pilotes** (modem/radio, capteurs), et les diverses partitions de sécurité et de configuration.

Contrairement à une application que l'on installe et désinstalle facilement, le firmware réside dans la **mémoire de stockage interne non volatile** de l'appareil (mémoire eMMC ou UFS sur mobile, mémoire flash NOR/SPI pour un BIOS de PC). Il est organisé en **partitions** — des zones de stockage cloisonnées, chacune avec un rôle précis.

On distingue :

- **Le firmware « stock » (d'usine)** : la version officielle fournie par le constructeur. C'est celui que nous flashons dans un cadre de réparation. Il est signé cryptographiquement par le constructeur, ce qui garantit son intégrité et son authenticité.
- **Le firmware « custom » (personnalisé)** : une version modifiée par la communauté (ROM custom comme LineageOS, /e/OS, etc.). Installer une ROM custom exige généralement de **déverrouiller le bootloader**, ce qui affaiblit la sécurité et efface toutes les données. C'est un choix légitime **du propriétaire sur son propre appareil**, mais ce n'est pas l'objet principal de cet ouvrage, qui privilégie la restauration stock.

## Qu'appelle-t-on une « ROM » ?

Le terme **ROM** (Read-Only Memory) est un abus de langage hérité de l'histoire de l'informatique mobile. À l'origine, il désignait la mémoire morte contenant le système. Aujourd'hui, dans le jargon, une **« ROM »** désigne simplement **un paquet de firmware complet** que l'on peut flasher : par exemple, un fichier Samsung Odin en quatre parties (BL, AP, CP, CSC), une image d'usine Pixel, ou un paquet MIUI/HyperOS Fastboot pour Xiaomi.

Une ROM stock officielle contient tout ce qu'il faut pour ramener l'appareil à son état d'usine : système, bootloader, modem, recovery, partitions de configuration régionale.

## Le bootloader : le chef d'orchestre du démarrage

Le **bootloader** est le tout premier programme qui s'exécute quand vous allumez l'appareil. Son rôle est de **préparer et de lancer le système d'exploitation**. Sur mobile, la séquence de démarrage est en réalité une chaîne de plusieurs étapes (bootloaders primaire, secondaire, etc.), mais on résume souvent l'ensemble sous le terme « bootloader ».

Le bootloader remplit deux fonctions essentielles :

1. **Amorcer le système** dans des conditions saines.
2. **Vérifier l'intégrité et l'authenticité** de ce qu'il s'apprête à lancer — c'est la base du **démarrage vérifié** (*Verified Boot* / AVB sur Android, Secure Boot / chaîne de confiance sur iOS).

### Bootloader verrouillé vs déverrouillé

- **Verrouillé (locked)** : état d'usine. Le bootloader n'accepte de lancer qu'un firmware **signé par le constructeur**. C'est la garantie que le système n'a pas été altéré (par un malware, par exemple). C'est l'état sûr et recommandé.
- **Déverrouillé (unlocked)** : le propriétaire a explicitement autorisé le chargement de firmwares non signés (ROM custom, root, etc.). **Le déverrouillage efface intégralement l'appareil** (mesure anti-vol : on ne peut pas déverrouiller le bootloader d'un téléphone volé pour accéder aux données sans tout effacer) et **affaiblit la sécurité**.

> **🔒 Éthique & légalité** — Le déverrouillage du bootloader est une **option officielle du constructeur** que le propriétaire active sur **son** appareil, via les Options développeur (« Déverrouillage OEM »). Ce n'est **pas** un contournement de verrou anti-vol. Nous ne le traitons que dans ce cadre. Un bootloader ne peut d'ailleurs pas être déverrouillé sans se connecter d'abord avec le compte du propriétaire (protection FRP), précisément pour empêcher son usage sur un appareil volé.

## Le recovery : le mode maintenance

Le **recovery** est un mini-environnement de maintenance, indépendant du système principal, stocké dans sa propre partition. Il permet d'effectuer des opérations quand le système ne démarre pas ou qu'on veut le réinitialiser :

- **Recovery stock** : fourni par le constructeur. Il permet la réinitialisation d'usine (*wipe data / factory reset*), l'effacement du cache, et l'installation de mises à jour officielles signées (fichiers OTA). Ses options sont volontairement limitées et sûres.
- **Recovery custom** (TWRP, OrangeFox…) : installé par le propriétaire après déverrouillage du bootloader. Il offre des fonctions avancées (sauvegarde/restauration de partitions, installation de paquets non signés). Réservé aux appareils dont le bootloader est déverrouillé légitimement.

Pour accéder au recovery, on utilise généralement une **combinaison de touches** au démarrage (voir Section 3, variable selon la marque).

## Anatomie des partitions Android

Comprendre les partitions est indispensable pour flasher sans casser. Voici les principales :

| Partition | Rôle | Conséquence si corrompue |
|---|---|---|
| **boot** | Contient le noyau Linux (kernel) et le ramdisk de démarrage. | Bootloop, écran figé au logo. |
| **system / super** | Le système Android lui-même (applications système, framework). Sur les appareils récents, `system`, `vendor`, `product` sont regroupés dans une partition dynamique **super**. | Système ne démarre pas, boucle de démarrage. |
| **vendor** | Pilotes et binaires spécifiques au matériel du fabricant. | Instabilités, capteurs HS, pas de démarrage. |
| **recovery** | L'environnement de maintenance. | Impossible d'entrer en recovery. |
| **vbmeta** | Métadonnées du **Verified Boot (AVB)** : empreintes cryptographiques servant à vérifier l'intégrité des autres partitions. | « device is corrupt », refus de démarrer. |
| **userdata** | Les données de l'utilisateur (applis, photos, réglages). | Perte de données ; c'est cette partition qu'on efface lors d'un factory reset. |
| **modem / radio (CP)** | Le firmware du modem (réseau, appels, données). | Pas de réseau, pas d'IMEI, « no service ». |
| **persist** | Données de calibration matérielle (capteurs, Wi-Fi/BT MAC). **À ne jamais écraser à la légère.** | Capteurs déréglés, problèmes définitifs. |
| **efs / nvram** | Identité réseau, IMEI, calibration radio. **Critique.** | Perte d'IMEI, appareil hors-réseau — parfois irréversible. |
| **frp / config** | Zone de la protection anti-réinitialisation. | (Ne pas manipuler.) |

> **⚠️ Risques** — Les partitions **persist**, **efs/nvram**, **modem** et **vbmeta** sont sensibles. Un flash mal ciblé (mauvais modèle, mauvais fichier) peut détruire l'IMEI ou la calibration de façon **irréversible**. Flashez toujours une ROM **complète et correspondant exactement au modèle**, jamais des partitions isolées récupérées ailleurs.

### vbmeta et le Verified Boot (AVB)

Le **Verified Boot d'Android (AVB)** établit une **chaîne de confiance** : le bootloader vérifie `vbmeta`, qui contient les empreintes des partitions critiques (boot, system, vendor…). Si une partition a été modifiée, l'empreinte ne correspond plus, et l'appareil affiche un avertissement voire refuse de démarrer (message *« Your device is corrupt »*).

Lors d'un flash stock légitime, on flashe **aussi la partition vbmeta officielle correspondante**, ce qui rétablit la cohérence de la chaîne. Dans certains cas de réparation (par exemple après le remplacement d'une carte-mère ou pour un appareil au bootloader déverrouillé), on utilise l'option `--disable-verity --disable-verification` sur vbmeta ; à ne faire qu'en connaissance de cause.

## Qu'est-ce que « flasher » ?

**Flasher**, c'est **écrire un firmware dans la mémoire de l'appareil**, en remplaçant tout ou partie du contenu des partitions. C'est l'équivalent mobile de « réinstaller le système d'exploitation » sur un ordinateur.

On flashe pour des raisons **légitimes et courantes** :

- **Sortir d'un bootloop** : le système est corrompu et redémarre en boucle ; un flash stock réinstalle un système sain.
- **Réparer un système corrompu** : après une mise à jour interrompue, une coupure de courant, une manipulation malheureuse.
- **Mettre à jour** vers une version officielle plus récente lorsque l'OTA échoue.
- **Repartir à neuf** un appareil qu'on possède : avant revente, remise en état de parc, ou simplement pour repartir sur une base propre.
- **Réinstaller après une réparation matérielle** : par exemple après un remplacement de carte-mère ou une reprogrammation.
- **Rétablir la version d'usine** après un essai de ROM custom.

> **🔒 Éthique & légalité** — Toutes ces raisons supposent que **vous êtes propriétaire de l'appareil** ou mandaté par écrit. Flasher n'est pas un moyen de « déverrouiller » un appareil dont on ne prouve pas la propriété : d'ailleurs, un flash stock **ne retire pas** les verrous anti-vol comme le FRP ou l'Activation Lock, qui subsistent après réinitialisation, précisément par conception.

## Qu'entend-on légitimement par « décodage » ?

Dans le jargon des boutiques, « décodage », « déblocage » ou « unlock » recouvrent des réalités très différentes, dont certaines sont **illégitimes** (contourner un verrou anti-vol) et d'autres **parfaitement légitimes**. Cet ouvrage ne traite **que** les secondes :

1. **Récupération d'accès à son propre compte** : vous êtes le propriétaire, vous avez oublié votre mot de passe Google / Apple ID / Samsung. La solution est la **procédure de récupération de compte officielle**.
2. **Levée d'un verrou par le SAV constructeur sur preuve de propriété** : vous êtes propriétaire mais ne pouvez plus accéder au compte (compte d'un proche décédé, appareil d'entreprise dont l'ancien administrateur est parti). Le **support officiel du constructeur** peut, sur présentation de la **facture d'achat** et du **numéro de série**, procéder à la levée.
3. **Désimlockage opérateur** : lever le verrouillage réseau imposé par un opérateur, par la **demande officielle et gratuite** auprès de cet opérateur (droit du consommateur en France et dans l'UE).
4. **Déverrouillage OEM du bootloader** : option officielle activée par le propriétaire sur son appareil (voir ci-dessus).

**La différence fondamentale entre « flasher » et « décoder » :**

- **Flasher** agit sur le **logiciel** (le firmware) : on réécrit le système. Cela n'affecte pas les verrous liés à un **compte** (Google, Apple, Samsung), qui sont ancrés côté serveur et dans des zones protégées.
- **« Décoder » au sens légitime** consiste à **rétablir un droit d'accès** (à un compte, à un réseau) par la **voie officielle** et sur **preuve de propriété**. Ce n'est jamais un contournement technique.

> **🔒 Éthique & légalité — encadré récurrent** : *si la personne n'est pas le propriétaire légitime et ne peut pas prouver la propriété, la seule voie est le SAV officiel. Un professionnel refuse un appareil sans preuve de propriété.* Ce principe sera répété à chaque procédure de la Section 6.

## Les modes d'accès bas niveau

Pour flasher, il faut placer l'appareil dans un **mode spécial** qui accepte de recevoir un firmware. Chaque écosystème a le sien.

### Fastboot (Android — Google, Xiaomi, OnePlus…)

**Fastboot** est un protocole et un mode de bas niveau présent sur la plupart des appareils Android à base Qualcomm/MediaTek. Depuis un PC, via l'outil `fastboot` (inclus dans les Platform-Tools de Google), on peut flasher des partitions, effacer des données, déverrouiller le bootloader (si autorisé), redémarrer. On y accède généralement en éteignant l'appareil puis en maintenant **Volume Bas + Power**.

### Download Mode / Odin Mode (Samsung)

Samsung utilise un mode propriétaire appelé **Download Mode** (ou *Odin Mode*), auquel on accède par une combinaison de touches (**Volume Bas + Volume Haut + branchement USB** sur les modèles récents, ou via Bixby/Power selon le modèle). On y flashe avec le logiciel **Odin** (Windows). Depuis Android, un renforcement appelé **VaultKeeper** exige que le bootloader soit officiellement autorisé au déverrouillage avant tout flash non signé.

### EDL — Emergency Download Mode (Qualcomm)

**EDL** (*Emergency Download*, mode 9008) est un mode d'urgence des puces Qualcomm, utilisé quand l'appareil est trop endommagé pour entrer en Fastboot ou Download. Il permet une reprogrammation de bas niveau via des paquets signés (*firehose/programmer*). **C'est un mode réservé aux professionnels** : il requiert des fichiers signés spécifiques (souvent sous licence constructeur ou distribués via des « box » pro), parfois des câbles de test (« deep flash »), et une erreur y est facilement fatale.

> **⚠️ Risques** — L'EDL avec des fichiers de provenance douteuse est l'une des premières causes de brique définitive et de perte d'IMEI. N'y recourez qu'avec des ressources officielles et une compétence avérée.

### DFU et Recovery Mode (Apple / iPhone-iPad)

Apple ne « flashe » pas au sens Android : on **restaure** via un firmware signé (fichier **IPSW**) au travers du **Finder** (macOS) ou d'**iTunes/Apple Devices** (Windows). Deux modes :

- **Recovery Mode** : mode de récupération standard, propose « Mettre à jour » ou « Restaurer ».
- **DFU (Device Firmware Update)** : mode de restauration de plus bas niveau, écran noir, utilisé quand le Recovery ne suffit pas. La combinaison exacte dépend du modèle (voir Section 3).

Apple ne signe que les **versions iOS en cours** : on ne peut restaurer que vers une version actuellement signée par les serveurs Apple. C'est une différence majeure avec Android.

## Les pilotes USB : le maillon souvent négligé

La liaison PC ↔ appareil repose sur des **pilotes USB** corrects. La moitié des « échecs de flash » des débutants viennent d'un pilote manquant ou en conflit :

- **Samsung** : pilotes USB Samsung (inclus dans Smart Switch ou téléchargeables séparément).
- **Qualcomm** : pilotes **Qualcomm HS-USB / QDLoader 9008** pour l'EDL.
- **MediaTek** : pilotes **MTK VCOM / Preloader**.
- **Google/Android générique** : pilote **Android USB (ADB/Fastboot)**, ou pilote **WinUSB/Google USB Driver**.
- **Apple** : pilote **Apple Mobile Device** (installé avec iTunes/Apple Devices).

> **🛠️ Astuce pro** — Sous Windows, gardez à portée l'outil de gestion des pilotes et vérifiez dans le **Gestionnaire de périphériques** que l'appareil est bien reconnu (pas de point d'exclamation jaune) avant de lancer un flash. Un port **USB 2.0** direct sur la carte-mère (pas de hub) est souvent plus fiable qu'un port USB 3.x ou un hub pour ces opérations.

## Les risques, en synthèse

Avant d'aller plus loin, ancrez cette hiérarchie des risques :

1. **Brique définitive** — mauvais firmware, coupure pendant l'écriture d'une partition critique, anti-rollback déclenché.
2. **Perte d'IMEI / de réseau** — écrasement de efs/nvram/modem, EDL mal maîtrisé.
3. **Perte de données** — tout flash sérieux suppose une **sauvegarde préalable** ; beaucoup effacent `userdata`.
4. **Perte de garantie** — indicateurs Knox/e-fuse irréversibles.
5. **Affaiblissement de la sécurité** — bootloader déverrouillé, vbmeta désactivé : l'appareil devient plus vulnérable aux malwares. À n'assumer qu'en connaissance de cause, sur son propre appareil.

### L'anti-rollback : un piège spécifique

L'**anti-rollback** (ARB) est un mécanisme de sécurité qui **empêche de revenir à une version de firmware plus ancienne** que celle déjà installée. Un compteur matériel (souvent via des e-fuses) est incrémenté à chaque montée de version. Si vous tentez de flasher une ROM dont l'indice ARB est **inférieur** à celui gravé dans l'appareil, le flash échoue — et selon les cas, l'appareil peut se retrouver **briqué** (par exemple, un flash interrompu qui laisse un bootloader à jour mais un système ancien refusé).

> **⚠️ Risques** — Avant tout flash, **vérifiez l'indice anti-rollback** de la ROM et de l'appareil (Xiaomi et certains modèles le documentent). En cas de doute, **ne flashez que la version actuelle ou plus récente**. L'ARB explique pourquoi « downgrader » est souvent impossible et dangereux.

### Pourquoi ces sécurités existent

Il est tentant, quand on débute, de percevoir ces verrous (bootloader signé, AVB, ARB, FRP, Activation Lock) comme des obstacles. Ce sont en réalité des **protections** : contre les malwares, contre le vol, contre la falsification. Un bon technicien **travaille avec** ces sécurités, pas contre elles : il restaure des firmwares signés, il respecte la chaîne de confiance, et il oriente vers les canaux officiels quand un verrou de propriété est en jeu.

\newpage

# SECTION 2 — LOGICIELS & ÉQUIPEMENTS

Cette section présente la **boîte à outils officielle** du technicien. Règle d'or : **ne téléchargez les logiciels et les firmwares que depuis leurs sources officielles**. Les sites tiers regorgent d'outils modifiés, de firmwares vérolés et d'utilitaires de « bypass » qui, au mieux, ne fonctionnent pas, au pire installent des malwares ou briquent l'appareil — et vous exposent juridiquement.

> **🔒 Éthique & légalité** — Beaucoup d'outils « miracles » vendus en ligne sont conçus pour **contourner des verrous anti-vol**. Nous ne les recommandons pas et ne les documentons pas. Un atelier sérieux se construit sur des outils officiels et des « box » professionnelles sous licence, utilisées dans un cadre légal et sur preuve de propriété.

## Vue d'ensemble : quel outil pour quelle marque

| Écosystème | Outil principal | Éditeur / source officielle | OS hôte |
|---|---|---|---|
| Samsung | **Odin** (flash) + **Smart Switch** (sauvegarde/restauration) | Samsung | Windows (Odin), Win/Mac (Smart Switch) |
| Google / Pixel | **Platform-Tools** (adb/fastboot) + **Android Flash Tool** | Google (developer.android.com) | Windows/macOS/Linux |
| Xiaomi | **Mi Flash Tool** (Fastboot/EDL) + recovery officiel | Xiaomi | Windows |
| OPPO / Realme / OnePlus | Outils/recovery officiels, **fastboot** | Constructeur | Windows/multi |
| Apple (iPhone/iPad) | **Finder** (macOS) / **Apple Devices** ou **iTunes** (Windows), **Apple Configurator** | Apple | macOS / Windows |
| Générique Android | **fastboot / adb** (Platform-Tools) | Google | Multi |

## Samsung : Odin et Smart Switch

### Odin

**Odin** est l'outil de flash de Samsung (historiquement interne, largement diffusé). Il fonctionne sous **Windows** et communique avec l'appareil en **Download Mode**. Il accepte les firmwares Samsung au format à quatre composants :

- **BL** : Bootloader.
- **AP** : Application Processor (le système, la plus grosse partie).
- **CP** : Core Processor / modem (radio, réseau).
- **CSC** : Country Specific Code (configuration régionale/opérateur). Deux variantes : `CSC` (efface les données, applique la config) et `HOME_CSC` (conserve les données si la CSC est identique).

Champs Odin : `BL`, `AP`, `CP`, `CSC`. Options par défaut sûres : **Auto Reboot** et **F. Reset Time** cochés ; **NE PAS** cocher *Re-Partition* sauf si vous flashez un fichier `.pit` maîtrisé.

> **🛠️ Astuce pro** — Utilisez une version d'Odin récente et adaptée (les modèles très récents peuvent exiger une version à jour). Lancez Odin **en administrateur**. Un seul appareil branché à la fois.

### Samsung Smart Switch

**Smart Switch** (Windows/macOS) sert officiellement à **transférer** et **sauvegarder** les données, et propose une fonction de **restauration logicielle d'urgence** (« Restauration logicielle du périphérique » / *Emergency software recovery*) qui réinstalle le firmware d'usine si l'appareil a un problème logiciel. C'est l'outil **grand public officiel** pour réinstaller le firmware sans Odin, sur preuve d'appareil possédé.

### Où obtenir le firmware Samsung officiel

Le firmware stock Samsung s'obtient par des services qui téléchargent depuis les **serveurs officiels Samsung (FUS)** :

- **Frija** et **Samfw / SamFirm** : utilitaires qui interrogent les serveurs officiels Samsung à partir du **modèle** (ex. `SM-S911B`) et du **CSC** (ex. `XEF` pour la France). Ils fournissent le firmware **officiel signé**, identique à l'OTA. Vérifiez toujours que le **modèle** et le **CSC** correspondent exactement à l'appareil.

> **❗ Erreur courante** — Flasher un firmware avec un **CSC/région qui ne correspond pas** peut provoquer des dysfonctionnements (bandes réseau, VoLTE) ou l'échec du flash. Relevez le CSC d'origine (dans *Paramètres > À propos*, ou via un code d'info) avant de télécharger.

## Google / Pixel : Platform-Tools et Android Flash Tool

### Android SDK Platform-Tools

Les **Platform-Tools** de Google contiennent **`adb`** (Android Debug Bridge) et **`fastboot`**, les deux commandes universelles du monde Android. Source officielle : le site développeur Android (`developer.android.com/tools/releases/platform-tools`). Toujours utiliser la **dernière version** pour supporter les appareils récents.

- **adb** : communique avec un appareil **démarré** (débogage USB activé) — installer des paquets, lire des logs, redémarrer en bootloader.
- **fastboot** : communique avec un appareil en **mode Fastboot/bootloader** — flasher des partitions, effacer, déverrouiller (si autorisé).

### Android Flash Tool

L'**Android Flash Tool** est un outil **web officiel de Google** (`flash.android.com`) qui flashe un Pixel (et certains appareils AOSP) **directement depuis le navigateur** via WebUSB, en téléchargeant l'image d'usine officielle. Idéal pour restaurer proprement un Pixel qu'on possède, sans manipuler les fichiers à la main.

### Images d'usine et OTA Pixel

Google publie **publiquement et officiellement** :

- les **Factory Images** (`developers.google.com/android/images`) : image complète pour restaurer entièrement l'appareil ;
- les **Full OTA Images** (`developers.google.com/android/ota`) : à appliquer via recovery (`adb sideload`) sans tout effacer.

> **🛠️ Astuce pro** — Pour un Pixel qu'on possède, l'**OTA sideload** permet souvent de réparer un système corrompu **sans effacer les données** : entrer en recovery, choisir *Apply update from ADB*, puis `adb sideload nom-du-fichier.zip`.

## Xiaomi : Mi Flash Tool et recovery officiel

### Mi Flash Tool

Le **Mi Flash Tool** (parfois « XiaoMiFlash ») est l'outil Windows officiel de Xiaomi pour flasher un paquet **Fastboot** (dossier contenant les images et des scripts `flash_all`) ou intervenir en **EDL**. Il propose trois options en bas d'écran :

- **clean all** : flash + effacement des données (recommandé pour repartir à neuf) ;
- **save user data** : tente de préserver les données ;
- **clean all and lock** : flash, efface et **reverrouille le bootloader** (à utiliser en connaissance de cause).

> **⚠️ Risques** — L'option *clean all and lock* sur une ROM inadaptée ou sur un modèle incompatible peut briquer l'appareil. Ne reverrouillez que sur une ROM stock officielle **exactement adaptée** au modèle.

### Recovery Xiaomi et paquets « recovery ROM »

Pour une réparation simple sur un appareil qu'on possède, Xiaomi propose des **Recovery ROM** (fichiers à appliquer depuis le recovery via *Updater*). C'est la voie la moins risquée quand elle est disponible.

### Où obtenir le firmware Xiaomi

- Site officiel Xiaomi (mises à jour HyperOS/MIUI selon région) ;
- **xiaomifirmwareupdater.com** : archive communautaire réputée qui **répertorie les firmwares officiels** (Fastboot et Recovery) par modèle et région, avec sommes de contrôle. Vérifiez le **nom de code** de l'appareil et la **région**.

> **❗ Erreur courante** — Confondre les paquets **Fastboot** (pour Mi Flash Tool) et **Recovery** (pour l'Updater du téléphone). Le mauvais type ne s'appliquera pas.

## OPPO / Realme / OnePlus

Ces marques (groupe BBK) fournissent des **mises à jour officielles** et, pour OnePlus, un outil de restauration :

- **OnePlus** : **MSM Download Tool** est l'outil de restauration bas niveau **officiel**, mais son accès est **restreint** (réservé au SAV et à certains techniciens agréés) car il ramène l'appareil en usine, y compris quand le système est gravement corrompu. Pour l'utilisateur, la voie normale est l'**OTA officielle** ou l'outil de récupération en ligne selon le modèle. OnePlus permet aussi le **fastboot** classique.
- **OPPO / Realme** : mises à jour via **ColorOS/realme UI** (OTA), fichiers de firmware officiels appliqués depuis le stockage, et outils SAV internes. Le **fastboot** est disponible sur les modèles qui l'exposent.

> **🔒 Éthique & légalité** — Les outils SAV bas niveau (MSM, DownloadTool OPPO) sont **distribués sous contrôle** au réseau agréé. Se les procurer par des canaux parallèles, souvent associés à des offres de « bypass », est à proscrire. Pour ces marques, la restauration se fait via les canaux officiels et, en cas de verrou de compte, via le **SAV constructeur sur preuve de propriété**.

## Apple : Finder, iTunes/Apple Devices, Apple Configurator

Apple ne fournit pas d'outil de « flash » tiers : tout passe par ses logiciels et ses **firmwares signés (IPSW)**.

- **Finder** (macOS Catalina et ultérieur) : gère l'iPhone/iPad, propose *Mettre à jour* et *Restaurer l'iPhone*.
- **Apple Devices** (nouvelle app Windows) ou **iTunes** (Windows plus ancien) : équivalent sous Windows.
- **Apple Configurator** (macOS) : outil pro pour gérer des flottes d'appareils, restaurer, et appliquer des profils. Utile en atelier pour restaurer plusieurs appareils.

Points clés Apple :

- On ne peut restaurer que vers une **version iOS actuellement signée** par Apple (pas de downgrade libre).
- La restauration efface l'appareil ; si l'**Activation Lock** est actif, l'appareil **redemandera l'identifiant Apple d'origine** après restauration (voir Section 6). C'est voulu : la restauration ne contourne **jamais** l'Activation Lock.

### Où obtenir un IPSW

Le Finder/iTunes télécharge automatiquement l'IPSW signé. Pour un téléchargement manuel, n'utilisez que des sources fiables qui **redirigent vers les serveurs Apple** et n'hébergent que des IPSW **officiels signés** (les sommes de contrôle doivent correspondre aux fichiers Apple). Ne jamais flasher un IPSW « modifié ».

## Câbles, alimentation et matériel d'atelier

Le meilleur logiciel ne rattrape pas un mauvais câble. Équipement recommandé :

| Élément | Recommandation | Pourquoi |
|---|---|---|
| **Câble USB** | Câble **data** de qualité, court (< 1 m), certifié. Éviter les câbles « charge seule ». | La stabilité de la liaison conditionne le succès du flash. |
| **Port USB** | USB **2.0** en direct sur la carte-mère, sans hub. | Meilleure compatibilité avec les pilotes de flash. |
| **Alimentation** | Poste stable, éviter les coupures ; sur portable, **batterie chargée + secteur**. | Une coupure pendant l'écriture d'une partition = brique. |
| **Onduleur (atelier)** | Onduleur pour le PC de flash. | Protège contre les micro-coupures. |
| **Batterie de l'appareil** | **> 50 %** avant flash, idéalement > 80 %. | Un flash sur batterie faible peut s'interrompre. |
| **Câbles de test / EDL** | Câbles « deep flash » ou boîtiers de test — **usage pro uniquement**. | Accès EDL sur appareils morts ; risque élevé. |
| **Station de récupération** | PC dédié, propre, hors ligne des risques, avec pilotes à jour. | Fiabilité et reproductibilité. |

## Les « box » professionnelles : cadre et honnêteté

Les **box professionnelles** (boîtiers matériels + logiciels vendus au réseau de la réparation) offrent des fonctions de service : lecture d'informations, réparation d'IMEI/réseau **sur preuve de propriété**, restauration bas niveau, gestion de firmwares signés. Elles fonctionnent généralement avec des **crédits/licences** achetés auprès de l'éditeur et un **enregistrement du professionnel**.

Points d'honnêteté indispensables :

- Beaucoup de ces box mettent aussi en avant des fonctions de **contournement de verrous anti-vol**. **Cet ouvrage ne couvre pas ces fonctions et en déconseille l'usage.** Utiliser une box pour retirer un FRP ou un iCloud sans preuve de propriété peut constituer un délit et, chez de nombreux éditeurs, viole les conditions d'utilisation.
- L'usage **légitime** d'une box (diagnostic, restauration de firmware signé, réparation réseau sur un appareil dont le client prouve la propriété) est parfaitement défendable et relève du métier.
- Exigez toujours, avant tout service via une box, la **preuve de propriété** et consignez l'intervention.

> **🔒 Éthique & légalité** — Une box est un outil. Sa légitimité dépend entièrement de **l'usage** et de la **preuve de propriété**. En cas de doute sur l'origine de l'appareil, on refuse et on oriente vers le SAV officiel.

## Tableau de correspondance versions OS / outils (repères)

Les versions évoluent ; vérifiez toujours la source officielle. À titre de repères en 2026 :

| Marque | OS actuel (surcouche) | Base Android | Outil de restauration |
|---|---|---|---|
| Samsung | One UI (6/7…) | Android 14/15 | Odin, Smart Switch |
| Google Pixel | Android « stock » | Android 14/15/16 | Android Flash Tool, Factory Images |
| Xiaomi | HyperOS (ex-MIUI) | Android 14/15 | Mi Flash Tool, Recovery ROM |
| OPPO/Realme | ColorOS / realme UI | Android 14/15 | OTA officiel, SAV |
| OnePlus | OxygenOS | Android 14/15 | OTA, MSM (SAV agréé) |
| Apple iPhone | iOS (17/18…) | — | Finder / Apple Devices, IPSW signé |

> **🛠️ Astuce pro** — Tenez dans l'atelier un **journal des versions** : pour chaque intervention, notez le modèle exact, le firmware flashé (nom de fichier + somme de contrôle), la version d'Odin/Mi Flash/Platform-Tools utilisée, et le résultat. Ce journal est précieux pour la reproductibilité et la traçabilité.

\newpage

# SECTION 3 — FLASH SMARTPHONE PAR MARQUE

Cette section détaille, marque par marque, la **restauration du firmware stock officiel** dans un **cadre strictement légitime** : réparer un bootloop, corriger un système corrompu, mettre à jour lorsque l'OTA échoue, ou remettre à neuf un appareil **qu'on possède** (avant revente, après réparation matérielle).

> **🔒 Éthique & légalité — préalable à TOUTE procédure de cette section** :
> 1. L'appareil vous appartient, ou vous disposez d'un **mandat écrit** du propriétaire.
> 2. Vous avez relevé l'**IMEI/numéro de série** et consigné l'intervention au **registre client**.
> 3. Vous avez **informé** le client des risques (brique, perte de données, perte de garantie) et fait signer une **décharge**.
> 4. Le flash **ne retire pas** les verrous anti-vol (FRP, Activation Lock, Reactivation Lock). Si un tel verrou est actif, il **restera** après le flash ; la seule voie est celle de la Section 6 (récupération légitime / SAV).

> **⚠️ Risques — rappel permanent** : sauvegarde préalable, batterie chargée, alimentation stable, **firmware correspondant EXACTEMENT au modèle et à la région**.

## Méthodologie générale (applicable à toutes les marques)

Avant d'entrer dans le détail par marque, voici la trame commune de toute intervention de flash :

1. **Identifier précisément l'appareil** : modèle commercial **et** référence technique (ex. `SM-S911B`), nom de code (ex. `dm3q`), région/CSC, version actuelle.
2. **Diagnostiquer** : est-ce vraiment logiciel ? (bootloop, corruption). Écarter une cause matérielle (batterie, connecteur, carte-mère).
3. **Sauvegarder** si l'appareil démarre encore (Smart Switch, sauvegarde cloud du propriétaire, copie des photos).
4. **Télécharger le firmware officiel** correspondant exactement.
5. **Vérifier l'intégrité** du fichier (somme de contrôle si fournie).
6. **Installer/valider les pilotes** USB.
7. **Placer l'appareil dans le bon mode** (Download/Fastboot/EDL/DFU).
8. **Flasher**, sans débrancher, sans couper l'alimentation.
9. **Premier démarrage** (peut être long : 5–15 min).
10. **Vérifier** : réseau, IMEI, capteurs, Wi-Fi/BT, appareil photo. Documenter.

---

## 3.1 Samsung (Galaxy)

### Modes et combinaisons de touches

- **Download Mode (Odin)** : appareil éteint. Sur les modèles récents (USB-C, sans bouton Home) : **maintenir Volume Haut + Volume Bas**, puis **brancher le câble USB** au PC. Un écran d'avertissement apparaît ; **Volume Haut** pour continuer.
- **Recovery** : éteint, puis **Volume Haut + Power** (modèles récents ; parfois avec Bixby). Relâcher au logo.

### Prérequis

- **Pilotes USB Samsung** installés (via Smart Switch ou pilotes seuls).
- **Odin** (version récente) sous Windows, lancé en administrateur.
- **Firmware officiel** téléchargé via **Frija** ou **Samfw** en indiquant le **modèle exact** (`SM-XXXX`) et le **CSC** (ex. `XEF` France, `EUX` multi-Europe).
- Batterie > 50 %.

### Où trouver le firmware stock officiel

- **Frija** / **SamFirm** : interrogent les serveurs **FUS officiels** Samsung. Renseigner Modèle + CSC → téléchargement du firmware **signé** (BL/AP/CP/CSC).
- **samfw.com** : miroir de firmwares officiels indexés par modèle/CSC. Vérifier la correspondance exacte.

### Procédure de flash stock (Odin) — pas à pas

1. Décompresser le firmware : vous obtenez 4 fichiers `.tar.md5` (BL, AP, CP, CSC/HOME_CSC).
2. Lancer **Odin** en administrateur.
3. Mettre l'appareil en **Download Mode** et le brancher. Odin affiche **« Added !! »** et un port **COM** en bleu dans la case ID:COM.
4. Charger les fichiers dans les champs correspondants :
   - **BL** → fichier BL
   - **AP** → fichier AP (le plus lourd, le chargement prend un moment)
   - **CP** → fichier CP
   - **CSC** → `CSC_...` (efface les données) **ou** `HOME_CSC_...` (conserve les données si même CSC)
5. Onglet **Options** : laisser **Auto Reboot** et **F. Reset Time** cochés. **Ne pas** cocher *Re-Partition* (sauf .pit maîtrisé).
6. Cliquer **Start**. Le flash dure quelques minutes. Barre verte + **« PASS ! »** = succès.
7. L'appareil redémarre. Premier démarrage long.

> **🛠️ Astuce pro** — Pour réparer un système corrompu **sans perdre les données** : utiliser **HOME_CSC** (au lieu de CSC) **à condition que le CSC soit identique** à celui d'origine. Sinon, l'appareil sera effacé.

### Temps estimé

- Téléchargement firmware : 10–30 min (5–8 Go).
- Flash Odin : 5–10 min.
- Premier démarrage : 5–15 min.

### Cas d'usage légitimes

- **Bootloop** après OTA interrompue : reflasher le firmware complet.
- **Remise à neuf avant revente** d'un Galaxy **qu'on possède** : flash CSC (efface tout) → repart d'usine. *(Rappel : si un compte Samsung/Google était configuré, retirer d'abord la protection de réinitialisation via le compte — voir Section 6 ; sinon le FRP restera.)*
- **Après réparation carte-mère** : réinstaller le firmware pour repartir sur une base saine.

### Erreurs courantes & solutions (Samsung)

| Symptôme | Cause probable | Solution |
|---|---|---|
| Odin **FAIL** à l'étape `aboot`/`sboot` | Bootloader plus ancien que celui installé (anti-rollback) | Flasher une version **égale ou plus récente**. Jamais downgrade du BL. |
| **« Custom binary blocked by FRP/OEM lock »** | Le VaultKeeper/FRP bloque un flash non conforme | Se connecter au **compte Google/Samsung du propriétaire**, activer *Déverrouillage OEM* (voir §6) ; ou flasher un firmware **officiel signé** adapté. |
| Odin ne détecte pas l'appareil (pas de COM) | Pilote manquant / câble « charge seule » / port | Réinstaller pilotes Samsung, câble data, port USB 2.0. |
| **« SW REV CHECK FAIL »** | Version binaire de la ROM < version appareil | Prendre un firmware au **bon indice binaire** (U1, U2…) ≥ appareil. |
| Reste en Download après « PASS » | Normal si *Auto Reboot* décoché | Redémarrer manuellement (Vol Bas + Power). |
| **« device is corrupt »** au boot | vbmeta/partition incohérente | Reflasher le **firmware complet officiel** (BL+AP+CP+CSC). |

> **⚠️ Risques (Samsung)** — Le flag **Knox** passe à **0x1** de façon **irréversible** en cas de flash non officiel ; certaines fonctions (Samsung Pay, Dossier sécurisé) sont alors définitivement perdues. Le flash d'un firmware **officiel signé** ne déclenche pas Knox, mais reste une opération à risque.

> **🔒 Éthique & légalité (Samsung)** — Le **Reactivation Lock** (compte Samsung) et le **FRP** (compte Google) **survivent** au flash. Ne tentez jamais de les contourner : orientez vers la récupération de compte ou le SAV Samsung sur preuve d'achat (Section 6.4).

---

## 3.2 Xiaomi (Redmi, POCO, HyperOS/MIUI)

### Modes

- **Fastboot** : éteint, puis **Volume Bas + Power**. Écran « FASTBOOT ».
- **Recovery** : éteint, **Volume Haut + Power**.
- **EDL (9008)** : **pro uniquement**, via test point ou commande ; non détaillé ici pour le grand public.

### Prérequis

- **Mi Flash Tool** (Windows), pilotes Xiaomi/Qualcomm installés.
- **Platform-Tools** (fastboot) pour les opérations manuelles.
- Firmware **Fastboot** (pour Mi Flash) **ou** **Recovery** (pour l'Updater) correspondant au **nom de code** et à la **région**.
- Batterie > 50 %.

### Le verrouillage bootloader Xiaomi

Xiaomi impose un **délai d'attente officiel** (souvent 7 jours ou plus) avant d'autoriser le déverrouillage du bootloader, via l'outil **Mi Unlock** et un **compte Mi lié**. Le déverrouillage **efface tout** et affaiblit la sécurité. **Cela reste une option du propriétaire sur son appareil** ; ce n'est pas un contournement.

> **🔒 Éthique & légalité (Xiaomi)** — Le flash **Fastboot avec Mi Flash Tool** d'une **ROM stock signée** est possible même bootloader verrouillé **uniquement** avec les paquets officiels signés adaptés. Ne cherchez pas à contourner le délai ou le compte Mi : c'est une protection anti-vol.

### Où trouver le firmware Xiaomi officiel

- **Site officiel Xiaomi** / mises à jour HyperOS de la région.
- **xiaomifirmwareupdater.com** : répertorie les paquets **officiels** (Fastboot et Recovery) par **nom de code** (ex. `spes`, `garnet`) et région, avec sommes de contrôle.

### Procédure A — Recovery ROM (la moins risquée)

1. Télécharger la **Recovery ROM** officielle du modèle/région.
2. Copier le fichier `.zip` dans le stockage (ou via l'app *Sécurité > Mise à jour système > menu > Choisir un paquet*).
3. Lancer la mise à jour ; l'appareil vérifie la signature et applique.

Idéal pour corriger un système instable **sans déverrouiller** ni tout effacer.

### Procédure B — Flash Fastboot (Mi Flash Tool)

1. Télécharger le paquet **Fastboot** officiel (dossier avec `images/` et `flash_all*.bat`).
2. Ouvrir **Mi Flash Tool**, cliquer **Select**, pointer le dossier extrait.
3. Mettre l'appareil en **Fastboot**, brancher, cliquer **Refresh** → l'appareil apparaît.
4. Choisir l'option en bas :
   - **clean all** : flash + efface (repartir à neuf) ;
   - **save user data** : tente de préserver les données ;
   - **clean all and lock** : *(bootloader reverrouillé — uniquement ROM stock exacte)*.
5. Cliquer **Flash**. Attendre « success ».

> **⚠️ Risques (Xiaomi)** — **N'utilisez *clean all and lock* que sur une ROM stock officielle exactement adaptée au modèle.** Reverrouiller avec une ROM incompatible ou en cas d'ARB défavorable **brique** l'appareil. Vérifiez l'**anti-rollback** avant flash.

### Temps estimé

- Recovery ROM : 5–15 min. Fastboot : 5–10 min. Premier démarrage : 5–15 min.

### Cas d'usage légitimes

- Réparer un bootloop MIUI/HyperOS ; corriger une mise à jour ratée ; remettre à neuf un Redmi/POCO **qu'on possède** avant revente (clean all).

### Erreurs courantes & solutions (Xiaomi)

| Symptôme | Cause | Solution |
|---|---|---|
| **« This MIUI version can't be installed on this device »** | Mauvais nom de code / région | Reprendre le firmware du **bon codename**. |
| Mi Flash : **« error: FAILED (remote: Token verification failed) »** | Flash verrouillé refusant image non signée / device locked | Utiliser une **ROM officielle signée** adaptée, ou déverrouiller officiellement (compte Mi). |
| **Anti-rollback** : brique après downgrade | Indice ARB de la ROM < appareil | Ne flasher que version **≥** ; downgrade impossible. |
| Fastboot non détecté | Pilotes Qualcomm/ADB | Réinstaller pilotes, câble/port. |
| Bloqué sur logo Mi/Redmi après flash | Flash partiel / mauvaise ROM | Reflasher **clean all** avec la bonne ROM Fastboot. |

---

## 3.3 Google Pixel

Le Pixel est l'appareil Android le plus **ouvert et documenté** : Google publie officiellement images d'usine, OTA, et outils. C'est le cas d'école de la restauration propre.

### Modes

- **Bootloader/Fastboot** : éteint, **Volume Bas + Power**.
- **Recovery** : depuis le bootloader, sélectionner *Recovery* avec Volume + Power.

### Trois voies officielles

1. **Android Flash Tool (navigateur)** — le plus simple : `flash.android.com`, brancher le Pixel en Fastboot (débogage USB autorisé), suivre l'assistant, l'outil télécharge et flashe l'**image d'usine officielle**. Idéal pour restaurer entièrement un Pixel qu'on possède.
2. **Full OTA sideload** — réparer **sans effacer** : télécharger l'OTA officielle (`developers.google.com/android/ota`), entrer en recovery → *Apply update from ADB* → `adb sideload fichier-ota.zip`.
3. **Factory image manuelle** — pour les techniciens : télécharger la **Factory Image** (`developers.google.com/android/images`), extraire, brancher en Fastboot, exécuter `flash-all.bat`/`flash-all.sh`.

### Prérequis

- **Platform-Tools** à jour (adb/fastboot officiels Google).
- Navigateur compatible WebUSB (pour Flash Tool).
- Batterie > 50 %.

### Procédure — Full OTA sideload (répare sans effacer)

1. Télécharger l'**OTA complète** correspondant **exactement** au modèle (ex. `oriole` pour Pixel 6).
2. `adb reboot recovery` (ou combinaison de touches) → au menu recovery.
3. Sélectionner **Apply update from ADB**.
4. Sur le PC : `adb sideload nom-du-fichier-ota.zip`.
5. Attendre 100 %, redémarrer.

### Procédure — Factory image (restauration complète)

1. `flash-all` réinitialise l'appareil aux images d'usine. **⚠️ efface les données** (sauf à retirer `-w` du script, réservé aux avertis).
2. Vérifier le démarrage.

> **🛠️ Astuce pro** — Sur Pixel, le **déverrouillage OEM** se fait via *Options développeur > Déverrouillage OEM*, puis `fastboot flashing unlock`. **Uniquement sur son propre appareil**, en sachant que **tout est effacé**. Pour restaurer une garantie de sécurité maximale, `fastboot flashing lock` reverrouille après avoir reflashé une image d'usine intacte.

### Erreurs courantes & solutions (Pixel)

| Symptôme | Cause | Solution |
|---|---|---|
| `fastboot` ne voit pas l'appareil | Pilote / Platform-Tools ancien | Mettre à jour Platform-Tools, vérifier pilote. |
| **FAILED (remote: 'not allowed in locked state')** | Bootloader verrouillé | Ne pas forcer ; utiliser Flash Tool / OTA officielle (pas besoin de déverrouiller). |
| `adb sideload` s'arrête | OTA ne correspondant pas au device | Reprendre l'OTA du **bon nom de code**. |
| Bootloop après flash partiel | Slots A/B incohérents | Reflasher via **flash-all** complet. |

---

## 3.4 OPPO / Realme

### Modes

- **Fastboot** (si exposé) : éteint, **Volume Bas + Power**.
- **Recovery ColorOS/realme UI** : éteint, **Volume Bas + Power** (selon modèle), menu de maintenance.

### Voie officielle recommandée

Pour un appareil **qu'on possède** :

1. **OTA** via *Paramètres > Mise à jour du logiciel* (voie normale).
2. **Firmware officiel local** : certains modèles acceptent un paquet firmware officiel (`.ozip`/`.ofp` signé) appliqué via le menu de mise à jour locale. **N'utiliser que des fichiers officiels signés** du modèle/région.
3. **SAV agréé** pour les restaurations bas niveau (outils internes OPPO/Realme non distribués publiquement).

> **🔒 Éthique & légalité (OPPO/Realme)** — Les outils de flash bas niveau (DownloadTool) et les serveurs associés sont **réservés au réseau agréé** et souvent liés à des offres de « bypass ». **Nous ne les documentons pas.** En cas de verrou de compte, orientez vers le **SAV OPPO/Realme sur preuve d'achat** (Section 6.5).

### Erreurs courantes

| Symptôme | Cause | Solution |
|---|---|---|
| Firmware local refusé | Fichier non signé / mauvaise région | Reprendre le **firmware officiel** exact. |
| Bloqué au logo | Système corrompu | Recovery → *Wipe data* (efface) ou SAV. |
| Fastboot indisponible | Non exposé sur le modèle | Passer par OTA/recovery officiel ou SAV. |

---

## 3.5 OnePlus (OxygenOS)

### Modes

- **Fastboot** : éteint, **Volume Bas + Power** (ou Vol Haut+Bas+Power selon modèle).
- **Recovery** : menu OxygenOS.

### Voies officielles

1. **OTA officielle** via *Paramètres > Mise à jour du système* (voie normale).
2. **Local upgrade** : sur certains modèles, appliquer un **paquet OxygenOS officiel** (`.zip` complet) via *Mise à jour locale*. Répare un système instable **sans tout effacer** si le paquet correspond.
3. **MSM Download Tool** : outil de **restauration bas niveau officiel**, mais **réservé au SAV/techniciens agréés**. Il ramène l'appareil en usine même gravement corrompu.

> **🔒 Éthique & légalité (OnePlus)** — Le **MSM Tool** circule sur des forums, souvent avec des offres douteuses. Son usage légitime est **la restauration sur un appareil qu'on possède**, avec le firmware **officiel** du modèle. Il **ne retire pas** les verrous de compte. En cas de verrou de propriété, SAV officiel sur preuve d'achat.

### Procédure — Local upgrade (répare sans effacer)

1. Télécharger le **paquet complet OxygenOS officiel** du modèle/région.
2. *Paramètres > À propos > détails de version > (menu) Mise à jour locale* (le chemin varie).
3. Sélectionner le `.zip`, installer, redémarrer.

### Erreurs courantes

| Symptôme | Cause | Solution |
|---|---|---|
| Paquet local refusé | Mauvaise région / paquet incrémental | Prendre le **paquet complet** de la bonne région. |
| Bootloop persistant | Corruption profonde | Restauration officielle (MSM en SAV agréé). |
| Fastboot verrouillé refuse le flash | Bootloader locked | Ne pas forcer ; passer par les voies officielles. |

---

## 3.6 iPhone — restauration via DFU/Recovery (Finder / Apple Devices)

Sur iPhone, on ne « flashe » pas par partitions : on **restaure** avec un **IPSW signé** via **Finder** (macOS) ou **Apple Devices/iTunes** (Windows). C'est la voie **officielle et unique**.

### Modes

- **Recovery Mode** : brancher au PC, puis, selon le modèle, presser brièvement **Vol +**, puis **Vol −**, puis maintenir **Power** jusqu'à l'écran « connectez-vous à l'ordinateur ».
- **DFU Mode** (plus bas niveau, écran noir) : séquence précise et chronométrée, variable selon le modèle. Sur iPhone récents : Vol + (bref), Vol − (bref), maintenir **Power** ~10 s, puis maintenir **Power + Vol −** ~5 s, relâcher **Power** en gardant **Vol −** ~10 s. L'écran reste **noir** mais l'ordinateur détecte un appareil en mode récupération.

### Restaurer (efface) vs Mettre à jour (conserve)

- Dans Finder/Apple Devices, **« Mettre à jour »** tente de réinstaller iOS **sans effacer** les données (à privilégier pour réparer un système).
- **« Restaurer l'iPhone »** **efface tout** et réinstalle iOS — pour repartir à neuf un iPhone **qu'on possède**.

### Procédure — restauration

1. Brancher l'iPhone au Mac/PC, ouvrir **Finder** (ou **Apple Devices**).
2. Mettre l'iPhone en **Recovery** (ou **DFU** si Recovery échoue).
3. La fenêtre propose **Mettre à jour** ou **Restaurer**. Choisir selon le besoin.
4. Le logiciel télécharge l'**IPSW signé** et l'installe.

### Points essentiels Apple

- On ne peut restaurer que vers une **version iOS actuellement signée** (pas de downgrade libre).
- Si l'appareil ne se restaure pas dans un délai, il repasse en Recovery ; retenter en DFU.
- **L'Activation Lock (iCloud) survit à la restauration** : après restauration, l'iPhone **redemandera l'identifiant Apple d'origine**. C'est **voulu** et **ne se contourne pas** (voir Section 6.2).

### Temps estimé

- Téléchargement IPSW : 10–25 min. Restauration : 10–20 min. Configuration : 5–10 min.

### Cas d'usage légitimes

- iPhone en **bootloop** (logo Apple en boucle) après mise à jour ratée : *Mettre à jour* en Recovery (conserve les données si possible), sinon *Restaurer*.
- Remettre à neuf un iPhone **qu'on possède** avant revente : **d'abord désactiver « Localiser » et se déconnecter de l'identifiant Apple** (Réglages > compte > Localiser), **puis** *Réinitialiser/Restaurer*. Sinon l'Activation Lock restera.

### Erreurs courantes & solutions (iPhone)

| Code / symptôme | Cause | Solution |
|---|---|---|
| **Erreur 4013 / 4014 / 9** | Liaison USB instable / matériel | Câble/port différent (USB direct), autre PC ; si persistant, cause matérielle. |
| **Erreur 3194** | Serveur de signature / hosts modifié | Vérifier le fichier `hosts`, réseau, réessayer ; ne restaurer que vers version signée. |
| **Erreur 14** | Corruption pendant le transfert | Recommencer en **DFU**, autre câble. |
| Écran **« Localiser mon iPhone » demandé** après restauration | **Activation Lock actif** | **Ne pas contourner.** Se connecter avec l'Apple ID d'origine, ou SAV Apple sur preuve d'achat (§6.2). |
| Reste en Recovery en boucle | Version non signée / échec | Repasser en **DFU** et *Restaurer*. |

> **🔒 Éthique & légalité (iPhone)** — La restauration DFU est une opération **logicielle** légitime. Elle ne retire **jamais** l'Activation Lock. Si l'iPhone demande un identifiant Apple que le client ne connaît pas et ne peut prouver comme sien, **on refuse** et on oriente vers le support Apple avec preuve d'achat.

---

## 3.7 Récapitulatif des combinaisons de touches (repère rapide)

| Marque | Fastboot / Download | Recovery |
|---|---|---|
| Samsung | Vol Haut + Vol Bas + brancher USB (Download) | Vol Haut + Power |
| Xiaomi/Redmi/POCO | Vol Bas + Power (Fastboot) | Vol Haut + Power |
| Google Pixel | Vol Bas + Power (Bootloader) | via Bootloader → Recovery |
| OPPO/Realme | Vol Bas + Power (si exposé) | Vol Bas + Power (menu) |
| OnePlus | Vol Bas + Power | menu OxygenOS |
| iPhone | Recovery/DFU (séquence chronométrée) | idem |

> **🛠️ Astuce pro** — Les combinaisons varient selon les générations. En cas de doute, consultez la **page support officielle** du modèle exact plutôt que de forcer une combinaison au hasard.

\newpage

# SECTION 4 — FLASH PC / BIOS-UEFI

Le firmware d'un ordinateur — le **BIOS**, aujourd'hui presque toujours de type **UEFI** — est le programme qui initialise le matériel et lance le système d'exploitation. Le mettre à jour ou le réinitialiser relève de la même logique de prudence que le flash mobile : **une coupure pendant l'écriture peut rendre la carte-mère inutilisable**.

> **🔒 Éthique & légalité (PC)** — Comme pour le mobile, on n'intervient que sur une machine **qu'on possède ou qu'on est mandaté à réparer**. La « récupération de mot de passe BIOS » ne se fait **jamais** par des « master passwords » de contournement : uniquement par des voies légitimes (retrait de la pile CMOS sur sa propre machine, ou constructeur sur preuve de propriété).

## Accéder au BIOS/UEFI

Au démarrage, presser la touche du fabricant (varie) :

| Fabricant | Touche courante |
|---|---|
| Dell | F2 (setup), F12 (boot menu) |
| HP | F10 (setup), F9 (boot), Esc (menu) |
| Lenovo | F1 ou F2 (setup), F12 (boot), bouton Novo |
| ASUS | Del ou F2 (setup), F8 (boot) |
| Acer | F2 (setup), F12 (boot) |
| MSI | Del (setup), F11 (boot) |
| Gigabyte | Del (setup), F12 (boot) |

Sous Windows 10/11, on peut aussi entrer via *Paramètres > Système > Récupération > Démarrage avancé > Dépannage > Options avancées > Changer les paramètres du micrologiciel UEFI*.

## Mettre à jour le BIOS/UEFI (procédure fabricant)

> **⚠️ Risques (BIOS)** — Ne mettez à jour le BIOS **que si nécessaire** (correctif de sécurité, compatibilité d'un nouveau CPU/RAM, bug documenté). Une mise à jour ratée peut **briquer la carte-mère**. Sur portable : **batterie chargée + secteur branché**. Ne jamais couper l'alimentation pendant l'opération.

Étapes générales (toujours suivre la **notice officielle du fabricant** de la carte-mère ou du PC) :

1. **Identifier** le modèle exact de la carte-mère/PC et la **version BIOS actuelle** (visible dans le setup ou via *msinfo32* sous Windows).
2. **Télécharger** la mise à jour BIOS **uniquement sur le site officiel** du fabricant (page « Support/Drivers » du modèle exact).
3. **Vérifier** la somme de contrôle si fournie et lire les **notes de version** (parfois une mise à jour est irréversible / non-downgradable).
4. Appliquer par la méthode **officielle** :
   - **Depuis l'UEFI** : outil intégré (ex. *EZ Flash* ASUS, *M-Flash* MSI, *Q-Flash* Gigabyte) lisant le fichier depuis une **clé USB FAT32**.
   - **Depuis Windows** : utilitaire officiel du fabricant (moins recommandé que la méthode UEFI).
   - **BIOS Flashback / Crash-Free** : certaines cartes flashent depuis un port USB dédié **sans CPU/RAM** (utile en récupération).
5. **Ne rien toucher** pendant l'écriture. La machine redémarre seule.
6. **Charger les réglages par défaut** (*Load Optimized Defaults*) après mise à jour, puis reconfigurer si besoin.

> **🛠️ Astuce pro** — Notez la **version précédente** et conservez-la si le fabricant autorise le downgrade. Beaucoup de correctifs de microcode/sécurité (ex. mitigations, mises à jour de microcode CPU) **ne sont pas réversibles** : lisez toujours les notes.

## Réinitialiser le CMOS (réglages BIOS)

Le **CMOS** conserve les réglages du BIOS (heure, ordre de démarrage, réglages matériels). Le réinitialiser ramène le BIOS **aux réglages d'usine** — utile en cas de mauvais réglage empêchant le démarrage. **Cela ne casse aucune protection** : c'est une opération de maintenance normale sur sa propre machine.

Trois méthodes :

1. **Option logicielle** : dans le setup, *Load Setup Defaults / Reset to Default*, puis *Save & Exit*.
2. **Cavalier « Clear CMOS »** : sur une carte-mère de bureau, déplacer le **jumper CLR_CMOS** quelques secondes (PC éteint, débranché), puis le remettre.
3. **Retrait de la pile CMOS** : PC éteint et débranché, retirer la **pile bouton (CR2032)** quelques minutes, la remettre. Réinitialise l'horloge et les réglages.

> **⚠️ Risques** — Toujours **débrancher l'alimentation** et se **décharger de l'électricité statique** avant d'ouvrir un PC. Sur un portable, l'accès à la pile CMOS peut nécessiter un démontage important : réservé aux techniciens.

## Récupération d'un mot de passe BIOS — voie légitime uniquement

Un mot de passe BIOS/UEFI (mot de passe *superviseur* ou *à l'allumage*) protège l'accès aux réglages ou au démarrage. **C'est une protection légitime**, notamment en entreprise. Il n'existe **pas**, dans cet ouvrage, de « master password » ni d'astuce de contournement.

Voies **légitimes** de récupération, **sur sa propre machine ou avec mandat** :

- **PC de bureau assemblé / carte-mère standard** : un mot de passe **utilisateur/setup** stocké en CMOS s'efface généralement en **réinitialisant le CMOS** (jumper Clear CMOS ou retrait de la pile) — voir ci-dessus. C'est légitime **parce que vous êtes propriétaire de la machine**.
- **Portables et PC de marque** : le mot de passe est souvent stocké dans une **puce sécurisée** (pas seulement le CMOS) et **ne s'efface pas** en retirant la pile. La **seule voie** est alors de **contacter le fabricant** (Dell, HP, Lenovo…) via le **support officiel**, en fournissant la **preuve de propriété** (facture, numéro de série). Le constructeur applique sa procédure (génération d'un code de déverrouillage lié au service tag, intervention en atelier agréé).
- **Machine d'entreprise** : passer par le **service informatique** / l'administrateur, qui détient les droits.

> **🔒 Éthique & légalité (mot de passe BIOS)** — Si la personne ne peut **pas prouver la propriété** de la machine, **on refuse** l'intervention et on oriente vers le constructeur. Les « générateurs de mot de passe maître » et scripts de contournement diffusés en ligne sont à proscrire : les employer sur un appareil qui n'est pas le sien peut constituer un accès frauduleux.

## Récapitulatif Section 4

| Besoin | Voie légitime |
|---|---|
| Mettre à jour le BIOS | Fichier officiel du fabricant + outil UEFI intégré, alimentation stable. |
| Corriger un mauvais réglage | *Load Defaults* ou Clear CMOS. |
| Mot de passe BIOS (PC de bureau perso) | Clear CMOS / retrait pile (propriétaire). |
| Mot de passe BIOS (portable/marque) | **Support constructeur + preuve de propriété**. |

\newpage

# SECTION 5 — FLASH TABLETTES

Les tablettes suivent **exactement la même logique** que les smartphones : même écosystème, mêmes outils, mêmes précautions. On distingue les **iPad** (Apple) et les **tablettes Android** (Samsung Galaxy Tab, Xiaomi Pad, Lenovo Tab, etc.).

## 5.1 iPad (DFU / Finder)

L'iPad se restaure comme l'iPhone : via **Finder** (macOS) ou **Apple Devices/iTunes** (Windows), avec un **IPSW signé**.

### Modes selon le modèle

- **iPad avec bouton Home** : Recovery = maintenir **Home + Power** ; DFU = séquence Home+Power chronométrée.
- **iPad sans bouton Home (Face ID)** : comme les iPhone récents = **Vol + (bref), Vol − (bref), maintenir Power** pour Recovery ; DFU via la séquence Power+Vol− chronométrée.

### Procédure

1. Brancher l'iPad, ouvrir **Finder/Apple Devices**.
2. Entrer en **Recovery** (ou **DFU** si besoin).
3. Choisir **Mettre à jour** (conserve les données) ou **Restaurer** (efface).
4. Le logiciel installe l'**IPSW signé**.

> **🔒 Éthique & légalité (iPad)** — Comme pour l'iPhone, l'**Activation Lock survit à la restauration**. Avant de remettre à neuf un iPad **qu'on possède** : *Réglages > compte > Localiser* désactivé + déconnexion Apple ID. Sinon, l'iPad redemandera l'identifiant d'origine, **qui ne se contourne pas** (§6.2).

### Cas d'usage légitimes

- iPad figé au logo après mise à jour : *Mettre à jour* en Recovery.
- Remise à neuf avant don/revente d'un iPad **possédé** : désactiver Localiser puis *Restaurer*.

### Erreurs courantes

Identiques à l'iPhone (erreurs 4013/9/14/3194) — voir §3.6. Câble/port fiable, DFU si Recovery échoue, version signée uniquement.

## 5.2 Tablettes Android

### Samsung Galaxy Tab

Même procédure que les smartphones Samsung (§3.1) : **Download Mode** (souvent **Vol Haut + Vol Bas + USB**), **Odin**, firmware officiel via **Frija/Samfw** avec le **modèle exact** (ex. `SM-X710`) et le **CSC**. Mêmes options (BL/AP/CP/CSC ; HOME_CSC pour conserver les données).

> **❗ Erreur courante** — Certaines Galaxy Tab **Wi-Fi seul** n'ont **pas de composant CP (modem)** : le firmware n'a alors pas de fichier CP, c'est normal.

### Xiaomi Pad / POCO Pad

Comme les smartphones Xiaomi (§3.2) : **Recovery ROM** officielle (voie sûre) ou **Fastboot + Mi Flash Tool**, firmware du **nom de code** exact via source officielle / xiaomifirmwareupdater.

### Lenovo Tab et autres

- Lenovo propose l'outil officiel **Rescue and Smart Assistant (LMSA)** qui télécharge et réinstalle le firmware **officiel** d'une tablette/téléphone Lenovo/Motorola qu'on possède — équivalent du Smart Switch Samsung.
- Autres marques : privilégier l'**OTA officielle**, le **recovery stock**, ou l'outil officiel du fabricant. Éviter les firmwares tiers.

### Précautions communes tablettes Android

- Batterie > 50 %, câble data, firmware **exact** (modèle + région).
- Le flash **ne retire pas** le **FRP** (compte Google) : voir §6.1.
- Sur les tablettes multi-utilisateurs / gérées (MDM en entreprise/école), un **verrou de gestion** peut subsister : passer par l'**administrateur** ou le **SAV** (voir §6.7).

> **🔒 Éthique & légalité (tablettes)** — Beaucoup de tablettes sont des **parcs scolaires ou d'entreprise** sous gestion (MDM, Knox, Zero-Touch, Apple School/Business Manager). Ces inscriptions **survivent au flash** et sont **volontairement** non contournables : seule l'**organisation propriétaire** peut les lever. Exigez la preuve de propriété et orientez vers l'entité gestionnaire.

\newpage

# SECTION 6 — « DÉCODAGE » = RÉCUPÉRATION D'ACCÈS LÉGITIME

> **AVERTISSEMENT STRUCTURANT DE TOUTE LA SECTION** — Cette section **ne contient aucun tutoriel de contournement** de verrou anti-vol ou de propriété. Chaque verrou est expliqué (ce qu'il est, pourquoi il existe), puis **seule la voie légitime de récupération** est documentée : se reconnecter avec son propre compte, réinitialiser son mot de passe par les canaux officiels, ou passer par le **SAV constructeur/opérateur sur preuve de propriété**. Si la propriété n'est pas prouvée, **la seule réponse professionnelle est le refus et l'orientation vers le SAV officiel.**

## 6.0 Le principe : la preuve de propriété avant tout

Les verrous traités ici (FRP, Activation Lock, Reactivation Lock, Mi Account…) ont **tous** le même but : rendre un appareil **volé ou perdu inutilisable**, et donc **décourager le vol**. Ils fonctionnent parce qu'ils ne peuvent **pas** être contournés facilement — c'est leur raison d'être. Un professionnel ne « bat » pas ces verrous ; il **vérifie la propriété** et **accompagne** le propriétaire légitime vers la procédure officielle.

**Documents à exiger systématiquement avant toute démarche de récupération d'accès :**

- **Pièce d'identité** du demandeur.
- **Facture d'achat originale** (ou preuve d'achat : bon de commande, ticket, contrat opérateur) mentionnant idéalement l'**IMEI/numéro de série**.
- Le cas échéant, un **document de mandat** ou de succession (héritier, entreprise).
- Inscription au **registre client** et **décharge signée**.

**Quand refuser** (liste non exhaustive) :

- Pas de preuve de propriété crédible.
- Appareil signalé perdu/volé, ou IMEI en liste noire.
- Incohérence entre l'identité du demandeur et les éléments de l'appareil.
- Demande explicite de « bypass » d'un compte que le demandeur ne possède pas.

Dans tous ces cas : **on n'intervient pas**, et on indique la voie officielle (SAV constructeur/opérateur, forces de l'ordre si vol signalé).

> **🔒 Éthique & légalité — encadré récurrent** : *exiger la preuve de propriété. Sans elle, la seule voie est le SAV officiel. Un professionnel refuse un appareil sans preuve de propriété.*

---

## 6.1 FRP / Compte Google (Android)

### Ce qu'est le verrou

Le **FRP (Factory Reset Protection)** est une protection Android : après une **réinitialisation d'usine non autorisée**, l'appareil exige, au premier démarrage, de se connecter au **compte Google qui y était déjà configuré**. But : empêcher qu'un téléphone **volé** puisse être réinitialisé puis réutilisé par le voleur.

Le FRP **survit au flash et au factory reset** : c'est **volontaire**. Aucun flash de firmware ne le retire.

### La voie légitime de récupération

Le propriétaire légitime récupère l'accès en **prouvant qu'il détient le compte Google** précédemment configuré :

1. **Se connecter avec le compte Google d'origine** (identifiant + mot de passe) sur l'écran de vérification. C'est la solution normale.
2. **Mot de passe oublié ?** → réinitialiser le mot de passe via **`account.google.com/recovery`** (ou `g.co/recover`) depuis un autre appareil : Google guide l'utilisateur (numéro de téléphone de récupération, e-mail de secours, questions, appareil de confiance).
3. Une fois le mot de passe rétabli, se connecter sur l'appareil.

> **🛠️ Astuce pro (si le client est bien le propriétaire mais bloqué)** :
> - Vérifier qu'il utilise **exactement** le bon compte (souvent plusieurs comptes Google).
> - S'assurer d'une **connexion Internet** stable pendant la vérification.
> - La récupération Google peut demander un **délai de sécurité** (plusieurs heures à quelques jours) si peu d'infos de récupération sont disponibles : c'est normal et voulu. Conseiller de renseigner le maximum d'informations exactes.
> - Après un changement de mot de passe très récent, Google peut exiger d'attendre avant de l'utiliser sur un nouvel appareil.

### Prévention (à conseiller au client)

Avant toute réinitialisation ou revente d'un appareil qu'il possède, le propriétaire doit **retirer son compte Google** de l'appareil (*Paramètres > Comptes > Supprimer le compte*) **puis** faire le factory reset. Ainsi, aucun FRP ne se déclenche.

### Quand rediriger vers le SAV / refuser

- Si le demandeur **n'est pas** le titulaire du compte et **ne peut pas** prouver la propriété de l'appareil → **refus**. Google ne fournit pas de « bypass » ; seule la récupération du **compte légitime** ouvre l'appareil.
- Si l'appareil provient d'une **succession** : l'héritier peut, muni des **documents de succession** et de la **preuve d'achat**, contacter le **SAV du constructeur** et, pour le compte Google, la procédure Google de gestion des comptes de personnes décédées.

> **🔒 Éthique & légalité (FRP)** — Il n'existe, dans cet ouvrage, **aucune** procédure, application, code ou fichier pour « retirer un FRP ». La seule voie est le **compte Google légitime** ou le **SAV sur preuve de propriété**.

---

## 6.2 Apple Activation Lock (iCloud / « Localiser »)

### Ce qu'est le verrou

L'**Activation Lock** est activé automatiquement dès que **« Localiser »** (Find My) est activé avec un **identifiant Apple**. Après effacement ou restauration, l'appareil exige l'**identifiant Apple d'origine**. But : rendre un iPhone/iPad **volé** inutilisable. C'est l'un des dispositifs anti-vol les plus efficaces au monde.

L'Activation Lock **survit à la restauration DFU** : **voulu**, non contournable.

### La voie légitime de récupération

1. **Se connecter avec l'identifiant Apple d'origine** sur l'écran d'activation. Solution normale.
2. **Mot de passe Apple ID oublié ?** → **`iforgot.apple.com`** / `appleid.apple.com` pour réinitialiser (authentification à deux facteurs, numéro de confiance, appareil de confiance).
3. **Retirer l'appareil à distance** : depuis **`icloud.com/find`** (ou l'app *Localiser* d'un autre appareil du propriétaire), sélectionner l'appareil → **Effacer** puis **Supprimer de mon compte** ; cela **retire l'Activation Lock** proprement. À faire **avant** revente.

### Preuve de propriété auprès d'Apple (propriétaire ne pouvant plus accéder au compte)

Si le propriétaire **possède l'appareil** mais ne peut plus accéder à l'identifiant Apple (compte perdu, proche décédé), Apple dispose d'une **procédure officielle sur preuve d'achat** :

- Rassembler la **facture d'achat originale** (nom du revendeur, date, **numéro de série** ou IMEI, nom de l'acheteur).
- Contacter le **support Apple** (support.apple.com) ou passer par **Apple Business Manager / Apple School Manager** pour les appareils d'entreprise/écoles inscrits.
- Apple examine la demande et peut, s'il valide la preuve, **retirer l'Activation Lock**.
- Pour une **succession** : Apple a une procédure de **contact héritage numérique / Legacy Contact** et de demande d'accès au compte d'une personne décédée, sur pièces.

> **🔒 Éthique & légalité (Apple)** — **Aucun** outil, serveur, « bypass iCloud » ou fichier n'est fourni ici. Un iPhone verrouillé iCloud dont le client **ne prouve pas** la propriété : **refus** et orientation vers Apple. Les IMEI d'iPhone volés sont souvent en liste noire ; les « débloquer » relèverait du recel.

> **🛠️ Astuce pro** — Avant d'acheter/reprendre un iPhone d'occasion pour votre boutique, vérifiez que **« Localiser » est désactivé** et que l'appareil a été **retiré du compte** du vendeur **devant vous**, facture à l'appui.

---

## 6.3 « Bootloader unlock » — option constructeur officielle uniquement

### Ce que c'est (et ce que ce n'est pas)

Le **déverrouillage du bootloader** est une **option officielle** offerte par certains constructeurs (Google, OnePlus, Xiaomi via Mi Unlock, etc.) permettant au **propriétaire** d'installer des systèmes non signés (ROM custom) sur **son** appareil. **Ce n'est pas un contournement de verrou anti-vol** : au contraire, il est **conditionné** à la connexion au compte propriétaire (FRP) et **efface intégralement** l'appareil.

### La voie officielle (sur son propre appareil)

1. *Paramètres > À propos > (7 tapes sur numéro de build)* pour activer les **Options développeur**.
2. Dans **Options développeur**, activer **« Déverrouillage OEM »** (nécessite d'être connecté, appareil non volé).
3. Redémarrer en **Fastboot**, puis (selon marque) `fastboot flashing unlock` / outil **Mi Unlock** (avec compte Mi + délai d'attente).
4. **Confirmer** l'effacement complet des données.

> **⚠️ Risques (bootloader unlock)** — Le déverrouillage **efface tout**, **affaiblit la sécurité** (Verified Boot compromis, avertissement au démarrage), peut **annuler la garantie** et **déclencher des indicateurs irréversibles** (Knox, e-fuse). Certaines fonctions (paiement, DRM, apps bancaires) peuvent cesser de fonctionner. À ne faire qu'en connaissance de cause, **sur un appareil qu'on possède**.

> **🔒 Éthique & légalité** — Le déverrouillage OEM sur un appareil **verrouillé par FRP/compte** est **impossible** sans le compte propriétaire — **par conception**. N'y voyez jamais un moyen de « débloquer » un appareil dont la propriété n'est pas établie.

---

## 6.4 Samsung — Reactivation Lock & compte Samsung

### Ce qu'est le verrou

Outre le **FRP/compte Google** (§6.1), Samsung ajoute :

- **Reactivation Lock** (compte Samsung + *Find My Mobile*) : empêche la réactivation après réinitialisation sans le **compte Samsung**.
- **Knox** : sécurité matérielle ; certains verrous d'entreprise (Knox Guard, MDM) inscrivent l'appareil dans une gestion.

Ces verrous **survivent au flash Odin** : **voulu**.

### La voie légitime de récupération

1. **Compte Samsung** : se connecter avec l'identifiant Samsung d'origine. Mot de passe oublié → **`account.samsung.com`** (récupération officielle).
2. **Find My Mobile** : depuis **`findmymobile.samsung.com`** (avec le compte propriétaire), déverrouiller/effacer/retirer l'appareil à distance, **avant** revente.
3. **FRP/compte Google** : voir §6.1.
4. **Support Samsung / Samsung Members / SAV agréé** : pour un propriétaire ne pouvant plus accéder au compte, muni de la **preuve d'achat** (facture, IMEI), Samsung applique sa procédure officielle.

### Prévention

Avant revente d'un Galaxy qu'on possède : **retirer le compte Samsung ET le compte Google**, désactiver *Find My Mobile*, **puis** réinitialiser.

> **🔒 Éthique & légalité (Samsung)** — Aucun « bypass Samsung/Knox/Reactivation » n'est fourni. Appareil verrouillé sans preuve de propriété : **refus** + SAV Samsung. Knox Guard / MDM d'entreprise = seule l'**organisation gestionnaire** peut lever.

---

## 6.5 Xiaomi / OPPO / Realme / OnePlus — comptes constructeur

### Ce que sont ces verrous

- **Mi Account** (Xiaomi) : lié à *Find Device* ; après reset, l'appareil peut exiger le **compte Mi** d'origine (protection anti-vol). Le déverrouillage bootloader Xiaomi passe aussi par le **compte Mi** + délai.
- **OPPO / Realme (compte Heytap)** et **OnePlus (compte OnePlus)** : verrous de compte et *Find Device* équivalents.

Tous **survivent au flash** : **voulu**.

### La voie légitime de récupération

1. **Se reconnecter avec le compte constructeur d'origine** (Mi / Heytap / OnePlus).
2. **Mot de passe oublié** → page de récupération officielle du compte concerné :
   - Xiaomi : **`account.xiaomi.com`** (et `i.mi.com` pour *Find Device*).
   - OPPO/Realme : **compte Heytap** officiel.
   - OnePlus : **compte OnePlus** officiel.
3. **Retirer l'appareil à distance** depuis le service *Find Device* du constructeur (avant revente).
4. **Support constructeur sur preuve d'achat** : Xiaomi/OPPO/Realme/OnePlus disposent d'un **SAV officiel** qui, sur **facture + IMEI**, traite les demandes légitimes de propriétaires ne pouvant plus accéder à leur compte.

### Prévention

Avant revente : **retirer le compte constructeur ET le compte Google**, désactiver *Find Device*, puis réinitialiser.

> **🔒 Éthique & légalité (BBK/Xiaomi)** — Ces marques et certains serveurs tiers proposent des offres de « bypass compte » : **à proscrire**. Aucun n'est documenté ici. Sans preuve de propriété : **refus** + SAV officiel.

---

## 6.6 Désimlockage (verrouillage opérateur / SIM lock)

### Ce qu'est le verrou

Le **verrouillage opérateur** (SIM lock / « désimlockage ») restreint l'appareil à un **seul opérateur**, généralement quand il a été **subventionné** dans le cadre d'un forfait. Ce n'est **pas** un verrou anti-vol de compte : c'est une **restriction commerciale**, et sa levée est un **droit encadré du consommateur**.

### La voie légitime — et gratuite — en France / UE

En France (et largement dans l'UE), le désimlockage se demande **officiellement et gratuitement** auprès de **l'opérateur qui a vendu l'appareil** :

1. **Contacter son opérateur** (espace client, service client, boutique) et **demander le désimlockage**.
2. Depuis la réglementation en vigueur, le désimlockage est **gratuit** (en France, notamment pour les appareils, sans délai d'ancienneté payant : l'opérateur doit fournir le déverrouillage réseau gratuitement sur demande ; vérifier les conditions à jour de l'opérateur).
3. L'opérateur fournit un **code de déverrouillage réseau (NCK)** ou effectue le déverrouillage **à distance** (selon la marque : Apple désimlocke **côté serveur**, sans code, dès que l'opérateur transmet la demande).
4. Suivre la procédure indiquée (insérer une SIM d'un autre opérateur, saisir le code une fois si demandé, ou re-synchroniser l'iPhone).

### Documents / conditions

- Être le **titulaire de la ligne** ou le **propriétaire de l'appareil** (l'opérateur peut demander l'**IMEI**, le **numéro de client/ligne**, une **pièce d'identité**).
- Délais : la demande est traitée sous quelques jours ouvrés selon l'opérateur.

> **🔒 Éthique & légalité (désimlockage)** — Le **seul** désimlockage légitime passe par **l'opérateur d'origine**. Les « services de désimlockage » tiers non autorisés, codes achetés sur des places de marché douteuses, ou outils de contournement **ne sont pas couverts** et sont déconseillés (fraude, appareils volés en liste noire). Un IMEI **blacklisté** (impayé, vol, perte) ne se « débloque » pas : il faut régulariser la situation auprès de l'opérateur.

> **🛠️ Astuce pro** — Distinguez bien **désimlockage réseau** (restriction opérateur, levée gratuite par l'opérateur) et **verrous de compte** (FRP/iCloud, §6.1–6.5) : ce sont des choses **totalement différentes**. Un client confond souvent les deux.

---

## 6.7 Appareils gérés (MDM / entreprise / école)

### Ce que c'est

De nombreux appareils sont **inscrits dans une gestion centralisée** : **MDM** (Mobile Device Management), **Apple Business/School Manager** (Apple), **Android Enterprise / Zero-Touch** (Google), **Knox Guard / Knox Manage** (Samsung). Un tel appareil est **la propriété de l'organisation**, qui contrôle son enrôlement. L'inscription **survit au flash** et **ne se contourne pas** : c'est **voulu**.

### La voie légitime

- **Contacter l'organisation propriétaire** (service informatique, école, entreprise) qui peut **retirer l'appareil** de sa console de gestion.
- Un particulier qui a **acheté d'occasion** un appareil resté enrôlé doit **retourner vers le vendeur/l'organisation** pour désinscription, ou se faire rembourser : l'appareil ne lui appartient pleinement que si l'organisation le libère.

> **🔒 Éthique & légalité (MDM)** — Aucun contournement de MDM n'est documenté. Sans libération par l'organisation propriétaire : **refus** et orientation vers celle-ci.

---

## 6.8 Synthèse : le bon réflexe face à un appareil verrouillé

| Verrou | Nature | Voie légitime UNIQUE |
|---|---|---|
| **FRP / Google** | Anti-vol (compte Google) | Compte Google d'origine / `account.google.com/recovery` ; sinon SAV sur preuve d'achat |
| **Apple Activation Lock** | Anti-vol (iCloud) | Apple ID d'origine / `icloud.com/find` ; sinon support Apple sur facture + n° série |
| **Samsung Reactivation** | Anti-vol (compte Samsung) | Compte Samsung / `findmymobile.samsung.com` ; sinon SAV Samsung sur preuve d'achat |
| **Mi / Heytap / OnePlus** | Anti-vol (compte constructeur) | Compte d'origine / récupération officielle ; sinon SAV constructeur sur preuve d'achat |
| **SIM lock opérateur** | Restriction commerciale | Demande **gratuite** auprès de **l'opérateur** d'origine |
| **Bootloader** | Option d'ouverture | Déverrouillage OEM officiel **par le propriétaire sur son appareil** (efface tout) |
| **MDM / entreprise** | Gestion de parc | **Organisation propriétaire** retire l'inscription |

> **🔒 Le mot de la fin de la Section 6** : dans **tous** ces cas, la clé est la **preuve de propriété** et le **canal officiel**. Il n'existe, dans ce livre, **aucune méthode de contournement**. C'est un choix professionnel, éthique et légal — et c'est la seule pratique tenable pour un atelier sérieux comme MK Phone.

\newpage

# ANNEXE A — Glossaire

**ADB (Android Debug Bridge)** — Outil en ligne de commande de Google communiquant avec un appareil Android **démarré** (débogage USB activé) : installer des paquets, lire des logs, redémarrer en bootloader/recovery, faire un `sideload`.

**Anti-rollback (ARB)** — Mécanisme de sécurité empêchant d'installer un firmware **plus ancien** que celui déjà présent. Un compteur matériel (e-fuses) est incrémenté à chaque montée de version ; tenter un downgrade échoue et peut **briquer** l'appareil.

**AP (Application Processor)** — Chez Samsung, le composant du firmware Odin contenant le système principal (le plus volumineux).

**AVB (Android Verified Boot)** — Chaîne de démarrage vérifié d'Android : le bootloader contrôle l'intégrité des partitions via `vbmeta`. Une altération provoque un avertissement ou un refus de démarrage.

**BIOS / UEFI** — Firmware d'un ordinateur qui initialise le matériel et lance l'OS. L'UEFI est la forme moderne du BIOS.

**BL (Bootloader)** — Chez Samsung, le composant Odin contenant le bootloader.

**Bootloader** — Premier programme exécuté au démarrage ; prépare et lance le système, et **vérifie** son intégrité/authenticité. Peut être **verrouillé** (n'accepte que le firmware signé) ou **déverrouillé** (accepte le non signé ; efface tout ; affaiblit la sécurité).

**Bootloop** — Redémarrage en boucle : l'appareil ne parvient pas à démarrer complètement (souvent système/partition corrompu).

**Brique (brick)** — Appareil rendu inutilisable par une opération ratée. « Soft brick » (récupérable par flash) vs « hard brick » (matériel, souvent irrécupérable).

**Box professionnelle** — Boîtier + logiciel du réseau de la réparation, à crédits/licences officielles, pour diagnostic et service **sur preuve de propriété**. Ne pas l'utiliser pour contourner des verrous anti-vol.

**CP (Core Processor)** — Chez Samsung, le composant Odin contenant le firmware **modem/radio**. Absent sur les modèles Wi-Fi seul.

**CSC (Country Specific Code)** — Chez Samsung, la configuration régionale/opérateur (ex. `XEF` France). `CSC` efface les données ; `HOME_CSC` les conserve si la région est identique.

**DFU (Device Firmware Update)** — Mode de restauration **bas niveau** d'Apple (écran noir), utilisé quand le Recovery ne suffit pas. Combinaison de touches chronométrée selon le modèle.

**Download Mode (Odin Mode)** — Mode de flash propriétaire Samsung, cible du logiciel Odin.

**EDL (Emergency Download, mode 9008)** — Mode d'urgence des puces Qualcomm pour reprogrammation bas niveau via fichiers signés (firehose/programmer). **Réservé aux professionnels** ; risque élevé.

**e-fuse** — Fusible électronique gravé de façon **irréversible** (ex. indicateur de garantie/Knox, compteur anti-rollback).

**Fastboot** — Protocole et mode de bas niveau Android permettant de flasher des partitions, effacer, (dé)verrouiller le bootloader depuis un PC.

**Firmware** — Logiciel de bas niveau d'un appareil : système, bootloader, recovery, modem, partitions. « Stock » = officiel ; « custom » = modifié.

**FRP (Factory Reset Protection)** — Protection Android exigeant, après réinitialisation non autorisée, le **compte Google** précédemment configuré. Anti-vol. Survit au flash.

**Frija / SamFirm / Samfw** — Utilitaires téléchargeant le firmware **officiel Samsung** depuis les serveurs FUS, par modèle + CSC.

**IMEI** — Identifiant international unique d'un mobile. Peut être en **liste noire** (vol, perte, impayé). Ne se « débloque » pas hors régularisation officielle.

**IPSW** — Fichier de firmware **signé** d'Apple, installé via Finder/Apple Devices lors d'une restauration.

**Knox** — Plateforme de sécurité Samsung. Un flash non officiel passe le flag Knox à **0x1** de façon **irréversible**, désactivant certaines fonctions.

**MDM (Mobile Device Management)** — Gestion centralisée d'un parc d'appareils par une organisation propriétaire. Survit au flash ; non contournable.

**Mi Flash Tool** — Outil Windows officiel Xiaomi pour flasher des paquets Fastboot / intervenir en EDL.

**MSM Download Tool** — Outil de restauration bas niveau **officiel OnePlus**, à accès restreint (SAV/agréés).

**OTA (Over-The-Air)** — Mise à jour officielle distribuée par le constructeur ; peut être appliquée en `sideload` sur certains appareils.

**Odin** — Logiciel de flash Samsung (Windows), champs BL/AP/CP/CSC.

**Partition** — Zone cloisonnée de la mémoire de stockage, chacune avec un rôle (boot, system/super, vendor, recovery, vbmeta, userdata, modem, persist, efs…).

**persist / efs / nvram** — Partitions de calibration/identité (capteurs, IMEI, radio). **Critiques** : à ne jamais écraser à la légère (risque irréversible).

**Platform-Tools** — Paquet officiel Google contenant `adb` et `fastboot`.

**Reactivation Lock** — Verrou Samsung lié au **compte Samsung** / Find My Mobile. Anti-vol.

**Recovery** — Environnement de maintenance (réinitialisation, cache, OTA). « Stock » (constructeur, sûr) ou « custom » (TWRP…, après déverrouillage).

**ROM** — Terme jargon pour un **paquet de firmware complet** à flasher.

**Sideload** — Application manuelle d'une OTA via `adb sideload` depuis le recovery.

**SIM lock (verrouillage opérateur)** — Restriction commerciale limitant l'appareil à un opérateur ; **désimlockage gratuit** sur demande auprès de cet opérateur.

**Slots A/B** — Double jeu de partitions système permettant des mises à jour sans interruption ; à respecter lors d'un flash.

**Verified Boot** — Voir AVB.

**vbmeta** — Partition contenant les **empreintes cryptographiques** du Verified Boot. Doit rester cohérente avec les autres partitions.

**VaultKeeper** — Mécanisme Samsung contrôlant l'autorisation de déverrouillage OEM avant tout flash non signé.

\newpage

# ANNEXE B — Erreurs et messages fréquents (aide-mémoire transversal)

| Message / code | Contexte | Interprétation & voie légitime |
|---|---|---|
| `FAIL (aboot/sboot)` | Odin Samsung | Downgrade de bootloader refusé → flasher version ≥. |
| `SW REV CHECK FAIL` | Odin | Indice binaire de la ROM < appareil → bon indice (U1/U2…). |
| `Custom binary blocked by FRP` | Samsung | FRP actif → compte Google légitime, ne pas contourner. |
| `Token verification failed` | Mi Flash | Image non signée / device locked → ROM officielle signée. |
| `not allowed in locked state` | fastboot | Bootloader verrouillé → passer par outils officiels sans forcer. |
| `device is corrupt` | Boot Android | vbmeta/partition incohérente → reflasher firmware complet officiel. |
| `Erreur 4013/4014/9` | iTunes/Finder | Liaison USB/matériel → câble/port/PC ; sinon matériel. |
| `Erreur 3194` | iTunes/Finder | Signature/hosts → version signée, vérifier `hosts`/réseau. |
| Écran « Activation Lock » | iPhone/iPad | Apple ID d'origine / support Apple sur preuve d'achat. Ne pas contourner. |
| « This MIUI can't be installed » | Xiaomi | Mauvais codename/région → bon firmware. |

\newpage

# ANNEXE C — Modèles de documents pour l'atelier

> Ces modèles sont fournis à titre indicatif. Adaptez-les à votre situation et faites-les valider si nécessaire. Ils **ne remplacent pas** un conseil juridique.

## C.1 Fiche de prise en charge / registre client

```
MK PHONE — FICHE DE PRISE EN CHARGE
N° de dossier : __________   Date : __ / __ / ____

CLIENT
Nom, prénom : ______________________________________
Pièce d'identité (type + n°) : ______________________
Téléphone / e-mail : ________________________________

APPAREIL
Marque / modèle : __________________________________
IMEI 1 / IMEI 2 / N° de série : ____________________
État à la réception : ______________________________

PREUVE DE PROPRIÉTÉ (obligatoire)
[ ] Facture d'achat originale   [ ] Contrat opérateur
[ ] Bon de commande             [ ] Mandat écrit / succession
Référence du justificatif : ________________________

INTERVENTION DEMANDÉE
[ ] Flash / restauration firmware
[ ] Récupération d'accès légitime (compte du CLIENT)
[ ] Autre : ________________________________________

Signature du client : ______________________________
```

## C.2 Décharge de responsabilité (flash / restauration)

```
DÉCHARGE DE RESPONSABILITÉ — OPÉRATION LOGICIELLE

Je soussigné(e) ______________________________, déclare :
- être le propriétaire légitime de l'appareil ci-dessus,
  ou disposer d'un mandat écrit du propriétaire ;
- avoir été informé(e) que l'opération de flash/restauration
  comporte des RISQUES : perte de données, perte de garantie,
  et possibilité de dommage irréversible (« brique ») ;
- avoir été invité(e) à effectuer une SAUVEGARDE préalable ;
- reconnaître que MK Phone ne pourra être tenu responsable
  d'une perte de données ou d'un dommage résultant de l'état
  logiciel/matériel préexistant de l'appareil.

Je confirme qu'aucun verrou anti-vol (FRP/iCloud/compte) tiers
n'est demandé à être contourné : toute récupération d'accès se
fera avec MES identifiants ou via le SAV officiel sur preuve
de propriété.

Fait à __________, le __/__/____   Signature : __________
```

## C.3 Refus motivé (absence de preuve de propriété)

```
MK PHONE — NOTIFICATION DE REFUS D'INTERVENTION

Nous ne pouvons donner suite à votre demande concernant
l'appareil [marque/modèle, IMEI __________] pour le motif
suivant :

[ ] Absence de preuve de propriété
[ ] Verrou de compte (FRP/iCloud/constructeur) sans identifiants
[ ] Appareil potentiellement signalé perdu/volé
[ ] Autre : ________________________________________

Voie officielle recommandée :
[ ] Récupération de compte (Google/Apple/Samsung/…)
[ ] SAV du constructeur avec facture + n° de série
[ ] Opérateur (désimlockage) / Organisation gestionnaire (MDM)

Date : __/__/____        Cachet / signature MK Phone
```

\newpage

# ANNEXE D — CHARTE PROFESSIONNELLE MK PHONE

> **« NE JAMAIS TRAITER UN APPAREIL SANS PREUVE DE PROPRIÉTÉ »**

En tant qu'atelier de réparation responsable, MK Phone s'engage sur les principes suivants, opposables à tout technicien de l'atelier :

1. **Preuve de propriété d'abord.** Aucune opération touchant à la sécurité, à l'identité ou aux verrous d'un appareil n'est réalisée sans : **pièce d'identité** du client, **preuve d'achat** (facture/contrat) et, si besoin, **mandat écrit**. Chaque dossier est consigné au **registre client**.

2. **Refus des appareils suspects.** Tout appareil sans preuve de propriété crédible, signalé perdu/volé, ou dont l'IMEI est en liste noire, est **refusé**. Le cas échéant, le client est orienté vers le SAV officiel ou les autorités compétentes.

3. **Aucun contournement de verrou anti-vol.** MK Phone **ne contourne jamais** un FRP/compte Google, un Apple Activation Lock, un Samsung Reactivation Lock, un compte Mi/Heytap/OnePlus, un MDM d'entreprise, ni ne pratique de désimlockage hors du canal officiel de l'opérateur. Seules sont réalisées les **récupérations d'accès légitimes** (identifiants du client) et les orientations vers le **SAV officiel sur preuve de propriété**.

4. **Information et consentement.** Le client est informé **par écrit** des risques (perte de données, de garantie, brique) et signe une **décharge**. Une **sauvegarde** est proposée systématiquement.

5. **Outils et firmwares officiels.** Seuls sont utilisés des **logiciels et firmwares officiels** provenant de sources vérifiées. Les outils de « bypass », firmwares modifiés et serveurs douteux sont proscrits.

6. **Respect des données (RGPD).** Le technicien n'accède qu'aux données strictement nécessaires, ne copie ni ne divulgue aucune donnée client, et procède à un **effacement sécurisé** lorsque requis. Un registre des traitements est tenu si l'activité l'exige.

7. **Traçabilité.** Chaque intervention (modèle, IMEI, firmware et version d'outil utilisés, résultat) est **journalisée**, garantissant reproductibilité et transparence.

8. **Compétence et prudence.** Les opérations à haut risque (EDL, reprogrammation mémoire, box professionnelles) sont réservées aux **techniciens formés**, dans un cadre légal, sur preuve de propriété.

*En signant ci-dessous, le technicien s'engage à respecter l'intégralité de la présente charte.*

Nom du technicien : __________________  Date : __/__/____  Signature : __________

---

## Mot de la fin

Ce livre vous a donné les moyens de **restaurer proprement** un firmware et d'**accompagner honnêtement** un propriétaire face à un verrou. La compétence technique et l'éthique ne s'opposent pas : elles font, ensemble, la réputation d'un atelier. Chez MK Phone, on flashe avec méthode, on informe avec clarté, et **on ne touche jamais à un appareil sans preuve de propriété.**

*Fin de l'ouvrage.*

