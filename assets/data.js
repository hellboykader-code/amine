/*
 * Catalogue des réparations.
 *
 * Les tarifs ci-dessous reprennent les réparations proposées par Pixou Phone
 * (mêmes modèles, mêmes types de réparation) avec des prix de marché.
 * ⚠️  Une remise de 15 € est DÉJÀ appliquée sur chaque tarif de référence
 *     (voir la propriété `remise`). Modifie librement les valeurs `prix`.
 *
 * Pour chaque modèle : ecran, batterie, charge (connecteur), camera,
 * vitre (vitre arrière), desox (désoxydation). `null` = non proposé.
 */

const REMISE = 15; // euros retirés par rapport au tarif de référence

const CATALOGUE = [
  // ----------------------------- APPLE / iPhone -----------------------------
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
  { marque: "Apple", modele: "iPhone 7",          ecran: 39,  batterie: 34, charge: 39, camera: 44,  vitre: null,desox: 44 },

  // --------------------------- SAMSUNG / Galaxy -----------------------------
  { marque: "Samsung", modele: "Galaxy S24 Ultra", ecran: 264, batterie: 79, charge: 69, camera: 94, vitre: 114, desox: 64 },
  { marque: "Samsung", modele: "Galaxy S24",       ecran: 194, batterie: 69, charge: 64, camera: 84, vitre: 94,  desox: 64 },
  { marque: "Samsung", modele: "Galaxy S23",       ecran: 174, batterie: 64, charge: 59, camera: 79, vitre: 89,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S22",       ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S21",       ecran: 134, batterie: 54, charge: 54, camera: 69, vitre: 79,  desox: 54 },
  { marque: "Samsung", modele: "Galaxy A54",       ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A53",       ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A34",       ecran: 89,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A14",       ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 49,  desox: 44 },

  // ---------------------------- XIAOMI --------------------------------------
  { marque: "Xiaomi", modele: "Xiaomi 13",          ecran: 134, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Xiaomi", modele: "Xiaomi 12",          ecran: 119, batterie: 49, charge: 49, camera: 59, vitre: 69, desox: 54 },
  { marque: "Xiaomi", modele: "Redmi Note 13",      ecran: 84,  batterie: 44, charge: 44, camera: 49, vitre: 54, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi Note 12",      ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi 12",           ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 44, desox: 44 },

  // ---------------------------- HUAWEI --------------------------------------
  { marque: "Huawei", modele: "P40 Pro",            ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Huawei", modele: "P30 Pro",            ecran: 104, batterie: 49, charge: 44, camera: 59, vitre: 64, desox: 49 },
  { marque: "Huawei", modele: "P30 Lite",           ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 44 },
  { marque: "Huawei", modele: "Mate 20 Pro",        ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // ------------------------- GOOGLE PIXEL -----------------------------------
  { marque: "Google", modele: "Pixel 8 Pro",        ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84, desox: 54 },
  { marque: "Google", modele: "Pixel 8",            ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Google", modele: "Pixel 7",            ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64, desox: 49 },
  { marque: "Google", modele: "Pixel 6",            ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // ---------------------- APPLE iPad (tablettes) ----------------------------
  { marque: "iPad", modele: "iPad Pro 12.9\"",      ecran: 224, batterie: 89, charge: 74, camera: 84, vitre: null, desox: 74 },
  { marque: "iPad", modele: "iPad Pro 11\"",        ecran: 194, batterie: 79, charge: 69, camera: 79, vitre: null, desox: 74 },
  { marque: "iPad", modele: "iPad Air",             ecran: 154, batterie: 69, charge: 59, camera: 69, vitre: null, desox: 64 },
  { marque: "iPad", modele: "iPad 10 / 9",          ecran: 104, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
  { marque: "iPad", modele: "iPad mini",            ecran: 114, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
];

// Libellés des types de réparation (clé -> nom affiché + icône)
const TYPES_REPARATION = [
  { cle: "ecran",    nom: "Écran",                 icone: "📱" },
  { cle: "batterie", nom: "Batterie",              icone: "🔋" },
  { cle: "charge",   nom: "Connecteur de charge",  icone: "🔌" },
  { cle: "camera",   nom: "Caméra",                icone: "📷" },
  { cle: "vitre",    nom: "Vitre arrière",         icone: "🪟" },
  { cle: "desox",    nom: "Désoxydation",          icone: "💧" },
];
