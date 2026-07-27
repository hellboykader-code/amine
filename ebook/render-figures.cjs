// Génère les schémas : écrit les .svg et rasterise en .png (Chromium) dans figs/
const fs = require('fs');
const { execFileSync } = require('child_process');
const D = require('./diagrams.cjs');

const OUT = '/home/user/amine/ebook/figs';
fs.mkdirSync(OUT, { recursive: true });
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const names = Object.keys(D);
const meta = {};
for (const name of names) {
  const svg = D[name]();
  const m = svg.match(/width="(\d+)" height="(\d+)"/);
  const W = +m[1], H = +m[2];
  meta[name] = { w: W, h: H };
  fs.writeFileSync(`${OUT}/${name}.svg`, svg);

  // wrapper html for exact-size screenshot
  const html = `<!doctype html><html><head><meta charset="utf-8">
  <style>html,body{margin:0;padding:0;background:#fff}svg{display:block}</style></head>
  <body>${svg}</body></html>`;
  fs.writeFileSync(`${OUT}/${name}.html`, html);

  execFileSync(CHROME, [
    '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    `--force-device-scale-factor=2`,
    `--window-size=${W},${H}`,
    `--screenshot=${OUT}/${name}.png`,
    `file://${OUT}/${name}.html`
  ], { stdio: 'ignore' });
}
fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify(meta, null, 2));
console.log('Schémas générés :', names.join(', '));
console.log('Tailles :', JSON.stringify(meta));
