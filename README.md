# MK Phone — Réparation de téléphone en Île-de-France

Site web de la boutique **MK Phone** : réparation de smartphones, tablettes et PC,
avec **prise de rendez-vous en ligne** et **grille de tarifs par modèle**.

- 📞 07 51 48 43 92
- ✉️ aminemekhfi45@gmail.com
- 📍 Toute l'Île-de-France

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page (hero, services, tarifs, RDV, contact) |
| `assets/styles.css` | Design (thème sombre, tech, responsive) |
| `assets/data.js` | **Catalogue des réparations et prix** — à personnaliser |
| `assets/script.js` | Icônes, tableau de tarifs et formulaire de rendez-vous |
| `assets/img/` | Photos de l'atelier |

## Fonctionnalités

- 🖥️ Design moderne, sobre et responsive (mobile / tablette / desktop).
- 🔧 Grille de tarifs par **marque et modèle** (iPhone 7 → 16, Galaxy S/A), filtrable.
- 📅 **Prise de rendez-vous** : appareil + réparation + date + créneau, estimation
  automatique du prix, confirmation et e-mail pré-rempli.
- 💶 **-15 €** déjà appliqués sur chaque tarif (variable `REMISE` dans `data.js`).

## Personnaliser

- **Prix / modèles** : tableau `CATALOGUE` dans `assets/data.js` (remise de 15 € déjà incluse).
- **Coordonnées** : dans `index.html` (pied de page) et `EMAIL_BOUTIQUE` dans `assets/script.js`.
- **Couleurs** : variables CSS en haut de `assets/styles.css`.
- **Photos** : remplace les fichiers de `assets/img/` par tes propres photos.

## Mettre en ligne

Site 100 % statique : ouvre `index.html` dans un navigateur, ou héberge le dossier
sur Netlify, Vercel, GitHub Pages, OVH…

Pour recevoir les demandes de rendez-vous automatiquement, branche le formulaire sur
un service comme [Formspree](https://formspree.io) ou un module de réservation
(Calendly, agenda en ligne).
