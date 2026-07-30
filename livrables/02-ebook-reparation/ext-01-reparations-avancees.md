# Réparations avancées des smartphones

Les chapitres précédents ont couvert les interventions les plus fréquentes : écran, batterie, caméra, dégât des eaux. Ce chapitre aborde les réparations dites **avancées** : celles qui touchent des sous-ensembles moins souvent remplacés, mais dont la panne est bien réelle en atelier. Elles exigent en général une **ouverture complète** de l'appareil, parfois un **transfert de composants**, et pour certaines une **micro-soudure**. On y retrouve les mêmes principes fondamentaux — débrancher la batterie en premier, travailler à chaleur maîtrisée, tester avant de coller — mais poussés un cran plus loin en minutie.

Une remarque liminaire s'impose. Beaucoup de ces réparations sont **rentables sur le papier mais ingrates en pratique** : une nappe de bouton volume coûte quelques euros, mais son remplacement peut demander un démontage quasi intégral. Le réparateur honnête chiffre le **temps** autant que la pièce, et sait dire à un client que remplacer un Taptic Engine sur un modèle récent revient parfois plus cher que la valeur résiduelle de l'appareil. L'objectif de ce chapitre est de vous donner la méthode, mais aussi le discernement.

## Comprendre les deux grandes familles de sous-ensembles

Avant d'entrer dans le détail, il faut distinguer deux façons dont un composant est relié à la carte mère :

- **Les composants sur nappe (connectorisés)** : le module (port de charge, micro, haut-parleur, boutons) se termine par une **nappe souple** (FPC) qui se clipse dans un connecteur à ressort de la carte mère. Le remplacement est **mécanique** : on débranche, on dévisse, on remplace, on rebranche. Aucune soudure. C'est le cas le plus favorable, très répandu sur Android et sur les iPhone récents pour le port de charge.
- **Les composants soudés** : le module est **soudé directement** sur la carte mère (points de soudure ou connecteur board-to-board dessoudable). Le remplacement impose une **station à air chaud**, du flux, une bonne préparation thermique et de l'expérience. C'est le cas des ports de charge de certains iPhone anciens (Lightning soudé), de nombreux micros et de certains connecteurs.

Savoir **à quelle famille appartient le composant du modèle traité** conditionne le devis, l'outillage et le niveau de risque. Une recherche préalable (vues éclatées, guides constructeur, forums spécialisés) est indispensable avant d'ouvrir.

## 9.1 — Remplacement du connecteur / port de charge

Le port de charge est l'un des composants les plus sollicités : insertions répétées, poussière de poche, corrosion, torsion du câble. Symptômes typiques : la charge ne se fait plus ou par intermittence, il faut « caler » le câble dans une position précise, le transfert de données ne fonctionne pas, ou l'appareil chauffe à la charge.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen (version sur nappe) à Difficile (version soudée) |
| **Temps estimé** | 30 à 60 min (nappe) ; 45 à 90 min (soudé, micro-soudure) |
| **Outils nécessaires** | Outils d'ouverture, tournevis (Phillips, Y000, Torx), spudger, brucelles, station à air chaud + flux (version soudée), fer à souder fin, tresse à dessouder |
| **Pièces de remplacement** | Nappe de port de charge compatible/originale, ou sous-carte « daughter board » complète, ou connecteur nu à souder ; adhésif de remontage, joint d'étanchéité |
| **Risque principal** | Diagnostic erroné (port encrassé et non défaillant) ; sur version soudée, arrachement de pastilles de la carte mère |

### Étape 0 — écarter la fausse panne

Avant tout démontage, **inspecter et nettoyer le port**. Dans une majorité de cas, le « port mort » n'est qu'un port **encrassé** : un amas compacté de peluches de poche empêche le câble d'atteindre le fond des broches. Éteindre l'appareil, éclairer le port à la lampe, gratter délicatement le dépôt avec un **cure-dent en bois** ou une brucelle plastique (jamais un objet métallique sous tension), puis souffler à l'air sec. Tester ensuite avec un **câble et un chargeur connus bons**. On élimine ainsi la fausse panne la plus fréquente.

### Étapes (version sur nappe)

