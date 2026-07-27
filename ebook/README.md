# Le Guide Complet de la Réparation — Ebook

Ebook complet (débutant → professionnel) sur la réparation des smartphones, PC
portables, tablettes, smartwatchs et AirPods.

## Fichiers livrés

- `Guide-Reparation.pdf` — version PDF (lecture, impression, diffusion).
- `Guide-Reparation.docx` — version Word modifiable.

## Sources

- `content.cjs` — tout le contenu de l'ebook (structuré en blocs).
- `build.cjs` — génère le fichier Word (`.docx`) via `docx` (docx-js).
- `build-html.cjs` — génère `Guide-Reparation.html` (utilisé pour produire le PDF).

## Régénérer

```bash
cd ebook
npm install          # installe la dépendance docx

# Word
npm run build:docx   # -> Guide-Reparation.docx

# HTML puis PDF (impression via un navigateur Chromium)
npm run build:html   # -> Guide-Reparation.html
chromium --headless --no-pdf-header-footer \
  --print-to-pdf=Guide-Reparation.pdf Guide-Reparation.html
```

> Le contenu est centralisé dans `content.cjs` : modifier ce fichier met à jour
> le Word **et** le PDF après régénération.
