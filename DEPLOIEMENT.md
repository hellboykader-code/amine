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

## Option 3 — GitHub Pages (automatique, gratuit) ✅ déjà configuré

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build et publie le site
**automatiquement à chaque push** sur `mk-phone-site`. Le routage `HashRouter` est
compatible GitHub Pages.

**À faire une seule fois** pour l'activer :

1. Sur GitHub → dépôt `amine` → **Settings → Pages**.
2. **Build and deployment → Source** : choisis **GitHub Actions**.
3. C'est tout : au prochain push (ou relance le workflow dans l'onglet **Actions**),
   le site est publié sur `https://hellboykader-code.github.io/amine/`.

> Le workflow peut aussi être lancé à la main : onglet **Actions → Déploiement GitHub
> Pages → Run workflow**.

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
