// Schémas vectoriels originaux pour l'ebook (SVG string builders).
// Palette cohérente avec la charte de l'ebook.
const C = {
  navy:'#1F3A5F', blue:'#2E5E8C', sky:'#4A90C2', accent:'#C0392B',
  green:'#27AE60', amber:'#E8A13A', ink:'#243342', grey:'#6B7684',
  line:'#D0D9E4', bgSoft:'#EAF2FB', bgGreen:'#EAF7EE', bgRed:'#FDECEA',
  bgAmber:'#FCF3E4', white:'#FFFFFF', panel:'#F4F7FB'
};
const F = "font-family:'Helvetica Neue',Arial,sans-serif";

// Common defs: arrow markers + soft shadow
function defs(){
  return `<defs>
    <marker id="arr" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L7,3 L0,6 Z" fill="${C.blue}"/>
    </marker>
    <marker id="arrG" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L7,3 L0,6 Z" fill="${C.green}"/>
    </marker>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.2" flood-color="#1F3A5F" flood-opacity="0.16"/>
    </filter>
  </defs>`;
}
function svg(w,h,inner){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Helvetica Neue, Arial, sans-serif">${defs()}<rect x="0" y="0" width="${w}" height="${h}" fill="${C.white}"/>${inner}</svg>`;
}
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function box(x,y,w,h,fill,stroke,r=10){
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke?` stroke="${stroke}" stroke-width="1.5"`:''} filter="url(#sh)"/>`;
}
function txt(x,y,s,{size=15,color=C.ink,weight=400,anchor='start',italic=false}={}){
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}"${italic?' font-style="italic"':''}>${esc(s)}</text>`;
}
// wrap long text into tspans
function multi(x,y,lines,{size=13,color=C.ink,weight=400,anchor='start',lh=17}={}){
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">`+
    lines.map((l,i)=>`<tspan x="${x}" dy="${i===0?0:lh}">${esc(l)}</tspan>`).join('')+`</text>`;
}

const D = {};

