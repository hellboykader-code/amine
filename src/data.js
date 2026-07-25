// Remise déjà appliquée sur chaque tarif de référence
export const REMISE = 15;

// Catalogue des réparations : prix par modèle (remise de 15 € déjà incluse)
// ecran, batterie, charge (connecteur), camera, vitre (arrière), desox (désoxydation)
export const CATALOGUE = [
  // Apple / iPhone
  { marque: "Apple", modele: "iPhone 16 Pro Max", ecran: 234, batterie: 84, charge: 74, camera: 104, vitre: 134, desox: 64 },
  { marque: "Apple", modele: "iPhone 16 Pro",     ecran: 214, batterie: 79, charge: 69, camera: 94,  vitre: 124, desox: 64 },
  { marque: "Apple", modele: "iPhone 16",         ecran: 174, batterie: 74, charge: 64, camera: 84,  vitre: 114, desox: 64 },
  { marque: "Apple", modele: "iPhone 15 Pro Max", ecran: 204, batterie: 79, charge: 69, camera: 94,  vitre: 124, desox: 64 },
  { marque: "Apple", modele: "iPhone 15",         ecran: 154, batterie: 69, charge: 59, camera: 79,  vitre: 104, desox: 64 },
  { marque: "Apple", modele: "iPhone 14 Pro Max", ecran: 184, batterie: 69, charge: 64, camera: 84,  vitre: 114, desox: 59 },
  { marque: "Apple", modele: "iPhone 14",         ecran: 134, batterie: 59, charge: 54, camera: 74,  vitre: 94,  desox: 59 },
  { marque: "Apple", modele: "iPhone 13 Pro Max", ecran: 154, batterie: 64, charge: 59, camera: 79,  vitre: 104, desox: 59 },
  { marque: "Apple", modele: "iPhone 13",         ecran: 114, batterie: 54, charge: 49, camera: 64,  vitre: 84,  desox: 54 },
  { marque: "Apple", modele: "iPhone 12 Pro Max", ecran: 124, batterie: 54, charge: 54, camera: 69,  vitre: 94,  desox: 54 },
  { marque: "Apple", modele: "iPhone 12",         ecran: 94,  batterie: 49, charge: 49, camera: 59,  vitre: 74,  desox: 54 },
  { marque: "Apple", modele: "iPhone 11 Pro Max", ecran: 104, batterie: 49, charge: 49, camera: 64,  vitre: 84,  desox: 49 },
  { marque: "Apple", modele: "iPhone 11",         ecran: 74,  batterie: 44, charge: 44, camera: 54,  vitre: 69,  desox: 49 },
  { marque: "Apple", modele: "iPhone XR",         ecran: 69,  batterie: 44, charge: 44, camera: 49,  vitre: 64,  desox: 49 },
  { marque: "Apple", modele: "iPhone X",          ecran: 74,  batterie: 44, charge: 44, camera: 49,  vitre: 64,  desox: 49 },
  { marque: "Apple", modele: "iPhone 8 / SE 2020",ecran: 44,  batterie: 39, charge: 39, camera: 44,  vitre: 54,  desox: 44 },
  { marque: "Apple", modele: "iPhone 7",          ecran: 39,  batterie: 34, charge: 39, camera: 44,  vitre: null, desox: 44 },

  // Samsung / Galaxy
  { marque: "Samsung", modele: "Galaxy S24 Ultra", ecran: 264, batterie: 79, charge: 69, camera: 94, vitre: 114, desox: 64 },
  { marque: "Samsung", modele: "Galaxy S24",       ecran: 194, batterie: 69, charge: 64, camera: 84, vitre: 94,  desox: 64 },
  { marque: "Samsung", modele: "Galaxy S23",       ecran: 174, batterie: 64, charge: 59, camera: 79, vitre: 89,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S22",       ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S21",       ecran: 134, batterie: 54, charge: 54, camera: 69, vitre: 79,  desox: 54 },
  { marque: "Samsung", modele: "Galaxy A54",       ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A53",       ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A34",       ecran: 89,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A14",       ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 49,  desox: 44 },

  // Xiaomi
  { marque: "Xiaomi", modele: "Xiaomi 13",     ecran: 134, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Xiaomi", modele: "Xiaomi 12",     ecran: 119, batterie: 49, charge: 49, camera: 59, vitre: 69, desox: 54 },
  { marque: "Xiaomi", modele: "Redmi Note 13", ecran: 84,  batterie: 44, charge: 44, camera: 49, vitre: 54, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi Note 12", ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi 12",      ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 44, desox: 44 },

  // Huawei
  { marque: "Huawei", modele: "P40 Pro",     ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Huawei", modele: "P30 Pro",     ecran: 104, batterie: 49, charge: 44, camera: 59, vitre: 64, desox: 49 },
  { marque: "Huawei", modele: "P30 Lite",    ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 44 },
  { marque: "Huawei", modele: "Mate 20 Pro", ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // Google Pixel
  { marque: "Google", modele: "Pixel 8 Pro", ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84, desox: 54 },
  { marque: "Google", modele: "Pixel 8",     ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Google", modele: "Pixel 7",     ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64, desox: 49 },
  { marque: "Google", modele: "Pixel 6",     ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // Apple iPad (tablettes)
  { marque: "iPad", modele: 'iPad Pro 12.9"', ecran: 224, batterie: 89, charge: 74, camera: 84, vitre: null, desox: 74 },
  { marque: "iPad", modele: 'iPad Pro 11"',   ecran: 194, batterie: 79, charge: 69, camera: 79, vitre: null, desox: 74 },
  { marque: "iPad", modele: "iPad Air",       ecran: 154, batterie: 69, charge: 59, camera: 69, vitre: null, desox: 64 },
  { marque: "iPad", modele: "iPad 10 / 9",    ecran: 104, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
  { marque: "iPad", modele: "iPad mini",      ecran: 114, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
];

export const TYPES_REPARATION = [
  { cle: "ecran",    nom: "Écran" },
  { cle: "batterie", nom: "Batterie" },
  { cle: "charge",   nom: "Connecteur de charge" },
  { cle: "camera",   nom: "Caméra" },
  { cle: "vitre",    nom: "Vitre arrière" },
  { cle: "desox",    nom: "Désoxydation" },
];

export const AVIS = [
  { nom: "Sarah L.", ville: "Paris 15e", texte: "Écran d'iPhone 13 changé en 25 minutes, nickel et moins cher qu'ailleurs. Je recommande !" },
  { nom: "Karim B.", ville: "Créteil", texte: "Batterie de Samsung remplacée à domicile. Ponctuel, pro et sympa. Rien à redire." },
  { nom: "Émilie D.", ville: "Boulogne", texte: "Mon iPad ne chargeait plus, réparé le jour même. Service au top et prix honnête." },
];

export const FAQ = [
  { q: "Combien de temps dure une réparation ?", r: "La plupart des réparations courantes (écran, batterie) sont réalisées en 30 minutes environ, pendant que vous attendez." },
  { q: "Vos réparations sont-elles garanties ?", r: "Oui. Les batteries sont garanties 6 mois. Pour les écrans, nous proposons plusieurs gammes : la garantie va de 3 à 6 mois pour les gammes compatibles, et jusqu'à 1 an pour les gammes premium." },
  { q: "Êtes-vous vraiment moins chers ?", r: "Oui : nos tarifs sont en moyenne 30 à 40 € moins chers que la concurrence, à qualité de pièce équivalente." },
  { q: "Intervenez-vous à domicile ?", r: "Oui, nous nous déplaçons partout en Île-de-France, à votre domicile ou sur votre lieu de travail, sur rendez-vous." },
  { q: "Rachetez-vous les téléphones ?", r: "Oui, nous rachetons votre ancien téléphone (fonctionnel ou en panne) avec une estimation gratuite et un paiement immédiat. Nous vendons aussi des téléphones reconditionnés et testés." },
  { q: "Que se passe-t-il si vous ne pouvez pas réparer ?", r: "Le diagnostic est gratuit. Si la réparation n'est pas possible ou si vous refusez le devis, vous ne payez rien." },
  { q: "Quels moyens de paiement acceptez-vous ?", r: "Espèces et carte bancaire. Un reçu vous est remis à chaque intervention." },
];

// Politique de garantie (réutilisée à plusieurs endroits)
export const GARANTIE = "Écrans garantis de 3 mois à 1 an selon la gamme · Batteries garanties 6 mois";

// Coordonnées
export const CONTACT = {
  tel: "07 51 48 43 92",
  telLink: "+33751484392",
  email: "aminemekhfi45@gmail.com",
  zone: "Toute l'Île-de-France",
};

// Envoi réel des rendez-vous (facultatif) : colle ton URL Formspree ici.
export const FORMSPREE_URL = "";
