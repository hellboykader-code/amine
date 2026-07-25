#!/usr/bin/env python3
"""Récupère une vraie photo par modèle depuis Wikimedia Commons (CC).
Écrit les images dans public/img/models/by-model/ et génère src/modelImages.js.
Repli sur la photo de marque si aucun résultat pertinent."""
import glob, json, os, re, time, urllib.parse, urllib.request

OUT_DIR = "public/img/models/by-model"
os.makedirs(OUT_DIR, exist_ok=True)
UA = "MKPhoneSite/1.0 (https://hellboykader-code.github.io/amine/; contact@mkphone.fr)"

# marque -> image de repli (déjà présentes)
BRAND_FALLBACK = {
    "Apple": "./img/models/apple.jpg",
    "Samsung": "./img/models/samsung.jpg",
    "Xiaomi": "./img/models/xiaomi.jpg",
    "Huawei": "./img/models/huawei.jpg",
    "Google": "./img/models/google.jpg",
    "iPad": "./img/models/ipad.png",
}

# (marque, modele, requête, tokens obligatoires dans le titre)
MODELS = [
    ("Apple", "iPhone 16 Pro Max", "iPhone 16 Pro Max", ["iphone", "16", "pro", "max"]),
    ("Apple", "iPhone 16 Pro", "iPhone 16 Pro", ["iphone", "16", "pro"]),
    ("Apple", "iPhone 16", "iPhone 16", ["iphone", "16"]),
    ("Apple", "iPhone 15 Pro Max", "iPhone 15 Pro Max", ["iphone", "15", "pro", "max"]),
    ("Apple", "iPhone 15", "iPhone 15", ["iphone", "15"]),
    ("Apple", "iPhone 14 Pro Max", "iPhone 14 Pro Max", ["iphone", "14", "pro", "max"]),
    ("Apple", "iPhone 14", "iPhone 14", ["iphone", "14"]),
    ("Apple", "iPhone 13 Pro Max", "iPhone 13 Pro Max", ["iphone", "13", "pro", "max"]),
    ("Apple", "iPhone 13", "iPhone 13", ["iphone", "13"]),
    ("Apple", "iPhone 12 Pro Max", "iPhone 12 Pro Max", ["iphone", "12", "pro", "max"]),
    ("Apple", "iPhone 12", "iPhone 12", ["iphone", "12"]),
    ("Apple", "iPhone 11 Pro Max", "iPhone 11 Pro Max", ["iphone", "11", "pro", "max"]),
    ("Apple", "iPhone 11", "iPhone 11", ["iphone", "11"]),
    ("Apple", "iPhone XR", "iPhone XR", ["iphone", "xr"]),
    ("Apple", "iPhone X", "iPhone X", ["iphone", "x"]),
    ("Apple", "iPhone 8 / SE 2020", "iPhone 8", ["iphone", "8"]),
    ("Apple", "iPhone 7", "iPhone 7", ["iphone", "7"]),
    ("Samsung", "Galaxy S24 Ultra", "Samsung Galaxy S24 Ultra", ["s24", "ultra"]),
    ("Samsung", "Galaxy S24", "Samsung Galaxy S24", ["s24"]),
    ("Samsung", "Galaxy S23", "Samsung Galaxy S23", ["s23"]),
    ("Samsung", "Galaxy S22", "Samsung Galaxy S22", ["s22"]),
    ("Samsung", "Galaxy S21", "Samsung Galaxy S21", ["s21"]),
    ("Samsung", "Galaxy A54", "Samsung Galaxy A54", ["a54"]),
    ("Samsung", "Galaxy A53", "Samsung Galaxy A53", ["a53"]),
    ("Samsung", "Galaxy A34", "Samsung Galaxy A34", ["a34"]),
    ("Samsung", "Galaxy A14", "Samsung Galaxy A14", ["a14"]),
    ("Xiaomi", "Xiaomi 13", "Xiaomi 13", ["xiaomi", "13"]),
    ("Xiaomi", "Xiaomi 12", "Xiaomi 12", ["xiaomi", "12"]),
    ("Xiaomi", "Redmi Note 13", "Redmi Note 13", ["redmi", "note", "13"]),
    ("Xiaomi", "Redmi Note 12", "Redmi Note 12", ["redmi", "note", "12"]),
    ("Xiaomi", "Redmi 12", "Redmi 12", ["redmi", "12"]),
    ("Huawei", "P40 Pro", "Huawei P40 Pro", ["p40"]),
    ("Huawei", "P30 Pro", "Huawei P30 Pro", ["p30"]),
    ("Huawei", "P30 Lite", "Huawei P30 Lite", ["p30", "lite"]),
    ("Huawei", "Mate 20 Pro", "Huawei Mate 20 Pro", ["mate", "20"]),
    ("Google", "Pixel 8 Pro", "Google Pixel 8 Pro", ["pixel", "8", "pro"]),
    ("Google", "Pixel 8", "Google Pixel 8", ["pixel", "8"]),
    ("Google", "Pixel 7", "Google Pixel 7", ["pixel", "7"]),
    ("Google", "Pixel 6", "Google Pixel 6", ["pixel", "6"]),
    ("iPad", 'iPad Pro 12.9"', "iPad Pro 12.9 inch", ["ipad", "pro"]),
    ("iPad", 'iPad Pro 11"', "iPad Pro 11 inch", ["ipad", "pro"]),
    ("iPad", "iPad Air", "iPad Air", ["ipad", "air"]),
    ("iPad", "iPad 10 / 9", "iPad 10th generation", ["ipad"]),
    ("iPad", "iPad mini", "iPad mini", ["ipad", "mini"]),
]

