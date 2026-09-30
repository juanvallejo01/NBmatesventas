/*
 * CATÁLOGO — edita aquí precios, puffs y disponibilidad.
 *
 * price      Precio por unidad en COP (provisional: cámbialo por el tuyo).
 * oldPrice   Opcional. Si existe, se muestra tachado como oferta.
 * puffs      0 = no aplica (baterías y sistemas open).
 * type       desechable | recargable | pod | open
 * soldOut    true para mostrarlo como agotado sin borrarlo.
 */
window.PRODUCTS = [
  // ── Desechables ──────────────────────────────────────────────
  { id: 'waka-stick', name: 'WAKA Stick', brand: 'WAKA', puffs: 2000, price: 28000, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-solo-2', name: 'WAKA Solo 2', brand: 'WAKA', puffs: 3500, price: 45000, type: 'desechable', tags: ['Premium'] },
  { id: 'extra-3k', name: 'Extra 3K', brand: 'Extra', puffs: 3000, price: 40000, type: 'desechable' },
  { id: 'hqd-cuvie-air', name: 'HQD Cuvie Air', brand: 'HQD', puffs: 4000, price: 13000, type: 'desechable' },
  { id: 'fume-recharger', name: 'Fume Recharger', brand: 'Fume', puffs: 5000, price: 15000, type: 'desechable' },
  { id: 'death-row-5k', name: 'Death Row 5K', brand: 'Death Row', puffs: 5000, price: 15000, type: 'desechable' },
  { id: 'lost-mary-os5000', name: 'Lost Mary OS5000', brand: 'Lost Mary', puffs: 5000, price: 15000, type: 'desechable' },
  { id: 'lost-mary-mo5000', name: 'Lost Mary MO5000', brand: 'Lost Mary', puffs: 5000, price: 15000, type: 'desechable' },
  { id: 'ignite-5000', name: 'Ignite 5000', brand: 'Ignite', puffs: 5000, price: 15000, type: 'desechable' },
  { id: 'death-row-7k', name: 'Death Row 7K', brand: 'Death Row', puffs: 7000, price: 15000, type: 'desechable' },
  { id: 'tyson-7k', name: 'Tyson 7K', brand: 'Tyson', puffs: 7000, price: 15000, type: 'desechable' },
  { id: 'snowwolf-easy', name: 'Snowwolf Easy', brand: 'Snowwolf', puffs: 8000, price: 15000, type: 'desechable' },
  { id: 'pyne-pod-8500', name: 'Pyne Pod 8500', brand: 'Pyne Pod', puffs: 8500, price: 20000, type: 'desechable' },
  { id: 'waka-smash-air', name: 'WAKA Smash Air', brand: 'WAKA', puffs: 10000, price: 60000, type: 'desechable', tags: ['Premium'] },
  { id: 'nola-bar-10000', name: 'Nola Bar 10000', brand: 'Nola Bar', puffs: 10000, price: 20000, type: 'desechable' },
  { id: 'ijoy-captain', name: 'iJoy Captain 10000', brand: 'iJoy', puffs: 10000, price: 22000, type: 'desechable' },
  { id: 'ijoy-bar-sd10000', name: 'iJoy Bar SD10000', brand: 'iJoy', puffs: 10000, price: 22000, type: 'desechable' },
  { id: 'nicky-jam-10000', name: 'Nicky Jam 10000', brand: 'Nicky Jam', puffs: 10000, price: 20000, oldPrice: 22000, type: 'desechable' },
  { id: 'north-ft12000', name: 'North FT12000', brand: 'North', puffs: 12000, price: 22000, type: 'desechable' },
  { id: 'beyond-12000', name: 'Beyond 12000', brand: 'IVG', puffs: 12000, price: 22000, type: 'desechable' },
  { id: 'mtrx-12000', name: 'MTRX 12000', brand: 'MTRX', puffs: 12000, price: 25000, type: 'desechable' },
  { id: 'snoopy-smoke', name: 'Snoopy Smoke', brand: 'Snoopy Smoke', puffs: 15000, price: 25000, type: 'desechable' },
  { id: 'chris-brown', name: 'Chris Brown 15000', brand: 'Chris Brown', puffs: 15000, price: 25000, type: 'desechable' },
  { id: 'baddy-bar-15000', name: 'Baddy Bar 15000', brand: 'Baddy Bar', puffs: 15000, price: 27000, type: 'desechable' },
  { id: 'nicky-jam-15000', name: 'Nicky Jam 15000', brand: 'Nicky Jam', puffs: 15000, price: 27000, type: 'desechable' },
  { id: 'priv-bar-turbo', name: 'Priv Bar Turbo', brand: 'Priv Bar', puffs: 15000, price: 30000, type: 'desechable' },
  { id: 'starbuzz-15k', name: 'Starbuzz 15K', brand: 'Starbuzz', puffs: 15000, price: 30000, type: 'desechable' },
  { id: 'humo-azul', name: 'Humo Azul Edición Especial', brand: 'Humo Azul', puffs: 15000, price: 45000, type: 'desechable', tags: ['Edición especial'] },
  { id: 'binaries-sv15000', name: 'Binaries SV15000', brand: 'Binaries', puffs: 15000, price: 40000, type: 'desechable' },
  { id: 'waka-nova', name: 'WAKA Nova', brand: 'WAKA', puffs: 16000, price: 75000, type: 'desechable', tags: ['Premium'] },
  { id: 'bugatti-spaceship', name: 'Bugatti Spaceship', brand: 'Bugatti', puffs: 17000, price: 27000, type: 'desechable' },
  { id: 'elux-cyberover', name: 'Elux Cyberover', brand: 'Elux', puffs: 18000, price: 27000, type: 'desechable' },
  { id: 'spaceman-18000', name: 'Spaceman 18000', brand: 'Spaceman', puffs: 18000, price: 28000, type: 'desechable' },
  { id: 'spaceman-20000', name: 'Spaceman 20000', brand: 'Spaceman', puffs: 20000, price: 30000, type: 'desechable' },
  { id: 'vookbar-cyber', name: 'Vookbar Cyber', brand: 'Vookbar', puffs: 20000, price: 25000, type: 'desechable', note: 'Sin garantía · se entrega probado' },
  { id: 'airfuze-jet', name: 'Airfuze Jet 20000', brand: 'Airfuze', puffs: 20000, price: 30000, type: 'desechable' },
  { id: 'craftbox-v-play', name: 'Craftbox V-Play', brand: 'Craftbox', puffs: 20000, price: 35000, type: 'desechable' },
  { id: 'vera-vr22000', name: 'Vera VR22000', brand: 'Vera', puffs: 22000, price: 30000, type: 'desechable' },
  { id: 'kylin-bar-30000', name: 'Kylin Bar 30000', brand: 'Kylin Bar', puffs: 30000, price: 28000, oldPrice: 33000, type: 'desechable' },
  { id: 'equator-eq30000', name: 'Equator EQ30000', brand: 'Equator', puffs: 30000, price: 35000, type: 'desechable' },
  { id: 'airfuze-smart', name: 'Airfuze Smart Vape', brand: 'Airfuze', puffs: 30000, price: 35000, type: 'desechable' },
  { id: 'podz-pulse-x', name: 'PODZ Pulse X', brand: 'PODZ', puffs: 30000, price: 35000, type: 'desechable' },
  { id: 'extra-bar-turbo', name: 'Extra Bar Turbo 30K', brand: 'Extra Bar', puffs: 30000, price: 35000, type: 'desechable' },
  { id: 'hello-synix', name: 'Hello Synix', brand: 'Hello', puffs: 30000, price: 38000, type: 'desechable' },
  { id: 'bang-leader', name: 'Bang Leader', brand: 'Bang', puffs: 32000, price: 38000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'hookalit', name: 'Hookalit', brand: 'Hookalit', puffs: 35000, price: 35000, type: 'desechable' },
  { id: 'tomoro-d15', name: 'Tomoro D15', brand: 'Tomoro', puffs: 35000, price: 33000, type: 'desechable' },
  { id: 'nexa-pix', name: 'Nexa Pix', brand: 'Nexa', puffs: 35000, price: 35000, type: 'desechable' },
  { id: 'waka-blast', name: 'WAKA Blast', brand: 'WAKA', puffs: 36000, price: 85000, type: 'desechable', tags: ['Premium'] },
  { id: 'tomoro-t1', name: 'Tomoro T1', brand: 'Tomoro', puffs: 40000, price: 35000, type: 'desechable' },
  { id: 'dojo-sphere-s', name: 'Dojo Sphere S', brand: 'Dojo', puffs: 40000, price: 35000, type: 'desechable' },
  { id: 'dojo-sphere-x', name: 'Dojo Sphere X', brand: 'Dojo', puffs: 40000, price: 35000, type: 'desechable' },
  { id: 'solo-bar-defender', name: 'Solo Bar Defender', brand: 'Solo Bar', puffs: 40000, price: 38000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'spaceman-50k', name: 'Spaceman 50K', brand: 'Spaceman', puffs: 50000, price: 40000, type: 'desechable' },
  { id: 'lost-angel', name: 'Lost Angel', brand: 'Lost Angel', puffs: 50000, price: 40000, type: 'desechable' },
  { id: 'dinner-lady-galax', name: 'Dinner Lady Galax', brand: 'Dinner Lady', puffs: 60000, price: 45000, type: 'desechable' },

  // ── Recargables ─────────────────────────────────────────────
  { id: 'chillax-go-bateria', name: 'Chillax Go · Batería', brand: 'Chillax', puffs: 0, price: 8000, type: 'recargable', note: 'Cápsula se vende por separado' },
  { id: 'chillax-go-capsula', name: 'Chillax Go · Cápsula', brand: 'Chillax', puffs: 9000, price: 20000, type: 'recargable', note: 'Requiere batería Chillax Go' },
  { id: 'life-pod-eco-2', name: 'Life Pod Eco II', brand: 'Life Pod', puffs: 10000, price: 70000, type: 'recargable' },
  { id: 'life-pod-sk', name: 'Life Pod SK', brand: 'Life Pod', puffs: 14000, price: 70000, type: 'recargable' },
  { id: 'solo-bar-30-kit', name: 'Solo Bar 30 Kit', brand: 'Solo Bar', puffs: 30000, price: 45000, type: 'recargable', tags: ['Kit completo', 'Doble sabor'] },
  { id: 'solo-bar-mate-kit', name: 'Solo Bar Mate Kit', brand: 'Solo Bar', puffs: 35000, price: 35000, type: 'recargable', tags: ['Kit completo'] },
  { id: 'solo-bar-mate-capsula', name: 'Solo Bar Mate · Cápsula', brand: 'Solo Bar', puffs: 35000, price: 20000, type: 'recargable', note: 'Solo la cápsula, sin kit' },
  { id: 'ulit-shellet-plus', name: 'Ulit Shellet Plus', brand: 'Ulit', puffs: 60000, price: 45000, type: 'recargable' },

  // ── Pods y baterías STLTH ───────────────────────────────────
  { id: 'stlth-loop-5k-kit', name: 'STLTH Loop 5K', brand: 'STLTH', puffs: 5000, price: 58000, type: 'pod', tags: ['Kit completo'] },
  { id: 'stlth-loop-2-bateria', name: 'Batería STLTH Loop 2', brand: 'STLTH', puffs: 0, price: 35000, type: 'pod', note: 'Pod se vende por separado' },
  { id: 'stlth-loop-bateria', name: 'Batería STLTH Loop', brand: 'STLTH', puffs: 0, price: 25000, type: 'pod', note: 'Pod se vende por separado' },
  { id: 'stlth-pod-loop-5k', name: 'Pod STLTH Loop 5K', brand: 'STLTH', puffs: 5000, price: 33000, type: 'pod', note: 'Requiere batería' },
  { id: 'stlth-pod-vice-5k', name: 'Pod STLTH Vice 5K', brand: 'STLTH', puffs: 5000, price: 33000, type: 'pod', note: 'Requiere batería' },
  { id: 'stlth-pod-9k', name: 'Pod STLTH 9K', brand: 'STLTH', puffs: 9000, price: 45000, type: 'pod', note: 'Requiere batería' },
  { id: 'stlth-pod-switch-15k', name: 'Pod STLTH Switch 15K', brand: 'STLTH', puffs: 15000, price: 55000, type: 'pod', tags: ['Doble sabor'], note: 'Requiere batería' },

  // ── Sistemas open ───────────────────────────────────────────
  { id: 'stlth-open', name: 'STLTH Open', brand: 'STLTH', puffs: 0, price: 90000, type: 'open' },
  { id: 'voopoo-vinci-q', name: 'Voopoo Vinci Q', brand: 'Voopoo', puffs: 0, price: 100000, type: 'open' },
  { id: 'vaporesso-xros-2', name: 'Vaporesso XROS 2', brand: 'Vaporesso', puffs: 0, price: 135000, type: 'open' },
  { id: 'vaporesso-gtx-go-40', name: 'Vaporesso GTX GO 40', brand: 'Vaporesso', puffs: 0, price: 140000, type: 'open' },
  { id: 'vaporesso-xtra', name: 'Vaporesso XTRA', brand: 'Vaporesso', puffs: 0, price: 140000, type: 'open' },
  { id: 'vaporesso-sky-solo', name: 'Vaporesso Sky Solo', brand: 'Vaporesso', puffs: 0, price: 140000, type: 'open' },
  { id: 'vaporesso-xros', name: 'Vaporesso XROS', brand: 'Vaporesso', puffs: 0, price: 160000, type: 'open' },
  { id: 'vaporesso-sky-solo-plus', name: 'Vaporesso Sky Solo Plus', brand: 'Vaporesso', puffs: 0, price: 180000, type: 'open' },
  { id: 'vaporesso-luxe-x-pro', name: 'Vaporesso Luxe X Pro', brand: 'Vaporesso', puffs: 0, price: 220000, type: 'open' },
  { id: 'smok-rpm-5', name: 'SMOK RPM 5 Kit', brand: 'SMOK', puffs: 0, price: 265000, type: 'open' },
];

/* COMBOS — items son ids de PRODUCTS; se repiten para "3x". */
window.COMBOS = [
  { id: 'combo-nicky-lost', name: 'Nicky Jam 10K + Lost Mary 5K', items: ['nicky-jam-10000', 'lost-mary-os5000'], price: 32000 },
  { id: 'combo-hqd-north', name: 'HQD Cuvie Air + North 12K', items: ['hqd-cuvie-air', 'north-ft12000'], price: 30000 },
  { id: 'combo-fume-dojo', name: 'Fume Recharger + Dojo Sphere S', items: ['fume-recharger', 'dojo-sphere-s'], price: 40000 },
  { id: 'combo-beyond-nexa', name: 'Beyond 12K + Nexa Pix 35K', items: ['beyond-12000', 'nexa-pix'], price: 55000 },
  { id: 'combo-3-nicky', name: '3 × Nicky Jam 10K', items: ['nicky-jam-10000', 'nicky-jam-10000', 'nicky-jam-10000'], price: 55000 },
  { id: 'combo-tomoro', name: 'Tomoro D15 + Tomoro T1', items: ['tomoro-d15', 'tomoro-t1'], price: 60000 },
  { id: 'combo-angel-tomoro', name: 'Lost Angel 50K + Tomoro T1', items: ['lost-angel', 'tomoro-t1'], price: 65000 },
  { id: 'combo-north-nicky-dojo', name: 'North + Nicky Jam + Dojo Sphere S', items: ['north-ft12000', 'nicky-jam-10000', 'dojo-sphere-s'], price: 65000 },
  { id: 'combo-3-airfuze', name: '3 × Airfuze Smart 30K', items: ['airfuze-smart', 'airfuze-smart', 'airfuze-smart'], price: 85000 },
  { id: 'combo-dinner-nexa-angel', name: 'Dinner Lady + Nexa Pix + Lost Angel', items: ['dinner-lady-galax', 'nexa-pix', 'lost-angel'], price: 95000 },
];
