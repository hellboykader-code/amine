// Panneaux "Matériel nécessaire" — illustrations d'outils dessinées par code (libres de droits).
const C = { navy:'#1F3A5F', blue:'#2E5E8C', ink:'#243342', grey:'#6B7684',
  line:'#D0D9E4', bgSoft:'#F4F7FB', head:'#2E5E8C', white:'#FFFFFF',
  red:'#C0392B', amber:'#E8A13A', green:'#27AE60' };
const S='#22405f';

function defs(){ return `<defs>
  <linearGradient id="mtl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EDF1F6"/><stop offset="0.5" stop-color="#BFC8D3"/><stop offset="1" stop-color="#8A95A2"/></linearGradient>
  <linearGradient id="mtlV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EDF1F6"/><stop offset="1" stop-color="#5A6470"/></linearGradient>
  <linearGradient id="red" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D65449"/><stop offset="1" stop-color="#A32B21"/></linearGradient>
  <linearGradient id="blu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5E9BD1"/><stop offset="1" stop-color="#2C6AA0"/></linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2.5" stdDeviation="3" flood-color="#1F3A5F" flood-opacity="0.28"/></filter>
</defs>`; }
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// tool drawings — centered in a 150x120 box
const TOOL = {
  screwdriver: ()=>`<g filter="url(#ds)" transform="translate(20 40) rotate(18)"><rect x="0" y="-13" width="60" height="26" rx="12" fill="url(#red)" stroke="#8a1f18" stroke-width="1.5"/><rect x="8" y="-8" width="40" height="4" rx="2" fill="#e58174" opacity="0.6"/><rect x="60" y="-4" width="64" height="8" rx="3" fill="url(#mtl)" stroke="#8A95A2"/><rect x="122" y="-5" width="12" height="10" fill="#8A95A2"/></g>`,
  bits: ()=>`<g filter="url(#ds)">${[0,1,2,3].map(i=>`<g transform="translate(${28+i*26} 24)"><rect x="0" y="0" width="14" height="56" rx="3" fill="url(#mtlV)" stroke="#8A95A2"/><rect x="2" y="56" width="10" height="16" fill="#3a4552"/></g>`).join('')}</g>`,
  suction: ()=>`<g filter="url(#ds)" transform="translate(75 66)"><ellipse cx="0" cy="26" rx="30" ry="10" fill="#8a1f18"/><path d="M-30 26 Q0 6 30 26 Q0 36 -30 26 Z" fill="url(#red)"/><rect x="-5" y="-40" width="10" height="66" rx="4" fill="url(#mtlV)" stroke="#5A6470"/><ellipse cx="0" cy="-40" rx="14" ry="6" fill="url(#mtl)" stroke="#5A6470"/></g>`,
  picks: ()=>`<g filter="url(#ds)">${[[-18,'#E8A13A'],[6,'#4A90C2'],[30,'#27AE60']].map(([r,col],i)=>`<path d="M${30+i*8} ${40+i*10} l70 -14 l-4 26 z" fill="${col}" stroke="#00000022" transform="rotate(${r} 75 60)"/>`).join('')}</g>`,
  spudger: ()=>`<g filter="url(#ds)" transform="translate(14 52) rotate(10)"><rect x="0" y="-6" width="110" height="12" rx="6" fill="#1e2a38"/><path d="M110 -6 q22 2 30 6 q-8 4 -30 6 Z" fill="#141b24"/><rect x="8" y="-3" width="80" height="3" rx="1.5" fill="#3a4a5c" opacity="0.6"/></g>`,
  tweezers: ()=>`<g filter="url(#ds)" transform="translate(20 30) rotate(8)"><path d="M0 0 L118 26" stroke="url(#mtl)" stroke-width="8" stroke-linecap="round"/><path d="M0 6 L118 44" stroke="url(#mtl)" stroke-width="8" stroke-linecap="round"/><circle cx="4" cy="3" r="6" fill="#5A6470"/></g>`,
  prycard: ()=>`<g filter="url(#ds)" transform="translate(30 34) rotate(-8)"><rect x="0" y="0" width="96" height="60" rx="8" fill="url(#blu)" stroke="#22537f" stroke-width="1.5"/><rect x="10" y="10" width="76" height="8" rx="4" fill="#ffffff" opacity="0.25"/></g>`,
  heatgun: ()=>`<g filter="url(#ds)" transform="translate(16 22)"><rect x="0" y="20" width="70" height="34" rx="10" fill="#3a4552"/><rect x="66" y="26" width="46" height="22" rx="8" fill="url(#mtlV)" stroke="#5A6470"/><rect x="18" y="54" width="24" height="34" rx="6" fill="#2b3542"/><g stroke="${C.amber}" stroke-width="3" stroke-linecap="round" opacity="0.9"><path d="M116 30 q10 -6 20 0"/><path d="M116 37 q10 6 20 0"/><path d="M116 44 q10 -6 20 0"/></g></g>`,
  multimeter: ()=>`<g filter="url(#ds)" transform="translate(38 18)"><rect x="0" y="0" width="74" height="88" rx="8" fill="#f0c33a" stroke="#b8901f" stroke-width="2"/><rect x="10" y="10" width="54" height="24" rx="4" fill="#12241b"/><text x="37" y="28" font-size="13" fill="#57d38a" text-anchor="middle" font-family="monospace">0.00</text><circle cx="37" cy="58" r="16" fill="#2b3542"/><circle cx="20" cy="82" r="4" fill="#c0392b"/><circle cx="54" cy="82" r="4" fill="#1e2a38"/></g>`,
  paste: ()=>`<g filter="url(#ds)" transform="translate(12 46) rotate(-6)"><rect x="0" y="-13" width="80" height="26" rx="8" fill="#e6ebf1" stroke="#8A95A2" stroke-width="1.5"/><rect x="8" y="-9" width="54" height="18" rx="5" fill="#9aa6b3" opacity="0.5"/><path d="M80 -6 l22 6 l-22 6 Z" fill="#8A95A2"/><rect x="-16" y="-9" width="16" height="18" rx="3" fill="${C.red}"/><circle cx="106" cy="0" r="5" fill="#7a8088"/></g>`,
  brush: ()=>`<g filter="url(#ds)" transform="translate(14 44) rotate(6)"><rect x="0" y="-7" width="86" height="14" rx="6" fill="#7a4a1c"/><rect x="82" y="-9" width="16" height="18" rx="3" fill="#8A95A2"/><path d="M98 -9 q26 4 30 9 q-30 5 -30 9 Z" fill="#2b2b2b"/></g>`,
  ipa: ()=>`<g filter="url(#ds)" transform="translate(52 18)"><rect x="0" y="0" width="46" height="86" rx="9" fill="#d7e6f2" opacity="0.9" stroke="#8A95A2" stroke-width="1.5"/><rect x="14" y="-14" width="18" height="18" rx="3" fill="#2b3542"/><rect x="6" y="34" width="34" height="30" rx="4" fill="#eef4fa"/><text x="23" y="54" font-size="12" fill="${C.navy}" text-anchor="middle" font-weight="800">IPA</text></g>`,
  ram: ()=>`<g filter="url(#ds)" transform="translate(6 42) rotate(-6)"><rect x="0" y="0" width="140" height="38" rx="4" fill="#0f5132"/>${[0,1,2,3].map(i=>`<rect x="${10+i*33}" y="7" width="26" height="24" rx="3" fill="#14251d"/>`).join('')}<g fill="${C.amber}">${[...Array(13)].map((_,i)=>`<rect x="${8+i*10}" y="34" width="6" height="6"/>`).join('')}</g></g>`,
  ssd: ()=>`<g filter="url(#ds)" transform="translate(12 36) rotate(-4)"><rect x="0" y="0" width="130" height="48" rx="6" fill="#1b3a5a"/><rect x="10" y="10" width="72" height="28" rx="4" fill="#0e2136"/><text x="46" y="29" font-size="12" fill="#7fb6e4" text-anchor="middle" font-weight="700">SSD</text><g fill="${C.amber}">${[...Array(8)].map((_,i)=>`<rect x="${90+i*5}" y="12" width="3" height="24"/>`).join('')}</g></g>`,
  esd: ()=>`<g filter="url(#ds)" transform="translate(20 34)"><ellipse cx="30" cy="26" rx="30" ry="22" fill="none" stroke="#2C6AA0" stroke-width="9"/><ellipse cx="30" cy="26" rx="30" ry="22" fill="none" stroke="#7FB6E4" stroke-width="3"/><path d="M56 34 q40 6 54 -6" stroke="#4a5560" stroke-width="3" fill="none"/><rect x="108" y="20" width="14" height="14" rx="2" fill="#c0392b"/></g>`,
  microscope: ()=>`<g filter="url(#ds)" transform="translate(38 12)"><rect x="10" y="86" width="70" height="10" rx="4" fill="#3a4552"/><rect x="40" y="20" width="12" height="60" fill="url(#mtlV)"/><rect x="20" y="10" width="46" height="20" rx="6" fill="#2b3542"/><rect x="40" y="30" width="12" height="40" fill="#2b3542"/><circle cx="46" cy="74" r="7" fill="#1e2a38"/></g>`,
  adhesive: ()=>`<g filter="url(#ds)" transform="translate(34 24)"><circle cx="40" cy="40" r="34" fill="#2b3542"/><circle cx="40" cy="40" r="14" fill="#f4f7fb"/><path d="M40 6 a34 34 0 0 1 30 18 l-14 6 a18 18 0 0 0 -16 -10 z" fill="${C.amber}"/></g>`,
  eartips: ()=>`<g filter="url(#ds)">${[[40,'#243342'],[92,'#C0392B']].map(([x,col],i)=>`<g transform="translate(${x} 40)"><path d="M0 0 q26 4 22 34 q-4 26 -22 26 q-18 0 -22 -26 q-4 -30 22 -34 Z" fill="${col}" opacity="0.92"/><ellipse cx="0" cy="6" rx="14" ry="8" fill="#00000033"/></g>`).join('')}<text x="75" y="100" font-size="12" fill="${C.grey}" text-anchor="middle">Tailles S · M · L</text></g>`,
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