def slug(s):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", s.lower())).strip("-")

def req(url, tries=4):
    last = None
    for i in range(tries):
        try:
            r = urllib.request.Request(url, headers={"User-Agent": UA})
            return urllib.request.urlopen(r, timeout=30)
        except urllib.error.HTTPError as e:
            last = e
            if e.code == 429:
                time.sleep(4 * (i + 1))
                continue
            raise
    raise last

def search(query, tokens):
    q = urllib.parse.quote(f"{query} filetype:bitmap")
    url = (f"https://commons.wikimedia.org/w/api.php?action=query&generator=search"
           f"&gsrsearch={q}&gsrnamespace=6&gsrlimit=12&prop=imageinfo"
           f"&iiprop=url|mime|size&iiurlwidth=360&format=json")
    try:
        data = json.load(req(url))
    except Exception as e:
        print("  search error:", e); return None
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 99))
    cand = []
    for p in pages:
        title = p.get("title", "").lower()
        ii = (p.get("imageinfo") or [{}])[0]
        mime = ii.get("mime", "")
        thumb = ii.get("thumburl", "")
        if not thumb or "image" not in mime:
            continue
        if all(tok in title for tok in tokens):
            score = 0
            if "front" in title: score += 2
            if "back" in title or "rear" in title: score -= 1
            if "case" in title or "teardown" in title or "logic" in title or "screen protector" in title: score -= 5
            cand.append((score, thumb, mime))
    if not cand:
        return None
    cand.sort(key=lambda c: -c[0])
    return cand[0][1], cand[0][2]

result = {}
specific = 0
for marque, modele, query, tokens in MODELS:
    s = slug(modele)
    # Déjà téléchargé lors d'un run précédent ? on réutilise.
    existing = glob.glob(f"{OUT_DIR}/{s}.*")
    if existing and os.path.getsize(existing[0]) > 800:
        result[modele] = f"./img/models/by-model/{os.path.basename(existing[0])}"
        specific += 1
        print(f"SKIP {modele:22s} -> {os.path.basename(existing[0])}")
        continue
    time.sleep(1.3)
    found = search(query, tokens)
    if found:
        thumb, mime = found
        ext = ".png" if "png" in mime else (".webp" if "webp" in mime else ".jpg")
        path = f"{OUT_DIR}/{s}{ext}"
        try:
            with req(thumb) as resp, open(path, "wb") as f:
                f.write(resp.read())
            if os.path.getsize(path) > 800:
                result[modele] = f"./img/models/by-model/{s}{ext}"
                specific += 1
                print(f"OK   {modele:22s} -> {os.path.basename(path)}")
                continue
        except Exception as e:
            print("  dl error:", e)
    result[modele] = BRAND_FALLBACK[marque]
    print(f"FALL {modele:22s} -> (marque)")

with open("src/modelImages.js", "w") as f:
    f.write("// Photo par modèle (Wikimedia Commons, CC BY-SA). Généré automatiquement.\n")
    f.write("export const MODEL_IMAGES = ")
    f.write(json.dumps(result, ensure_ascii=False, indent=2))
    f.write(";\n")

print(f"\n{specific}/{len(MODELS)} photos spécifiques, {len(MODELS)-specific} replis marque.")
