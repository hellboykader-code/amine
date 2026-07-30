#!/usr/bin/env bash
# Génère les versions HTML (à imprimer en PDF) de tous les documents.
#   pip install markdown && bash contenu/build/build-all.sh
# (option Pandoc : USE_PANDOC=1 bash contenu/build/build-all.sh)
set -euo pipefail
cd "$(dirname "$0")/.."   # -> contenu/
DOCS=(
  "strategie-marketing/strategie-marketing.md"
  "ebook-reparation/ebook-reparation.md"
  "ebook-flash-decodage/ebook-flash-decodage.md"
  "bonus-marketing/01-guide-lancement.md"
  "bonus-marketing/02-emails-promotion.md"
  "bonus-marketing/03-scripts-reseaux-sociaux.md"
  "bonus-marketing/04-checklist-lancement.md"
)
for doc in "${DOCS[@]}"; do
  [ -f "$doc" ] || { echo "⏭  absent : $doc"; continue; }
  base="${doc%.md}"
  if [ "${USE_PANDOC:-0}" = "1" ] && command -v pandoc >/dev/null 2>&1; then
    echo "📄 Pandoc → ${base}.pdf"
    pandoc "$doc" -o "${base}.pdf" --pdf-engine="${PDF_ENGINE:-weasyprint}" \
      --css="build/style-print.css" --toc -V lang=fr || echo "   ⚠ échec pandoc"
  else
    echo "🌐 HTML → ${base}.html"
    python3 build/md2html.py "$doc" "${base}.html"
  fi
done
echo "✅ Terminé. Ouvrez les .html et Imprimer → PDF."
