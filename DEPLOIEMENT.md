# Mettre le site MK Phone en ligne

Le site est une **application React (Vite)**. Il faut donc un *build* (`npm run build`),
qui génère un dossier `dist/` 100 % statique à héberger.

---

## Option 1 — Netlify (recommandé, gratuit)

1. Compte gratuit sur [netlify.com](https://www.netlify.com).
2. **Add new site → Import an existing project**, connecte le dépôt GitHub
   `hellboykader-code/amine`, branche `mk-phone-site`.
3. Netlify lit le fichier `netlify.toml` :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. **Deploy** → adresse du type `https://mk-phone.netlify.app`.
5. (Facultatif) **Domain settings** pour brancher ton nom de domaine (ex. `mkphone.fr`).

---

## Option 2 — Vercel (gratuit)

1. Compte sur [vercel.com](https://vercel.com).
2. **Add New → Project**, importe le dépôt, branche `mk-phone-site`.
3. Framework détecté : **Vite** (build `npm run build`, sortie `dist`) → **Deploy**.

---

## Option 3 — GitHub Pages (gratuit)

Le routage utilise `HashRouter`, compatible GitHub Pages.

1. Build : `npm run build` (dossier `dist/`).
2. Publie le contenu de `dist/` sur la branche `gh-pages`, ou via une action GitHub
   (ex. `peaceiris/actions-gh-pages`).
3. Settings → Pages → source `gh-pages`.

---

## Recevoir les rendez-vous par e-mail (Formspree)

Par défaut, le formulaire affiche une confirmation et propose un e-mail pré-rempli.
Pour recevoir chaque demande **automatiquement par mail** :

1. Compte gratuit sur [formspree.io](https://formspree.io).
2. Crée un formulaire relié à `aminemekhfi45@gmail.com`, copie son URL
   (ex. `https://formspree.io/f/abcdwxyz`).
3. Dans `src/data.js`, renseigne :
   ```js
   export const FORMSPREE_URL = "https://formspree.io/f/abcdwxyz";
   ```
4. Rebuild / redeploy : les demandes arrivent par e-mail.

---

## Avant la mise en ligne — à vérifier

- [ ] Prix réels dans `src/data.js` (marques et montants).
- [ ] Coordonnées (déjà : 07 51 48 43 92 · aminemekhfi45@gmail.com).
- [ ] Compléter les mentions légales (`src/components/MentionsLegales.jsx` : SIRET, adresse, hébergeur).
- [ ] Remplacer les photos de `public/img/` par tes vraies photos si tu préfères.
