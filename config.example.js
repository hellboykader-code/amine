/* =========================================================================
   config.example.js — MODÈLE de configuration front-end
   ------------------------------------------------------------------------
   1. Copiez ce fichier en "config.js" à la racine du site.
   2. Renseignez UNIQUEMENT des clés PUBLIQUES (jamais de secret ici :
      la clé secrète Stripe et le secret PayPal restent côté serveur).
   3. Ajoutez config.js à votre .gitignore pour ne pas le committer.
   4. Chargez config.js AVANT checkout.js dans vos pages :
        <script src="config.js"></script>
        <script src="js/checkout.js"></script>

   MODE possibles :
     - "demo"            : aucun paiement réel (par défaut).
     - "stripe-link"     : redirige vers des Stripe Payment Links (sans serveur).
     - "stripe-checkout" : appelle une fonction serverless (multi-articles).
     - "paypal"          : boutons PayPal Smart Buttons.
   ========================================================================= */

window.CONFIG = {
  MODE: "demo",

  /* ---- Stripe (clé PUBLIQUE seulement) ---- */
  STRIPE_PUBLIC_KEY: "<votre_cle_publique_stripe>",

  /* Payment Links (créés dans le Dashboard Stripe > Payment Links) */
  STRIPE_PAYMENT_LINK_REPARATION: "<lien_payment_link_reparation>",
  STRIPE_PAYMENT_LINK_FLASH:      "<lien_payment_link_flash>",
  STRIPE_PAYMENT_LINK_PACK:       "<lien_payment_link_pack>",

  /* Endpoint serverless pour Stripe Checkout (multi-articles) */
  CHECKOUT_ENDPOINT: "/.netlify/functions/create-checkout-session",

  /* ---- PayPal (client-id PUBLIC) ---- */
  PAYPAL_CLIENT_ID: "<votre_client_id_paypal>",

  /* ---- Divers ---- */
  DEVISE: "EUR",
  URL_SUCCES: "merci.html",
  URL_ANNULATION: "panier.html"
};
