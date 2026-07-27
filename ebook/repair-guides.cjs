// Guides de réparation illustrés pas-à-pas (SVG). Pictogrammes au trait + étapes.
const C = { navy:'#1F3A5F', blue:'#2E5E8C', accent:'#C0392B', green:'#27AE60',
  amber:'#E8A13A', ink:'#243342', grey:'#6B7684', line:'#D0D9E4',
  bgSoft:'#F1F6FB', bgHead:'#1F3A5F', white:'#FFFFFF' };
const S = '#22405f', A = C.accent, GR = C.green, AM = C.amber;

// primitives (glyph coordinate box = 120 x 120)
const ln=(x1,y1,x2,y2,c=S,w=3.2,e='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${e}/>`;
const pth=(d,c=S,w=3.2,fill='none',e='')=>`<path d="${d}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${e}/>`;
const cir=(cx,cy,r,c=S,w=3.2,fill='none')=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${w}"/>`;
const rct=(x,y,w,h,r=8,c=S,sw=3.2,fill='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`;
const dot=(cx,cy,r,c=S)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
// arrow using inline marker path
const arr=(x1,y1,x2,y2,c=A,w=3.4)=>{
  const ang=Math.atan2(y2-y1,x2-x1), L=9;
  const a1=ang+Math.PI-0.5, a2=ang+Math.PI+0.5;
  return ln(x1,y1,x2,y2,c,w)+pth(`M${x2+L*Math.cos(a1)} ${y2+L*Math.sin(a1)} L${x2} ${y2} L${x2+L*Math.cos(a2)} ${y2+L*Math.sin(a2)}`,c,w);
};
const phone=(x=40,y=14,w=40,h=92)=>rct(x,y,w,h,9);
const waves=(x,y,c=A)=>pth(`M${x} ${y} q6 -8 12 0 q6 8 12 0`,c,3)+pth(`M${x} ${y-12} q6 -8 12 0 q6 8 12 0`,c,3)+pth(`M${x} ${y-24} q6 -8 12 0 q6 8 12 0`,c,3);

// -------- Pictogrammes --------
const GLYPH = {
  power: ()=> phone()+cir(60,58,14,A,3.2)+ln(60,47,60,58,A,3.2),
  sim: ()=> rct(34,52,52,26,5)+ln(78,52,86,44,S,3)+pth('M40 60 h30',S,3)+dot(84,42,3,A),
  heat: ()=> rct(30,74,60,26,6)+waves(46,64,A)+waves(66,64,A),
  suction: ()=> rct(34,20,52,80,8)+cir(60,50,14)+ln(60,50,60,34)+arr(60,40,60,16,A),
  pick: ()=> rct(34,20,52,80,8)+pth('M30 62 l22 -8 l-2 16 z',AM,2.6,AM)+pth('M28 62 q30 -6 60 0',A,2.6,'none','stroke-dasharray="4 4"'),
  disconnect: ()=> rct(24,52,72,40,6)+rct(40,60,26,16,3,A,3)+ln(78,44,66,60,S,3.2)+ln(72,40,84,50,S,3.2)+dot(60,86,3,S),
  battTab: ()=> rct(34,26,52,68,6)+ln(46,26,46,94)+ln(60,26,60,94)+ln(74,26,74,94)+pth('M60 26 l0 -12 l14 0',A,3)+arr(74,14,90,14,A),
  battLift: ()=> rct(34,34,52,60,6)+pth('M28 88 l64 -6',AM,3)+arr(40,84,34,64,A),
  adhesive: ()=> rct(34,30,52,60,6)+pth('M42 40 h36 M42 52 h36 M42 64 h36',GR,3,'none','stroke-dasharray="7 5"')+arr(60,104,60,92,GR),
  press: ()=> rct(34,34,52,66,8)+arr(48,20,48,32,S)+arr(72,20,72,32,S),
  test: ()=> phone()+pth('M50 58 l8 9 l16 -20',GR,4),
  cleanBrush: ()=> rct(30,66,60,20,5)+ln(30,76,44,76,S,3)+pth('M64 40 l14 26',S,3.4)+pth('M60 44 l8 -4 l6 10 l-8 4 z',AM,2.4,AM)+dot(50,60,2.4,A)+dot(58,54,2,A),
  inspectBoard: ()=> rct(24,40,64,52,6)+dot(40,56,3)+dot(56,56,3)+dot(72,56,3)+dot(40,74,3)+cir(70,74,13,A,3)+ln(79,83,92,96,A,4),
  ultrasonic: ()=> rct(28,44,64,48,6)+pth('M28 66 q8 -8 16 0 q8 8 16 0 q8 -8 16 0 q8 8 16 0',C.blue,3)+pth('M28 78 q8 -8 16 0 q8 8 16 0 q8 -8 16 0 q8 8 16 0',C.blue,3)+rct(44,30,32,20,4,S,3),
  dry: ()=> rct(40,20,40,84,8)+arr(90,44,102,44,C.blue)+arr(90,60,102,60,C.blue)+arr(90,76,102,76,C.blue),
  warnBatt: ()=> rct(30,40,52,52,6)+ln(56,28,32,88,A,3.4)+ln(56,28,84,88,A,3.4)+ln(32,88,84,88,A,3.4)+ln(58,50,58,70,A,3.4)+dot(58,80,3,A),
  laptopFlip: ()=> pth('M28 30 h64 v52 h-64 z',S,3.2)+dot(38,40,3)+dot(82,40,3)+dot(38,72,3)+dot(82,72,3)+dot(60,56,3,A),
  ram: ()=> rct(30,70,64,16,3)+pth('M40 68 l44 -30 l0 16 l-44 30 z',S,3.2)+arr(70,30,58,44,A)+ln(46,78,46,84)+ln(54,78,54,84)+ln(62,78,62,84),
  ssd: ()=> rct(30,44,60,44,5)+ln(30,66,90,66,S,2.4)+dot(44,56,2.6)+dot(44,78,2.6)+ln(30,52,24,52,A,4)+ln(30,60,24,60,A,4),
  paste: ()=> rct(38,50,44,44,6)+dot(60,72,7,A)+pth('M60 72 q18 -6 26 -20',S,3)+pth('M84 50 l8 4 l-6 8',S,3),
  fan: ()=> cir(58,60,26)+pth('M58 60 q-18 -6 -22 -22 q16 4 22 22',S,2.6)+pth('M58 60 q6 -18 22 -22 q-4 16 -22 22',S,2.6)+pth('M58 60 q18 6 22 22 q-16 -4 -22 -22',S,2.6)+arr(92,44,102,40,C.blue)+dot(90,78,2.4,C.grey)+dot(30,40,2.4,C.grey),
  bezel: ()=> pth('M26 26 h68 v56 h-68 z',S,3.2)+rct(34,34,52,40,3,C.line,2.4)+pth('M24 24 l10 4 M96 24 l-10 4 M24 84 l10 -4',AM,3),
  keyboard: ()=> rct(24,42,72,42,5)+[0,1,2].map(r=>[0,1,2,3,4].map(cc=>rct(30+cc*13,48+r*11,9,7,1.5,C.line,1.8)).join('')).join('')+pth('M78 30 l10 14',S,3.2),
  tabletHeat: ()=> rct(28,20,50,80,8)+waves(84,58,A)+waves(96,58,A),
  watchLift: ()=> rct(42,34,36,44,10)+pth('M50 34 l4 -16 h12 l4 16 M50 78 l4 16 h12 l4 -16',S,3)+arr(78,44,92,32,A),
  earMesh: ()=> pth('M46 34 a16 16 0 0 1 28 0 l-4 34 a10 10 0 0 1 -20 0 z',S,3.2)+ln(54,44,66,44,C.line,2.4)+ln(53,50,67,50,C.line,2.4)+ln(54,56,66,56,C.line,2.4)+pth('M74 30 l14 20',S,3)+pth('M70 34 l8 -4 l6 9 l-8 4 z',AM,2.2,AM),
  earTip: ()=> pth('M52 30 a14 14 0 0 1 24 0 l-3 26 a8 8 0 0 1 -18 0 z',S,3)+pth('M50 58 q14 10 28 0 l-2 22 q-12 8 -24 0 z',AM,3)+arr(64,96,64,84,A),
  reset: ()=> pth('M76 44 a22 22 0 1 0 6 20',S,3.4)+pth('M74 30 l4 16 l-16 -2',S,3.4)+cir(60,60,4,A,0,A),
  multimeter: ()=> rct(30,34,60,58,6)+rct(38,42,44,18,3,C.line,2.4)+dot(46,74,4)+dot(64,74,4)+ln(46,74,20,96,A,3)+ln(64,74,92,96,S,3),
};

// -------- Panneau d'étapes --------
function stepPanel(title, subtitle, steps){
  const W=900, cols=3, rows=Math.ceil(steps.length/cols);
  const mx=30, gx=18, gy=22, headH=subtitle?86:64;
  const usable=W-2*mx, cw=(usable-(cols-1)*gx)/cols, ch=232;
  const H = headH + rows*(ch+gy) + 12;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let g=`<rect x="0" y="0" width="${W}" height="${H}" fill="#FFFFFF"/>`;
  // header band
  g+=`<rect x="0" y="0" width="${W}" height="${headH-16}" fill="${C.bgHead}"/>`;
  g+=`<text x="30" y="40" font-size="22" font-weight="800" fill="#FFFFFF">${esc(title)}</text>`;
  if(subtitle) g+=`<text x="30" y="63" font-size="13" fill="#AFC7E6">${esc(subtitle)}</text>`;
  // steps
  steps.forEach((st,i)=>{
    const r=Math.floor(i/cols), c=i%cols;
    const x=mx+c*(cw+gx), y=headH+r*(ch+gy);
    g+=`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="12" fill="${C.bgSoft}" stroke="${C.line}" stroke-width="1.4"/>`;
    // number badge
    g+=`<circle cx="${x+30}" cy="${y+30}" r="17" fill="${i===steps.length-1?C.green:C.blue}"/>`;
    g+=`<text x="${x+30}" y="${y+37}" font-size="19" font-weight="800" fill="#FFFFFF" text-anchor="middle">${i+1}</text>`;
    // glyph area (centered), box 120 scaled
    const gs=1.15, gw=120*gs;
    const gx0=x+(cw-gw)/2, gy0=y+44;
    const glyph = (GLYPH[st.g]||GLYPH.press)();
    g+=`<g transform="translate(${gx0} ${gy0}) scale(${gs})">${glyph}</g>`;
    // caption
    const capY=y+44+120*gs+18;
    const lines=Array.isArray(st.t)?st.t:[st.t];
    g+=`<text x="${x+cw/2}" y="${capY}" font-size="12.6" fill="${C.ink}" text-anchor="middle" font-weight="600">`+
       lines.map((l,k)=>`<tspan x="${x+cw/2}" dy="${k===0?0:15}">${esc(l)}</tspan>`).join('')+`</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Helvetica Neue, Arial, sans-serif">${g}</svg>`;
}

// -------- Les guides --------
const G = {};

G.g_ecran_smartphone = ()=> stepPanel("Remplacer un écran de smartphone","Niveau 1 · sans soudure — outils : tournevis, ventouse, médiators, chaleur",[
  {g:'power', t:["Éteindre l'appareil","et retirer le tiroir SIM"]},
  {g:'heat',  t:["Chauffer le pourtour","pour ramollir la colle"]},
  {g:'suction',t:["Ventouse + médiator :","créer un interstice"]},
  {g:'pick',  t:["Glisser le médiator","tout autour, sans forcer"]},
  {g:'disconnect',t:["Débrancher la batterie","PUIS les nappes d'écran"]},
  {g:'inspectBoard',t:["Transférer capteurs /","support sur l'écran neuf"]},
  {g:'test',  t:["Tester AVANT de coller","(affichage + tactile)"]},
  {g:'adhesive',t:["Adhésif neuf, remonter","et re-tester"]},
]);

G.g_batterie_smartphone = ()=> stepPanel("Remplacer une batterie de smartphone","Niveau 1 — Attention : ne jamais plier ni percer la batterie",[
  {g:'heat', t:["Ouvrir (chaleur + médiator)","selon le modèle"]},
  {g:'disconnect',t:["Débrancher le connecteur","de batterie en premier"]},
  {g:'battTab',t:["Tirer lentement, à plat,","les languettes d'adhésif"]},
  {g:'battLift',t:["Si rupture : chaleur douce","+ carte plastique (pas de métal)"]},
  {g:'adhesive',t:["Poser batterie + adhésif","neufs, rebrancher"]},
  {g:'test', t:["Tester charge & % ,","puis remonter"]},
]);

G.g_charge_smartphone = ()=> stepPanel("Port de charge : nettoyer & remplacer","Réflexe : tester câble/chargeur/prise avant tout",[
  {g:'cleanBrush',t:["Nettoyer le port (peluches)","à l'outil non métallique"]},
  {g:'inspectBoard',t:["Inspecter : broches pliées,","corrodées ?"]},
  {g:'heat',t:["Ouvrir et débrancher","la batterie"]},
  {g:'disconnect',t:["Connecteur sur nappe →","remplacer la nappe (simple)"]},
  {g:'test',t:["Connecteur soudé → micro-","soudure. Puis tester la charge"]},
]);

G.g_eau_smartphone = ()=> stepPanel("Dégâts des eaux : désoxydation","Urgence : plus on attend, plus la corrosion progresse",[
  {g:'warnBatt',t:["NE PAS charger ni allumer","l'appareil mouillé"]},
  {g:'disconnect',t:["Ouvrir vite, débrancher","la batterie"]},
  {g:'ultrasonic',t:["Nettoyer la carte (ultrasons","ou IPA 99 % + brosse)"]},
  {g:'dry',t:["Sécher entièrement","(air comprimé, chaleur douce)"]},
  {g:'inspectBoard',t:["Inspecter au microscope :","corrosion, composants HS"]},
  {g:'test',t:["Remonter et tester","fonction par fonction"]},
]);

G.g_dalle_pc = ()=> stepPanel("PC portable : remplacer la dalle","Identifier d'abord la référence exacte de la dalle",[
  {g:'test',t:["Confirmer : test écran","externe (dalle vs GPU)"]},
  {g:'bezel',t:["Déclipser / décoller","le cadre (bezel)"]},
  {g:'multimeter',t:["Débrancher la batterie","interne"]},
  {g:'disconnect',t:["Déconnecter la nappe eDP","à l'arrière de la dalle"]},
  {g:'bezel',t:["Poser la dalle neuve,","rebrancher la nappe"]},
  {g:'test',t:["Tester l'affichage","puis remonter le cadre"]},
]);

G.g_clavier_pc = ()=> stepPanel("PC portable : remplacer le clavier","Souvent maintenu par nappe + clips ou rivets",[
  {g:'laptopFlip',t:["Ouvrir le capot,","débrancher la batterie"]},
  {g:'keyboard',t:["Déclipser le clavier","(clips / vis selon modèle)"]},
  {g:'disconnect',t:["Déconnecter la nappe","du clavier"]},
  {g:'keyboard',t:["Poser le clavier neuf,","rebrancher la nappe"]},
  {g:'test',t:["Tester toutes les touches","avant remontage"]},
]);

G.g_batterie_pc = ()=> stepPanel("PC portable : remplacer la batterie","Gonflement fréquent — manipulation lithium prudente",[
  {g:'laptopFlip',t:["Retirer le capot inférieur","(vis de longueurs variées)"]},
  {g:'disconnect',t:["Débrancher le connecteur","de batterie"]},
  {g:'multimeter',t:["Dévisser la batterie","de son logement"]},
  {g:'adhesive',t:["Poser la batterie neuve,","revisser, rebrancher"]},
  {g:'test',t:["Tester la charge","et le niveau"]},
]);

G.g_stockage_pc = ()=> stepPanel("PC portable : SSD & RAM","HDD → SSD = le plus grand gain de performance",[
  {g:'laptopFlip',t:["Ouvrir, débrancher","la batterie"]},
  {g:'ssd',t:["Remplacer le disque","(SATA / NVMe)"]},
  {g:'ram',t:["Ajouter / changer la RAM","(vérifier type & fréquence)"]},
  {g:'press',t:["Bien enficher et","clipser les modules"]},
  {g:'test',t:["Réinstaller l'OS / cloner,","puis tester"]},
]);

G.g_thermique_pc = ()=> stepPanel("PC portable : pâte thermique & nettoyage","Réparation facile et à forte valeur (surchauffe / lenteur)",[
  {g:'laptopFlip',t:["Ouvrir, débrancher","la batterie"]},
  {g:'fan',t:["Dépoussiérer ventilateur","et radiateur"]},
  {g:'inspectBoard',t:["Retirer l'ancienne pâte","(IPA + chiffon non pelucheux)"]},
  {g:'paste',t:["Appliquer une fine couche","de pâte neuve sur le die"]},
  {g:'press',t:["Remonter le dissipateur","(vis en croix, régulier)"]},
  {g:'test',t:["Tester les températures","en charge"]},
]);

G.g_ecran_tablette = ()=> stepPanel("Tablette (iPad) : ouvrir & écran","Verre très collé — chauffer longuement, risque de casse",[
  {g:'tabletHeat',t:["Chauffer longuement et","uniformément le pourtour"]},
  {g:'pick',t:["Découper l'adhésif tout","autour, très prudemment"]},
  {g:'disconnect',t:["Débrancher la batterie","puis les nappes"]},
  {g:'inspectBoard',t:["Conserver le bouton Home","d'origine (Touch ID)"]},
  {g:'adhesive',t:["Vitre/écran neufs +","adhésif périmétrique neuf"]},
  {g:'test',t:["Tester affichage + tactile","avant fermeture"]},
]);

G.g_montre = ()=> stepPanel("Apple Watch : ouvrir & batterie","Nappes ultrafines et fragiles — étanchéité à refaire",[
  {g:'watchLift',t:["Chauffer, soulever l'écran","par un coin (très doucement)"]},
  {g:'disconnect',t:["Déconnecter les nappes","écran / Force Touch"]},
  {g:'battLift',t:["Retirer la batterie collée","(précautions lithium)"]},
  {g:'adhesive',t:["Batterie neuve + adhésif","d'étanchéité neuf"]},
  {g:'test',t:["Tester écran, tactile,","charge — puis fermer"]},
]);

G.g_airpods_nettoyage = ()=> stepPanel("AirPods : nettoyage des grilles","Cause n°1 d'un écouteur « moins fort » — rapide & rentable",[
  {g:'earMesh',t:["Repérer le cérumen dans","les grilles / le micro"]},
  {g:'cleanBrush',t:["Brosser doucement","(brosse souple sèche)"]},
  {g:'reset',t:["Extraire les résidus à la","pâte adhésive (blu-tack)"]},
  {g:'dry',t:["Un peu d'IPA, laisser","sécher complètement"]},
  {g:'test',t:["Tester le son des","deux écouteurs"]},
]);

G.g_airpods_embouts = ()=> stepPanel("AirPods Pro : embouts & reset","Beaucoup de plaintes « son/ANC » = mauvais embout ou appairage",[
  {g:'earTip',t:["Retirer l'embout usé","(tirer bien droit)"]},
  {g:'earTip',t:["Poser l'embout neuf à la","bonne taille (test d'ajustement)"]},
  {g:'reset',t:["Reset dans l'étui + ré-","appairage au téléphone"]},
  {g:'test',t:["Vérifier son, ANC","et charge de l'étui"]},
]);

module.exports = G;
