// Génère les figures : écrit les .svg et rasterise en .png (Chromium) dans figs/
// Rendu avec marge basse puis recadrage exact (évite le clip du bas sur les grandes scènes).
const fs = require('fs');
const { execFileSync } = require('child_process');
const D = require('./figures.cjs');

const OUT = '/home/user/amine/ebook/figs';
fs.mkdirSync(OUT, { recursive: true });
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const PAD = 140;   // marge basse au rendu
const SCALE = 2;   // device scale factor

const names = Object.keys(D).filter(k => typeof D[k] === 'function');
const meta = {};
for (const name of names) {
  const svg = D[name]();
  const m = svg.match(/width="(\d+)" height="(\d+)"/);
  const W = +m[1], H = +m[2];
  meta[name] = { w: W, h: H };
  fs.writeFileSync(`${OUT}/${name}.svg`, svg);

  const html = `<!doctype html><html><head><meta charset="utf-8">
  <style>*{margin:0;padding:0}html,body{background:#fff}svg{display:block}</style></head>
  <body>${svg}</body></html>`;
  fs.writeFileSync(`${OUT}/${name}.html`, html);

  execFileSync(CHROME, [
    '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    `--force-device-scale-factor=${SCALE}`,
    `--window-size=${W},${H + PAD}`,
    `--screenshot=${OUT}/${name}.raw.png`,
    `file://${OUT}/${name}.html`
  ], { stdio: 'ignore' });
}
fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify(meta, null, 2));

// recadrage exact via Pillow
const py = `
import json, glob, os
from PIL import Image
meta = json.load(open('${OUT}/meta.json'))
scale = ${SCALE}
for name, d in meta.items():
    raw = '${OUT}/%s.raw.png' % name
    if not os.path.exists(raw):
        continue
    im = Image.open(raw)
    im = im.crop((0, 0, d['w']*scale, d['h']*scale))
    im.save('${OUT}/%s.png' % name)
    os.remove(raw)
print('recadrage OK :', len(meta), 'figures')
`;
fs.writeFileSync('/tmp/crop.py', py);
execFileSync('python3', ['/tmp/crop.py'], { stdio: 'inherit' });
console.log('Figures générées :', names.length);
