# Le Guide Complet de la Réparation — Ebook

Ebook complet (débutant → professionnel) sur la réparation des smartphones, PC
portables, tablettes, smartwatchs et AirPods.

## Fichiers livrés

- `Guide-Reparation.pdf` — version PDF (lecture, impression, diffusion).
- `Guide-Reparation.docx` — version Word modifiable.

## Sources

- `content.cjs` — tout le contenu de l'ebook (structuré en blocs).
- `diagrams.cjs` — les 9 schémas explicatifs (SVG générés par code).
- `render-figures.cjs` — rasterise les schémas en PNG (via Chromium) dans `figs/`.
- `build.cjs` — génère le fichier Word (`.docx`) via `docx` (docx-js), schémas inclus.
- `build-html.cjs` — génère `Guide-Reparation.html` (schémas SVG inline) pour le PDF.
- `figs/` — schémas générés (`.png` requis par `build.cjs`, `.svg`, `meta.json`).

## Régénérer

```bash
cd ebook
npm install                 # installe la dépendance docx

node render-figures.cjs     # (re)génère les schémas dans figs/  (Chromium requis)

# Word
npm run build:docx          # -> Guide-Reparation.docx

# HTML puis PDF (impression via Chromium)
npm run build:html          # -> Guide-Reparation.html
chromium --headless --no-pdf-header-footer \
  --print-to-pdf=Guide-Reparation.pdf Guide-Reparation.html
```

> Tout le contenu est centralisé dans `content.cjs` et les schémas dans
> `diagrams.cjs` : les modifier met à jour le Word **et** le PDF après régénération.
