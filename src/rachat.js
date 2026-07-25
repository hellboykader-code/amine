// Estimateur de reprise (rachat). Valeurs indicatives « comme neuf, 128 Go »,
// ajustées ensuite par l'état et le stockage. À affiner selon le marché réel.
export const RACHAT_BASE = {
  // Apple
  "iPhone 16 Pro Max": 700, "iPhone 16 Pro": 620, "iPhone 16": 480,
  "iPhone 15 Pro Max": 560, "iPhone 15": 420,
  "iPhone 14 Pro Max": 470, "iPhone 14": 360,
  "iPhone 13 Pro Max": 400, "iPhone 13": 300,
  "iPhone 12 Pro Max": 300, "iPhone 12": 220,
  "iPhone 11 Pro Max": 240, "iPhone 11": 170,
  "iPhone XR": 120, "iPhone X": 110, "iPhone 8 / SE 2020": 70, "iPhone 7": 45,
  // Samsung
  "Galaxy S24 Ultra": 620, "Galaxy S24": 430, "Galaxy S23": 340, "Galaxy S22": 250,
  "Galaxy S21": 180, "Galaxy A54": 150, "Galaxy A53": 110, "Galaxy A34": 100, "Galaxy A14": 70,
  // Xiaomi
  "Xiaomi 13": 200, "Xiaomi 12": 160, "Redmi Note 13": 120, "Redmi Note 12": 90, "Redmi 12": 70,
  // Huawei
  "P40 Pro": 140, "P30 Pro": 110, "P30 Lite": 60, "Mate 20 Pro": 90,
  // Google
  "Pixel 8 Pro": 340, "Pixel 8": 280, "Pixel 7": 190, "Pixel 6": 140,
  // iPad
  'iPad Pro 12.9"': 500, 'iPad Pro 11"': 420, "iPad Air": 320, "iPad 10 / 9": 200, "iPad mini": 250,
};

// État de l'appareil → coefficient (comme neuf = 100 %)
export const ETATS = [
  { cle: "neuf", nom: "Comme neuf", desc: "Aucune rayure, comme sorti de la boîte", coef: 1.0 },
  { cle: "tbe", nom: "Très bon état", desc: "Micro-rayures invisibles à 20 cm", coef: 0.9 },
  { cle: "bon", nom: "Bon état", desc: "Quelques rayures légères, fonctionne bien", coef: 0.75 },
  { cle: "correct", nom: "État correct", desc: "Rayures visibles, marques d'usage", coef: 0.55 },
  { cle: "hs", nom: "Écran cassé / en panne", desc: "Écran fissuré ou dysfonctionnement", coef: 0.3 },
];

// Stockage → coefficient (128 Go = référence)
export const STOCKAGES = [
  { go: "64 Go", coef: 0.95 },
  { go: "128 Go", coef: 1.0 },
  { go: "256 Go", coef: 1.08 },
  { go: "512 Go", coef: 1.15 },
  { go: "1 To", coef: 1.22 },
];
