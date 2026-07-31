// Panneaux "Matériel nécessaire" — illustrations d'outils dessinées par code (libres de droits).
const C = { navy:'#1F3A5F', blue:'#2E5E8C', ink:'#243342', grey:'#6B7684',
  line:'#D0D9E4', bgSoft:'#F4F7FB', head:'#2E5E8C', white:'#FFFFFF',
  red:'#C0392B', amber:'#E8A13A', green:'#27AE60' };
const S='#22405f';

function defs(){ return `<defs>
  <linearGradient id="mtl" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#FBFCFE"/><stop offset="0.35" stop-color="#D4DBE3"/><stop offset="0.62" stop-color="#AEB8C4"/><stop offset="1" stop-color="#79838F"/></linearGradient>
  <linearGradient id="mtlV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8A95A2"/><stop offset="0.2" stop-color="#F4F7FB"/><stop offset="0.5" stop-color="#C2CBD6"/><stop offset="0.8" stop-color="#F4F7FB"/><stop offset="1" stop-color="#79838F"/></linearGradient>
  <radialGradient id="mtlR" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#FBFCFE"/><stop offset="0.55" stop-color="#C2CBD6"/><stop offset="1" stop-color="#6E7884"/></radialGradient>
  <linearGradient id="red" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#E8776B"/><stop offset="0.4" stop-color="#C0392B"/><stop offset="1" stop-color="#8E2018"/></linearGradient>
  <radialGradient id="redR" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#E8776B"/><stop offset="0.6" stop-color="#BE3527"/><stop offset="1" stop-color="#7E1c14"/></radialGradient>
  <linearGradient id="blu" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#7FB6E4"/><stop offset="0.45" stop-color="#3E86C4"/><stop offset="1" stop-color="#245586"/></linearGradient>
  <linearGradient id="blk" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#3c4855"/><stop offset="0.5" stop-color="#232d38"/><stop offset="1" stop-color="#121820"/></linearGradient>
  <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4CE6A"/><stop offset="1" stop-color="#C79433"/></linearGradient>
  <radialGradient id="glass" cx="0.35" cy="0.28" r="0.9"><stop offset="0" stop-color="#EAF3FB"/><stop offset="0.5" stop-color="#B9D3E8" stop-opacity="0.85"/><stop offset="1" stop-color="#7FA6C4" stop-opacity="0.9"/></radialGradient>
  <linearGradient id="hl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
  <filter id="ds" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="3.4" flood-color="#16233a" flood-opacity="0.34"/></filter>
</defs>`; }
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// tool drawings — centered in a 150x120 box, style semi-réaliste (relief + reflets)
const TOOL = {
  screwdriver: ()=>`<g filter="url(#ds)" transform="translate(16 42) rotate(16)">
    <path d="M0 0 q-8 0 -8 14 q0 14 8 14 l52 0 q6 0 6 -14 q0 -14 -6 -14 z" fill="url(#red)" stroke="#7e1c14" stroke-width="1"/>
    <g stroke="#8E2018" stroke-width="1.2" opacity="0.5">${[0,1,2,3,4].map(i=>`<line x1="${8+i*10}" y1="2" x2="${8+i*10}" y2="26"/>`).join('')}</g>
    <rect x="6" y="3" width="46" height="6" rx="3" fill="url(#hl)"/>
    <rect x="54" y="9" width="10" height="10" rx="2" fill="#6E7884"/>
    <rect x="64" y="10" width="58" height="8" rx="3" fill="url(#mtlV)"/>
    <rect x="122" y="9.5" width="14" height="9" rx="1.5" fill="url(#mtl)" stroke="#79838F" stroke-width="0.8"/></g>`,
  bits: ()=>`<g filter="url(#ds)">${[0,1,2,3].map(i=>`<g transform="translate(${26+i*27} 22)"><rect x="0" y="0" width="15" height="54" rx="3" fill="url(#mtlV)"/><rect x="4" y="2" width="3" height="50" fill="#ffffff" opacity="0.5"/><path d="M0 54 l7 16 l8 -16 z" fill="#3a4552"/></g>`).join('')}</g>`,
  suction: ()=>`<g filter="url(#ds)" transform="translate(75 68)">
    <ellipse cx="0" cy="30" rx="32" ry="11" fill="#7E1c14"/>
    <path d="M-32 30 Q0 8 32 30 Q0 40 -32 30 Z" fill="url(#redR)"/>
    <path d="M-20 22 Q0 14 20 22 Q0 26 -20 22 Z" fill="#ffffff" opacity="0.25"/>
    <rect x="-5.5" y="-44" width="11" height="72" rx="5" fill="url(#mtlV)"/>
    <ellipse cx="0" cy="-44" rx="15" ry="6.5" fill="url(#mtlR)"/>
    <ellipse cx="0" cy="-45" rx="8" ry="3" fill="#ffffff" opacity="0.5"/></g>`,
  picks: ()=>`<g filter="url(#ds)">${[['-20','#E8A13A','#b57f22'],['4','#4A90C2','#2c6aa0'],['28','#27AE60','#1c7a44']].map(([r,col,dk],i)=>`<g transform="rotate(${r} 75 62)"><path d="M${28+i*7} ${42+i*11} q40 -14 72 -12 q4 12 -4 26 q-34 6 -66 -2 z" fill="${col}" stroke="${dk}" stroke-width="1"/><path d="M${34+i*7} ${44+i*11} q30 -9 56 -8" stroke="#ffffff" stroke-width="2" opacity="0.4" fill="none"/></g>`).join('')}</g>`,
  spudger: ()=>`<g filter="url(#ds)" transform="translate(12 54) rotate(9)">
    <rect x="0" y="-7" width="112" height="14" rx="7" fill="url(#blk)"/>
    <path d="M112 -7 q24 2 32 7 q-8 5 -32 7 z" fill="#0d1219"/>
    <path d="M-2 -7 q-10 1 -12 5 l6 4 q4 -3 8 -4 z" fill="#1a222c"/>
    <rect x="10" y="-4" width="86" height="3" rx="1.5" fill="#5a6a7c" opacity="0.7"/></g>`,
  tweezers: ()=>`<g filter="url(#ds)" transform="translate(18 28) rotate(7)">
    <path d="M2 2 L120 24 l16 3 l-2 4 l-16 -1 L1 10 z" fill="url(#mtl)" stroke="#79838F" stroke-width="0.6"/>
    <path d="M2 12 L120 40 l16 5 l-2 4 l-16 -3 L1 20 z" fill="url(#mtl)" stroke="#79838F" stroke-width="0.6"/>
    <path d="M4 4 L118 25" stroke="#ffffff" stroke-width="1.5" opacity="0.5"/>
    <path d="M0 2 q-8 6 0 18" fill="none" stroke="#6E7884" stroke-width="5"/></g>`,
  prycard: ()=>`<g filter="url(#ds)" transform="translate(28 32) rotate(-8)">
    <rect x="0" y="0" width="98" height="62" rx="10" fill="url(#blu)" stroke="#22537f" stroke-width="1"/>
    <path d="M8 8 h82 q4 0 4 4 v10 q-45 -6 -90 4 v-14 q0 -4 4 -4 z" fill="#ffffff" opacity="0.22"/>
    <rect x="0" y="48" width="98" height="14" rx="7" fill="#1b3f63" opacity="0.5"/></g>`,
  heatgun: ()=>`<g filter="url(#ds)" transform="translate(12 18)">
    <rect x="0" y="20" width="74" height="36" rx="12" fill="url(#blk)"/>
    <rect x="6" y="24" width="58" height="7" rx="3" fill="#4a5766" opacity="0.7"/>
    <path d="M18 56 q0 34 4 34 h16 q4 0 4 -34 z" fill="#232d38"/>
    <rect x="64" y="27" width="40" height="22" rx="7" fill="url(#mtlV)"/>
    <rect x="102" y="29" width="12" height="18" rx="3" fill="#5A6470"/>
    <g stroke="${C.amber}" stroke-width="3.4" stroke-linecap="round" opacity="0.95"><path d="M118 30 q11 -6 22 0"/><path d="M118 38 q11 6 22 0"/><path d="M118 46 q11 -6 22 0"/></g></g>`,
  multimeter: ()=>`<g filter="url(#ds)" transform="translate(36 14)">
    <rect x="0" y="0" width="78" height="92" rx="10" fill="#F0C33A" stroke="#a8841c" stroke-width="1.5"/>
    <rect x="0" y="0" width="78" height="46" rx="10" fill="#F6D46A"/>
    <rect x="10" y="9" width="58" height="26" rx="4" fill="#0f231a"/>
    <text x="39" y="29" font-size="15" fill="#5fe39a" text-anchor="middle" font-family="monospace" font-weight="700">0.00</text>
    <circle cx="39" cy="62" r="18" fill="#2b3542"/><circle cx="39" cy="62" r="18" fill="url(#hl)"/>
    <rect x="37" y="47" width="4" height="12" rx="2" fill="#F0C33A"/>
    <g stroke="#a8841c" stroke-width="1">${[...Array(8)].map((_,i)=>{const a=i/8*6.28;return `<line x1="${39+22*Math.cos(a)}" y1="${62+22*Math.sin(a)}" x2="${39+25*Math.cos(a)}" y2="${62+25*Math.sin(a)}"/>`}).join('')}</g>
    <circle cx="22" cy="86" r="4.5" fill="#c0392b"/><circle cx="56" cy="86" r="4.5" fill="#1e2a38"/></g>`,
  paste: ()=>`<g filter="url(#ds)" transform="translate(10 48) rotate(-6)">
    <rect x="0" y="-14" width="82" height="28" rx="9" fill="#eef2f7" stroke="#9aa6b3" stroke-width="1"/>
    <rect x="0" y="-14" width="82" height="10" rx="9" fill="url(#hl)"/>
    <rect x="8" y="-3" width="52" height="7" rx="3" fill="#c3ccd6"/>
    <path d="M82 -7 l24 7 l-24 7 z" fill="url(#mtlV)"/>
    <ellipse cx="112" cy="0" r="5" fill="#8A95A2"/><ellipse cx="112" cy="0" rx="5" ry="5" fill="none"/>
    <rect x="-18" y="-10" width="18" height="20" rx="4" fill="url(#red)"/></g>`,
  brush: ()=>`<g filter="url(#ds)" transform="translate(12 46) rotate(6)">
    <rect x="0" y="-8" width="88" height="16" rx="7" fill="#8a5a24"/>
    <rect x="6" y="-6" width="70" height="4" rx="2" fill="#c89a5a" opacity="0.6"/>
    <path d="M86 -10 l14 2 v16 l-14 2 z" fill="url(#mtl)"/>
    <path d="M100 -9 q30 3 34 9 q-34 6 -34 9 z" fill="#2b2b2b"/>
    <g stroke="#111" stroke-width="0.8" opacity="0.6">${[...Array(7)].map((_,i)=>`<line x1="100" y1="${-8+i*2.6}" x2="134" y2="${-3+i*1.9}"/>`).join('')}</g></g>`,
  ipa: ()=>`<g filter="url(#ds)" transform="translate(50 14)">
    <rect x="0" y="0" width="48" height="90" rx="10" fill="url(#glass)" stroke="#9aa6b3" stroke-width="1"/>
    <rect x="6" y="6" width="8" height="78" rx="4" fill="#ffffff" opacity="0.45"/>
    <rect x="15" y="-14" width="18" height="16" rx="3" fill="#2b3542"/>
    <rect x="12" y="-19" width="24" height="8" rx="3" fill="#3c4855"/>
    <rect x="5" y="34" width="38" height="34" rx="4" fill="#ffffff"/>
    <text x="24" y="50" font-size="12" fill="${C.navy}" text-anchor="middle" font-weight="800">IPA</text>
    <text x="24" y="63" font-size="8" fill="${C.grey}" text-anchor="middle">99%</text></g>`,
  ram: ()=>`<g filter="url(#ds)" transform="translate(6 42) rotate(-6)">
    <rect x="0" y="0" width="140" height="40" rx="4" fill="#12603b"/>
    <rect x="0" y="0" width="140" height="6" rx="3" fill="#1c7a4c"/>
    ${[0,1,2,3].map(i=>`<rect x="${10+i*33}" y="9" width="26" height="22" rx="2" fill="#0d1a14" stroke="#082018"/>`).join('')}
    <g fill="url(#gold)">${[...Array(13)].map((_,i)=>`<rect x="${8+i*10}" y="36" width="6" height="6" rx="0.5"/>`).join('')}</g></g>`,
  ssd: ()=>`<g filter="url(#ds)" transform="translate(12 36) rotate(-4)">
    <rect x="0" y="0" width="132" height="50" rx="6" fill="url(#blu)"/>
    <rect x="0" y="0" width="132" height="50" rx="6" fill="#12365a" opacity="0.55"/>
    <rect x="10" y="10" width="76" height="30" rx="4" fill="#0d2135"/>
    <text x="48" y="30" font-size="13" fill="#8fc2ea" text-anchor="middle" font-weight="800">SSD</text>
    <g fill="url(#gold)">${[...Array(9)].map((_,i)=>`<rect x="${92+i*5}" y="12" width="3" height="26"/>`).join('')}</g></g>`,
  esd: ()=>`<g filter="url(#ds)" transform="translate(16 30)">
    <ellipse cx="34" cy="28" rx="32" ry="23" fill="none" stroke="#245586" stroke-width="11"/>
    <ellipse cx="34" cy="28" rx="32" ry="23" fill="none" stroke="url(#blu)" stroke-width="7"/>
    <ellipse cx="34" cy="28" rx="32" ry="23" fill="none" stroke="#bfe0f5" stroke-width="2" opacity="0.7"/>
    <path d="M64 34 q22 4 30 0 q-6 8 4 12 q-8 4 4 10" fill="none" stroke="#4a5560" stroke-width="3"/>
    <rect x="104" y="52" width="16" height="12" rx="2" fill="url(#red)"/></g>`,
  microscope: ()=>`<g filter="url(#ds)" transform="translate(34 8)">
    <ellipse cx="46" cy="98" rx="40" ry="7" fill="#2b3542"/>
    <rect x="24" y="86" width="44" height="10" rx="4" fill="#3a4552"/>
    <path d="M40 84 q-16 -20 -6 -44 l14 4 q-8 20 4 38 z" fill="url(#mtlV)"/>
    <rect x="30" y="8" width="40" height="22" rx="7" fill="url(#blk)"/>
    <rect x="46" y="30" width="12" height="42" rx="3" fill="#232d38"/>
    <circle cx="52" cy="76" r="8" fill="#0d1219"/><circle cx="52" cy="76" r="4" fill="#3c4855"/>
    <rect x="34" y="12" width="30" height="5" rx="2" fill="#4a5766" opacity="0.7"/></g>`,
  adhesive: ()=>`<g filter="url(#ds)" transform="translate(32 22)">
    <circle cx="42" cy="42" r="36" fill="#2b3542"/><circle cx="42" cy="42" r="36" fill="url(#hl)" opacity="0.4"/>
    <circle cx="42" cy="42" r="30" fill="#3c4855"/>
    <circle cx="42" cy="42" r="15" fill="#eef2f7"/><circle cx="42" cy="42" r="15" fill="url(#hl)"/>
    <path d="M42 6 a36 36 0 0 1 32 19 l-15 7 a19 19 0 0 0 -17 -11 z" fill="url(#gold)"/></g>`,
  eartips: ()=>`<g filter="url(#ds)">${[['38','#2b3542','#0d1219'],['92','#C0392B','#7E1c14']].map(([x,col,dk],i)=>`<g transform="translate(${x} 34)"><path d="M0 0 q28 4 24 36 q-4 28 -24 28 q-20 0 -24 -28 q-4 -32 24 -36 z" fill="${col}" stroke="${dk}" stroke-width="1"/><ellipse cx="0" cy="8" rx="15" ry="9" fill="#00000044"/><path d="M-8 -2 q10 -4 20 2" stroke="#ffffff" stroke-width="2" opacity="0.35" fill="none"/></g>`).join('')}</g>`,
};

