// Contenu de l'ebook « Flashage & Déblocage » — même format que l'ebook 1.
module.exports = [

{t:'h1', text:"Introduction — Flasher et débloquer, avec méthode et légalité"},
{t:'p', text:"Le flashage (réinstaller le logiciel bas niveau d'un appareil) et le déblocage réseau (permettre à un téléphone d'accepter n'importe quel opérateur) sont deux services très demandés en boutique. Bien maîtrisés, ils sauvent des appareils que l'on croyait morts, sortent un téléphone d'un blocage logiciel, et rendent un service concret au client. Mal compris, ils font perdre des données, « briquent » un appareil, ou — pire — franchissent des limites légales."},
{t:'p', text:"Ce guide vous apprend le flashage et le déblocage de A à Z, pour Android et iPhone, du niveau débutant au niveau professionnel. Un principe le gouverne du début à la fin : on sauvegarde avant, on travaille proprement, et on reste strictement dans le cadre légal. C'est ce qui protège vos clients, votre réputation et votre activité."},
{t:'warn', title:"À lire avant tout — le cadre légal", text:"Ce guide couvre uniquement des opérations LÉGALES : restauration de firmware, sortie de blocage logiciel, et déblocage réseau (désimlockage) sur des appareils dont la propriété est prouvée. Il ne fournit AUCUNE méthode pour contourner un verrou antivol (verrouillage d'activation iCloud, FRP/compte Google, verrou d'entreprise MDM) ni pour modifier un IMEI — ces actes sont illégaux et facilitent le recel de vol. Exigez toujours une preuve de propriété et refusez tout appareil suspect."},

{t:'h2', text:"Pourquoi ce guide"},
{t:'p', text:"Parce que le flashage et le déblocage sont parmi les services les plus rentables et les moins bien maîtrisés. Ce guide vous donne les repères clairs pour les proposer avec confiance et sécurité."},
{t:'benefits', items:[
["Android & iPhone","Les deux écosystèmes : Odin, Fastboot, MediaTek, Qualcomm, DFU/Recovery."],
["La méthode avant l'outil","Un processus de flash sécurisé, la sauvegarde d'abord, la vérification ensuite."],
["Déblocage réseau légal","Les vraies méthodes de désimlockage autorisées, expliquées clairement."],
["Dépannage","Sortir un appareil d'un bootloop ou d'un « brick » logiciel."],
["Le cadre légal, net","Ce qui est permis, ce qui est interdit, et comment se protéger."],
["Le volet business","Proposer le service, tarifer, faire signer une décharge, gérer la responsabilité."]
]},

{t:'pagebreak'},

// ===== PARTIE 1 — FONDAMENTAUX =====
{t:'h1', text:"Partie 1 — Comprendre le logiciel d'un appareil"},

{t:'h2', text:"1. Firmware, système et partitions"},
{t:'p', text:"Le « firmware » est l'ensemble du logiciel bas niveau qui fait fonctionner un appareil : le programme de démarrage, le noyau, le système d'exploitation, le pilote du réseau mobile, etc. Sur un smartphone, ce logiciel est réparti en « partitions », des zones de stockage aux rôles distincts. Comprendre ces partitions, c'est comprendre ce qu'un flash modifie."},
{t:'fig', name:'firmware', caption:"Les principales partitions d'un smartphone et leur rôle."},
{t:'ul', items:[
"Bootloader : le tout premier programme exécuté ; il vérifie que le système est authentique (signature) avant de le lancer.",
"Boot / Kernel : le noyau du système d'exploitation.",
"System / Super : le système lui-même (Android, iOS…).",
"Recovery : un mode de maintenance permettant de réparer, réinitialiser ou installer une mise à jour.",
"Modem / Baseband : le logiciel qui gère la partie réseau mobile ; il est lié à l'identité radio de l'appareil (IMEI).",
"Userdata : vos données personnelles — effacées lors d'un flash complet."
]},

{t:'h2', text:"2. La chaîne de démarrage sécurisée"},
{t:'p', text:"Quand un appareil s'allume, il exécute une chaîne : un code gravé en usine (BootROM) lance le bootloader, qui vérifie et lance le noyau, qui lance le système. À chaque étape, un mécanisme de « secure boot » vérifie la signature du composant suivant : un firmware non signé (ou non compatible) est refusé. C'est pourquoi on ne peut pas installer n'importe quel fichier : il doit être officiel et correspondre exactement au modèle."},
{t:'fig', name:'bootchain', caption:"À chaque étape, la signature est vérifiée : un firmware non signé est rejeté."},

{t:'h2', text:"3. Les modes de flashage"},
{t:'p', text:"Chaque plateforme possède un « mode » spécial dans lequel on peut réécrire le logiciel. Les connaître permet d'aborder n'importe quel appareil."},
{t:'fig', name:'modes', caption:"Le mode et l'outil de flashage dépendent de la plateforme."},
{t:'ul', items:[
"iPhone/iPad : mode Recovery (récupération) et mode DFU (Device Firmware Update, plus bas niveau). On restaure via Finder/iTunes avec un fichier IPSW officiel.",
"Samsung (Android) : mode Download, piloté par le logiciel Odin, qui flashe des firmwares au format .tar/.md5.",
"Beaucoup d'Android (Pixel, etc.) : mode Fastboot/bootloader, piloté en ligne de commande (fastboot) avec les images d'usine du constructeur.",
"Puces MediaTek (MTK) : mode BROM/Preloader, flashé via SP Flash Tool à l'aide d'un fichier « scatter ».",
"Puces Qualcomm : mode EDL (Emergency Download, « 9008 »), flashé via QFIL/firehose — souvent réservé aux cas avancés."
]},

{t:'pagebreak'},

// ===== PARTIE 2 — PRÉPARATION =====
{t:'h1', text:"Partie 2 — Préparer un flashage sans casse"},
{t:'p', text:"90 % des flashages ratés viennent d'une mauvaise préparation : mauvais firmware, données non sauvegardées, pilote absent, câble défaillant. Cette partie évite les catastrophes."},
{t:'fig', name:'process', caption:"Le processus en 6 étapes : la sauvegarde d'abord, la vérification ensuite."},

{t:'h2', text:"4. Sauvegarder — l'étape non négociable"},
{t:'warn', title:"Toujours sauvegarder avant", text:"Un flash complet efface la partition de données : photos, contacts, messages, applications. Proposez SYSTÉMATIQUEMENT une sauvegarde avant toute opération, et prévenez le client par écrit que ses données peuvent être perdues. Un client prévenu et sauvegardé ne se retourne pas contre vous."},
{t:'ul', items:[
"Android : sauvegarde du compte (Google), copie des photos/fichiers sur ordinateur, export des contacts.",
"iPhone : sauvegarde iCloud ou sauvegarde locale chiffrée via Finder/iTunes.",
"Notez toujours : si l'appareil est déjà bloqué et inaccessible, la sauvegarde peut être impossible — informez le client AVANT d'agir."
]},

{t:'h2', text:"5. Identifier précisément le modèle et le bon firmware"},
{t:'ul', items:[
"Relevez la référence exacte (numéro de modèle, région, capacité). Un firmware d'une autre région ou variante peut « briquer » l'appareil ou casser le réseau.",
"Téléchargez le firmware depuis une source officielle/fiable, correspondant exactement au modèle et, si nécessaire, à la région d'origine.",
"Vérifiez la version : ne « descendez » pas de version (downgrade) sans savoir si c'est autorisé — cela peut bloquer l'appareil.",
"Contrôlez l'intégrité du fichier téléchargé (taille, somme de contrôle) avant de flasher."
]},

{t:'h2', text:"6. Pilotes, câble et outil"},
{t:'ul', items:[
"Installez les pilotes USB adaptés (pilotes constructeur, pilotes ADB/Fastboot, pilotes Qualcomm/MediaTek selon le cas).",
"Utilisez un câble de données de qualité et un port USB fiable ; une coupure en plein flash est la première cause de brick.",
"Chargez la batterie (≥ 50 %). Un appareil qui s'éteint pendant le flash peut devenir inutilisable.",
"Fermez les logiciels de synchronisation qui pourraient interférer, et utilisez la version correcte de l'outil de flash."
]},
{t:'tip', title:"Astuce pro", text:"Gardez un « journal de flash » : modèle, firmware utilisé, version, date, résultat. En cas de souci récurrent sur un modèle, vous saurez immédiatement quelle combinaison fonctionne."},

{t:'pagebreak'},

// ===== PARTIE 3 — ANDROID =====
{t:'h1', text:"Partie 3 — Flashage Android"},
{t:'p', text:"Android couvre des dizaines de fabricants et deux grandes familles de puces (MediaTek, Qualcomm). La logique reste la même : entrer dans le bon mode, envoyer le bon firmware avec le bon outil."},

{t:'h2', text:"7. Samsung — mode Download & Odin"},
{t:'ol', items:[
"Sauvegarder les données et installer les pilotes Samsung.",
"Éteindre l'appareil, puis entrer en mode Download (combinaison de touches propre au modèle) et confirmer.",
"Ouvrir Odin sur l'ordinateur ; l'appareil doit être détecté (port « COM » actif).",
"Charger le firmware officiel dans les emplacements prévus (les fichiers correspondants au format .tar).",
"Lancer le flash sans débrancher ; l'appareil redémarre à la fin. Vérifier le démarrage complet."
]},
{t:'note', title:"Compteur de flash et sécurité", text:"Certains fabricants enregistrent les flashages non officiels (compteur, indicateur de garantie). Un flash de firmware OFFICIEL est sans risque ; un firmware modifié peut affecter la garantie et certaines fonctions de sécurité. Informez le client."},

{t:'h2', text:"8. Fastboot (Pixel et nombreux Android)"},
{t:'ol', items:[
"Activer le débogage USB et, si nécessaire et autorisé par le constructeur, le déverrouillage OEM (voir Partie 6 pour les implications).",
"Redémarrer en mode bootloader/fastboot et connecter l'appareil ; vérifier la détection avec la commande de liste des périphériques.",
"Utiliser les images d'usine officielles du constructeur et le script de flash fourni, ou flasher les partitions une à une.",
"Ne pas interrompre le processus ; redémarrer et vérifier."
]},

{t:'h2', text:"9. MediaTek (SP Flash Tool) et Qualcomm (EDL)"},
{t:'ul', items:[
"MediaTek : on charge un fichier « scatter » (qui décrit les partitions) dans SP Flash Tool, on sélectionne les partitions à écrire, puis on connecte l'appareil éteint pour lancer le flash.",
"Qualcomm EDL (« 9008 ») : mode d'urgence de bas niveau, utilisé quand l'appareil ne démarre plus ; il nécessite les bons pilotes et un fichier de programmation (firehose). Réservé aux cas avancés.",
"Ces méthodes sont puissantes mais risquées : un mauvais scatter/firmware peut briquer l'appareil. À réserver quand on maîtrise, sur des firmwares officiels."
]},
{t:'warn', title:"Attention IMEI / baseband", text:"Ne cherchez jamais à « régénérer » ou modifier un IMEI. Après un flash, si le réseau ne fonctionne plus, la solution légale est de reflasher le bon firmware/modem officiel — jamais d'écrire un IMEI. La modification d'IMEI est illégale."},

{t:'pagebreak'},

// ===== PARTIE 4 — IPHONE =====
{t:'h1', text:"Partie 4 — Flashage / restauration iPhone & iPad"},
{t:'p', text:"Chez Apple, tout passe par une restauration officielle avec un fichier IPSW, via Finder (macOS récent) ou iTunes (Windows/macOS ancien). Deux modes existent : Recovery et DFU."},

{t:'h2', text:"10. Modes Recovery et DFU"},
{t:'ul', items:[
"Mode Recovery (récupération) : l'écran affiche une invite de connexion à l'ordinateur. Suffisant pour la plupart des restaurations.",
"Mode DFU (Device Firmware Update) : plus bas niveau, écran totalement noir ; utile quand la Recovery ne suffit pas. On l'active par une séquence précise de boutons propre à chaque modèle.",
"Dans les deux cas, on branche l'appareil, on ouvre Finder/iTunes, et on choisit « Restaurer » (avec un IPSW compatible)."
]},

{t:'h2', text:"11. Restaurer proprement"},
{t:'ol', items:[
"Sauvegarder si l'appareil est encore accessible.",
"Brancher l'appareil et le mettre en mode Recovery (ou DFU si nécessaire).",
"Dans Finder/iTunes, choisir « Restaurer l'iPhone » ; l'outil télécharge/installe la version compatible signée par Apple.",
"Laisser l'opération se terminer sans débrancher ; l'appareil redémarre « comme neuf »."
]},
{t:'warn', title:"Verrouillage d'activation (iCloud)", text:"Après restauration, l'iPhone redemandera l'identifiant Apple d'origine si le « Localiser » (verrouillage d'activation) était actif. C'est une protection antivol : elle ne se contourne PAS. Le propriétaire légitime doit se connecter avec son compte, ou faire retirer le verrou par Apple sur preuve d'achat. Un iPhone verrouillé sans preuve de propriété ne doit pas être accepté."},

{t:'pagebreak'},

// ===== PARTIE 5 — DÉBLOCAGE RÉSEAU =====
{t:'h1', text:"Partie 5 — Déblocage réseau (désimlockage) légal"},
{t:'p', text:"Le déblocage réseau permet à un téléphone « bloqué » sur un opérateur d'accepter les cartes SIM d'autres opérateurs. C'est un service parfaitement légal — à condition de le faire par les voies autorisées et sur un appareil dont la propriété est établie."},
{t:'fig', name:'deblocage', caption:"Déblocage réseau : les méthodes autorisées et celles à refuser absolument."},

{t:'h2', text:"12. Les méthodes légales"},
{t:'ul', items:[
"Code de déblocage de l'opérateur : le propriétaire peut, sous conditions (téléphone payé, délai écoulé), demander gratuitement le déverrouillage à son opérateur. C'est la voie reine.",
"Service de désimlockage par IMEI : des services officiels débloquent « à distance » en enregistrant l'IMEI comme déverrouillé dans les bases constructeur/opérateur. Choisissez des prestataires sérieux et légaux.",
"Passage à l'eSIM / opérateur compatible selon les cas.",
"Dans tous les cas : l'appareil ne doit pas être signalé perdu/volé, et la propriété doit être prouvée."
]},

{t:'h2', text:"13. Ce qu'il ne faut jamais faire"},
{t:'ul', items:[
"Débloquer un appareil signalé volé ou perdu (listes noires IMEI) : illégal et traçable.",
"Contourner un verrou de compte (iCloud/FRP) sous couvert de « déblocage » : ce n'est pas du désimlockage, c'est du contournement d'antivol.",
"Modifier l'IMEI pour « sortir » un appareil d'une liste noire : illégal.",
"Accepter un appareil dont le client ne peut prouver la propriété."
]},
{t:'note', title:"La bonne question à poser", text:"« Avez-vous une preuve d'achat / la facture ? » Cette simple question filtre l'essentiel des demandes problématiques et protège votre commerce. En cas de doute, refusez poliment."},

{t:'pagebreak'},

// ===== PARTIE 6 — BOOTLOADER / ROOT / ROM =====
{t:'h1', text:"Partie 6 — Bootloader, root et ROM personnalisées (Android)"},
{t:'p', text:"Déverrouiller le bootloader, « rooter » ou installer une ROM personnalisée sont des opérations que le propriétaire peut légitimement demander sur SON appareil. Elles comportent toutefois des contreparties qu'il faut expliquer clairement."},

{t:'h2', text:"14. Ce que ça implique"},
{t:'ul', items:[
"Déverrouillage du bootloader : souvent EFFACE toutes les données (sécurité) et peut annuler la garantie.",
"Root / ROM personnalisée : peut casser certaines fonctions (paiement sans contact, applications bancaires, mises à jour officielles) et réduire la sécurité si mal fait.",
"Réversibilité : reverrouiller/revenir au stock est parfois possible, parfois non selon le modèle.",
"Sur beaucoup d'appareils récents, le déverrouillage OEM est bridé par le constructeur."
]},
{t:'tip', title:"Devoir de conseil", text:"Avant toute manipulation « avancée », expliquez au client les risques (garantie, sécurité, fonctions bancaires) et faites-lui confirmer par écrit. C'est un service légitime, mais le client doit décider en connaissance de cause."},

{t:'pagebreak'},

// ===== PARTIE 7 — DÉPANNAGE =====
{t:'h1', text:"Partie 7 — Dépannage : bootloop, brick, échecs de flash"},
{t:'p', text:"Un appareil « bloqué au logo », qui redémarre en boucle (bootloop) ou totalement éteint (brick) est très souvent récupérable par voie logicielle. Méthode :"},
{t:'fig', name:'brick', caption:"Arbre de décision pour un appareil bloqué ou « briqué »."},
{t:'ol', items:[
"Observer : l'appareil réagit-il (logo, vibration, détection USB) ? Cela oriente tout le diagnostic.",
"S'il réagit : entrer en mode Recovery/Download/Fastboot et tenter une restauration avec le BON firmware officiel — cela résout la majorité des cas.",
"Écran noir mais détecté par l'ordinateur : passer par un mode bas niveau (EDL pour Qualcomm, DFU pour iPhone) avec les bons pilotes.",
"Échec persistant : suspecter un mauvais firmware (region/variante) ou un problème matériel (alimentation, stockage) — là on repasse côté réparation matérielle.",
"Après récupération : reconfigurer, vérifier le réseau, le Wi-Fi, l'appareil photo, et surtout que l'appareil démarre de façon stable."
]},
{t:'warn', title:"La cause n°1 de brick", text:"Débrancher ou couper l'alimentation pendant un flash. Ne touchez jamais au câble pendant l'opération, travaillez sur batterie chargée et port fiable."},

{t:'pagebreak'},

// ===== PARTIE 8 — CADRE LÉGAL =====
{t:'h1', text:"Partie 8 — Cadre légal & éthique (à lire absolument)"},
{t:'p', text:"C'est la partie la plus importante du guide. La différence entre un professionnel respecté et un revendeur de problèmes tient à cette ligne."},
{t:'fig', name:'redline', caption:"Les quatre interdits absolus, quelle que soit la demande du client."},

{t:'h2', text:"15. Les interdits absolus"},
{t:'ul', items:[
"Verrouillage d'activation (iCloud/Apple) : lié au compte du propriétaire ; ne se retire que par le propriétaire ou par Apple sur preuve d'achat.",
"FRP / compte Google (Android) : protection après réinitialisation ; ne se contourne pas sur un appareil dont la propriété n'est pas prouvée.",
"Verrou d'entreprise (MDM) : posé par une organisation ; seul l'administrateur peut le retirer.",
"Modification d'IMEI : illégale dans de nombreux pays ; ne jamais la proposer ni la réaliser."
]},

{t:'h2', text:"16. Votre protection : preuve de propriété et traçabilité"},
{t:'ul', items:[
"Exigez une preuve d'achat / facture pour tout déblocage ou retrait de verrou de compte. En cas de doute, refusez.",
"Notez l'identité du client et l'IMEI de l'appareil pris en charge.",
"Refusez tout appareil manifestement volé, signalé perdu, ou dont l'origine est douteuse.",
"Rappelez au client que la seule voie pour un verrou de compte est le retrait officiel (constructeur/opérateur) sur preuve de propriété."
]},
{t:'warn', title:"En résumé", text:"Sortir un appareil d'un blocage LOGICIEL (bootloop, mauvaise mise à jour) sur un appareil dont la propriété est prouvée = légitime. Contourner un verrou ANTIVOL lié à un compte = illégal. Sachez distinguer les deux, et dans le doute, refusez et orientez vers la voie officielle."},

{t:'pagebreak'},

// ===== PARTIE 9 — BUSINESS =====
{t:'h1', text:"Partie 9 — Proposer le service en boutique"},
{t:'h2', text:"17. Offre, tarifs et responsabilité"},
{t:'ul', items:[
"Positionnez des services clairs : « restauration logicielle », « sortie de bootloop », « désimlockage (déblocage réseau) », « installation/mise à jour de firmware ».",
"Tarifez selon le temps, le risque et la valeur : une restauration rapide vs un cas EDL complexe ne se facturent pas pareil.",
"Facturez éventuellement un diagnostic, déductible si l'opération est réalisée.",
"Le désimlockage par service IMEI a un coût d'achat : répercutez-le avec une marge."
]},
{t:'h2', text:"18. Décharge, garantie et données"},
{t:'ul', items:[
"Faites signer une décharge : rappel que le flash peut effacer les données, qu'une sauvegarde est recommandée, et que certains cas (appareil déjà endommagé) peuvent échouer.",
"Confidentialité : n'accédez aux données que si nécessaire, ne conservez rien, effacez les appareils de test.",
"Garantie de service : précisez ce qui est garanti (ex. démarrage stable) et ce qui ne l'est pas (données, aléas matériels).",
"Politique anti-vol affichée : « preuve de propriété exigée » rassure les clients honnêtes et décourage les autres."
]},

{t:'pagebreak'},

// ===== ANNEXES =====
{t:'h1', text:"Annexes"},
{t:'h2', text:"Annexe A — Aide-mémoire des modes"},
{t:'table', header:["Plateforme","Mode","Outil / fichier"], rows:[
["iPhone / iPad","Recovery / DFU","Finder ou iTunes + IPSW"],
["Samsung","Download","Odin + firmware .tar"],
["Pixel & Android","Fastboot / bootloader","fastboot + images d'usine"],
["MediaTek","BROM / Preloader","SP Flash Tool + scatter"],
["Qualcomm","EDL (9008)","QFIL + firehose"],
]},
{t:'h2', text:"Annexe B — Checklist avant flashage"},
{t:'ul', items:[
"Propriété de l'appareil vérifiée (preuve d'achat si déblocage/verrou de compte).",
"Données sauvegardées OU client prévenu par écrit de la perte possible.",
"Modèle exact identifié (référence, région, capacité).",
"Firmware officiel correspondant téléchargé et vérifié.",
"Pilotes installés, câble et port fiables, batterie ≥ 50 %.",
"Mode de flash correct identifié.",
"Après flash : démarrage stable, réseau, Wi-Fi, appareil photo, comptes reconfigurés."
]},
{t:'h2', text:"Annexe C — Glossaire"},
{t:'table', header:["Terme","Définition"], rows:[
["Firmware","Logiciel bas niveau de l'appareil"],
["Bootloader","Programme de démarrage qui vérifie la signature du système"],
["Partition","Zone de stockage à rôle défini (boot, system, modem…)"],
["DFU","Mode de mise à jour bas niveau (Apple)"],
["Recovery","Mode de maintenance / restauration"],
["Odin","Outil de flash des firmwares Samsung"],
["Fastboot","Mode/outil de flash en ligne de commande (Android)"],
["EDL (9008)","Mode d'urgence bas niveau (Qualcomm)"],
["Scatter","Fichier décrivant les partitions (MediaTek)"],
["IPSW","Fichier de firmware Apple"],
["Baseband / Modem","Logiciel gérant le réseau mobile"],
["IMEI","Identifiant unique de l'appareil (ne pas modifier)"],
["FRP","Protection de réinitialisation (compte Google)"],
["Désimlockage","Déblocage réseau (accepter tous les opérateurs)"],
["Brick","Appareil rendu inopérant par un flash raté"],
]},

{t:'h2', text:"Mot de la fin"},
{t:'p', text:"Le flashage et le déblocage sont des compétences puissantes : elles ressuscitent des appareils et rendent de vrais services. Elles imposent aussi une discipline : sauvegarder avant, travailler proprement, vérifier après, et ne jamais franchir la ligne légale. Un professionnel qui restaure un appareil bloqué et qui refuse poliment un appareil suspect construit exactement la réputation qui fait vivre une boutique. Sauvegarde, vérifie, flashe — et reste du bon côté de la ligne."},

];
