/*
 * CATÁLOGO — edita aquí precios, puffs y disponibilidad.
 *
 * price      Precio por unidad en USD (convertido aprox. desde COP: ajústalo).
 * nameEn     Opcional. Nombre en inglés si cambia.
 * noteEn     Opcional. Nota en inglés.
 * oldPrice   Opcional. Si existe, se muestra tachado como oferta.
 * puffs      0 = no aplica (baterías y sistemas open).
 * type       desechable | recargable | pod | open
 * soldOut    true para mostrarlo como agotado sin borrarlo.
 */
window.PRODUCTS = [
  // ── Desechables ──────────────────────────────────────────────
  { id: 'waka-stick', name: 'WAKA Stick', brand: 'WAKA', puffs: 2000, price: 7, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-solo-2', name: 'WAKA Solo 2', brand: 'WAKA', puffs: 3500, price: 11, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-smash-air', name: 'WAKA Smash Air', brand: 'WAKA', puffs: 10000, price: 15, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-nova', name: 'WAKA Nova', brand: 'WAKA', puffs: 16000, price: 19, type: 'desechable', tags: ['Premium'] },
  { id: 'nexa-pix', name: 'Nexa Pix', brand: 'Nexa', puffs: 35000, price: 9, type: 'desechable' },
  { id: 'waka-blast', name: 'WAKA Blast', brand: 'WAKA', puffs: 36000, price: 21, type: 'desechable', tags: ['Premium'] },

  // ── Baterías ────────────────────────────────────────────────
  { id: 'chillax-go-bateria', name: 'Chillax Go · Batería', nameEn: 'Chillax Go · Battery', brand: 'Chillax', puffs: 0, price: 2, type: 'pod', note: 'Cápsula se vende por separado', noteEn: 'Pod sold separately' },
  { id: 'stlth-loop-2-bateria', name: 'Batería STLTH Loop 2', nameEn: 'STLTH Loop 2 Battery', brand: 'STLTH', puffs: 0, price: 9, type: 'pod', note: 'Pod se vende por separado', noteEn: 'Pod sold separately' },
  { id: 'stlth-loop-bateria', name: 'Batería STLTH Loop', nameEn: 'STLTH Loop Battery', brand: 'STLTH', puffs: 0, price: 6, type: 'pod', note: 'Pod se vende por separado', noteEn: 'Pod sold separately' },
];

/* COMBOS — items son ids de PRODUCTS; se repiten para "3x". */
window.COMBOS = [];

/*
 * DESTILADOS (cannabis) — solo se muestran si config.js tiene cannabisLicense.
 * Pon aquí únicamente lo que tienes en inventario de tu distribuidor licenciado.
 *
 * id       único, sin espacios
 * name     nombre del producto        brand   marca
 * size     ej. '0.5g', '1g'           thc     % de THC según el COA, ej. 88.5
 * strain   indica | sativa | hibrida  price   USD
 * image    opcional, ruta a la foto (si no, se usa un dibujo genérico)
 * note / noteEn   opcional, ej. sabor
 *
 * Ejemplo:
 * { id: 'marca-producto-1g', name: 'Producto', brand: 'Marca', size: '1g', thc: 88.5, strain: 'hibrida', price: 40 },
 */
window.CANNABIS = [
];
