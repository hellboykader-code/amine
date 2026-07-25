#!/usr/bin/env python3
"""Récupère 6 vraies photos (une par service) depuis Wikimedia Commons."""
import glob, json, os, time, urllib.parse, urllib.request

OUT = "public/img/services"
os.makedirs(OUT, exist_ok=True)
UA = "MKPhoneSite/1.0 (https://hellboykader-code.github.io/amine/; contact@mkphone.fr)"

# clé -> (requête, tokens souhaités, mots à bannir)
SERVICES = {
    "ecran":    ("cracked smartphone screen repair", ["screen"], ["diagram", "logo", "map"]),
    "batterie": ("smartphone lithium battery", ["battery"], ["diagram", "chart", "logo"]),
    "charge":   ("USB-C connector cable", ["usb"], ["diagram", "logo", "pinout"]),
    "camera":   ("smartphone camera module", ["camera"], ["diagram", "logo"]),
    "vitre":    ("broken smartphone back glass", ["phone"], ["diagram", "logo", "map"]),
    "desox":    ("smartphone water splash", ["phone"], ["diagram", "logo", "map"]),
}

def req(url, tries=4):
    last = None
    for i in range(tries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30)
        except urllib.error.HTTPError as e:
            last = e
            if e.code == 429:
                time.sleep(4 * (i + 1)); continue
            raise
    raise last

def search(query, tokens, ban):
    q = urllib.parse.quote(f"{query} filetype:bitmap")
    url = (f"https://commons.wikimedia.org/w/api.php?action=query&generator=search"
           f"&gsrsearch={q}&gsrnamespace=6&gsrlimit=15&prop=imageinfo"
           f"&iiprop=url|mime|size&iiurlwidth=900&format=json")
    data = json.load(req(url))
    pages = list(data.get("query", {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 99))
    for p in pages:
        title = p.get("title", "").lower()
        ii = (p.get("imageinfo") or [{}])[0]
        if "image" not in ii.get("mime", ""):
            continue
        if any(b in title for b in ban):
            continue
        w, h = ii.get("width", 0), ii.get("height", 0)
        if w < 500:
            continue
        return ii.get("thumburl", ""), ii.get("mime", "")
    return None

result = {}
for key, (query, tokens, ban) in SERVICES.items():
    existing = glob.glob(f"{OUT}/{key}.*")
    if existing and os.path.getsize(existing[0]) > 1200:
        result[key] = f"./img/services/{os.path.basename(existing[0])}"
        print(f"SKIP {key}"); continue
    time.sleep(1.4)
    try:
        found = search(query, tokens, ban)
    except Exception as e:
        found = None; print(f"  err {key}: {e}")
    if found:
        thumb, mime = found
        ext = ".png" if "png" in mime else (".webp" if "webp" in mime else ".jpg")
        path = f"{OUT}/{key}{ext}"
        with req(thumb) as r, open(path, "wb") as f:
            f.write(r.read())
        if os.path.getsize(path) > 1200:
            result[key] = f"./img/services/{key}{ext}"
            print(f"OK   {key} -> {os.path.basename(path)}"); continue
    result[key] = None
    print(f"MISS {key}")

with open("src/serviceImages.js", "w") as f:
    f.write("// Fond des cartes services (Wikimedia Commons, CC BY-SA). Généré.\n")
    f.write("export const SERVICE_IMAGES = ")
    f.write(json.dumps(result, ensure_ascii=False, indent=2))
    f.write(";\n")
print("Terminé.")
