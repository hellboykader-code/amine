const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageBreak, TableOfContents, LevelFormat, Footer, PageNumber, ImageRun
} = require('docx');

const content = require('./content.cjs');
const figMeta = require('./figs/meta.json');

// ---- Palette ----
const NAVY = '1F3A5F';
const BLUE = '2E5E8C';
const ACCENT = 'C0392B';
const NOTE_BG = 'EAF2FB';
const NOTE_BAR = '2E5E8C';
const WARN_BG = 'FDECEA';
const WARN_BAR = 'C0392B';
const TIP_BG = 'EAF7EE';
const TIP_BAR = '27AE60';
const TABLE_HEAD = '1F3A5F';
const TABLE_ALT = 'F2F5F9';
const GREY = '555555';

const FONT = 'Calibri';

function txt(text, opts = {}) { return new TextRun({ text, font: FONT, ...opts }); }

// ---- Boxed callouts (note/warn/tip) rendered as single-cell shaded tables ----
function calloutBox(title, text, bg, bar, titleColor) {
  const inner = [];
  if (title) {
    inner.push(new Paragraph({
      spacing: { after: 40 },
      children: [txt(title, { bold: true, color: titleColor, size: 21 })]
    }));
  }
  inner.push(new Paragraph({
    children: [txt(text, { size: 21, color: '222222' })]
  }));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [200, 9160],
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    },
    rows: [ new TableRow({ children: [
      new TableCell({
        width: { size: 200, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: bar, color: 'auto' },
        children: [ new Paragraph({ children: [txt(' ')] }) ],
      }),
      new TableCell({
        width: { size: 9160, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: bg, color: 'auto' },
        margins: { top: 120, bottom: 120, left: 160, right: 160 },
        children: inner,
      }),
    ]})],
  });
}

// ---- Data tables ----
function dataTable(header, rows) {
  const nCols = header.length;
  const total = 9360;
  const colW = Math.floor(total / nCols);
  const widths = new Array(nCols).fill(colW);
  widths[nCols - 1] = total - colW * (nCols - 1);

  const border = { style: BorderStyle.SINGLE, size: 4, color: 'D0D7E2' };
  const borders = { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border };

  const headRow = new TableRow({
    tableHeader: true,
    children: header.map((h, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: TABLE_HEAD, color: 'auto' },
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [ new Paragraph({ children: [txt(h, { bold: true, color: 'FFFFFF', size: 20 })] }) ],
    })),
  });

  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, ci) => new TableCell({
      width: { size: widths[ci], type: WidthType.DXA },
      shading: ri % 2 === 1 ? { type: ShadingType.CLEAR, fill: TABLE_ALT, color: 'auto' } : undefined,
      margins: { top: 50, bottom: 50, left: 100, right: 100 },
      children: [ new Paragraph({ children: [txt(c, { size: 20 })] }) ],
    })),
  }));

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: widths,
    borders,
    rows: [headRow, ...bodyRows],
  });
}

// ---- Build body from content blocks ----
const children = [];
const spacerSmall = () => new Paragraph({ spacing: { after: 80 }, children: [] });

// ---- Figure (rasterized PNG) ----
const CONTENT_W_DXA = 9360;
function figureParas(name, caption) {
  const meta = figMeta[name];
  const dispW = 470; // px at 96dpi (~4.9")
  const dispH = Math.round(dispW * meta.h / meta.w);
  const png = fs.readFileSync(`/home/user/amine/ebook2/figs/${name}.png`);
  const out = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 40 },
      children: [ new ImageRun({ type: 'png', data: png, transformation: { width: dispW, height: dispH } }) ],
    }),
  ];
  if (caption) {
    out.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [txt(caption, { italics: true, size: 17, color: GREY })],
    }));
  }
  return out;
}

// ---- Part opener banner ----
function partBanner(kicker, title) {
  const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [CONTENT_W_DXA],
    borders: { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB },
    rows: [ new TableRow({ children: [
      new TableCell({
        width: { size: CONTENT_W_DXA, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
        margins: { top: 300, bottom: 320, left: 320, right: 320 },
        children: [
          new Paragraph({ spacing: { after: 40 }, children: [txt(kicker.toUpperCase(), { bold: true, color: '9FC4E6', size: 20, characterSpacing: 60 })] }),
          new Paragraph({ children: [txt(title, { bold: true, color: 'FFFFFF', size: 40 })] }),
        ],
      }),
    ]})],
  });
}

