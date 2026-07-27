const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageBreak, TableOfContents, LevelFormat, Footer, PageNumber
} = require('docx');

const content = require('./content.cjs');

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

for (const b of content) {
  switch (b.t) {
    case 'h1':
      children.push(new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 280, after: 140 },
        children: [txt(b.text, { bold: true, color: NAVY, size: 32 })],
      }));
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
    case 'pagebreak':
      children.push(new Paragraph({ children: [new PageBreak()] }));
      break;
  }
}

// ---- Title page ----
const titlePage = [
  new Paragraph({ spacing: { before: 2600 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [txt('LE GUIDE COMPLET DE LA', { bold: true, color: BLUE, size: 30 })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [txt('RÉPARATION', { bold: true, color: NAVY, size: 72 })],
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
    spacing: { before: 3200 },
    children: [txt('Diagnostic · Techniques de réparation · Micro-soudure · Business', { size: 18, color: GREY })],
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
  title: 'Le Guide Complet de la Réparation',
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
            txt('Le Guide Complet de la Réparation   ·   ', { size: 16, color: GREY }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: GREY }),
          ],
        })],
      }),
    },
    children: [...titlePage, ...tocPage, ...children],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('/home/user/amine/ebook/Guide-Reparation.docx', buf);
  console.log('DOCX écrit :', buf.length, 'octets');
});
