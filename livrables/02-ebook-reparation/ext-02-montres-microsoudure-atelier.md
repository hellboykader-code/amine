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
