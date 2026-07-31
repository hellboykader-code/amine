// Illustrations réalistes (vector, ombré) — scènes d'atelier "main d'œuvre".
// Style : plan rapproché, main gantée (nitrile bleu), outil, appareil, établi.
const P = {
  wood1:'#C9A36B', wood2:'#A97F49', mat1:'#20505C', mat2:'#143840',
  glove1:'#3E86C4', glove2:'#2C6AA0', glove3:'#7FB6E4', gloveLine:'#1E4E7C',
  metal1:'#E9EDF2', metal2:'#B9C2CD', metal3:'#8A95A2', metalDark:'#5A6470',
  phone:'#20262E', phone2:'#0E1218', screen1:'#2C3A55', screen2:'#101A2E',
  glass:'#BcD4E8', accent:'#C0392B', amber:'#E8A13A', rubber:'#C0392B',
  ink:'#1b2733', shadow:'#0a1420'
};

function defs() {
  return `<defs>
    <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${P.wood1}"/><stop offset="1" stop-color="${P.wood2}"/>
    </linearGradient>
    <radialGradient id="mat" cx="0.42" cy="0.35" r="0.9">
      <stop offset="0" stop-color="${P.mat1}"/><stop offset="1" stop-color="${P.mat2}"/>
    </radialGradient>
    <linearGradient id="glove" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${P.glove3}"/><stop offset="0.45" stop-color="${P.glove1}"/><stop offset="1" stop-color="${P.glove2}"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${P.metal1}"/><stop offset="0.5" stop-color="${P.metal2}"/><stop offset="1" stop-color="${P.metal3}"/>
    </linearGradient>
    <linearGradient id="metalV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${P.metal1}"/><stop offset="1" stop-color="${P.metalDark}"/>
    </linearGradient>
    <linearGradient id="phoneBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2A323C"/><stop offset="1" stop-color="${P.phone2}"/>
    </linearGradient>
    <linearGradient id="screen" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0" stop-color="${P.screen1}"/><stop offset="1" stop-color="${P.screen2}"/>
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="7" stdDeviation="9" flood-color="${P.shadow}" flood-opacity="0.35"/>
    </filter>
    <filter id="soft2" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="${P.shadow}" flood-opacity="0.30"/>
    </filter>
  </defs>`;
}

