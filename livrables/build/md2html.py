#!/usr/bin/env python3
"""
Convertit un fichier Markdown (avec front-matter YAML Pandoc) en un HTML
professionnel, prêt à imprimer en PDF depuis un navigateur.

Usage :
    python3 md2html.py <entree.md> [sortie.html]

Zéro dépendance lourde : nécessite seulement le paquet `markdown`
(pip install markdown). Génère une page de couverture à partir du
front-matter (title, subtitle, author, date) puis le corps du document.
"""
import sys
import os
import re
import html

try:
    import markdown
except ImportError:
    sys.exit("Le paquet 'markdown' est requis : pip install markdown")

HERE = os.path.dirname(os.path.abspath(__file__))
CSS_PATH = os.path.join(HERE, "style-print.css")


def parse_front_matter(text):
    """Retourne (meta: dict, corps: str)."""
    meta = {}
    body = text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            block = text[3:end].strip()
            body = text[end + 4:]
            for line in block.splitlines():
                m = re.match(r"^([A-Za-z0-9_-]+)\s*:\s*(.*)$", line)
                if m:
                    key, val = m.group(1), m.group(2).strip()
                    val = val.strip('"').strip("'")
                    meta[key] = val
    return meta, body


def strip_pandoc_directives(body):
    """Retire les directives LaTeX Pandoc (\\newpage, \\pagebreak)."""
    body = re.sub(r"\\newpage", '\n<div class="page-break"></div>\n', body)
    body = re.sub(r"\\pagebreak", '\n<div class="page-break"></div>\n', body)
    return body


def build(md_path, out_path=None):
    with open(md_path, "r", encoding="utf-8") as f:
        raw = f.read()

    meta, body = parse_front_matter(raw)
    body = strip_pandoc_directives(body)

    md = markdown.Markdown(
        extensions=["extra", "tables", "toc", "sane_lists", "nl2br", "fenced_code"],
        extension_configs={"toc": {"title": "Table des matières", "toc_depth": "2-3"}},
    )
    html_body = md.convert(body)

    title = meta.get("title", os.path.basename(md_path))
    subtitle = meta.get("subtitle", "")
    author = meta.get("author", "MK Phone")
    date = meta.get("date", "")

    try:
        with open(CSS_PATH, "r", encoding="utf-8") as f:
            css = f.read()
    except FileNotFoundError:
        css = ""

    toc_html = getattr(md, "toc", "")

    cover = f"""
    <section class="cover">
      <div class="brand">MK Phone — Éditions Techniques</div>
      <div class="rule"></div>
      <h1>{html.escape(title)}</h1>
      {f'<div class="subtitle">{html.escape(subtitle)}</div>' if subtitle else ''}
      <div class="meta">par {html.escape(author)} · {html.escape(date)}</div>
    </section>
    """

    doc = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>{css}</style>
</head>
<body>
{cover}
<nav class="doc-toc">{toc_html}</nav>
<div class="page-break"></div>
{html_body}
</body>
</html>
"""

    if out_path is None:
        out_path = os.path.splitext(md_path)[0] + ".html"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(doc)
    return out_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = sys.argv[1]
    dst = sys.argv[2] if len(sys.argv) > 2 else None
    result = build(src, dst)
    print(f"OK → {result}")
