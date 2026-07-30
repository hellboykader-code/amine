# MK Phone — Éditions Techniques · Site de vente d'ebooks

Site **statique** (HTML/CSS/JS pur, sans framework ni build) pour vendre deux ebooks
numériques et leur pack. Prêt à déployer sur **Netlify**, **Vercel** ou **GitHub Pages**.

---

## 1. Structure du projet

```
04-site-vente/
├── index.html                 # Accueil (hero, ebooks, inclus, avis, pack, FAQ, CTA)
├── ebook-reparation.html      # Page produit — Guide de Réparation (39 €)
├── ebook-flash-decodage.html  # Page produit — Flash & Décodage (49 €) + encadré légal
├── a-propos.html              # Crédibilité, expertise, engagement qualité
├── panier.html                # Panier + paiement (Stripe / PayPal), mode démo
├── faq.html                   # FAQ complète
├── mentions-legales.html      # Mentions légales
├── confidentialite.html       # Politique RGPD
├── merci.html                 # Confirmation post-achat + zone de téléchargement
├── css/
│   └── styles.css             # Design system complet, commenté
├── js/
│   ├── main.js                # Nav burger, accordéon FAQ, année footer, reveal scroll
│   ├── cart.js                # Panier localStorage (catalogue, add/remove/total/render)
│   └── checkout.js            # startCheckout() : Stripe (Link/Checkout) + PayPal
├── assets/                    # Images / visuels (à ajouter)
├── config.example.js          # Modèle de config front (clés PUBLIQUES) → copier en config.js
├── .env.example               # Variables serveur (clés SECRÈTES) → copier en .env
└── README-site.md             # Ce fichier
```

> **Important :** `config.js` et `.env` contiennent vos identifiants et **ne doivent
> pas être commités**. Ajoutez-les à votre `.gitignore` :
>
> ```
> config.js
> .env
> ```

---

## 2. Test en local

Le site est 100 % statique. Ouvrez simplement `index.html` dans un navigateur,
ou lancez un petit serveur local (recommandé pour éviter les restrictions de fichier) :

```bash
# Python
python3 -m http.server 8000
# puis ouvrez http://localhost:8000

# ou Node
npx serve .
```

Sans `config.js`, le site fonctionne en **mode démo** : les boutons « Payer »
simulent une commande sans encaisser d'argent.

---

## 3. Déploiement

