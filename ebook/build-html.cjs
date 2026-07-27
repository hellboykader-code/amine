const fs = require('fs');
const content = require('./content.cjs');
const D = require('./diagrams.cjs');

const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

let h1n = 0, h2n = 0;
const toc = [];
let body = '';

function isPart(t){ return /^Partie\s/i.test(t); }

for (const b of content) {
  switch (b.t) {
    case 'h1': {
      h1n++; h2n = 0;
      const id = 'h1-' + h1n;
      toc.push({ level: 1, id, text: b.text });
      if (isPart(b.text)) {
        const m = b.text.match(/^(Partie\s*\d+)\s*[—-]\s*(.*)$/i);
        const kicker = m ? m[1] : 'Partie';
        const title = m ? m[2] : b.text;
        body += `<section class="part-opener" id="${id}"><div class="part-kicker">${esc(kicker)}</div><div class="part-title">${esc(title)}</div></section>`;
      } else {
        body += `<h1 id="${id}">${esc(b.text)}</h1>`;
      }
      break;
    }
    case 'h2': {
      h2n++;
      const id = 'h2-' + h1n + '-' + h2n;
      toc.push({ level: 2, id, text: b.text });
      body += `<h2 id="${id}">${esc(b.text)}</h2>`;
      break;
    }
    case 'h3': body += `<h3>${esc(b.text)}</h3>`; break;
    case 'p':  body += `<p>${esc(b.text)}</p>`; break;
    case 'ul': body += '<ul>' + b.items.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>'; break;
    case 'ol': body += '<ol>' + b.items.map(i => `<li>${esc(i)}</li>`).join('') + '</ol>'; break;
    case 'note': body += `<div class="box note"><div class="box-t">${esc(b.title||'À noter')}</div><div>${esc(b.text)}</div></div>`; break;
    case 'warn': body += `<div class="box warn"><div class="box-t">⚠ ${esc(b.title||'Attention')}</div><div>${esc(b.text)}</div></div>`; break;
    case 'tip':  body += `<div class="box tip"><div class="box-t">💡 ${esc(b.title||'Astuce')}</div><div>${esc(b.text)}</div></div>`; break;
    case 'table': {
      let t = '<table><thead><tr>' + b.header.map(h=>`<th>${esc(h)}</th>`).join('') + '</tr></thead><tbody>';
      t += b.rows.map(r => '<tr>' + r.map(c=>`<td>${esc(c)}</td>`).join('') + '</tr>').join('');
      body += t + '</tbody></table>';
      break;
    }
    case 'fig': {
      const s = D[b.name] ? D[b.name]() : '';
      body += `<figure class="fig">${s}${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:''}</figure>`;
      break;
    }
    case 'benefits': {
      body += '<div class="benefits">' + b.items.map(([t,d]) =>
        `<div class="benefit"><div class="benefit-t">${esc(t)}</div><div class="benefit-d">${esc(d)}</div></div>`
      ).join('') + '</div>';
      break;
    }
    case 'pagebreak': body += '<div class="pb"></div>'; break;
  }
}

