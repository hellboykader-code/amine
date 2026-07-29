---
title: "Guide Complet de Réparation d'Appareils Électroniques"
subtitle: "Smartphones, tablettes, ordinateurs portables et écouteurs sans fil — Méthodes professionnelles, sécurité et procédures pas à pas"
author: "MK Phone"
date: "2026"
lang: fr
toc: true
toc-title: "Table des matières"
toc-depth: 3
numbersections: true
documentclass: report
papersize: a4
geometry: "margin=2.5cm"
fontsize: 11pt
linkcolor: black
urlcolor: black
toccolor: black
---

\newpage

<!--
=====================================================================
PAGE DE COUVERTURE
=====================================================================
-->

\thispagestyle{empty}

\vspace*{3cm}

\begin{center}

{\Huge \textbf{Guide Complet de Réparation}}

\vspace{0.5cm}

{\Huge \textbf{d'Appareils Électroniques}}

\vspace{2cm}

{\Large \textit{Smartphones · Tablettes · Ordinateurs portables · Écouteurs sans fil}}

\vspace{1.5cm}

{\large Méthodes professionnelles, sécurité et procédures pas à pas}

\vspace{4cm}

{\LARGE \textbf{par MK Phone}}

\vspace{1cm}

{\large Édition 2026}

\end{center}

\newpage

<!--
=====================================================================
MENTIONS LÉGALES
=====================================================================
-->

\thispagestyle{empty}

## Mentions légales et droits d'auteur {.unnumbered}

**Guide Complet de Réparation d'Appareils Électroniques**

Édition 2026. Publié par **MK Phone**.

Tous droits réservés. Aucune partie de cet ouvrage ne peut être reproduite, stockée dans un système de récupération de données, ni transmise sous quelque forme ou par quelque moyen que ce soit (électronique, mécanique, photocopie, enregistrement ou autre) sans l'autorisation écrite préalable de l'éditeur, sauf dans le cadre des courtes citations autorisées par la loi sur le droit d'auteur.

Les marques citées dans cet ouvrage (iPhone, iPad, Samsung, Galaxy, AirPods, iFixit, Wera, Baku, Quick, JCID, entre autres) sont la propriété de leurs détenteurs respectifs. Elles sont mentionnées uniquement à des fins d'identification, de description et d'information pédagogique. Aucune affiliation, aucun partenariat ni aucun parrainage n'est sous-entendu avec les sociétés détentrices de ces marques.

Le contenu de ce guide est fourni à titre **pédagogique et informatif**. Il reflète l'état des pratiques et des connaissances techniques au moment de la rédaction. Les procédures, références de pièces, prix et sources d'approvisionnement sont susceptibles d'évoluer.

\newpage

<!--
=====================================================================
AVERTISSEMENT / CLAUSE DE RESPONSABILITE
=====================================================================
-->

# Avertissement et clause de responsabilité {.unnumbered}

**Veuillez lire attentivement cet avertissement avant toute manipulation.**

Ce guide est un document **pédagogique**. Il décrit des procédures de réparation qui, mal exécutées, peuvent provoquer des blessures corporelles, des dommages matériels, un incendie ou la destruction irréversible de l'appareil et des données qu'il contient. En appliquant les méthodes décrites dans cet ouvrage, vous reconnaissez agir sous votre entière et exclusive responsabilité.

## Risque d'incendie et d'explosion — batteries lithium

La quasi-totalité des appareils traités dans ce guide sont alimentés par des **batteries lithium-ion (Li-ion) ou lithium-polymère (Li-Po)**. Ces accumulateurs stockent une grande quantité d'énergie dans un volume réduit et présentent des risques majeurs :

- Une batterie **perforée, pliée, écrasée ou percée** peut entrer en **emballement thermique** (« thermal runaway ») : elle chauffe brutalement, dégage des gaz toxiques et inflammables, prend feu ou explose.
- Une batterie **gonflée** est un signal d'alerte : les gaz internes indiquent une dégradation chimique. Elle ne doit **jamais** être percée, pliée ni comprimée.
- Un **court-circuit** entre les bornes (par un outil métallique, par exemple) peut provoquer une décharge violente et un incendie.

**Ne percez, ne pliez et ne découpez jamais une batterie lithium.** Débranchez toujours la batterie en premier lors d'un démontage. Conservez à portée de main un moyen d'extinction adapté (sable, couverture anti-feu, extincteur pour feux électriques de classe adaptée). En cas de doute sur l'état d'une batterie, ne la manipulez pas et faites appel à une filière de traitement des déchets spécialisée.

## Risque d'électrocution et haute tension

Certains appareils (notamment les ordinateurs portables reliés au secteur, les chargeurs et les blocs d'alimentation) contiennent des composants susceptibles de **conserver une charge électrique** même hors tension (condensateurs). Débranchez systématiquement l'alimentation et retirez la batterie avant intervention. Ne travaillez jamais sur un appareil relié au secteur.

## Perte de données

Toute intervention matérielle peut entraîner une **perte définitive des données** (photos, messages, documents, contacts). **Sauvegardez systématiquement** les données avant toute réparation, lorsque l'appareil le permet encore. MK Phone ne saurait être tenu responsable d'une quelconque perte de données consécutive à l'application des procédures décrites.

## Annulation de la garantie

L'ouverture d'un appareil **annule presque toujours la garantie constructeur** et peut rompre des indices d'intégrité (pastilles d'humidité, vis inviolables, joints d'étanchéité). Si votre appareil est encore sous garantie, privilégiez le service après-vente officiel.

## Étanchéité et sécurité électrique après réparation

De nombreux appareils sont certifiés résistants à l'eau et à la poussière (indices IP). **Une réparation fait perdre cette étanchéité** si les joints et adhésifs d'origine ne sont pas correctement remplacés. Ne présumez jamais qu'un appareil réparé reste étanche.

## Limitation de responsabilité

Dans les limites autorisées par la loi applicable, MK Phone, ses auteurs et ses distributeurs déclinent toute responsabilité pour tout dommage direct, indirect, accessoire ou consécutif résultant de l'utilisation de ce guide. **En poursuivant votre lecture et en appliquant ces procédures, vous acceptez sans réserve les termes du présent avertissement.**

\newpage

# Introduction

## À qui s'adresse ce guide

Ce guide s'adresse à un public large : le technicien débutant qui souhaite acquérir des bases solides, le réparateur indépendant qui veut structurer ses procédures, le passionné d'électronique désireux de prolonger la vie de ses appareils, ainsi que le professionnel en formation qui cherche un référentiel clair et méthodique. Il a été conçu pour être lu de manière linéaire par un débutant, mais aussi consulté ponctuellement comme un manuel d'atelier, réparation par réparation.

L'objectif est double : transmettre un **savoir-faire technique** précis et instiller une **culture de la sécurité et de la méthode**. Un bon réparateur ne se distingue pas seulement par sa dextérité, mais par sa rigueur : sauvegarde préalable, organisation du poste de travail, gestion des vis, diagnostic ordonné, tests systématiques après remontage.

## Comment utiliser ce guide

Chaque réparation concrète suit un **gabarit identique** afin de faciliter la prise en main :

1. Un **encadré méta** résumant en un coup d'œil la difficulté, le temps estimé, les outils, les pièces et le risque principal.
2. Une **procédure numérotée**, étape par étape.
3. Des **emplacements de figures** signalés par des marqueurs `![Figure ...]`. Ces emplacements sont destinés à recevoir vos propres photographies de l'opération : ils constituent un canevas visuel que vous compléterez avec les clichés de vos interventions réelles.
4. Une rubrique **« Points critiques »** signalant ce qui provoque une casse si l'on échoue.
5. Une rubrique **« Erreurs courantes à éviter »**.
6. Une rubrique **« Dépannage »** : que faire si l'appareil ne fonctionne pas correctement après remontage.

## Une philosophie : l'honnêteté technique

Toutes les réparations ne sont pas rentables. Remplacer la batterie d'une paire d'écouteurs sans fil, par exemple, relève souvent plus de l'exploit technique que du bon sens économique. Ce guide le dira franchement lorsque ce sera le cas. Savoir renoncer à une réparation, ou orienter un client vers un remplacement, fait partie intégrante du métier. Un diagnostic honnête vaut mieux qu'une réparation bâclée.

## Vocabulaire et conventions

Les termes techniques (nappe, spudger, OLED, ESD, iOpener…) sont définis au fil du texte et rassemblés dans le **glossaire** en annexe. Les unités, références de pièces et fourchettes de prix sont données à titre indicatif. Les prix sont exprimés en euros et correspondent à des ordres de grandeur observés sur le marché européen de détail au moment de la rédaction ; ils évoluent selon les fournisseurs, les volumes et les périodes.

\newpage

# Sécurité et poste de travail

La sécurité n'est pas une contrainte administrative : c'est la condition d'un travail durable, propre et rentable. Un atelier bien organisé réduit les erreurs, accélère les interventions et protège aussi bien le technicien que l'appareil du client. Ce chapitre pose les fondations : maîtrise de l'électricité statique, gestion des batteries lithium, travail à la chaleur, organisation de la visserie et sauvegarde des données.

## L'électricité statique (ESD) et sa maîtrise

### Comprendre le danger

L'**ESD** (de l'anglais *ElectroStatic Discharge*, décharge électrostatique) désigne le transfert brutal de charges électriques entre deux corps de potentiels différents. Le corps humain peut accumuler plusieurs milliers de volts par simple friction (marcher sur une moquette, se lever d'une chaise). Cette tension, imperceptible pour l'homme au-dessous d'environ 3 000 volts, est **destructrice pour les composants électroniques modernes**.

Les circuits intégrés actuels utilisent des finesses de gravure de l'ordre de quelques nanomètres. Une décharge de quelques dizaines de volts suffit à endommager une jonction. Le danger de l'ESD est **insidieux** : dans de nombreux cas, le composant n'est pas détruit immédiatement mais **fragilisé** (défaillance latente). L'appareil fonctionne à la sortie de l'atelier, puis tombe en panne quelques jours ou semaines plus tard. Ces pannes différées sont parmi les plus difficiles à diagnostiquer et les plus dommageables pour la réputation d'un réparateur.

### Les moyens de protection

- **Le bracelet antistatique** : relié à la terre par un cordon muni d'une résistance de sécurité (typiquement 1 mégohm), il maintient le technicien au même potentiel que le plan de travail. C'est l'équipement le plus important. Il se porte à même la peau du poignet, bien ajusté.
- **Le tapis antistatique (tapis ESD)** : dissipe les charges de la surface de travail et des appareils qui y reposent. Il se relie également à la terre.
- **La mise à la terre commune** : bracelet, tapis et fer à souder doivent partager un même point de terre pour éviter les différences de potentiel.
- **Le contrôle de l'humidité** : un air très sec favorise l'accumulation de charges. Une hygrométrie de l'ordre de 40 à 60 % limite le phénomène.
- **Les gestes** : évitez les vêtements synthétiques, ne faites pas glisser les appareils sur des surfaces plastiques, manipulez les cartes par les bords.

### En pratique dans un petit atelier

Un poste minimal comprend un tapis ESD relié à la terre et un bracelet antistatique. Le fer à souder doit disposer d'une panne mise à la terre. Si vous ne pouvez pas vous relier à une prise de terre, touchez régulièrement une masse métallique reliée à la terre avant de manipuler une carte, à défaut de mieux — mais ce palliatif ne remplace pas un équipement adapté.

⚠️ **À retenir** : l'absence de protection ESD ne se voit pas immédiatement. Les dégâts sont statistiques et différés. Un atelier professionnel s'équipe systématiquement.

## Les batteries lithium : le risque numéro un

### Pourquoi les batteries lithium sont dangereuses

Les batteries lithium-ion et lithium-polymère offrent une densité énergétique élevée, ce qui explique leur omniprésence. Cette densité a une contrepartie : en cas de défaillance, l'énergie stockée se libère brutalement. L'électrolyte est **inflammable**. Une perforation, un écrasement ou un court-circuit peut déclencher un **emballement thermique** : une réaction en chaîne où la chaleur produite entretient et amplifie la réaction, jusqu'à l'incendie ou l'explosion, avec émission de gaz toxiques (notamment du fluorure d'hydrogène).

### Reconnaître une batterie dangereuse

- **Batterie gonflée** : la coque de l'appareil se déforme, l'écran se soulève, le dos ne ferme plus. Le gonflement traduit une production de gaz interne. Une telle batterie est en fin de vie et **potentiellement dangereuse**.
- **Batterie percée ou pliée** : tout dommage mécanique est critique.
- **Odeur chimique douceâtre**, échauffement anormal, coloration : signes d'une défaillance avancée.

### Procédure face à une batterie gonflée

1. **Ne pas percer, ne pas plier, ne pas comprimer.** C'est la règle absolue.
2. Travailler lentement, sans forcer, avec des outils **non métalliques** (spudgers plastique) au contact de la batterie.
3. Si la batterie est collée, ramollir l'adhésif à chaleur **modérée** et privilégier les **languettes d'extraction** ou l'**alcool isopropylique** qui dissout la colle. Ne jamais faire levier brutalement sous une cellule gonflée.
4. Une fois extraite, placer la batterie dans un contenant ininflammable (bac métallique, sac ignifuge « LiPo safe »), loin de tout combustible.
5. **Ne jamais réinstaller** une batterie gonflée. La recycler via une filière agréée (points de collecte, déchèterie spécialisée).

### Bonnes pratiques générales

- **Débrancher la batterie en premier**, avant toute autre intervention sur la carte. Cela met le circuit hors tension et évite les courts-circuits accidentels.
- Décharger partiellement les batteries neuves à manipuler (une cellule à faible charge est moins dangereuse en cas d'incident).
- Ne jamais laisser une batterie en charge sans surveillance dans l'atelier.
- Disposer d'un **seau de sable** ou d'une **couverture anti-feu** à proximité. L'eau n'est pas idéale sur un feu de lithium et peut aggraver certains incidents électriques ; le sable et l'étouffement sont plus sûrs pour de petites cellules.
- Stocker les batteries de remplacement dans un local ventilé, à température modérée, à l'abri des chocs.

⚠️ **Points critiques** : la majorité des incendies d'atelier proviennent d'une batterie percée par un outil métallique lors d'un levier trop appuyé. La lenteur et les outils plastique sont vos meilleurs alliés.

## Travail à la chaleur et gestion de la colle

### Pourquoi de la chaleur ?

Les appareils modernes sont **assemblés par collage** : écrans, coques arrière, batteries et modules sont maintenus par des adhésifs double face ou des joints de colle. Pour ouvrir sans casser, il faut **ramollir ces adhésifs** par la chaleur. Les outils employés sont l'**iOpener** (coussin chauffant que l'on passe au micro-ondes ou que l'on branche), le **coussin/plaque chauffante** à température régulée, le **sèche-cheveux** (dépannage) et la **station à air chaud** (rework) pour des interventions ciblées.

### Maîtriser la température

Trop peu de chaleur : l'adhésif reste ferme, on force, on casse le verre ou on plie une nappe. Trop de chaleur : on **endommage l'écran** (les dalles OLED sont sensibles, des pixels peuvent virer au noir ou au violet), on fait fondre des joints, on décolle des composants voisins, on **enflamme la batterie**.

- Une plaque chauffante d'ouverture se règle généralement autour de **70 à 100 °C** en surface, le temps de ramollir l'adhésif périphérique.
- La zone à chauffer est le **pourtour**, là où court l'adhésif, pas le centre de la dalle.
- La chaleur doit être **répartie** et **progressive** : on chauffe, on attend, on insère un médiator, on progresse.
- Sur les zones proches de la batterie, réduire la chaleur et la durée d'exposition.

### La station à air chaud (rework)

Réservée aux interventions sur composants (dessoudage de connecteurs, blindages, petits circuits), elle combine température et débit d'air réglables. Une buse trop chaude ou un flux trop fort déplace les composants voisins et décolle les pastilles. Elle exige de la pratique et une bonne préparation (flux, kapton pour protéger les zones adjacentes). Elle n'est **pas** l'outil d'ouverture d'un écran.

⚠️ **Points critiques** : ne jamais diriger un jet d'air chaud vers une batterie en place. Toujours protéger les zones sensibles. La patience prime sur la puissance.

## La gestion des vis et des petites pièces

Un appareil démonté peut comporter **plusieurs dizaines de vis** de longueurs, diamètres et empreintes différents. Une vis remise au mauvais emplacement peut **percer une nappe, traverser la carte mère ou empêcher la fermeture**. Sur certains modèles, une vis trop longue à un emplacement précis provoque une panne définitive (« long screw damage »).

### Méthodes d'organisation

- **Le tapis magnétique organiseur** : une surface quadrillée où l'on annote l'emplacement de chaque vis. On y dépose les vis au fur et à mesure, dans l'ordre du démontage, en respectant la disposition spatiale de l'appareil.
- **Les godets ou boîtes compartimentées**, numérotés par étape.
- **La photographie systématique** : avant chaque retrait de vis ou de nappe, prendre une photo. C'est la meilleure assurance pour le remontage.
- **La règle « une étape, un compartiment »** : ne jamais mélanger les vis de deux étapes différentes.

⚠️ Les vis d'un même appareil se ressemblent mais ne sont pas interchangeables. Une différence de 0,3 mm de longueur peut être critique.

## La sauvegarde des données

Avant toute intervention matérielle, lorsque l'appareil démarre encore, proposez et réalisez une **sauvegarde**. C'est une exigence professionnelle autant qu'une protection juridique.

- **Smartphones et tablettes** : sauvegarde via le service cloud du constructeur (iCloud, Google, Samsung Cloud) ou vers un ordinateur (Finder/iTunes, Smart Switch). Vérifier que la sauvegarde est **complète et récente**.
- **Ordinateurs portables** : image disque ou copie des fichiers importants sur un support externe avant tout remplacement de disque.
- **Traçabilité** : faire signer au client une décharge indiquant qu'il a été informé du risque de perte de données et qu'il a (ou non) réalisé une sauvegarde.

⚠️ Certaines réparations (dégât des eaux, carte mère) peuvent rendre l'appareil non démarrable. La sauvegarde doit être proposée **avant** que l'appareil ne devienne inaccessible. Une fois l'appareil mort, la récupération de données relève d'un métier spécialisé et coûteux.

## Ergonomie et organisation du poste

- **Éclairage** : lumière neutre, puissante, sans ombre portée. Une lampe annulaire ou une lampe de bureau orientable est indispensable.
- **Plan de travail** : dégagé, propre, antistatique, sans pente.
- **Rangement des outils** : chaque outil à sa place, tournevis triés par empreinte.
- **Propreté** : la poussière et les résidus de colle sont l'ennemi des collages et des connecteurs. Nettoyer le poste entre deux interventions.
- **Sécurité incendie** : détecteur de fumée, extincteur ou couverture anti-feu, contenant ignifuge pour batteries.

\newpage

# Outils nécessaires

Un bon outillage ne se mesure pas à son prix mais à sa pertinence. On peut commencer avec un kit d'entrée de gamme et compléter progressivement selon les appareils traités. Ce chapitre recense les outils indispensables, classés par famille, avec pour chacun sa fonction, les marques recommandées, une fourchette de prix indicative et les sources d'approvisionnement habituelles (iFixit, AliExpress, Amazon, distributeurs spécialisés).

> **Note sur les prix** : les fourchettes sont indicatives (marché européen de détail). AliExpress propose les tarifs les plus bas mais des délais et une qualité variables ; iFixit et les distributeurs spécialisés offrent une qualité et un service supérieurs ; Amazon se situe entre les deux avec des délais courts.

## Tournevis et embouts

Les appareils électroniques utilisent une grande variété d'empreintes, souvent choisies par les constructeurs pour décourager l'ouverture. Un jeu d'embouts de précision complet est le premier investissement.

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Kit de tournevis de précision (jeu d'embouts) | Base polyvalente : Phillips, plat, Torx, etc. | iFixit (Mako, Manta), Wera, Wowstick | 25–70 € | iFixit, Amazon |
| Embout Pentalobe P2 / P5 | Vis externes des iPhone et de certains MacBook | iFixit, Wera | 3–10 € | iFixit, AliExpress |
| Embout Y (tripoint Y000) | Vis internes iPhone, batteries Apple Watch | iFixit, JCID | 3–10 € | iFixit, AliExpress |
| Embouts Torx T2–T6 et Torx Security | Ordinateurs portables, connecteurs, blindages | Wera, iFixit | inclus en kit | iFixit, Amazon |
| Embouts Phillips PH000/PH00/PH0 | Vis internes très répandues | Wera, iFixit | inclus en kit | iFixit, Amazon |
| Tournevis électrique de précision | Confort et rapidité sur séries de vis | Wowstick, Xiaomi, JCID | 30–90 € | AliExpress, Amazon |

⚠️ Utiliser l'empreinte **exacte** : un Phillips à la place d'un cruciforme japonais (JIS), ou un embout usé, arrondit la tête de vis (« vis foirée ») et complique fortement le démontage.

## Outils d'ouverture et de levier

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Spudger (double embout, plastique/métal) | Faire levier, débrancher les nappes sans casser | iFixit, Baku | 3–8 € | iFixit, AliExpress |
| Jeu de médiators / picks d'ouverture | Séparer coques et écrans collés | iFixit (Opening Picks) | 3–6 € | iFixit, AliExpress |
| Palette / spatule d'ouverture (guitar pick renforcé) | Couper l'adhésif d'écran | iFixit, Baku | 3–8 € | AliExpress, iFixit |
| Ventouse (simple ou double poignée) | Soulever un écran ou une coque collée | iFixit (iSclack), Baku | 5–25 € | iFixit, AliExpress |
| iSclack (pince-ventouse) | Créer un écart initial contrôlé sur smartphone | iFixit | 20–30 € | iFixit |
| Roulette / molette de découpe d'adhésif | Trancher l'adhésif périphérique | Générique | 3–6 € | AliExpress |
| Outil d'ouverture métallique fin (« exacto » / lame) | Amorcer une séparation (usage prudent) | Générique | 2–5 € | AliExpress |

## Chaleur et ramollissement des adhésifs

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| iOpener | Coussin chauffant pour ramollir l'adhésif d'écran | iFixit | 15–25 € | iFixit |
| Coussin / plaque chauffante à température réglable | Chauffe homogène du pourtour, séries | Générique, LB (Longardata), CPB | 30–90 € | AliExpress, Amazon |
| Sèche-cheveux (dépannage) | Chaleur d'appoint | Toute marque | 15–40 € | Grande distribution |
| Station à air chaud (rework) | Dessoudage de connecteurs, blindages, composants | Quick (861DW, 957), Baku, Atten | 60–250 € | AliExpress, Amazon |
| Ruban Kapton (polyimide) | Protéger les zones sensibles de la chaleur | Générique | 3–8 € | AliExpress |

## Soudure et électronique

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Station de soudage à température réglée | Soudure de connecteurs, fils, composants | JBC, Quick, Hakko, Aixun, Baku | 60–400 € | AliExpress, Amazon |
| Fil d'étain (avec flux) | Apport de soudure | Kester, Mechanic | 8–25 € | AliExpress |
| Flux (gel / seringue) | Améliorer le mouillage de la soudure | Amtech (type NC-559), Mechanic, MG | 5–15 € | AliExpress |
| Tresse à dessouder | Retirer l'excédent de soudure | Générique | 3–6 € | AliExpress |
| Pompe à dessouder | Aspirer la soudure fondue | Générique | 5–12 € | AliExpress |

## Mesure et diagnostic

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Multimètre | Continuité, tension, résistance, diagnostic | Fluke, Uni-T, Aneng | 15–200 € | Amazon, AliExpress |
| Alimentation de laboratoire (DC power supply) | Alimenter/diagnostiquer une carte, mesurer la conso | Mechanic, Kungber, Longwei | 40–150 € | AliExpress, Amazon |
| Câble « boot » / alimentation dédié | Démarrer une carte hors batterie | JCID, Mechanic | 10–25 € | AliExpress |
| Caméra thermique / point chaud | Localiser un court-circuit | Générique, InfiRay | 200–500 € | AliExpress, Amazon |
| Testeur d'écran / de batterie | Vérifier une pièce avant montage | JCID, générique | 15–60 € | AliExpress |

## Vision et manipulation fine

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Loupe sur bras / lampe-loupe | Voir les petites nappes et connecteurs | Générique | 20–60 € | Amazon, AliExpress |
| Microscope binoculaire (stéréo) | Micro-soudure, inspection de carte | Amscope, Baku, KOPPACE | 150–500 € | Amazon, AliExpress |
| Brucelles (pinces de précision) antistatiques | Manipuler nappes, vis, composants | Vetus, iFixit | 5–20 € | AliExpress, iFixit |
| Lampe annulaire / éclairage LED | Éclairage sans ombre | Générique | 15–50 € | Amazon |

## Nettoyage et consommables

| Outil / consommable | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Alcool isopropylique (IPA) 99 % | Dissoudre colle et flux, nettoyer la corrosion | MG Chemicals, générique | 8–20 € / litre | AliExpress, Amazon, droguerie |
| Bac à ultrasons | Nettoyer une carte (dégât des eaux) | Générique, Baku | 40–120 € | AliExpress, Amazon |
| Brosses antistatiques (type ESD) | Brosser flux et corrosion | Générique | 3–8 € | AliExpress |
| Poire soufflante / bombe à air sec | Chasser poussière et particules | Générique, Giottos | 8–20 € | Amazon |
| Adhésif de remontage (bandes précoupées, colle B-7000/T-7000) | Recoller écran/coque, refaire l'étanchéité | générique, Zhanlida | 4–12 € | AliExpress |
| Chiffons microfibre non pelucheux | Nettoyage optique | Générique | 3–8 € | Grande distribution |

## Organisation, protection et sécurité

| Outil | À quoi il sert | Marques recommandées | Prix indicatif | Où acheter |
|---|---|---|---|---|
| Tapis magnétique organiseur de vis (avec grille annotable) | Repérer chaque vis par emplacement | iFixit, générique | 8–20 € | AliExpress, iFixit |
| Tapis de travail antistatique (ESD) | Dissiper les charges, surface propre | Minadax, générique | 15–40 € | Amazon, AliExpress |
| Bracelet antistatique | Mettre le technicien à la terre | iFixit, générique | 3–10 € | iFixit, AliExpress |
| Gants (nitrile / antistatiques) | Propreté, protection, éviter les traces | Générique | 5–15 € | Grande distribution |
| Contenant ignifuge « LiPo safe » / bac métallique | Stocker une batterie suspecte | Générique | 8–20 € | Amazon, AliExpress |
| Lunettes de protection | Protéger des éclats de verre et projections | Générique | 5–15 € | Grande distribution |

## Trois niveaux d'équipement recommandés

- **Kit débutant (≈ 80–150 €)** : jeu de tournevis de précision, spudgers, médiators, ventouse simple, iOpener, brucelles, IPA 99 %, tapis magnétique organiseur, bracelet antistatique. Suffisant pour écrans et batteries de smartphones.
- **Kit intermédiaire (≈ 300–600 €)** : ajoute une plaque chauffante réglable, une station de soudage, une station à air chaud d'entrée de gamme, un multimètre, une lampe-loupe, un tapis ESD, un bac à ultrasons.
- **Kit professionnel (≈ 1 500 €+)** : ajoute un microscope binoculaire, une alimentation de laboratoire, une station de soudage haut de gamme, une caméra thermique, des outils de test dédiés (JCID et équivalents).

\newpage

# Smartphones (iPhone et Android/Samsung)

Le smartphone est l'appareil le plus fréquemment réparé. Deux grandes familles coexistent : les **iPhone** (Apple) et la nébuleuse **Android**, dominée par **Samsung** mais incluant de nombreux constructeurs (Xiaomi, Google, Oppo, etc.). Les principes de réparation sont communs, mais les architectures diffèrent, et ces différences conditionnent la méthode.

## Comprendre les différences iPhone / Android

### Sens d'ouverture

- **iPhone (à partir de l'iPhone 4/4s et jusqu'aux modèles récents)** : l'ouverture se fait **par l'écran, à l'avant**. On retire deux vis Pentalobe en bas, on chauffe le pourtour, et on soulève l'écran. La batterie et les composants sont accessibles une fois l'écran ôté. À partir des iPhone 14 (modèles non-Pro), Apple a réintroduit une architecture ouvrable **par l'arrière** pour la coque, ce qui facilite certaines réparations.
- **Samsung et beaucoup d'Android** : l'ouverture se fait le plus souvent **par l'arrière**. La coque arrière en verre est collée ; on la chauffe et on la décolle pour accéder à la batterie et à la carte. L'écran, lui, est collé à l'avant et son remplacement est plus délicat.

### Type d'écran

- Les iPhone récents et la plupart des Samsung haut de gamme utilisent des dalles **OLED/AMOLED**. Les modèles d'entrée de gamme et anciens utilisent des **LCD**.
- Sur iPhone, remplacer l'écran par une pièce non originale peut déclencher des **avertissements logiciels** et désactiver certaines fonctions (True Tone, parfois la luminosité automatique, message « pièce inconnue »). Certaines fonctions nécessitent un **transfert de puce** ou un **appairage** (programmateur).
- Sur Samsung, l'écran est souvent vendu **avec son châssis** (« service pack »), ce qui simplifie le remontage mais augmente le coût.

### Étanchéité

Les deux familles utilisent des joints adhésifs périphériques pour l'étanchéité. Toute ouverture impose de **remplacer l'adhésif** pour restaurer (partiellement) la résistance à l'eau.

### Appairage et sérialisation

Apple **sérialise** de plus en plus de composants (écran, batterie, caméra) : la pièce est associée à la carte mère. Le remplacement par une pièce tierce, sans appairage, entraîne des avertissements et la perte de certaines fonctions. Des outils de programmation (JCID, etc.) permettent parfois de recopier les données d'appairage. Samsung sérialise moins, mais utilise des « service pack » complets.

⚠️ **Avant toute réparation d'iPhone récent**, informez le client des limitations liées à la sérialisation (True Tone, avertissement « pièce inconnue », capteur de proximité, etc.).

## 1.1 — Démontage et remontage général d'un smartphone

Cette procédure générique s'applique avant toute réparation interne. Elle détaille l'ouverture, quelle que soit la panne visée.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen |
| **Temps estimé** | 20 à 40 minutes |
| **Outils nécessaires** | Tournevis (Pentalobe P2, Phillips/Torx internes, Y000), spudger, médiators, ventouse, iOpener ou plaque chauffante, brucelles, tapis organiseur |
| **Pièces de remplacement** | Adhésif de remontage (bandes précoupées ou colle), joint d'étanchéité |
| **Risque principal** | Perforation de la batterie ; déchirure d'une nappe ; casse du verre |

### Étapes

1. **Éteindre l'appareil** et, si possible, réaliser une sauvegarde préalable. Noter le code de déverrouillage (avec l'accord du client) pour les tests.
2. **Retirer le tiroir SIM** et repérer le modèle exact (réglages ou marquages internes) pour commander la bonne pièce.
3. **Retirer les vis externes** : deux Pentalobe P2 en bas de l'iPhone ; sur Samsung, il n'y a généralement pas de vis externe (coque collée).
4. **Chauffer le pourtour** à l'iOpener ou à la plaque (70–90 °C), régulièrement, pour ramollir l'adhésif. Côté iPhone : pourtour de l'écran. Côté Samsung : pourtour de la coque arrière.
5. **Créer un point d'entrée** à la ventouse et insérer un médiator dans l'interstice. Glisser doucement le médiator tout autour pour trancher l'adhésif.
6. **Ouvrir avec précaution.** Sur iPhone à charnière basse, ouvrir « comme un livre » depuis le bas ou le côté selon le modèle, sans arracher : des **nappes** relient l'écran à la carte. Sur Samsung, la coque arrière se sépare complètement (attention au lecteur d'empreinte parfois solidaire).
7. **Retirer le blindage (« bracket ») du connecteur de batterie** et **débrancher la batterie en premier**. C'est l'étape de sécurité fondamentale.
8. **Débrancher les nappes concernées** (écran, tactile, capteurs) au spudger, en soulevant le connecteur bien à plat, jamais en tirant sur la nappe.
9. Procéder à la réparation visée (voir sections suivantes).
10. **Remontage** : rebrancher les nappes dans l'ordre inverse, vérifier que chaque connecteur « clipse » bien à plat, replacer les blindages, **rebrancher la batterie en dernier**.
11. **Test avant collage** : rallumer et vérifier l'ensemble des fonctions **avant** de reposer l'adhésif définitif. On ne colle jamais avant d'avoir testé.
12. **Nettoyer les surfaces** (IPA 99 %), poser l'adhésif neuf, refermer, presser uniformément et laisser la colle prendre.

![Figure 1.1 — Vue d'ensemble des outils disposés sur le tapis organiseur avant démontage](images/smartphone-1-1-outils.jpg)

![Figure 1.2 — Retrait des deux vis Pentalobe en bas de l'appareil](images/smartphone-1-2-vis-pentalobe.jpg)

![Figure 1.3 — Ramollissement de l'adhésif périphérique à l'iOpener](images/smartphone-1-3-iopener.jpg)

![Figure 1.4 — Insertion du médiator pour trancher l'adhésif](images/smartphone-1-4-mediator.jpg)

![Figure 1.5 — Retrait du blindage du connecteur de batterie](images/smartphone-1-5-bracket-batterie.jpg)

![Figure 1.6 — Débranchement de la batterie au spudger (première étape de sécurité)](images/smartphone-1-6-debranchement-batterie.jpg)

**⚠️ Points critiques**

- Débrancher la batterie **avant** toute autre nappe. Un connecteur soulevé sous tension peut court-circuiter.
- Ne jamais forcer l'ouverture à froid : le verre casse et la dalle se fissure.
- Les nappes de l'écran (iPhone à ouverture basse) sont **courtes** : ouvrir trop grand les arrache.

**❌ Erreurs courantes à éviter**

- Insérer le médiator trop profondément et sectionner une nappe ou percer la batterie.
- Chauffer excessivement et « cuire » la dalle OLED (taches noires/violettes).
- Mélanger les vis : elles ne sont pas de même longueur.
- Recoller avant d'avoir testé.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Écran noir ou tactile mort : reconnecteur mal clipsé. Rouvrir, réenclencher les nappes.
- L'appareil ne s'allume pas : batterie mal rebranchée ou blindage oublié qui empêche le contact.
- Fantômes tactiles : nappe pincée ou blindage mal remis.

\newpage

## 1.2 — Remplacement de l'écran d'un iPhone

Le remplacement d'écran est la réparation la plus demandée. Sur iPhone, il combine ouverture par l'avant, transfert de plusieurs nappes et, sur les modèles récents, un enjeu de sérialisation.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen |
| **Temps estimé** | 30 à 60 minutes |
| **Outils nécessaires** | Pentalobe P2, tournevis Y000 et Phillips, spudger, brucelles, ventouse, plaque chauffante, tapis organiseur, éventuellement programmateur (True Tone) |
| **Pièces de remplacement** | Écran OLED ou LCD compatible, ou écran **original « pull »** (récupéré), ou original neuf ; adhésif de remontage |
| **Risque principal** | Perte de True Tone / avertissement « pièce inconnue » ; casse du Face ID si nappe endommagée |

### Choix de la pièce

- **Original « pull »** : écran d'origine récupéré sur un appareil, souvent le meilleur compromis qualité/prix, conserve les fonctions si la puce est présente.
- **Compatible « incell » (LCD)** : économique, réservé aux modèles LCD (iPhone 11, XR, SE…), qualité variable.
- **Compatible « soft/hard OLED »** : pour les modèles OLED, qualité intermédiaire, colorimétrie parfois inférieure.
- **Original neuf (service part)** : qualité maximale, coût élevé.

⚠️ Sur iPhone, la nappe de l'écran intègre parfois une **puce d'appairage** qui gère True Tone. Sans transfert de puce ou appairage logiciel, True Tone disparaît et un message « pièce inconnue » peut apparaître.

### Étapes

1. Éteindre, retirer la SIM, retirer les deux vis Pentalobe basses.
2. Chauffer le pourtour, poser la ventouse près du bouton d'accueil / bas de l'écran, créer un interstice.
3. Trancher l'adhésif au médiator tout autour. **Ne pas** insérer le médiator en haut, où se trouvent des nappes/capteurs sur certains modèles.
4. Ouvrir l'écran délicatement selon l'axe de la charnière (souvent le côté droit ou le bas selon le modèle). Utiliser un support ou une béquille pour maintenir l'écran ouvert sans tirer sur les nappes.
5. Retirer le blindage du connecteur de batterie et **débrancher la batterie**.
6. Retirer le blindage métallique couvrant les connecteurs d'écran ; débrancher les nappes (dalle, tactile, capteurs).
7. Séparer l'ancien écran. **Transférer** les éléments réutilisables vers le nouvel écran : bloc **caméra frontale / capteur de proximité / Face ID**, écouteur interne, plaque de blindage arrière, et le cas échéant la **puce True Tone** (nécessite un programmateur).
8. Sur modèles à Face ID : la nappe du **projecteur de points** est appariée à la carte. Elle doit être **conservée intacte** ; une nappe abîmée = perte définitive du Face ID (non réparable par simple pièce).
9. Positionner le nouvel écran, rebrancher les nappes dans l'ordre, replacer les blindages.
10. Rebrancher la batterie **en dernier**.
11. **Tester avant collage** : affichage, tactile sur toute la surface, True Tone, écouteur, caméra frontale, Face ID, capteur de proximité (l'écran doit s'éteindre pendant un appel).
12. Si tout fonctionne, nettoyer, poser l'adhésif neuf, refermer, presser.
13. Le cas échéant, procéder à l'**appairage** (True Tone, luminosité) avec l'outil adéquat.

![Figure 1.7 — iPhone ouvert, écran maintenu en position « livre » par une béquille](images/smartphone-1-7-ouverture-livre.jpg)

![Figure 1.8 — Blindage des connecteurs d'écran, vis Phillips repérées](images/smartphone-1-8-blindage-ecran.jpg)

![Figure 1.9 — Transfert du bloc caméra frontale et capteur Face ID vers le nouvel écran](images/smartphone-1-9-transfert-faceid.jpg)

![Figure 1.10 — Test complet de l'écran avant collage définitif](images/smartphone-1-10-test-ecran.jpg)

![Figure 1.11 — Pose de l'adhésif périphérique neuf](images/smartphone-1-11-adhesif-neuf.jpg)

**⚠️ Points critiques**

- La nappe **Face ID / projecteur de points** est appariée : ne jamais la plier, la chauffer ni la remplacer par une pièce tierce.
- Ne pas oublier de transférer l'écouteur et le capteur de proximité, sous peine de fonctions manquantes.
- Ne pas coller avant d'avoir tout testé.

**❌ Erreurs courantes à éviter**

- Ouvrir dans le mauvais sens et arracher les nappes courtes.
- Endommager la nappe Face ID (perte définitive et coûteuse).
- Négliger le blindage de masse du connecteur : provoque des dysfonctionnements tactiles.
- Utiliser un écran de qualité médiocre puis se heurter aux avertissements logiciels.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Pas d'image : nappe dalle mal enclenchée ou écran défectueux. Réenclencher, tester avec un autre écran.
- Tactile capricieux / lignes : blindage de masse mal remis, nappe pincée, ou écran de mauvaise qualité.
- Face ID « indisponible » : nappe endommagée ou mal connectée ; parfois irréversible.
- True Tone absent : puce non transférée ou non appairée ; utiliser le programmateur.
- Capteur de proximité inactif (écran reste allumé en appel) : capteur/écouteur mal transféré.

\newpage

## 1.3 — Remplacement de l'écran d'un smartphone Android / Samsung

Sur Samsung haut de gamme, l'écran AMOLED est **collé pleine surface** au châssis. Deux stratégies existent : remplacer la **dalle seule** (économique mais très délicat, séparation à chaud et recollage) ou monter un **« service pack » complet** (dalle + châssis + parfois batterie), plus simple mais coûteux.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 45 à 90 minutes |
| **Outils nécessaires** | Plaque chauffante, ventouse, médiators, spudger, tournevis Phillips, séparateur (fil moly / lame), colle B-7000 ou adhésif précoupé, presse |
| **Pièces de remplacement** | Écran AMOLED compatible, ou service pack complet (dalle + châssis), adhésif/joint |
| **Risque principal** | Casse de la dalle (fine et fragile) ; batterie perforée si ouverture par l'arrière mal maîtrisée |

### Deux approches

- **Approche « service pack »** : on ouvre par l'arrière, on transfère la carte et les composants dans le nouveau châssis livré avec l'écran. Plus fiable, recommandé pour un résultat professionnel.
- **Approche « dalle seule »** : on sépare l'AMOLED du châssis à chaud avec un fil de découpe, on nettoie les résidus de colle, on recolle une dalle neuve. Économique mais risqué (l'AMOLED se casse au moindre faux mouvement ; les nappes tactiles/empreinte peuvent être intégrées).

### Étapes (approche service pack)

1. Éteindre, retirer la SIM. Chauffer la **coque arrière** en verre et la décoller au médiator (attention au capteur d'empreinte et à la nappe éventuelle).
2. Retirer les vis du cache technique interne (souvent Phillips) et le cache plastique.
3. Débrancher et retirer la **batterie** en premier (languettes d'extraction + IPA pour la colle).
4. Débrancher toutes les nappes reliant la carte au bloc écran (dalle, tactile, boutons).
5. Dévisser et extraire la **carte mère** et les sous-ensembles (caméras, haut-parleur, port de charge selon modèle).
6. Transférer ces composants dans le **nouveau châssis/écran** (service pack), en respectant l'emplacement de chaque nappe et de chaque vis.
7. Rebrancher les nappes, replacer les blindages, remonter la carte.
8. Rebrancher la batterie **en dernier**.
9. **Tester** : affichage, tactile, empreinte sous écran (à ré-enregistrer), boutons, caméras, charge.
10. Recoller la coque arrière avec un adhésif neuf ; presser.

![Figure 1.12 — Décollage de la coque arrière en verre d'un Samsung à chaud](images/smartphone-1-12-coque-arriere-samsung.jpg)

![Figure 1.13 — Cache technique interne retiré, batterie et nappes visibles](images/smartphone-1-13-cache-interne.jpg)

![Figure 1.14 — Extraction de la batterie à l'aide des languettes et d'IPA](images/smartphone-1-14-batterie-samsung.jpg)

![Figure 1.15 — Transfert de la carte mère dans le service pack neuf](images/smartphone-1-15-transfert-carte.jpg)

![Figure 1.16 — Test du capteur d'empreinte sous écran après remontage](images/smartphone-1-16-empreinte.jpg)

**⚠️ Points critiques**

- La dalle AMOLED est **extrêmement fragile** hors de son châssis : ne jamais la poser face contre une surface dure, ne pas la plier.
- Le capteur d'empreinte **sous écran** est appairé à la dalle : un changement de dalle impose souvent de ré-enregistrer les empreintes, et un capteur optique/ultrasonique incompatible ne fonctionnera pas.
- La coque arrière collée cache parfois le lecteur d'empreinte capacitif : décoller sans arracher la nappe.

**❌ Erreurs courantes à éviter**

- Tenter la « dalle seule » sans expérience : taux de casse élevé.
- Oublier de transférer une nappe (antenne, NFC, bobine de charge sans fil intégrée à la coque).
- Chauffer trop fort et déformer le châssis plastique.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Empreinte sous écran non fonctionnelle : dalle incompatible ou empreintes non ré-enregistrées.
- Pas de charge sans fil / NFC : bobine de la coque arrière non reconnectée.
- Tactile partiel : nappe mal clipsée ou dalle défectueuse.

\newpage

## 1.4 — Remplacement de la batterie d'un smartphone

La batterie est un consommable : sa capacité chute avec les cycles. Un remplacement redonne de l'autonomie et corrige souvent des extinctions intempestives. C'est aussi l'opération où le **risque lithium** est le plus présent.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen |
| **Temps estimé** | 25 à 50 minutes |
| **Outils nécessaires** | Outils d'ouverture, spudger plastique, brucelles, languettes d'extraction, IPA 99 %, plaque chauffante douce, tapis organiseur |
| **Pièces de remplacement** | Batterie compatible ou originale (avec ou sans puce d'appairage selon modèle), adhésif de batterie |
| **Risque principal** | **Perforation / emballement thermique de la batterie** |

### Sécurité lithium et dissolution de la colle

Les batteries sont maintenues par des **bandes adhésives extensibles** (languettes que l'on tire pour décoller) ou par un adhésif pleine surface. La règle d'or : **ne jamais faire levier sous la cellule avec un outil métallique**. On privilégie :

- **Les languettes d'extraction** : tirer lentement, bien à plat, en gardant la bande tendue. Si elle casse, ne pas creuser au métal.
- **L'alcool isopropylique 99 %** : en verser quelques gouttes sous la batterie **dissout la colle** et libère la cellule sans effort. C'est la méthode la plus sûre.
- **Une chaleur douce** par l'arrière pour ramollir l'adhésif, sans jamais surchauffer la cellule.

⚠️ Une batterie qui résiste doit être libérée par plus d'IPA et de patience, **jamais** par la force.

### Étapes

1. Éteindre, ouvrir l'appareil selon la procédure 1.1.
2. **Débrancher la batterie en premier**, retirer son blindage.
3. Repérer les **languettes d'extraction** (souvent sous la cellule, côté bas).
4. Tirer chaque languette lentement, à faible angle, sans à-coup. La bande s'étire et se décolle.
5. Si les languettes cassent ou sont absentes : appliquer de l'IPA 99 % le long des bords de la cellule, attendre quelques dizaines de secondes, glisser une carte plastique fine ou un médiator **à plat** sous un coin, ajouter de l'IPA à mesure. Ne pas plier la cellule.
6. Retirer la batterie et la mettre de côté dans un contenant sûr.
7. Nettoyer les résidus de colle à l'IPA.
8. Positionner la batterie neuve **sans la brancher** ; vérifier l'ajustement et l'orientation du connecteur.
9. Poser l'adhésif de batterie neuf, presser la cellule en place.
10. Rebrancher la batterie, replacer le blindage.
11. **Tester** : allumage, niveau de charge, état de la batterie (menu santé/diagnostic). Sur iPhone, une batterie non originale ou non appairée affiche un message « batterie / pièce inconnue ».
12. Refermer, adhésif d'étanchéité neuf, presser.

![Figure 1.17 — Batterie débranchée, languettes d'extraction repérées](images/smartphone-1-17-languettes.jpg)

![Figure 1.18 — Application d'alcool isopropylique 99 % pour dissoudre la colle](images/smartphone-1-18-ipa-colle.jpg)

![Figure 1.19 — Extraction lente et à plat de la cellule](images/smartphone-1-19-extraction-cellule.jpg)

![Figure 1.20 — Batterie usagée placée dans un contenant ignifuge](images/smartphone-1-20-batterie-securite.jpg)

![Figure 1.21 — Pose de la batterie neuve et de l'adhésif](images/smartphone-1-21-batterie-neuve.jpg)

**⚠️ Points critiques**

- Ne **jamais** percer, plier ou forcer une batterie. À la moindre déformation ou dégagement de chaleur, arrêter.
- Une batterie **gonflée** se retire encore plus prudemment (voir chapitre Sécurité) et ne se réutilise jamais.
- L'IPA doit être à **99 %** (l'eau du 70 % laisse des résidus et n'évacue pas bien la chaleur).

**❌ Erreurs courantes à éviter**

- Faire levier au spudger métallique sous la cellule (perforation).
- Chauffer directement la face de la batterie à l'air chaud.
- Réinstaller une batterie gonflée « pour dépanner ».
- Oublier d'informer le client de l'avertissement d'appairage (iPhone).

**🔧 Dépannage — si ça ne marche pas après remontage**

- N'allume pas : connecteur mal enclenché ou batterie totalement déchargée (mettre en charge 15 min).
- Message « batterie non authentifiée / entretien » : batterie non originale ou puce non appairée ; utiliser un programmateur si nécessaire.
- Autonomie médiocre : cellule de mauvaise qualité (capacité réelle inférieure à l'annonce).

\newpage

## 1.5 — Remplacement d'un module caméra de smartphone

Un module caméra (arrière ou frontal) peut présenter des taches, un flou permanent, une buée interne, un tremblement (stabilisation défaillante) ou ne plus s'ouvrir. Le remplacement est souvent simple mécaniquement, mais la caméra frontale d'iPhone est liée au Face ID.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile à Moyen |
| **Temps estimé** | 20 à 40 minutes |
| **Outils nécessaires** | Outils d'ouverture, tournevis Phillips/Y000, spudger, brucelles |
| **Pièces de remplacement** | Module caméra arrière ou frontal compatible/original |
| **Risque principal** | Endommager la nappe Face ID (frontale iPhone) ; poussière piégée sous la lentille |

### Étapes

1. Ouvrir l'appareil, **débrancher la batterie**.
2. Retirer le blindage couvrant les connecteurs de caméra.
3. Débrancher la nappe du module caméra concerné.
4. Dévisser les fixations du module et l'extraire.
5. Nettoyer l'emplacement et la **fenêtre de protection en verre** (la poussière piégée provoque des taches sur les photos).
6. Installer le module neuf, revisser, rebrancher.
7. Sur iPhone frontal : ne pas confondre le module caméra avec la nappe Face ID (souvent solidaire) ; toute atteinte au projecteur de points désactive Face ID.
8. Replacer les blindages.
9. Rebrancher la batterie.
10. **Tester** : photo/vidéo, mise au point, flash, changement de zoom (modules multiples), caméra frontale, Face ID le cas échéant.
11. Refermer.

![Figure 1.22 — Blindage des connecteurs caméra retiré](images/smartphone-1-22-blindage-camera.jpg)

![Figure 1.23 — Extraction du module caméra arrière](images/smartphone-1-23-module-camera.jpg)

![Figure 1.24 — Nettoyage de la fenêtre en verre pour éviter les taches](images/smartphone-1-24-fenetre-verre.jpg)

![Figure 1.25 — Test de mise au point après remontage](images/smartphone-1-25-test-camera.jpg)

**⚠️ Points critiques**

- La moindre poussière entre la lentille et la fenêtre = taches visibles. Travailler propre, souffler avant fermeture.
- Frontale iPhone : nappe Face ID appariée, à ne pas endommager.

**❌ Erreurs courantes à éviter**

- Toucher la lentille avec les doigts (traces grasses).
- Remonter avec de la poussière piégée.
- Forcer un connecteur mal aligné.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Écran noir dans l'app photo / plantage : module mal connecté ou défectueux, blindage de masse oublié.
- Taches sur les photos : poussière sous la fenêtre, à rouvrir et nettoyer.
- Face ID HS après remplacement frontal : nappe endommagée.

\newpage

## 1.6 — Réparation d'un dégât des eaux / humidité

L'eau (surtout l'eau de mer, sucrée ou chlorée) provoque **corrosion** et **courts-circuits**. Le facteur clé est la **rapidité** : plus on intervient tôt, meilleures sont les chances. Un appareil « ressuscité » superficiellement peut retomber en panne des semaines plus tard à cause de la corrosion résiduelle.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 1 à 3 heures (hors séchage) |
| **Outils nécessaires** | Bac à ultrasons, IPA 99 %, brosses ESD, station à air chaud, microscope/loupe, alimentation de labo, gants |
| **Pièces de remplacement** | Selon dégâts : batterie (à remplacer par principe), connecteurs corrodés, composants |
| **Risque principal** | Corrosion différée ; court-circuit à la remise sous tension |

### Principes

- **Ne pas recharger ni rallumer** un appareil mouillé : le courant accélère la corrosion et provoque des courts-circuits. La légende du « riz » est inefficace et fait perdre un temps précieux.
- **Ouvrir rapidement**, débrancher la batterie, retirer l'humidité.
- L'objectif est d'**éliminer toute trace d'eau et de corrosion** avant de remettre sous tension.

### Étapes

1. Éteindre immédiatement (ne pas rallumer). Ouvrir l'appareil.
2. **Débrancher la batterie** sans délai. Une batterie ayant pris l'eau est à remplacer par précaution.
3. Démonter la carte mère et retirer les blindages métalliques (« shields ») : la corrosion se loge dessous.
4. Inspecter à la loupe/microscope : dépôts blanchâtres/verts = corrosion.
5. **Nettoyer la carte** : bain d'**IPA 99 %** au bac à **ultrasons** (carte sans batterie ni haut-parleurs sensibles), ou brossage manuel à l'IPA pour les zones ciblées.
6. Insister sur les **connecteurs** et sous les blindages. Renouveler l'IPA si nécessaire.
7. **Sécher** complètement (air comprimé sec, chaleur douce, temps de séchage). L'humidité résiduelle est l'ennemi.
8. Inspecter à nouveau ; retirer les résidus de corrosion tenaces à la brosse ESD.
9. **Alimenter la carte sur alimentation de labo** (câble boot) pour observer la consommation avant de rebrancher la batterie : une conso anormale révèle un court-circuit à traiter.
10. Remonter, batterie neuve, tester **toutes** les fonctions (micros, HP, caméras, tactile, charge, boutons, capteurs) car les pannes post-immersion sont souvent partielles.
11. Prévenir le client : **aucune garantie de longévité**, la corrosion peut resurgir.

![Figure 1.26 — Traces de corrosion blanchâtre sous un blindage de carte mère](images/smartphone-1-26-corrosion.jpg)

![Figure 1.27 — Nettoyage de la carte au bac à ultrasons dans l'IPA 99 %](images/smartphone-1-27-ultrasons.jpg)

![Figure 1.28 — Brossage ciblé d'un connecteur corrodé](images/smartphone-1-28-brossage.jpg)

![Figure 1.29 — Contrôle de la consommation sur alimentation de laboratoire](images/smartphone-1-29-alim-labo.jpg)

![Figure 1.30 — Inspection au microscope après nettoyage](images/smartphone-1-30-microscope.jpg)

**⚠️ Points critiques**

- Ne pas mettre au bac à ultrasons des éléments fragiles (certains micros MEMS, batteries).
- Ne remettre sous tension **qu'après** séchage complet.
- Une conso anormale à l'alimentation de labo signale un court-circuit : ne pas rebrancher la batterie tant qu'il n'est pas traité.

**❌ Erreurs courantes à éviter**

- Le « truc du riz » et le simple séchage extérieur : la corrosion interne poursuit son œuvre.
- Rallumer « pour voir » avant nettoyage.
- Réutiliser une batterie immergée.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Ne démarre pas : court-circuit résiduel (localiser au point chaud/caméra thermique), composant corrodé à remplacer.
- Fonction manquante (micro, HP, caméra) : connecteur corrodé ou composant HS, à nettoyer/remplacer.
- Panne réapparaissant après quelques jours : corrosion insuffisamment traitée.

\newpage

## 1.7 — Problèmes courants des smartphones : diagnostic et solutions

Cette section propose une démarche de diagnostic pour les pannes les plus fréquentes. Le principe général : **procéder du simple au complexe**, isoler la cause, tester après chaque hypothèse.

### « Ne charge plus »

Causes probables, du plus fréquent au plus rare :

1. **Câble/chargeur défectueux** : tester avec un autre ensemble certifié.
2. **Connecteur de charge encrassé** : peluches et poussière comblent le port ; nettoyer délicatement (brosse, bois, air sec), ne pas rayer les contacts.
3. **Port de charge (dock) usé ou corrodé** : remplacer la nappe de charge (souvent peu coûteuse et accessible).
4. **Batterie en fin de vie** : ne tient plus la charge, s'éteint tôt.
5. **Circuit de charge (PMIC / U2 / Tristar)** défaillant : diagnostic carte, micro-soudure.

⚠️ Commencer **toujours** par le câble et le nettoyage du port avant d'ouvrir.

### « Écran noir » mais l'appareil vibre / sonne

1. **Dalle ou rétroéclairage HS** : l'appareil fonctionne mais n'affiche rien. Tester avec un écran connu.
2. **Nappe d'écran déconnectée** (après chute) : rouvrir, réenclencher.
3. **Circuit de rétroéclairage** (bobine/filtre) grillé après casse : diagnostic carte.

### « Ne s'allume pas du tout »

1. **Batterie totalement vide** : charger 20–30 min avant de conclure.
2. **Batterie ou connecteur défaillant** : tester/rebrancher.
3. **Bouton d'alimentation** ou sa nappe HS.
4. **Panne d'alimentation carte** (court-circuit) : mesurer la conso à l'alimentation de labo ; absence de conso ou conso figée = défaut carte.

### « Boot loop » (redémarrages en boucle)

1. **Logiciel** : mise à jour interrompue, corruption système. Tenter une restauration/flash (après sauvegarde).
2. **Batterie faible/instable** : tension qui s'effondre à la sollicitation.
3. **Défaut matériel** (mémoire, alimentation) : plus complexe, diagnostic carte.

### Surchauffe

1. **Application ou processus** monopolisant le processeur : vérifier logiciel, mises à jour.
2. **Batterie défaillante** : chauffe en charge, à remplacer.
3. **Charge de mauvaise qualité** : chargeur non conforme.
4. **Court-circuit naissant** : point chaud localisable à la caméra thermique.

### Micro ou haut-parleur muet

1. **Grille obstruée** par la poussière/saleté : nettoyer délicatement.
2. **Réglages / coque** bloquant l'ouverture audio.
3. **Nappe ou module** (micro, HP, écouteur) HS : remplacer.
4. **Codec audio** (puce) après dégât des eaux : diagnostic carte.

### « Faux tactile » / tactile fantôme

1. **Écran de mauvaise qualité** ou fissuré : le tactile s'affole. Remplacer par une pièce de qualité.
2. **Blindage de masse** de l'écran mal remonté : rétablir la masse.
3. **Chargeur non conforme** injectant du bruit : tester sans charge.
4. **Puce tactile** (après casse/eau) : diagnostic carte.

> **Démarche générale de diagnostic** : reproduire la panne, isoler (autre câble, autre écran, sans coque), consulter l'historique (chute ? eau ? mise à jour ?), procéder du moins invasif au plus invasif, tester après chaque action.

\newpage

# Tablettes (iPad et Galaxy Tab)

La tablette reprend l'architecture du smartphone à plus grande échelle. Cette taille aggrave certaines difficultés : l'**écran est collé pleine surface** sur une grande surface fragile, la **batterie est volumineuse** (donc plus dangereuse et plus fortement collée), et le verre, plus fin par rapport à sa surface, **casse facilement** pendant l'ouverture. Les iPad, en particulier, sont réputés parmi les appareils les plus délicats à ouvrir sans casse.

## Spécificités des tablettes

- **Écran collé sur tout le pourtour** (parfois pleine surface) : l'ouverture exige beaucoup de chaleur, répartie et patiente, et une découpe soignée de l'adhésif. Le risque de fissurer le verre est élevé.
- **Vitre et dalle parfois séparées** (sur iPad à LCD, la vitre tactile est distincte de la dalle) ou **laminées** (sur iPad Pro et Galaxy Tab récents, vitre + dalle en un bloc). Cela change le coût et la méthode.
- **Grande batterie** : plusieurs cellules, fortement collées. Le risque lithium est majoré ; l'IPA 99 % est quasi indispensable pour un retrait sûr.
- **Nappes du bouton principal (Touch ID)** : sur iPad à bouton Home, ce bouton est **apparié** à la carte. Le casser fait perdre Touch ID définitivement. Il doit être **transféré** sur la nouvelle vitre.
- **Face ID** sur iPad Pro : mêmes précautions que sur iPhone.
- **Rigidité du châssis** : un châssis en aluminium légèrement voilé (après chute) empêche un recollage parfait.

⚠️ Sur iPad, la lenteur est la règle absolue : une ouverture bâclée transforme une réparation d'écran en remplacement complet du bloc.

## 2.1 — Remplacement de l'écran / vitre d'un iPad

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 1 à 2 heures |
| **Outils nécessaires** | Plaque chauffante grand format ou iOpener, nombreux médiators, ventouse, spudger, fil de découpe, tournevis Phillips, colle B-7000 / adhésif précoupé, presse |
| **Pièces de remplacement** | Vitre tactile (« digitizer ») ou bloc écran laminé, bouton Home d'origine (à transférer), adhésif |
| **Risque principal** | Casse du verre à l'ouverture ; perte de Touch ID si bouton Home endommagé |

### Étapes

1. Repérer le modèle exact (les iPad se ressemblent ; la référence conditionne la pièce et la méthode). Éteindre.
2. **Chauffer longuement et uniformément** le pourtour (plaque grand format ou iOpener passés plusieurs fois). L'adhésif d'iPad est très tenace.
3. Insérer un médiator dans un angle, puis progresser millimètre par millimètre autour, en **ré-chauffant** les zones froides. Utiliser plusieurs médiators laissés en place pour empêcher l'adhésif de recoller.
4. Contourner avec prudence les zones où passent des **nappes** (bord de la caméra frontale, nappe du bouton Home en bas) : ne pas plonger le médiator profondément à ces endroits.
5. Soulever la vitre/l'écran délicatement, en gardant à l'esprit les nappes courtes.
6. **Débrancher la batterie** avant tout (retirer le cache métallique du connecteur).
7. Débrancher les nappes d'écran et, le cas échéant, du bouton Home.
8. **Transférer le bouton Home d'origine** (Touch ID) sur la nouvelle vitre : c'est impératif pour conserver Touch ID.
9. Nettoyer soigneusement le cadre de tous les résidus d'adhésif à l'IPA.
10. Poser l'écran/vitre neuf, rebrancher les nappes, rebrancher la batterie en dernier.
11. **Tester** : affichage, tactile intégral, bouton Home / Touch ID, caméras, boutons, charge.
12. Poser l'adhésif neuf et **presser** uniformément (sacs de sable, presse, ou pinces avec cales) plusieurs dizaines de minutes.

![Figure 2.1 — Chauffe uniforme du pourtour de l'iPad sur plaque grand format](images/tablette-2-1-chauffe.jpg)

![Figure 2.2 — Progression du médiator autour du cadre, plusieurs picks laissés en place](images/tablette-2-2-mediators.jpg)

![Figure 2.3 — Zone du bouton Home : découpe prudente pour préserver la nappe](images/tablette-2-3-bouton-home.jpg)

![Figure 2.4 — Transfert du bouton Home d'origine (Touch ID) sur la vitre neuve](images/tablette-2-4-transfert-touchid.jpg)

![Figure 2.5 — Mise en pression de l'écran collé après remontage](images/tablette-2-5-pression.jpg)

**⚠️ Points critiques**

- Le **bouton Home Touch ID** est apparié : ne jamais le remplacer par une pièce tierce, le transférer intact.
- La grande surface de verre casse au moindre point froid : **rechauffer** systématiquement avant de forcer.
- Une nappe (caméra, bouton) sectionnée par un médiator trop profond = réparation additionnelle.

**❌ Erreurs courantes à éviter**

- Manquer de patience et casser le verre (l'erreur numéro un sur iPad).
- Oublier de transférer le bouton Home (perte de Touch ID).
- Presser insuffisamment : l'écran se décolle après quelques jours.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Touch ID inopérant : bouton Home non transféré ou nappe abîmée.
- Tactile mort ou partiel : nappe mal clipsée, blindage de masse oublié, ou digitizer défectueux.
- Écran qui se soulève : pression/adhésif insuffisants ou châssis voilé.

\newpage

## 2.2 — Remplacement de la batterie d'une tablette

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Difficile |
| **Temps estimé** | 1 à 2 heures |
| **Outils nécessaires** | Outils d'ouverture d'écran, spudger plastique, cartes plastique, **IPA 99 % en quantité**, gants, contenant ignifuge |
| **Pièces de remplacement** | Batterie compatible/originale, adhésif de batterie |
| **Risque principal** | **Grande batterie fortement collée : perforation et emballement thermique** |

### Spécificités

La batterie d'une tablette est **grande, plate et très collée** au châssis en aluminium. Le retrait au levier est particulièrement dangereux : la cellule se plie facilement. L'**alcool isopropylique 99 %** est ici la méthode de référence : versé progressivement sous la cellule, il dissout l'adhésif et permet un retrait sans contrainte mécanique.

### Étapes

1. Ouvrir l'écran (procédure 2.1) — l'accès batterie passe par l'écran sur la plupart des iPad.
2. **Débrancher la batterie** en premier.
3. Retirer les modules qui recouvrent partiellement la batterie si nécessaire (haut-parleurs, blindages) en les repérant.
4. Verser de l'**IPA 99 %** le long des bords des cellules. Attendre. Glisser une carte plastique fine **à plat** sous un coin, sans plier la cellule.
5. Progresser lentement, en ajoutant de l'IPA à mesure, jusqu'à décoller entièrement la batterie.
6. Extraire la batterie, la placer dans un contenant ignifuge.
7. Nettoyer tous les résidus d'adhésif.
8. Installer la batterie neuve avec son adhésif, sans la brancher d'abord (vérifier l'ajustement).
9. Rebrancher, remonter les modules, tester la charge et l'autonomie.
10. Recoller l'écran (adhésif neuf, pression).

![Figure 2.6 — Grande batterie d'iPad fortement collée au châssis](images/tablette-2-6-batterie-collee.jpg)

![Figure 2.7 — Application généreuse d'IPA 99 % sous les cellules](images/tablette-2-7-ipa.jpg)

![Figure 2.8 — Décollage à plat à la carte plastique, sans plier la cellule](images/tablette-2-8-carte-plastique.jpg)

![Figure 2.9 — Batterie extraite placée en sécurité](images/tablette-2-9-securite.jpg)

**⚠️ Points critiques**

- **Ne jamais plier** une grande cellule : le risque d'emballement thermique est réel. En cas de gonflement ou d'échauffement, arrêter et sécuriser.
- Travailler dans un local ventilé (vapeurs d'IPA), loin de toute flamme.

**❌ Erreurs courantes à éviter**

- Faire levier au métal sous la batterie.
- Sous-doser l'IPA et forcer.
- Réutiliser une cellule pliée ou gonflée.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Ne charge pas / n'allume pas : connecteur mal remis, cellule déchargée (charger 30 min).
- Autonomie faible : batterie de capacité réelle insuffisante.
- Chauffe en charge : cellule de mauvaise qualité, à remplacer.

\newpage

## 2.3 — Problèmes courants des tablettes

- **Tactile qui répond mal après remplacement de vitre** : digitizer de qualité médiocre ou masse mal remise ; privilégier une pièce de qualité.
- **Touch ID / Face ID indisponible** : bouton Home non transféré (Touch ID) ou nappe/capteur endommagé (Face ID).
- **Écran qui se décolle** : pression et adhésif insuffisants, châssis voilé à redresser.
- **Ne charge plus** : port de charge (souvent soudé ou sur nappe selon modèle), câble/chargeur, batterie.
- **Autonomie effondrée** : grande batterie en fin de vie, remplacement recommandé.
- **Lignes ou zones mortes à l'écran** : dalle endommagée (choc), à remplacer.
- **Surchauffe en charge** : batterie défaillante ou chargeur non conforme.

> Les tablettes servant souvent de longues années, la question de la **rentabilité** se pose : sur un modèle ancien et de faible valeur, le coût d'un bloc écran laminé peut dépasser la valeur résiduelle. Le dire honnêtement au client.

\newpage

# Ordinateurs portables

L'ordinateur portable se distingue des appareils précédents par une architecture plus **modulaire** (sur beaucoup de modèles, hors ultrabooks soudés) et par la présence d'une **alimentation secteur**. Certaines réparations y sont plus accessibles (RAM, disque, batterie sur châssis vissé), d'autres exigent une bonne méthode (démontage complet pour la pâte thermique). Deux familles se distinguent : les **portables « classiques »** à composants remplaçables (nombreux PC Windows) et les **ultrabooks/MacBook** très intégrés (RAM et SSD parfois soudés, batterie collée).

## Précautions spécifiques

- **Débrancher le secteur ET la batterie interne** avant toute intervention. Sur un portable à batterie interne, on ouvre le fond et on **débranche le connecteur de batterie** de la carte mère en premier.
- **Décharger l'électricité résiduelle** : après débranchement, maintenir le bouton d'alimentation quelques secondes.
- **ESD** : les modules RAM et SSD sont sensibles ; bracelet antistatique recommandé.
- **Gestion des vis** : les fonds de portables comportent des vis de longueurs différentes (certaines cachées sous les patins en caoutchouc) ; tapis organiseur indispensable.

## 3.1 — Ouverture du châssis d'un ordinateur portable

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile à Moyen |
| **Temps estimé** | 10 à 25 minutes |
| **Outils nécessaires** | Tournevis Phillips/Torx/Pentalobe (MacBook), médiators/spatule, spudger, tapis organiseur |
| **Pièces de remplacement** | Aucune (accès) ; éventuellement patins/pieds adhésifs |
| **Risque principal** | Clips de fond cassés ; vis cachées forcées ; nappe du fond (rare) arrachée |

### Étapes

1. Éteindre, débrancher le secteur, retirer la batterie externe si amovible.
2. Retirer **toutes** les vis du fond, y compris celles cachées **sous les patins en caoutchouc** ou sous une étiquette (attention : retirer un patin peut laisser une trace).
3. Repérer la longueur de chaque vis sur le tapis organiseur (elles diffèrent souvent aux charnières).
4. Décliper le fond à la spatule/aux médiators, en glissant tout autour pour libérer les clips.
5. Soulever le fond ; vérifier l'absence de nappe le reliant à la carte (rare mais existant).
6. Une fois ouvert, **débrancher le connecteur de batterie interne** de la carte mère.
7. Décharger l'énergie résiduelle (bouton power maintenu quelques secondes).

![Figure 3.1 — Vis de fond retirées, dont deux cachées sous les patins caoutchouc](images/portable-3-1-vis-fond.jpg)

![Figure 3.2 — Décliquetage du fond à la spatule d'ouverture](images/portable-3-2-declip.jpg)

![Figure 3.3 — Débranchement du connecteur de batterie interne](images/portable-3-3-batterie-connecteur.jpg)

**⚠️ Points critiques**

- Ne pas forcer le fond si une vis reste en place : chercher les vis cachées.
- Débrancher la batterie interne avant toute manipulation de composant.

**❌ Erreurs courantes à éviter**

- Casser les clips en soulevant d'un coin sans les libérer.
- Oublier une vis sous un patin et fendre le fond.
- Mélanger les longueurs de vis.

**🔧 Dépannage** : si le fond résiste, revérifier chaque emplacement de vis et les clips ; ne jamais forcer au tournevis en levier.

\newpage

## 3.2 — Remplacement d'un disque (HDD → SSD) et clonage

Passer d'un disque dur mécanique (HDD) à un SSD est l'amélioration la plus rentable sur un portable ancien : gain de vitesse spectaculaire. Sur beaucoup de modèles, le disque est au format 2,5 pouces SATA ou M.2 (SATA/NVMe).

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile |
| **Temps estimé** | 20 à 40 minutes (hors clonage) |
| **Outils nécessaires** | Tournevis Phillips/Torx, spudger, adaptateur USB-SATA ou USB-M.2 (pour clonage) |
| **Pièces de remplacement** | SSD 2,5" SATA ou SSD M.2 (SATA ou NVMe **selon compatibilité de la carte**) |
| **Risque principal** | Incompatibilité de format/interface ; perte de données si clonage mal fait |

### Vérifier la compatibilité

- **Format** : 2,5" SATA (ancien), M.2 SATA, ou M.2 NVMe (PCIe). Un slot M.2 « B+M key » ne supporte pas forcément le NVMe : vérifier la fiche du portable.
- **Épaisseur** du 2,5" (7 mm généralement).
- **Capacité** souhaitée.

### Étapes

1. Sauvegarder les données **avant** toute manipulation.
2. **Cloner** l'ancien disque vers le neuf (logiciel de clonage), le SSD neuf branché en externe via adaptateur USB — ou prévoir une réinstallation propre du système.
3. Ouvrir le châssis (3.1), débrancher la batterie.
4. Repérer et retirer le disque d'origine : dévisser le berceau (2,5") ou la vis unique de maintien (M.2), débrancher la nappe/le connecteur.
5. Installer le SSD neuf (aligner l'encoche du M.2, visser sans excès ; clipser le 2,5" dans son berceau).
6. Refermer, rebrancher, démarrer.
7. Vérifier que le système démarre sur le SSD ; ajuster l'ordre de démarrage dans le BIOS/UEFI si nécessaire.
8. Contrôler l'état du SSD (outil SMART) et activer le TRIM.

![Figure 3.4 — Disque dur 2,5" d'origine dans son berceau](images/portable-3-4-hdd.jpg)

![Figure 3.5 — Clonage du HDD vers le SSD via adaptateur USB](images/portable-3-5-clonage.jpg)

![Figure 3.6 — Installation d'un SSD M.2 : alignement de l'encoche et vis de maintien](images/portable-3-6-ssd-m2.jpg)

![Figure 3.7 — Vérification du démarrage sur le nouveau SSD](images/portable-3-7-boot.jpg)

**⚠️ Points critiques**

- Vérifier **NVMe vs SATA** avant d'acheter : un NVMe dans un slot SATA-only ne fonctionnera pas.
- Le clonage doit se faire de l'ancien vers le neuf ; ne jamais inverser la source et la cible (écrasement des données).

**❌ Erreurs courantes à éviter**

- Serrer excessivement la vis M.2 (fragile).
- Oublier d'activer le TRIM (longévité/perf du SSD).
- Clonage sans sauvegarde préalable.

**🔧 Dépannage** : pas de démarrage → vérifier l'ordre de boot UEFI, la partition système clonée, la bonne détection du SSD dans le BIOS.

\newpage

## 3.3 — Remplacement / ajout de mémoire vive (RAM SO-DIMM)

Ajouter de la RAM accélère un portable qui « rame » sous le multitâche. Attention : de nombreux ultrabooks ont une RAM **soudée** (non remplaçable). Vérifier avant tout.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile |
| **Temps estimé** | 10 à 20 minutes |
| **Outils nécessaires** | Tournevis Phillips, bracelet antistatique |
| **Pièces de remplacement** | Module(s) SO-DIMM au **bon standard** (DDR4 / DDR5), bonne fréquence, bonne capacité |
| **Risque principal** | Incompatibilité (standard/fréquence) ; ESD ; module mal clipsé |

### Compatibilité

- **Standard** : DDR3, DDR4, DDR5… non interchangeables (encoche différente). Le portable impose son standard.
- **Format** : SO-DIMM (portables), différent du DIMM des ordinateurs de bureau.
- **Capacité maximale** supportée par la carte, et **nombre de slots** (parfois un seul).
- **Fonctionnement en double canal** : privilégier deux modules identiques.

### Étapes

1. Identifier le standard et la capacité max supportée (documentation du modèle).
2. Ouvrir le châssis (3.1), débrancher la batterie, se relier à la terre (ESD).
3. Repérer le(s) slot(s) SO-DIMM.
4. Pour retirer un module : écarter les deux clips latéraux ; le module se relève à 30°, on l'extrait.
5. Insérer le module neuf : aligner l'encoche, insérer à 30°, appuyer jusqu'au clip.
6. Refermer, démarrer, vérifier la quantité de RAM reconnue (BIOS/UEFI ou système).
7. Facultatif : test mémoire (memtest) pour valider la stabilité.

![Figure 3.8 — Slots SO-DIMM, clips latéraux visibles](images/portable-3-8-sodimm.jpg)

![Figure 3.9 — Insertion du module à 30° puis appui jusqu'au clic](images/portable-3-9-insertion-ram.jpg)

![Figure 3.10 — Vérification de la RAM reconnue au démarrage](images/portable-3-10-ram-reconnue.jpg)

**⚠️ Points critiques**

- Manipuler le module **par les bords**, jamais les contacts dorés.
- Un module au mauvais standard ne rentre pas : ne jamais forcer.

**❌ Erreurs courantes à éviter**

- Acheter de la DDR5 pour une carte DDR4 (ou l'inverse).
- Mélanger des fréquences/latences très différentes (instabilité).
- Négliger l'ESD.

**🔧 Dépannage** : pas de démarrage ou bips → module mal enfoncé, incompatible, ou slot défaillant ; réinsérer, tester un seul module à la fois.

\newpage

## 3.4 — Remplacement du clavier

Le clavier de portable subit usure, liquides renversés et touches cassées. Selon les modèles, il se remplace seul (clavier vissé/cliqué depuis le fond) ou est **solidaire du repose-mains** (« topcase »), ce qui alourdit l'intervention.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen à Difficile (selon modèle) |
| **Temps estimé** | 30 minutes à 2 heures |
| **Outils nécessaires** | Tournevis, spudger, brucelles, éventuellement outil de rivets (certains claviers rivetés) |
| **Pièces de remplacement** | Clavier compatible (bon layout AZERTY/QWERTY, bonne référence), ou topcase complet |
| **Risque principal** | Nappe fragile ; clavier riveté difficile ; layout erroné |

### Étapes

1. Vérifier la **référence exacte** et le **layout** (AZERTY français, rétroéclairé ou non).
2. Ouvrir le châssis, débrancher la batterie.
3. Selon l'architecture : soit accéder au clavier par l'intérieur (démontage plus ou moins complet), soit le décliper par le dessus.
4. Débrancher la **nappe du clavier** (connecteur ZIF, relever le loquet).
5. Retirer les vis ou les rivets/plots de maintien du clavier. Les claviers rivetés se remplacent parfois par un modèle à visser ou en refixant.
6. Installer le clavier neuf, rebrancher la nappe (bien insérée, loquet baissé).
7. Tester **chaque touche** et le rétroéclairage avant fermeture complète.
8. Refermer.

![Figure 3.11 — Nappe ZIF du clavier, loquet relevé](images/portable-3-11-nappe-clavier.jpg)

![Figure 3.12 — Plots de maintien du clavier riveté](images/portable-3-12-rivets.jpg)

![Figure 3.13 — Test de toutes les touches après remplacement](images/portable-3-13-test-clavier.jpg)

**⚠️ Points critiques** : nappe très fine (ne pas déchirer), layout à vérifier impérativement, rivets à gérer proprement.

**❌ Erreurs courantes à éviter** : commander un QWERTY au lieu d'un AZERTY, forcer la nappe ZIF, oublier une vis interne.

**🔧 Dépannage** : touches inertes → nappe mal insérée dans le connecteur ZIF ; rétroéclairage absent → connecteur dédié non rebranché.

\newpage

## 3.5 — Remplacement de la batterie d'un portable

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile (batterie vissée) à Difficile (batterie collée type MacBook) |
| **Temps estimé** | 15 minutes à 1 h 30 |
| **Outils nécessaires** | Tournevis, spudger plastique, **IPA 99 %** (batteries collées), gants, contenant ignifuge |
| **Pièces de remplacement** | Batterie compatible/originale (bonne référence, bon connecteur) |
| **Risque principal** | Emballement thermique (batteries collées, cellules pliées) |

### Étapes

1. Ouvrir le châssis, **débrancher le connecteur de batterie** de la carte mère en premier.
2. **Batterie vissée** : retirer les vis, extraire la cellule. Simple et sûr.
3. **Batterie collée** (ultrabooks/MacBook) : appliquer de l'**IPA 99 %** sous les cellules, décoller à plat à la carte plastique, sans plier ni percer. Ne jamais faire levier au métal.
4. Placer la batterie usagée dans un contenant sûr.
5. Nettoyer les résidus d'adhésif.
6. Installer la batterie neuve (visser ou coller avec adhésif neuf), rebrancher le connecteur.
7. Refermer, charger, **calibrer** si nécessaire (charge complète puis décharge selon les recommandations).
8. Vérifier l'état de charge et la santé de la batterie.

![Figure 3.14 — Batterie de portable vissée, connecteur débranché](images/portable-3-14-batterie-vissee.jpg)

![Figure 3.15 — Décollage d'une batterie collée à l'IPA 99 % (type ultrabook)](images/portable-3-15-batterie-collee.jpg)

![Figure 3.16 — Batterie neuve installée, connecteur rebranché](images/portable-3-16-batterie-neuve.jpg)

**⚠️ Points critiques** : ne jamais plier une cellule ; sur MacBook, les cellules sont grandes et sensibles ; travailler à l'IPA, sans chaleur excessive, loin de toute flamme.

**❌ Erreurs courantes à éviter** : faire levier au métal, réutiliser une cellule gonflée, oublier de débrancher le connecteur avant extraction.

**🔧 Dépannage** : ne charge pas → connecteur mal remis, batterie incompatible ; autonomie faible → cellule de mauvaise qualité.

\newpage

## 3.6 — Nettoyage des ventilateurs et remplacement de la pâte thermique

La chaleur est l'ennemi des performances et de la longévité. Avec le temps, la poussière colmate les radiateurs et la **pâte thermique** (interface entre le processeur et le dissipateur) sèche. Résultat : surchauffe et **throttling** (le processeur réduit sa fréquence pour se protéger, d'où des ralentissements). Cette maintenance est très efficace sur un portable qui chauffe et rame.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen |
| **Temps estimé** | 45 minutes à 1 h 30 |
| **Outils nécessaires** | Tournevis, spudger, air sec/poire, chiffon non pelucheux, IPA 99 %, pâte thermique neuve |
| **Pièces de remplacement** | Pâte thermique (ex. à base de céramique/métal), éventuellement pads thermiques, ventilateur si HS |
| **Risque principal** | Excès/défaut de pâte ; oubli de rebrancher le ventilateur ; vis du dissipateur mal serrées |

### Étapes

1. Ouvrir le châssis, débrancher la batterie.
2. Localiser le(s) ventilateur(s) et le **caloduc/dissipateur** (heatpipe).
3. Débrancher le connecteur du ventilateur.
4. Retirer le dissipateur : dévisser les vis **dans l'ordre indiqué** (souvent numéroté 1-2-3-4), en croix et progressivement, pour ne pas contraindre la puce.
5. Nettoyer les pales et le radiateur du ventilateur (air sec, brosse) ; retirer le colmatage de poussière du radiateur.
6. **Retirer l'ancienne pâte** sur le processeur/GPU et sur le dissipateur à l'IPA 99 % et un chiffon non pelucheux, jusqu'à une surface propre.
7. Appliquer une **quantité adaptée** de pâte neuve (un petit pois central ou une fine couche selon la méthode ; ni trop, ni trop peu). Remplacer les pads thermiques usés si présents.
8. Reposer le dissipateur, serrer les vis **progressivement et en croix**, dans l'ordre.
9. Rebrancher le ventilateur.
10. Refermer, démarrer, surveiller les **températures** en charge (logiciel de monitoring) et confirmer la baisse.

![Figure 3.17 — Radiateur colmaté par la poussière avant nettoyage](images/portable-3-17-radiateur-colmate.jpg)

![Figure 3.18 — Dissipateur retiré, ancienne pâte sèche sur le processeur](images/portable-3-18-ancienne-pate.jpg)

![Figure 3.19 — Nettoyage de la puce à l'IPA 99 %](images/portable-3-19-nettoyage-puce.jpg)

![Figure 3.20 — Application d'une quantité adaptée de pâte thermique neuve](images/portable-3-20-pate-neuve.jpg)

![Figure 3.21 — Serrage en croix des vis du dissipateur dans l'ordre](images/portable-3-21-serrage-croix.jpg)

![Figure 3.22 — Contrôle des températures en charge après intervention](images/portable-3-22-temperatures.jpg)

**⚠️ Points critiques**

- Serrage **uniforme et en croix** : un serrage inégal crée un mauvais contact et une surchauffe.
- Ne pas oublier de rebrancher le ventilateur (surchauffe immédiate et arrêt de sécurité).
- Ne pas remplacer un pad thermique épais par de la pâte (l'écart ne serait pas comblé).

**❌ Erreurs courantes à éviter**

- Excès de pâte (déborde, isole) ou insuffisance (points de contact secs).
- Réutiliser la pâte sèche.
- Serrer une vis à fond avant les autres.

**🔧 Dépannage — throttling / surchauffe persistante**

- Températures toujours élevées : contact dissipateur imparfait (reprendre le montage), pâte mal étalée, ventilateur encrassé ou HS (remplacer), pads manquants sur certains modèles.
- Arrêts intempestifs : protection thermique ; vérifier le montage du dissipateur.
- Bruit de ventilateur : roulement usé, remplacer le ventilateur.

\newpage

## 3.7 — Problèmes thermiques et throttling : diagnostic

Le **throttling thermique** est la réduction automatique de fréquence pour éviter la surchauffe. Symptômes : ralentissements sous charge, ventilateurs à fond, chaleur du châssis, arrêts brutaux. Démarche :

1. **Monitorer** les températures et fréquences (logiciel dédié) au repos et en charge.
2. **Nettoyer** ventilateurs et radiateurs, **refaire la pâte** (section 3.6) : c'est la cause la plus fréquente sur un portable âgé.
3. Vérifier l'**environnement** : surface molle obstruant les aérations, ambiance chaude, aérations bouchées.
4. Contrôler les **pilotes/BIOS** et les profils d'alimentation.
5. Sur les modèles connus pour un dimensionnement thermique limité, envisager des **pads/pâte de meilleure qualité**.
6. En dernier recours, un **ventilateur défaillant** ou un capteur thermique en défaut peut être en cause.

\newpage

# AirPods et écouteurs sans fil

Les écouteurs sans fil (AirPods et équivalents) sont les appareils les plus **hostiles à la réparation** de tout ce guide. Miniaturisés à l'extrême et **assemblés par ultrasons ou collage définitif**, ils ne sont, pour la plupart, **pas conçus pour être ouverts**. Il faut le dire avec franchise : dans une majorité de cas, remplacer la batterie d'un écouteur sans fil **n'est pas rentable** et le taux de casse est élevé. Ce chapitre distingue ce qui est raisonnable (nettoyage, entretien) de ce qui relève de l'exploit (remplacement de batterie).

## Ce qui est réaliste et ce qui ne l'est pas

- **Nettoyage et entretien** : réaliste, souvent suffisant pour restaurer le son et la charge. C'est l'intervention la plus utile.
- **Remplacement de batterie** : très difficile, destructif, rarement rentable. À réserver aux cas particuliers et à réaliser en connaissance de cause.
- **Réparation du boîtier de charge** : nettoyage des contacts, parfois remplacement du boîtier seul (souvent disponible séparément et plus simple que l'écouteur).

> **Franchise économique** : le coût d'une intervention (temps, pièces microscopiques, risque de casse) dépasse fréquemment la valeur d'une paire d'occasion ou le prix d'un écouteur unitaire de remplacement vendu par le fabricant. Orientez le client vers la solution la plus sensée.

## 4.1 — Nettoyage et entretien des écouteurs et du boîtier

C'est l'intervention **reine** : la plupart des problèmes de son faible, de charge capricieuse ou de détection ratée viennent de la **saleté** (cérumen, poussière, peluches).

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Facile |
| **Temps estimé** | 15 à 30 minutes |
| **Outils nécessaires** | Brosse souple/antistatique, cure-dent en bois ou plastique, pâte adhésive (type patafix), coton-tige, IPA 99 % (avec parcimonie), air sec |
| **Pièces de remplacement** | Aucune (entretien) ; éventuellement embouts en silicone neufs |
| **Risque principal** | Pousser la saleté plus profond ; humidité excessive dans les grilles |

### Étapes

1. Retirer les embouts en silicone (modèles intra) et les nettoyer séparément (eau tiède + savon doux, bien sécher).
2. Nettoyer les **grilles de haut-parleur** avec une brosse souple sèche, en délogeant le cérumen. La **pâte adhésive** appliquée puis retirée capture les particules sans les enfoncer.
3. Dégager les **microperforations** (micros, capteurs) avec un cure-dent en bois, sans les élargir ni percer.
4. Nettoyer les **contacts de charge** de l'écouteur et du boîtier avec un coton-tige à peine humecté d'IPA 99 %, puis sécher.
5. Nettoyer l'**intérieur du boîtier** (logements, charnière) à la brosse sèche et à l'air sec.
6. Vérifier la **détection dans l'oreille** et la **charge** après nettoyage.

![Figure 4.1 — Grille de haut-parleur encrassée de cérumen avant nettoyage](images/airpods-4-1-grille-sale.jpg)

![Figure 4.2 — Capture des particules à la pâte adhésive](images/airpods-4-2-patafix.jpg)

![Figure 4.3 — Nettoyage des contacts de charge au coton-tige et IPA 99 %](images/airpods-4-3-contacts.jpg)

![Figure 4.4 — Nettoyage des logements du boîtier de charge](images/airpods-4-4-boitier.jpg)

**⚠️ Points critiques** : ne pas noyer les grilles d'IPA (les transducteurs et micros n'aiment pas l'humidité) ; ne pas percer les membranes.

**❌ Erreurs courantes à éviter** : enfoncer le cérumen plus profond, utiliser un objet métallique pointu, tremper l'écouteur.

**🔧 Dépannage** : son toujours faible d'un côté → grille encore obstruée (renouveler le nettoyage) ou transducteur HS ; charge capricieuse → contacts encore sales ou oxydés.

\newpage

## 4.2 — Remplacement de la batterie d'un écouteur sans fil (intervention non rentable dans la majorité des cas)

**Avertissement de rentabilité** : cette procédure est documentée par honnêteté et exhaustivité, mais dans la grande majorité des situations, elle **n'est pas économiquement justifiée** et présente un **fort risque de destruction**. Les écouteurs sont scellés par ultrasons ; les ouvrir est le plus souvent **destructif**. La batterie est une **micro-cellule** (cylindrique « pile bouton » pour les écouteurs, cellules Li-Po pour le boîtier) au collage/soudage délicat. Considérez d'abord le remplacement de l'écouteur défaillant à l'unité auprès du fabricant.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Très difficile (souvent destructif) |
| **Temps estimé** | 1 à 3 heures, résultat incertain |
| **Outils nécessaires** | Chaleur douce, lames/scalpel, micro-fer à souder, brucelles fines, microscope, colle |
| **Pièces de remplacement** | Micro-batterie spécifique (disponibilité et qualité variables) |
| **Risque principal** | **Destruction de l'écouteur ; perforation de la micro-cellule lithium** |

### Étapes (à titre informatif, résultat non garanti)

1. Évaluer honnêtement la pertinence : coût d'un écouteur neuf à l'unité vs temps et risque. Souvent, **ne pas ouvrir** est la bonne décision.
2. Chauffer très doucement la coque pour ramollir le collage / affaiblir la soudure ultrasonique.
3. Ouvrir la coque à la lame en acceptant des **traces et un risque de casse** ; la coque ne se referme pas toujours proprement.
4. Repérer la micro-cellule et ses points de soudure.
5. **Dessouder** délicatement la cellule au micro-fer (la cellule pile bouton lithium ne doit jamais être percée ni chauffée excessivement).
6. Souder la cellule neuve en respectant la polarité, sans surchauffe.
7. Refermer et recoller la coque (aspect esthétique dégradé fréquent).
8. Tester charge, autonomie, appairage, son.

![Figure 4.5 — Ouverture destructive de la coque d'un écouteur (traces inévitables)](images/airpods-4-5-ouverture.jpg)

![Figure 4.6 — Micro-cellule et points de soudure sous microscope](images/airpods-4-6-microcellule.jpg)

![Figure 4.7 — Dessoudage délicat de la batterie au micro-fer](images/airpods-4-7-dessoudage.jpg)

![Figure 4.8 — Remontage : recollage de la coque, aspect dégradé](images/airpods-4-8-remontage.jpg)

**⚠️ Points critiques** : micro-cellule lithium extrêmement sensible (ne jamais percer/plier) ; soudure sur cellule = risque thermique ; l'ouverture est presque toujours visible.

**❌ Erreurs courantes à éviter** : entreprendre l'opération sans avoir informé le client du caractère destructif et non rentable ; chauffer/percer la cellule.

**🔧 Dépannage** : si l'écouteur ne s'appaire plus ou ne charge plus → carte ou cellule endommagée pendant l'ouverture ; issue souvent irréversible.

> **Recommandation honnête** : pour un écouteur dont la batterie est morte, la solution la plus raisonnable est généralement le **remplacement de l'unité** (service du fabricant) ou l'achat d'une paire reconditionnée, pas l'ouverture.

\newpage

## 4.3 — Haut-parleur / tactile et entretien du boîtier de charge

- **Son faible ou déformé** : dans l'immense majorité des cas, cause = **grille encrassée** (voir 4.1). Le remplacement du transducteur est rarement possible sans destruction.
- **Commandes tactiles / capteurs de pression capricieux** : souvent liés à la saleté ou à l'humidité ; nettoyage et séchage d'abord. Défaut matériel = intervention non rentable.
- **Boîtier de charge qui ne charge plus les écouteurs** :
  1. Nettoyer les **contacts** du boîtier et des écouteurs (oxydation, saleté).
  2. Vérifier la **charge du boîtier** lui-même (port de charge, câble).
  3. La **batterie du boîtier** (Li-Po) peut être en fin de vie : le remplacement du boîtier complet, souvent vendu séparément, est plus simple et plus fiable que l'ouverture.
- **Détection « dans l'oreille » défaillante** : capteur optique/de proximité sali → nettoyer la petite fenêtre du capteur.

**Entretien préventif du boîtier** : garder les contacts propres et secs, éviter les poches contenant des peluches, ne pas exposer à l'humidité, nettoyer régulièrement les logements.

> **Synthèse honnête sur les écouteurs sans fil** : privilégier **nettoyage et entretien**, qui résolvent la majorité des cas ; considérer le **remplacement du boîtier** quand c'est lui le fautif ; réserver l'ouverture d'un écouteur aux situations exceptionnelles, en toute connaissance du risque et de la non-rentabilité.

\newpage

<!-- === EXTENSIONS (généré, ne pas éditer à la main) === -->

\newpage

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

\newpage

# Montres et bracelets connectés

La montre connectée est devenue un appareil de réparation à part entière. Elle concentre, dans un volume minuscule, tout ce qui rend une intervention difficile : une dalle OLED collée pleine surface, une batterie lithium de très faible capacité mais tout aussi dangereuse, des joints d'étanchéité exigeants (la plupart des modèles revendiquent une résistance à l'eau, voire à la plongée), des nappes courtes et fragiles, et une densité de composants qui ne pardonne aucun geste approximatif. À cela s'ajoute, sur les modèles Apple, une **sérialisation poussée** et une **rentabilité souvent médiocre** : le prix des pièces d'origine, le temps passé et le taux de casse rendent certaines réparations économiquement discutables. Ce chapitre expose les procédures tout en gardant une ligne directrice honnête : **annoncer au client, avant d'ouvrir, le coût réel et le risque**.

## Comprendre l'architecture d'une montre connectée

### Apple Watch : ouverture par l'écran

Sur l'Apple Watch, de la Series 0 aux modèles récents (Series 4 à 9, SE, Ultra), l'ouverture se fait **par l'avant, en soulevant l'écran**. La dalle OLED (souvent flexible, LTPO sur les modèles récents) est collée au boîtier par un adhésif périphérique, et deux à trois **nappes très courtes** la relient à la carte : la nappe de l'écran (affichage), la nappe du **digitizer** (tactile / Force Touch sur les anciens modèles) et, sur certaines séries, une nappe distincte pour le tactile. Ces nappes sont la principale cause de casse : elles ne tolèrent qu'une ouverture de quelques millimètres avant d'être arrachées.

À l'intérieur, l'espace est saturé : la **batterie** occupe une bonne partie du volume, la carte mère est un module compact souvent enrobé de résine, le **moteur Taptic** (retour haptique) est logé sur un côté, et l'on trouve la bobine de charge inductive au dos. Le boîtier est en aluminium, acier ou titane selon la gamme.

### Le point de rentabilité

Une réparation d'Apple Watch doit être évaluée froidement :

- Le **prix des dalles** d'origine ou de bonne qualité compatible est élevé au regard de la valeur de l'appareil, surtout sur les modèles anciens.
- Le **taux de casse** en cours d'intervention (nappes arrachées, dalle fêlée) est plus élevé que sur smartphone.
- L'**étanchéité** doit être refaite avec un adhésif périphérique spécifique ; sans presse et sans soin, la montre perd sa résistance à l'eau, ce qui est problématique pour un objet porté en permanence.
- La **sérialisation** (batterie, parfois écran) affiche des avertissements et complique la validation.

⚠️ **À dire au client avant d'ouvrir** : sur beaucoup de Series anciennes, le coût d'une réparation d'écran de qualité approche, voire dépasse, la valeur de remplacement de la montre. La réparation se justifie surtout sur les modèles récents et haut de gamme (Ultra), ou pour une casse de vitre seule sur un appareil de valeur.

### Samsung Galaxy Watch : ouverture par l'arrière

Sur les **Galaxy Watch** (et la plupart des montres Wear OS / Tizen), l'architecture est inverse : on ouvre **par le dos**. Selon le modèle, le fond est soit **vissé** (petites vis Torx/Phillips sous un cache, cas des Gear S3 et de certaines Galaxy Watch classiques), soit **collé** (Galaxy Watch 4/5/6, dos en plastique ou céramique collé par un joint périphérique). Une fois le dos ouvert, on accède à la batterie et à la carte. L'écran, lui, reste collé à l'avant et son remplacement est aussi délicat que sur une Apple Watch.

### Montres et bracelets « classiques » connectés

Les traqueurs d'activité (bracelets type Mi Band, Fitbit) et les montres hybrides forment une catégorie à part : batteries minuscules soudées, boîtiers clipsés ou collés, verres parfois séparés de la dalle. Beaucoup ne sont **pas conçus pour être réparés** ; l'intervention est artisanale et rarement garantie.

## 13.1 — Ouverture d'une Apple Watch par l'écran

Procédure générique préalable à toute intervention interne (écran, batterie, Taptic). Elle exige plus de douceur qu'aucune autre ouverture de ce guide.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Élevé |
| **Temps estimé** | 20 à 40 minutes |
| **Outils nécessaires** | Plaque/coussin chauffant à température réglable, ventouse de très petit diamètre, médiators fins, spudger plastique, brucelles ESD, tournevis Tri-point Y000 et Pentalobe P2, loupe ou binoculaire |
| **Pièces de remplacement** | Adhésif d'écran périphérique précoupé (spécifique au modèle) pour la refermeture |
| **Risque principal** | Arrachement des nappes courtes de l'écran ; perforation de la batterie ; « cuisson » de la dalle OLED |

### Étapes

1. **Identifier le modèle exact** (Series et taille de boîtier, 40/41/44/45/49 mm). L'adhésif et l'écran sont propres à chaque référence. Le numéro de modèle figure au dos ou dans les réglages.
2. **Éteindre la montre.** Retirer le bracelet en actionnant les deux poussoirs de déverrouillage, pour dégager le poste de travail.
3. **Chauffer le pourtour de l'écran** au coussin chauffant réglé bas (environ **70 °C**), en insistant sur le contour où court l'adhésif, jamais au centre de la dalle. Chauffer progressivement, par passes.
4. **Poser une petite ventouse** près d'un bord (souvent le côté du bouton latéral) et exercer une traction **très légère** pour créer un interstice de moins d'un millimètre.
5. **Insérer un médiator fin** dans l'interstice et le glisser doucement le long d'un seul côté pour trancher l'adhésif. Ne jamais l'enfoncer : les nappes courent juste sous la dalle.
6. **Progresser côté par côté**, en réchauffant si l'adhésif résiste. Libérer trois côtés et laisser l'écran s'ouvrir « comme un livre » par le côté restant où se trouvent les nappes.
7. **Soulever l'écran de quelques millimètres seulement** et le maintenir avec une béquille ou à la main. Ne pas le rabattre en arrière.
8. **Repérer les caches/clips de nappes.** Selon le modèle, retirer un petit blindage maintenu par des vis **Tri-point Y000** couvrant les connecteurs.
9. **Débrancher d'abord le connecteur de batterie** si le modèle le permet à ce stade ; sinon débrancher les nappes d'écran (affichage puis digitizer) au spudger, en soulevant le connecteur bien à plat.
10. **Séparer l'écran** et le poser à l'abri, face protégée.
11. Procéder à la réparation visée.
12. **Remontage** : rebrancher les nappes dans l'ordre inverse, chaque connecteur bien clipsé à plat, replacer les blindages, **rebrancher la batterie en dernier**.
13. **Tester avant collage** (affichage, tactile sur toute la surface, retour haptique).
14. **Nettoyer** le contour à l'IPA 99 %, poser l'adhésif périphérique neuf, refermer, presser uniformément et laisser prendre.

![Figure 13.1 — Identification du modèle au dos du boîtier avant intervention](images/watch-13-1-modele.jpg)

![Figure 13.2 — Chauffe progressive du pourtour de l'écran au coussin chauffant](images/watch-13-2-chauffe.jpg)

![Figure 13.3 — Traction légère à la petite ventouse pour amorcer l'interstice](images/watch-13-3-ventouse.jpg)

![Figure 13.4 — Ouverture « en livre » de l'écran, nappes courtes visibles](images/watch-13-4-ouverture-livre.jpg)

![Figure 13.5 — Retrait du blindage Tri-point Y000 des connecteurs](images/watch-13-5-blindage-y000.jpg)

![Figure 13.6 — Débranchement des nappes d'affichage et de digitizer au spudger](images/watch-13-6-nappes.jpg)

**⚠️ Points critiques**

- Les nappes de l'écran sont **extrêmement courtes** : une ouverture de plus de quelques millimètres les arrache. Ne jamais rabattre l'écran complètement avant de les avoir débranchées.
- La dalle OLED est sensible à la chaleur : au-delà de la température nécessaire, des taches noires ou violettes apparaissent définitivement.
- La batterie remplit le boîtier : un médiator enfoncé trop profond la perce.

**❌ Erreurs courantes à éviter**

- Ouvrir à froid ou avec trop peu de chaleur : la dalle se fissure.
- Tirer sur l'écran d'un coup à la ventouse (nappes sectionnées).
- Confondre les vis Y000 internes et Pentalobe et forcer une empreinte inadaptée.
- Refermer avec l'adhésif d'origine décollé : l'étanchéité est perdue.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Écran noir ou lignes : nappe d'affichage mal clipsée. Rouvrir et réenclencher.
- Tactile absent ou erratique : nappe du digitizer mal remise ou pincée.
- Montre qui ne démarre pas : connecteur de batterie mal enclenché.

\newpage

## 13.2 — Remplacement de l'écran / vitre d'une Apple Watch

Deux cas se présentent : la **dalle entière** est morte (plus d'affichage, tactile HS, OLED tachée) et l'on remplace le bloc écran complet ; ou seule la **vitre supérieure** est fêlée, l'affichage restant intact — un « reverre » (séparation vitre/dalle et recollage d'un verre neuf) techniquement délicat, réservé à l'atelier équipé d'un laminateur.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Élevé |
| **Temps estimé** | 40 à 90 minutes (bloc complet) ; 1 à 2 h et plus (reverre) |
| **Outils nécessaires** | Kit d'ouverture (13.1), tournevis Y000, plaque chauffante, brucelles, IPA 99 %, adhésif périphérique neuf ; pour le reverre : machine de séparation à fil/chaud, laminateur, colle OCA/LOCA, chambre UV et débulleur |
| **Pièces de remplacement** | Bloc écran OLED complet compatible ou original « pull », ou verre + film OCA (reverre) ; adhésif d'écran |
| **Risque principal** | Casse de la dalle fine ; bulles/poussière sous le verre (reverre) ; perte d'étanchéité |

### Choix de l'approche

- **Bloc écran complet** : le plus fiable en atelier généraliste. On remplace l'ensemble dalle + vitre + digitizer d'un seul tenant. Coût de pièce élevé, mais résultat propre et rapide.
- **Reverre (LCD/OLED refurbishing)** : on conserve la dalle d'origine et l'on ne remplace que le verre cassé, en refaisant la couche de colle optique (OCA/LOCA). Économiquement intéressant sur les modèles chers, mais exige un équipement de laminage, une salle sans poussière et beaucoup d'expérience. **À déconseiller sans le matériel adéquat.**

⚠️ Sur certaines Series, l'écran est **sérialisé** : un bloc non appairé peut afficher un avertissement ou perdre des réglages. Informer le client.

### Étapes (bloc écran complet)

1. Ouvrir la montre selon la procédure 13.1 et débrancher la batterie.
2. Débrancher les nappes de l'ancien écran et retirer le bloc.
3. **Comparer** l'ancien et le nouveau bloc : mêmes connecteurs, même longueur de nappe, même joint. Vérifier la présence de tous les capteurs éventuels.
4. Nettoyer le lit de collage du boîtier à l'IPA 99 % (retirer tout résidu d'ancien adhésif).
5. Positionner le nouveau bloc, rebrancher les nappes d'affichage et de digitizer bien à plat.
6. Replacer le blindage Y000.
7. **Rebrancher la batterie en dernier.**
8. **Tester avant collage** : allumage, luminosité, uniformité de la dalle (pas de taches), tactile sur toute la surface, retour haptique, Force Touch le cas échéant.
9. Une fois validé, appliquer l'**adhésif périphérique neuf** sur le lit de collage.
10. Refermer l'écran, presser uniformément (presse ou pinces à mâchoires protégées) et laisser la colle prendre le temps recommandé.
11. **Contrôle final** d'étanchéité visuel : le joint doit être continu, sans pli ni manque.

![Figure 13.7 — Ancien bloc écran extrait, connecteurs identifiés](images/watch-13-7-bloc-ancien.jpg)

![Figure 13.8 — Comparaison de l'ancien et du nouveau bloc écran](images/watch-13-8-comparaison.jpg)

![Figure 13.9 — Nettoyage du lit de collage à l'alcool isopropylique 99 %](images/watch-13-9-nettoyage.jpg)

![Figure 13.10 — Test complet de l'écran avant collage définitif](images/watch-13-10-test.jpg)

![Figure 13.11 — Pose de l'adhésif périphérique neuf pour l'étanchéité](images/watch-13-11-adhesif.jpg)

![Figure 13.12 — Mise sous presse pour la prise de la colle](images/watch-13-12-presse.jpg)

**⚠️ Points critiques**

- Ne jamais coller avant d'avoir testé : rouvrir une montre fraîchement collée abîme le joint neuf.
- La dalle nue (reverre) casse au moindre appui ponctuel ; ne la poser que sur une surface plane et propre.
- L'adhésif doit être **spécifique au modèle** ; un joint mal découpé laisse une fuite.

**❌ Erreurs courantes à éviter**

- Se lancer dans un reverre sans laminateur ni chambre UV (bulles, poussière, décollement à terme).
- Réutiliser l'adhésif d'origine.
- Négliger le test du retour haptique et de la luminosité automatique.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Taches sur l'OLED : dalle endommagée par excès de chaleur ou bloc défectueux.
- Tactile partiel : nappe digitizer mal connectée ou bloc de mauvaise qualité.
- Avertissement d'écran non authentifié : bloc non appairé (sérialisation).
- Buée/infiltration ultérieure : joint mal posé, étanchéité non refaite.

\newpage

## 13.3 — Remplacement de la batterie d'une Apple Watch

La batterie d'Apple Watch est de très faible capacité mais reste une **cellule lithium** : les règles de sécurité du chapitre dédié s'appliquent intégralement. Elle est logée sous ou à côté de la carte, maintenue par de l'adhésif, et parfois recouverte d'un cache. Sur les modèles récents, la batterie est **sérialisée** : un message d'entretien peut apparaître avec une cellule non appairée.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Élevé |
| **Temps estimé** | 30 à 60 minutes |
| **Outils nécessaires** | Kit d'ouverture (13.1), tournevis Y000, spudger **plastique**, brucelles, IPA 99 %, languettes ou carte plastique fine, adhésif de remontage |
| **Pièces de remplacement** | Batterie compatible ou originale (avec puce d'appairage selon modèle), adhésif d'écran neuf |
| **Risque principal** | **Perforation / emballement thermique** d'une cellule très fine |

### Étapes

1. Ouvrir la montre (procédure 13.1) et débrancher les nappes d'écran pour dégager l'accès.
2. **Débrancher le connecteur de batterie en premier.** Selon le modèle, retirer un petit blindage Y000 au-dessus du connecteur.
3. Repérer la fixation de la cellule : adhésif seul ou languette d'extraction.
4. **Décoller la batterie sans outil métallique sous la cellule.** Verser quelques gouttes d'**IPA 99 %** sur les bords pour dissoudre la colle ; glisser une carte plastique fine à plat en ajoutant de l'IPA. Ne jamais faire levier au métal ni plier la cellule.
5. Extraire la batterie et la placer immédiatement dans un contenant ignifuge.
6. Nettoyer les résidus de colle à l'IPA.
7. Positionner la cellule neuve **sans la brancher**, vérifier l'orientation du connecteur et l'ajustement dans le logement (l'espace est compté).
8. Poser l'adhésif de maintien, rebrancher le connecteur de batterie, replacer le blindage.
9. Rebrancher les nappes d'écran.
10. **Tester** : allumage, charge sur le socle inductif, pourcentage cohérent, absence de message d'entretien anormal.
11. Refermer avec l'adhésif périphérique neuf, presser.

![Figure 13.13 — Connecteur de batterie débranché en premier](images/watch-13-13-connecteur-batterie.jpg)

![Figure 13.14 — Dissolution de la colle sous la cellule à l'IPA 99 %](images/watch-13-14-ipa.jpg)

![Figure 13.15 — Extraction à plat de la cellule sans outil métallique](images/watch-13-15-extraction.jpg)

![Figure 13.16 — Cellule usagée placée en contenant ignifuge](images/watch-13-16-securite.jpg)

![Figure 13.17 — Test de charge sur le socle inductif après remontage](images/watch-13-17-charge.jpg)

**⚠️ Points critiques**

- La cellule est **fine et souple** : la moindre pliure ou perforation peut déclencher un emballement thermique. Arrêter à tout échauffement ou dégagement d'odeur.
- Ne jamais réutiliser une cellule gonflée : le gonflement soulève d'ailleurs souvent l'écran, symptôme fréquent qui amène le client à l'atelier.

**❌ Erreurs courantes à éviter**

- Faire levier au spudger métallique sous la batterie.
- Forcer une cellule légèrement trop grande (mauvaise référence) dans le logement.
- Oublier d'avertir le client du message d'entretien lié à la sérialisation.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Ne démarre pas : connecteur mal enclenché ou cellule totalement à plat (charger 15 min sur le socle).
- Charge absente : bobine inductive déplacée ou connecteur de batterie mal remis.
- Message « entretien / batterie » : cellule non appairée.

\newpage

## 13.4 — Remplacement du moteur Taptic d'une Apple Watch

Le **moteur Taptic** assure le retour haptique (vibrations, tapotements). Sa panne se traduit par une absence de vibration, un bruit de cliquetis, ou un message d'erreur. C'est une réparation moins fréquente mais utile à connaître ; l'accès est bon une fois l'écran et parfois la batterie retirés.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Élevé |
| **Temps estimé** | 40 à 70 minutes |
| **Outils nécessaires** | Kit d'ouverture (13.1), tournevis Y000, spudger, brucelles, IPA 99 % |
| **Pièces de remplacement** | Moteur Taptic compatible/original spécifique au modèle, adhésif d'écran neuf |
| **Risque principal** | Batterie à déposer (risque lithium) ; nappe du Taptic déchirée |

### Étapes

1. Ouvrir la montre (13.1), débrancher les nappes d'écran puis la batterie.
2. Selon le modèle, retirer la batterie (procédure 13.3) pour accéder au Taptic logé sur un côté du boîtier.
3. Repérer et débrancher la **nappe du moteur Taptic** au spudger.
4. Retirer les vis Y000 ou décoller l'adhésif maintenant le moteur.
5. Extraire l'ancien moteur.
6. Nettoyer le logement à l'IPA.
7. Installer le moteur neuf, revisser/recoller, rebrancher sa nappe.
8. Remonter la batterie et les nappes d'écran.
9. **Tester** : déclencher une vibration (minuteur, notification, réglages haptiques) et vérifier l'intensité.
10. Refermer avec l'adhésif neuf.

![Figure 13.18 — Moteur Taptic repéré sur le flanc du boîtier](images/watch-13-18-taptic.jpg)

![Figure 13.19 — Débranchement de la nappe du moteur haptique](images/watch-13-19-nappe-taptic.jpg)

![Figure 13.20 — Extraction de l'ancien moteur Taptic](images/watch-13-20-extraction-taptic.jpg)

![Figure 13.21 — Test du retour haptique après remontage](images/watch-13-21-test-haptique.jpg)

**⚠️ Points critiques**

- L'accès au Taptic impose souvent de déposer la batterie : appliquer toutes les précautions lithium.
- La nappe du moteur est fine et courte ; la débrancher au connecteur, jamais en tirant sur le fil.

**❌ Erreurs courantes à éviter**

- Monter un moteur d'un autre modèle (dimensions et connecteur différents).
- Pincer la nappe du Taptic au remontage.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Pas de vibration : nappe mal enclenchée ou moteur défectueux.
- Vibration faible : moteur de qualité médiocre.

\newpage

## 13.5 — Remplacement de la batterie et de l'écran d'une Samsung Galaxy Watch

Sur Galaxy Watch, on ouvre **par le dos**. Le fond est vissé (modèles anciens, cache à dévisser en Torx/Phillips) ou collé (Galaxy Watch 4/5/6, dos collé par un joint périphérique). Une fois ouvert, on accède à la batterie et à la carte ; l'écran, collé à l'avant, se remplace en bloc AMOLED complet et reste l'opération la plus délicate.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Élevé |
| **Temps estimé** | 40 à 90 minutes |
| **Outils nécessaires** | Coussin chauffant, médiators, ventouse fine, tournevis Torx/Phillips de précision, spudger, brucelles, IPA 99 %, adhésif de remontage / joint |
| **Pièces de remplacement** | Batterie compatible/originale ; bloc écran AMOLED complet ; joint d'étanchéité |
| **Risque principal** | Perforation de la batterie ; casse de la dalle AMOLED ; perte d'étanchéité (indice de plongée) |

### Étapes — batterie (ouverture par le dos)

1. Identifier le modèle et le type de dos (vissé ou collé).
2. **Dos vissé** : retirer le cache et dévisser les petites vis Torx/Phillips repérées ; **dos collé** : chauffer le pourtour du dos au coussin (environ 70 °C), amorcer à la ventouse et trancher le joint au médiator tout autour.
3. Ouvrir le fond avec précaution : une **nappe** (capteur cardiaque, bobine de charge) peut relier le dos à la carte. La débrancher avant de séparer complètement.
4. **Débrancher le connecteur de batterie en premier.**
5. Décoller la cellule à l'IPA 99 % et à la carte plastique, sans outil métallique sous la batterie.
6. Placer la cellule usagée en contenant sûr, nettoyer les résidus.
7. Poser la batterie neuve, la rebrancher, replacer les nappes du dos.
8. **Tester** allumage et charge.
9. Refermer : revisser (dos vissé) ou poser un joint/adhésif neuf et presser (dos collé).

### Étapes — écran (bloc AMOLED)

1. Ouvrir par le dos, débrancher et retirer la batterie et, si nécessaire, la carte, pour accéder aux nappes d'écran.
2. Chauffer l'avant, séparer l'ancien bloc écran AMOLED collé au boîtier.
3. Débrancher les nappes d'écran, extraire l'ancien bloc.
4. Nettoyer le lit de collage.
5. Monter le bloc AMOLED neuf, rebrancher les nappes.
6. Remonter carte et batterie, **rebrancher la batterie en dernier**.
7. **Tester avant collage** : affichage, tactile, boutons rotatifs/lunette tournante selon modèle, capteur cardiaque, charge.
8. Refaire l'adhésif de l'écran et du dos, presser.

![Figure 13.22 — Dos de Galaxy Watch : repérage des vis ou du joint collé](images/watch-13-22-dos-samsung.jpg)

![Figure 13.23 — Débranchement de la nappe reliant le dos à la carte](images/watch-13-23-nappe-dos.jpg)

![Figure 13.24 — Connecteur de batterie débranché en premier](images/watch-13-24-batterie-samsung.jpg)

![Figure 13.25 — Extraction de la cellule à l'IPA 99 %](images/watch-13-25-extraction-samsung.jpg)

![Figure 13.26 — Bloc écran AMOLED neuf avant rebranchement](images/watch-13-26-ecran-samsung.jpg)

![Figure 13.27 — Pose du joint d'étanchéité neuf au remontage](images/watch-13-27-joint.jpg)

**⚠️ Points critiques**

- Le dos porte souvent le **capteur cardiaque** et la **bobine de charge** : leur nappe se débranche avant de séparer le fond.
- La dalle AMOLED est fragile hors châssis ; ne pas la poser face contre une surface dure.
- Les Galaxy Watch revendiquent une forte résistance à l'eau : sans joint neuf correctement posé, l'étanchéité est perdue.

**❌ Erreurs courantes à éviter**

- Arracher la nappe du capteur cardiaque en ouvrant le dos d'un coup.
- Réutiliser le joint d'origine.
- Chauffer excessivement et déformer un dos ou une lunette plastique.

**🔧 Dépannage — si ça ne marche pas après remontage**

- Pas de charge : bobine inductive du dos déplacée ou nappe non reconnectée.
- Capteur cardiaque HS : nappe du dos mal remise.
- Tactile ou lunette rotative inopérants : nappe d'écran mal clipsée.
- Infiltration ultérieure : joint mal posé.

\newpage

## 13.6 — Batterie et verre des montres et bracelets connectés divers

Les traqueurs et montres d'entrée de gamme (bracelets d'activité, montres hybrides, modèles à bas coût) ne sont, pour la plupart, **pas conçus pour la réparation**. L'intervention reste possible mais artisanale : boîtiers clipsés ou collés, cellules parfois **soudées** à la carte, verres minces à recoller. Il faut évaluer honnêtement la rentabilité avant de s'engager.

| Élément | Détail |
|---|---|
| **Niveau de difficulté** | Moyen à Élevé (très variable) |
| **Temps estimé** | 20 à 60 minutes |
| **Outils nécessaires** | Médiators, spudger, coussin chauffant, brucelles, fer à souder (cellules soudées), IPA 99 %, colle B-7000/T-7000, verre de remplacement |
| **Pièces de remplacement** | Cellule lithium équivalente (mêmes dimensions/tension), verre minéral ou plastique de remplacement, joint |
| **Risque principal** | Cellule soudée à manipuler ; casse du verre ; boîtier fragile clipsé |

### Batterie

1. Ouvrir le boîtier : repérer s'il est **clipsé** (glisser un médiator dans la fente périphérique et déclipser doucement) ou **collé** (chauffer et trancher au médiator).
2. Localiser la cellule. Si elle est **connectée** (fiche), la débrancher ; si elle est **soudée**, dessouder proprement les deux points (voir chapitre micro-soudure) après avoir noté la polarité.
3. Retirer la cellule usagée, la mettre en sécurité.
4. Sourcer une cellule **strictement équivalente** (mêmes dimensions, même tension nominale, même chimie). Une cellule trop grande ne rentre pas ; une tension incorrecte endommage l'appareil.
5. Rebrancher ou ressouder en respectant la polarité.
6. Tester la charge et l'autonomie.
7. Refermer (reclipser ou recoller au B-7000, joint neuf si étanchéité annoncée).

### Verre

1. Ouvrir et déposer la dalle si nécessaire.
2. Sur les modèles où le **verre est séparé de la dalle**, chauffer et séparer le verre cassé, nettoyer les résidus de colle.
3. Coller un verre neuf au B-7000/T-7000 en couche fine et régulière, ou avec un adhésif OCA si l'équipement le permet.
4. Presser sans bulle, laisser prendre.
5. Contrôler le tactile (si tactile capacitif traversant le verre) et l'absence de bulle.

![Figure 13.28 — Déclipsage du boîtier d'un bracelet connecté au médiator](images/watch-13-28-declipsage.jpg)

![Figure 13.29 — Cellule soudée : repérage de la polarité avant dessoudage](images/watch-13-29-cellule-soudee.jpg)

![Figure 13.30 — Collage d'un verre de remplacement au B-7000](images/watch-13-30-verre.jpg)

![Figure 13.31 — Test de charge et d'autonomie après remontage](images/watch-13-31-test.jpg)

**⚠️ Points critiques**

- Une cellule **soudée** impose de dessouder sans court-circuiter les bornes ; ne jamais chauffer longuement une cellule lithium.
- Respecter **exactement** la référence de cellule (dimensions et tension) : une substitution approximative est dangereuse.

**❌ Erreurs courantes à éviter**

- Forcer un boîtier clipsé et le fendre.
- Utiliser une cellule de tension différente.
- Recoller un verre avec trop de colle (bulles, débordement).

**🔧 Dépannage — si ça ne marche pas après remontage**

- N'allume pas : cellule mal soudée/branchée ou polarité inversée.
- Autonomie très faible : cellule de capacité inférieure ou de mauvaise qualité.
- Tactile capricieux après reverre : excès de colle ou bulle sous le verre.

\newpage

# Initiation à la micro-soudure (niveau atelier)

La micro-soudure est le **niveau supérieur** de la réparation : intervenir non plus sur des modules remplaçables (écran, batterie, connecteurs enfichables), mais directement sur la **carte électronique**, au niveau des composants soudés. C'est ce qui distingue le réparateur « remplaceur de pièces » du réparateur capable de sauver une carte mère, de réparer un port de charge soudé ou de traiter une corrosion.

Ce chapitre est **pédagogique et volontairement prudent**. Il ne prétend pas former un microsoudeur en quelques pages : cet apprentissage se compte en **mois de pratique**, sur du matériel dédié, à partir de **cartes hors service** (« cartes martyres ») avant de toucher au moindre appareil client. L'objectif ici est de poser un **vocabulaire**, de présenter le **matériel**, et de décrire quelques **techniques de base** dans un cadre honnête sur la difficulté.

⚠️ **Cadre d'honnêteté technique** : ne pratiquez jamais la micro-soudure sur l'appareil d'un client tant que vous ne maîtrisez pas le geste sur des cartes d'entraînement. Une carte mère détruite par un apprentissage prématuré est une perte sèche et un litige. Commencez par des cartes HS récupérées, entraînez-vous à retirer et reposer des composants passifs, puis progressez.

## Comprendre les composants d'une carte

Avant de souder, il faut savoir **ce que l'on soude**. Une carte de smartphone concentre des centaines de composants sur quelques centimètres carrés.

### Les composants passifs

- **Résistances** : limitent ou fixent un courant/une tension. En version montée en surface (CMS), ce sont de minuscules parallélépipèdes noirs, souvent de taille **0402** ou **0201** (fractions de millimètre), voire **01005**. Elles n'ont pas de polarité.
- **Condensateurs (capacités)** : stockent et filtrent l'énergie. Les condensateurs de découplage, très nombreux autour des puces, sont eux aussi minuscules. La plupart des condensateurs céramiques CMS n'ont pas de polarité ; les condensateurs au tantale, si.
- **Bobines / inductances** : filtrage et conversion d'énergie, souvent près des étages d'alimentation.
- **Diodes** : laissent passer le courant dans un seul sens (polarité à respecter). Un multimètre en mode diode aide à les tester.

Ces composants passifs, surtout les 0201, sont si petits qu'un souffle les emporte. Ce sont pourtant les **meilleurs sujets d'entraînement** : apprendre à en retirer et en reposer un, proprement, est la première étape.

### Les connecteurs et nappes

- **Connecteurs FPC** (Flexible Printed Circuit) : les prises « à clipser » où viennent se connecter les nappes d'écran, de batterie, de caméra. Ils sont soudés à la carte par de nombreuses pattes fines et par des « pieds » d'ancrage. Un connecteur **arraché** (nappe tirée trop fort) est une panne classique : il faut le ressouder, opération de micro-soudure fine.
- **Prises de charge** soudées (sur certains modèles) : port USB-C ou Lightning fixé directement à la carte.

### Les circuits intégrés (IC)

- **PMIC** (Power Management IC) : le gestionnaire d'alimentation, chef d'orchestre des tensions de la carte. Sa défaillance provoque des pannes de démarrage, de charge, de surconsommation.
- **IC de charge / Tristar-Tigris** (nom courant côté Apple) : gère la négociation de charge et la communication avec le câble. Une panne fréquente sur appareils exposés à des chargeurs de mauvaise qualité ou à l'humidité.
- **IC audio, IC tactile, amplificateurs, mémoires (NAND), CPU** : chacun a un rôle. Certains sont montés en **BGA** (Ball Grid Array) : les billes de soudure sont **sous** la puce, invisibles, ce qui rend leur remplacement (« reballing ») particulièrement exigeant et réservé aux techniciens confirmés.

⚠️ Le remplacement d'un IC en BGA (CPU, NAND, certains PMIC) est un **niveau avancé** : chaleur maîtrisée, stencils de rebillage, alignement au micron. Ne l'abordez qu'après une longue pratique sur composants passifs et connecteurs.

## Le matériel de micro-soudure

### La station à air chaud (rework)

Elle projette un flux d'air à température et débit réglables. C'est l'outil du **dessoudage/soudage de composants** : connecteurs, blindages, puces. Une buse trop chaude ou un débit trop fort **déplace les composants voisins** et **décolle les pastilles** (les plages de cuivre de la carte). Marques courantes : Quick, Atten, Baku. On l'accompagne de **ruban Kapton** pour protéger les zones adjacentes.

### Le fer à souder de précision (station)

Pour le travail fin (pattes de connecteur, fils, composants passifs), une station à panne fine et à température régulée est indispensable. Les stations **JBC** et **Quick** sont les références professionnelles pour leur réactivité thermique ; **Aixun**, **Hakko**, **Baku** offrent de bons rapports qualité/prix. Une panne fine (type « couteau » ou pointe) et une bonne régulation évitent de surchauffer la carte.

### Le flux

Le **flux** est le consommable clé de la micro-soudure : il nettoie les oxydes, améliore le **mouillage** (la soudure « accroche » proprement) et répartit la chaleur. Sans flux, une soudure fine est quasi impossible. Types courants : flux **no-clean** (NC-559 et équivalents), en seringue ou en pot. On l'applique généreusement mais on nettoie les résidus à l'IPA en fin d'opération.

### La tresse à dessouder et l'apport

- **Tresse à dessouder** : un ruban de cuivre tressé qui, chauffé, **absorbe la soudure** par capillarité. Indispensable pour nettoyer une pastille avant de reposer un composant.
- **Fil d'étain** de faible diamètre (avec âme de flux) pour l'apport.
- **Billes de soudure** (préformées) pour le rebillage des BGA (niveau avancé).

### Le préchauffeur

Une **plaque de préchauffage** amène toute la carte à une température de base (par exemple 100–150 °C) pour réduire le choc thermique et le temps d'exposition de la buse. Elle limite le **gauchissement** de la carte et protège les composants voisins lors du dessoudage d'une grosse puce.

### La vision : binoculaire

Un **microscope binoculaire stéréo** (grossissement typique 7× à 45×) est **indispensable** : à l'œil nu, on ne voit ni les pattes d'un connecteur FPC, ni l'orientation d'un 0201. Le relief de la vision stéréo permet de guider la panne avec précision. Une lampe annulaire complète l'éclairage.

### L'alimentation de laboratoire

L'**alimentation DC réglable** (tension et courant limités) sert à **diagnostiquer** : on alimente la carte hors batterie, on lit la **consommation**. Un court-circuit se traduit par une surconsommation immédiate ; une carte saine tire un courant caractéristique à l'allumage. Couplée à une caméra thermique ou à de l'alcool isopropylique (le point chaud fait s'évaporer l'IPA localement), elle aide à **localiser un composant en court-circuit**.

### Lecture de schémas et boardview (outils pro)

Le microsoudeur avancé s'appuie sur des **schémas électriques** et des **boardview** (plans interactifs de la carte reliant chaque composant à sa position et à son net). Des logiciels et bases de données professionnelles (par exemple les écosystèmes ZXW, WuXinJi et équivalents) fournissent ces plans pour de nombreux modèles. Ils permettent de suivre un signal, d'identifier un composant par sa désignation et de trouver la valeur attendue en un point de test. C'est un **investissement de niveau atelier** qui change la nature du diagnostic : on ne remplace plus au hasard, on **suit le circuit**.

⚠️ La lecture de schéma ne s'improvise pas : elle suppose de comprendre les étages d'alimentation, les lignes de données et la logique de démarrage d'une carte. C'est un apprentissage en soi.

## Techniques de base

Les techniques ci-dessous sont décrites à titre **pédagogique**. Entraînez-vous d'abord sur cartes HS.

### Retirer et reposer un condensateur / une résistance CMS

1. Sous binoculaire, **repérer** le composant et **photographier** son emplacement et son orientation.
2. Appliquer un peu de **flux** sur les deux pastilles.
3. Avec la panne fine ou une micro-buse d'air chaud à température modérée, chauffer les deux extrémités simultanément et **retirer** le composant à la brucelle dès que la soudure fond. Ne pas forcer à froid (on arrache la pastille).
4. **Nettoyer les pastilles** à la tresse à dessouder et au flux, jusqu'à obtenir deux plages propres et plates.
5. Déposer une fine quantité d'étain sur une pastille (« étamer »).
6. Positionner le composant neuf à la brucelle, chauffer pour souder la première extrémité, vérifier l'alignement, puis souder la seconde.
7. Nettoyer les résidus de flux à l'IPA et **inspecter** sous binoculaire (soudures brillantes, pas de pont).

### Refixer un connecteur FPC arraché

C'est l'une des réparations de micro-soudure les plus **utiles et fréquentes** (nappe tirée trop fort au démontage).

1. Sous binoculaire, examiner l'empreinte : combien de pattes, quels **pieds d'ancrage**, quelles pastilles éventuellement arrachées ?
2. Nettoyer l'empreinte à la tresse et au flux ; retirer l'ancienne soudure et les résidus.
3. **Aligner** le connecteur neuf **exactement** sur son empreinte (le décalage d'une seule patte fait tout rater). Le maintenir (brucelle, ruban).
4. Souder d'abord un **pied d'ancrage** en diagonale pour figer la position, vérifier l'alignement, puis souder l'autre.
5. Souder les **pattes de signal** : flux généreux, panne fine, soudure par balayage (« drag soldering ») ou patte par patte selon le pas.
6. Vérifier l'**absence de pont** entre pattes (à la loupe, éventuellement en continuité au multimètre).
7. Nettoyer, tester la fonction (rebrancher la nappe, contrôler l'écran/la caméra concernée).

Si des **pastilles sont arrachées** (le cuivre est parti avec la nappe), il faut « **jumper** » (pontage) : relier la patte à un point du circuit où le même net est accessible, avec un fil isolé très fin. C'est un niveau plus avancé.

### Nettoyer une corrosion et réaliser un pontage simple

1. Sous binoculaire, délimiter la zone corrodée (vert-de-gris, dépôts).
2. Brosser à la **brosse ESD** imbibée d'**IPA 99 %** ; pour les cas tenaces, passage au **bac à ultrasons** (carte propre, sans batterie ni haut-parleurs sensibles selon les cas).
3. Sécher, réinspecter : la corrosion peut avoir **rongé une piste**. Si une piste est coupée, on réalise un **pontage** : gratter délicatement le vernis de part et d'autre de la coupure pour exposer le cuivre, étamer, et souder un **fil isolé fin** reliant les deux extrémités du même net.
4. Reprotéger la zone (vernis épargne / colle UV) pour isoler le pontage.
5. Tester la fonction rétablie.

![Figure 14.1 — Poste de micro-soudure : binoculaire, station JBC, air chaud, préchauffeur](images/microsoudure-14-1-poste.jpg)

![Figure 14.2 — Composants CMS 0402/0201 comparés à une pointe de brucelle](images/microsoudure-14-2-cms.jpg)

![Figure 14.3 — Application de flux sur les pastilles avant dessoudage](images/microsoudure-14-3-flux.jpg)

![Figure 14.4 — Nettoyage d'une pastille à la tresse à dessouder](images/microsoudure-14-4-tresse.jpg)

![Figure 14.5 — Alignement d'un connecteur FPC neuf sous binoculaire](images/microsoudure-14-5-fpc-alignement.jpg)

![Figure 14.6 — Soudure des pattes de signal d'un connecteur FPC](images/microsoudure-14-6-fpc-soudure.jpg)

![Figure 14.7 — Diagnostic à l'alimentation de laboratoire : lecture de la consommation](images/microsoudure-14-7-alim-labo.jpg)

![Figure 14.8 — Pontage d'une piste coupée par la corrosion à l'aide d'un fil isolé fin](images/microsoudure-14-8-pontage.jpg)

**⚠️ Points critiques**

- La chaleur est votre principal danger : **trop longue ou trop forte**, elle décolle les composants voisins, gauchit la carte et détruit des IC. Préchauffez, protégez au Kapton, limitez le temps d'exposition.
- Sous binoculaire, un **pont de soudure** invisible à l'œil nu court-circuite deux pattes : inspectez systématiquement.
- Ne jamais chauffer une zone où se trouve une **batterie ou une cellule** en place.
- Un **alignement** de connecteur décalé d'une patte rend la réparation inopérante : vérifiez avant de souder les signaux.

**❌ Erreurs courantes à éviter**

- S'entraîner directement sur une carte client (irréversible en cas d'échec).
- Souder sans flux (soudures froides, ponts, pastilles arrachées).
- Régler l'air chaud trop fort et **envoyer voler** les composants passifs voisins.
- Laisser des résidus de flux corrosifs (nettoyer à l'IPA en fin d'opération).
- Négliger l'inspection finale sous grossissement.

## Sécurité en micro-soudure

- **Plomb et étain** : de nombreuses soudures d'atelier contiennent du plomb (soudure Pb). Ne mangez, ne buvez, ne portez pas les mains à la bouche pendant le travail ; **lavez-vous les mains** après chaque session. Tenez la soudure hors de portée des enfants.
- **Fumées de soudure et de flux** : les vapeurs de flux sont irritantes pour les voies respiratoires. Travaillez sous une **aspiration de fumées** (extracteur à filtre à charbon) et dans un local **ventilé**. Ne respirez jamais directement au-dessus du point de soudure.
- **Brûlures** : panne et buse d'air chaud atteignent plusieurs centaines de degrés et restent brûlantes après extinction. Reposez toujours le fer sur son support ; signalez une buse chaude.
- **IPA et solvants** : inflammables et volatils ; à tenir éloignés des sources de chaleur et à utiliser en atmosphère ventilée.
- **Yeux** : le microscope protège en partie, mais portez des lunettes lors des manipulations de fil et de flux sous pression.

⚠️ **Rappel de posture professionnelle** : la micro-soudure s'apprend lentement. Un technicien honnête connaît ses limites, oriente vers un confrère spécialisé les cas qui le dépassent (BGA, CPU, NAND, réparations de cartes complexes), et ne facture jamais un apprentissage raté au client.

\newpage

# Récupération de données (bases)

La donnée vaut souvent **plus que l'appareil**. Un client se console d'un téléphone cassé, rarement de la perte de dix ans de photos. La récupération de données est donc un enjeu à la fois technique, commercial et **juridique**. Ce chapitre pose les bases : la sauvegarde comme réflexe premier, quelques pistes en cas d'écran cassé ou de stockage défaillant, et surtout la connaissance de ses **limites** — savoir quand orienter vers un service spécialisé — ainsi que les obligations de **confidentialité** (RGPD).

## La sauvegarde avant réparation : le premier réflexe

La meilleure récupération de données est celle que l'on n'a pas eu à faire. **Avant toute intervention matérielle**, lorsque l'appareil démarre encore :

- **Proposer et, si possible, réaliser une sauvegarde** : cloud du constructeur (iCloud, Google, Samsung Cloud) ou copie vers un ordinateur (Finder/iTunes, Smart Switch, glisser-déposer des fichiers).
- **Vérifier** que la sauvegarde est **complète et récente** avant de commencer.
- **Tracer** : faire signer au client une mention indiquant qu'il a été informé du risque de perte de données et qu'une sauvegarde a été (ou non) réalisée.

⚠️ Beaucoup de pannes (dégât des eaux, carte mère) peuvent rendre l'appareil **non démarrable**. La fenêtre pour sauvegarder se referme vite : proposez-la **avant** d'ouvrir, pas après.

## Cas de l'écran cassé : accéder aux données malgré tout

Quand l'écran est mort mais que la carte fonctionne, plusieurs voies permettent d'extraire les données sans réparer entièrement l'appareil.

### Sortie vidéo et contrôle externe

- Certains appareils acceptent une **sortie vidéo** (via adaptateur USB-C/Lightning vers HDMI, ou DisplayPort sur USB-C) : on affiche l'écran sur un moniteur externe.
- Un **adaptateur OTG** permet de brancher une **souris** (et un clavier) sur le téléphone : avec l'affichage sur moniteur externe, on pilote l'appareil pour déclencher une sauvegarde, même écran tactile HS.
- Sur beaucoup d'Android, brancher en USB, **déverrouiller** (d'où l'importance d'avoir le code) et copier les fichiers depuis l'ordinateur suffit — encore faut-il pouvoir déverrouiller, ce que l'affichage externe + souris OTG rend possible.

### Remplacer temporairement l'écran

Souvent la solution la plus simple : monter un **écran de test** (même défectueux esthétiquement, mais fonctionnel) le temps de déverrouiller, lancer une sauvegarde, puis rendre les données. C'est plus fiable que les astuces logicielles.

### Test point et modes service

- Les cartes possèdent des **test points** (points de test) utilisés par les techniciens pour forcer certains modes (téléchargement/EDL sur Qualcomm, mode DFU/recovery sur d'autres). Ces modes servent surtout au **déblocage logiciel et au flashage**, parfois à l'extraction sur certains écosystèmes, mais leur usage est avancé et spécifique à chaque modèle.
- ⚠️ La manipulation des test points relève d'un savoir spécialisé et peut, mal employée, **aggraver** l'état de la carte. À réserver aux techniciens formés.

## Stockage défaillant

Quand c'est la **mémoire** elle-même qui est en cause, la difficulté change de nature.

- **Smartphones (mémoire NAND soudée)** : les données résident dans une puce **soudée** à la carte, souvent **chiffrée** et liée au processeur/à la sérialisation. On ne « lit » pas simplement la puce comme un disque. La récupération suppose des **équipements et compétences très spécialisés** (et se heurte au chiffrement matériel des appareils récents). Dans la majorité des cas, sans sauvegarde préalable, les chances sont faibles.
- **Cartes microSD / clés USB** : un contrôleur ou des cellules défaillantes ; des logiciels de récupération (lecture bas niveau, reconstruction de système de fichiers) donnent parfois des résultats sur support non chiffré.
- **Disques d'ordinateur (HDD/SSD)** : un HDD qui « clique » a une panne mécanique — **ne pas insister**, chaque mise sous tension aggrave. Un SSD peut tomber en panne brutalement (contrôleur). La récupération sur média endommagé relève du laboratoire spécialisé (salle blanche pour les HDD).

## Quand orienter vers un service spécialisé

Le réparateur généraliste doit **connaître ses limites** et le dire :

- Panne **mécanique** de HDD (bruit anormal) : salle blanche indispensable.
- **NAND chiffrée** d'un smartphone récent sans sauvegarde : très faible probabilité, équipement lourd.
- Données **critiques** (professionnelles, juridiques, sentimentales irremplaçables) : mieux vaut orienter d'emblée vers un laboratoire réputé que de tenter une manipulation risquée.
- Tout cas où **une tentative pourrait détruire définitivement** les données restantes.

⚠️ **Honnêteté commerciale** : ne promettez jamais une récupération. Annoncez une **probabilité**, un **cadre de coût**, et le fait qu'un service spécialisé — plus cher — offre de meilleures chances sur les cas lourds. Un client préfère une orientation honnête à une tentative ratée qui aura tout effacé.

## RGPD et confidentialité des données clients

Manipuler l'appareil d'un client, c'est accéder à sa vie privée (photos, messages, contacts, mots de passe, données bancaires). C'est une **responsabilité légale** encadrée, en Europe, par le **RGPD**.

- **Minimisation et finalité** : n'accédez qu'aux données **strictement nécessaires** à la réparation ou à la sauvegarde demandée. N'explorez jamais la galerie ou les messages par curiosité.
- **Confidentialité** : ne copiez, ne diffusez, ne conservez aucune donnée personnelle au-delà du besoin. Une sauvegarde temporaire réalisée pour le client doit lui être **remise** puis **effacée** de vos supports.
- **Sécurité** : protégez les postes et supports de l'atelier (accès, chiffrement des disques de travail). Un ordinateur d'atelier contenant des sauvegardes clients est une cible sensible.
- **Code de déverrouillage** : demandez-le uniquement quand il est nécessaire (tests, sauvegarde), notez-le sur la fiche d'intervention, et **détruisez** cette information à la restitution.
- **Traçabilité et consentement** : indiquez dans vos conditions et sur la fiche d'intake que la réparation peut nécessiter un accès aux données, recueillez le **consentement** du client, et informez-le du risque de perte.
- **Effacement en fin de vie** : si un appareil est mis au rebut ou une pièce (carte, stockage) remplacée et non rendue, assurez l'**effacement sécurisé** ou la destruction physique du support de données.

⚠️ **Une fuite de données clients** (photos privées diffusées, par exemple) est une faute grave, juridiquement et pour la réputation de l'atelier. La confidentialité n'est pas optionnelle : elle est au cœur du métier.

\newpage

# Entretien préventif & conseils clients

Le meilleur réparateur est aussi un **conseiller**. Prévenir la panne, prolonger la durée de vie d'un appareil et livrer un travail contrôlé fidélisent la clientèle bien plus qu'une réparation isolée. Ce chapitre rassemble les conseils d'entretien à transmettre aux clients et une **check-list de contrôle qualité en dix points** à appliquer systématiquement avant toute restitution.

## Nettoyage

- **Écran et coque** : chiffon microfibre non pelucheux, à peine humide (eau ou solution adaptée). Jamais de produit abrasif ni d'alcool sur les traitements oléophobes des écrans, qui s'usent avec le temps.
- **Ports de charge et haut-parleurs** : la **peluche compactée** dans un port Lightning/USB-C est une cause très fréquente de « ne charge plus ». La déloger délicatement avec un outil non métallique (cure-dent en bois, brosse antistatique), jamais une aiguille métallique qui abîme les contacts. Souffler à la poire, pas à la bouche (humidité).
- **Grilles de haut-parleur** : brosse douce, éventuellement pâte adhésive de nettoyage.
- **Conseil client** : un nettoyage régulier des ports évite la plupart des « fausses pannes » de charge et de son.

## Protection

- **Verre trempé** : il sacrifie sa surface pour épargner la vitre d'origine. Le poser sans bulle ni poussière (surface propre, alignement soigné). Bien moins coûteux à remplacer qu'un écran.
- **Coque / bumper** : absorbe les chocs, protège les angles (points de casse fréquents). Une coque à rebord surélevé protège aussi l'écran posé face vers le bas.
- **Conseil client** : verre trempé + coque = l'assurance la moins chère contre la casse la plus fréquente. À proposer systématiquement après une réparation d'écran.

## Gestion de la batterie

Transmettre les bons réflexes prolonge nettement la durée de vie des cellules lithium :

- **Éviter les extrêmes** : ne pas laisser tomber régulièrement à 0 %, ni maintenir en permanence à 100 % sous charge. Une plage **20–80 %** ménage la cellule.
- **Éviter la chaleur** : ne pas charger ni laisser l'appareil en plein soleil, dans une voiture surchauffée ou sous une couette pendant la charge. La chaleur est le principal facteur de vieillissement.
- **Utiliser un chargeur de qualité** : les chargeurs et câbles bas de gamme abîment les IC de charge et provoquent des pannes.
- **Activer** les options de **charge optimisée** proposées par le système (limitation intelligente).
- **Conseil client** : une batterie n'est pas éternelle (typiquement quelques centaines de cycles avant baisse notable) ; son remplacement est un entretien normal, pas une réparation subie.

## Étanchéité après réparation

Point d'honnêteté à répéter à chaque client :

- **Une réparation fait perdre l'étanchéité d'origine**, même avec un joint neuf posé soigneusement. On restaure une **résistance partielle**, jamais la certification d'usine.
- Après réparation, **déconseiller** l'exposition à l'eau (douche, piscine, plongée), même sur un appareil initialement certifié.
- Poser systématiquement un **adhésif/joint neuf** lors de la refermeture, presser correctement, et l'**indiquer au client**.

## Check-list de contrôle qualité en 10 points avant restitution

À dérouler **systématiquement** avant de rendre tout appareil. Un contrôle méthodique évite les retours et protège la réputation.

1. **Allumage et démarrage** complets, sans redémarrage intempestif.
2. **Écran** : affichage uniforme (pas de tache, ligne, pixel mort), luminosité, True Tone/colorimétrie le cas échéant.
3. **Tactile** : réactif sur **toute** la surface (tester les bords et les coins, zones souvent oubliées).
4. **Caméras** avant et arrière : netteté, mise au point, flash, absence de tache/poussière ; modules multiples (zoom) le cas échéant.
5. **Son** : écouteur interne (en appel), haut-parleur, micros (mémo vocal), retour haptique/vibration.
6. **Boutons et capteurs** : volume, marche/veille, bouton d'action ou lunette rotative, capteur de proximité (l'écran s'éteint en appel), luminosité automatique, empreinte/Face ID.
7. **Connectivité** : Wi-Fi, Bluetooth, données mobiles, réseau (SIM détectée, appel test), GPS si pertinent.
8. **Charge** : filaire (câble + port propre), sans fil/inductif le cas échéant, montée en pourcentage cohérente, absence d'échauffement anormal.
9. **Batterie et fonctions liées** : niveau de santé cohérent, absence de message d'entretien inattendu ; sur montre, charge sur socle et capteur cardiaque.
10. **Intégrité et propreté** : joint/adhésif neuf posé, aucun jeu ni craquement à la pression, écran affleurant, pas de vis oubliée, appareil nettoyé (traces de doigts, résidus de colle) et bien refermé.

![Figure 16.1 — Nettoyage d'un port de charge encrassé à l'outil non métallique](images/entretien-16-1-port.jpg)

![Figure 16.2 — Pose d'un verre trempé sans bulle sur surface propre](images/entretien-16-2-verre-trempe.jpg)

![Figure 16.3 — Réglage de charge optimisée pour préserver la batterie](images/entretien-16-3-charge-optimisee.jpg)

![Figure 16.4 — Déroulé de la check-list qualité en 10 points avant restitution](images/entretien-16-4-checklist.jpg)

⚠️ **Points critiques** : la check-list se fait **avant** le collage définitif pour tout ce qui touche à l'intérieur, et **de nouveau** appareil refermé pour les fonctions d'étanchéité et de propreté. Un test partiel est la première cause de retour client.

❌ **Erreurs courantes à éviter** : rendre un appareil sans avoir testé les bords du tactile, oublier le capteur de proximité, négliger le nettoyage final, ou promettre une étanchéité « comme neuve ».

\newpage

# Côté atelier : organisation, devis et relation client

Un atelier vit autant de sa **rigueur administrative** que de sa compétence technique. Une fiche d'intake claire, un devis honnête, une gestion maîtrisée des pièces et une relation client transparente évitent la majorité des litiges. Ce chapitre décrit l'organisation « côté comptoir ».

## La fiche d'intake (prise en charge)

Chaque appareil confié doit ouvrir une **fiche** signée, qui protège le client comme l'atelier. Elle consigne :

- **Identité et contact** du client, date de dépôt.
- **Appareil** : marque, modèle exact, numéro de série/IMEI, couleur, capacité.
- **État visuel constaté à l'arrivée** : rayures, chocs, verre déjà fêlé, coque déformée, traces d'humidité, signes d'ouverture antérieure. Le noter **précisément** (et idéalement le **photographier**) évite le litige « vous avez rayé mon dos ».
- **Panne déclarée** par le client et **symptômes constatés** par le technicien.
- **Code ou schéma de déverrouillage** fourni par le client, quand les tests l'exigent (à recueillir explicitement, à noter, et à **détruire** à la restitution — voir RGPD).
- **Sauvegarde** : réalisée ? proposée et refusée ? impossible (appareil non démarrable) ? Faire cocher et signer.
- **Accessoires laissés** (chargeur, coque, SIM, carte mémoire).
- **Accord sur le devis** et signature de la **décharge de responsabilité**.

⚠️ Sans état des lieux à l'entrée, tout dommage préexistant risque d'être imputé à l'atelier. La photo d'intake est la meilleure protection.

## La grille de devis

Un devis structuré rend la tarification lisible et défendable. Il distingue :

- **Diagnostic** : parfois offert, parfois facturé (déductible si réparation acceptée), surtout pour les pannes complexes (carte mère, dégât des eaux) qui demandent du temps.
- **Pièce** : type et qualité choisis (voir gestion des pièces ci-dessous), avec son coût.
- **Main-d'œuvre** : selon la difficulté et le temps (un écran d'iPhone récent, une micro-soudure et un dégât des eaux ne se facturent pas pareil).
- **Options** : verre trempé, coque, sauvegarde, réfection d'étanchéité.
- **Délai** estimé et **réserves** (aléas possibles : panne cachée révélée à l'ouverture).

Le devis doit être **validé avant intervention**, et **révisé** (nouvel accord) si l'ouverture révèle un problème supplémentaire.

### Fourchettes tarifaires indicatives

À adapter au marché local, au modèle et à la qualité de pièce ; données à titre d'ordre de grandeur.

| Prestation | Fourchette indicative | Remarques |
|---|---|---|
| Diagnostic simple | 0–20 € | Souvent déduit si réparation acceptée |
| Remplacement écran smartphone (compatible) | 40–120 € | Selon modèle et qualité de dalle |
| Remplacement écran smartphone (original/service) | 90–300 €+ | Haut de gamme récent |
| Remplacement batterie smartphone | 30–90 € | Pièce + main-d'œuvre |
| Remplacement écran ou batterie de montre connectée | 60–200 €+ | Rentabilité à évaluer, taux de casse élevé |
| Nettoyage/désoxydation dégât des eaux | 40–120 € | Sans garantie de résultat |
| Micro-soudure (connecteur, IC de charge) | 60–200 €+ | Selon complexité, non garanti systématiquement |
| Récupération de données (cas simple) | 30–150 € | Cas lourds orientés vers un spécialisé |

## La gestion des pièces : OEM, original pull, compatible

La **qualité de la pièce** conditionne le résultat et doit être **transparente** vis-à-vis du client. Trois grandes catégories :

- **Original neuf (OEM / service part)** : pièce d'origine constructeur, qualité maximale, conserve les fonctions (True Tone, sérialisation) ; coût le plus élevé, disponibilité parfois limitée.
- **Original « pull »** : pièce d'origine **récupérée** sur un appareil (déclassé, cassé ailleurs). Bon compromis qualité/prix, conserve souvent les fonctions ; état à vérifier (micro-rayures, cycles de batterie).
- **Compatible (aftermarket)** : pièce fabriquée par un tiers. Qualité **variable** (du correct au médiocre) : colorimétrie, sensibilité tactile, capacité réelle de batterie, avertissements logiciels possibles. Le moins cher.

⚠️ **Informer le client** du type de pièce monté et de ses implications (avertissement « pièce inconnue », True Tone absent, étanchéité, garantie). Le prix seul ne dit pas tout : une dalle compatible bas de gamme génère des retours.

## Garantie, décharge de responsabilité et traçabilité

### Garantie

- Définir une **durée de garantie** claire sur la réparation (par exemple 3 à 12 mois selon la prestation et la pièce) et son **périmètre** : elle couvre la **pièce et la pose**, pas une **nouvelle casse** ni un **nouveau dégât des eaux**.
- Certaines interventions à l'aléa élevé (dégât des eaux, micro-soudure) peuvent être **sans garantie** ou à garantie réduite : le **préciser d'emblée**.
- Un **indice d'ouverture** (marquage discret) permet de vérifier qu'un appareil rapporté n'a pas été rouvert ailleurs entre-temps.

### Décharge de responsabilité

Faire signer une décharge couvrant notamment : le **risque de perte de données**, le fait que l'**étanchéité d'origine est perdue**, la possibilité qu'une **panne cachée** se révèle à l'ouverture (un appareil déjà endommagé peut ne pas se rallumer), et l'**annulation de la garantie constructeur**.

### Traçabilité

- Un **numéro de dossier** unique par intervention, reliant fiche d'intake, devis, pièces posées et tests effectués.
- **Historique** : modèle, panne, pièce (fournisseur, référence, type), technicien, date, résultat des tests.
- Conservation des **pièces déposées** un temps défini (preuve, retour éventuel), puis recyclage conforme (batteries en filière agréée).
- Cette traçabilité sert la garantie, la relation client et l'amélioration continue (identifier un fournisseur de pièces défaillant grâce au taux de retour).

![Figure 17.1 — Fiche d'intake renseignée avec état visuel et photo à l'arrivée](images/atelier-17-1-intake.jpg)

![Figure 17.2 — Grille de devis détaillée présentée au client](images/atelier-17-2-devis.jpg)

![Figure 17.3 — Comparaison des types de pièces : original neuf, pull, compatible](images/atelier-17-3-pieces.jpg)

![Figure 17.4 — Registre de traçabilité des interventions et des pièces posées](images/atelier-17-4-tracabilite.jpg)

⚠️ **Points critiques** : ne jamais intervenir sans **devis validé** ni **décharge signée** ; ne jamais promettre une étanchéité restaurée à l'identique ; toujours réviser le devis si l'ouverture change la donne.

❌ **Erreurs courantes à éviter** : omettre l'état des lieux d'entrée, monter une pièce compatible sans en informer le client, ne pas tracer la référence de pièce (impossible ensuite d'identifier un lot défectueux), conserver le code de déverrouillage au-delà du nécessaire.

---

## Récapitulatif du fragment

Ce fragment additionnel comprend **cinq nouveaux chapitres** destinés à densifier le manuscrit principal, sans en modifier le contenu existant :

1. **Montres et bracelets connectés** — six réparations complètes (13.1 à 13.6 : ouverture Apple Watch, écran/vitre, batterie, moteur Taptic, Galaxy Watch batterie+écran, montres/bracelets divers), avec encadrés méta, étapes détaillées, figures 13.1 à 13.31, points critiques, erreurs courantes et dépannage.
2. **Initiation à la micro-soudure (niveau atelier)** — chapitre pédagogique et prudent : composants, matériel, lecture de schémas/boardview, techniques de base (CMS, connecteur FPC, corrosion/pontage), sécurité ; figures 14.1 à 14.8.
3. **Récupération de données (bases)** — sauvegarde préalable, écran cassé (sortie vidéo/OTG/test points), stockage défaillant, orientation vers un spécialisé, RGPD et confidentialité.
4. **Entretien préventif & conseils clients** — nettoyage, protection, gestion batterie, étanchéité, check-list qualité en 10 points ; figures 16.1 à 16.4.
5. **Côté atelier : organisation, devis et relation client** — fiche d'intake, grille de devis et tarifs indicatifs, gestion des pièces (OEM/pull/compatible), garantie, décharge, traçabilité ; figures 17.1 à 17.4.

Les numéros de figures (13 à 17) ont été choisis élevés pour éviter toute collision avec le manuscrit principal (chapitres 1 à 4).

<!-- === FIN EXTENSIONS === -->

# Annexes {.unnumbered}

## Annexe A — Glossaire des termes techniques {.unnumbered}

**Adhésif (bandes / joint)** — Colle double face ou joint périphérique maintenant écrans, coques et batteries. Se remplace à chaque ouverture pour restaurer maintien et étanchéité.

**AMOLED** — Variante d'écran OLED à matrice active, très répandue chez Samsung. Couleurs saturées, noirs profonds, dalle fine et fragile.

**Appairage (sérialisation)** — Association logicielle d'un composant (écran, batterie, caméra) à la carte mère. Un remplacement sans appairage peut désactiver des fonctions (True Tone) ou afficher un avertissement « pièce inconnue ».

**Bracket (blindage / cache)** — Petite plaque métallique vissée qui protège et maintient un connecteur (batterie, écran). À retirer avant de débrancher, à remettre au remontage (rôle de masse).

**Boot loop** — Cycle de redémarrages sans fin, d'origine logicielle (système corrompu) ou matérielle (alimentation, batterie instable).

**Caloduc (heatpipe)** — Tube de dissipation transférant la chaleur du processeur vers le radiateur du ventilateur.

**Digitizer** — Couche tactile d'un écran, qui détecte le toucher. Peut être distincte de la dalle d'affichage (LCD anciens) ou laminée avec elle.

**ESD (décharge électrostatique)** — Transfert brutal de charges statiques pouvant détruire ou fragiliser un composant. Se maîtrise avec bracelet et tapis antistatiques reliés à la terre.

**Emballement thermique (thermal runaway)** — Réaction en chaîne d'une batterie lithium endommagée : la chaleur produite entretient la réaction jusqu'à l'incendie/explosion.

**Face ID** — Reconnaissance faciale par projecteur de points (Apple). La nappe associée est appariée à la carte ; un dommage entraîne une perte définitive de la fonction.

**Flux** — Produit facilitant le mouillage de la soudure et le nettoyage des oxydes lors du soudage.

**iOpener** — Coussin chauffant (iFixit) que l'on réchauffe pour ramollir l'adhésif d'écran de manière homogène.

**IPA (alcool isopropylique) 99 %** — Solvant de référence pour dissoudre colle et flux, nettoyer la corrosion. La pureté 99 % évite les résidus d'eau.

**LCD** — Écran à cristaux liquides nécessitant un rétroéclairage. Moins de contraste que l'OLED, mais robuste et économique.

**Long screw damage** — Dommage causé par une vis trop longue placée au mauvais emplacement, perçant une piste de la carte mère.

**Nappe (flex / flexible)** — Circuit imprimé souple reliant deux éléments (écran, caméra, boutons). Fragile : ne jamais tirer dessus, débrancher par le connecteur.

**NVMe / SATA** — Interfaces de disque. NVMe (PCIe) est bien plus rapide que SATA. Un slot ne supporte pas forcément les deux : vérifier la compatibilité.

**OLED** — Écran à diodes électroluminescentes organiques : chaque pixel émet sa lumière (noirs parfaits, contraste élevé). Sensible à la chaleur excessive.

**Original « pull »** — Pièce d'origine récupérée sur un autre appareil (par opposition à une pièce compatible tierce ou à une pièce d'origine neuve).

**Pentalobe** — Empreinte de vis à cinq lobes utilisée par Apple pour les vis externes (iPhone, MacBook).

**PMIC** — Circuit intégré de gestion de l'alimentation d'une carte. Une défaillance provoque des problèmes de charge/démarrage.

**Rework (station à air chaud)** — Poste combinant température et débit d'air réglables pour dessouder connecteurs et composants.

**Service pack** — Ensemble de pièce d'origine livré assemblé (par ex. écran Samsung monté sur son châssis), simplifiant le remontage.

**SO-DIMM** — Format de barrette mémoire pour portables (plus court que le DIMM des ordinateurs de bureau). Doit correspondre au standard (DDR4, DDR5…).

**Spudger** — Outil à embouts non conducteurs (plastique) et/ou métal fin, servant à faire levier et à débrancher les nappes sans court-circuit ni casse.

**Throttling (thermique)** — Réduction automatique de la fréquence d'un processeur pour limiter sa température, au prix de ralentissements.

**True Tone** — Ajustement automatique de la température de couleur de l'écran (Apple), dépendant d'une puce appariée. Souvent perdu après remplacement d'écran non appairé.

**Ventouse** — Outil à succion pour soulever un écran ou une coque collée et créer un premier interstice.

**ZIF (connecteur)** — Connecteur à force d'insertion nulle, muni d'un loquet à relever pour libérer/insérer une nappe (claviers, certains modules).

\newpage

## Annexe B — Tableau récapitulatif « Quelle réparation pour quel symptôme » {.unnumbered}

| Symptôme observé | Causes probables (du plus fréquent au plus rare) | Intervention recommandée | Section |
|---|---|---|---|
| Écran cassé / fissuré, image visible | Chute | Remplacement de l'écran / vitre | 1.2, 1.3, 2.1 |
| Écran noir mais vibre/sonne | Dalle ou rétroéclairage HS, nappe déconnectée | Test/remplacement d'écran, réenclenchement | 1.7 |
| Ne s'allume pas du tout | Batterie vide/HS, connecteur, bouton power, défaut carte | Charger, tester/remplacer batterie, diagnostic carte | 1.4, 1.7 |
| Ne charge plus | Câble/chargeur, port encrassé, dock usé, batterie, circuit de charge | Nettoyer/tester câble, remplacer nappe de charge, batterie | 1.7 |
| Autonomie faible / s'éteint tôt | Batterie en fin de vie | Remplacement de batterie | 1.4, 2.2, 3.5 |
| Batterie / coque gonflée | Batterie dégradée (danger) | Remplacement immédiat, sécurité lithium | Sécurité, 1.4 |
| Boot loop (redémarrages) | Logiciel corrompu, batterie instable, défaut carte | Restauration logicielle, batterie, diagnostic carte | 1.7 |
| Surchauffe (smartphone) | Appli, batterie, chargeur non conforme, court-circuit | Diagnostic logiciel, batterie, mesure conso | 1.7 |
| Tactile fantôme / imprécis | Écran de mauvaise qualité/fissuré, masse mal remise, chargeur | Écran de qualité, rétablir la masse | 1.2, 1.7 |
| Micro/HP muet | Grille obstruée, module HS, codec (après eau) | Nettoyage, remplacement module, diagnostic carte | 1.7 |
| Photos floues/tachées | Poussière sous la fenêtre, module caméra HS | Nettoyage fenêtre, remplacement module | 1.5 |
| A pris l'eau | Corrosion, courts-circuits | Nettoyage IPA/ultrasons, batterie neuve | 1.6 |
| Face ID / Touch ID indisponible | Nappe appariée endommagée / non transférée | Préserver/transférer la pièce d'origine | 1.2, 2.1 |
| Portable lent au démarrage/chargement | Disque dur mécanique | Passage au SSD (+ clonage) | 3.2 |
| Portable qui « rame » en multitâche | RAM insuffisante | Ajout/remplacement de RAM SO-DIMM | 3.3 |
| Portable qui chauffe et ralentit | Ventilateurs colmatés, pâte thermique sèche | Nettoyage + repâte thermique | 3.6, 3.7 |
| Ventilateur bruyant | Roulement usé, poussière | Nettoyage / remplacement du ventilateur | 3.6 |
| Touches de clavier mortes | Nappe, liquide renversé, touche cassée | Remplacement du clavier | 3.4 |
| Écouteur : son faible d'un côté | Grille encrassée (cérumen) | Nettoyage et entretien | 4.1 |
| Écouteur : ne charge plus | Contacts sales/oxydés, batterie boîtier HS | Nettoyage contacts, remplacement du boîtier | 4.1, 4.3 |
| Écouteur : batterie morte | Cellule en fin de vie | Souvent non rentable : remplacement de l'unité | 4.2 |

\newpage

## Annexe C — Check-list universelle de réparation {.unnumbered}

**Avant l'intervention**

- [ ] Identifier le **modèle exact** et commander la **bonne pièce**.
- [ ] Informer le client (risques, garantie, données, étanchéité, sérialisation).
- [ ] **Sauvegarder les données** si l'appareil démarre encore.
- [ ] Préparer le poste : ESD, éclairage, tapis organiseur, sécurité incendie.

**Pendant l'intervention**

- [ ] **Photographier** chaque étape (vis, nappes, orientation).
- [ ] **Débrancher la batterie en premier.**
- [ ] Chauffer avec **mesure** ; utiliser des outils **plastique** au contact des cellules.
- [ ] Ranger les vis **par emplacement** (une étape, un compartiment).
- [ ] Ne jamais **percer/plier** une batterie ; sécuriser toute cellule suspecte.

**Après l'intervention**

- [ ] **Tester toutes les fonctions AVANT de recoller** (affichage, tactile, caméras, micros, HP, charge, capteurs, boutons, biométrie).
- [ ] Nettoyer les surfaces à l'**IPA 99 %**, poser l'**adhésif neuf**, presser.
- [ ] Vérifier l'absence de vis ou de pièce restante.
- [ ] Informer le client des **limites** (étanchéité non garantie, appairage, longévité après dégât des eaux).

\newpage

## Conclusion {.unnumbered}

La réparation d'appareils électroniques est un métier de **méthode** autant que de dextérité. Les gestes techniques — chauffer, décoller, débrancher, souder — ne prennent tout leur sens qu'encadrés par une discipline : sécurité lithium, protection ESD, gestion rigoureuse de la visserie, tests systématiques avant recollage, et honnêteté envers le client quand une réparation n'est pas raisonnable.

Ce guide a présenté les quatre grandes familles d'appareils — smartphones, tablettes, ordinateurs portables et écouteurs sans fil — avec, pour chacune, des procédures détaillées destinées à être complétées par vos propres photographies. Les emplacements de figures constituent un canevas : documentez vos interventions réelles, et cet ouvrage deviendra le manuel d'atelier de votre activité.

La technologie évolue : nouvelles colles, sérialisation accrue, miniaturisation. Les principes, eux, demeurent. Un technicien méthodique, prudent et honnête restera toujours utile.

*MK Phone — Édition 2026.*