// ---- Benefits grid (2 columns) ----
function benefitsTable(items) {
  const colW = Math.floor(CONTENT_W_DXA / 2);
  const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const cell = (t, d) => new TableCell({
    width: { size: colW, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: 'F4F8FC', color: 'auto' },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({ spacing: { after: 30 }, children: [txt(t, { bold: true, color: NAVY, size: 21 })] }),
      new Paragraph({ children: [txt(d, { size: 18, color: '4A5563' })] }),
    ],
  });
  const empty = () => new TableCell({ width: { size: colW, type: WidthType.DXA }, borders:{top:noB,bottom:noB,left:noB,right:noB}, children: [new Paragraph({ children: [] })] });
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    const c1 = cell(items[i][0], items[i][1]);
    const c2 = items[i+1] ? cell(items[i+1][0], items[i+1][1]) : empty();
    rows.push(new TableRow({ children: [c1, c2] }));
    // spacer row
    rows.push(new TableRow({ children: [
      new TableCell({ width:{size:colW,type:WidthType.DXA}, borders:{top:noB,bottom:noB,left:noB,right:noB}, children:[new Paragraph({spacing:{after:40},children:[]})] }),
      new TableCell({ width:{size:colW,type:WidthType.DXA}, borders:{top:noB,bottom:noB,left:noB,right:noB}, children:[new Paragraph({spacing:{after:40},children:[]})] }),
    ]}));
  }
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [colW, colW],
    borders: { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: { style: BorderStyle.SINGLE, size: 6, color: 'FFFFFF' }, insideVertical: { style: BorderStyle.SINGLE, size: 12, color: 'FFFFFF' } },
    rows,
  });
}

// ---- Photo placeholder slot ----
function photoSlot(label) {
  const dash = { style: BorderStyle.DASHED, size: 8, color: '9BB8D4' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [CONTENT_W_DXA],
    borders: { top: dash, bottom: dash, left: dash, right: dash, insideHorizontal: dash, insideVertical: dash },
    rows: [ new TableRow({ children: [ new TableCell({
      width: { size: CONTENT_W_DXA, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: 'F5F8FC', color: 'auto' },
      margins: { top: 260, bottom: 260, left: 200, right: 200 },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
          children: [txt('[  PHOTO  ]', { bold: true, color: '5E86AE', size: 24, characterSpacing: 40 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 30 },
          children: [txt('Emplacement photo', { bold: true, color: NAVY, size: 22 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 30 },
          children: [txt(label || '', { color: '33404D', size: 19, bold: true })] }),
        new Paragraph({ alignment: AlignmentType.CENTER,
          children: [txt('À compléter avec une photo réelle (la vôtre ou une image libre de droits)', { italics: true, color: GREY, size: 16 })] }),
      ],
    }) ] }) ],
  });
}

const isPart = (t) => /^Partie\s/i.test(t);

for (const b of content) {
  switch (b.t) {
    case 'h1':
      if (isPart(b.text)) {
        const m = b.text.match(/^(Partie\s*\d+)\s*[—-]\s*(.*)$/i);
        const kicker = m ? m[1] : 'Partie';
        const title = m ? m[2] : b.text;
        children.push(new Paragraph({ children: [new PageBreak()] }));
        // hidden heading for TOC anchor
        children.push(new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 0, after: 0 },
          children: [txt(b.text, { color: 'FFFFFF', size: 2 })],
        }));
        children.push(partBanner(kicker, title));
        children.push(spacerSmall());
      } else {
        children.push(new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 280, after: 140 },
          children: [txt(b.text, { bold: true, color: NAVY, size: 32 })],
        }));
      }
      break;
    case 'h2':
      children.push(new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 220, after: 100 },
        children: [txt(b.text, { bold: true, color: BLUE, size: 26 })],
      }));
      break;
    case 'h3':
      children.push(new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 160, after: 60 },
        children: [txt(b.text, { bold: true, color: '2C3E50', size: 23 })],
      }));
      break;
    case 'p':
      children.push(new Paragraph({
        spacing: { after: 120, line: 276 },
        alignment: AlignmentType.JUSTIFIED,
        children: [txt(b.text, { size: 22 })],
      }));
      break;
    case 'ul':
      for (const it of b.items) {
        children.push(new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 60, line: 264 },
          children: [txt(it, { size: 22 })],
        }));
      }
      children.push(spacerSmall());
      break;
    case 'ol':
      for (const it of b.items) {
        children.push(new Paragraph({
          numbering: { reference: 'ol-num', level: 0 },
          spacing: { after: 60, line: 264 },
          children: [txt(it, { size: 22 })],
        }));
      }
      children.push(spacerSmall());
      break;
    case 'note':
      children.push(calloutBox(b.title || 'À noter', b.text, NOTE_BG, NOTE_BAR, NAVY));
      children.push(spacerSmall());
      break;
    case 'warn':
      children.push(calloutBox(b.title || 'Attention', b.text, WARN_BG, WARN_BAR, ACCENT));
      children.push(spacerSmall());
      break;
    case 'tip':
      children.push(calloutBox(b.title || 'Astuce', b.text, TIP_BG, TIP_BAR, '1E7E42'));
      children.push(spacerSmall());
      break;
    case 'table':
      children.push(dataTable(b.header, b.rows));
      children.push(spacerSmall());
      break;
    case 'fig':
      for (const p of figureParas(b.name, b.caption)) children.push(p);
      break;
    case 'benefits':
      children.push(benefitsTable(b.items));
      children.push(spacerSmall());
      break;
    case 'photoslot':
      children.push(photoSlot(b.label));
      children.push(spacerSmall());
      break;
    case 'pagebreak':
      children.push(new Paragraph({ children: [new PageBreak()] }));
      break;
  }
}

