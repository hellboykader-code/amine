# Le Guide du Flashage & Déblocage — Ebook 2

Ebook complet (débutant → professionnel) sur le flashage de firmware et le
déblocage réseau, pour Android et iPhone, dans le cadre légal.

## Fichiers livrés
- `Guide-Flash-Decodage.pdf` — version PDF.
- `Guide-Flash-Decodage.docx` — version Word modifiable.

## Sources
- `content.cjs` — contenu structuré. `diagrams.cjs` — 7 schémas. `figures.cjs` — registre.
- `build.cjs` (Word), `build-html.cjs` (HTML→PDF), `render-figures.cjs` (schémas).

## Régénérer
```bash
cd ebook2 && npm install
node render-figures.cjs
npm run build:docx
npm run build:html
chromium --headless --no-pdf-header-footer --print-to-pdf=Guide-Flash-Decodage.pdf Guide-Flash-Decodage.html
```

> Cadre légal : ce guide ne couvre PAS le contournement de verrous antivol
> (iCloud/FRP/MDM) ni la modification d'IMEI — opérations illégales.