### 3.1 Netlify (glisser-déposer ou Git)
1. Créez un compte sur [netlify.com](https://netlify.com).
2. **Option simple :** glissez-déposez le dossier `04-site-vente/` dans l'interface Netlify.
3. **Option Git :** connectez votre dépôt, réglez le *publish directory* sur
   `livrables/04-site-vente` (pas de build command, c'est un site statique).
4. Ajoutez vos variables serveur dans *Site settings → Environment variables* (voir `.env.example`).

### 3.2 Vercel
1. Compte sur [vercel.com](https://vercel.com), importez le dépôt.
2. *Framework preset :* **Other**. *Output/Root directory :* `livrables/04-site-vente`.
3. Variables d'environnement dans *Settings → Environment Variables*.

### 3.3 GitHub Pages
1. Placez le contenu du site à la racine d'une branche (ex. `gh-pages`) ou dans `/docs`.
2. *Repository → Settings → Pages* → sélectionnez la branche / dossier.
3. ⚠️ GitHub Pages est **purement statique** : il ne peut pas héberger les fonctions
   serverless. Utilisez alors les **Stripe Payment Links** (section 4.1), qui ne
   nécessitent aucun serveur.

---

## 4. Brancher les paiements

Copiez `config.example.js` → `config.js` et renseignez vos clés **publiques**.
Changez la valeur de `MODE` selon la solution choisie.

### 4.1 Stripe — Payment Links (le plus simple, SANS serveur) ✅ recommandé pour démarrer

1. Dashboard Stripe → **Payment Links** → créez un lien par produit :
   - Guide de Réparation (39 €), Flash & Décodage (49 €), Pack (69 €).
   - Dans chaque lien, réglez la page de confirmation sur votre `merci.html`.
2. Dans `config.js` :
   ```js
   window.CONFIG = {
     MODE: "stripe-link",
     STRIPE_PAYMENT_LINK_REPARATION: "https://buy.stripe.com/...",
     STRIPE_PAYMENT_LINK_FLASH:      "https://buy.stripe.com/...",
     STRIPE_PAYMENT_LINK_PACK:       "https://buy.stripe.com/...",
   };
   ```
3. Livraison des PDF : dans Stripe, activez la remise de fichiers après paiement,
   **ou** utilisez un webhook (section 5) pour envoyer l'email de livraison.

> Les Payment Links ne gèrent qu'un article à la fois. Pour un panier multi-articles,
> incitez au **Pack**, ou passez au mode Checkout (4.2).

### 4.2 Stripe — Checkout via fonction serverless (multi-articles)

`config.js` :
```js
window.CONFIG = {
  MODE: "stripe-checkout",
  STRIPE_PUBLIC_KEY: "pk_live_...",
  CHECKOUT_ENDPOINT: "/.netlify/functions/create-checkout-session"
};
```

**Exemple — Netlify Function** `netlify/functions/create-checkout-session.js` :
```js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Prix en centimes, alignés sur le catalogue de js/cart.js
const PRIX = { reparation: 3900, "flash-decodage": 4900, pack: 6900 };
const NOMS = {
  reparation: "Guide Complet de Réparation d'Appareils Électroniques",
  "flash-decodage": "Flash & Décodage : Maîtrise Complète",
  pack: "Pack Complet — Les 2 ebooks"
};

exports.handler = async (event) => {
  try {
    const { items, email } = JSON.parse(event.body);
    const line_items = items.map((id) => ({
      quantity: 1,
      price_data: {
        currency: "eur",
        unit_amount: PRIX[id],
        product_data: { name: NOMS[id] }
      }
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      customer_email: email || undefined,
      success_url: `${process.env.SITE_URL}/merci.html`,
      cancel_url: `${process.env.SITE_URL}/panier.html`
    });

    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
```

> **Vercel** : même code dans `api/create-checkout-session.js` en exportant
> `export default async function handler(req, res) { ... }` et en réglant
> `CHECKOUT_ENDPOINT` sur `/api/create-checkout-session`.

### 4.3 Webhook Stripe — livraison automatique des PDF par email

**Exemple** `netlify/functions/stripe-webhook.js` :
```js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const sig = event.headers["stripe-signature"];
  let evt;
  try {
    evt = stripe.webhooks.constructEvent(
      event.body, sig, process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (evt.type === "checkout.session.completed") {
    const session = evt.data.object;
    const email = session.customer_details.email;
    // 1. Générer des liens de téléchargement signés (S3, Cloud Storage, etc.)
    // 2. Envoyer l'email de livraison via votre service (Resend, SendGrid...)
    await envoyerEmailLivraison(email); // à implémenter avec EMAIL_API_KEY
  }
  return { statusCode: 200, body: "ok" };
};
```
Déclarez l'URL du webhook dans *Stripe → Développeurs → Webhooks* et copiez le
`whsec_...` dans `STRIPE_WEBHOOK_SECRET` (`.env`).

### 4.4 PayPal — Smart Payment Buttons

`config.js` :
```js
window.CONFIG = { MODE: "paypal", PAYPAL_CLIENT_ID: "AXXXX..." };
```
`checkout.js` charge le SDK PayPal à la volée et rend les boutons dans
`#paypal-boutons` (présent sur `panier.html`). Après paiement approuvé,
l'acheteur est redirigé vers `merci.html`.

> En production, **confirmez chaque commande côté serveur** (capture + vérification)
> avant de délivrer les fichiers, via l'API PayPal Orders (`PAYPAL_SECRET`).

---

## 5. Livraison des fichiers PDF

Deux approches, combinables :

1. **Email de livraison** (recommandé) : à la réception du webhook (Stripe) ou de la
   capture (PayPal), envoyez un email contenant des **liens de téléchargement signés
   et à durée limitée** (voir `DOWNLOAD_URL_*` et `DOWNLOAD_LINK_TTL` dans `.env`).
2. **Zone de téléchargement** sur `merci.html` : les boutons y sont des *placeholders*
   protégés (`protegerLien()`). Remplacez-les par les vrais liens signés (générés à la
   commande) une fois votre backend en place.

Stockez les PDF sur un espace privé (S3, Cloud Storage, Bunny, etc.) et ne servez
jamais un lien public permanent : préférez des URLs signées expirant après quelques heures.

---

## 6. Formulaires de contact / newsletter (Formspree)

Les formulaires (extrait gratuit, newsletter) portent l'attribut `data-demo` et sont
inactifs par défaut. Pour les activer sans serveur, utilisez **Formspree** :

1. Créez un formulaire sur [formspree.io](https://formspree.io) et récupérez son endpoint.
2. Dans le HTML, remplacez l'attribut par une vraie action :
   ```html
   <form action="https://formspree.io/f/VOTRE_ID" method="POST">
     <input type="email" name="email" required placeholder="votre@email.fr">
     <button type="submit" class="btn btn--primaire">Recevoir l'extrait</button>
   </form>
   ```
   (retirez `data-demo` pour que `main.js` ne bloque plus l'envoi).

---

## 7. Personnalisation rapide

- **Couleurs / typographie** : variables en haut de `css/styles.css` (`:root`).
- **Produits & prix** : objet `CATALOGUE` dans `js/cart.js` (gardez les mêmes `id`
  côté Stripe/PayPal et dans la fonction serverless).
- **Coordonnées / marque** : recherchez `aminemekhfi45@gmail.com`, `07 51 48 43 92`
  et « MK Phone » dans les fichiers HTML.
- **SEO** : chaque page a son `<title>`, sa meta description et ses balises Open Graph ;
  les deux pages produit incluent des données structurées JSON-LD `Product`.
  Pensez à remplacer `https://votre-domaine.fr` par votre vrai domaine.

---

## 8. Checklist avant mise en production

- [ ] `config.js` créé avec vos clés publiques (et ajouté au `.gitignore`)
- [ ] `.env` renseigné côté hébergeur (clés secrètes)
- [ ] Payment Links **ou** fonction Checkout + webhook opérationnels
- [ ] Emails de livraison testés (PDF reçus, liens signés valides)
- [ ] Mentions légales complétées (SIREN/SIRET, hébergeur réel)
- [ ] Domaine renseigné dans les balises SEO / JSON-LD
- [ ] Test complet du parcours d'achat sur mobile et desktop
```
