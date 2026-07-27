const fs = require('fs');
const content = require('./content.cjs');

const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// Build a numbered heading + TOC
let h1n = 0, h2n = 0;
const toc = [];
let body = '';

for (const b of content) {
  switch (b.t) {
    case 'h1': {
      h1n++; h2n = 0;
      const id = 'h1-' + h1n;
      toc.push({ level: 1, id, text: b.text });
      body += `<h1 id="${id}">${esc(b.text)}</h1>`;
      break;
    }
    case 'h2': {
      h2n++;
      const id = 'h2-' + h1n + '-' + h2n;
      toc.push({ level: 2, id, text: b.text });
      body += `<h2 id="${id}">${esc(b.text)}</h2>`;
      break;
    }
    case 'h3':
      body += `<h3>${esc(b.text)}</h3>`;
      break;
    case 'p':
      body += `<p>${esc(b.text)}</p>`;
      break;
    case 'ul':
      body += '<ul>' + b.items.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>';
      break;
    case 'ol':
      body += '<ol>' + b.items.map(i => `<li>${esc(i)}</li>`).join('') + '</ol>';
      break;
    case 'note':
      body += `<div class="box note"><div class="box-t">${esc(b.title||'À noter')}</div><div>${esc(b.text)}</div></div>`;
      break;
    case 'warn':
      body += `<div class="box warn"><div class="box-t">⚠ ${esc(b.title||'Attention')}</div><div>${esc(b.text)}</div></div>`;
      break;
    case 'tip':
      body += `<div class="box tip"><div class="box-t">💡 ${esc(b.title||'Astuce')}</div><div>${esc(b.text)}</div></div>`;
      break;
    case 'table': {
      let t = '<table><thead><tr>' + b.header.map(h=>`<th>${esc(h)}</th>`).join('') + '</tr></thead><tbody>';
      t += b.rows.map(r => '<tr>' + r.map(c=>`<td>${esc(c)}</td>`).join('') + '</tr>').join('');
      t += '</tbody></table>';
      body += t;
      break;
    }
    case 'pagebreak':
      body += '<div class="pb"></div>';
      break;
  }
}

const tocHtml = toc.map(t =>
  `<div class="toc-${t.level}"><a href="#${t.id}">${esc(t.text)}</a></div>`
).join('');

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<title>Le Guide Complet de la Réparation</title>
<style>
  :root{
    --navy:#1F3A5F; --blue:#2E5E8C; --accent:#C0392B; --ink:#222;
    --muted:#5b6672; --line:#d9e0ea;
  }
  @page{ size:A4; margin:20mm 18mm; }
  *{ box-sizing:border-box; }
  html{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  body{ font-family:"Helvetica Neue",Arial,sans-serif; color:var(--ink);
        font-size:10.5pt; line-height:1.5; margin:0; }
  h1,h2,h3{ line-height:1.25; }
  h1{ color:var(--navy); font-size:20pt; border-bottom:3px solid var(--accent);
      padding-bottom:6px; margin:26px 0 14px; page-break-after:avoid; }
  h2{ color:var(--blue); font-size:15pt; margin:22px 0 8px; page-break-after:avoid; }
  h3{ color:#2C3E50; font-size:12pt; margin:16px 0 6px; page-break-after:avoid; }
  p{ margin:0 0 9px; text-align:justify; }
  ul,ol{ margin:4px 0 12px; padding-left:22px; }
  li{ margin:0 0 5px; }
  a{ color:var(--blue); text-decoration:none; }

  .box{ border-radius:6px; padding:11px 14px 11px 16px; margin:12px 0 14px;
        page-break-inside:avoid; border-left:5px solid; }
  .box-t{ font-weight:700; margin-bottom:3px; }
  .note{ background:#EAF2FB; border-color:#2E5E8C; }
  .note .box-t{ color:var(--navy); }
  .warn{ background:#FDECEA; border-color:#C0392B; }
  .warn .box-t{ color:var(--accent); }
  .tip{ background:#EAF7EE; border-color:#27AE60; }
  .tip .box-t{ color:#1E7E42; }

  table{ border-collapse:collapse; width:100%; margin:10px 0 14px; font-size:9.6pt;
         page-break-inside:avoid; }
  th{ background:var(--navy); color:#fff; text-align:left; padding:7px 9px; font-weight:600; }
  td{ border:1px solid var(--line); padding:6px 9px; vertical-align:top; }
  tbody tr:nth-child(even){ background:#F2F5F9; }

  .pb{ page-break-after:always; }

  /* Cover */
  .cover{ height:257mm; display:flex; flex-direction:column; justify-content:center;
          align-items:center; text-align:center; page-break-after:always; }
  .cover .sup{ color:var(--blue); font-weight:700; letter-spacing:2px; font-size:15pt; }
  .cover .title{ color:var(--navy); font-weight:800; font-size:52pt; margin:6px 0 18px; letter-spacing:1px; }
  .cover .rule{ width:120px; border-top:4px solid var(--accent); margin:14px auto 20px; }
  .cover .devices{ font-size:14pt; color:#2C3E50; margin:2px 0; }
  .cover .sub{ font-style:italic; color:var(--muted); font-size:13pt; margin-top:18px; }
  .cover .foot{ position:relative; margin-top:70px; color:var(--muted); font-size:10pt; }

  /* TOC */
  .toc-title{ color:var(--navy); font-size:22pt; font-weight:800; margin:0 0 14px; }
  .toc-1{ font-weight:700; color:var(--navy); margin:10px 0 3px; font-size:11.5pt; }
  .toc-2{ margin:2px 0 2px 16px; color:#33404d; font-size:10pt; }
  .toc-1 a,.toc-2 a{ color:inherit; }
</style></head>
<body>
  <div class="cover">
    <div class="sup">LE GUIDE COMPLET DE LA</div>
    <div class="title">RÉPARATION</div>
    <div class="rule"></div>
    <div class="devices">Smartphones · PC portables · Tablettes</div>
    <div class="devices">Smartwatchs · AirPods</div>
    <div class="sub">Du débutant au professionnel — de A à Z</div>
    <div class="foot">Diagnostic · Techniques de réparation · Micro-soudure · Business</div>
  </div>

  <div class="toc-title">Sommaire</div>
  ${tocHtml}
  <div class="pb"></div>

  ${body}
</body></html>`;

fs.writeFileSync('/home/user/amine/ebook/Guide-Reparation.html', html);
console.log('HTML écrit :', html.length, 'octets ;', toc.length, 'entrées de sommaire');