function frame(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${defs()}${inner}</svg>`;
}

// workbench background: wood top + dark work mat
function bench(w, h) {
  return `<rect x="0" y="0" width="${w}" height="${h}" fill="url(#wood)"/>`
    + `<g opacity="0.10">${[...Array(9)].map((_,i)=>`<rect x="0" y="${i*h/9}" width="${w}" height="2" fill="#5a3d1e"/>`).join('')}</g>`
    + `<rect x="46" y="70" width="${w-92}" height="${h-150}" rx="26" fill="url(#mat)" filter="url(#soft)"/>`
    + `<rect x="46" y="70" width="${w-92}" height="${h-150}" rx="26" fill="none" stroke="#0c2a30" stroke-width="2" opacity="0.5"/>`;
}

// ---- Gloved hand gripping a tool, forearm from a corner ----
// origin at wrist; draws a fist-ish gloved hand holding a vertical tool shaft.
function glovedHand(x, y, rot, scale) {
  const g = `
    <g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" filter="url(#soft)">
      <!-- forearm + cuff -->
      <path d="M-60 150 L-40 40 Q-34 8 0 4 Q40 0 58 30 L96 150 Z" fill="url(#glove)" stroke="${P.gloveLine}" stroke-width="2.5"/>
      <path d="M-46 58 Q6 44 54 60 L50 78 Q4 62 -50 78 Z" fill="${P.glove2}" opacity="0.7"/>
      <!-- palm/back of hand -->
      <path d="M-40 44 Q-46 -6 -8 -18 Q40 -30 58 6 Q66 26 58 44 Q20 60 -40 44 Z" fill="url(#glove)" stroke="${P.gloveLine}" stroke-width="2.5"/>
      <!-- fingers wrapping (knuckles) -->
      <g stroke="${P.gloveLine}" stroke-width="2.2">
        <path d="M-30 -8 Q-30 -30 -14 -32 Q0 -32 -2 -8 Z" fill="url(#glove)"/>
        <path d="M-8 -14 Q-6 -38 10 -38 Q24 -36 20 -12 Z" fill="url(#glove)"/>
        <path d="M16 -12 Q20 -34 34 -32 Q46 -28 40 -8 Z" fill="url(#glove)"/>
        <path d="M38 -4 Q44 -22 56 -18 Q64 -12 58 6 Z" fill="url(#glove)"/>
      </g>
      <!-- thumb -->
      <path d="M-38 20 Q-58 6 -50 -14 Q-42 -26 -28 -14 Q-22 0 -26 20 Z" fill="url(#glove)" stroke="${P.gloveLine}" stroke-width="2.5"/>
      <!-- highlight -->
      <path d="M-20 -8 Q10 -22 34 -10" fill="none" stroke="${P.glove3}" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    </g>`;
  return g;
}

// tools --------------------------------------------------------------
function suctionCup(x, y, s=1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft2)">
    <ellipse cx="0" cy="30" rx="34" ry="12" fill="#8a1f18"/>
    <path d="M-34 30 Q0 6 34 30 Q0 42 -34 30 Z" fill="${P.rubber}"/>
    <rect x="-6" y="-52" width="12" height="80" rx="5" fill="url(#metalV)" stroke="${P.metalDark}" stroke-width="1.5"/>
    <ellipse cx="0" cy="-52" rx="16" ry="7" fill="url(#metal)" stroke="${P.metalDark}" stroke-width="1.5"/>
  </g>`;
}
function pickTool(x, y, rot=0, s=1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)">
    <path d="M0 0 L60 -10 L58 8 Z" fill="${P.amber}" stroke="#b57f22" stroke-width="1.5"/>
  </g>`;
}
function tweezers(x, y, rot=0, s=1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)">
    <path d="M0 0 L120 -26" stroke="url(#metal)" stroke-width="9" stroke-linecap="round"/>
    <path d="M0 0 L120 -6" stroke="url(#metal)" stroke-width="9" stroke-linecap="round"/>
    <path d="M118 -26 L134 -16 L118 -6" fill="none" stroke="${P.metal3}" stroke-width="3"/>
    <circle cx="6" cy="0" r="7" fill="${P.metalDark}"/>
  </g>`;
}
function screwdriver(x, y, rot=0, s=1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)">
    <rect x="0" y="-14" width="70" height="28" rx="12" fill="${P.accent}" stroke="#8a1f18" stroke-width="2"/>
    <rect x="6" y="-9" width="54" height="4" rx="2" fill="#e06a5e" opacity="0.6"/>
    <rect x="70" y="-4" width="70" height="8" rx="3" fill="url(#metal)" stroke="${P.metal3}" stroke-width="1"/>
    <rect x="138" y="-5" width="12" height="10" fill="${P.metal3}"/>
  </g>`;
}
function brush(x, y, rot=0, s=1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)">
    <rect x="0" y="-7" width="90" height="14" rx="6" fill="#7a4a1c"/>
    <rect x="86" y="-9" width="16" height="18" rx="3" fill="${P.metal3}"/>
    <path d="M102 -9 q26 4 30 9 q-30 5 -30 9 Z" fill="#2b2b2b"/>
    <g stroke="#111" stroke-width="1">${[...Array(6)].map((_,i)=>`<line x1="102" y1="${-8+i*3}" x2="134" y2="${-4+i*2.2}"/>`).join('')}</g>
  </g>`;
}