// 1) Les 3 niveaux de réparation ------------------------------------------
D.niveaux = () => {
  const w=900,h=430; let g='';
  g+=txt(w/2,42,"Les 3 niveaux d'intervention",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const rows=[
    {y:90 ,bw:820,fill:C.bgSoft ,bar:C.sky   ,n:'1',t:"Remplacement de modules (sans soudure)",d:"Écran, batterie, connecteurs sur nappe — 80 à 90 % de l'activité. Point de départ de tous."},
    {y:200,bw:640,fill:C.bgAmber,bar:C.amber ,n:'2',t:"Micro-soudure de composants",d:"Réparation de la carte mère : connecteurs soudés, puces de charge, pistes. Marges élevées."},
    {y:310,bw:460,fill:C.bgRed  ,bar:C.accent,n:'3',t:"Reballing & reprogrammation",d:"BGA, EEPROM, récupération NAND. Très spécialisé, clientèle souvent inter-pro."}
  ];
  for(const r of rows){
    const x=(w-r.bw)/2;
    g+=box(x,r.y,r.bw,86,r.fill,null,12);
    g+=`<rect x="${x}" y="${r.y}" width="10" height="86" rx="5" fill="${r.bar}"/>`;
    g+=`<circle cx="${x+52}" cy="${r.y+43}" r="26" fill="${r.bar}"/>`;
    g+=txt(x+52,r.y+52,r.n,{size:30,weight:800,color:C.white,anchor:'middle'});
    g+=txt(x+92,r.y+34,r.t,{size:16,weight:700,color:C.navy});
    g+=multi(x+92,r.y+56,[r.d],{size:12.5,color:C.grey,lh:15});
  }
  g+=txt(w/2,410,"Marge et rareté croissantes  →  vers le haut de la chaîne de valeur",{size:12.5,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

// 2) Anatomie d'un smartphone ----------------------------------------------
D.smartphone = () => {
  const w=900,h=470; let g='';
  g+=txt(40,42,"Anatomie d'un smartphone",{size:22,weight:700,color:C.navy});
  // phone stack (exploded layers) on left
  const px=90, py=90, pw=180, ph=330;
  const layers=[
    {dy:0  ,fill:'#DCE7F2',label:"Vitre + tactile (digitizer)"},
    {dy:14 ,fill:'#C7DAEC',label:"Dalle OLED / LCD"},
    {dy:28 ,fill:'#B0C9E2',label:"Châssis / mid-frame"},
    {dy:42 ,fill:'#9BBBD9',label:"Carte mère (logic board)"},
    {dy:56 ,fill:'#86AACF',label:"Batterie Li-ion"},
    {dy:70 ,fill:'#6E97C0',label:"Face arrière"}
  ];
  layers.forEach((l,i)=>{
    const y=py+i*46+l.dy*0; const yy=py+i*46;
    g+=`<rect x="${px}" y="${yy}" width="${pw}" height="34" rx="8" fill="${l.fill}" stroke="${C.blue}" stroke-width="1" filter="url(#sh)"/>`;
    g+=`<line x1="${px+pw}" y1="${yy+17}" x2="${px+pw+40}" y2="${yy+17}" stroke="${C.line}" stroke-width="1.4"/>`;
    g+=`<circle cx="${px+pw+40}" cy="${yy+17}" r="3" fill="${C.blue}"/>`;
    g+=txt(px+pw+50,yy+22,l.label,{size:13.5,weight:600,color:C.ink});
  });
  // right column: key components list
  const rx=560, ry=96;
  g+=txt(rx,ry,"Modules reliés par nappes (FPC)",{size:15,weight:700,color:C.blue});
  const comps=["Caméras avant / arrière","Haut-parleur d'oreille + HP principal","Micros (bas, haut, arrière)","Connecteur de charge","Boutons & capteurs (proximité, lumière)","Face ID / lecteur d'empreinte","Moteur de vibration (Taptic)"];
  comps.forEach((c,i)=>{
    const y=ry+34+i*40;
    g+=box(rx,y-20,300,32,C.panel,C.line,8);
    g+=`<circle cx="${rx+18}" cy="${y-4}" r="5" fill="${C.accent}"/>`;
    g+=txt(rx+34,y,c,{size:13,weight:600,color:C.ink});
  });
  return svg(w,h,g);
};

// 3) Méthode de diagnostic en 7 étapes -------------------------------------
D.diagnostic = () => {
  const w=900,h=430; let g='';
  g+=txt(w/2,40,"La méthode de diagnostic en 7 étapes",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const steps=[
    ["1","Historique","Interroger le client : chute ? liquide ?"],
    ["2","Inspection","Visuel avant / après ouverture"],
    ["3","Reproduire","Constater le symptôme soi-même"],
    ["4","Hypothèses","Du plus probable au plus rare"],
    ["5","Tester","Isoler : une variable à la fois"],
    ["6","Réparer","La cause, pas le symptôme"],
    ["7","Valider","Tester TOUTES les fonctions"]
  ];
  const cols=4, cw=200, ch=96, gapx=16, gapy=34;
  const startx=(w-(cols*cw+(cols-1)*gapx))/2, starty=76;
  steps.forEach((s,i)=>{
    const row=Math.floor(i/cols), col=i%cols;
    const realCol = row%2===0 ? col : (cols-1-col); // serpentine
    const x=startx+realCol*(cw+gapx), y=starty+row*(ch+gapy);
    const fill = i===6?C.bgGreen:C.bgSoft, bar=i===6?C.green:C.blue;
    g+=box(x,y,cw,ch,fill,null,12);
    g+=`<circle cx="${x+30}" cy="${y+30}" r="19" fill="${bar}"/>`;
    g+=txt(x+30,y+37,s[0],{size:21,weight:800,color:C.white,anchor:'middle'});
    g+=txt(x+58,y+30,s[1],{size:15.5,weight:700,color:C.navy});
    g+=multi(x+16,y+62,[s[2]],{size:11.5,color:C.grey,lh:14});
    // arrow to next (within row)
  });
  // connective arrows (serpentine)
  const yA=starty+30, yB=starty+ch+gapy+30;
  // row1 left->right between boxes
  for(let c=0;c<cols-1;c++){const x1=startx+c*(cw+gapx)+cw;const x2=x1+gapx;g+=`<line x1="${x1}" y1="${yA}" x2="${x2-3}" y2="${yA}" stroke="${C.blue}" stroke-width="2" marker-end="url(#arr)"/>`;}
  // down on right
  g+=`<line x1="${startx+3*(cw+gapx)+cw/2}" y1="${starty+ch}" x2="${startx+3*(cw+gapx)+cw/2}" y2="${starty+ch+gapy-3}" stroke="${C.blue}" stroke-width="2" marker-end="url(#arr)"/>`;
  // row2 right->left
  for(let c=cols-1;c>0;c--){const x1=startx+c*(cw+gapx);const x2=startx+(c-1)*(cw+gapx)+cw;g+=`<line x1="${x1}" y1="${yB}" x2="${x2+gapx+3}" y2="${yB}" stroke="${C.blue}" stroke-width="2" marker-end="url(#arr)" transform="rotate(180 ${(x1+x2+gapx)/2} ${yB})"/>`;}
  return svg(w,h,g);
};

// 4) Court-circuit vs circuit ouvert ---------------------------------------
D.shortopen = () => {
  const w=900,h=380; let g='';
  g+=txt(w/2,40,"Les deux ennemis : court-circuit & circuit ouvert",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const OW=360, OH=250, OY=74;
  function circuit(ox,title,fill,bar,mode){
    let s=box(ox,OY,OW,OH,fill,null,14);
    s+=`<rect x="${ox}" y="${OY}" width="${OW}" height="40" rx="14" fill="${bar}"/>`;
    s+=`<rect x="${ox}" y="${OY+26}" width="${OW}" height="14" fill="${bar}"/>`;
    s+=txt(ox+OW/2,OY+27,title,{size:15.5,weight:800,color:C.white,anchor:'middle'});
    // circuit geometry
    const topY=OY+80, botY=OY+170, L=ox+70, R=ox+290, mid=ox+180;
    const by=(topY+botY)/2;
    // battery on left side
    s+=txt(ox+40,by+5,"+",{size:20,weight:800,color:C.ink});
    s+=`<line x1="${L-12}" y1="${by-16}" x2="${L-12}" y2="${by+16}" stroke="${C.ink}" stroke-width="3"/>`;
    s+=`<line x1="${L}" y1="${by-9}" x2="${L}" y2="${by+9}" stroke="${C.ink}" stroke-width="3"/>`;
    // top wire + right side
    s+=`<path d="M${L} ${by-16} L${L} ${topY} L${R} ${topY} L${R} ${botY}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
    if(mode==='short'){
      // bottom wire from right to mid, then red short up to top
      s+=`<path d="M${R} ${botY} L${mid} ${botY}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
      s+=`<path d="M${mid} ${topY} L${mid} ${botY} L${L} ${botY} L${L} ${by+16}" fill="none" stroke="${C.accent}" stroke-width="3.5"/>`;
      s+=`<circle cx="${mid}" cy="${botY}" r="7" fill="${C.accent}"/>`;
      s+=txt(mid+16,botY-8,"→ chauffe",{size:12.5,weight:700,color:C.accent});
      s+=txt(ox+OW/2,OY+OH-22,"Résistance ≈ 0 Ω vers la masse",{size:13,weight:700,color:C.accent,anchor:'middle'});
    } else {
      // bottom wire with a gap in the middle
      s+=`<path d="M${R} ${botY} L${mid+30} ${botY}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
      s+=`<path d="M${L} ${by+16} L${L} ${botY} L${mid-30} ${botY}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
      s+=`<line x1="${mid-30}" y1="${botY-11}" x2="${mid-30}" y2="${botY+11}" stroke="${C.grey}" stroke-width="2.5"/>`;
      s+=`<line x1="${mid+30}" y1="${botY-11}" x2="${mid+30}" y2="${botY+11}" stroke="${C.grey}" stroke-width="2.5"/>`;
      s+=txt(mid,botY+30,"coupure",{size:12.5,weight:700,color:C.grey,anchor:'middle'});
      s+=txt(ox+OW/2,OY+OH-22,"Continuité perdue (résistance ∞)",{size:13,weight:700,color:C.grey,anchor:'middle'});
    }
    return s;
  }
  g+=circuit(70,"Court-circuit (short)",C.bgRed,C.accent,'short');
  g+=circuit(470,"Circuit ouvert (open)",C.panel,C.grey,'open');
  g+=txt(w/2,356,"90 % des pannes matérielles se ramènent à l'une de ces deux situations — à mesurer au multimètre.",{size:12.5,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

// 5) Arbre de décision « ne charge pas » -----------------------------------
D.charge = () => {
  const w=900,h=470; let g='';
  g+=txt(w/2,40,"« Ne charge pas » — arbre de décision",{size:22,weight:700,color:C.navy,anchor:'middle'});
  function node(x,y,wd,label,fill,bar){g2='';return box(x,y,wd,50,fill,null,10)+`<rect x="${x}" y="${y}" width="8" height="50" rx="4" fill="${bar}"/>`+multi(x+22,y+22,Array.isArray(label)?label:[label],{size:13,weight:600,color:C.ink,lh:15});}
  const cx=350;
  const items=[
    ["Autre câble / chargeur / prise ?", C.bgSoft, C.blue],
    ["Nettoyer le port (peluches !)", C.bgSoft, C.blue],
    ["Broches du port pliées / corrodées ?", C.bgSoft, C.blue],
    ["Connecteur sur nappe → remplacer la nappe", C.bgGreen, C.green],
    ["Connecteur soudé → micro-soudure", C.bgAmber, C.amber],
    ["Port sain → batterie / puce de charge", C.bgRed, C.accent]
  ];
  let y=80;
  items.forEach((it,i)=>{
    g+=node(cx,y,360,it[0],it[1],it[2]);
    if(i<items.length-1){g+=`<line x1="${cx+180}" y1="${y+50}" x2="${cx+180}" y2="${y+62-2}" stroke="${C.blue}" stroke-width="2.2" marker-end="url(#arr)"/>`;}
    // side annotation
    const notes=["le plus gratuit d'abord","cause n°1 !","inspection loupe","niveau 1 · simple","niveau 2","diagnostic approfondi"];
    g+=txt(cx-20,y+30,notes[i],{size:12,italic:true,color:C.grey,anchor:'end'});
    y+=62;
  });
  return svg(w,h,g);
};

// 6) Anatomie d'un PC portable ---------------------------------------------
D.laptop = () => {
  const w=900,h=430; let g='';
  g+=txt(40,42,"Anatomie d'un PC portable",{size:22,weight:700,color:C.navy});
  // base rectangle
  const bx=90,by=110,bw=440,bh=250;
  g+=`<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="14" fill="${C.panel}" stroke="${C.line}" stroke-width="1.5"/>`;
  // internal blocks
  const blk=(x,y,wd,ht,fill,lab)=>box(x,y,wd,ht,fill,null,8)+txt(x+wd/2,y+ht/2+4,lab,{size:11.5,weight:600,color:C.navy,anchor:'middle'});
  g+=blk(bx+18,by+18,bw-36,58,'#DCE7F2',"Batterie");
  g+=blk(bx+18,by+86,150,90,'#C7DAEC',"Carte mère");
  g+=blk(bx+176,by+86,110,90,'#B0C9E2',"Ventilateur + caloducs");
  g+=blk(bx+294,by+86,bw-312,90,'#C7DAEC',"RAM · SSD · Wi-Fi");
  g+=blk(bx+18,by+186,bw-36,46,'#9BBBD9',"Clavier + trackpad");
  // callouts on right
  const rx=590, ry=110;
  const list=[
    ["Dalle + nappe eDP + webcam","(test écran externe pour isoler)"],
    ["Charnières (casse fréquente)",""],
    ["Connecteur de charge (DC jack / USB-C)",""],
    ["Stockage : HDD → SSD = gros gain",""],
    ["Pâte thermique & dépoussiérage",""]
  ];
  list.forEach((c,i)=>{
    const y=ry+i*56;
    g+=box(rx,y,270,44,C.bgSoft,null,8);
    g+=`<circle cx="${rx+18}" cy="${y+22}" r="5" fill="${C.accent}"/>`;
    g+=txt(rx+32,y+19,c[0],{size:12.5,weight:600,color:C.ink});
    if(c[1])g+=txt(rx+32,y+35,c[1],{size:10.5,italic:true,color:C.grey});
    g+=`<line x1="${bx+bw}" y1="${by+80}" x2="${rx}" y2="${y+22}" stroke="${C.line}" stroke-width="0.8" opacity="0.5"/>`;
  });
  return svg(w,h,g);
};

// 7) Chaîne de démarrage / rails -------------------------------------------
D.boot = () => {
  const w=900,h=300; let g='';
  g+=txt(w/2,40,"La séquence de démarrage d'une carte mère",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const steps=[
    ["Batterie /\nchargeur","Source"],
    ["Alimentation\nprincipale","Rail maître"],
    ["Rails\nsecondaires","1,8 V · 3,3 V…"],
    ["Horloge\n(clock)","Référence temps"],
    ["Processeur\n(CPU)","Démarre"],
    ["Chargement\ndu logiciel","Boot OK"]
  ];
  const n=steps.length, cw=120, gap=24;
  const startx=(w-(n*cw+(n-1)*gap))/2, y=110, ch=90;
  steps.forEach((s,i)=>{
    const x=startx+i*(cw+gap);
    const last=i===n-1;
    g+=box(x,y,cw,ch,last?C.bgGreen:C.bgSoft,null,10);
    g+=multi(x+cw/2,y+34,s[0].split("\n"),{size:13.5,weight:700,color:C.navy,anchor:'middle',lh:16});
    g+=txt(x+cw/2,y+74,s[1],{size:10.5,italic:true,color:C.grey,anchor:'middle'});
    if(!last)g+=`<line x1="${x+cw}" y1="${y+ch/2}" x2="${x+cw+gap-3}" y2="${y+ch/2}" stroke="${C.blue}" stroke-width="2.4" marker-end="url(#arr)"/>`;
  });
  g+=txt(w/2,250,"La première étape absente indique la zone à investiguer.",{size:13,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

// 8) Structure de prix d'une intervention ----------------------------------
D.prix = () => {
  const w=900,h=380; let g='';
  g+=txt(w/2,40,"Comment se construit le prix d'une intervention",{size:22,weight:700,color:C.navy,anchor:'middle'});
  // stacked bar
  const bx=120, by=90, bw=150, total=220;
  const segs=[
    {h:70 ,fill:C.sky   ,lab:"Coût pièce"},
    {h:80 ,fill:C.amber ,lab:"Main-d'œuvre"},
    {h:70 ,fill:C.green ,lab:"Marge / frais"}
  ];
  let yy=by;
  segs.forEach(s=>{
    g+=`<rect x="${bx}" y="${yy}" width="${bw}" height="${s.h}" fill="${s.fill}"/>`;
    g+=txt(bx+bw/2,yy+s.h/2+5,s.lab,{size:13,weight:700,color:C.white,anchor:'middle'});
    yy+=s.h;
  });
  g+=`<rect x="${bx}" y="${by}" width="${bw}" height="${total}" fill="none" stroke="${C.navy}" stroke-width="2" rx="6"/>`;
  g+=`<line x1="${bx+bw+20}" y1="${by}" x2="${bx+bw+20}" y2="${by+total}" stroke="${C.navy}" stroke-width="1.5"/>`;
  g+=txt(bx+bw+34,by+total/2+5,"= Prix client",{size:16,weight:800,color:C.navy});
  // explanatory cards on right
  const rx=520, ry=96;
  const cards=[
    ["Facturez le diagnostic","Déductible si la réparation est acceptée. Valorise votre temps."],
    ["Proposez des niveaux","Pièce d'origine vs compatible : prix et garanties différents."],
    ["Micro-soudure = premium","Peu de concurrents, forte valeur ajoutée."],
    ["Soignez chaque réparation","Une casse au montage mange la marge de plusieurs autres."]
  ];
  cards.forEach((c,i)=>{
    const y=ry+i*64;
    g+=box(rx,y,320,54,C.panel,C.line,8);
    g+=`<rect x="${rx}" y="${y}" width="6" height="54" rx="3" fill="${C.accent}"/>`;
    g+=txt(rx+18,y+22,c[0],{size:13.5,weight:700,color:C.navy});
    g+=multi(rx+18,y+40,[c[1]],{size:11,color:C.grey,lh:13});
  });
  return svg(w,h,g);
};

// 9) AirPods : réparable vs non --------------------------------------------
D.airpods = () => {
  const w=900,h=360; let g='';
  g+=txt(w/2,40,"AirPods & écouteurs sans fil : que peut-on vraiment faire ?",{size:21,weight:700,color:C.navy,anchor:'middle'});
  function col(ox,title,fill,bar,items,ok){
    let s=box(ox,80,380,240,fill,null,14);
    s+=`<rect x="${ox}" y="80" width="380" height="46" rx="14" fill="${bar}"/>`;
    s+=`<rect x="${ox}" y="112" width="380" height="14" fill="${bar}"/>`;
    s+=txt(ox+24,80+30,title,{size:16,weight:800,color:C.white});
    items.forEach((it,i)=>{
      const y=150+i*42;
      s+=`<text x="${ox+24}" y="${y+5}" font-size="17" font-weight="800" fill="${bar}">${ok?'✓':'✕'}</text>`;
      s+=multi(ox+48,y,[it],{size:12.5,weight:600,color:C.ink,lh:14});
    });
    return s;
  }
  g+=col(70,"Réparable / rentable",C.bgGreen,C.green,[
    "Nettoyage des grilles (son faible)","Embouts silicone (AirPods Pro)","Remplacement de l'étui de charge","Reset / appairage / firmware"],true);
  g+=col(470,"Difficile / non rentable",C.bgRed,C.accent,[
    "Batterie interne (boîtier scellé aux ultrasons)","Ouverture destructive","Souvent : orienter vers SAV / reconditionné"],false);
  g+=txt(w/2,346,"Astuce : proposez un « service de nettoyage écouteurs » à prix fixe — rapide et très rentable.",{size:12,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

module.exports = D;
