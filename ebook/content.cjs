// Contenu de l'ebook — structuré en blocs, consommé par build.js
// Chaque bloc : {t:'h1'|'h2'|'h3'|'p'|'ul'|'ol'|'note'|'warn'|'tip'|'table'|'pagebreak'|'quote', ...}

module.exports = [

// =====================================================================
// INTRODUCTION
// =====================================================================
{t:'h1', text:"Introduction — Bienvenue dans le métier"},
{t:'p', text:"La réparation d'appareils électroniques est l'un des rares métiers qui combine passion technique, utilité écologique et véritable potentiel commercial. Chaque smartphone réparé, c'est un appareil qui ne finit pas à la poubelle, un client qui économise plusieurs centaines d'euros, et pour vous, une marge confortable sur une intervention souvent rapide."},
{t:'p', text:"Cet ebook a été conçu pour vous accompagner du niveau zéro absolu jusqu'à la maîtrise professionnelle. Vous n'avez besoin d'aucun prérequis : nous partons des notions d'électronique de base, du choix des outils, puis nous montons progressivement en compétence appareil par appareil — smartphones, tablettes, PC portables, smartwatchs et AirPods — pour finir par les techniques avancées (micro-soudure, réparation de carte mère) et le volet commercial (ouvrir et faire tourner une boutique rentable)."},
{t:'p', text:"Un principe guide tout ce livre : on ne remplace pas une pièce au hasard. On diagnostique, on comprend la cause, on choisit la réparation la plus économique pour le client, et on teste avant de rendre l'appareil. C'est cette méthode qui distingue un vrai technicien d'un simple « changeur de pièces »."},
{t:'note', title:"Comment lire cet ebook", text:"Les débutants ont intérêt à suivre l'ordre des chapitres : les fondamentaux (Partie 1) et la méthode de diagnostic (Partie 2) servent à TOUT le reste. Les techniciens déjà expérimentés peuvent aller directement à l'appareil ou à la technique qui les intéresse via le sommaire. Les encadrés « Attention » signalent les erreurs qui coûtent cher ; les encadrés « Astuce » partagent des raccourcis de pro."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 1 — LES FONDAMENTAUX
// =====================================================================
{t:'h1', text:"Partie 1 — Les fondamentaux"},

{t:'h2', text:"1. Le métier de réparateur : panorama"},
{t:'p', text:"Le réparateur d'appareils électroniques intervient sur des produits grand public de plus en plus complexes et de plus en plus fermés. Le métier se divise en trois grands niveaux d'intervention, qu'il faut bien distinguer car ils demandent des outils, des compétences et des investissements très différents."},
{t:'ol', items:[
"Niveau 1 — Remplacement de modules (« level 1 » / plug-and-play). On remplace une pièce complète : écran, batterie, connecteur de charge sur nappe, caméra. C'est 80 à 90 % de l'activité d'une boutique et cela ne demande pas de soudure. C'est par là que tout le monde commence.",
"Niveau 2 — Micro-soudure de composants. On répare la carte mère elle-même : remplacer un connecteur soudé, une puce de gestion de charge, refaire des pistes. Demande une station à air chaud, un fer de précision, un microscope. Marges élevées, concurrence plus faible.",
"Niveau 3 — Reballing et reprogrammation. Rebilling de processeurs/mémoires (BGA), reprogrammation d'EEPROM, récupération de données sur puce NAND. Très spécialisé, matériel coûteux, clientèle souvent inter-professionnelle (autres réparateurs qui vous sous-traitent leurs cas difficiles)."
]},
{t:'p', text:"Beaucoup de professionnels vivent très bien du seul niveau 1. Monter vers les niveaux 2 et 3 augmente votre marge et vous permet de récupérer les cas que vos concurrents refusent, mais ce n'est pas obligatoire pour démarrer. Cet ebook couvre les trois."},

{t:'h2', text:"2. Notions d'électronique essentielles"},
{t:'p', text:"Vous n'avez pas besoin d'un diplôme d'ingénieur, mais quelques notions rendent le diagnostic infiniment plus rapide. Comprendre ce qui suit vous évitera de « changer des pièces au hasard »."},

{t:'h3', text:"Tension, courant, résistance (la loi d'Ohm)"},
{t:'p', text:"Trois grandeurs de base gouvernent tout circuit :"},
{t:'ul', items:[
"La tension (Volt, V) : la « pression » électrique. Une batterie de téléphone tourne autour de 3,7–4,4 V ; un PC portable est alimenté en 19–20 V par son chargeur ; les rails internes d'une carte mère travaillent en 0,6 V à 5 V.",
"Le courant (Ampère, A) : le « débit » d'électrons. Un port USB-C peut délivrer 3 A ou plus. Un court-circuit provoque un appel de courant anormalement élevé — c'est un symptôme clé.",
"La résistance (Ohm, Ω) : l'opposition au passage du courant. La mesurer permet de détecter un court-circuit (résistance quasi nulle là où elle ne devrait pas l'être) ou une coupure (résistance infinie)."
]},
{t:'p', text:"La loi d'Ohm relie les trois : U = R × I (tension = résistance × courant). En pratique, retenez surtout : une résistance qui tombe à zéro entre une ligne d'alimentation et la masse = court-circuit à chercher ; une continuité qui n'existe plus = piste ou composant coupé."},

{t:'h3', text:"Composants que vous rencontrerez"},
{t:'table', header:["Composant","Rôle","Panne typique"], rows:[
["Résistance","Limite le courant","Coupe (circuit ouvert), rare en court-circuit"],
["Condensateur (cap)","Stocke/filtre l'énergie, découple le bruit","Court-circuit (fréquent après choc/liquide)"],
["Bobine / inductance (coil)","Stocke l'énergie dans un champ magnétique, régule","Coupe, ou déplacée par un choc"],
["Diode","Laisse passer le courant dans un seul sens","Court-circuit ou circuit ouvert"],
["Transistor / MOSFET","Interrupteur/amplificateur électronique","Court-circuit (souvent en cause dans un rail HS)"],
["CI / puce (IC)","Fonction complexe (charge, audio, alim…)","Défaillance interne, soudure fissurée"],
["Fusible","Protège le circuit","Coupe volontairement — se remplace"],
["Connecteur (FPC)","Relie deux éléments par nappe","Broches pliées, oxydation, clip cassé"]
]},

{t:'h3', text:"Circuit ouvert et court-circuit : les deux ennemis"},
{t:'p', text:"90 % des pannes matérielles se ramènent à l'une de ces deux situations. Un circuit ouvert (open) : le courant ne passe plus (piste coupée, soudure fissurée, connecteur débranché). Un court-circuit (short) : le courant passe là où il ne devrait pas, souvent vers la masse, ce qui fait chauffer un composant, décharge la batterie très vite, ou empêche l'allumage. Savoir mesurer l'un et l'autre au multimètre est LA compétence de diagnostic fondamentale (voir chapitre outils et Partie 8)."},

{t:'h3', text:"Masse, rails d'alimentation et séquence de démarrage"},
{t:'p', text:"Sur une carte mère, la « masse » (ground, GND) est la référence 0 V commune. À partir de la batterie ou du chargeur, des régulateurs créent plusieurs « rails » de tension (par ex. 1,8 V, 3,3 V…). Quand vous appuyez sur « marche », l'appareil exécute une séquence : alimentation principale → rails secondaires → horloge → processeur → chargement du logiciel de démarrage. Si la séquence se bloque à une étape, l'appareil ne démarre pas. Comprendre cette chaîne aide énormément au diagnostic des cartes mères."},

{t:'h2', text:"3. L'atelier : outils et équipement"},
{t:'p', text:"On peut commencer avec un kit à 50 € et progresser vers un atelier professionnel. Voici les paliers logiques d'investissement."},

{t:'h3', text:"Kit de démarrage (niveau 1 — sans soudure)"},
{t:'ul', items:[
"Tournevis de précision : jeu avec embouts Pentalobe (Apple), Torx (T2–T6), cruciforme Phillips (PH000/00), Tri-point Y000. Indispensable et non négociable.",
"Médiators / picks et spudgers (spatules) en nylon et en métal pour désassembler sans marquer.",
"Ventouses (une petite, une forte) pour soulever un écran.",
"Outils d'ouverture fins (opening picks) et une carte plastique rigide.",
"Pincette de précision (droite et coudée), antimagnétique de préférence.",
"Tapis de travail magnétique (pour trier les vis par position) + éclairage puissant.",
"Bracelet antistatique (ESD) relié à la masse.",
"Sèche-cheveux ou, mieux, plaque chauffante / iOpener pour ramollir les colles.",
"Alcool isopropylique (IPA 99 %) et brosse antistatique pour le nettoyage."
]},

{t:'h3', text:"Palier intermédiaire"},
{t:'ul', items:[
"Multimètre numérique correct (mesure tension continue, continuité avec bip, résistance, mode diode). L'outil de diagnostic n°1.",
"Alimentation de laboratoire réglable (DC power supply) : alimente une carte à tension contrôlée et affiche le courant consommé — révèle instantanément un court-circuit.",
"Station à air chaud (hot air / rework) à température et débit réglables : pour décoller connecteurs et petits composants.",
"Fer à souder à température réglable (station), étain, flux, tresse à dessouder, pompe.",
"Séparateur d'écran chauffant (LCD separator) si vous refaites des vitres.",
"Loupe binoculaire ou microscope de table."
]},

{t:'h3', text:"Palier professionnel (micro-soudure)"},
{t:'ul', items:[
"Microscope trinoculaire (0,7–4,5×, avec caméra) — non négociable pour le niveau 2/3.",
"Station à air chaud de qualité + préchauffeur (preheater) pour les cartes multicouches.",
"Fer de micro-soudure de précision (pointes très fines), flux de qualité, alliage bas point de fusion pour dessouder.",
"Caméra thermique ou détection par « freeze spray » + alimentation pour localiser un court-circuit qui chauffe.",
"Programmateurs (lecteurs EEPROM, NAND) selon la spécialité.",
"Pochoirs (stencils) et billes de reballing pour le retravail des puces BGA."
]},
{t:'tip', title:"Astuce", text:"N'achetez pas tout d'un coup. Achetez l'outil quand la réparation qui le nécessite se présente et qu'elle est rentable. Un microscope à 300 € s'amortit en quelques micro-soudures facturées 80–150 € pièce."},

{t:'h2', text:"4. Sécurité : la partie qu'on ne saute pas"},
{t:'warn', title:"Attention — batteries lithium", text:"Une batterie lithium-ion percée, pliée ou en court-circuit peut prendre feu ou exploser. Ne JAMAIS percer une batterie avec un outil métallique, ne pas plier, ne pas forcer sur une batterie gonflée. Une batterie gonflée (swollen) est sous pression : manipulez-la avec précaution, débranchez-la avant tout, et stockez les batteries retirées dans un contenant ignifuge, loin des matériaux inflammables. Gardez un seau de sable ou un extincteur adapté (classe D / lithium) à portée."},
{t:'ul', items:[
"Décharge électrostatique (ESD) : votre corps accumule de l'électricité statique qui peut détruire une puce sans que vous ne sentiez rien. Portez un bracelet antistatique relié à la masse et travaillez sur un tapis ESD, surtout pour tout ce qui touche à la carte mère.",
"Débrancher la batterie EN PREMIER : à chaque ouverture d'appareil, déconnectez le connecteur de batterie avant de toucher à autre chose. Cela évite les courts-circuits accidentels qui grillent des composants.",
"Produits chimiques : l'alcool isopropylique est inflammable ; travaillez dans un endroit ventilé, loin de l'air chaud allumé. Les fumées de flux et de soudure contiennent des substances irritantes — utilisez un aspirateur de fumées ou ventilez.",
"Chaleur : une station à air chaud atteint 300–450 °C. Ne dirigez jamais le flux vers vous, la batterie ou des plastiques non concernés. Laissez refroidir les pièces avant de les manipuler.",
"Données clients : vous accédez à des appareils pleins de données personnelles. Adoptez une politique stricte de confidentialité (voir Partie 10)."
]},

{t:'pagebreak'},

// =====================================================================
// PARTIE 2 — MÉTHODE DE DIAGNOSTIC
// =====================================================================
{t:'h1', text:"Partie 2 — La méthode de diagnostic universelle"},
{t:'p', text:"Le diagnostic est ce qui sépare le professionnel de l'amateur. Un amateur change l'écran ; un pro confirme d'abord que c'est bien l'écran le problème. Voici une méthode en 7 étapes valable pour n'importe quel appareil."},
{t:'ol', items:[
"Recueillir l'historique (l'anamnèse). Interrogez le client : que s'est-il passé ? Chute ? Contact avec un liquide ? Tentative de réparation précédente ? Depuis quand ? La panne est-elle permanente ou intermittente ? 50 % du diagnostic vient de cette conversation.",
"Inspection visuelle. Avant d'ouvrir : vitre fissurée, châssis tordu, port de charge encrassé, traces de liquide, vis manquantes (signe d'ouverture antérieure). Après ouverture : corrosion, composants brûlés, connecteurs débranchés, batterie gonflée, indicateurs de contact liquide (LCI) rouges.",
"Reproduire la panne. Constatez le symptôme vous-même. « Ne charge pas » peut vouloir dire dix choses ; observez précisément ce qui se passe (LED ? vibration ? logo ? écran noir mais son présent ?).",
"Formuler des hypothèses, de la plus probable/moins chère à la plus rare/coûteuse. Après une chute, l'écran est plus probable qu'une panne de carte mère.",
"Tester méthodiquement. Isolez les variables : testez avec un autre chargeur, un autre écran connu bon, une batterie de test. Ne changez qu'UNE chose à la fois.",
"Réparer la cause, pas le symptôme. Un port de charge oxydé qui décharge la batterie : nettoyer/remplacer le port, pas seulement la batterie.",
"Tester intégralement avant restitution. Après réparation, vérifiez TOUTES les fonctions (voir checklist en annexe), pas seulement celle réparée — un écran remplacé peut avoir désactivé le capteur de proximité ou le True Tone."
]},
{t:'note', title:"Le réflexe « chargeur, câble, prise »", text:"Devant tout problème de charge, éliminez d'abord l'externe et le gratuit : testez un autre câble, un autre chargeur, une autre prise, et nettoyez le port (voir chapitre dédié) avant de conclure à une panne interne. Une quantité surprenante de « pannes » se règle avec un cure-dent et de l'IPA."},
{t:'tip', title:"Astuce — la règle du devis honnête", text:"Diagnostiquez avant de chiffrer. Annoncer 90 € pour un écran puis découvrir une carte mère noyée détruit la confiance. Prenez le temps d'ouvrir et d'inspecter (facturez éventuellement le diagnostic), puis donnez un devis ferme."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 3 — SMARTPHONES
// =====================================================================
{t:'h1', text:"Partie 3 — Réparation des smartphones"},

{t:'h2', text:"5. Anatomie d'un smartphone"},
{t:'p', text:"Malgré la diversité des marques, un smartphone moderne partage la même architecture. Les connaître vous permet d'aborder n'importe quel modèle."},
{t:'ul', items:[
"Bloc écran : dalle d'affichage (LCD ou OLED/AMOLED) + couche tactile (digitizer) + vitre, souvent laminés en un seul module. Sur la plupart des modèles récents, on remplace le bloc complet.",
"Batterie lithium-ion/polymère, collée au châssis par des bandes adhésives (parfois à languettes extractibles).",
"Carte mère (logic board) : processeur, mémoire, puces de gestion d'alimentation et de charge, modem.",
"Nappes (FPC) et connecteurs : chaque module (caméra, boutons, capteurs) se relie à la carte par une nappe et un connecteur à clipser.",
"Connecteur de charge : USB-C, Lightning ou micro-USB, souvent monté sur une nappe indépendante (facile) ou soudé à la carte (micro-soudure).",
"Caméras avant/arrière, haut-parleur d'oreille (earpiece), haut-parleur principal, micros, moteur de vibration (taptic), capteurs (proximité, luminosité, accéléromètre), lecteur d'empreinte / Face ID.",
"Châssis / mid-frame et face arrière (verre ou métal)."
]},

{t:'h2', text:"6. Ouvrir un smartphone sans le casser"},
{t:'p', text:"Il existe deux grandes philosophies d'ouverture selon le modèle :"},
{t:'ul', items:[
"Ouverture par l'écran (la plupart des iPhone, beaucoup de Samsung anciens) : on chauffe le pourtour de l'écran pour ramollir la colle, on insère une ventouse + picks, on soulève délicatement en faisant attention aux nappes situées d'un côté.",
"Ouverture par la face arrière (Samsung Galaxy récents, nombreux Android) : on chauffe et on décolle le dos en verre, puis on retire une plaque interne avant d'accéder à la batterie et aux nappes."
]},
{t:'ol', items:[
"Éteindre l'appareil. Retirer le tiroir SIM.",
"Chauffer uniformément le bord à décoller (plaque chauffante ~80–90 °C, ou air chaud à distance et basse température) pour ramollir la colle sans cuire l'écran/la batterie.",
"Appliquer la ventouse juste au-dessus du bouton home / d'un coin, tirer doucement pour créer un interstice, insérer un pick.",
"Glisser le pick tout autour SANS l'enfoncer trop profond (les nappes et parfois la batterie sont juste dessous). Repérer le côté charnière où se trouvent les nappes : ouvrir comme un livre, pas d'un coup.",
"Débrancher IMMÉDIATEMENT le connecteur de batterie une fois la plaque de blindage retirée, avant toute autre manipulation."
]},
{t:'warn', title:"Attention", text:"Sur les modèles étanches (IP67/68), l'adhésif d'origine assure l'étanchéité. Après toute ouverture, remplacez le joint/adhésif périphérique si vous voulez conserver une résistance à l'eau — et informez le client que l'étanchéité d'usine n'est jamais garantie à 100 % après ouverture."},

{t:'h2', text:"7. Remplacement d'écran"},
{t:'p', text:"C'est la réparation la plus demandée. Points clés :"},
{t:'ol', items:[
"Confirmer le diagnostic : vitre fissurée mais affichage/tactile OK = parfois seule la vitre est touchée (mais sur bloc laminé, on change le module). Affichage avec lignes, taches, zones mortes = dalle à changer. Tactile qui ne répond plus = digitizer.",
"Choisir la pièce : original (OEM/pulled), copie haute qualité (« hard OLED », « soft OLED », « incell » pour LCD). Expliquez au client la différence de prix et de rendu (luminosité, couleurs, tactile).",
"Ouvrir, débrancher la batterie, puis déconnecter les nappes de l'écran (affichage, tactile, capteurs, parfois Face ID / capteur d'empreinte).",
"Transférer les composants réutilisables sur le nouvel écran si nécessaire (earpiece, capteurs, plaque de blindage, support Face ID). ATTENTION : sur certains iPhone, déplacer le capteur d'origine est indispensable pour conserver Face ID / True Tone.",
"Tester l'écran AVANT de recoller : rebrancher, allumer, vérifier affichage complet (test de couleurs plein écran), tactile sur toute la surface, capteur de proximité en appel, luminosité auto.",
"Recoller avec adhésif neuf, nettoyer, remonter, retester."
]},
{t:'note', title:"True Tone, Face ID et messages « pièce inconnue »", text:"Sur iPhone récents, remplacer l'écran par une pièce non appairée peut désactiver le True Tone, afficher un avertissement « écran non authentique » et parfois casser la luminosité auto. Des programmateurs (ex. copie de l'EEPROM de l'écran d'origine vers le nouveau) permettent de restaurer ces fonctions. Renseignez-vous modèle par modèle et soyez transparent avec le client."},

{t:'h2', text:"8. Remplacement de batterie"},
{t:'p', text:"Une batterie se change quand sa capacité chute (autonomie faible, extinctions soudaines, gonflement, « santé » < 80 %)."},
{t:'ol', items:[
"Ouvrir, débrancher le connecteur de batterie.",
"Retirer l'adhésif : idéalement en tirant lentement les languettes d'adhésif extractible bien à plat. Si elles cassent, ramollir la colle (chaleur douce + quelques gouttes d'IPA sous la batterie) et décoller avec une carte plastique. NE JAMAIS forcer avec un outil métallique sous la batterie.",
"Poser la batterie neuve, adhésif neuf, rebrancher, tester la charge et le pourcentage.",
"Sur iPhone récents : un message « batterie non authentique » peut apparaître si la puce d'origine n'est pas transférée/appairée — même logique que pour l'écran."
]},
{t:'warn', title:"Attention batterie gonflée", text:"Ne percez jamais, ne pliez jamais. Déchargez l'appareil si possible, travaillez lentement, gardez le contenant ignifuge à côté. Une batterie qui a chauffé/gonflé va directement au recyclage batteries, jamais à la poubelle."},

{t:'h2', text:"9. Connecteur de charge et problèmes de charge"},
{t:'p', text:"Démarche de diagnostic « ne charge pas / charge mal » :"},
{t:'ol', items:[
"Externe d'abord : autre câble, autre chargeur, autre prise.",
"Nettoyer le port : la cause n°1 est le port bourré de peluches/poussière. Sous lumière et loupe, retirez délicatement le bouchon de peluche avec un cure-dent/outil non métallique. Spectaculaire de fiabilité.",
"Inspecter le port : broches pliées, corrodées, port arraché.",
"Si le connecteur est sur nappe : remplacer la nappe de charge (niveau 1, simple).",
"Si le connecteur est soudé à la carte mère : micro-soudure (niveau 2).",
"Si le port est sain mais ça ne charge toujours pas : suspecter la puce/gestion de charge, une batterie HS, ou un problème logiciel."
]},

{t:'h2', text:"10. Caméras, boutons, haut-parleurs, micros, capteurs"},
{t:'ul', items:[
"Caméra floue/tachée : parfois seule la vitre de protection de la caméra est rayée (se remplace) ; sinon module caméra à changer. Points noirs fixes = poussière ou capteur.",
"Boutons (volume, marche) : souvent sur nappe latérale ; testez avant/après. Un bouton marche défaillant peut aussi être un problème de nappe ou de connecteur.",
"Haut-parleur / earpiece : pas de son en appel mais son en haut-parleur = earpiece ou capteur. Grésillement = membrane HS ou débris. Nettoyer la grille avant de conclure.",
"Micros : testez avec un enregistrement vocal et un appel main-libre. Il y a plusieurs micros (bas, haut, arrière).",
"Capteur de proximité : écran qui reste allumé contre l'oreille = capteur mal remonté ou nappe.",
"Vibreur / Taptic : absence de vibration = moteur ou connecteur."
]},

{t:'h2', text:"11. Dégâts des eaux et désoxydation"},
{t:'p', text:"Un appareil tombé dans l'eau est une urgence : plus on attend, plus la corrosion progresse."},
{t:'ol', items:[
"NE PAS charger ni allumer un appareil mouillé. Le courant + l'eau = corrosion accélérée et courts-circuits.",
"Ouvrir au plus vite, débrancher la batterie.",
"Démonter la carte mère et la nettoyer aux ultrasons (bac à ultrasons avec solution adaptée) ou, à défaut, à l'IPA 99 % et brosse antistatique, en insistant sous les blindages (shields) où l'eau stagne.",
"Sécher complètement (air comprimé, chaleur douce).",
"Inspecter au microscope : corrosion verte/blanche, pistes rongées, composants à remplacer.",
"Remonter et tester fonction par fonction — les dégâts des eaux donnent des pannes multiples et parfois différées."
]},
{t:'warn', title:"Attention au mythe du riz", text:"Le riz n'assèche pas l'intérieur et n'empêche pas la corrosion déjà en cours. La bonne réponse est l'ouverture et le nettoyage professionnel rapide. Prévenez le client : un appareil noyé peut sembler remarcher puis tomber en panne des semaines plus tard."},

{t:'h2', text:"12. Face arrière, châssis et problèmes logiciels"},
{t:'ul', items:[
"Face arrière en verre cassée : sur beaucoup de modèles récents, elle est collée et parfois solidaire du châssis — le remplacement peut demander de la chaleur, du laser (en boutique spécialisée) ou le remplacement du châssis complet avec transfert de tous les composants. Évaluez si c'est rentable pour le client.",
"Châssis tordu : un cadre plié empêche l'écran de coller correctement ; parfois un reconditionnement du châssis (housing) est nécessaire.",
"Problèmes logiciels : boot loop, appareil bloqué sur logo, après une mise à jour ratée. Souvent réparable par restauration/flash (voir Partie 9) — mais attention à la sauvegarde des données et aux verrouillages (voir aspects légaux)."
]},

{t:'pagebreak'},

// =====================================================================
// PARTIE 4 — TABLETTES
// =====================================================================
{t:'h1', text:"Partie 4 — Tablettes (iPad, Galaxy Tab, etc.)"},
{t:'p', text:"Une tablette, c'est un grand smartphone… avec des contraintes spécifiques qui la rendent souvent plus délicate à réparer."},
{t:'ul', items:[
"Grande surface de verre + colle forte : l'écran d'un iPad est très collé au châssis. Il faut chauffer longuement et uniformément, découper l'adhésif tout autour avec précaution, et le verre casse facilement à la dépose. Prévoyez ce risque dans le devis.",
"Vitre et dalle souvent séparées sur iPad : sur certains modèles, on peut remplacer seulement la vitre tactile (moins cher) si la dalle (LCD) est intacte. Vérifiez le modèle.",
"Boutons Home avec Touch ID : sur iPad anciens, le bouton home d'origine doit être conservé pour garder Touch ID.",
"Grandes batteries fortement collées : plus de surface d'adhésif, plus de patience. Toujours débrancher d'abord, jamais de métal sous la batterie.",
"Charnières logicielles / claviers (iPad Pro, Surface) et connecteurs propriétaires selon les modèles.",
"Réparation de la nappe / connecteur de charge, caméras, haut-parleurs : même logique que smartphone."
]},
{t:'tip', title:"Astuce", text:"Sur tablette, le budget « casse » (verre neuf, adhésif, temps) est plus élevé que sur téléphone. Chiffrez la main-d'œuvre en conséquence et prévenez le client du risque de casse du verre à l'ouverture, surtout sur les modèles laminés."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 5 — PC PORTABLES
// =====================================================================
{t:'h1', text:"Partie 5 — Réparation des PC portables"},
{t:'p', text:"Le PC portable ajoute une dimension logicielle (système d'exploitation, pilotes) à la réparation matérielle. Bonne nouvelle : beaucoup de pièces sont plus accessibles que sur smartphone."},

{t:'h2', text:"13. Anatomie et ouverture"},
{t:'ul', items:[
"Capot inférieur retiré par vis (attention aux vis de longueurs différentes et aux clips) ; sur MacBook, vis Pentalobe puis nappes internes délicates.",
"Composants principaux : carte mère, RAM (parfois soudée), stockage (SSD SATA/NVMe, parfois soudé), batterie, ventilateur(s) + caloducs, dalle + nappe eDP + webcam, clavier, trackpad, haut-parleurs, carte Wi-Fi, connecteur de charge (DC jack ou USB-C).",
"Débrancher la batterie interne dès l'ouverture (déconnecter le connecteur sur la carte mère)."
]},

{t:'h2', text:"14. Diagnostic PC portable"},
{t:'table', header:["Symptôme","Pistes à explorer"], rows:[
["N'allume pas du tout","Chargeur/adaptateur, DC jack, batterie, court-circuit carte mère, bouton power, RAM mal enfichée"],
["S'allume, écran noir","Rétroéclairage/dalle, nappe eDP, GPU, RAM, tester sur écran externe (HDMI)"],
["Démarre puis s'éteint","Surchauffe (pâte thermique, ventilateur encrassé), batterie, alimentation"],
["Lent / plante","Disque (HDD mourant → SSD), RAM, malware, surchauffe, OS corrompu"],
["Pas de charge","Adaptateur, DC jack/USB-C, batterie, puce de charge"],
["Clavier/touches HS","Nappe clavier, liquide renversé, clavier à remplacer"],
["Wi-Fi HS","Carte/antenne Wi-Fi, pilote"]
]},
{t:'tip', title:"Astuce diagnostic", text:"Le test « écran externe » (brancher un moniteur en HDMI/USB-C) départage instantanément un problème de dalle/nappe d'un problème de carte graphique : si l'image sort sur l'externe mais pas sur la dalle, le problème est l'affichage interne (dalle, nappe, rétroéclairage)."},

{t:'h2', text:"15. Interventions matérielles courantes"},
{t:'ul', items:[
"Remplacement de dalle : identifier la référence exacte (taille, résolution, connecteur, avec/sans tactile, fixations). Démonter le cadre (bezel) ou décoller selon le modèle, transférer la nappe si besoin.",
"Charnières cassées : fréquent ; parfois casse des supports en plastique du capot (à recoller/renforcer) ou charnières à remplacer.",
"Clavier / trackpad : remplacement de la nappe ou du bloc complet. Sur MacBook « butterfly », clavier intégré à la coque = intervention lourde.",
"Batterie : gonflement fréquent sur portables anciens (peut déformer le trackpad). Manipulation lithium prudente.",
"DC jack / connecteur de charge : nettoyage, resoudure ou remplacement.",
"Surchauffe : démonter, dépoussiérer le radiateur et le ventilateur, remplacer la pâte thermique (et les pads thermiques si besoin). Réparation à forte valeur ajoutée et facile."
]},

{t:'h2', text:"16. Améliorations (upgrades) rentables"},
{t:'ul', items:[
"Passage HDD → SSD : le plus grand gain de performance ressenti sur une vieille machine. Cloner ou réinstaller le système.",
"Ajout / remplacement de RAM (si non soudée) : vérifier type (DDR3/4/5), fréquence, capacité max de la carte mère.",
"Nettoyage complet + pâte thermique neuve : redonne des années de vie."
]},

{t:'h2', text:"17. Logiciel : système, pilotes, données"},
{t:'ol', items:[
"Sauvegarder les données AVANT toute réinstallation. C'est sacré. Un client ne pardonnera jamais la perte de ses photos.",
"Réinstallation propre de Windows/macOS/Linux quand l'OS est corrompu ou trop lent.",
"Pilotes : réinstaller les pilotes (chipset, GPU, Wi-Fi) après une installation propre.",
"Suppression de malwares, réparation du démarrage (bootloader), réparation de profil utilisateur.",
"Récupération de données sur disque défaillant (voir Partie 9)."
]},
{t:'warn', title:"Attention aux mots de passe / verrouillages", text:"Ne contournez jamais un verrouillage sans preuve de propriété. Réinitialiser un mot de passe Windows local est un service courant ; contourner un compte lié ou un antivol sur un appareil dont la propriété n'est pas prouvée peut être illégal. Exigez une preuve d'achat en cas de doute (voir Partie 10)."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 6 — SMARTWATCHS
// =====================================================================
{t:'h1', text:"Partie 6 — Smartwatchs (Apple Watch et montres connectées)"},
{t:'p', text:"Les montres connectées sont les appareils les plus miniaturisés et les plus délicats à réparer. Étanchéité forte, écran fragile, batterie minuscule, nappes ultrafines."},
{t:'ul', items:[
"Ouverture : l'écran de l'Apple Watch est collé (adhésif étanche) et relié par des nappes très courtes et fragiles (affichage, tactile/Force Touch). On chauffe doucement, on soulève par un coin avec une lame fine, TRÈS prudemment — les nappes cassent au moindre excès d'angle.",
"Remplacement d'écran : pièce coûteuse et fragile ; le tactile/Force Touch peut nécessiter recalibrage. Vérifiez la compatibilité exacte (taille 38/40/41/42/44/45/49 mm, génération).",
"Batterie : minuscule, collée ; mêmes précautions lithium. Le gonflement de batterie peut décoller l'écran (symptôme fréquent).",
"Étanchéité : après ouverture, remplacer l'adhésif périphérique ; prévenir le client que l'étanchéité d'origine n'est plus garantie.",
"Autres montres (Samsung Galaxy Watch, Garmin, etc.) : verre parfois remplaçable séparément, boutons/couronnes, capteurs cardio. Pièces plus rares selon la marque."
]},
{t:'warn', title:"Réalisme économique", text:"Sur beaucoup de smartwatchs, le coût de l'écran d'origine approche le prix d'une montre reconditionnée. Faites toujours un devis avant : parfois la réparation n'est pas rentable pour le client, et le dire honnêtement construit votre réputation."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 7 — AIRPODS & AUDIO TWS
// =====================================================================
{t:'h1', text:"Partie 7 — AirPods et écouteurs sans fil"},
{t:'p', text:"Les AirPods (et écouteurs « true wireless » en général) sont conçus pour être scellés : ils sont assemblés à la colle et aux ultrasons, sans vis. Cela limite fortement les réparations possibles — il faut le savoir et le dire au client."},

{t:'h2', text:"18. Ce qui est réparable… et ce qui ne l'est pas"},
{t:'ul', items:[
"Réparable/utile : nettoyage en profondeur (cérumen dans les grilles → son étouffé/faible), remplacement des embouts en silicone (AirPods Pro), remplacement de l'étui de charge seul, appairage/reset logiciel, remplacement d'un écouteur unitaire (souvent via SAV constructeur plutôt qu'en réparation ouverte).",
"Difficile : remplacement de la batterie interne — le boîtier est collé/soudé aux ultrasons ; l'ouverture est destructive et le rassemblage propre est très difficile. Des kits existent mais le taux de réussite et la durabilité sont limités.",
"Souvent non rentable : au vu du prix des pièces et du temps, remplacer une batterie d'AirPod coûte souvent presque autant qu'un reconditionné."
]},

{t:'h2', text:"19. Interventions réalistes en boutique"},
{t:'ol', items:[
"Nettoyage : cause n°1 de « un écouteur moins fort que l'autre ». Retirer le cérumen des grilles avec une brosse douce, un cure-dent en bois, un peu d'IPA et de la pâte adhésive (blu-tack) pour extraire les résidus. Spectaculaire et très rentable (rapide).",
"Problème de charge de l'étui : nettoyer les contacts, tester un autre câble ; parfois l'étui (batterie) est mort et se remplace séparément.",
"Déséquilibre / coupures : reset (voir procédure du constructeur), vérifier l'appairage, mise à jour firmware via le téléphone.",
"Embouts Pro : remplacer les embouts silicone (test d'ajustement) résout beaucoup de plaintes sur le son/la réduction de bruit.",
"Gestion des attentes : soyez clair — sur les vrais AirPods, la batterie interne n'est pas conçue pour être remplacée proprement ; orientez vers le SAV constructeur ou le reconditionné quand c'est plus pertinent."
]},
{t:'tip', title:"Astuce service", text:"Proposez un « service de nettoyage écouteurs » à prix fixe et rapide. C'est un produit d'appel : peu de matériel, quelques minutes, client ravi, et ça amène du passage en boutique."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 8 — MICRO-SOUDURE / CARTE MÈRE
// =====================================================================
{t:'h1', text:"Partie 8 — Micro-soudure et réparation de carte mère (niveau avancé)"},
{t:'p', text:"C'est le niveau qui décuple votre valeur : réparer ce que les autres jettent. Il demande de l'équipement, de la pratique et de la patience, mais offre les meilleures marges et vous rend indépendant des pièces « module »."},

{t:'h2', text:"20. Le poste de micro-soudure"},
{t:'ul', items:[
"Microscope trinoculaire (grossissement 0,7–4,5×) avec bon éclairage annulaire.",
"Fer à souder de précision (pointes fines, température réglée ~300–350 °C selon l'alliage) + station à air chaud + préchauffeur.",
"Consommables : flux de qualité (le flux est votre meilleur ami), étain fin, alliage bas point de fusion pour dessouder, tresse, alcool pour nettoyer les résidus.",
"Instruments : multimètre de précision, alimentation de laboratoire (contrôle du courant = détection de court-circuit), éventuellement caméra thermique / freeze spray, oscilloscope pour les cas pointus.",
"Schémas et « boardview » : les schémas électriques et plans de carte (quand disponibles) transforment le diagnostic — vous suivez le rail défaillant jusqu'au composant fautif."
]},

{t:'h2', text:"21. Méthode de diagnostic carte mère"},
{t:'ol', items:[
"Inspection au microscope : composant brûlé, corrosion, soudure fissurée, connecteur arraché, traces de réparation précédente.",
"Alimenter en tension contrôlée via l'alim de labo et lire le courant : 0 mA = circuit ouvert/pas de démarrage ; courant très élevé et stable = court-circuit franc.",
"Localiser un court-circuit : injecter une basse tension sur le rail en court et repérer le composant qui chauffe (doigt, caméra thermique, ou alcool qui s'évapore vite / freeze spray qui fond à un endroit).",
"Mesurer en mode diode les rails clés par rapport à la masse et comparer aux valeurs de référence (carte identique ou schéma).",
"Suivre la séquence de démarrage : présence des tensions principales, de l'horloge, des rails processeur. La première étape absente indique la zone à investiguer.",
"Isoler et remplacer le composant fautif (condensateur en court, puce de charge, filtre…), puis retester le courant et la fonction."
]},

{t:'h2', text:"22. Gestes techniques fondamentaux"},
{t:'ul', items:[
"Dessouder/ressouder un connecteur FPC (charge, écran) : le geste de micro-soudure le plus demandé et le plus rentable. Air chaud + flux, retrait propre, nettoyage des pads, pose du connecteur neuf aligné, resoudure.",
"Remplacer un composant passif (cap/résistance) en court-circuit : identifier, retirer, nettoyer, poser le neuf.",
"Refaire une piste coupée (jumper) : pontage au fil fin (« jumper wire ») quand une piste est rongée par la corrosion ou coupée par un choc.",
"Retravailler une puce BGA (reball/reflow) : niveau expert — dépose à l'air chaud, nettoyage des pads, repose des billes via pochoir, repose alignée. Réservé aux cas où le composant est spécifiquement en cause.",
"Récupération de données via transfert de puce NAND/eMMC : très spécialisé (voir Partie 9)."
]},
{t:'note', title:"Progresser sans tout casser", text:"Entraînez-vous d'abord sur des cartes mortes (« practice boards ») avant de toucher aux appareils clients. Maîtrisez le contrôle de la chaleur : trop chaud, vous décollez les composants voisins et boursouflez la carte. Le flux et la propreté font 50 % du résultat."},

{t:'pagebreak'},

// =====================================================================
// PARTIE 9 — LOGICIEL, FLASH, DONNÉES
// =====================================================================
{t:'h1', text:"Partie 9 — Logiciel, flashage et récupération de données"},

{t:'h2', text:"23. Restauration et flashage"},
{t:'ul', items:[
"Smartphones : restauration via l'outil constructeur (mode récupération/DFU sur iPhone ; Odin/outils de flash sur Samsung ; fastboot sur Android). Sert à sortir d'un boot loop, d'un échec de mise à jour, d'un système corrompu.",
"PC : réinstallation propre de l'OS, réparation du démarrage, restauration d'usine.",
"Attention aux données : un flashage efface souvent tout. Toujours proposer/tenter une sauvegarde avant, et prévenir explicitement le client."
]},

{t:'h2', text:"24. Verrouillages : la ligne rouge légale"},
{t:'warn', title:"Cadre légal — à respecter absolument", text:"Le contournement des verrous antivol (comme le verrouillage d'activation lié au compte du propriétaire, ou un verrouillage professionnel/MDM) est illégal sans preuve de propriété, et facilite le recel de vol. Politique professionnelle recommandée : exiger une preuve d'achat, ne jamais accepter un appareil manifestement volé, et refuser tout contournement de verrou de compte. Réinitialiser un mot de passe local sur un appareil dont la propriété est prouvée est différent d'un contournement d'antivol lié à un compte — sachez distinguer les deux et, en cas de doute, refusez."},

{t:'h2', text:"25. Récupération de données"},
{t:'ul', items:[
"Disques/SSD PC : la donnée est souvent récupérable même quand la machine ne démarre plus. Brancher le disque en externe, cloner, extraire. Pour un disque défaillant mécaniquement, orienter vers un labo spécialisé (salle blanche).",
"Smartphones : récupération plus difficile (chiffrement, stockage soudé). En cas de carte mère morte mais stockage intact, des experts transfèrent la puce NAND sur une carte donneuse — service haut de gamme.",
"Règle d'or : ne travaillez jamais sur le support d'origine, travaillez sur une copie/image. Une manipulation de trop peut rendre la donnée irrécupérable."
]},

{t:'pagebreak'},

// =====================================================================
// PARTIE 10 — LE BUSINESS
// =====================================================================
{t:'h1', text:"Partie 10 — Le business de la réparation"},
{t:'p', text:"Savoir réparer ne suffit pas à gagner sa vie : il faut vendre, tarifer juste, gérer les pièces, fidéliser et se protéger juridiquement. Cette partie transforme la compétence technique en activité rentable."},

{t:'h2', text:"26. Démarrer : statut, local, investissement"},
{t:'ul', items:[
"Modèle de départ : beaucoup commencent en micro-entreprise à domicile ou en dépôt-réparation (sans local en vitrine), puis ouvrent une boutique quand le flux le justifie. On peut aussi démarrer en ligne / mobile (réparation à domicile).",
"Statut & obligations : déclarez votre activité, tenez une comptabilité, appliquez les règles fiscales locales, et vérifiez la réglementation sur les déchets électroniques (DEEE) et le recyclage des batteries.",
"Investissement initial : outils (voir Partie 1), un stock minimal de pièces des modèles les plus courants, un point de vente/communication. On peut démarrer modestement et réinvestir les marges."
]},

{t:'h2', text:"27. Tarification et rentabilité"},
{t:'p', text:"La marge se fait sur la pièce ET sur la main-d'œuvre. Structure de prix typique d'une intervention :"},
{t:'table', header:["Poste","Principe"], rows:[
["Coût pièce","Prix d'achat de la pièce (négocié auprès du grossiste)"],
["Main-d'œuvre","Votre temps × taux horaire cible (selon complexité/risque)"],
["Marge / frais","Loyer, outillage, garantie, aléas, bénéfice"],
["Prix client","Coût pièce + main-d'œuvre + marge, aligné sur le marché local"]
]},
{t:'ul', items:[
"Facturez le diagnostic (déductible si réparation acceptée) pour valoriser votre temps et filtrer les curieux.",
"Proposez des niveaux de pièces (original vs compatible) avec des prix et garanties différents : le client choisit en connaissance de cause.",
"Micro-soudure = tarif premium : peu de concurrents, forte valeur ajoutée.",
"Surveillez votre marge réelle : une réparation « ratée » (écran cassé au montage, pièce défectueuse) mange le bénéfice de plusieurs autres. Le soin paie."
]},

{t:'h2', text:"28. Fournisseurs et gestion des pièces"},
{t:'ul', items:[
"Sourcing : identifiez des grossistes fiables (qualité constante des écrans/batteries). Testez la qualité avant d'acheter en volume.",
"Qualité des pièces : les écrans « compatibles » varient énormément. Une pièce bas de gamme qui revient en panne détruit votre réputation et votre marge (garantie). Privilégiez la fiabilité.",
"Stock : gardez en stock les pièces des modèles les plus réparés de votre zone (top iPhone/Samsung, batteries courantes). Commandez le reste à la demande pour ne pas immobiliser de trésorerie.",
"Batteries : achetez frais (les batteries vieillissent en stock), stockez-les en sécurité, recyclez les anciennes via une filière agréée."
]},

{t:'h2', text:"29. Relation client, garantie, protection juridique"},
{t:'ul', items:[
"Devis écrit et accord avant travaux : évite tout litige sur le prix.",
"Décharge et sauvegarde : faites signer une décharge indiquant que la réparation peut, dans de rares cas (appareil déjà endommagé, oxydé), aggraver un défaut existant, et recommandez toujours une sauvegarde préalable des données.",
"Garantie : offrez une garantie claire sur la pièce et la main-d'œuvre (par ex. quelques mois), en excluant la casse et les dégâts des eaux ultérieurs. Une politique de garantie nette rassure et vous protège.",
"Confidentialité des données : politique stricte — vous n'accédez aux données que si nécessaire à la réparation, jamais de copie personnelle, effacement sécurisé des appareils de test. Affichez cet engagement, c'est un argument commercial fort.",
"Traçabilité anti-vol : notez l'identité du client et exigez une preuve de propriété en cas de doute ; refusez les appareils suspects."
]},

{t:'h2', text:"30. Marketing et croissance"},
{t:'ul', items:[
"Présence locale : fiche d'établissement en ligne (avis clients !), signalétique, bouche-à-oreille. Les avis positifs sont le principal moteur d'acquisition en réparation.",
"Spécialisation visible : afficher « micro-soudure / récupération de données / dégâts des eaux » attire les cas rentables que les autres refusent.",
"Services annexes : vente d'accessoires (coques, protections d'écran, chargeurs), reprise/rachat d'appareils, reconditionné, pose de films protecteurs — marges faciles et flux de clientèle.",
"Fidélisation : rapidité, transparence, garantie tenue. Un client bien réparé revient et vous recommande — c'est un métier de confiance et de réputation.",
"B2B : proposez vos services de sous-traitance à d'autres boutiques (micro-soudure) et aux entreprises (parc informatique, flottes mobiles)."
]},

{t:'pagebreak'},

// =====================================================================
// ANNEXES
// =====================================================================
{t:'h1', text:"Annexes"},

{t:'h2', text:"Annexe A — Checklist de test avant restitution"},
{t:'p', text:"À vérifier systématiquement après toute réparation, quel que soit l'appareil concerné :"},
{t:'ul', items:[
"Smartphone/tablette : affichage complet (test couleurs plein écran, pas de pixels morts/lignes), tactile sur toute la surface, luminosité auto, True Tone (iPhone), caméras avant/arrière + flash, autofocus, earpiece en appel, haut-parleur, tous les micros, Wi-Fi, Bluetooth, réseau/appel, GPS, capteur de proximité, capteur de luminosité, Face ID / Touch ID, boutons (marche, volume, silencieux), vibreur, charge filaire, charge sans fil (si applicable), pourcentage et santé batterie, tiroir SIM.",
"PC portable : démarrage, affichage sur dalle + écran externe, toutes les touches du clavier, trackpad + clics, Wi-Fi + Bluetooth, ports USB/HDMI/audio, webcam + micro, haut-parleurs, charge + niveau batterie, ventilateur/températures, boot de l'OS.",
"Smartwatch : affichage + tactile/Force Touch, couronne/boutons, capteurs, charge, appairage, (étanchéité refaite).",
"AirPods/écouteurs : son équilibré G/D, micro, charge de chaque écouteur + étui, appairage/reset OK."
]},

{t:'h2', text:"Annexe B — Codes pannes fréquents (raccourci diagnostic)"},
{t:'table', header:["Symptôme","Cause la plus probable","À vérifier ensuite"], rows:[
["Ne charge pas","Câble/chargeur/port encrassé","Nappe de charge, batterie, puce de charge"],
["Autonomie faible / s'éteint","Batterie usée","Court-circuit qui décharge, appli/logiciel"],
["Écran noir mais vibre/sonne","Bloc écran / nappe","Rétroéclairage, carte (rare)"],
["Lignes/taches sur l'écran","Dalle endommagée","Nappe, connecteur"],
["Tactile ne répond pas","Digitizer / écran","Nappe, appairage (iPhone)"],
["Pas de son en appel","Earpiece / capteur","Grille encrassée, nappe"],
["Surchauffe/lenteur (PC)","Pâte thermique / poussière","Ventilateur, disque, malware"],
["Tombé dans l'eau","Corrosion carte mère","Nettoyage ultrasons, composants oxydés"]
]},

{t:'h2', text:"Annexe C — Glossaire"},
{t:'table', header:["Terme","Définition"], rows:[
["ESD","Décharge électrostatique — peut détruire silencieusement une puce"],
["FPC / nappe","Circuit flexible reliant deux éléments (écran, caméra…)"],
["OEM / pulled","Pièce d'origine (neuve OEM ou récupérée sur appareil)"],
["OLED / LCD","Technologies d'affichage (OLED : noirs profonds ; LCD : rétroéclairé)"],
["Digitizer","Couche tactile de l'écran"],
["DFU","Mode de restauration bas niveau (iPhone)"],
["BGA","Boîtier de puce à billes soudées sous le composant"],
["Reball","Refaire les billes de soudure d'une puce BGA"],
["Flux","Produit qui nettoie et facilite la soudure"],
["Court-circuit","Passage anormal du courant, souvent vers la masse"],
["Circuit ouvert","Coupure du passage du courant"],
["DC jack","Connecteur d'alimentation d'un PC portable"],
["LCI","Indicateur de contact liquide (change de couleur si mouillé)"],
["Rail","Ligne d'alimentation à une tension donnée sur une carte"],
["DEEE","Déchets d'équipements électriques et électroniques (recyclage)"]
]},

{t:'h2', text:"Mot de la fin"},
{t:'p', text:"La réparation est un métier qui se construit geste après geste. Ne cherchez pas à tout maîtriser d'un coup : démarrez par les écrans et les batteries (niveau 1), affinez votre méthode de diagnostic, puis montez vers la micro-soudure quand vous êtes à l'aise. Entraînez-vous sur des appareils morts, soignez chaque intervention, soyez transparent avec vos clients, et respectez le cadre légal. La compétence technique attire les appareils ; la confiance et la réputation font vivre la boutique. Bon travail, et bonnes réparations."},

];