// devices ------------------------------------------------------------
function phoneOpen(x, y, s=1, lift=0) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)">
    <rect x="0" y="0" width="200" height="410" rx="34" fill="url(#phoneBody)" stroke="#05070a" stroke-width="3"/>
    <!-- lifted screen -->
    <g transform="translate(${-6-lift} ${-10-lift}) rotate(-4 100 205)">
      <rect x="10" y="10" width="180" height="390" rx="28" fill="url(#screen)" stroke="#0a1220" stroke-width="3"/>
      <path d="M28 26 L150 26 L60 210 Z" fill="#ffffff" opacity="0.06"/>
      <rect x="70" y="20" width="60" height="10" rx="5" fill="#05070a"/>
    </g>
    <!-- internal hint under screen -->
    <rect x="20" y="30" width="70" height="150" rx="8" fill="#12203a" opacity="0.8"/>
    <rect x="110" y="30" width="70" height="120" rx="8" fill="#1a2c1f" opacity="0.7"/>
  </g>`;
}

// small parts scattered on the mat
function screws(list) {
  return list.map(([x,y,r=6])=>`<g filter="url(#soft2)"><circle cx="${x}" cy="${y}" r="${r}" fill="url(#metal)" stroke="${P.metal3}" stroke-width="1.5"/><path d="M${x-r*0.5} ${y} h${r} M${x} ${y-r*0.5} v${r}" stroke="${P.metalDark}" stroke-width="1.4"/></g>`).join('');
}
function chip(w, h, text) {
  const cw = Math.min(w-92, 40 + text.length*9.2);
  return `<g><rect x="46" y="${h-58}" width="${cw}" height="38" rx="19" fill="#0c2a30" opacity="0.9"/>`
    + `<text x="66" y="${h-33}" font-family="Helvetica Neue, Arial" font-size="16.5" font-weight="700" fill="#e8f1f8">${text.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</text></g>`;
}
function motionArrow(x, y, len) {
  return `<path d="M${x} ${y} q0 ${-len*0.6} 0 ${-len}" stroke="#eaf1f8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.55"/>`
    + `<path d="M${x-8} ${y-len+6} l8 -12 l8 12" stroke="#eaf1f8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.55"/>`;
}

// -------- More tools --------
function spudger(x,y,rot=0,s=1){ return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)"><rect x="0" y="-6" width="120" height="12" rx="6" fill="#1e2a38"/><path d="M120 -6 q22 2 30 6 q-8 4 -30 6 Z" fill="#141b24"/><rect x="6" y="-3" width="90" height="3" rx="1.5" fill="#3a4a5c" opacity="0.6"/></g>`; }
function pasteSyringe(x,y,rot=0,s=1){ return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)"><rect x="0" y="-13" width="86" height="26" rx="8" fill="#dfe6ee" stroke="${P.metal3}" stroke-width="1.5"/><rect x="8" y="-9" width="60" height="18" rx="5" fill="#9aa6b3" opacity="0.5"/><path d="M86 -6 l22 6 l-22 6 Z" fill="${P.metal3}"/><rect x="-16" y="-9" width="16" height="18" rx="3" fill="${P.accent}"/><circle cx="112" cy="0" r="5" fill="#8a8f96"/></g>`; }
function ramStick(x,y,rot=0,s=1){ return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)"><rect x="0" y="0" width="150" height="42" rx="5" fill="#0f5132"/><rect x="10" y="8" width="30" height="26" rx="3" fill="#14251d" stroke="#0a3d26"/><rect x="46" y="8" width="30" height="26" rx="3" fill="#14251d"/><rect x="82" y="8" width="30" height="26" rx="3" fill="#14251d"/><rect x="118" y="8" width="24" height="26" rx="3" fill="#14251d"/><g fill="${P.amber}">${[...Array(14)].map((_,i)=>`<rect x="${8+i*10}" y="38" width="6" height="6"/>`).join('')}</g></g>`; }
function ssdCard(x,y,rot=0,s=1){ return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" filter="url(#soft2)"><rect x="0" y="0" width="150" height="52" rx="6" fill="#1b3a5a"/><rect x="10" y="10" width="86" height="32" rx="4" fill="#0e2136"/><text x="53" y="31" font-family="Helvetica Neue, Arial" font-size="12" fill="#7fb6e4" text-anchor="middle" font-weight="700">SSD</text><g fill="${P.amber}">${[...Array(9)].map((_,i)=>`<rect x="${104+i*5}" y="12" width="3" height="28"/>`).join('')}</g></g>`; }
function fanTool(x,y,s=1){ return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft2)"><circle cx="0" cy="0" r="46" fill="#20262e" stroke="#0e1218" stroke-width="3"/><circle cx="0" cy="0" r="12" fill="#3a4552"/>${[0,1,2,3,4,5,6].map(i=>`<path d="M0 0 Q${28*Math.cos(i*0.9)} ${28*Math.sin(i*0.9)-16} ${40*Math.cos(i*0.9+0.5)} ${40*Math.sin(i*0.9+0.5)}" fill="none" stroke="#586472" stroke-width="7" stroke-linecap="round"/>`).join('')}</g>`; }
function ipaBottle(x,y,s=1){ return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft2)"><rect x="0" y="0" width="52" height="90" rx="10" fill="#cfe0ef" opacity="0.85" stroke="${P.metal3}" stroke-width="1.5"/><rect x="16" y="-16" width="20" height="20" rx="3" fill="#2b3542"/><rect x="8" y="34" width="36" height="34" rx="4" fill="#e8eef5"/><text x="26" y="56" font-family="Helvetica Neue, Arial" font-size="13" fill="${P.mat2}" text-anchor="middle" font-weight="800">IPA</text></g>`; }
function droplets(list){ return list.map(([x,y,r=6])=>`<path d="M${x} ${y-r*1.4} Q${x+r} ${y} ${x} ${y+r*0.6} Q${x-r} ${y} ${x} ${y-r*1.4} Z" fill="#8fd0e8" opacity="0.8" stroke="#5aa9c8" stroke-width="1"/>`).join(''); }

// -------- More devices --------
function board(x, y, w, h, s=1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)">
    <rect x="0" y="0" width="${w}" height="${h}" rx="12" fill="#12563a" stroke="#0a3a27" stroke-width="3"/>
    <rect x="14" y="14" width="${w*0.34}" height="${h*0.4}" rx="5" fill="#0d3325"/>
    <rect x="${w*0.44}" y="18" width="${w*0.30}" height="${h*0.30}" rx="4" fill="#0d3325"/>
    <rect x="18" y="${h*0.62}" width="${w*0.5}" height="${h*0.24}" rx="4" fill="#0d3325"/>
    <g fill="${P.amber}" opacity="0.9">${[...Array(10)].map((_,i)=>`<rect x="${w*0.78}" y="${16+i*((h-30)/10)}" width="${w*0.14}" height="5" rx="1"/>`).join('')}</g>
    <g fill="#0a2a1e">${[...Array(16)].map((_,i)=>`<circle cx="${20+(i%8)*((w-40)/8)}" cy="${h-16-(Math.floor(i/8))*12}" r="2.4"/>`).join('')}</g>
  </g>`;
}
function laptopInternals(x, y, w, h) {
  return `<g filter="url(#soft)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="#2a3038" stroke="#0e1218" stroke-width="3"/>
    <rect x="${x+16}" y="${y+h*0.52}" width="${w-32}" height="${h*0.4}" rx="10" fill="#161b22"/>
    <g fill="#0d1117">${[0,1,2].map(i=>`<rect x="${x+22+i*((w-44)/3)}" y="${y+h*0.55}" width="${(w-44)/3-8}" height="${h*0.34}" rx="6"/>`).join('')}</g>
    <rect x="${x+16}" y="${y+14}" width="${w*0.32}" height="${h*0.4}" rx="8" fill="#12563a" stroke="#0a3a27" stroke-width="2"/>
    <rect x="${x+w*0.30}" y="${y+16}" width="${w*0.16}" height="${h*0.34}" rx="6" fill="#161b22"/>
  </g>`;
}
function laptopFront(x, y, w, h) {
  return `<g filter="url(#soft)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="#1b2129" stroke="#0e1218" stroke-width="4"/>
    <rect x="${x+18}" y="${y+18}" width="${w-36}" height="${h-52}" rx="6" fill="url(#screen)"/>
    <path d="M${x+30} ${y+30} L${x+w*0.55} ${y+30} L${x+w*0.28} ${y+h*0.6} Z" fill="#ffffff" opacity="0.06"/>
    <circle cx="${x+w/2}" cy="${y+h-18}" r="4" fill="#333b45"/>
  </g>`;
}
function tabletOpen(x, y, s=1, lift=16) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)">
    <rect x="0" y="0" width="300" height="410" rx="22" fill="url(#phoneBody)" stroke="#05070a" stroke-width="3"/>
    <g transform="translate(${-lift} ${-lift}) rotate(-3 150 205)">
      <rect x="10" y="10" width="284" height="392" rx="18" fill="url(#screen)" stroke="#0a1220" stroke-width="3"/>
      <path d="M30 28 L200 28 L80 240 Z" fill="#ffffff" opacity="0.06"/>
    </g>
    <rect x="24" y="30" width="120" height="150" rx="8" fill="#12203a" opacity="0.8"/>
  </g>`;
}
function watchOpen(x, y, s=1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)">
    <path d="M40 -40 q6 -26 24 -26 h32 q18 0 24 26 l6 40 h-92 Z" fill="#20262e"/>
    <path d="M40 236 q6 26 24 26 h32 q18 0 24 -26 l6 -40 h-92 Z" fill="#20262e"/>
    <rect x="18" y="0" width="132" height="196" rx="30" fill="url(#phoneBody)" stroke="#05070a" stroke-width="3"/>
    <g transform="translate(-10 -12) rotate(-5 84 98)">
      <rect x="30" y="12" width="112" height="172" rx="24" fill="url(#screen)" stroke="#0a1220" stroke-width="3"/>
      <path d="M44 26 L110 26 L60 96 Z" fill="#ffffff" opacity="0.07"/>
    </g>
    <circle cx="154" cy="70" r="8" fill="#3a4552"/>
    <rect x="150" y="110" width="10" height="26" rx="3" fill="#3a4552"/>
  </g>`;
}
function airpod(x, y, s=1, tip=false, mesh=false) {
  let g = `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)">
    <path d="M0 0 a44 44 0 0 1 78 0 l-8 40 a26 26 0 0 1 -50 6 Z" fill="#f3f5f8" stroke="#c7ccd3" stroke-width="2.5"/>
    <path d="M52 40 q26 6 24 60 q-2 60 -30 78 q-22 -12 -20 -70 q2 -56 26 -68 Z" fill="#f3f5f8" stroke="#c7ccd3" stroke-width="2.5"/>`;
  if (mesh) g += `<ellipse cx="39" cy="24" rx="20" ry="14" fill="#e2e6eb" stroke="#b9c0c8" stroke-width="1.5"/>`
    + `<g stroke="#aab2bb" stroke-width="1">${[...Array(6)].map((_,i)=>`<line x1="${24+i*5}" y1="12" x2="${24+i*5}" y2="36"/>`).join('')}</g>`;
  if (tip) g += `<path d="M8 -6 a38 38 0 0 1 62 0 l-6 30 q-25 12 -50 0 Z" fill="${P.accent}" opacity="0.9"/>`;
  g += `</g>`;
  return g;
}
function airpodCase(x, y, s=1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#soft)"><rect x="0" y="0" width="120" height="90" rx="26" fill="#f3f5f8" stroke="#c7ccd3" stroke-width="2.5"/><rect x="0" y="0" width="120" height="30" rx="14" fill="#e6e9ee"/><circle cx="60" cy="70" r="4" fill="#3ba55d"/></g>`;
}

