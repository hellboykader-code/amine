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
function vignette(w,h){ return `<rect x="0" y="0" width="${w}" height="${h}" fill="url(#vig)"/>`; }

// ---- Scene: remplacement d'écran (gros plan, sans mains) ----
function sceneScreen() {
  const w=920, h=540;
  let g = bench(w, h);
  // phone, large, slightly angled
  g += `<g transform="rotate(-6 460 300)">`;
  g += phoneOpen(360, 70, 1.06, 22);
  g += `</g>`;
  // pick sliding along the seam
  g += pickTool(360, 210, 6, 1.35);
  // suction cup pulling the screen up (with subtle motion arrow)
  g += suctionCup(560, 180, 1.25);
  g += `<path d="M560 120 q0 -34 0 -60" stroke="#eaf1f8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.55"/>`
     + `<path d="M552 66 l8 -12 l8 12" stroke="#eaf1f8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.55"/>`;
  // tools + parts on the mat
  g += screwdriver(120, 430, -18, 0.9);
  g += tweezers(690, 400, -8, 0.8);
  g += screws([[250,470],[300,455],[720,300],[150,300],[790,210]]);
  // caption chip
  g += `<g><rect x="46" y="${h-58}" width="384" height="38" rx="19" fill="#0c2a30" opacity="0.9"/>
    <text x="66" y="${h-33}" font-family="Helvetica Neue, Arial" font-size="16.5" font-weight="700" fill="#e8f1f8">Décollage de l'écran à la ventouse + médiator</text></g>`;
  return frame(w, h, g);
}

module.exports = { sceneScreen, _P:P };
