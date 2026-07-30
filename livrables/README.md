# MK Phone — Éditions Techniques

Ensemble des livrables du projet **« Stratégie Marketing + 2 Ebooks + Site de
vente »** pour commercialiser l'expertise de la boutique MK Phone sous forme de
produits numériques.

## 📦 Contenu du dossier

| Dossier | Livrable | Format source | Sortie |
|---|---|---|---|
| `01-strategie-marketing/` | Stratégie marketing complète (marché, positionnement, canaux, pricing, plan de lancement, KPIs, budget) | Markdown | HTML/PDF |
| `02-ebook-reparation/` | **Ebook 1** — Guide Complet de Réparation d'Appareils Électroniques | Markdown | HTML/PDF |
| `03-ebook-flash-decodage/` | **Ebook 2** — Flash & Décodage : Maîtrise Complète | Markdown | HTML/PDF |
| `04-site-vente/` | Site web de vente statique (HTML/CSS/JS), Stripe/PayPal-ready | HTML/CSS/JS | à déployer |
| `05-bonus-marketing/` | Guide de lancement, 10 emails de promo, scripts réseaux sociaux, checklist | Markdown | HTML/PDF |
| `build/` | Système de génération HTML/PDF (zéro dépendance lourde) | Python/Bash | — |

## 🖨️ Générer les PDF

Les ebooks et documents sont écrits en **Markdown** (facile à modifier) puis
convertis en **HTML imprimable** ou **PDF**.

### Méthode simple (recommandée, sans rien installer de lourd)

```bash
pip install markdown          # une seule fois
cd livrables
bash build/build-all.sh       # génère les .html
```

Ouvrez les fichiers `.html` produits dans Chrome ou Firefox, puis
**Imprimer → Enregistrer au format PDF** (format A4, cochez « Graphiques
d'arrière-plan » pour conserver la couverture colorée).

### Méthode automatique (PDF direct via Pandoc)

```bash
# installer pandoc + un moteur PDF (weasyprint conseillé)
USE_PANDOC=1 PDF_ENGINE=weasyprint bash build/build-all.sh
```

## 🌐 Mettre le site en ligne

Voir `04-site-vente/README-site.md` (déploiement Netlify / Vercel / GitHub Pages
et configuration des paiements Stripe / PayPal).

## ✍️ Modifier le contenu

- **Textes des ebooks / stratégie** : éditez les fichiers `.md` puis relancez le
  build.
- **Images des ebooks** : déposez vos photos d'atelier dans les dossiers
  `images/` en respectant les noms des marqueurs `![Figure …](images/…)`.
- **Site** : éditez les fichiers dans `04-site-vente/` (variables de couleur en
  haut de `css/styles.css`).

## ⚖️ Note importante sur l'Ebook 2

L'ebook « Flash & Décodage » couvre le **flash de firmware** (usage légitime :
réparer un bootloop, réinstaller un OS, remettre à neuf un appareil que l'on
possède) et la **récupération d'accès sur preuve de propriété** via les canaux
officiels des constructeurs. Il **ne contient aucun tutoriel de contournement**
des verrous anti-vol (FRP, Activation Lock, Knox, Mi Account, etc.), car ces
procédures servent aussi à écouler des appareils volés et ne peuvent pas être
diffusées publiquement de façon responsable. Ce cadre est un **gage de sérieux**
et protège l'activité juridiquement — mettez-le en avant dans votre communication.