// ============ 13 SCÈNES ============
const SC = 920, SH = 540;
function base(){ return bench(SC, SH); }

const SCENES = {};

SCENES.sc_ecran_smartphone = () => {
  let g = base();
  g += `<g transform="rotate(-6 460 300)">${phoneOpen(360, 70, 1.06, 22)}</g>`;
  g += pickTool(360, 210, 6, 1.35);
  g += suctionCup(560, 180, 1.25);
  g += motionArrow(560, 120, 60);
  g += screwdriver(120, 430, -18, 0.9);
  g += tweezers(690, 400, -8, 0.8);
  g += screws([[250,470],[300,455],[720,300],[150,300],[790,210]]);
  g += chip(SC, SH, "Décollage de l'écran à la ventouse + médiator");
  return frame(SC, SH, g);
};

SCENES.sc_batterie_smartphone = () => {
  let g = base();
  g += `<g transform="rotate(-4 460 300)">${phoneOpen(320, 80, 1.02, 6)}</g>`;
  // battery being lifted with tweezers
  g += `<g filter="url(#soft2)"><rect x="360" y="250" width="150" height="210" rx="12" fill="#1f2b3a" stroke="#0e1622" stroke-width="2"/>`
     + `<rect x="372" y="262" width="126" height="186" rx="8" fill="#2b3b52"/>`
     + `<text x="435" y="360" font-family="Helvetica Neue, Arial" font-size="15" fill="#7fb6e4" text-anchor="middle" font-weight="800" transform="rotate(-90 435 360)">Li-ion</text></g>`;
  g += tweezers(470, 230, -34, 0.95);
  g += motionArrow(486, 250, 46);
  g += spudger(150, 440, -12, 0.85);
  g += screws([[250,470],[720,320],[790,220],[180,300]]);
  g += chip(SC, SH, "Retrait de la batterie (languettes d'adhésif)");
  return frame(SC, SH, g);
};

