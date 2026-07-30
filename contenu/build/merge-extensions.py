#!/usr/bin/env python3
"""
Fusionne les fragments d'extension dans les manuscrits des ebooks,
en les insérant JUSTE AVANT le premier chapitre d'annexe (pour que le
glossaire et les annexes restent à la fin).

Idempotent : délimite le bloc inséré par des marqueurs ; une nouvelle
exécution remplace le bloc au lieu de le dupliquer.
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

BEGIN = "<!-- === EXTENSIONS (généré, ne pas éditer à la main) === -->"
END = "<!-- === FIN EXTENSIONS === -->"

JOBS = [
    {
        "manuscript": "ebook-reparation/ebook-reparation.md",
        "annex_marker": "# Annexes",
        "fragments": [
            "ebook-reparation/ext-01-reparations-avancees.md",
            "ebook-reparation/ext-02-montres-microsoudure-atelier.md",
        ],
    },
    {
        "manuscript": "ebook-flash-decodage/ebook-flash-decodage.md",
        "annex_marker": "# ANNEXE A",
        "fragments": [
            "ebook-flash-decodage/ext-01-marques-outils.md",
            "ebook-flash-decodage/ext-02-theorie-bios-juridique.md",
        ],
    },
]


def strip_existing_block(text):
    if BEGIN in text and END in text:
        pre = text.split(BEGIN)[0]
        post = text.split(END, 1)[1]
        return (pre.rstrip() + "\n\n" + post.lstrip()).strip() + "\n"
    return text


def build_block(fragment_paths):
    parts = [BEGIN, ""]
    for fp in fragment_paths:
        full = os.path.join(ROOT, fp)
        if not os.path.exists(full):
            print(f"  ⚠ fragment absent : {fp}")
            continue
        with open(full, encoding="utf-8") as f:
            body = f.read().strip()
        parts.append("\\newpage\n")
        parts.append(body)
        parts.append("")
    parts.append(END)
    return "\n".join(parts) + "\n"


def main():
    for job in JOBS:
        man = os.path.join(ROOT, job["manuscript"])
        if not os.path.exists(man):
            print(f"⏭  manuscrit absent : {job['manuscript']}")
            continue
        with open(man, encoding="utf-8") as f:
            text = f.read()
        text = strip_existing_block(text)

        block = build_block(job["fragments"])

        # Trouver la ligne de début d'annexe
        lines = text.splitlines(keepends=True)
        idx = None
        for i, ln in enumerate(lines):
            if ln.startswith(job["annex_marker"]):
                idx = i
                break
        if idx is None:
            print(f"⚠ marqueur d'annexe introuvable dans {job['manuscript']} — ajout en fin de fichier.")
            new_text = text.rstrip() + "\n\n" + block
        else:
            new_text = "".join(lines[:idx]) + block + "\n" + "".join(lines[idx:])

        with open(man, "w", encoding="utf-8") as f:
            f.write(new_text)
        print(f"✅ fusionné : {job['manuscript']}")


if __name__ == "__main__":
    main()
