// Schémas pour l'ebook « Flashage & Déblocage ».
const C = { navy:'#1F3A5F', blue:'#2E5E8C', sky:'#4A90C2', accent:'#C0392B',
  green:'#27AE60', amber:'#E8A13A', ink:'#243342', grey:'#6B7684', line:'#D0D9E4',
  bgSoft:'#EAF2FB', bgGreen:'#EAF7EE', bgRed:'#FDECEA', bgAmber:'#FCF3E4', white:'#FFFFFF', panel:'#F4F7FB' };

function defs(){ return `<defs>
  <marker id="arr" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L7,3 L0,6 Z" fill="${C.blue}"/></marker>
  <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="1.5" stdDeviation="2.2" flood-color="#1F3A5F" flood-opacity="0.16"/></filter>
</defs>`; }
function svg(w,h,inner){ return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Helvetica Neue, Arial, sans-serif">${defs()}<rect width="${w}" height="${h}" fill="${C.white}"/>${inner}</svg>`; }
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const box=(x,y,w,h,fill,stroke,r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke?` stroke="${stroke}" stroke-width="1.5"`:''} filter="url(#sh)"/>`;
const txt=(x,y,s,{size=15,color=C.ink,weight=400,anchor='start',italic=false}={})=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}"${italic?' font-style="italic"':''}>${esc(s)}</text>`;
const multi=(x,y,lines,{size=13,color=C.ink,weight=400,anchor='start',lh=16}={})=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">`+lines.map((l,i)=>`<tspan x="${x}" dy="${i===0?0:lh}">${esc(l)}</tspan>`).join('')+`</text>`;

const D = {};

// 1) Modes de flash par plateforme
D.modes = () => {
  const w=900,h=470; let g='';
  g+=txt(w/2,40,"Les modes de flashage selon la plateforme",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const rows=[
    ["iPhone / iPad (Apple)","Recovery · DFU","Restauration via Finder/iTunes + fichier IPSW"],
    ["Samsung (Android)","Download (Odin)","Flash des firmwares .tar via Odin"],
    ["Google Pixel, la plupart","Fastboot / bootloader","Commandes fastboot, images d'usine"],
    ["MediaTek (MTK)","BROM / Preloader","SP Flash Tool (scatter file)"],
    ["Qualcomm","EDL (9008)","QFIL / firehose (programmeur)"],
  ];
  const x=60, y0=80, rw=w-120, rh=68, gap=8;
  rows.forEach((r,i)=>{
    const y=y0+i*(rh+gap);
    g+=box(x,y,rw,rh,i%2?C.panel:C.bgSoft,null,12);
    g+=`<rect x="${x}" y="${y}" width="8" height="${rh}" rx="4" fill="${[C.grey,C.blue,C.sky,C.amber,C.accent][i]}"/>`;
    g+=txt(x+26,y+30,r[0],{size:15,weight:700,color:C.navy});
    g+=txt(x+26,y+52,r[2],{size:12,color:C.grey});
    g+=`<rect x="${x+rw-230}" y="${y+18}" width="210" height="32" rx="16" fill="${C.navy}"/>`;
    g+=txt(x+rw-125,y+39,r[1],{size:13,weight:700,color:'#fff',anchor:'middle'});
  });
  return svg(w,h,g);
};

// 2) Anatomie du firmware / partitions
D.firmware = () => {
  const w=900,h=440; let g='';
  g+=txt(40,42,"Anatomie d'un firmware (partitions)",{size:22,weight:700,color:C.navy});
  const parts=[
    ["Bootloader","Démarre l'appareil, vérifie la signature","#B0C9E2"],
    ["Boot / Kernel","Noyau du système","#9BBBD9"],
    ["System / Super","Le système d'exploitation lui-même","#86AACF"],
    ["Recovery","Mode de maintenance / restauration","#C7DAEC"],
    ["Modem / Baseband","Gère le réseau mobile (lié à l'IMEI)","#DCE7F2"],
    ["Userdata","Vos données personnelles (effacées au flash complet)","#F0D6D2"],
  ];
  const x=90, y0=86, bw=360, bh=44, gap=10;
  parts.forEach((p,i)=>{
    const y=y0+i*(bh+gap);
    g+=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="8" fill="${p[2]}" stroke="${C.blue}" stroke-width="1"/>`;
    g+=txt(x+16,y+28,p[0],{size:14,weight:700,color:C.navy});
    g+=`<line x1="${x+bw}" y1="${y+bh/2}" x2="${x+bw+30}" y2="${y+bh/2}" stroke="${C.line}" stroke-width="1.2"/>`;
    g+=txt(x+bw+40,y+28,p[1],{size:12.5,color:C.ink});
  });
  g+=txt(90,h-16,"Un « flash complet » réécrit tout ; un flash partiel ne touche que certaines partitions.",{size:12.5,italic:true,color:C.grey});
  return svg(w,h,g);
};

// 3) Processus de flash sécurisé
D.process = () => {
  const w=900,h=300; let g='';
  g+=txt(w/2,40,"Le processus de flashage sécurisé",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const steps=[["1","Sauvegarder","les données"],["2","Identifier","modèle exact"],["3","Bon firmware","officiel + région"],["4","Bon mode","DFU/Odin/Fastboot"],["5","Flasher","sans débrancher"],["6","Vérifier","et reconfigurer"]];
  const n=6, cw=118, gap=18, x0=(w-(n*cw+(n-1)*gap))/2, y=104, ch=92;
  steps.forEach((s,i)=>{
    const x=x0+i*(cw+gap), last=i===n-1;
    g+=box(x,y,cw,ch,last?C.bgGreen:C.bgSoft,null,10);
    g+=`<circle cx="${x+24}" cy="${y+26}" r="16" fill="${last?C.green:C.blue}"/>`;
    g+=txt(x+24,y+31,s[0],{size:17,weight:800,color:'#fff',anchor:'middle'});
    g+=txt(x+46,y+31,s[1],{size:13,weight:700,color:C.navy});
    g+=multi(x+14,y+58,[s[2]],{size:11.5,color:C.grey,lh:13});
    if(!last)g+=`<line x1="${x+cw}" y1="${y+ch/2}" x2="${x+cw+gap-3}" y2="${y+ch/2}" stroke="${C.blue}" stroke-width="2.2" marker-end="url(#arr)"/>`;
  });
  g+=txt(w/2,250,"La sauvegarde n'est PAS optionnelle : un flash complet efface les données.",{size:13,italic:true,color:C.accent,anchor:'middle'});
  return svg(w,h,g);
};

// 4) Déblocage réseau : légal vs illégal
D.deblocage = () => {
  const w=900,h=380; let g='';
  g+=txt(w/2,40,"Déblocage réseau (désimlockage) : ce qui est permis",{size:21,weight:700,color:C.navy,anchor:'middle'});
  function col(ox,title,fill,bar,items,ok){
    let s=box(ox,80,380,250,fill,null,14);
    s+=`<rect x="${ox}" y="80" width="380" height="46" rx="14" fill="${bar}"/><rect x="${ox}" y="112" width="380" height="14" fill="${bar}"/>`;
    s+=txt(ox+24,80+30,title,{size:16,weight:800,color:'#fff'});
    items.forEach((it,i)=>{const y=150+i*44;
      s+=`<text x="${ox+24}" y="${y+5}" font-size="17" font-weight="800" fill="${bar}">${ok?'✓':'✕'}</text>`;
      s+=multi(ox+48,y,[it],{size:12.5,weight:600,color:C.ink,lh:14});});
    return s;
  }
  g+=col(70,"Légal",C.bgGreen,C.green,["Code de déblocage de l'opérateur","Service de désimlockage officiel (par IMEI)","Appareil dont la propriété est prouvée","Passage à l'eSIM / opérateur compatible"],true);
  g+=col(470,"Interdit",C.bgRed,C.accent,["Contourner un verrou de compte (iCloud/FRP)","Modifier l'IMEI d'un appareil","Débloquer un appareil signalé volé/perdu","Retirer un verrou d'entreprise (MDM)"],false);
  g+=txt(w/2,364,"En cas de doute sur la provenance d'un appareil : refuser.",{size:12.5,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

// 5) La ligne rouge légale
D.redline = () => {
  const w=900,h=340; let g='';
  g+=box(40,30,w-80,h-60,C.bgRed,C.accent,16);
  g+=`<rect x="40" y="30" width="14" height="${h-60}" rx="7" fill="${C.accent}"/>`;
  g+=txt(w/2,74,"⚠  LA LIGNE ROUGE À NE JAMAIS FRANCHIR",{size:21,weight:800,color:C.accent,anchor:'middle'});
  const items=[
    "Verrouillage d'activation (iCloud / Apple) — lié au compte du propriétaire.",
    "FRP / verrou de compte Google (Android) après réinitialisation.",
    "Verrou professionnel (MDM) posé par une entreprise ou une école.",
    "Modification de l'IMEI : illégale dans de nombreux pays.",
  ];
  items.forEach((it,i)=>{ const y=118+i*40;
    g+=`<circle cx="90" cy="${y-4}" r="6" fill="${C.accent}"/>`;
    g+=txt(112,y,it,{size:14.5,weight:600,color:C.ink});
  });
  g+=txt(w/2,h-40,"La seule voie : preuve de propriété → retrait officiel par le constructeur ou l'opérateur.",{size:13,weight:700,color:C.accent,anchor:'middle'});
  return svg(w,h,g);
};

// 6) Arbre de décision bootloop / brick
D.brick = () => {
  const w=900,h=430; let g='';
  g+=txt(w/2,40,"Appareil bloqué (bootloop / brick) — que faire ?",{size:22,weight:700,color:C.navy,anchor:'middle'});
  const cx=340;
  const items=[
    ["L'appareil réagit-il (logo, vibration) ?",C.bgSoft,C.blue,"diagnostic"],
    ["Oui → entrer en mode Recovery/Download",C.bgSoft,C.blue,"combinaison de touches"],
    ["Tenter une restauration officielle (bon firmware)",C.bgGreen,C.green,"souvent suffisant"],
    ["Écran noir total → mode bas niveau (EDL/DFU)",C.bgAmber,C.amber,"pilotes + outil"],
    ["Toujours mort → problème matériel / test point",C.bgRed,C.accent,"niveau avancé"],
  ];
  let y=80;
  items.forEach((it,i)=>{
    g+=box(cx,y,360,52,it[1],null,10)+`<rect x="${cx}" y="${y}" width="8" height="52" rx="4" fill="${it[2]}"/>`;
    g+=multi(cx+22,y+22,[it[0]],{size:13,weight:600,color:C.ink,lh:15});
    g+=txt(cx-20,y+30,it[3],{size:12,italic:true,color:C.grey,anchor:'end'});
    if(i<items.length-1)g+=`<line x1="${cx+180}" y1="${y+52}" x2="${cx+180}" y2="${y+64-2}" stroke="${C.blue}" stroke-width="2.2" marker-end="url(#arr)"/>`;
    y+=64;
  });
  return svg(w,h,g);
};

// 7) Chaîne de démarrage & vérification
D.bootchain = () => {
  const w=900,h=300; let g='';
  g+=txt(w/2,40,"Chaîne de démarrage sécurisée (où agit un flash)",{size:21,weight:700,color:C.navy,anchor:'middle'});
  const steps=[["BootROM","gravé, inviolable"],["Bootloader","vérifie la signature"],["Boot / Kernel","charge le noyau"],["Système","OS complet"]];
  const n=4, cw=170, gap=30, x0=(w-(n*cw+(n-1)*gap))/2, y=110, ch=86;
  steps.forEach((s,i)=>{
    const x=x0+i*(cw+gap);
    g+=box(x,y,cw,ch,C.bgSoft,null,10);
    g+=txt(x+cw/2,y+38,s[0],{size:15.5,weight:700,color:C.navy,anchor:'middle'});
    g+=txt(x+cw/2,y+62,s[1],{size:11.5,italic:true,color:C.grey,anchor:'middle'});
    if(i<n-1)g+=`<line x1="${x+cw}" y1="${y+ch/2}" x2="${x+cw+gap-3}" y2="${y+ch/2}" stroke="${C.blue}" stroke-width="2.4" marker-end="url(#arr)"/>`;
  });
  g+=txt(w/2,250,"Le « secure boot » vérifie chaque étape : un firmware non signé est refusé.",{size:13,italic:true,color:C.grey,anchor:'middle'});
  return svg(w,h,g);
};

module.exports = D;