1. Éteindre l'appareil, retirer le tiroir SIM, ouvrir selon la procédure générale (par l'écran sur iPhone, par l'arrière sur la plupart des Android).
2. **Débrancher la batterie en premier** et retirer son blindage.
3. Repérer la **nappe de port de charge** : elle court du bas de l'appareil jusqu'à un connecteur sur la carte mère. Sur beaucoup de modèles, elle intègre aussi le **micro principal**, l'**antenne**, parfois le **moteur de vibration** et les **contacts d'interconnexion**.
4. Débrancher tous les connecteurs board-to-board de cette nappe au spudger, bien à plat.
5. Retirer les **vis de fixation** du bloc port de charge et décoller la nappe si elle est maintenue par de l'adhésif (chaleur douce + spudger plastique).
6. Extraire l'ancienne nappe en notant le cheminement exact (photos) et les **caoutchoucs / joints** du connecteur (étanchéité).
7. Positionner la nappe neuve en respectant le même cheminement ; ne pas la pincer sous une vis ou un blindage.
8. Rebrancher les connecteurs board-to-board, replacer les vis et blindages.
9. Rebrancher la batterie **en dernier**.
10. **Tester avant fermeture** : charge (idéalement avec un **USB-ampèremètre** pour vérifier l'intensité réellement absorbée), transfert de données, micro du bas (mémo vocal), vibration si elle passe par cette nappe.
11. Nettoyer, poser l'adhésif neuf, refermer, presser.

### Étapes complémentaires (version soudée — micro-soudure)

Sur les modèles où le connecteur est **soudé directement** sur la carte mère (certains iPhone à port Lightning, quelques Android), l'opération relève de la micro-soudure :

1. Extraire la **carte mère** de l'appareil et la fixer sur un support.
2. Retirer les **blindages** (« shields ») couvrant la zone du connecteur, à l'air chaud + brucelle, après avoir protégé les zones voisines au **ruban Kapton**.
3. Appliquer du **flux**, chauffer le connecteur à température maîtrisée (buse adaptée, air à débit modéré) jusqu'à fusion des points de soudure, puis retirer le connecteur avec des brucelles **sans forcer** : forcer avant fusion complète **arrache les pastilles**.
4. Nettoyer les pastilles à la **tresse à dessouder** et au flux, inspecter au microscope l'absence de piste arrachée.
5. Positionner le connecteur neuf, l'aligner précisément sur les pastilles, refluxer et souder (air chaud ou fer fin selon le boîtier).
6. Contrôler au microscope chaque broche (pas de pont de soudure, pas de manque), nettoyer les résidus de flux à l'IPA.
7. Remonter blindages et carte, tester.

![Figure 9.1 — Nettoyage préalable du port de charge encrassé au cure-dent bois](images/avance-9-1-nettoyage-port.jpg)

![Figure 9.2 — Nappe de port de charge débranchée, micro et antenne intégrés repérés](images/avance-9-2-nappe-charge.jpg)

![Figure 9.3 — Cheminement de la nappe neuve et emplacement des joints d'étanchéité](images/avance-9-3-cheminement-nappe.jpg)

![Figure 9.4 — Version soudée : blindage retiré et zone protégée au Kapton avant dessoudage](images/avance-9-4-blindage-kapton.jpg)

![Figure 9.5 — Contrôle au microscope des broches du connecteur ressoudé](images/avance-9-5-controle-broches.jpg)

![Figure 9.6 — Vérification de l'intensité de charge à l'USB-ampèremètre](images/avance-9-6-usb-amperemetre.jpg)

**⚠️ Points critiques**

- Toujours **écarter la fausse panne** (port encrassé, câble/chargeur défectueux) avant d'ouvrir. On ne remplace pas un port sain.
- Sur nappe combinée, ne pas oublier que **micro, antenne et vibration** peuvent en dépendre : un oubli de reconnexion se traduit par une panne « collatérale » inattendue.
- En version soudée, la **surchauffe** décolle les composants voisins et les pastilles. Protéger, fluxer, chauffer juste ce qu'il faut.

**❌ Erreurs courantes à éviter**

- Remplacer le port alors que seul le **câble** ou le **chargeur** était en cause.
- Pincer la nappe neuve sous une vis (coupure à terme).
- Oublier le **joint d'étanchéité** du connecteur, ce qui laisse entrer poussière et humidité.
- En micro-soudure, tirer sur le connecteur avant fusion complète.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Ne charge toujours pas : connecteur mal enclenché, nappe défectueuse, ou panne en réalité sur la **PMIC / gestion de charge** de la carte mère (mesure à l'alimentation de labo).
- Charge mais pas de données : broches data mal soudées ou nappe de mauvaise qualité.
- Micro du bas muet après l'opération : connecteur de la nappe combinée mal reclipsé.

## 9.2 — Remplacement de la vitre arrière (verre collé)

La vitre arrière en verre se fissure sans que l'appareil soit techniquement en panne. Son remplacement est **esthétique** mais délicat, car le verre est **collé pleine surface** au châssis (et non simplement clipsé). Deux cas se présentent : la vitre est une **coque complète** que l'on décolle et remplace (fréquent sur Android où l'ouverture se fait par l'arrière), ou la vitre est **uniquement le panneau de verre** collé sur un châssis qui reste dans l'appareil (cas des iPhone à partir de l'iPhone 8, où le dos en verre est le plus pénible à changer sans machine).

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 45 min à 2 h (selon retrait des débris) |
| **Outils nécessaires** | Plaque chauffante, fil de découpe (molybdène), médiators, lame, brucelles, station à air chaud, lunettes de protection, gants, adhésif précoupé / colle B-7000 |
| **Pièces de remplacement** | Vitre arrière seule ou coque arrière complète (avec ou sans bobine de charge sans fil / NFC / MagSafe intégrée), adhésif |
| **Risque principal** | Éclats de verre (protection oculaire) ; endommagement de la **bobine de charge sans fil** ou de l'aimant MagSafe ; surchauffe de la batterie sous-jacente |

### Le cas particulier du verre collé sur châssis (type iPhone)

Sur les iPhone à dos en verre, la vitre n'est **pas** une trappe qui s'ouvre : c'est une plaque de verre **laminée** sur le châssis en aluminium. Quand elle casse, il faut **retirer tout le verre résiduel** collé, ce qui est long et salissant. Deux approches :

- **La chaleur + fil/lame** : chauffer le dos pour ramollir la colle, puis gratter le verre morceau par morceau. Très chronophage, poussière de verre partout, risque de chauffer excessivement la batterie située juste dessous.
- **La machine à graver / laser** (en atelier équipé) : sépare proprement le verre. Hors de portée d'un poste d'entrée de gamme.

Il faut être **honnête avec le client** : sur ces modèles, le remplacement manuel du dos en verre est souvent **plus coûteux en main-d'œuvre** que la valeur ajoutée esthétique. Parfois, un simple **skin adhésif** ou une **coque** est la solution raisonnable si l'appareil reste fonctionnel et étanche.

### Étapes (coque arrière complète, type Android)

1. Éteindre, retirer la SIM. **Protection oculaire obligatoire** : le verre fissuré projette des éclats.
2. **Chauffer le pourtour** de la coque arrière à la plaque (70–90 °C) pour ramollir l'adhésif.
3. Insérer un médiator dans un angle, puis faire circuler un **fil de découpe** ou des médiators tout autour pour trancher l'adhésif. Progresser lentement pour ne pas casser davantage le verre.
4. **Attention à la nappe** : sur certains modèles, la coque abrite le **capteur d'empreinte arrière**, l'**antenne**, ou la **bobine de charge sans fil / NFC**. Soulever la coque comme un livre et débrancher la nappe avant de la séparer complètement.
5. Décoller la coque, retirer tous les **résidus d'adhésif** au spudger et à l'IPA.
6. Si la bobine de charge sans fil / NFC est **solidaire** de l'ancienne coque, la **transférer** sur la neuve (ou vérifier que la neuve en est équipée).
7. Nettoyer soigneusement les plans de collage.
8. Poser l'**adhésif précoupé** neuf (ou un cordon de colle B-7000 fin et régulier) sur le châssis.
9. Reconnecter la nappe de la coque, positionner la coque, presser uniformément.
10. **Tester** : charge sans fil, NFC, capteur d'empreinte arrière le cas échéant.
11. Maintenir sous **presse** le temps de prise de la colle.

### Cas induction / MagSafe

Sur les modèles à **charge par induction** (Qi) et, côté iPhone, à **MagSafe**, la vitre arrière recouvre une **bobine de charge** et, pour MagSafe, un **anneau d'aimants** plus une bobine de détection. Points de vigilance :

- La chaleur excessive peut **désaimanter partiellement** ou déformer l'anneau MagSafe et décoller la bobine.
- Une vitre de remplacement **non compatible MagSafe** (sans anneau ni bobine) fera perdre l'alignement magnétique et la charge accélérée : commander la **bonne référence**.
- Après remontage, tester **l'aimantation** (un accessoire MagSafe doit « claquer » et se centrer) et la **charge par induction** (avec un chargeur Qi/MagSafe connu bon, en surveillant l'échauffement).

![Figure 9.7 — Protection oculaire et chauffe du pourtour de la coque arrière fissurée](images/avance-9-7-chauffe-coque.jpg)

![Figure 9.8 — Découpe de l'adhésif au fil de molybdène, coque soulevée en livre](images/avance-9-8-fil-decoupe.jpg)

![Figure 9.9 — Bobine de charge sans fil / NFC solidaire de la coque à transférer](images/avance-9-9-bobine-induction.jpg)

![Figure 9.10 — Retrait des résidus de verre et d'adhésif du châssis à l'IPA](images/avance-9-10-residus-chassis.jpg)

![Figure 9.11 — Pose de l'adhésif précoupé neuf sur le pourtour du châssis](images/avance-9-11-adhesif-coque.jpg)

![Figure 9.12 — Test d'aimantation et d'alignement MagSafe après remontage](images/avance-9-12-test-magsafe.jpg)

**⚠️ Points critiques**

- La **batterie est juste sous le dos** : ne jamais surchauffer ni faire levier au métal à l'aveugle.
- Ne pas perdre / abîmer la **bobine d'induction** et l'**anneau MagSafe** : ce sont eux qui conditionnent la charge sans fil.
- Le verre projette des **éclats** : lunettes indispensables, poste nettoyé après coup.

**❌ Erreurs courantes à éviter**

- Commander une coque **sans** bobine / sans MagSafe et perdre la charge sans fil.
- Chauffer si fort que la batterie gonfle ou que la colle « cuit » et devient impossible à nettoyer.
- Refermer sans avoir retiré tous les micro-éclats (empêchent un collage plan).

**🔧 Dépannage — si ça ne marche pas après remontage**

- Plus de charge sans fil : bobine non reconnectée, endommagée, ou coque non compatible.
- MagSafe faible / mal centré : anneau absent ou déplacé, vitre non compatible.
- Coque qui rebâille : adhésif mal réparti ou résidus non retirés.

## 9.3 — Remplacement du haut-parleur et de l'écouteur interne

Deux transducteurs distincts sont souvent confondus : le **haut-parleur principal** (« loudspeaker », en bas, pour le haut-parleur, la sonnerie, le mains-libres) et l'**écouteur interne** (« earpiece », en haut, collé à l'oreille pendant un appel, qui sur les modèles récents sert aussi de second haut-parleur stéréo). Symptômes : son grésillant, saturé, faible, absent, ou interlocuteur inaudible en appel.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile à Moyen |
| **Temps estimé** | 20 à 45 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis (Phillips/Y000/Torx), spudger, brucelles, brosse ESD |
| **Pièces de remplacement** | Module haut-parleur ou écouteur interne compatible/original ; grilles anti-poussière, joints acoustiques |
| **Risque principal** | Confondre encrassement et panne ; perdre les **grilles / joints acoustiques** (fuite de son, perte d'étanchéité) |

### Étape 0 — écarter la fausse panne

Un son « faible ou étouffé » vient très souvent d'une **grille obstruée** par la poussière et le cérumen, ou d'un **réglage logiciel** (volume, mode silencieux, Bluetooth encore connecté à un autre appareil). Nettoyer la grille (brosse douce, air sec), vérifier les réglages et débrancher tout appareil Bluetooth **avant** de démonter.

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Localiser le transducteur : le **haut-parleur** est généralement un module vissé dans le bas ; l'**écouteur** est en haut, souvent solidaire d'une nappe (capteurs, caméra frontale sur certains modèles).
3. Retirer les **blindages** et vis maintenant le module.
4. Débrancher la nappe (écouteur) ou noter les **contacts à ressort** (pogo pins) par lesquels le haut-parleur est alimenté — beaucoup de haut-parleurs ne sont pas soudés mais alimentés par simple contact.
5. Extraire le module. Récupérer les **grilles anti-poussière** et **joints acoustiques** s'ils sont réutilisables.
6. Nettoyer les surfaces de contact (les pogo pins oxydés causent des sons intermittents).
7. Installer le module neuf, remettre grilles et joints, revisser, reconnecter.
8. Rebrancher la batterie.
9. **Tester** : haut-parleur (musique, haut-parleur d'appel), écouteur (appel test réel), stéréo si applicable, absence de grésillement à fort volume.
10. Refermer avec joints d'étanchéité neufs.

![Figure 9.13 — Nettoyage de la grille de l'écouteur interne obstruée](images/avance-9-13-grille-ecouteur.jpg)

![Figure 9.14 — Module haut-parleur principal dévissé, contacts à ressort visibles](images/avance-9-14-hp-pogo.jpg)

![Figure 9.15 — Transfert des grilles anti-poussière et joints acoustiques sur le module neuf](images/avance-9-15-joints-acoustiques.jpg)

![Figure 9.16 — Test d'appel réel pour valider l'écouteur interne](images/avance-9-16-test-appel.jpg)

**⚠️ Points critiques**

- Les **pogo pins** doivent être propres et non enfoncés : un contact oxydé simule une panne de haut-parleur.
- Les **joints acoustiques** garantissent le rendu et l'étanchéité : ne pas les oublier.

**❌ Erreurs courantes à éviter**

- Remplacer un haut-parleur alors que la grille était simplement bouchée.
- Confondre écouteur et haut-parleur lors de la commande de la pièce.
- Écraser la membrane du transducteur avec un outil.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Toujours pas de son : contacts sales, module défectueux, ou panne sur l'**ampli audio** de la carte (à investiguer si plusieurs sorties muettes).
- Son faible/étouffé : grille ou joint mal remis, fuite acoustique.
- Grésillement : membrane touchée ou pièce de mauvaise qualité.

## 9.4 — Remplacement du microphone

Un smartphone comporte **plusieurs micros** (bas pour la voix, haut/arrière pour la réduction de bruit et la vidéo). Symptôme typique : l'interlocuteur ne vous entend pas, ou seulement en mode haut-parleur, ou le son des vidéos est mauvais. Le micro est souvent **intégré à la nappe du port de charge** (bas) ou à la **nappe supérieure**, plus rarement soudé.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen (Difficile si soudé) |
| **Temps estimé** | 25 à 60 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis, spudger, brucelles ; station à air chaud + flux si micro soudé |
| **Pièces de remplacement** | Nappe intégrant le micro, ou capsule micro à souder ; joints/maillages acoustiques |
| **Risque principal** | Diagnostic (souvent c'est un réglage / une obstruction) ; en version soudée, micro-soudure d'un composant minuscule |

### Étape 0 — isoler le bon micro

Avant d'ouvrir, **tester chaque micro séparément** : mémo vocal (micro du bas), enregistrement vidéo à l'arrière (micro haut/arrière), appel en mode combiné puis haut-parleur. Cela indique **quel** micro remplacer. Vérifier aussi qu'aucune **coque ou film** n'obstrue l'orifice, et qu'aucune app tierce ne bloque le micro.

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Identifier la nappe du micro fautif (souvent la nappe de charge pour le micro du bas).
3. Débrancher, dévisser, extraire le sous-ensemble.
4. Vérifier le **maillage acoustique** (petite grille) devant le micro : s'il est bouché, le simple nettoyage peut suffire.
5. Remplacer la nappe/capsule ; si le micro est soudé, dessouder la capsule à l'air chaud, nettoyer les pastilles, souder la neuve (composant minuscule : microscope requis).
6. Remonter, reconnecter, rebrancher la batterie.
7. **Tester** les trois modes (mémo vocal, vidéo, appel combiné et haut-parleur).
8. Refermer avec joints neufs.

![Figure 9.17 — Test des différents micros au mémo vocal et en vidéo avant démontage](images/avance-9-17-test-micros.jpg)

![Figure 9.18 — Maillage acoustique du micro du bas obstrué, avant nettoyage](images/avance-9-18-maillage-micro.jpg)

![Figure 9.19 — Micro intégré à la nappe de charge, connecteur repéré](images/avance-9-19-micro-nappe.jpg)

![Figure 9.20 — Version soudée : capsule micro sous microscope avant dessoudage](images/avance-9-20-micro-soude.jpg)

**⚠️ Points critiques**

- Bien **identifier le micro** défaillant avant de commander la pièce.
- Le **maillage acoustique** obstrué imite parfaitement une panne : nettoyer d'abord.

**❌ Erreurs courantes à éviter**

- Remplacer la nappe entière alors qu'un nettoyage suffisait.
- Oublier de replacer la grille/joint devant le micro (son creux).

**🔧 Dépannage — si ça ne marche pas après remontage**

- Toujours inaudible : mauvaise nappe remplacée, ou panne côté **codec audio** de la carte.
- Son faible : maillage mal remis.

## 9.5 — Remplacement du moteur de vibration / Taptic Engine

Le retour haptique va d'un simple **moteur à balourd** (bas de gamme, anciens modèles) à un **actionneur linéaire sophistiqué** — le **Taptic Engine** chez Apple, équivalents « linear resonant actuator » chez les Android haut de gamme. Symptômes : plus de vibration, vibration faible/bruyante, ou cliquetis (moteur décollé). Sur iPhone, le Taptic Engine est aussi impliqué dans certains retours d'interface.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile à Moyen |
| **Temps estimé** | 20 à 40 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis (Phillips/Y000/Torx), spudger, brucelles |
| **Pièces de remplacement** | Moteur de vibration / Taptic Engine compatible/original |
| **Risque principal** | Coût de la pièce parfois disproportionné ; nappe du Taptic pincée ou mal reconnectée |

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Localiser le moteur (souvent près de la batterie ou du bas). Le **Taptic Engine** est un bloc rectangulaire relativement volumineux.
3. Retirer le blindage éventuel, débrancher la nappe ou dessouder les deux fils (moteurs simples parfois soudés).
4. Dévisser et extraire le moteur.
5. Installer le neuf, revisser, reconnecter.
6. Rebrancher la batterie.
7. **Tester** : réglages > sons/haptique, appel entrant, retour de frappe clavier.
8. Refermer.

![Figure 9.21 — Taptic Engine dévissé, nappe de connexion visible](images/avance-9-21-taptic.jpg)

![Figure 9.22 — Moteur à balourd d'un modèle d'entrée de gamme, fils soudés](images/avance-9-22-moteur-balourd.jpg)

![Figure 9.23 — Test du retour haptique dans les réglages après remontage](images/avance-9-23-test-haptique.jpg)

**⚠️ Points critiques**

- Chiffrer honnêtement : sur certains modèles récents, la pièce est **chère** au regard du service rendu.
- Ne pas pincer la **nappe du Taptic** sous une vis ou un blindage.

**❌ Erreurs courantes à éviter**

- Confondre « pas de vibration » et **mode silencieux / réglage haptique désactivé** (à vérifier avant d'ouvrir).
- Forcer un moteur soudé sans dessouder (arrachage de piste).

**🔧 Dépannage — si ça ne marche pas après remontage**

- Toujours muet : nappe mal clipsée, ou réglage haptique désactivé.
- Vibration bruyante : moteur mal fixé (vis manquante) ou pièce de mauvaise qualité.

## 9.6 — Remplacement des boutons (power, volume, silencieux, nappe)

Les boutons physiques (marche/arrêt, volume, interrupteur silencieux) sont actionnés par des **dômes** reliés à une **nappe latérale**. Symptômes : bouton qui ne répond plus, reste enfoncé, « molasse », ou déclenche tout seul. La panne est souvent **mécanique** (dôme usé, nappe fissurée) et la nappe est généralement **peu coûteuse** — mais son accès peut être profond.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen à Difficile (nappe souvent enfouie sous la carte) |
| **Temps estimé** | 30 à 75 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis, spudger, brucelles, chaleur douce |
| **Pièces de remplacement** | Nappe de boutons power/volume/silencieux, caoutchoucs de bouton, capuchons |
| **Risque principal** | Démontage étendu (parfois retrait de la carte mère) ; perdre les petits **caoutchoucs / poussoirs** externes |

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Repérer le cheminement de la **nappe latérale** : elle longe le châssis et se connecte à la carte, souvent **sous** celle-ci ou sous des blindages. Un retrait partiel de la carte peut être nécessaire.
3. Retirer les blindages et débrancher le connecteur de la nappe.
4. La nappe est **collée** contre le châssis : chauffer doucement et décoller au spudger plastique sans la déchirer.
5. Récupérer les **poussoirs externes** et **caoutchoucs** (ils tombent facilement).
6. Poser la nappe neuve exactement sur le même trajet (le mauvais placement empêche l'alignement des dômes avec les boutons externes).
7. Remettre les poussoirs, reconnecter, remonter la carte et les blindages.
8. Rebrancher la batterie.
9. **Tester** chaque bouton : power (verrouillage, capture d'écran, forcer le redémarrage), volume +/−, interrupteur silencieux.
10. Refermer.

![Figure 9.24 — Nappe latérale power/volume collée au châssis, cheminement repéré](images/avance-9-24-nappe-boutons.jpg)

![Figure 9.25 — Poussoirs externes et caoutchoucs récupérés lors du démontage](images/avance-9-25-poussoirs.jpg)

![Figure 9.26 — Décollage à chaleur douce de la nappe usée](images/avance-9-26-decollage-nappe.jpg)

![Figure 9.27 — Test des boutons après remontage](images/avance-9-27-test-boutons.jpg)

**⚠️ Points critiques**

- L'**alignement** dôme / poussoir externe est crucial : décalé, le bouton reste mou ou coincé.
- Ne pas perdre les **micro-caoutchoucs** d'étanchéité des boutons.

**❌ Erreurs courantes à éviter**

- Déchirer la nappe en la décollant à froid.
- Remonter sans les poussoirs (bouton inopérant).
- Sous-estimer le temps : la nappe est bon marché, l'accès ne l'est pas.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Bouton mou : poussoir mal placé ou nappe décalée.
- Bouton qui s'active seul : nappe pincée ou dôme comprimé par une vis trop serrée.

## 9.7 — Remplacement du châssis / de la coque (transfert intégral)

Quand le **châssis** (l'ossature en aluminium/plastique qui tient tout) est tordu, corrodé ou fissuré, ou quand on veut « repartir à neuf » sur un appareil massivement abîmé, on procède à un **transfert intégral** : tous les composants de l'ancien châssis migrent vers un châssis neuf. C'est l'une des opérations les plus longues, en réalité un **remontage complet de l'appareil**.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 1 h 30 à 3 h |
| **Outils nécessaires** | Jeu complet d'outils, plaque chauffante, tapis organiseur (indispensable), microscope/loupe, adhésifs neufs |
| **Pièces de remplacement** | Châssis nu neuf (housing), ensemble d'adhésifs et joints, éventuellement boutons/nappes neufs |
| **Risque principal** | Perte / inversion de vis et de nappes (des dizaines) ; oubli d'un joint d'étanchéité |

### Étapes (vue d'ensemble)

1. Démonter **intégralement** l'appareil, en photographiant chaque étape et en **cartographiant chaque vis** sur le tapis organiseur.
2. Retirer un à un : écran, batterie, carte mère, caméras, haut-parleur, port de charge, Taptic, nappes latérales, antennes.
3. Nettoyer chaque composant et le châssis neuf.
4. Reporter dans le **châssis neuf** les composants dans l'**ordre inverse** du démontage, avec **adhésifs neufs** à chaque interface.
5. Vérifier les **caoutchoucs de boutons**, les **joints d'antenne**, les **grilles acoustiques**.
6. Reconnecter toutes les nappes, remettre tous les blindages.
7. Rebrancher la batterie **en dernier**.
8. **Test complet** de toutes les fonctions avant collage de l'écran et de la coque.
9. Refermer avec les adhésifs d'étanchéité neufs.

![Figure 9.28 — Cartographie complète des vis sur le tapis organiseur avant transfert](images/avance-9-28-cartographie-vis.jpg)

![Figure 9.29 — Composants de l'ancien châssis alignés et étiquetés](images/avance-9-29-composants-alignes.jpg)

![Figure 9.30 — Report de la carte mère dans le châssis neuf](images/avance-9-30-report-carte.jpg)

![Figure 9.31 — Test complet des fonctions avant collage final](images/avance-9-31-test-complet.jpg)

**⚠️ Points critiques**

- **La rigueur d'organisation fait tout** : des dizaines de vis quasi identiques, plusieurs nappes fragiles. Sans tapis organiseur et photos, l'erreur est quasi certaine.
- Ne réutiliser **aucun adhésif** d'étanchéité : tout est neuf.

**❌ Erreurs courantes à éviter**

- Inverser deux vis de longueurs proches (risque de « long screw damage »).
- Oublier un joint ou une grille (étanchéité et acoustique perdues).
- Sous-devis : c'est un chantier de plusieurs heures.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Reprendre méthodiquement : une fonction absente = une nappe précise oubliée.
- Ne pas coller tant qu'une fonction n'est pas rétablie.

## 9.8 — Réparation du Face ID et du capteur de proximité

Le **Face ID** (reconnaissance faciale 3D d'Apple) repose sur un module complexe : **projecteur de points**, caméra infrarouge, illuminateur. Ce module est **sérialisé** et **apparié à la carte mère** au niveau matériel. Le **capteur de proximité** (qui éteint l'écran pendant un appel) est un composant distinct, souvent intégré à la nappe frontale ou à l'écran.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile (Face ID matériel souvent **non réparable** hors Apple) |
| **Temps estimé** | Variable |
| **Outils nécessaires** | Outils d'ouverture, tournevis, spudger, brucelles, microscope (si tentative sur nappe) |
| **Pièces de remplacement** | Nappe de projecteur de points **d'origine** (appairée), nappe capteur de proximité / écouteur |
| **Risque principal** | **Perte définitive et irréversible du Face ID** ; sérialisation Apple |

### Avertissement essentiel sur la sérialisation Apple

Le **projecteur de points** du Face ID est **appairé usine** à la carte mère de l'appareil. **On ne peut pas le remplacer par une pièce tierce** ni le transférer d'un autre appareil : Face ID cessera de fonctionner, définitivement, avec le message « Face ID indisponible ». Cette liaison est **volontaire** (sécurité biométrique) et **non contournable** par le réparateur indépendant en l'état des pratiques.

Concrètement :

- Si le module Face ID est **matériellement mort** (chute, oxydation du projecteur), la seule voie officielle est le **service Apple** (réparation carte + module appairés). En atelier indépendant, on informe le client que **Face ID est perdu**.
- En revanche, certaines pannes Face ID viennent de la **nappe de câble** entre le module et la carte (fissurée lors d'un remplacement d'écran, ou par flexion). Dans ce cas précis, un **remplacement de la nappe seule** (par micro-soudure, en conservant les puces d'origine appariées) peut **restaurer** le Face ID. C'est une réparation avancée de micro-soudure, réalisée par des spécialistes.
- **Ne jamais promettre** de rétablir un Face ID mort par simple pièce détachée.

### Étapes (cas d'une nappe de proximité / écouteur, réparable)

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Retirer le blindage des connecteurs frontaux.
3. Débrancher la nappe **capteur de proximité / écouteur / caméra frontale** (souvent regroupés).
4. Extraire l'ancienne nappe, transférer la neuve.
5. Reconnecter, remonter.
6. Rebrancher la batterie.
7. **Tester** : lors d'un appel, l'écran doit **s'éteindre à l'approche** du visage. Vérifier la luminosité automatique (capteur ambiant souvent voisin).
8. Refermer.

![Figure 9.32 — Module Face ID (projecteur de points) apparié, à ne pas remplacer par une pièce tierce](images/avance-9-32-module-faceid.jpg)

![Figure 9.33 — Nappe regroupant capteur de proximité, écouteur et caméra frontale](images/avance-9-33-nappe-proximite.jpg)

![Figure 9.34 — Test du capteur de proximité en appel (écran qui s'éteint)](images/avance-9-34-test-proximite.jpg)

**⚠️ Points critiques**

- **Informer le client AVANT** toute intervention : un Face ID matériellement HS ne se répare pas par pièce tierce.
- Une nappe Face ID **pliée ou chauffée** lors d'un changement d'écran suffit à tuer la fonction : manipuler avec le plus grand soin.

**❌ Erreurs courantes à éviter**

- Vendre un « remplacement de Face ID » avec une pièce du marché : cela **ne fonctionnera pas**.
- Confondre panne de **proximité** (réparable) et panne du **module Face ID** (non réparable simplement).

**🔧 Dépannage — si ça ne marche pas après remontage**

- « Face ID indisponible » : module ou nappe endommagés ; souvent irréversible sans micro-soudure spécialisée.
- Écran qui reste allumé en appel : capteur de proximité mal reconnecté ou nappe défectueuse.

## 9.9 — Réparation du Touch ID / lecteur d'empreinte

Le **Touch ID** (Apple) et les lecteurs d'empreinte Android suivent la même logique de sécurité : le capteur est **apparié** à la carte mère (Apple) ou au **processeur sécurisé**. Il existe trois grandes implantations : **bouton d'accueil** (Touch ID / anciens Android), **capteur arrière ou latéral** (capacitif), **capteur sous l'écran** (optique ou ultrasonique sur les Android récents).

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen à Difficile |
| **Temps estimé** | 30 à 60 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis, spudger, brucelles |
| **Pièces de remplacement** | Bouton Touch ID **d'origine de l'appareil**, ou capteur latéral/arrière compatible, ou capteur sous écran solidaire de la dalle |
| **Risque principal** | Sur Apple, **perte définitive du Touch ID** si le bouton d'origine est perdu/cassé ; empreintes à ré-enregistrer |

### Avertissement sérialisation (Apple)

Comme le Face ID, le **Touch ID d'Apple est apparié** : le bouton d'accueil est lié à la carte mère. Si le **bouton d'origine casse**, **Touch ID est définitivement perdu** — un bouton neuf ou d'un autre appareil rétablira le **clic** mais **jamais la lecture d'empreinte**. On peut donc réparer l'aspect *bouton* (retour au tactile virtuel « AssistiveTouch » côté logiciel) mais pas la biométrie. À annoncer au client **avant**.

### Cas Android

- **Capteur capacitif arrière/latéral** : généralement **remplaçable** par une pièce compatible ; les empreintes sont à **ré-enregistrer**.
- **Capteur sous écran** : souvent **solidaire de la dalle** ou apparié à elle ; un changement de dalle impose de **ré-enregistrer** et parfois un **calibrage**. Un capteur incompatible ne fonctionnera pas.

### Étapes (capteur arrière/latéral Android)

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Localiser le capteur (souvent solidaire de la coque arrière ou d'une nappe dédiée).
3. Débrancher la nappe, extraire l'ancien capteur.
4. Installer le neuf, reconnecter.
5. Rebrancher la batterie.
6. **Ré-enregistrer les empreintes** dans les réglages et tester le déverrouillage.
7. Refermer.

![Figure 9.35 — Bouton Touch ID d'origine apparié : le conserver impérativement](images/avance-9-35-touchid-origine.jpg)

![Figure 9.36 — Capteur d'empreinte arrière capacitif débranché](images/avance-9-36-capteur-arriere.jpg)

![Figure 9.37 — Ré-enregistrement des empreintes après remplacement](images/avance-9-37-reenregistrement.jpg)

**⚠️ Points critiques**

- Apple : **ne jamais perdre ni endommager** le bouton Touch ID d'origine.
- Android sous écran : vérifier la **compatibilité capteur / dalle** avant de commander.

**❌ Erreurs courantes à éviter**

- Promettre le Touch ID avec un bouton tiers sur iPhone.
- Oublier de **ré-enregistrer** les empreintes (Android).

**🔧 Dépannage — si ça ne marche pas après remontage**

- Empreinte refusée : capteur incompatible, empreintes non ré-enregistrées, ou (Apple) capteur non apparié.
- Bouton qui clique mais ne lit pas : sur Apple, biométrie perdue (normal si bouton non d'origine).

## 9.10 — Remplacement de la caméra frontale

La caméra frontale peut être **indépendante** (Android) ou **intégrée au bloc Face ID / capteurs** (iPhone). Symptômes : image floue, noire, tachée, ou app photo qui plante. Le geste est simple, mais côté iPhone il faut **impérativement** distinguer la caméra frontale (remplaçable) du **projecteur de points Face ID** (non).

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile à Moyen |
| **Temps estimé** | 20 à 40 min |
| **Outils nécessaires** | Outils d'ouverture, tournevis, spudger, brucelles, poire soufflante |
| **Pièces de remplacement** | Module caméra frontale compatible/original (attention à ne pas prendre le bloc Face ID) |
| **Risque principal** | Endommager la **nappe Face ID voisine** ; poussière piégée sous la lentille |

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Retirer le blindage des connecteurs frontaux.
3. Débrancher **uniquement** la nappe de la caméra frontale (sur iPhone, elle est souvent regroupée avec la nappe Face ID/proximité : repérer précisément le bon connecteur).
4. Extraire le module, **sans plier** la nappe Face ID voisine.
5. Nettoyer la **fenêtre de verre** frontale (poussière = taches).
6. Installer le module neuf, souffler la poussière avant fermeture.
7. Reconnecter, rebrancher la batterie.
8. **Tester** : photo/vidéo frontale, mise au point, et (iPhone) vérifier que Face ID fonctionne toujours.
9. Refermer.

![Figure 9.38 — Repérage du connecteur de caméra frontale distinct de la nappe Face ID](images/avance-9-38-connecteur-frontale.jpg)

![Figure 9.39 — Nettoyage de la fenêtre de verre frontale à la poire soufflante](images/avance-9-39-fenetre-frontale.jpg)

![Figure 9.40 — Test de la caméra frontale et de Face ID après remontage](images/avance-9-40-test-frontale.jpg)

**⚠️ Points critiques**

- Ne **jamais** confondre ou abîmer la nappe **Face ID** lors du geste.
- Poussière sous la fenêtre = taches : travailler propre.

**❌ Erreurs courantes à éviter**

- Commander un bloc « caméra + Face ID » en croyant remplacer la seule caméra (le Face ID d'un autre appareil ne s'appairera pas).
- Piéger de la poussière à la fermeture.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Image noire / plantage : module mal connecté ou défectueux.
- Taches : poussière sous la fenêtre.
- Face ID HS après coup : nappe Face ID endommagée pendant l'opération.

## 9.11 — Nettoyage et remplacement du tiroir SIM

Le **tiroir SIM** et son **lecteur** (« SIM tray reader ») peuvent poser problème : tiroir tordu ou perdu, carte non détectée, broches du lecteur enfoncées ou corrodées, joint d'étanchéité manquant. C'est une réparation simple mais souvent négligée, alors qu'elle conditionne le **réseau**.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile (tiroir) à Moyen (lecteur) |
| **Temps estimé** | 10 à 40 min |
| **Outils nécessaires** | Outil d'éjection SIM, outils d'ouverture (pour le lecteur), tournevis, spudger, brucelles, brosse ESD |
| **Pièces de remplacement** | Tiroir SIM du **bon modèle** (dimensions et nombre de SIM/eSIM variables), lecteur SIM sur nappe, joint |
| **Risque principal** | Mauvaise référence de tiroir ; broches du lecteur pliées ; perte du joint d'étanchéité |

### Étape 0 — le cas le plus simple

Souvent, « la SIM n'est pas détectée » se règle **sans ouvrir** : éjecter le tiroir, **nettoyer les contacts dorés** de la SIM et le tiroir (gomme douce, brosse), vérifier que la SIM est **bien positionnée** dans le tiroir et que le tiroir est **du bon format**. Réinsérer et tester. Vérifier aussi côté logiciel (mode avion, réglages réseau).

### Étapes (remplacement du lecteur SIM)

1. Éjecter et retirer le tiroir. Ouvrir l'appareil, **débrancher la batterie**.
2. Localiser le **lecteur SIM** : c'est un berceau métallique relié à la carte par une nappe ou soudé.
3. Débrancher la nappe (ou dessouder si soudé), retirer le lecteur.
4. Inspecter les **broches** : une broche enfoncée par une mauvaise insertion suffit à empêcher la détection.
5. Installer le lecteur neuf, reconnecter.
6. Récupérer / remplacer le **joint d'étanchéité** du tiroir.
7. Rebrancher la batterie.
8. Insérer une SIM connue bonne, **tester** : détection, réseau, appels, données.
9. Refermer.

![Figure 9.41 — Nettoyage des contacts dorés de la carte SIM et du tiroir](images/avance-9-41-contacts-sim.jpg)

![Figure 9.42 — Berceau lecteur SIM et broches à inspecter](images/avance-9-42-lecteur-sim.jpg)

![Figure 9.43 — Joint d'étanchéité du tiroir SIM à remettre](images/avance-9-43-joint-sim.jpg)

![Figure 9.44 — Test de détection réseau avec une SIM connue bonne](images/avance-9-44-test-reseau.jpg)

**⚠️ Points critiques**

- Commander le **tiroir exact** du modèle (simple SIM, double SIM, SIM + microSD, formats différents).
- Une **broche pliée** du lecteur imite une SIM morte : inspecter avant de remplacer.

**❌ Erreurs courantes à éviter**

- Forcer un tiroir de mauvais format (déforme le lecteur).
- Oublier le **joint** (perte d'étanchéité au niveau du tiroir).

**🔧 Dépannage — si ça ne marche pas après remontage**

- SIM toujours non détectée : broches endommagées, nappe mal connectée, ou panne côté **modem/transceiver** de la carte (voir chapitre diagnostic « pas de réseau »).
- Détection intermittente : tiroir mal ajusté ou contacts sales.

\newpage

# Spécificités par gamme

Les procédures des chapitres précédents sont **transversales** : elles s'appliquent à la plupart des smartphones. Mais chaque gamme a ses **habitudes de construction** — type de vis, sens d'ouverture, colle, sérialisation — qui changent la façon d'aborder l'appareil. Connaître ces particularités **avant** d'ouvrir évite les mauvaises surprises et les casses. Ce chapitre synthétise, gamme par gamme, ce qu'il faut savoir en pratique.

Un rappel de méthode vaut pour toutes : **rechercher la vue éclatée du modèle exact** (le numéro de modèle précis, pas seulement le nom commercial) avant l'intervention. Deux appareils au nom voisin peuvent avoir des architectures très différentes.

## 10.1 — Apple iPhone

L'iPhone se caractérise par une **fabrication soignée**, des **vis propriétaires** et une **sérialisation croissante** des composants.

### Points de démontage

- **Vis externes** : deux **Pentalobe P2** en bas, de part et d'autre du port. Vis internes en **Phillips**, **Tripoint Y000** (batterie, blindages) et **Torx** selon les zones.
- **Sens d'ouverture** : par l'**écran, à l'avant**, sur la quasi-totalité des modèles. Exception : à partir de l'**iPhone 14** (non-Pro), l'architecture s'ouvre aussi **par l'arrière** (dos en verre déposable), ce qui simplifie l'accès à la batterie.
- **Sens d'ouverture de l'écran** : selon les générations, l'écran s'ouvre en « livre » par la **droite** ou par le **bas** — vérifier pour ne pas arracher les nappes courtes.

### Étanchéité

À partir de l'iPhone 7, la certification **IP** repose sur un **joint adhésif périphérique**. Toute ouverture impose de **remplacer l'adhésif** pour restaurer (partiellement) l'étanchéité.

### Sérialisation — le point majeur

Apple **apparie** de nombreux composants à la carte mère. Sans appairage (outil de programmation type JCID, ou service officiel), on obtient des **avertissements** et des **pertes de fonction** :

- **Batterie** : message « entretien / batterie inconnue », perte de l'affichage de l'état de santé.
- **Écran** : perte de **True Tone**, avertissement « pièce inconnue », parfois luminosité auto perturbée.
- **Face ID** : projecteur de points **non remplaçable** par pièce tierce (voir 9.8).
- **Touch ID** : bouton d'accueil **apparié** (voir 9.9).
- **Caméra** : sur modèles récents, avertissement de non-authenticité possible.

### Pièges

- **Long screw damage** : sur certains modèles, une vis trop longue à un emplacement précis **perce une piste** et provoque une panne (écran, tactile). Cartographier les vis.
- **Nappe Face ID** fragile lors du changement d'écran : ne pas la plier ni la chauffer.

## 10.2 — Samsung Galaxy (S / A / Note)

Samsung couvre un spectre très large, du haut de gamme (S, Note) à l'entrée/milieu de gamme (A). Le point commun : **ouverture par l'arrière** et **écran collé pleine surface**.

### Points de démontage

- **Ouverture** : par la **coque arrière en verre** (haut de gamme) ou plastique (entrée de gamme), **collée**. On chauffe et on décolle au fil/médiator.
- **Attention nappe** : la coque arrière peut porter le **capteur d'empreinte arrière** (anciens modèles), la **bobine de charge sans fil** et l'**antenne NFC**. Soulever en livre, débrancher avant de séparer.
- **Vis internes** : essentiellement **Phillips**.

### Écran — service pack vs dalle seule

L'écran **AMOLED est collé pleine surface** au châssis. Deux stratégies (voir 1.3) :

- **Service pack complet** (dalle + châssis) : fiable, recommandé, plus cher.
- **Dalle seule** : économique mais **taux de casse élevé** (dalle très fine, séparation à chaud au fil).

### Empreinte sous écran

Les Galaxy S/Note récents utilisent un capteur **ultrasonique sous écran**, apparié à la dalle. Un changement de dalle impose souvent un **ré-enregistrement** et parfois un **calibrage**. Un capteur/dalle incompatible ne lira pas.

### Sérialisation

Samsung **sérialise moins** qu'Apple, mais les fonctions liées à la dalle (empreinte sous écran) restent sensibles. Les **service pack** simplifient en fournissant un ensemble cohérent.

### Pièges

- Coque arrière **très fragile** au décollage (verre fin), surtout sur les modèles à dos incurvé.
- Bobine de charge / NFC parfois **solidaire** de la coque : à transférer.

## 10.3 — Samsung Galaxy Z (Fold / Flip) — écran pliable

**Avertissement d'honnêteté technique.** Les Galaxy **Z Fold** et **Z Flip** sont parmi les appareils les **plus fragiles et les plus coûteux** à réparer. L'écran **pliable interne** est une dalle **ultra-fine** protégée par une couche de plastique/verre ultra-mince (« UTG ») avec une **charnière** complexe. Ce n'est **pas** une réparation d'atelier généraliste débutant.

### Réalités à annoncer au client

- L'**écran pliable interne** coûte très cher (souvent la majeure partie de la valeur de l'appareil) et se change en **service pack** — rarement en dalle seule.
- La zone de **pli** est un point faible connu : bulles, décollement du film protecteur, ligne au niveau du pli. **Ne jamais retirer le film protecteur d'usine** de l'écran interne comme un simple protège-écran : il fait **partie de la dalle**.
- La **charnière** contient de nombreuses pièces et joints (protection anti-poussière) ; un démontage mal fait laisse entrer des particules qui **rayent** la dalle par l'intérieur.
- L'**étanchéité** (quand elle existe, IPX8 sur certains modèles) est **partielle** et compromise par toute ouverture.

### Recommandation

Pour un réparateur non spécialisé, la position honnête est souvent : **orienter vers un service spécialisé Fold/Flip ou le constructeur**, en informant du **coût réel** (proche du remplacement de l'appareil pour l'écran interne). Les interventions raisonnables en atelier généraliste se limitent en général à la **batterie**, l'**écran externe**, le **port de charge** — et encore, avec prudence. Ne jamais **sous-estimer** ni sous-deviser une intervention sur écran interne pliable.

## 10.4 — Xiaomi / Redmi / POCO

Xiaomi (et ses sous-marques Redmi et POCO) offre un **excellent rapport qualité/prix**, avec une construction **proche des standards Android** mais des **variations fréquentes** d'un modèle à l'autre.

### Points de démontage

- **Ouverture** : par l'**arrière**, coque en verre ou plastique **collée** (chaleur + médiator).
- **Vis internes** : **Phillips**, nombreuses ; souvent un **cache plastique interne** vissé recouvre la carte.
- **Nappes** : cheminements parfois denses ; bien photographier.

### Particularités

- **Grande diversité** de modèles et de références de pièces : **vérifier le numéro de modèle exact** (souvent gravé dans le tiroir SIM ou sous une étiquette interne). Deux Redmi voisins n'ont pas les mêmes pièces.
- **Disponibilité des pièces** variable selon les modèles récents ; anticiper l'approvisionnement.
- Sérialisation **faible**, ce qui facilite les remplacements écran/batterie.

### Pièges

- Coques arrière parfois **très fines** et fragiles.
- Emplacements de vis nombreux et **caches internes** faciles à oublier de refixer.

## 10.5 — Google Pixel

Le Pixel a une construction **spécifique** qui le distingue des autres Android.

### Points de démontage

- **Ouverture** : par l'**écran, à l'avant**, sur plusieurs générations (contrairement à la majorité des Android qui s'ouvrent par l'arrière). D'autres modèles s'ouvrent par l'arrière : **vérifier le modèle exact**.
- **Vis internes** : **Torx T3–T5** fréquents (moins de Phillips que la moyenne Android).
- **Écran** : OLED collé ; sur certaines générations, une **barre de capteurs** ou des nappes spécifiques sont à transférer.

### Particularités

- Les modèles récents intègrent un **capteur d'empreinte sous écran** (optique) sensible, à **calibrer**/ré-enregistrer après changement de dalle.
- **Face Unlock** sur certains modèles haut de gamme : composants avant sensibles.
- Disponibilité et prix des pièces Pixel parfois **moins favorables** que Samsung/Xiaomi selon les marchés.

### Pièges

- Ne pas présumer du sens d'ouverture : il **varie selon la génération**.
- Capteur d'empreinte optique sous écran à **recalibrer** impérativement.

## 10.6 — Tableau comparatif de synthèse

| Gamme | Sens d'ouverture | Vis dominantes | Colle / étanchéité | Sérialisation | Pièges principaux |
|---|---|---|---|---|---|
| **iPhone** | Avant (écran) ; arrière dès iPhone 14 non-Pro | Pentalobe P2 (ext.), Phillips, Y000, Torx | Joint adhésif IP (dès iPhone 7) | **Forte** : batterie, écran (True Tone), Face ID, Touch ID, caméra | Long screw damage ; nappe Face ID non remplaçable ; True Tone à appairer |
| **Samsung S/A/Note** | Arrière (coque verre collée) | Phillips | AMOLED collé pleine surface ; coque collée | Modérée ; empreinte sous écran appariée à la dalle | Dalle seule très risquée ; bobine/NFC dans la coque ; verre fin fragile |
| **Samsung Z Fold/Flip** | Arrière + charnière complexe | Phillips + vis charnière | UTG pliable ; étanchéité partielle | Modérée ; écran interne en service pack | **Extrêmement fragile et cher** ; film interne = partie de la dalle ; poussière dans la charnière |
| **Xiaomi/Redmi/POCO** | Arrière (coque collée) + cache interne | Phillips | Coque collée | Faible | Grande diversité de références ; coques fines ; caches internes |
| **Google Pixel** | Variable (avant OU arrière selon génération) | Torx T3–T5 | OLED collé | Faible à modérée ; empreinte optique à calibrer | Sens d'ouverture variable ; capteur empreinte à recalibrer ; pièces parfois chères |

\newpage

# Diagnostic guidé par symptôme (approfondi)

Un bon diagnostic **économise du temps, des pièces et de la crédibilité**. Remplacer des composants « au hasard » jusqu'à ce que ça marche est coûteux et peu professionnel. Ce chapitre propose, pour les symptômes les plus fréquents, un **arbre de décision** : causes probables classées de la **plus fréquente/la moins coûteuse** à la plus grave, **tests à réaliser** (visuels, au multimètre, à l'alimentation de laboratoire, à l'USB-ampèremètre), et **renvoi** vers la réparation adéquate des chapitres précédents.

## Rappel des outils de diagnostic et de leur usage

- **Multimètre** : continuité (bips), tension, résistance. Sert à vérifier une nappe, un fusible, la présence d'une tension d'alimentation, un court-circuit (résistance très faible entre une ligne et la masse).
- **Alimentation de laboratoire (DC power supply)** : on alimente la carte via le connecteur de batterie (au bon voltage nominal, ~3,8 V) et on **lit l'intensité consommée**. C'est l'outil de diagnostic n°1 en micro-réparation :
  - **0 mA** : la carte ne « démarre » pas du tout (coupure d'alimentation, absence de séquence de boot).
  - **conso qui grimpe puis se stabilise** : boot normal.
  - **conso qui monte et se fige haut / la carte chauffe** : **court-circuit** (souvent sur une ligne d'alimentation).
- **USB-ampèremètre** : intercalé entre chargeur et appareil, il mesure **l'intensité de charge réellement absorbée** — idéal pour distinguer une panne de charge d'un simple câble/chargeur.
- **Caméra thermique / doigt** : localise un **point chaud** (composant en court-circuit) sur la carte alimentée.
- **Testeurs dédiés** (écran, batterie) : valident une **pièce** hors appareil.

Règle d'or : **procéder du simple au complexe**, et du **non-invasif** (réglages, câble, nettoyage) vers l'**invasif** (ouverture, mesure sur carte).

## 11.1 — L'appareil ne s'allume plus (écran noir, aucune réaction)

### Causes probables (ordonnées)

1. **Batterie totalement déchargée** ou HS.
2. **Câble / chargeur défectueux** (l'appareil est en fait vide et ne charge pas).
3. **Port de charge encrassé / défaillant**.
4. **Blocage logiciel** (plantage, à forcer le redémarrage).
5. **Nappe d'écran déconnectée** (l'appareil s'allume mais n'affiche rien — voir 11.2).
6. **Panne d'alimentation sur la carte** (PMIC, court-circuit, ligne morte).

### Tests à faire

1. **Mettre en charge** 15–30 min avec un **chargeur et un câble connus bons**. Observer un signe de vie (logo, vibration, chaleur).
2. **USB-ampèremètre** : à la connexion, une charge normale consomme un courant (par ex. plusieurs centaines de mA). **0 mA** = pas de charge (port, câble, batterie ou carte).
3. **Forcer le redémarrage** (combinaison de boutons propre au modèle) pour écarter le blocage logiciel.
4. Si toujours mort, **ouvrir** et **alimenter la carte à l'alimentation de labo** via le connecteur batterie :
   - **0 mA** au bouton power : coupure d'alimentation / court-circuit franc / carte HS.
   - conso qui monte normalement : la carte boote — le problème était la **batterie** ou l'**écran**.
   - conso figée haute + chaleur : **court-circuit** (localiser au doigt / caméra thermique).

### Renvoi

- Batterie HS → **1.4** (remplacement batterie).
- Port de charge → **9.1**.
- Affiche rien mais boote → **11.2** et **1.2/1.3** (écran).
- Court-circuit / PMIC → micro-réparation carte (spécialiste).

## 11.2 — L'appareil vibre / réagit mais n'affiche rien

### Causes probables (ordonnées)

1. **Nappe d'écran mal connectée** (après une réparation) ou déconnectée par un choc.
2. **Écran défectueux** (dalle morte) alors que l'appareil fonctionne (sons, vibration).
3. **Rétroéclairage HS** (LCD) : image très sombre visible à la lampe.
4. **Panne partielle carte** (ligne d'affichage, circuit de rétroéclairage).

### Tests à faire

1. Dans le noir, **éclairer l'écran en biais** : si une image faible est visible, c'est le **rétroéclairage** (LCD) — circuit ou nappe.
2. Écouter/sentir : **sons, vibrations, notifications** ? L'appareil « tourne » mais n'affiche pas → écran ou nappe.
3. **Rebrancher / remplacer l'écran** par un écran connu bon pour trancher entre écran et carte.
4. Vérifier la **nappe** et le **connecteur** (broches, oxydation).

### Renvoi

- Nappe / écran → **1.2** (iPhone) ou **1.3** (Android/Samsung).
- Rétroéclairage LCD / ligne d'affichage → micro-réparation (fusible/bobine de backlight).

## 11.3 — Redémarrages intempestifs / bootloop

### Causes probables (ordonnées)

1. **Batterie usée** : chute de tension sous charge → extinction/redémarrage.
2. **Logiciel** : mise à jour ratée, app instable, corruption système (bootloop).
3. **Surchauffe** (voir 11.6).
4. **Dégât des eaux / corrosion** (fuite de courant, ligne instable).
5. **Panne carte** (alimentation instable, composant défaillant).

### Tests à faire

1. **État de la batterie** (santé/diagnostic) ; tester avec une **batterie connue bonne**. Une batterie fatiguée s'effondre en tension à la sollicitation.
2. **Alimentation de labo** : observer si la conso « décroche » (reset) de façon cyclique.
3. Écarter le **logiciel** : démarrage en mode sans échec, réinitialisation/reflash si les données sont sauvegardées.
4. Inspecter la carte (microscope) : **corrosion**, composant marqué (indice de dégât des eaux).

### Renvoi

- Batterie → **1.4**.
- Corrosion / eau → **1.6**.
- Logiciel → reflash (avec sauvegarde préalable).
- Panne alimentation carte → spécialiste.

## 11.4 — L'appareil ne charge pas / charge mal

### Causes probables (ordonnées)

1. **Câble ou chargeur défectueux**.
2. **Port de charge encrassé** (peluches compactées).
3. **Port / nappe de charge défaillant**.
4. **Batterie HS** (n'accepte plus la charge).
5. **Gestion de charge sur la carte** (PMIC, tristar/contrôleur de charge, fusible).

### Tests à faire

1. Changer **câble + chargeur** (connus bons) ; tester une **autre prise**.
2. **Inspecter et nettoyer** le port (cure-dent bois, air sec).
3. **USB-ampèremètre** : mesurer l'intensité absorbée.
   - **0 mA** : coupure (port, nappe, ou contrôleur de charge).
   - courant **anormalement faible/instable** : câble médiocre, port encrassé, ou contrôleur.
4. **Alimentation de labo** au connecteur batterie : si la carte **boote** normalement mais ne **charge pas** la batterie branchée, suspecter le **circuit de charge**.
5. Tester une **batterie neuve** connue bonne.

### Renvoi

- Câble/chargeur → remplacement accessoire (fausse panne).
- Port encrassé/défaillant → **9.1**.
- Batterie → **1.4**.
- Circuit de charge (contrôleur/fusible) → spécialiste micro-soudure.

## 11.5 — Pas de réseau / pas de signal / IMEI perdu

### Causes probables (ordonnées)

1. **Réglages** : mode avion, réseau désélectionné, APN, itinérance.
2. **Carte SIM** : mal insérée, contacts sales, SIM HS, mauvais format de tiroir.
3. **Lecteur SIM** défaillant (broches).
4. **Antenne / nappe d'antenne** déconnectée (fréquent après une réparation).
5. **Modem / transceiver / PA** sur la carte ; **IMEI corrompu ou nul** (logiciel/NAND ou dégât carte).

### Tests à faire

1. Vérifier **réglages** et **mode avion** ; redémarrer.
2. Tester une **SIM connue bonne** dans l'appareil, et la SIM du client dans un **autre téléphone**.
3. **Nettoyer** contacts SIM et vérifier le **format du tiroir**.
4. Vérifier l'**IMEI** (`*#06#`) : s'il est **absent / « null » / invalide**, la panne est plus profonde (baseband/carte).
5. Après une réparation, **contrôler la reconnexion des nappes d'antenne** et des contacts à ressort d'antenne.

### Renvoi

- SIM / tiroir / lecteur → **9.11**.
- Antenne déconnectée → réouverture et reconnexion (voir démontage 1.1).
- IMEI nul / baseband → réparation carte spécialisée (souvent non rentable ; informer le client).

## 11.6 — L'appareil chauffe anormalement

### Causes probables (ordonnées)

1. **Charge / usage intensif** (jeux, GPS, soleil) : échauffement **normal** à écarter.
2. **Batterie en fin de vie / gonflée** (chauffe à la charge).
3. **Application** qui tourne en boucle (processus fou) — logiciel.
4. **Court-circuit sur la carte** : point chaud localisé (chauffe même au repos, conso élevée).
5. **Dégât des eaux** (fuite de courant).

### Tests à faire

1. Écarter l'usage : au **repos, écran éteint**, l'appareil doit rester frais. S'il chauffe au repos, c'est matériel.
2. Contrôler l'état/gonflement de la **batterie** (déformation, dos qui se soulève).
3. **Alimentation de labo** : une **conso élevée au repos** trahit un court-circuit.
4. **Caméra thermique / doigt** sur la carte alimentée : localiser le **composant chaud**.
5. Écarter le **logiciel** (app en boucle) : mode sans échec, surveillance des processus.

### Renvoi

- Batterie gonflée/HS → **1.4** (avec précautions lithium du chapitre Sécurité).
- Court-circuit / point chaud → spécialiste micro-soudure.
- Eau → **1.6**.
- Logiciel → nettoyage/reflash.

## 11.7 — Tactile fantôme / tactile qui ne répond pas

### Causes probables (ordonnées)

1. **Protège-écran de mauvaise qualité** ou **film d'usine** mal posé.
2. **Chargeur / câble de mauvaise qualité** injectant du bruit (« ghost touch » à la charge).
3. **Écran de qualité médiocre** ou **nappe / blindage de masse** mal remis (après réparation).
4. **Dalle fissurée** ou humidité sous le verre.
5. **Contrôleur tactile sur la carte** (rare).

### Tests à faire

1. Retirer le **protège-écran** ; tester.
2. Débrancher le **chargeur** : si les touches fantômes **cessent hors charge**, le **chargeur/câble** est en cause.
3. Après réparation : vérifier le **blindage de masse** du connecteur d'écran et la bonne connexion des nappes.
4. Tester avec un **écran connu bon**.
5. Rechercher **fissure / infiltration** (dégât des eaux).

### Renvoi

- Chargeur/câble → remplacement accessoire.
- Écran / blindage / nappe → **1.2** ou **1.3**.
- Humidité → **1.6**.

## 11.8 — Pas de son (haut-parleur, écouteur, micro)

### Causes probables (ordonnées)

1. **Réglages** : volume, mode silencieux, **Bluetooth** encore appairé à un autre appareil, « Ne pas déranger ».
2. **Grille obstruée** (poussière, cérumen) sur écouteur / haut-parleur / micro.
3. **Contacts à ressort** (pogo pins) oxydés du haut-parleur.
4. **Module haut-parleur / écouteur / micro** défaillant.
5. **Ampli / codec audio** sur la carte (plusieurs sorties muettes simultanément).

### Tests à faire

1. Vérifier **volume, silencieux, Bluetooth** (déconnecter les appareils appairés).
2. **Nettoyer** les grilles ; souffler à l'air sec.
3. Tester **chaque sortie** séparément : musique (haut-parleur), appel test (écouteur), mémo vocal / vidéo (micros).
4. Si **plusieurs** sorties sont muettes en même temps → suspecter le **codec/ampli** de la carte.
5. Inspecter/nettoyer les **pogo pins** du haut-parleur.

### Renvoi

- Réglages / Bluetooth / grille → fausse panne (nettoyage / paramètres).
- Haut-parleur / écouteur → **9.3**.
- Micro → **9.4**.
- Codec / ampli audio → spécialiste.

## 11.9 — Caméra floue / noire / qui plante

### Causes probables (ordonnées)

1. **Fenêtre de protection** (verre extérieur) **sale, rayée ou fissurée**.
2. **Coque / protection** qui masque partiellement l'objectif ; **aimants** de coque perturbant l'OIS (tremblement).
3. **Poussière piégée** sous la lentille (après une réparation).
4. **Module caméra défaillant** (autofocus, OIS, capteur).
5. **App / logiciel** (plantage de l'app appareil photo, cache).

### Tests à faire

1. **Nettoyer** la fenêtre extérieure ; retirer la coque et le film.
2. Tester dans une **autre app** photo et redémarrer (écarter le logiciel).
3. Écouter un **bourdonnement / cliquetis** (OIS déréglé, souvent lié à des aimants de coque).
4. Après réparation : rouvrir pour **chasser la poussière** sous la fenêtre.
5. Remplacer le **module** en dernier recours.

### Renvoi

- Fenêtre sale/rayée → nettoyage / remplacement fenêtre.
- Poussière sous lentille → réouverture (voir 1.5 / 9.10).
- Module HS → **1.5** (arrière) ou **9.10** (frontale).
- Logiciel → vidage de cache / mise à jour.

## Synthèse : la démarche diagnostique en cinq réflexes

1. **Reproduire et préciser le symptôme** (quand, comment, depuis quand, après quel événement — chute, eau, mise à jour ?).
2. **Écarter les fausses pannes** : accessoire, réglage, obstruction, protège-écran. C'est là que se cachent la majorité des « pannes ».
3. **Mesurer avant de démonter** quand c'est possible (USB-ampèremètre, état batterie).
4. **Aller du simple au complexe**, du non-invasif à l'invasif, du moins cher au plus cher.
5. **Être honnête sur la rentabilité** : certaines pannes de carte (IMEI nul, court-circuit profond, Face ID matériel) coûtent plus cher à réparer que la valeur de l'appareil. Le dire clairement fait partie du métier.
