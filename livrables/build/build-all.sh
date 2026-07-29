#!/usr/bin/env bash
# Génère les versions HTML (prêtes à imprimer en PDF) de tous les documents.
#
# Deux méthodes possibles :
#
#  A) SANS rien installer de lourd (recommandé) :
#       pip install markdown
#       bash build-all.sh
#     → produit des fichiers .html. Ouvrez-les dans Chrome/Firefox puis
#       Imprimer → Enregistrer au format PDF (A4, cocher « Graphiques d'arrière-plan »).
#
#  B) PDF automatique via Pandoc (si installé) :
#       Installez pandoc + un moteur (weasyprint OU wkhtmltopdf OU LaTeX),
#       puis lancez ce script avec :  USE_PANDOC=1 bash build-all.sh
#
set -euo pipefail
cd "$(dirname "$0")/.."   # -> livrables/

DOCS=(
  "01-strategie-marketing/strategie-marketing.md"
  "02-ebook-reparation/ebook-reparation.md"
  "03-ebook-flash-decodage/ebook-flash-decodage.md"
  "05-bonus-marketing/01-guide-lancement.md"
  "05-bonus-marketing/02-emails-promotion.md"
  "05-bonus-marketing/03-scripts-reseaux-sociaux.md"
  "05-bonus-marketing/04-checklist-lancement.md"
)

for doc in "${DOCS[@]}"; do
  [ -f "$doc" ] || { echo "⏭  absent (encore) : $doc"; continue; }
  base="${doc%.md}"
  if [ "${USE_PANDOC:-0}" = "1" ] && command -v pandoc >/dev/null 2>&1; then
    echo "📄 Pandoc → ${base}.pdf"
    pandoc "$doc" -o "${base}.pdf" \
      --pdf-engine="${PDF_ENGINE:-weasyprint}" \
      --css="build/style-print.css" --toc -V lang=fr || \
      echo "   ⚠ échec pandoc (vérifiez le moteur PDF), essayez la méthode HTML."
  else
    echo "🌐 HTML → ${base}.html"
    python3 build/md2html.py "$doc" "${base}.html"
  fi
done

echo "✅ Terminé. Ouvrez les .html dans un navigateur et Imprimer → PDF."
