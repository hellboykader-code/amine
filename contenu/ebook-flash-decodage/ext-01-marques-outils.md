# Flash par marque — compléments

Cette section prolonge la Section 3 en couvrant des marques et des cas de figure supplémentaires que le technicien rencontre régulièrement en atelier : Huawei et Honor (et leurs particularités post-services Google), Motorola, Vivo/iQOO, Sony Xperia, Nokia/HMD, ainsi qu'un rappel structuré sur LG, marque disparue du marché mais toujours très présente au comptoir de réparation. Comme dans tout l'ouvrage, on ne traite ici que la **restauration du firmware stock officiel** dans un **cadre strictement légitime** : sortir un appareil d'un bootloop, réparer un système corrompu, mettre à jour lorsque l'OTA échoue, ou remettre à neuf un appareil **dont on est propriétaire**.

> **🔒 Éthique & légalité — préalable à TOUTE procédure de cette section** :
> 1. L'appareil vous appartient, ou vous disposez d'un **mandat écrit** du propriétaire.
> 2. Vous avez relevé l'**IMEI / numéro de série** et consigné l'intervention au **registre client**.
> 3. Vous avez **informé** le client des risques (brique, perte de données, perte de garantie) et fait signer une **décharge**.
> 4. Le flash **ne retire pas** les verrous anti-vol (FRP, Activation Lock, verrou de compte constructeur). S'ils sont actifs, ils **subsistent** après le flash ; la seule voie est la récupération légitime ou le **SAV officiel sur preuve d'achat**.