SCENES.sc_charge_smartphone = () => {
  let g = base();
  g += `<g transform="rotate(90 460 300)">${phoneOpen(300, 130, 0.9, 0)}</g>`;
  // brush cleaning bottom port
  g += brush(250, 300, 8, 1.15);
  g += `<g opacity="0.85">${droplets([[300,250,4],[320,270,3]])}</g>`;
  g += spudger(640, 420, -14, 0.8);
  g += tweezers(650, 250, -6, 0.75);
  g += screws([[220,470],[770,330],[760,180]]);
  g += chip(SC, SH, "Nettoyage du connecteur de charge");
  return frame(SC, SH, g);
};

SCENES.sc_eau_smartphone = () => {
  let g = base();
  g += board(300, 140, 320, 230, 1.0);
  g += brush(250, 300, 4, 1.05);
  g += ipaBottle(690, 300, 1.1);
  g += `<g>${droplets([[360,120,7],[430,110,6],[520,125,7],[600,130,5],[470,140,5]])}</g>`;
  g += tweezers(120, 300, 10, 0.7);
  g += chip(SC, SH, "Désoxydation de la carte mère (IPA + brosse)");
  return frame(SC, SH, g);
};

SCENES.sc_dalle_pc = () => {
  let g = base();
  g += laptopFront(250, 100, 430, 300);
  g += pickTool(240, 250, -6, 1.3);
  g += spudger(560, 430, -10, 0.9);
  g += screwdriver(150, 440, -18, 0.85);
  g += screws([[230,440],[700,430],[760,250]]);
  g += chip(SC, SH, "Dépose de la dalle (déclipser le cadre)");
  return frame(SC, SH, g);
};