function toolPanel(title, subtitle, items){
  const W=900, cols=Math.min(items.length, 4);
  const rows=Math.ceil(items.length/cols);
  const headH=subtitle?76:56, cw=(W-2*24-(cols-1)*18)/cols, ch=170, gy=18;
  const H=headH+rows*(ch+gy)+8;
  let g=`<rect x="0" y="0" width="${W}" height="${H}" fill="${C.white}"/>`;
  g+=`<rect x="0" y="0" width="${W}" height="${headH-14}" fill="${C.head}"/>`;
  g+=`<text x="24" y="36" font-size="21" font-weight="800" fill="#fff">${esc(title)}</text>`;
  if(subtitle) g+=`<text x="24" y="58" font-size="13" fill="#CFE0F2">${esc(subtitle)}</text>`;
  items.forEach((it,i)=>{
    const r=Math.floor(i/cols), c=i%cols;
    const x=24+c*(cw+18), y=headH+r*(ch+gy);
    g+=`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="12" fill="${C.bgSoft}" stroke="${C.line}" stroke-width="1.4"/>`;
    const draw=(TOOL[it.tool]||TOOL.spudger)();
    const s=Math.min((cw-30)/150, 0.92);
    g+=`<g transform="translate(${x+(cw-150*s)/2} ${y+16}) scale(${s})">${draw}</g>`;
    g+=`<text x="${x+cw/2}" y="${y+ch-16}" font-size="14" font-weight="700" fill="${C.navy}" text-anchor="middle">${esc(it.label)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Helvetica Neue, Arial, sans-serif">${defs()}${g}</svg>`;
}

const M = {};
M.mt_outillage = ()=> toolPanel("L'outillage de base du réparateur","Le kit indispensable pour démarrer (niveau 1, sans soudure)",[
  {tool:'bits',label:"Tournevis de précision"},{tool:'suction',label:"Ventouse"},{tool:'picks',label:"Médiators"},{tool:'spudger',label:"Spudger"},
  {tool:'tweezers',label:"Pincette"},{tool:'prycard',label:"Carte d'ouverture"},{tool:'heatgun',label:"Source de chaleur"},{tool:'esd',label:"Bracelet antistatique"},
]);
M.mt_ecran_smartphone = ()=> toolPanel("Matériel — Remplacement d'écran","",[
  {tool:'heatgun',label:"Chaleur"},{tool:'suction',label:"Ventouse"},{tool:'picks',label:"Médiators"},{tool:'spudger',label:"Spudger"},
  {tool:'screwdriver',label:"Tournevis"},{tool:'tweezers',label:"Pincette"},{tool:'adhesive',label:"Adhésif neuf"},
]);
M.mt_batterie_smartphone = ()=> toolPanel("Matériel — Remplacement de batterie","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'spudger',label:"Spudger"},{tool:'tweezers',label:"Pincette"},
  {tool:'ipa',label:"Alcool IPA"},{tool:'adhesive',label:"Adhésif batterie"},{tool:'prycard',label:"Carte plastique"},
]);
M.mt_charge_smartphone = ()=> toolPanel("Matériel — Port de charge","",[
  {tool:'brush',label:"Brosse antistatique"},{tool:'ipa',label:"Alcool IPA"},{tool:'spudger',label:"Spudger"},{tool:'tweezers',label:"Pincette"},
]);
M.mt_eau_smartphone = ()=> toolPanel("Matériel — Désoxydation","",[
  {tool:'brush',label:"Brosse"},{tool:'ipa',label:"Alcool IPA 99%"},{tool:'tweezers',label:"Pincette"},{tool:'microscope',label:"Microscope"},
]);
M.mt_dalle_pc = ()=> toolPanel("Matériel — Dalle de PC portable","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'prycard',label:"Carte d'ouverture"},{tool:'picks',label:"Médiators"},{tool:'spudger',label:"Spudger"},
]);
M.mt_clavier_pc = ()=> toolPanel("Matériel — Clavier de PC portable","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'spudger',label:"Spudger"},{tool:'prycard',label:"Carte d'ouverture"},
]);
M.mt_batterie_pc = ()=> toolPanel("Matériel — Batterie de PC portable","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'spudger',label:"Spudger"},{tool:'esd',label:"Bracelet antistatique"},
]);
M.mt_stockage_pc = ()=> toolPanel("Matériel — SSD & RAM","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'ssd',label:"SSD"},{tool:'ram',label:"Barrette de RAM"},{tool:'esd',label:"Bracelet antistatique"},
]);
M.mt_thermique_pc = ()=> toolPanel("Matériel — Pâte thermique","",[
  {tool:'screwdriver',label:"Tournevis"},{tool:'paste',label:"Pâte thermique"},{tool:'brush',label:"Brosse"},{tool:'ipa',label:"Alcool IPA"},
]);
M.mt_ecran_tablette = ()=> toolPanel("Matériel — Écran de tablette","",[
  {tool:'heatgun',label:"Chaleur"},{tool:'suction',label:"Ventouse"},{tool:'picks',label:"Médiators"},{tool:'spudger',label:"Spudger"},{tool:'adhesive',label:"Adhésif neuf"},
]);
M.mt_montre = ()=> toolPanel("Matériel — Ouverture de smartwatch","",[
  {tool:'heatgun',label:"Chaleur"},{tool:'tweezers',label:"Pincette"},{tool:'spudger',label:"Spudger"},{tool:'adhesive',label:"Adhésif étanche"},
]);
M.mt_airpods_nettoyage = ()=> toolPanel("Matériel — Nettoyage d'écouteurs","",[
  {tool:'brush',label:"Brosse souple"},{tool:'ipa',label:"Alcool IPA"},{tool:'tweezers',label:"Pincette"},
]);
M.mt_airpods_embouts = ()=> toolPanel("Matériel — Embouts d'AirPods","",[
  {tool:'eartips',label:"Embouts silicone"},{tool:'brush',label:"Brosse"},{tool:'ipa',label:"Alcool IPA"},
]);

module.exports = M;
