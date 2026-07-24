# Mettre le site MK Phone en ligne

Le site est **100 % statique** : aucun serveur à gérer. Choisis une des options ci-dessous.

---

## Option 1 — Netlify (recommandé, gratuit)

1. Va sur [netlify.com](https://www.netlify.com) et crée un compte gratuit.
2. Clique **Add new site → Import an existing project** et connecte ton dépôt GitHub
   `hellboykader-code/amine`, branche `mk-phone-site`.
3. Laisse les réglages par défaut (le fichier `netlify.toml` s'en occupe) → **Deploy**.
4. En quelques secondes tu obtiens une adresse du type `https://mk-phone.netlify.app`.
5. (Facultatif) **Domain settings** pour brancher ton propre nom de domaine (ex. `mkphone.fr`).

Glisser-déposer possible aussi : va sur [app.netlify.com/drop](https://app.netlify.com/drop)
et dépose le dossier du projet.

---

## Option 2 — Vercel (gratuit)

1. Compte sur [vercel.com](https://vercel.com).
2. **Add New → Project**, importe le dépôt, branche `mk-phone-site`.
3. Framework : **Other** → **Deploy**.

---

## Option 3 — GitHub Pages (gratuit)

1. Dépôt GitHub → **Settings → Pages**.
2. Source : branche `mk-phone-site`, dossier `/ (root)` → **Save**.
3. Le site sera publié sur `https://hellboykader-code.github.io/amine/`.

---

## Recevoir les rendez-vous par e-mail (Formspree)

Par défaut, le formulaire affiche une confirmation et propose un e-mail pré-rempli.
Pour recevoir chaque demande **automatiquement dans ta boîte mail** :

1. Crée un compte gratuit sur [formspree.io](https://formspree.io).
2. Crée un formulaire relié à `aminemekhfi45@gmail.com` → copie son URL
   (ex. `https://formspree.io/f/abcdwxyz`).
3. Ouvre `assets/script.js` et colle l'URL dans :
   ```js
   const FORMSPREE_URL = "https://formspree.io/f/abcdwxyz";
   ```
4. Enregistre, pousse : les demandes arrivent désormais par e-mail.

---

## Avant la mise en ligne — à vérifier

- [ ] Prix réels dans `assets/img` → `assets/data.js` (marques et montants).
- [ ] Coordonnées exactes (déjà : 07 51 48 43 92 · aminemekhfi45@gmail.com).
- [ ] Compléter `mentions-legales.html` (SIRET, adresse, hébergeur).
- [ ] Remplacer les photos de `assets/img/` par tes vraies photos si tu préfères.