SCENES.sc_clavier_pc = () => {
  let g = base();
  g += laptopInternals(220, 110, 480, 300);
  // keyboard block highlight + screwdriver
  g += `<g filter="url(#soft2)"><rect x="250" y="140" width="420" height="120" rx="10" fill="#1a212b"/>`
     + `${[0,1,2].map(r=>[...Array(11)].map((_,c)=>`<rect x="${262+c*36}" y="${150+r*36}" width="28" height="28" rx="4" fill="#2b3542" stroke="#0e141c"/>`).join('')).join('')}</g>`;
  g += screwdriver(300, 300, -8, 0.95);
  g += screws([[240,440],[690,430],[760,180],[180,220]]);
  g += chip(SC, SH, "Remplacement du clavier");
  return frame(SC, SH, g);
};

SCENES.sc_batterie_pc = () => {
  let g = base();
  g += laptopInternals(220, 110, 480, 300);
  // battery pack highlighted at bottom
  g += `<g filter="url(#soft2)"><rect x="240" y="300" width="440" height="96" rx="10" fill="#14203a" stroke="#0a1424" stroke-width="2"/>`
     + `${[0,1,2].map(i=>`<rect x="${256+i*145}" y="312" width="128" height="72" rx="6" fill="#233457"/>`).join('')}</g>`;
  g += screwdriver(300, 250, -10, 0.9);
  g += spudger(560, 250, 6, 0.8);
  g += screws([[240,150],[680,150],[760,430]]);
  g += chip(SC, SH, "Remplacement de la batterie");
  return frame(SC, SH, g);
};