![Figure 7.1 — Poste de flash type : PC portable secteur + batterie, câble data court, appareil chargé, journal d'intervention](images/poste-flash-atelier.jpg)

## 7.1 Huawei / Honor

Huawei et Honor (Honor étant devenu une marque indépendante fin 2020) forment un cas particulier depuis le retrait des **Google Mobile Services (GMS)** sur les appareils Huawei récents. Ces appareils tournent sous **EMUI** ou **HarmonyOS** côté Huawei, et **Magic UI / MagicOS** côté Honor. Le point commun avec le reste du monde Android est le principe de restauration ; la différence tient à l'écosystème de mise à jour (**AppGallery**, **HiSuite**, cloud Huawei/Honor) et à un **bootloader dont le déverrouillage n'est plus proposé officiellement** sur la plupart des modèles récents.

### Modes de connexion

- **eRecovery** : mode de récupération réseau propre à Huawei/Honor. Appareil éteint, maintenir **Volume Haut + Power** en branchant le câble (ou en laissant la batterie), relâcher au logo. L'eRecovery propose notamment *« Download latest version and recovery »*, qui **télécharge le firmware officiel depuis les serveurs Huawei/Honor** via Wi-Fi et le réinstalle. C'est la voie la plus propre pour un appareil qu'on possède.
- **Recovery stock** : effacement du cache, réinitialisation d'usine.
- **Fastboot** : sur les modèles qui l'exposent encore, **Volume Bas + Power**. Sur beaucoup de modèles récents, le fastboot est verrouillé et n'accepte aucun flash non signé.
- **dload (méthode carte SD / USB)** : méthode de mise à jour forcée à partir d'un dossier `dload` contenant un fichier `UPDATE.APP` officiel.

### Où trouver le firmware stock officiel

- **eRecovery en ligne** : la source la plus sûre — l'appareil récupère lui-même le firmware signé correspondant exactement à sa version.
- **HiSuite** (l'utilitaire de bureau officiel Huawei, Windows/macOS) : gère la sauvegarde, la restauration et propose la **réparation du système** (« System recovery / repair ») en retéléchargeant le firmware officiel.
- **Honor Suite** : équivalent côté Honor pour les modèles récents.
- Le firmware complet officiel se présente comme un ensemble de fichiers (`UPDATE.APP` et parfois des paquets `update_data`/`update_full_*`) signés. **N'utilisez que des firmwares officiels correspondant exactement au modèle** (référence complète, ex. type `ANA-NX9`, `ELE-L29`) **et à la région**.

### Procédure A — eRecovery en ligne (recommandée, la moins risquée)

**Prérequis** : appareil qui accède encore à l'eRecovery, réseau Wi-Fi disponible, batterie > 50 %.
**Temps estimé** : 15–40 min (dépend du débit Wi-Fi).

1. Éteindre l'appareil.
2. Maintenir **Volume Haut + Power** (branché) jusqu'à l'écran eRecovery.
3. Choisir **« Download latest version and recovery »**.
4. Se connecter à un Wi-Fi.
5. L'appareil télécharge le firmware **officiel signé** et le réinstalle.
6. Redémarrage (premier démarrage long).

### Procédure B — dload (UPDATE.APP officiel)

**Prérequis** : firmware officiel complet du modèle/région contenant `UPDATE.APP`, carte microSD (ou clé USB OTG selon modèle) formatée en FAT32.
**Temps estimé** : 10–20 min.

1. Créer à la racine de la carte SD un dossier nommé exactement **`dload`**.
2. Y copier le fichier **`UPDATE.APP`** officiel.
3. Insérer la carte, appareil éteint.
4. Maintenir **Volume Haut + Volume Bas + Power** ; le firmware s'installe automatiquement (barre de progression).
5. Attendre 100 %, l'appareil redémarre.

> **🛠️ Astuce pro** — Si l'appareil ne lance pas le `dload`, vérifiez le nom exact du dossier (`dload`, minuscules), le format FAT32 de la carte, et que le `UPDATE.APP` correspond **exactement** à la référence du modèle. Un `UPDATE.APP` d'une autre variante régionale est refusé.

### Particularité : appareils sans services Google

Sur les Huawei récents privés de GMS, la restauration stock ramène **HarmonyOS/EMUI sans Google Play**. C'est l'état d'usine **normal** de ces appareils ; ce n'est pas une panne. N'essayez pas d'« ajouter » les services Google par des paquets tiers non officiels : c'est instable, non supporté, et souvent vecteur de logiciels malveillants. Informez le client que l'écosystème d'applications passe par **AppGallery**.

### Erreurs courantes & solutions (Huawei / Honor)

| Symptôme | Cause probable | Solution |
|---|---|---|
| eRecovery « Getting package info failed » | Serveur momentanément indisponible / version non hébergée | Réessayer plus tard ; sinon passer par HiSuite ou dload officiel. |
| `dload` ne démarre pas | Nom de dossier / format / mauvais `UPDATE.APP` | Dossier `dload` en FAT32, `UPDATE.APP` exact du modèle. |
| Fastboot « FRP Locked » / « Phone Relocked » | Bootloader verrouillé (normal sur modèles récents) | Ne pas forcer ; utiliser eRecovery/HiSuite/dload officiels. |
| Reste au logo après flash | Firmware partiel / mauvaise variante | Reprendre le firmware **officiel complet** du bon modèle/région. |
| Demande de compte Huawei/Honor après réinitialisation | Verrou de compte (anti-vol) | **Ne pas contourner.** Récupération de compte ou SAV sur preuve d'achat. |

> **🔒 Éthique & légalité (Huawei / Honor)** — Le déverrouillage du bootloader n'étant plus proposé officiellement sur la plupart des modèles récents, méfiez-vous des « codes de déverrouillage » vendus en ligne : ils sont souvent frauduleux et associés à du contournement de verrou de compte. Le verrou de compte Huawei/Honor **survit au flash** et ne se lève que par le propriétaire ou le SAV sur preuve d'achat.

---

## 7.2 Motorola (Lenovo/Motorola)

Motorola, propriété de Lenovo, propose un Android proche de l'AOSP (« My UX »), un **fastboot standard**, et — fait notable — un **déverrouillage de bootloader officiel** via un portail constructeur pour les modèles éligibles. La restauration stock se fait avec l'outil **Lenovo Rescue and Smart Assistant (RSA)** ou manuellement en fastboot.

### Modes de connexion

- **Fastboot / bootloader** : éteint, **Volume Bas + Power**. Menu fastboot Motorola.
- **Recovery** : depuis le fastboot, sélectionner *Recovery*.

### Où trouver le firmware stock officiel

- **Lenovo Rescue and Smart Assistant (RSA)** (Windows) : l'outil **officiel** qui détecte le modèle, télécharge le **firmware signé** depuis les serveurs Lenovo/Motorola et le réinstalle (« Rescue »). C'est la voie recommandée pour un appareil qu'on possède.
- Firmware au format « **factory / retail firmware** » (dossier d'images `.img` + un script `flashfile.xml`/`servicefile.xml`). **N'utilisez que des firmwares officiels** correspondant exactement au **codename** (ex. `nio`, `rhode`) et au **canal** (retail vs opérateur).

### Procédure A — Lenovo RSA (recommandée)

**Prérequis** : RSA installé, pilotes Motorola, câble data, batterie > 50 %.
**Temps estimé** : 20–40 min (téléchargement inclus).

1. Installer et lancer **RSA**.
2. Brancher l'appareil (allumé si possible, sinon en mode détection selon l'assistant).
3. Choisir **Rescue** ; RSA identifie l'appareil et récupère le firmware officiel.
4. Lancer la restauration ; ne pas débrancher.
5. Redémarrage automatique.

### Procédure B — Flash fastboot manuel (technicien)

**Prérequis** : Platform-Tools (fastboot officiel), firmware retail extrait, batterie > 50 %.

1. Extraire le firmware ; ouvrir un terminal dans le dossier.
2. Mettre l'appareil en **fastboot** et le brancher (`fastboot devices` doit le lister).
3. Flasher les partitions dans l'ordre indiqué par le `flashfile.xml` officiel (bootloader, radio, puis les images système ; commandes `fastboot flash <partition> <image>` et `fastboot --slot all` pour les appareils A/B).
4. `fastboot reboot`.

> **🛠️ Astuce pro** — Suivez **exactement l'ordre** des commandes du `flashfile.xml` officiel. Sur les appareils A/B, pensez à flasher les deux slots (ou à laisser le script officiel gérer). Un `fastboot erase userdata` efface les données : ne l'incluez que si un effacement est voulu.

### Erreurs courantes & solutions (Motorola)

| Symptôme | Cause | Solution |
|---|---|---|
| `fastboot` : « preflash validation failed » | Anti-rollback / version antérieure | Flasher une version **≥** à celle installée. |
| RSA ne détecte pas l'appareil | Pilote / câble / port | Réinstaller pilotes Motorola, câble data, USB 2.0 direct. |
| Bootloop après flash partiel | Images manquantes / slot | Reprendre la séquence **complète** du `flashfile.xml`. |
| « Your device has been unlocked and can't be trusted » au boot | Bootloader déverrouillé (avertissement normal) | Message informatif ; reverrouiller après reflash stock si souhaité. |

> **🔒 Éthique & légalité (Motorola)** — Le déverrouillage du bootloader Motorola passe par le **portail officiel du constructeur** (obtention d'un code lié à l'appareil), s'effectue **sur son propre appareil**, **efface tout** et **peut annuler la garantie**. Ce n'est pas un moyen de contourner un verrou de compte. Le FRP subsiste après flash.

---

## 7.3 Vivo / iQOO

Vivo et sa sous-marque **iQOO** (groupe BBK, comme OPPO/Realme/OnePlus) tournent sous **Funtouch OS** ou **OriginOS** selon la région. Comme chez OPPO/Realme, les outils de flash bas niveau sont **réservés au réseau agréé** ; la voie grand public est l'OTA et la mise à jour locale par firmware officiel.

### Modes de connexion

- **Recovery** : éteint, **Volume Haut + Power**.
- **Fastboot** : exposé sur certains modèles (**Volume Bas + Power**), souvent verrouillé.

### Où trouver le firmware stock officiel

- **OTA** via *Paramètres > Mise à jour du système* (voie normale, la plus sûre).
- **Firmware officiel local** : certains modèles acceptent un paquet firmware officiel signé (souvent une archive `.zip`/`PD****`) appliqué depuis la mise à jour locale. **Ne prendre que le firmware officiel du modèle/région exact** depuis le site support Vivo/iQOO.
- **SAV agréé** pour les restaurations bas niveau (outils internes non distribués publiquement).

### Procédure — mise à jour locale (firmware officiel)

**Prérequis** : firmware officiel complet du modèle/région, batterie > 50 %.
**Temps estimé** : 10–20 min.

1. Copier le paquet firmware officiel dans le stockage interne (racine).
2. Ouvrir l'app de mise à jour système, menu, **Mise à jour locale** (le chemin varie selon Funtouch/OriginOS).
3. Sélectionner le paquet ; l'appareil vérifie la signature et applique.
4. Redémarrage.

### Erreurs courantes & solutions (Vivo / iQOO)

| Symptôme | Cause | Solution |
|---|---|---|
| Firmware local refusé | Paquet non signé / mauvaise région | Reprendre le **firmware officiel** exact. |
| Bloqué au logo | Système corrompu | Recovery → *Wipe data* (efface) ; sinon SAV. |
| Fastboot indisponible/verrouillé | Non exposé / bootloader locked | Passer par OTA/mise à jour locale/SAV. |
| Compte Vivo demandé après réinitialisation | Verrou anti-vol | **Ne pas contourner** ; récupération de compte ou SAV sur preuve d'achat. |

> **🔒 Éthique & légalité (Vivo / iQOO)** — Les outils et serveurs de flash bas niveau Vivo circulent avec des offres de « bypass » : **nous ne les documentons pas**. En cas de verrou de compte, orientez vers le SAV Vivo/iQOO sur preuve d'achat.

---

## 7.4 Sony Xperia

Sony est l'un des rares constructeurs à fournir des outils de flash et de mise à jour **officiels et publics** pour le grand public, ainsi qu'un **déverrouillage de bootloader officiel** documenté sur son site développeur pour les modèles éligibles.

### Modes de connexion

- **Fastboot** : éteint, maintenir **Volume Haut** en branchant le câble USB (LED bleue).
- **Flash mode (S1/Emma)** : éteint, maintenir **Volume Bas** en branchant (LED verte) ; utilisé par les outils de flash Sony.
- **Recovery** : les Xperia récents n'ont pas de recovery à combinaison classique ; la maintenance passe par les outils PC.

### Où trouver le firmware stock officiel et les outils

- **Xperia Companion** (Windows/macOS, officiel Sony) : sauvegarde, mise à jour, et surtout **« Réparation du logiciel »** (*Software repair*) qui **retélécharge le firmware officiel** et le réinstalle. Voie recommandée pour un appareil qu'on possède.
- **Emma (Emma Flash Tool)** : outil de flash **officiel Sony**, à l'origine destiné au réseau de service, qui télécharge et flashe le firmware signé du modèle détecté.
- **Newflasher** : outil en ligne de commande **utilisé avec des firmwares officiels Sony** (souvent obtenus via **XperiFirm**, qui récupère les firmwares depuis les serveurs officiels Sony). À réserver aux techniciens avertis.

### Procédure A — Xperia Companion « Réparation du logiciel » (recommandée)

**Prérequis** : Xperia Companion installé, câble data, batterie > 50 %.
**Temps estimé** : 20–40 min.

1. Installer et lancer **Xperia Companion**.
2. Choisir **Réparation du logiciel** et suivre l'assistant.
3. À l'invite, **éteindre** l'appareil, maintenir la touche indiquée et brancher le câble.
4. L'outil télécharge le firmware **officiel** et le réinstalle.
5. Redémarrage automatique.

### Procédure B — Newflasher + firmware XperiFirm (technicien)

**Prérequis** : firmware officiel récupéré via **XperiFirm** (serveurs Sony), **Newflasher** dans le même dossier, pilotes Sony, batterie > 50 %.
**Temps estimé** : 15–30 min.

1. Télécharger le firmware **officiel** du modèle/région exact via XperiFirm.
2. Placer les fichiers du firmware dans le dossier de **Newflasher**.
3. Mettre l'appareil en **Flash mode** (Volume Bas + branchement, LED verte).
4. Lancer Newflasher ; il flashe les partitions. Par défaut, adapter les options selon qu'on veut conserver ou effacer `userdata`.
5. Débrancher et redémarrer à la fin.

> **🛠️ Astuce pro** — Avec Newflasher, si vous voulez **conserver les données**, veillez à ne pas inclure/valider l'effacement d'`userdata` (l'outil demande ou se paramètre selon les fichiers présents). Pour une remise à neuf, laissez l'effacement se faire.

### Erreurs courantes & solutions (Sony Xperia)

| Symptôme | Cause | Solution |
|---|---|---|
| Companion ne détecte pas en réparation | Mauvaise touche / pilote | Suivre l'assistant à la lettre (touche + branchement), réinstaller pilotes Sony. |
| Newflasher s'arrête sur une partition | Firmware incomplet / mauvaise variante | Reprendre le firmware **complet** du bon modèle/région via XperiFirm. |
| Pas de réseau après flash | Firmware d'une autre région | Flasher la **variante régionale** correcte. |
| Compte Google demandé après reset | FRP actif | **Ne pas contourner** ; compte du propriétaire ou SAV sur preuve d'achat. |

> **🔒 Éthique & légalité (Sony)** — Le déverrouillage du bootloader Xperia se demande sur le **site développeur officiel Sony** (code lié à l'IMEI), **sur son propre appareil** ; il **efface tout**, **peut invalider certaines fonctions caméra** et la garantie. À présenter uniquement comme opération du propriétaire, jamais comme contournement.

---

## 7.5 Nokia / HMD

Les smartphones Nokia (édités par **HMD Global**, puis progressivement sous marque **HMD**) reposent sur **Android One / Android quasi-stock**, avec un **fastboot standard**. HMD fournit un service de récupération officiel, mais les images d'usine ne sont pas librement publiées : la restauration bas niveau passe par le **SAV** ou l'outil de récupération en ligne.

### Modes de connexion

- **Fastboot / bootloader** : éteint, **Volume Bas + Power** (parfois Volume Bas + branchement USB).
- **Recovery** : depuis le fastboot, sélectionner *Recovery*.

### Où trouver le firmware stock officiel

- **OTA officielle** (Android One garantit des mises à jour régulières) : voie normale, la plus sûre.
- **Outil de récupération / SAV HMD** : pour un système gravement corrompu, HMD propose une récupération via le support officiel. Les **images d'usine ne sont pas distribuées publiquement** ; méfiez-vous des firmwares Nokia « OST » circulant sur des forums, souvent non officiels.

### Procédure — récupération

**Prérequis** : appareil qu'on possède, accès au support officiel HMD si l'OTA ne suffit pas.
**Temps estimé** : variable.

1. Tenter d'abord une **mise à jour OTA** ou un *Wipe data* en recovery si l'appareil démarre partiellement.
2. Si le système est irrécupérable, passer par l'**outil de récupération officiel HMD** / le SAV avec preuve d'achat.

### Erreurs courantes & solutions (Nokia / HMD)

| Symptôme | Cause | Solution |
|---|---|---|
| Fastboot « not allowed in locked state » | Bootloader verrouillé | Ne pas forcer ; OTA / SAV officiel. |
| Firmware « OST » tiers refusé ou risqué | Fichier non officiel | Éviter ; passer par le canal officiel HMD. |
| FRP demandé après reset | Verrou anti-vol | **Ne pas contourner** ; compte du propriétaire ou SAV. |

> **🔒 Éthique & légalité (Nokia / HMD)** — Les outils « OST LA » et firmwares Nokia diffusés hors canal officiel sont fréquemment associés à des offres de contournement FRP : **nous ne les documentons pas**. Restauration par OTA ou SAV sur preuve d'achat.

---

## 7.6 Rappel LG (LGUP et méthode « legacy »)

LG a quitté le marché des smartphones en 2021, mais ses appareils restent nombreux en réparation. La restauration stock LG s'appuie sur l'outil **LGUP** (et l'ancien **LG Flash Tool** pour les modèles plus anciens), avec des **KDZ/TOT** officiels.

### Modes de connexion

- **Download mode** : éteint, maintenir **Volume Haut** en branchant le câble USB → écran « Firmware Update » / « Download mode ».
- **Recovery** : combinaison Volume Bas + Power puis relâcher/represser selon le modèle (efface les données).

### Où trouver le firmware stock officiel

- **KDZ** : firmware officiel complet LG (un seul fichier), utilisé par **LGUP**.
- **TOT** (+ fichier **.dll**) : format bas niveau utilisé par l'ancien **LG Flash Tool** (méthode « legacy »).
- Les firmwares officiels LG restent archivés sur des miroirs communautaires réputés ; vérifier la correspondance **modèle exact** (ex. `LM-G710`) et **région/opérateur**.

### Procédure A — LGUP (KDZ)

**Prérequis** : **LGUP** installé (avec le patch DLL du modèle si requis), pilotes LG Mobile, câble data, batterie > 50 %.
**Temps estimé** : 10–20 min.

1. Installer pilotes LG + **LGUP**.
2. Mettre l'appareil en **Download mode** et le brancher ; LGUP le détecte.
3. Sélectionner le **KDZ** officiel.
4. Choisir le mode :
   - **UPGRADE** : met à jour en conservant les données ;
   - **REFURBISH** : remise à neuf, **efface tout** ;
   - **(éviter les modes de partitionnement avancés sans maîtrise)**.
5. Lancer, ne pas débrancher, attendre la fin et le redémarrage.

### Procédure B — LG Flash Tool (TOT, legacy)

Réservée aux modèles anciens fournis en **TOT + DLL**. Suivre la notice de l'outil : sélectionner le `.dll`, le `.tot`, mettre l'appareil en Download mode, flasher. Méthode plus fragile, à privilégier seulement quand aucun KDZ n'est disponible.

### Erreurs courantes & solutions (LG)

| Symptôme | Cause | Solution |
|---|---|---|
| LGUP ne détecte pas | Pilote / DLL modèle manquant | Réinstaller pilotes LG, patch LGUP adapté au modèle. |
| Flash bloqué à un % | Câble/port instable | Câble data, USB 2.0 direct, réessayer. |
| Bootloop après flash | KDZ d'une mauvaise région | Reprendre le **KDZ** du bon modèle/région. |
| FRP demandé après REFURBISH | Verrou anti-vol | **Ne pas contourner** ; compte du propriétaire ou SAV. |

> **🔒 Éthique & légalité (LG)** — Le mode **REFURBISH** efface tout et sert à remettre à neuf **un appareil qu'on possède**. Il ne retire pas le FRP. Bien que LG ait cessé son activité mobile, le principe reste : pas de contournement de verrou de compte.

---

# Outils par plateforme SoC (flash stock légitime)

Au-delà des outils par marque, il est utile de raisonner par **plateforme SoC** (le fabricant du processeur), car les modes bas niveau et les outils de flash en dépendent directement. Trois grandes familles couvrent l'écrasante majorité des smartphones Android : **Qualcomm** (Snapdragon), **MediaTek** (Dimensity/Helio) et **Unisoc/Spreadtrum**. Cette section décrit leur usage **exclusivement pour la restauration d'un firmware stock officiel sur un appareil qu'on possède**.

> **🔒 Éthique & légalité** — Les outils SoC de bas niveau sont puissants et neutres : leur légitimité dépend entièrement de **l'usage** et de la **preuve de propriété**. Ils sont fréquemment détournés pour du contournement de verrou anti-vol ; **cet ouvrage ne couvre que la restauration stock signée** et exige la preuve de propriété.

![Figure 8.1 — Vue Gestionnaire de périphériques : pilotes QDLoader 9008 (Qualcomm) et VCOM (MediaTek) correctement installés](images/pilotes-soc-gestionnaire.jpg)

## 8.1 Tableau de synthèse : modes, outils, OS

| Plateforme | Mode bas niveau | Outil de flash | OS hôte | Fichier clé |
|---|---|---|---|---|
| Qualcomm | **EDL (9008)** / Fastboot | Mi Flash, QFIL/QPST, outils constructeur | Windows | firehose/`prog_*.mbn`, `rawprogram*.xml` |
| MediaTek | **BROM / Preloader** | **SP Flash Tool** | Windows (Linux possible) | **scatter** `MT****_Android_scatter.txt` |
| Unisoc/Spreadtrum | **BootROM / Download** | Outils Spreadtrum (type ResearchDownload/UpgradeDownload) | Windows | `.pac` |

## 8.2 Qualcomm — EDL / mode 9008

### Ce qu'est l'EDL

L'**EDL** (*Emergency Download*, exposé comme périphérique **Qualcomm HS-USB QDLoader 9008**) est un mode d'urgence **gravé dans le SoC**. Il sert quand l'appareil est trop endommagé pour entrer en Fastboot ou dans le mode Download du constructeur (bootloader HS, système et recovery détruits). Le PC communique alors avec le SoC via un programme signé appelé **firehose** (`prog_*.mbn` / `xbl_*`), piloté par des fichiers `rawprogram*.xml` et `patch*.xml` qui décrivent le découpage des partitions.

### Usage légitime de restauration

- **Réanimer un appareil « mort »** (écran noir, aucun mode accessible) **qu'on possède**, en réécrivant le firmware **officiel signé** complet.
- **Réinstaller après une intervention matérielle** (remplacement/reprogrammation de mémoire) sur son propre appareil.

### Prérequis

- **Pilotes Qualcomm HS-USB QDLoader 9008** correctement installés (vérifier dans le Gestionnaire de périphériques).
- **Firehose officiel** et paquet de partitions **signés et exactement adaptés au modèle** (fournis par le constructeur/SAV ou une box pro sous licence).
- Outil de flash EDL : **QFIL** (QPST) de Qualcomm, ou l'outil du constructeur (ex. Mi Flash en mode EDL).
- Batterie suffisante ; câble et alimentation stables.

### Entrer en EDL

Selon le modèle : commande logicielle (`adb reboot edl` ou `fastboot oem edl` sur certains), combinaison de touches spécifique, ou — **réservé aux professionnels** — **test point** sur la carte (deux points à court-circuiter à l'insertion du câble). La méthode test point ne se pratique qu'ouvert, avec compétence, sur un appareil qu'on possède/mandaté.

### Procédure générale (QFIL)

**Temps estimé** : 10–25 min.

1. Installer les pilotes 9008 ; brancher l'appareil en EDL (il apparaît en **QDLoader 9008**).
2. Ouvrir **QFIL**, choisir **Flat Build**.
3. Sélectionner le **firehose** (`prog_*.mbn`) officiel.
4. Charger les fichiers **`rawprogram*.xml`** et **`patch*.xml`** du firmware officiel.
5. Lancer **Download** ; ne pas débrancher.
6. À la fin, l'appareil redémarre sur le firmware stock.

> **⚠️ Risques (Qualcomm EDL)** — L'EDL avec des fichiers de provenance douteuse ou d'un **mauvais modèle** est l'une des **premières causes de brique définitive et de perte d'IMEI**. Un firehose ou un `rawprogram` non adapté peut écraser des partitions critiques (`persist`, `modem`, `efs`). N'y recourez qu'avec des **ressources officielles signées**, une **compétence avérée**, et jamais « pour essayer ».

> **🔒 Éthique & légalité (Qualcomm EDL)** — L'EDL est souvent mis en avant pour du contournement de verrou : **nous ne le documentons que pour restaurer un firmware stock signé** sur un appareil dont la propriété est prouvée. Les firehose signés sont distribués sous contrôle du constructeur/réseau agréé.

### Erreurs courantes & solutions (Qualcomm)

| Symptôme | Cause | Solution |
|---|---|---|
| « Sahara fail » / « Sahara communication failure » | Firehose non signé/inadapté, câble | Utiliser le **firehose officiel du modèle**, câble data, port USB 2.0. |
| Appareil non reconnu en 9008 | Pilotes QDLoader manquants | Installer/mettre à jour les pilotes Qualcomm. |
| Flash « fail » sur une partition | `rawprogram` d'un autre modèle | Prendre le paquet **exact** du modèle/région. |
| Perte d'IMEI après flash | Écrasement `efs`/`modem` | Restaurer depuis une **sauvegarde EFS** de l'appareil (voir §10) ; sinon SAV. |

## 8.3 MediaTek — SP Flash Tool

### Ce qu'est le mode BROM / Preloader

Les SoC MediaTek exposent un **BootROM (BROM)** et un **Preloader** qui acceptent un flash via **SP Flash Tool** (SmartPhone Flash Tool, Windows, aussi disponible sous Linux). Le pilote de communication est le **MTK USB VCOM / Preloader**. Le fichier central est le **scatter** (`MT****_Android_scatter.txt`), qui décrit l'adresse et la taille de chaque partition du firmware.

### Usage légitime : réinstaller un stock officiel

- **Sortir d'un bootloop** ou réparer un système corrompu **sur son propre appareil** en réécrivant le firmware **officiel** décrit par le scatter.
- Se fait souvent **sans allumer** l'appareil : SP Flash Tool attend, on branche l'appareil **éteint** et le Preloader se connecte quelques secondes.

### Prérequis

- **SP Flash Tool** (version compatible avec le SoC/modèle).
- **Pilotes MTK VCOM / Preloader** installés.
- Firmware **officiel** complet du modèle/région, contenant le **scatter** et les images.
- Batterie chargée ; câble/alimentation stables.

### Les modes de SP Flash Tool

- **Download Only** : écrit les partitions du firmware **sans toucher** à ce qui n'est pas listé — **mode recommandé** pour réinstaller un stock officiel. Selon la config du scatter, on peut cocher/décocher les partitions à écrire (garder `userdata` intact pour conserver les données, ou tout réécrire pour une remise à neuf).
- **Firmware Upgrade** : met à jour l'ensemble, y compris certaines partitions supplémentaires ; efface généralement les données.
- **Format All + Download** : **à éviter** — formate tout, y compris des zones sensibles ; risque élevé de perte de calibration/IMEI.

### Procédure — Download Only (réinstaller un stock officiel)

**Temps estimé** : 5–15 min.

1. Installer les pilotes **VCOM/Preloader**.
2. Ouvrir **SP Flash Tool**, onglet **Download**.
3. Charger le **scatter** officiel (`MT****_Android_scatter.txt`) → la liste des partitions se remplit.
4. Choisir **Download Only**.
5. Décocher `userdata` si l'on veut **conserver les données** (ou tout laisser coché pour une remise à neuf).
6. Cliquer **Download**, puis brancher l'appareil **éteint** ; le Preloader se connecte, le flash démarre.
7. Attendre l'anneau vert (« Download OK »).

> **⚠️ Risques (MediaTek)** — Ne **jamais** utiliser **Format All** ni écraser `nvram`/`nvdata`/`protect*`/`persist` sans nécessité : c'est la voie directe vers la **perte d'IMEI** et de calibration. Un scatter/firmware d'un **autre modèle** peut briquer l'appareil. Vérifiez la correspondance exacte et l'**anti-rollback** le cas échéant.

> **🔒 Éthique & légalité (MediaTek)** — SP Flash Tool est massivement détourné pour du contournement de verrou et des « auth bypass ». **Cet ouvrage ne l'emploie que pour réinstaller un firmware stock officiel signé** sur un appareil dont la propriété est prouvée. Sur les modèles récents, MediaTek impose une **authentification (DAA/SLA)** ; ne cherchez pas à la contourner — c'est une protection.

### Erreurs courantes & solutions (MediaTek)

| Symptôme | Code / message | Solution |
|---|---|---|
| Rien ne se passe au branchement | Pilotes VCOM absents | Installer les pilotes MTK VCOM/Preloader ; brancher **éteint**. |
| « STATUS_BROM_CMD_STARTCMD_FAIL » | Mauvais moment de branchement / câble | Rebrancher éteint, câble data, USB 2.0. |
| « SP Flash Tool authentication » requise | Auth DAA/SLA (modèles récents) | **Ne pas contourner** ; utiliser les fichiers/auth **officiels** du modèle. |
| Scatter refusé | Firmware d'un autre modèle | Prendre le firmware **exact** du modèle/région. |
| Perte d'IMEI après flash | Écrasement `nvram`/`nvdata` | Restaurer depuis sauvegarde (voir §10) ; sinon SAV. |

## 8.4 Unisoc / Spreadtrum (aperçu)

**Unisoc** (anciennement **Spreadtrum**) équipe de nombreux appareils d'entrée de gamme. Le mode bas niveau est un **BootROM/Download mode**, et le firmware se présente au format **`.pac`**, flashé par les outils Spreadtrum de type **ResearchDownload** / **UpgradeDownload** (Windows), avec les **pilotes SPRD/Unisoc**.

### Principe (restauration stock)

**Temps estimé** : 5–15 min.

1. Installer les **pilotes Unisoc/SPRD**.
2. Ouvrir l'outil (ResearchDownload/UpgradeDownload), charger le **`.pac`** officiel du modèle.
3. Lancer le téléchargement, puis brancher l'appareil **éteint** (le BootROM se connecte).
4. Attendre « Passed ».

> **⚠️ Risques (Unisoc)** — Comme ailleurs, un `.pac` d'un **mauvais modèle** ou l'écrasement des zones NV peut détruire l'IMEI/la calibration. Ne flashez que le **firmware officiel** exact, et évitez les options d'effacement des partitions NV sans nécessité.

> **🔒 Éthique & légalité (Unisoc)** — Restauration stock signée uniquement, sur preuve de propriété. Les usages de contournement ne sont pas couverts.

---

# Recovery, root et ROMs personnalisées (sur SON appareil)

Ce chapitre traite d'opérations **avancées et facultatives** que **le propriétaire** peut réaliser **sur son propre appareil** : installer un recovery personnalisé, obtenir les droits root, ou installer une ROM personnalisée. Elles supposent toutes un **bootloader déverrouillé par la méthode officielle du constructeur** (option « Déverrouillage OEM » des options développeur, portail constructeur le cas échéant). Elles ne sont **jamais** un moyen de contourner un verrou de compte ou un verrou anti-vol.

> **🔒 Éthique & légalité — exiger la preuve de propriété** : ces manipulations ne se pratiquent que sur un appareil **dont on est propriétaire** (ou avec mandat écrit), après vérification. Le déverrouillage du bootloader **exige de se connecter au compte du propriétaire** (protection FRP) : c'est précisément ce qui empêche de les employer sur un appareil volé. **Elles ne retirent aucun verrou de compte.**

> **⚠️ Risques — à énoncer AVANT toute opération de ce chapitre** :
> - **Efface tout** : déverrouiller le bootloader **supprime l'intégralité des données** de l'appareil.
> - **Sécurité affaiblie** : un bootloader déverrouillé et/ou le root **cassent la chaîne de démarrage vérifié**. Les applications sensibles (**banque, paiement sans contact, DRM vidéo, applications d'entreprise**) peuvent **cesser de fonctionner** (échec de l'attestation Play Integrity), et l'appareil devient plus exposé aux logiciels malveillants.
> - **Garantie** : ces opérations **peuvent annuler la garantie** et déclencher des indicateurs **irréversibles** (Knox 0x1, e-fuse, bit de garantie).
> - **Risque de brique** : une erreur (mauvaise image, mauvais modèle, ARB) peut rendre l'appareil inutilisable.

## 9.1 Le custom recovery (TWRP / OrangeFox)

### À quoi il sert

Un **recovery personnalisé** remplace le recovery stock (volontairement limité) par un environnement de maintenance étendu. Les plus connus sont **TWRP** (Team Win Recovery Project) et **OrangeFox**. Ses fonctions typiques, **sur son propre appareil** :

- **Sauvegarde et restauration NANDroid** : image complète des partitions (voir §10) — l'un de ses usages les plus utiles et les plus légitimes.
- Installation de paquets `.zip` (ROM, correctifs) non signés par le constructeur.
- Gestion des partitions, effacements ciblés, montage du stockage pour transférer des fichiers.

### Prérequis et principe d'installation

- **Bootloader déverrouillé officiellement** (obligatoire).
- **Image de recovery correspondant exactement au modèle** (un TWRP d'un autre modèle peut briquer ou empêcher le démarrage).
- Platform-Tools (fastboot).

Principe général (varie selon les appareils, notamment A/B et sans partition recovery dédiée) :

1. Démarrer en **fastboot**.
2. Tester d'abord sans installer : `fastboot boot twrp.img` (démarre le recovery sans l'écrire) lorsque l'appareil le supporte.
3. Si tout fonctionne, installer selon la méthode documentée pour le modèle (flash de la partition recovery, ou installation via l'image bootée sur les appareils A/B).

> **🛠️ Astuce pro** — **`fastboot boot`** (démarrer le recovery sans l'écrire) est le réflexe de prudence : on vérifie la compatibilité **avant** de rendre le changement permanent. Si l'écran reste noir ou boucle, on n'a rien écrit.

> **⚠️ Risques** — Un recovery d'un **mauvais modèle/variante** est une cause classique de brique. Vérifiez le **codename** exact.

## 9.2 Le root (Magisk)

### Ce qu'est le root et ses bénéfices

Le **root** confère les droits **superutilisateur** (administrateur) sur Android. **Magisk** est la solution de référence : elle obtient le root en **modifiant l'image de démarrage (`boot.img`)** de manière « systemless » (sans altérer la partition system), ce qui facilite la réversibilité.

Bénéfices, **pour le propriétaire averti** : contrôle fin du système, pare-feu avancés, sauvegardes complètes, automatisations, suppression d'applications préinstallées, modules communautaires.

### Principe d'installation (sur son appareil, bootloader déverrouillé)

1. Récupérer le **`boot.img`** correspondant **exactement** au firmware installé (issu du firmware officiel du modèle/version).
2. Le **patcher** avec l'application **Magisk** (fonction « Sélectionner et corriger un fichier »).
3. Rapatrier le `boot.img` patché sur le PC.
4. En fastboot : `fastboot flash boot boot_patched.img` (ou `fastboot boot` pour tester d'abord).
5. Redémarrer ; vérifier le root dans l'app Magisk.

### Risques spécifiques du root

- **Sécurité** : le root **casse l'attestation d'intégrité** (Play Integrity). Les applications **bancaires, de paiement (NFC), de streaming (DRM), et certaines applications d'entreprise/MDM** peuvent **refuser de fonctionner**. Les contournements existent mais sont fragiles et relèvent d'un choix assumé.
- **Surface d'attaque** : une application malveillante à qui l'on accorde le root a un contrôle **total** de l'appareil.
- **Mises à jour** : les OTA échouent souvent sur un appareil rooté ; il faut généralement réintégrer le `boot.img` stock avant de mettre à jour.
- **Garantie** : indicateurs irréversibles possibles (Knox, e-fuse).

> **🔒 Éthique & légalité** — Le root est un choix **du propriétaire sur son appareil**. Ce **n'est pas** un moyen d'accéder à un appareil verrouillé par un compte : il **exige** un bootloader déverrouillé, lequel exige le compte du propriétaire et **efface tout**.

## 9.3 Installer une ROM personnalisée (LineageOS)

### Ce qu'est une ROM personnalisée

Une **ROM personnalisée** est une version d'Android maintenue par la communauté. **LineageOS** en est l'exemple le plus connu (héritier de CyanogenMod) : Android proche de l'AOSP, sans surcouche, souvent plus léger, et prolongeant la durée de vie logicielle d'appareils qui ne reçoivent plus de mises à jour officielles. C'est un usage **légitime et écologique** — **sur son propre appareil**.

### Étapes générales (sur son appareil, bootloader déverrouillé officiellement)

**Prérequis** : bootloader déverrouillé (efface tout), build LineageOS **du codename exact**, éventuellement un recovery adapté, Platform-Tools, batterie chargée, **sauvegarde des données faite au préalable**.
**Temps estimé** : 30–60 min.

1. **Sauvegarder** toutes les données (elles seront effacées).
2. Se rendre sur le site **officiel LineageOS** et suivre les **instructions spécifiques au modèle** (chaque appareil a sa page ; la procédure varie sensiblement — A/B, `dynamic partitions`, recovery Lineage vs générique).
3. Installer le **recovery** indiqué et/ou démarrer dessus.
4. **Effacer** (format data) comme indiqué.
5. **Installer** le `.zip` LineageOS (via recovery ou `adb sideload`).
6. Installer, si souhaité, un paquet de services applicatifs compatible **de son choix** (ou rester sans, pour un appareil dégooglisé).
7. Redémarrer ; premier démarrage long.

> **🛠️ Astuce pro** — La règle absolue : **suivre le guide officiel du modèle exact**, pas un tutoriel générique. Les différences entre appareils (slots A/B, vbmeta, copy-partitions) font qu'une procédure valable pour un modèle **brique** un autre.

### Risques et limites

- **Efface tout** (dès le déverrouillage du bootloader).
- **Sécurité et compatibilité** : mêmes limites que le root (banque, paiement, DRM, MDM d'entreprise peuvent échouer selon l'état de l'attestation).
- **Fonctions matérielles** : certaines fonctions (caméra avancée, capteurs, VoLTE) peuvent être partiellement supportées selon la maturité du portage.
- **Support** : une ROM communautaire dépend de la disponibilité d'un mainteneur pour le modèle.

> **🔒 Éthique & légalité — exiger la preuve de propriété** : installer une ROM personnalisée est un droit du **propriétaire** sur **son** appareil. Ce **n'est pas** un moyen de contourner un verrou de compte : le déverrouillage préalable du bootloader passe par le compte du propriétaire et efface l'appareil. On n'installe pas de ROM sur un appareil dont la propriété n'est pas prouvée.

### Revenir au stock

À tout moment, le propriétaire peut **revenir au firmware officiel** (voir Sections 3 et 7) puis, s'il le souhaite, **reverrouiller le bootloader** après avoir reflashé une image d'usine intacte (`fastboot flashing lock` / mode « lock » de l'outil constructeur). Reverrouiller sur une ROM non stock **brique** l'appareil : ne reverrouiller que sur un firmware **stock officiel exact**.

---

# Sauvegarde avant intervention

Aucune opération de flash sérieuse ne se lance sans **sauvegarde préalable**. C'est la différence entre un incident récupérable et une perte définitive. Ce chapitre détaille les niveaux de sauvegarde, la sauvegarde d'image complète (NANDroid), le cas particulier et sensible des partitions **EFS/IMEI**, et les bonnes pratiques d'atelier.

> **🔒 Éthique & légalité** — Sauvegarder les données d'un client, c'est manipuler des **données personnelles** : appliquez le RGPD (ne copier que le nécessaire, ne rien conserver ni divulguer, effacement sécurisé ensuite). La sauvegarde se fait **sur l'appareil du propriétaire, avec son accord**, jamais pour extraire des données d'un appareil dont la propriété n'est pas prouvée.

![Figure 10.1 — Les niveaux de sauvegarde : données utilisateur, image NANDroid par partition, sauvegarde EFS/IMEI dédiée](images/niveaux-sauvegarde.jpg)

## 10.1 Pourquoi et quoi sauvegarder

Les niveaux, du plus simple au plus technique :

1. **Données utilisateur** : photos, contacts, messages, documents. Voie normale : **sauvegarde cloud du propriétaire** (compte Google/Apple/Samsung), ou copie via l'outil officiel (**Smart Switch**, **HiSuite**, **Xperia Companion**, **Finder/Apple Devices**). À faire **avant** tout flash qui efface `userdata`.
2. **Image complète des partitions (NANDroid)** : capture l'état exact du système, utile pour revenir en arrière après une modification (root, ROM). Se fait via un **recovery personnalisé** sur un appareil au bootloader déverrouillé.
3. **Partitions d'identité et de calibration (EFS/IMEI, persist, nvram)** : les plus critiques ; leur sauvegarde permet de **restaurer son propre appareil** si un flash les corrompt.

> **⚠️ Risques** — Beaucoup d'opérations de flash **effacent `userdata`** (CSC Samsung, clean all Xiaomi, Restaurer iPhone, déverrouillage de bootloader). **Toujours** vérifier avec le propriétaire que ses données sont sauvegardées avant de lancer.

## 10.2 La sauvegarde NANDroid (via recovery, sur son appareil)

Une **sauvegarde NANDroid** est une **image des partitions** réalisée depuis un recovery personnalisé (TWRP/OrangeFox), sur un appareil **qu'on possède** au bootloader déverrouillé. Elle permet de **restaurer l'état exact** de l'appareil (système, données, boot) — un filet de sécurité idéal avant de rooter ou d'installer une ROM.

### Principe

**Prérequis** : recovery personnalisé installé, espace de stockage suffisant (interne ou microSD/OTG), batterie chargée.
**Temps estimé** : 5–20 min selon le volume.

1. Démarrer sur le **recovery**.
2. Choisir **Backup / Sauvegarde**.
3. Sélectionner les partitions à sauvegarder — typiquement **boot**, **system**, **data** (et **vendor** selon les cas). Pour une image « retour arrière » complète, inclure boot + system(+vendor) ; ajouter data pour tout figer.
4. Choisir la destination (**stockage externe recommandé** : microSD/OTG, pour ne pas perdre la sauvegarde en cas de format du stockage interne).
5. Lancer ; conserver l'archive sur un support **externe** au PC/atelier également.

### Restauration

Depuis le même recovery : **Restore / Restaurer**, choisir la sauvegarde, sélectionner les partitions, valider. Utile pour revenir à l'état d'avant intervention.

> **🛠️ Astuce pro** — Copiez la sauvegarde NANDroid **hors de l'appareil** (PC de l'atelier, support externe) immédiatement : une sauvegarde stockée uniquement dans la partition qui sera effacée ne sert à rien.

## 10.3 EFS / IMEI : la partition à comprendre et à ne JAMAIS altérer

### Ce qu'est l'EFS et ce qu'est l'IMEI

La partition **EFS** (et selon les plateformes **nvram/nvdata**, **modemst**, **persist**) contient l'**identité réseau** de l'appareil : notamment son ou ses **IMEI**, les identifiants radio, et des données de **calibration** (Wi-Fi/Bluetooth, capteurs). L'**IMEI** (*International Mobile Equipment Identity*) est un **numéro d'identité légal, unique, attribué à l'appareil par le fabricant**. Il identifie le terminal sur les réseaux mobiles et sert notamment au **blocage des appareils déclarés volés** (listes IMEI). 

> **🔒 Éthique & légalité — point capital** : l'IMEI est une **donnée d'identité légale de l'appareil**. On ne le **modifie JAMAIS**. Changer, falsifier ou « réparer » un IMEI pour le faire différer de celui d'origine est **illégal** dans de très nombreux pays et sert typiquement à maquiller un appareil volé. Ce que l'on fait légitimement, c'est **sauvegarder** l'EFS de **son propre appareil** afin de pouvoir le **restaurer à l'identique** si un flash le corrompt — c'est-à-dire remettre l'appareil dans **son état d'origine**, avec **son propre IMEI d'usine**, jamais un autre.

### Pourquoi sauvegarder l'EFS

Certaines opérations bas niveau (EDL, SP Flash Tool mal ciblé, écrasement de `nvram`/`modem`/`persist`) peuvent **corrompre l'EFS** et entraîner une **perte d'IMEI** (« IMEI 0 » / « null », plus de réseau). Si l'on dispose d'une **sauvegarde EFS de l'appareil réalisée avant l'incident**, on peut **restaurer l'identité d'origine** de **ce même appareil**. Sans sauvegarde, la récupération est difficile, parfois impossible sans passer par le SAV.

### Principe de sauvegarde EFS (sur son appareil)

**Prérequis** : recovery personnalisé (ou méthode adaptée à la plateforme), bootloader déverrouillé, appareil qu'on possède.

1. Démarrer sur le **recovery**.
2. Dans **Backup**, inclure explicitement **EFS** (et selon la plateforme **Modem/nvram/persist**) parmi les partitions.
3. Sauvegarder sur un support **externe** et **copier l'archive hors de l'appareil**.
4. Conserver cette sauvegarde **associée au modèle et à l'IMEI d'origine** de l'appareil dans le journal d'atelier.

> **⚠️ Risques** — Ne **restaurez jamais** une sauvegarde EFS **d'un autre appareil** : cela dupliquerait un IMEI et corromprait la calibration — illégal et techniquement destructeur. Une sauvegarde EFS ne sert qu'à **restaurer l'appareil dont elle provient**.

## 10.4 Bonnes pratiques de sauvegarde en atelier

| Bonne pratique | Détail |
|---|---|
| **Sauvegarder d'abord, flasher ensuite** | Aucune exception dès que `userdata` peut être touché. |
| **Privilégier les outils officiels** | Smart Switch, HiSuite, Xperia Companion, Finder/Apple Devices pour les données utilisateur. |
| **NANDroid + EFS avant modification** | Sur appareil au bootloader déverrouillé, image complète et EFS **avant** root/ROM. |
| **Stockage externe et copie déportée** | Ne jamais laisser l'unique sauvegarde dans la partition qui sera effacée. |
| **Journal d'atelier** | Modèle exact, IMEI d'origine, firmware flashé (nom + somme de contrôle), version des outils, emplacement de la sauvegarde. |
| **Vérifier l'intégrité** | Contrôler que la sauvegarde s'ouvre/monte avant de lancer l'opération risquée. |
| **RGPD** | Ne copier que le nécessaire, ne rien conserver après restitution, **effacement sécurisé** documenté. |
| **Restituer et effacer** | Après intervention, restaurer les données du propriétaire puis **supprimer** toute copie de l'atelier. |

> **🛠️ Astuce pro** — Datez et nommez clairement chaque sauvegarde (`modele_IMEI-tronqué_date`). En cas d'incident, retrouver rapidement la bonne archive **du bon appareil** évite les erreurs de restauration croisée.

> **🔒 Éthique & légalité — synthèse du chapitre** : sauvegarder protège le propriétaire et le technicien. On sauvegarde **sur l'appareil du propriétaire, avec son accord**, on restaure **le même appareil**, on **ne modifie jamais l'IMEI**, et on **efface** les copies après restitution. Toute manipulation d'identité d'appareil (IMEI) est exclue de cet ouvrage.

---

## Récapitulatif de cette extension

Ces chapitres complètent l'ouvrage sur trois axes : d'autres marques (Huawei/Honor, Motorola, Vivo/iQOO, Sony Xperia, Nokia/HMD, rappel LG), le raisonnement par plateforme SoC (Qualcomm EDL, MediaTek SP Flash Tool, Unisoc), et les opérations avancées facultatives du propriétaire (recovery personnalisé, root Magisk, ROM LineageOS), le tout encadré par une méthodologie de sauvegarde rigoureuse. Le fil directeur reste constant : **restauration de firmware stock officiel signé, sur un appareil dont la propriété est prouvée, avec sauvegarde préalable et information du client**. Les verrous anti-vol et de compte, ainsi que l'IMEI, ne sont **jamais** contournés ni modifiés ; en cas de verrou de propriété, la seule voie demeure la récupération légitime ou le **SAV officiel sur preuve d'achat**.
