// Registre unifié : schémas conceptuels + guides pas-à-pas + scènes d'atelier
const scenes = require('./scenes.cjs');
const sceneFns = {};
for (const k of Object.keys(scenes)) if (k.startsWith('sc_')) sceneFns[k] = scenes[k];
module.exports = Object.assign(
  {},
  require('./diagrams.cjs'),
  require('./repair-guides.cjs'),
  sceneFns,
  require('./material.cjs')
);