const tocHtml = toc.map(t =>
  `<div class="toc-${t.level}"><a href="#${t.id}"><span>${esc(t.text)}</span></a></div>`
).join('');

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<title>Le Guide Complet de la Réparation</title>
<style>
  :root{
    --navy:#1F3A5F; --blue:#2E5E8C; --sky:#4A90C2; --accent:#C0392B;
    --green:#27AE60; --ink:#243342; --muted:#5b6672; --line:#d9e0ea;
  }
  @page{ size:A4; margin:19mm 17mm; }
  *{ box-sizing:border-box; }
  html{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  body{ font-family:"Helvetica Neue",Arial,sans-serif; color:var(--ink);
        font-size:10.5pt; line-height:1.5; margin:0; }

  h1{ color:var(--navy); font-size:19pt; border-bottom:3px solid var(--accent);
      padding-bottom:6px; margin:24px 0 13px; page-break-after:avoid; }
  h2{ color:var(--blue); font-size:14.5pt; margin:20px 0 8px; page-break-after:avoid; }
  h3{ color:#2C3E50; font-size:11.5pt; margin:15px 0 5px; page-break-after:avoid; }
  p{ margin:0 0 9px; text-align:justify; }
  ul,ol{ margin:4px 0 12px; padding-left:20px; }
  li{ margin:0 0 5px; }
  a{ color:var(--blue); text-decoration:none; }

  /* Callouts */
  .box{ border-radius:7px; padding:11px 14px 11px 15px; margin:12px 0 14px;
        page-break-inside:avoid; border-left:5px solid; }
  .box-t{ font-weight:700; margin-bottom:3px; }
  .note{ background:#EAF2FB; border-color:#2E5E8C; } .note .box-t{ color:var(--navy); }
  .warn{ background:#FDECEA; border-color:#C0392B; } .warn .box-t{ color:var(--accent); }
  .tip{ background:#EAF7EE; border-color:#27AE60; } .tip .box-t{ color:#1E7E42; }

  /* Tables */
  table{ border-collapse:collapse; width:100%; margin:10px 0 14px; font-size:9.6pt;
         page-break-inside:avoid; border-radius:6px; overflow:hidden; }
  th{ background:var(--navy); color:#fff; text-align:left; padding:7px 9px; font-weight:600; }
  td{ border:1px solid var(--line); padding:6px 9px; vertical-align:top; }
  tbody tr:nth-child(even){ background:#F2F5F9; }

  /* Figures */
  .fig{ margin:14px 0 16px; text-align:center; page-break-inside:avoid; }
  .fig svg{ width:100%; max-width:560px; height:auto; border:1px solid #E6EBF2;
            border-radius:10px; background:#fff; box-shadow:0 1px 6px rgba(31,58,95,.08); }
  figcaption{ font-size:8.8pt; color:var(--muted); font-style:italic; margin-top:6px; }

  .pb{ page-break-after:always; }

  /* ---------- COVER ---------- */
  .cover{ position:relative; height:257mm; page-break-after:always; overflow:hidden;
          background:
            radial-gradient(circle at 78% 18%, rgba(74,144,194,.18), transparent 42%),
            radial-gradient(circle at 12% 88%, rgba(192,57,43,.10), transparent 40%),
            linear-gradient(160deg,#fbfdff 0%,#eef3f9 100%); }
  .cover .frame{ position:absolute; inset:9mm; border:1.5px solid #cdd9e6; border-radius:14px; }
  .cover .inner{ position:relative; height:100%; display:flex; flex-direction:column;
                 align-items:center; justify-content:center; text-align:center; padding:0 22mm; }
  .badge{ display:inline-block; background:var(--accent); color:#fff; font-weight:700;
          letter-spacing:2.5px; font-size:9.5pt; padding:6px 16px; border-radius:20px; margin-bottom:20px; }
  .cover .sup{ color:var(--blue); font-weight:700; letter-spacing:3px; font-size:14pt; }
  .cover .title{ color:var(--navy); font-weight:800; font-size:54pt; line-height:1; margin:4px 0 10px; letter-spacing:.5px; }
  .cover .rule{ width:120px; border-top:4px solid var(--accent); margin:12px auto 18px; }
  .cover .devices{ font-size:13.5pt; color:#2C3E50; margin:2px 0; font-weight:600; }
  .cover .sub{ font-style:italic; color:var(--muted); font-size:13pt; margin-top:16px; }
  .props{ position:absolute; left:0; right:0; bottom:16mm; display:flex; justify-content:center; gap:0; }
  .prop{ padding:0 18px; border-right:1px solid #cdd9e6; text-align:center; }
  .prop:last-child{ border-right:none; }
  .prop b{ display:block; color:var(--navy); font-size:15pt; }
  .prop span{ color:var(--muted); font-size:8.5pt; }

  /* ---------- TOC ---------- */
  .toc-title{ color:var(--navy); font-size:22pt; font-weight:800; margin:0 0 16px;
              border-bottom:3px solid var(--accent); padding-bottom:6px; }
  .toc-1{ font-weight:700; color:var(--navy); margin:11px 0 3px; font-size:11.5pt; }
  .toc-2{ margin:2px 0 2px 18px; color:#3a4652; font-size:10pt; }
  .toc-1 a,.toc-2 a{ color:inherit; }

  /* ---------- PART OPENERS ---------- */
  .part-opener{ page-break-before:always; page-break-inside:avoid; margin:0 0 6px;
                background:linear-gradient(135deg,var(--navy) 0%,var(--blue) 100%);
                color:#fff; border-radius:14px; padding:34px 30px; margin-top:6px;
                box-shadow:0 4px 14px rgba(31,58,95,.22); position:relative; overflow:hidden; }
  .part-opener::after{ content:""; position:absolute; right:-40px; top:-40px; width:180px; height:180px;
                       border-radius:50%; background:rgba(255,255,255,.06); }
  .part-kicker{ font-size:10.5pt; letter-spacing:4px; font-weight:700; color:#9fc4e6; text-transform:uppercase; }
  .part-title{ font-size:26pt; font-weight:800; line-height:1.1; margin-top:6px; }

  /* ---------- BENEFITS GRID ---------- */
  .benefits{ display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:14px 0 6px; }
  .benefit{ background:#F4F8FC; border:1px solid #E1EAF3; border-left:4px solid var(--sky);
            border-radius:9px; padding:12px 14px; page-break-inside:avoid; }
  .benefit-t{ color:var(--navy); font-weight:700; font-size:11pt; margin-bottom:3px; }
  .benefit-d{ color:var(--muted); font-size:9.5pt; }

  /* ---------- BACK COVER ---------- */
  .back{ page-break-before:always; height:257mm; display:flex; flex-direction:column;
         align-items:center; justify-content:center; text-align:center;
         background:linear-gradient(160deg,#1F3A5F 0%,#122437 100%); color:#eaf1f8; border-radius:0; }
  .back h3{ color:#fff; font-size:22pt; font-weight:800; margin:0 0 10px; }
  .back p{ color:#c4d4e6; max-width:120mm; font-size:11pt; text-align:center; }
  .back .cta{ margin-top:22px; background:var(--accent); color:#fff; font-weight:700;
              padding:12px 26px; border-radius:26px; font-size:12pt; letter-spacing:.5px; }
  .back .foot{ margin-top:40px; color:#8fa6bd; font-size:9pt; }
</style></head>
<body>

  <div class="cover">
    <div class="frame"></div>
    <div class="inner">
      <div class="badge">ÉDITION COMPLÈTE · 2026</div>
      <div class="sup">LE GUIDE COMPLET DE LA</div>
      <div class="title">RÉPARATION</div>
      <div class="rule"></div>
      <div class="devices">Smartphones · PC portables · Tablettes</div>
      <div class="devices">Smartwatchs · AirPods</div>
      <div class="sub">Du débutant au professionnel — de A à Z</div>
    </div>
    <div class="props">
      <div class="prop"><b>10</b><span>parties + annexes</span></div>
      <div class="prop"><b>9</b><span>schémas explicatifs</span></div>
      <div class="prop"><b>5</b><span>familles d'appareils</span></div>
      <div class="prop"><b>3</b><span>niveaux : débutant → pro</span></div>
    </div>
  </div>

  <div class="toc-title">Sommaire</div>
  ${tocHtml}
  <div class="pb"></div>

  ${body}

  <div class="back">
    <h3>Prêt à réparer ?</h3>
    <p>La compétence technique attire les appareils ; la méthode, la transparence et la
    réputation font vivre l'activité. Commencez par les écrans et les batteries, affinez
    votre diagnostic, puis montez vers la micro-soudure à votre rythme.</p>
    <div class="cta">Ouvrez le capot — et lancez-vous.</div>
    <div class="foot">Le Guide Complet de la Réparation · Édition 2026</div>
  </div>

</body></html>`;

fs.writeFileSync('/home/user/amine/ebook/Guide-Reparation.html', html);
console.log('HTML écrit :', html.length, 'octets ;', toc.length, 'entrées de sommaire');