SCENES.sc_stockage_pc = () => {
  let g = base();
  g += laptopInternals(200, 110, 470, 300);
  // RAM being inserted
  g += ramStick(430, 150, -18, 1.05);
  g += motionArrow(470, 150, 40);
  g += ssdCard(250, 300, 0, 1.0);
  g += tweezers(690, 380, -8, 0.75);
  g += chip(SC, SH, "Installation SSD & RAM");
  return frame(SC, SH, g);
};

SCENES.sc_thermique_pc = () => {
  let g = base();
  g += laptopInternals(200, 110, 470, 300);
  // CPU die with paste + syringe + fan nearby
  g += `<g filter="url(#soft2)"><rect x="300" y="180" width="90" height="90" rx="8" fill="#c9cdd3" stroke="#8a8f96" stroke-width="2"/><rect x="316" y="196" width="58" height="58" rx="4" fill="#3a4552"/><circle cx="345" cy="225" r="9" fill="${P.accent}"/></g>`;
  g += pasteSyringe(360, 150, 24, 1.0);
  g += fanTool(600, 250, 1.0);
  g += chip(SC, SH, "Application de pâte thermique neuve");
  return frame(SC, SH, g);
};

SCENES.sc_ecran_tablette = () => {
  let g = base();
  g += `<g transform="rotate(-4 460 300)">${tabletOpen(320, 70, 1.0, 18)}</g>`;
  g += pickTool(300, 210, 8, 1.4);
  g += waves2(300, 150);
  g += suctionCup(600, 180, 1.2);
  g += screwdriver(150, 440, -16, 0.85);
  g += chip(SC, SH, "Ouverture d'une tablette (chaleur + médiator)");
  return frame(SC, SH, g);
};

SCENES.sc_montre = () => {
  let g = base();
  g += watchOpen(370, 150, 1.15);
  g += tweezers(540, 250, -30, 0.85);
  g += motionArrow(556, 250, 40);
  g += spudger(180, 420, -12, 0.8);
  g += screws([[260,460],[720,300],[720,180]]);
  g += chip(SC, SH, "Ouverture d'une Apple Watch (nappes fragiles)");
  return frame(SC, SH, g);
};

SCENES.sc_airpods_nettoyage = () => {
  let g = base();
  g += airpod(360, 150, 1.5, false, true);
  g += brush(250, 200, 6, 1.1);
  g += airpodCase(640, 320, 1.1);
  g += chip(SC, SH, "Nettoyage des grilles d'un écouteur");
  return frame(SC, SH, g);
};

SCENES.sc_airpods_embouts = () => {
  let g = base();
  g += airpod(380, 150, 1.5, true, false);
  // detached silicone tip nearby
  g += `<g transform="translate(600 250)" filter="url(#soft2)"><path d="M0 0 q40 6 34 40 q-6 30 -34 30 q-28 0 -34 -30 q-6 -34 34 -40 Z" fill="${P.accent}" opacity="0.9"/></g>`;
  g += motionArrow(430, 150, 40);
  g += airpodCase(180, 360, 1.0);
  g += chip(SC, SH, "Remplacement de l'embout (AirPods Pro)");
  return frame(SC, SH, g);
};

// heat waves helper for tablet scene
function waves2(x, y){ return `<g opacity="0.8">`
  + `<path d="M${x} ${y} q8 -12 16 0 q8 12 16 0" fill="none" stroke="${P.accent}" stroke-width="3.5"/>`
  + `<path d="M${x} ${y-16} q8 -12 16 0 q8 12 16 0" fill="none" stroke="${P.accent}" stroke-width="3.5"/>`
  + `<path d="M${x} ${y-32} q8 -12 16 0 q8 12 16 0" fill="none" stroke="${P.accent}" stroke-width="3.5"/></g>`; }

module.exports = Object.assign({ sceneScreen: SCENES.sc_ecran_smartphone, _P: P }, SCENES);
