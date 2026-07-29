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
