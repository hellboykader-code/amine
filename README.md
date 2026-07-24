# MK Phone — Réparation de téléphone en Île-de-France

Site web de la boutique **MK Phone**, développé en **React + Vite** : réparation de
smartphones, tablettes et PC, avec **prise de rendez-vous en ligne** et **grille de
tarifs par modèle**. Design clair, minimaliste et moderne.

- 📞 07 51 48 43 92
- ✉️ aminemekhfi45@gmail.com
- 📍 Toute l'Île-de-France

## Démarrer en local

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Structure

```
index.html            Point d'entrée Vite
vite.config.js        Configuration Vite
public/img/           Photos de l'atelier
src/
  main.jsx            Montage React + routes (Accueil, Mentions légales)
  App.jsx             Assemblage des sections
  data.js             Catalogue des réparations, avis, FAQ, contact  ← à personnaliser
  icons.jsx           Icônes SVG
  index.css           Styles (thème clair)
  components/         Nav, Hero, Services, Pricing, Process, About,
                      Reviews, Faq, Booking, Footer, MentionsLegales
```

## Fonctionnalités

- 🔧 Grille de tarifs par **marque et modèle** (Apple, Samsung, Xiaomi, Huawei, Pixel, iPad), filtrable et cherchable.
- 📅 **Prise de rendez-vous** : appareil + réparation + date + créneau, estimation
  automatique du prix, confirmation et e-mail pré-rempli. Envoi réel possible via Formspree.
- 💶 **-15 €** déjà appliqués sur chaque tarif (constante `REMISE` dans `src/data.js`).
- ⭐ Avis clients, FAQ, section « à propos », étapes, mentions légales.

## Personnaliser

- **Prix / modèles / coordonnées** : `src/data.js`.
- **Couleurs** : variables CSS en haut de `src/index.css` (`--accent`, `--bg`…).
- **Photos** : remplace les fichiers de `public/img/`.
- **Recevoir les RDV par e-mail** : voir `DEPLOIEMENT.md` (Formspree).

## Mise en ligne

Voir **`DEPLOIEMENT.md`** (Netlify / Vercel / GitHub Pages).
