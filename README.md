# MK Phone — Éditions Techniques

Projet **autonome** de vente d'ebooks techniques (distinct de la boutique de
réparation MK Phone). Il contient le **site de vente** (à la racine, déployable
tel quel) et les **contenus** (ebooks, stratégie, bonus) dans `contenu/`.

## Structure

```
/ (racine = SITE de vente, statique HTML/CSS/JS — déployable directement)
  index.html, ebook-reparation.html, ebook-flash-decodage.html,
  a-propos.html, panier.html, faq.html, mentions-legales.html,
  confidentialite.html, merci.html
  css/  js/  assets/
  config.example.js   .env.example   netlify.toml
contenu/
  strategie-marketing/      Stratégie marketing complète
  ebook-reparation/         Ebook 1 — Réparation (~32 700 mots) + images/
  ebook-flash-decodage/     Ebook 2 — Flash & Décodage (~28 600 mots) + images/
  bonus-marketing/          Guide lancement, 10 emails, scripts réseaux, checklist
  build/                    Génération HTML/PDF des documents
```

## Déployer le site (2 minutes)

Le site est **statique** : aucun build requis.

- **Netlify / Vercel** : glissez-déposez le dossier, ou connectez ce dépôt
  (publish directory = racine `.`).
- **GitHub Pages** : activez Pages sur la branche, dossier racine.

Configurez les paiements : copiez `config.example.js` → `config.js` et
`.env.example` → `.env`, renseignez vos clés Stripe/PayPal. Voir `README-site.md`.

## Générer les PDF des ebooks

```bash
pip install markdown
bash contenu/build/build-all.sh          # -> .html ; Imprimer -> PDF (A4)
# (ré)assembler les extensions dans les manuscrits :
python3 contenu/build/merge-extensions.py
```

## Note — contenu payant

Les manuscrits des ebooks sont votre **produit payant** : gardez ce dépôt
**privé**. Ne publiez que le site (pas le texte intégral des ebooks) et livrez
les PDF aux clients via liens sécurisés (voir `README-site.md`).
