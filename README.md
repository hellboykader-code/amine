# Amine Réparation — Site de réparation de téléphone

Site web pour une boutique de réparation de smartphones, avec **prise de rendez-vous
en ligne** et **grille de tarifs par modèle**. Inspiré (mise en page premium) du
template Framer, et catalogue de réparations aligné sur Pixou Phone avec **-15 € sur
chaque tarif**.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page (hero, services, tarifs, RDV, contact) |
| `assets/styles.css` | Design (thème sombre, responsive) |
| `assets/data.js` | **Catalogue des réparations et prix** — à personnaliser |
| `assets/script.js` | Tableau de tarifs, filtres et formulaire de rendez-vous |

## Fonctionnalités

- 🖥️ Design moderne, sombre et responsive (mobile / tablette / desktop).
- 🔧 Grille de tarifs par **marque et modèle** (iPhone 7 → 16, Galaxy S/A), filtrable et cherchable.
- 📅 **Prise de rendez-vous** : choix appareil + réparation + date + créneau, estimation
  automatique du prix, message de confirmation et e-mail pré-rempli vers la boutique.
- 💶 **-15 €** déjà appliqués sur chaque tarif (variable `REMISE` dans `data.js`).

## Personnaliser

- **Prix / modèles** : édite le tableau `CATALOGUE` dans `assets/data.js`.
  Chaque prix inclut déjà la remise de 15 €.
- **Nom de la boutique, téléphone, adresse, e-mail** : dans `index.html`
  (pied de page) et la constante `EMAIL_BOUTIQUE` dans `assets/script.js`.
- **Couleurs** : variables CSS en haut de `assets/styles.css` (`--accent`, `--bg`…).

## Mettre en ligne

Site 100 % statique : ouvre `index.html` dans un navigateur, ou héberge le dossier
sur n'importe quel hébergeur (Netlify, Vercel, GitHub Pages, OVH…).

### Rendez-vous : aller plus loin

Le formulaire fonctionne côté navigateur (confirmation + e-mail pré-rempli). Pour
recevoir les demandes automatiquement, branche le formulaire sur un service comme
[Formspree](https://formspree.io) ou [Netlify Forms], ou un vrai module de réservation
(Calendly, agenda en ligne).

---

> ℹ️ Les tarifs sont des prix de marché indicatifs : Pixou Phone ne publie pas de
> grille détaillée publique (devis en ligne). Vérifie et ajuste chaque prix dans
> `assets/data.js` selon tes coûts réels.
