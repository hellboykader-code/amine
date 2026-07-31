// Guides illustrés pas-à-pas pour l'ebook Flashage & Déblocage.
const C = { navy:'#1F3A5F', blue:'#2E5E8C', accent:'#C0392B', green:'#27AE60',
  amber:'#E8A13A', ink:'#243342', grey:'#6B7684', line:'#D0D9E4',
  bgSoft:'#F1F6FB', head:'#1F3A5F' };
const S='#22405f', A=C.accent, GR=C.green, AM=C.amber, BL='#2E5E8C';

const ln=(x1,y1,x2,y2,c=S,w=3.2,e='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${e}/>`;
const pth=(d,c=S,w=3.2,fill='none',e='')=>`<path d="${d}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${e}/>`;
const cir=(cx,cy,r,c=S,w=3.2,fill='none')=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${w}"/>`;
const rct=(x,y,w,h,r=8,c=S,sw=3.2,fill='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`;
const dot=(cx,cy,r,c=S)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
const arr=(x1,y1,x2,y2,c=A,w=3.4)=>{const ang=Math.atan2(y2-y1,x2-x1),L=9,a1=ang+Math.PI-0.5,a2=ang+Math.PI+0.5;return ln(x1,y1,x2,y2,c,w)+pth(`M${x2+L*Math.cos(a1)} ${y2+L*Math.sin(a1)} L${x2} ${y2} L${x2+L*Math.cos(a2)} ${y2+L*Math.sin(a2)}`,c,w);};
const phone=(x=40,y=14,w=40,h=92)=>rct(x,y,w,h,9);
const laptop=(x=18,y=40)=>rct(x,y,64,40,4)+pth(`M${x-8} ${y+44} h80 l-6 8 h-68 z`,S,3,'#e9eef4');

const GLYPH = {
  backup: ()=> pth('M40 54 q-18 0 -18 -16 q0 -14 16 -14 q2 -14 18 -14 q16 0 18 16 q14 0 14 14 q0 14 -16 14',S,3)+arr(60,50,60,86,GR)+ln(48,74,60,86,GR,3.4)+ln(72,74,60,86,GR,3.4),
  identify: ()=> phone()+rct(48,34,44,52,6,S,3)+dot(56,50,3)+dot(66,50,3)+dot(76,50,3)+cir(72,66,12,A,3)+ln(81,75,94,90,A,4),
  buttons: ()=> phone()+rct(30,44,8,18,3,A,3)+rct(82,40,8,14,3,A,3)+arr(24,52,32,52,A)+arr(96,46,88,46,A),
  downloadMode: ()=> phone()+pth('M60 40 l16 30 h-32 z',AM,3.2)+ln(60,52,60,62,AM,3)+dot(60,68,2.4,AM),
  phonePc: ()=> laptop(10,34)+phone(96,26,30,64)+ln(74,58,96,58,BL,3,'stroke-dasharray="4 4"')+rct(90,54,8,8,2,S,2.4),
  software: ()=> laptop(12,30)+rct(20,36,52,30,3,'#8A95A2',2,'#ffffff')+ln(20,45,72,45,C.line,2)+rct(26,52,40,7,2,'#d3dbe4',0,'#d3dbe4')+rct(26,52,22,7,2,GR,0,GR),
  firmwareFile: ()=> pth('M40 20 h30 l16 16 v64 h-46 z',S,3.2,'#fff')+pth('M70 20 v16 h16',S,3.2)+rct(46,58,34,22,3,BL,2.6)+dot(52,69,2.4,BL)+dot(60,69,2.4,BL)+dot(68,69,2.4,BL),
  flashProgress: ()=> rct(24,50,72,20,10)+rct(28,54,40,12,6,GR,0,GR)+dot(0,0,0)+`<text x="60" y="92" font-size="15" fill="${C.grey}" text-anchor="middle" font-weight="700">45%</text>`,
  rebootCheck: ()=> phone()+pth('M50 58 l8 9 l16 -20',GR,4),
  dfu: ()=> phone()+rct(30,44,8,18,3,A,3)+rct(82,40,8,14,3,A,3)+cir(60,58,14,S,3)+pth('M60 50 v8 l6 4',S,3),
  finder: ()=> rct(16,26,88,58,6)+ln(16,40,104,40,S,2.4)+dot(26,33,2.4,A)+dot(34,33,2.4,AM)+dot(42,33,2.4,GR)+rct(40,54,40,16,4,BL,0,BL)+`<text x="60" y="66" font-size="10" fill="#fff" text-anchor="middle" font-weight="700">Restaurer</text>`,
  simCard: ()=> pth('M34 24 h40 l14 14 v58 h-54 z',S,3.2,'#fff')+pth('M34 24 l0 14 l-0 0',S,0)+rct(46,44,32,26,4,AM,2.6)+ln(62,44,62,70,S,1.8)+ln(46,57,78,57,S,1.8),
  imeiDoc: ()=> pth('M34 16 h44 v80 h-44 z',S,3.2,'#fff')+ln(42,34,70,34,C.grey,2.6)+ln(42,44,70,44,C.grey,2.6)+ln(42,54,62,54,C.grey,2.6)+cir(66,74,12,GR,3)+pth('M60 74 l4 5 l8 -10',GR,3),
  unlockCode: ()=> pth('M44 46 v-8 a16 16 0 0 1 32 0',S,3.2)+rct(38,46,44,40,6,S,3)+dot(60,64,4,A)+ln(60,64,60,74,A,3)+[0,1,2].map(r=>[0,1,2].map(cc=>dot(46+cc*14,58+r*0,0)).join('')).join(''),
};

function stepPanel(title, subtitle, steps){
  const W=900, cols=3, rows=Math.ceil(steps.length/cols);
  const mx=30, gx=18, gy=22, headH=subtitle?86:64, cw=(W-2*mx-(cols-1)*gx)/cols, ch=232;
  const H=headH+rows*(ch+gy)+12;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
  let g=`<rect width="${W}" height="${H}" fill="#fff"/><rect width="${W}" height="${headH-16}" fill="${C.head}"/>`;
  g+=`<text x="30" y="40" font-size="22" font-weight="800" fill="#fff">${esc(title)}</text>`;
  if(subtitle) g+=`<text x="30" y="63" font-size="13" fill="#AFC7E6">${esc(subtitle)}</text>`;
  steps.forEach((st,i)=>{
    const r=Math.floor(i/cols), c=i%cols, x=mx+c*(cw+gx), y=headH+r*(ch+gy);
    g+=`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="12" fill="${C.bgSoft}" stroke="${C.line}" stroke-width="1.4"/>`;
    g+=`<circle cx="${x+30}" cy="${y+30}" r="17" fill="${i===steps.length-1?C.green:C.blue}"/>`;
    g+=`<text x="${x+30}" y="${y+37}" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">${i+1}</text>`;
    const gs=1.15, gx0=x+(cw-120*gs)/2, gy0=y+44;
    g+=`<g transform="translate(${gx0} ${gy0}) scale(${gs})">${(GLYPH[st.g]||GLYPH.rebootCheck)()}</g>`;
    const capY=y+44+120*gs+18, lines=Array.isArray(st.t)?st.t:[st.t];
    g+=`<text x="${x+cw/2}" y="${capY}" font-size="12.6" fill="${C.ink}" text-anchor="middle" font-weight="600">`+lines.map((l,k)=>`<tspan x="${x+cw/2}" dy="${k===0?0:15}">${esc(l)}</tspan>`).join('')+`</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Helvetica Neue, Arial, sans-serif">${g}</svg>`;
}

const G = {};
G.fg_odin = ()=> stepPanel("Flasher un Samsung — mode Download & Odin","Firmware OFFICIEL uniquement · ne jamais débrancher pendant le flash",[
  {g:'backup', t:["Sauvegarder les données","du client"]},
  {g:'identify', t:["Identifier le modèle exact","+ firmware officiel"]},
  {g:'buttons', t:["Entrer en mode Download","(combinaison de touches)"]},
  {g:'phonePc', t:["Brancher au PC","(pilotes installés)"]},
  {g:'software', t:["Charger le firmware","dans Odin"]},
  {g:'flashProgress', t:["Lancer le flash","sans débrancher"]},
  {g:'rebootCheck', t:["Vérifier le démarrage","et le réseau"]},
]);
G.fg_iphone = ()=> stepPanel("Restaurer un iPhone — Recovery / DFU","Restauration officielle via Finder / iTunes (IPSW signé)",[
  {g:'backup', t:["Sauvegarder si l'appareil","est encore accessible"]},
  {g:'phonePc', t:["Brancher l'iPhone","à l'ordinateur"]},
  {g:'dfu', t:["Entrer en mode Recovery","ou DFU"]},
  {g:'finder', t:["Finder/iTunes →","« Restaurer »"]},
  {g:'flashProgress', t:["Laisser l'opération","se terminer"]},
  {g:'rebootCheck', t:["Reconfigurer (compte","d'origine si demandé)"]},
]);
G.fg_fastboot = ()=> stepPanel("Flasher en Fastboot (Android)","Images d'usine officielles du constructeur",[
  {g:'backup', t:["Sauvegarder les données"]},
  {g:'buttons', t:["Redémarrer en mode","bootloader / fastboot"]},
  {g:'phonePc', t:["Brancher + vérifier","la détection"]},
  {g:'firmwareFile', t:["Images d'usine","officielles"]},
  {g:'flashProgress', t:["Flasher (script officiel)","sans interrompre"]},
  {g:'rebootCheck', t:["Redémarrer et vérifier"]},
]);
G.fg_deblocage = ()=> stepPanel("Déblocage réseau légal (désimlockage)","Uniquement sur preuve de propriété — voies officielles",[
  {g:'imeiDoc', t:["Vérifier la preuve","de propriété"]},
  {g:'identify', t:["Relever l'IMEI","de l'appareil"]},
  {g:'unlockCode', t:["Obtenir le code (opérateur","ou service officiel)"]},
  {g:'simCard', t:["Insérer une SIM d'un autre","opérateur + saisir le code"]},
  {g:'rebootCheck', t:["Vérifier que le réseau","fonctionne"]},
]);
G.fg_bootloop = ()=> stepPanel("Sortir un appareil d'un bootloop","Restauration logicielle avec le bon firmware officiel",[
  {g:'buttons', t:["Entrer en Recovery /","Download / Fastboot"]},
  {g:'identify', t:["Identifier le bon","firmware officiel"]},
  {g:'software', t:["Restaurer via l'outil","adapté"]},
  {g:'flashProgress', t:["Laisser le flash","se terminer"]},
  {g:'rebootCheck', t:["Vérifier un démarrage","stable"]},
]);

module.exports = G;