// ---- Title page ----
const badge = new Table({
  alignment: AlignmentType.CENTER,
  width: { size: 30, type: WidthType.PERCENTAGE },
  columnWidths: [2800],
  borders: (() => { const n={style:BorderStyle.NONE,size:0,color:'FFFFFF'}; return {top:n,bottom:n,left:n,right:n,insideHorizontal:n,insideVertical:n}; })(),
  rows: [ new TableRow({ children: [ new TableCell({
    width: { size: 2800, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: ACCENT, color: 'auto' },
    margins: { top: 60, bottom: 60, left: 120, right: 120 },
    children: [ new Paragraph({ alignment: AlignmentType.CENTER, children: [txt('ÉDITION COMPLÈTE · 2026', { bold: true, color: 'FFFFFF', size: 17, characterSpacing: 40 })] }) ],
  }) ] }) ],
});

const titlePage = [
  new Paragraph({ spacing: { before: 2400 }, children: [] }),
  badge,
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [txt('LE GUIDE DU', { bold: true, color: BLUE, size: 30 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [txt('FLASHAGE & DÉBLOCAGE', { bold: true, color: NAVY, size: 48 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [txt('Smartphones · PC portables · Tablettes', { size: 26, color: '2C3E50' })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 360 },
    children: [txt('Smartwatchs · AirPods', { size: 26, color: '2C3E50' })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 8 } },
    children: [],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200 },
    children: [txt('Du débutant au professionnel — de A à Z', { italics: true, size: 24, color: GREY })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 2600, after: 120 },
    children: [
      txt('10 ', { bold: true, color: NAVY, size: 28 }), txt('parties   ·   ', { size: 18, color: GREY }),
      txt('9 ', { bold: true, color: NAVY, size: 28 }), txt('schémas   ·   ', { size: 18, color: GREY }),
      txt('5 ', { bold: true, color: NAVY, size: 28 }), txt('familles d’appareils   ·   ', { size: 18, color: GREY }),
      txt('3 ', { bold: true, color: NAVY, size: 28 }), txt('niveaux', { size: 18, color: GREY }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200 },
    children: [txt('Firmware · Restauration · Désimlockage légal · Android & iPhone', { size: 18, color: GREY })],
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ---- TOC page ----
const tocPage = [
  new Paragraph({
    spacing: { after: 200 },
    children: [txt('Sommaire', { bold: true, color: NAVY, size: 36 })],
  }),
  new TableOfContents('Sommaire', { hyperlink: true, headingStyleRange: '1-2' }),
  new Paragraph({ children: [new PageBreak()] }),
];

const doc = new Document({
  creator: 'Guide Réparation',
  title: 'Le Guide du Flashage & Déblocage',
  description: 'Ebook complet sur la réparation des appareils électroniques',
  features: { updateFields: true },
  numbering: {
    config: [{
      reference: 'ol-num',
      levels: [{
        level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
        style: { paragraph: { indent: { left: 460, hanging: 300 } } },
      }],
    }],
  },
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: '222222' } } },
  },
  sections: [{
    properties: { page: { margin: { top: 1200, bottom: 1200, left: 1180, right: 1180 } } },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'D0D7E2', space: 6 } },
          children: [
            txt('Le Guide du Flashage & Déblocage   ·   ', { size: 16, color: GREY }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: GREY }),
          ],
        })],
      }),
    },
    children: [...titlePage, ...tocPage, ...children],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('/home/user/amine/ebook2/Guide-Flash-Decodage.docx', buf);
  console.log('DOCX écrit :', buf.length, 'octets');
});
