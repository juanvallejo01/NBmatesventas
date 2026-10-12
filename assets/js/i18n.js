/*
 * TEXTOS — español / inglés.
 *
 * En el HTML:  data-i18n="clave"       → texto
 *              data-i18n-html="clave"  → HTML (permite <br>, <em>…)
 *              data-i18n-ph="clave"    → placeholder
 *              data-i18n-aria="clave"  → aria-label
 * En JS:       I18N.t('clave')
 */
(function () {
  'use strict';

  var DICT = {
    es: {
      'meta.title': 'Los mejores vapes',
      'meta.desc': 'Los mejores vapes: WAKA premium y Nexa Pix. Pídelo por WhatsApp y recógelo o te lo entregamos.',
      'lang.switch': 'Switch to English',
      'skip': 'Ir al catálogo',
      'nav.sections': 'Secciones',
      'nav.catalog': 'Catálogo',
      'nav.combos': 'Combos',
      'nav.how': 'Cómo pedir',
      'nav.wholesale': 'Al por mayor',
      'nav.cta': 'Pedir',
      'hero.eyebrow': 'Solo los mejores vapes',
      'hero.title': 'Los mejores vapes.<br><span class="grad">Te los llevamos.</span>',
      'hero.sub': 'Seleccionamos solo lo mejor: la línea premium WAKA y Nexa Pix, de 2,000 hasta 36,000 puffs, más baterías. Lo pides por WhatsApp y lo recoges o te lo entregamos donde estés.',
      'hero.cta': 'Ver catálogo',
      'hero.combos': 'Ver combos',
      'facts.aria': 'Resumen',
      'facts.models': 'modelos',
      'facts.puffs': 'puffs máx.',
      'facts.ways': 'formas de recibir',
      'cat.title': 'Catálogo',
      'cat.sub': 'Solo marcas top. Toca un vape para pedirlo.',
      'search.ph': 'Buscar marca o modelo',
      'search.aria': 'Buscar vape',
      'chips.aria': 'Tipo de vape',
      'sort.label': 'Ordenar',
      'sort.puffsAsc': 'Menos puffs',
      'sort.puffsDesc': 'Más puffs',
      'sort.priceAsc': 'Más barato',
      'sort.priceDesc': 'Más caro',
      'empty': 'No encontramos ese vape. Prueba con otra marca.',
      'combos.sub': 'Más puffs por menos.',
      'how.title': 'Así de fácil.',
      'how.1t': 'Elige tu vape',
      'how.1p': 'Mira los puffs y el precio de cada modelo.',
      'how.2t': 'Recoger o entrega',
      'how.2p': 'Dinos si pasas por él o dónde te lo llevamos.',
      'how.3t': 'Confirma por WhatsApp',
      'how.3p': 'El pedido llega listo al chat. Solo envíalo.',
      'wh.eyebrow': 'Al por mayor',
      'wh.title': '¿Quieres comprar al por mayor?',
      'wh.sub': 'Precios especiales por volumen para revender. Solo productos de nicotina.',
      'wh.cta': 'Haz click aquí',
      'wh.msg': 'Hola 👋 Quiero información para comprar vapes al por mayor.',
      'footer.orders': 'Pedidos por WhatsApp',
      'footer.legal': 'Venta exclusiva para mayores de 21 años. ADVERTENCIA: Este producto contiene nicotina. La nicotina es una sustancia química adictiva. Precios en dólares (USD) sujetos a cambio.',
      'sheet.close': 'Cerrar',
      'order.qty': 'Cantidad',
      'order.less': 'Menos',
      'order.more': 'Más',
      'order.flavor': 'Sabor <em>(opcional)</em>',
      'order.flavorPh': 'Ej: Mango, Blue Razz…',
      'order.mode': '¿Cómo lo quieres?',
      'order.pickup': 'Recoger',
      'order.delivery': 'Entrega',
      'order.where': '¿Dónde lo recoges?',
      'order.place': '¿Dónde te lo entregamos?',
      'order.placePh': 'Ej: 123 Main St, Apt 4B',
      'order.time': 'Hora <em>(opcional)</em>',
      'order.timePh': 'Ej: 2:30 pm',
      'order.name': 'Tu nombre <em>(opcional)</em>',
      'order.namePh': 'Ej: Camila',
      'order.submit': 'Pedir por WhatsApp',
      'order.errSpot': 'Elige dónde lo vas a recoger.',
      'order.errPlace': 'Escribe dónde te lo entregamos.',
      'gate.title': '¿Tienes 21 años o más?',
      'gate.text': 'Esta página vende productos con nicotina. Solo pueden comprar mayores de 21 años.',
      'gate.textCannabis': 'Esta página vende productos con nicotina y cannabis. Solo pueden comprar mayores de 21 años con identificación válida.',
      'footer.cannabis': 'Productos de cannabis solo para adultos de 21 años o más. Mantener fuera del alcance de niños y mascotas. En caso de ingestión accidental o consumo excesivo, llama a la línea nacional de control de envenenamiento 1-800-222-1222 o al 9-1-1. Consume con responsabilidad.',
      'footer.license': 'Licencia OCM de Nueva York:',
      'type.destilado': 'Destilados',
      'strain.indica': 'Indica',
      'strain.sativa': 'Sativa',
      'strain.hibrida': 'Híbrida',
      'gate.yes': 'Sí, tengo 21 o más',
      'gate.no': 'No',
      'gate.deny': 'Lo sentimos, no puedes ingresar.',
      'type.all': 'Todos',
      'type.desechable': 'Desechables',
      'type.recargable': 'Recargables',
      'type.pod': 'Baterías',
      'type.open': 'Sistemas open',
      'p.puffs': 'puffs',
      'p.open': 'Sistema open',
      'p.battery': 'Batería',
      'p.soldOut': 'Agotado',
      'p.sale': 'Oferta',
      'p.soldOutToast': 'Este vape está agotado por ahora',
      'p.order': 'Pedir',
      'combo.label': 'Combo',
      'combo.order': 'Pedir combo',
      'combo.meta': '{n} vapes · {p} puffs en total',
      'combo.save': 'Ahorras {x}',
      'combo.saveNote': 'Ahorras {x} frente a comprarlos por separado.',
      'msg.hiVape': 'Hola 👋 Quiero este vape:',
      'msg.hiCombo': 'Hola 👋 Quiero este combo:',
      'msg.qty': 'Cantidad',
      'msg.flavor': 'Sabor',
      'msg.total': 'Total',
      'msg.pickup': '📍 Recoger en',
      'msg.tbd': 'por definir',
      'msg.delivery': '🛵 Entregar en',
      'msg.time': '🕐 Hora',
      'msg.name': '🙋 Nombre',
      'msg.opening': 'Abriendo WhatsApp…',
    },
    en: {
      'meta.title': 'The best vapes',
      'meta.desc': 'The best vapes: premium WAKA and Nexa Pix. Order on WhatsApp for pickup or delivery.',
      'lang.switch': 'Cambiar a español',
      'skip': 'Skip to catalog',
      'nav.sections': 'Sections',
      'nav.catalog': 'Catalog',
      'nav.combos': 'Bundles',
      'nav.how': 'How to order',
      'nav.wholesale': 'Wholesale',
      'nav.cta': 'Order',
      'hero.eyebrow': 'Only the best vapes',
      'hero.title': 'The best vapes.<br><span class="grad">Delivered to you.</span>',
      'hero.sub': 'We only carry the best: the premium WAKA line and Nexa Pix, from 2,000 up to 36,000 puffs, plus batteries. Order on WhatsApp and pick it up or get it delivered wherever you are.',
      'hero.cta': 'Shop now',
      'hero.combos': 'See bundles',
      'facts.aria': 'Summary',
      'facts.models': 'models',
      'facts.puffs': 'max puffs',
      'facts.ways': 'ways to get it',
      'cat.title': 'Catalog',
      'cat.sub': 'Top brands only. Tap a vape to order.',
      'search.ph': 'Search brand or model',
      'search.aria': 'Search vapes',
      'chips.aria': 'Vape type',
      'sort.label': 'Sort',
      'sort.puffsAsc': 'Fewest puffs',
      'sort.puffsDesc': 'Most puffs',
      'sort.priceAsc': 'Lowest price',
      'sort.priceDesc': 'Highest price',
      'empty': 'We couldn’t find that vape. Try another brand.',
      'combos.sub': 'More puffs for less.',
      'how.title': 'It’s that easy.',
      'how.1t': 'Pick your vape',
      'how.1p': 'Check the puffs and price of each model.',
      'how.2t': 'Pickup or delivery',
      'how.2p': 'Tell us if you’ll pick it up or where to bring it.',
      'how.3t': 'Confirm on WhatsApp',
      'how.3p': 'Your order is ready in the chat. Just hit send.',
      'wh.eyebrow': 'Wholesale',
      'wh.title': 'Want to buy wholesale?',
      'wh.sub': 'Special volume pricing for resellers. Nicotine products only.',
      'wh.cta': 'Click here',
      'wh.msg': 'Hi 👋 I’d like info about buying vapes wholesale.',
      'footer.orders': 'Orders via WhatsApp',
      'footer.legal': 'Sales to adults 21+ only. WARNING: This product contains nicotine. Nicotine is an addictive chemical. Prices in US dollars, subject to change.',
      'sheet.close': 'Close',
      'order.qty': 'Quantity',
      'order.less': 'Less',
      'order.more': 'More',
      'order.flavor': 'Flavor <em>(optional)</em>',
      'order.flavorPh': 'e.g. Mango, Blue Razz…',
      'order.mode': 'How do you want it?',
      'order.pickup': 'Pickup',
      'order.delivery': 'Delivery',
      'order.where': 'Where will you pick it up?',
      'order.place': 'Where should we deliver it?',
      'order.placePh': 'e.g. 123 Main St, Apt 4B',
      'order.time': 'Time <em>(optional)</em>',
      'order.timePh': 'e.g. 2:30 pm',
      'order.name': 'Your name <em>(optional)</em>',
      'order.namePh': 'e.g. Alex',
      'order.submit': 'Order on WhatsApp',
      'order.errSpot': 'Choose a pickup spot.',
      'order.errPlace': 'Enter where we should deliver it.',
      'gate.title': 'Are you 21 or older?',
      'gate.text': 'This site sells nicotine products. You must be 21 or older to buy.',
      'gate.textCannabis': 'This site sells nicotine and cannabis products. You must be 21 or older with a valid ID to buy.',
      'footer.cannabis': 'Cannabis products are for use only by adults 21 years of age and older. Keep out of reach of children and pets. In case of accidental ingestion or overconsumption, contact the National Poison Control Center hotline 1-800-222-1222 or call 9-1-1. Please consume responsibly.',
      'footer.license': 'New York OCM license:',
      'type.destilado': 'Distillates',
      'strain.indica': 'Indica',
      'strain.sativa': 'Sativa',
      'strain.hibrida': 'Hybrid',
      'gate.yes': 'Yes, I’m 21+',
      'gate.no': 'No',
      'gate.deny': 'Sorry, you can’t enter.',
      'type.all': 'All',
      'type.desechable': 'Disposables',
      'type.recargable': 'Rechargeable',
      'type.pod': 'Batteries',
      'type.open': 'Open systems',
      'p.puffs': 'puffs',
      'p.open': 'Open system',
      'p.battery': 'Battery',
      'p.soldOut': 'Sold out',
      'p.sale': 'Sale',
      'p.soldOutToast': 'This vape is sold out for now',
      'p.order': 'Order',
      'combo.label': 'Bundle',
      'combo.order': 'Order bundle',
      'combo.meta': '{n} vapes · {p} puffs total',
      'combo.save': 'Save {x}',
      'combo.saveNote': 'You save {x} vs. buying them separately.',
      'msg.hiVape': 'Hi 👋 I’d like this vape:',
      'msg.hiCombo': 'Hi 👋 I’d like this bundle:',
      'msg.qty': 'Quantity',
      'msg.flavor': 'Flavor',
      'msg.total': 'Total',
      'msg.pickup': '📍 Pickup at',
      'msg.tbd': 'TBD',
      'msg.delivery': '🛵 Deliver to',
      'msg.time': '🕐 Time',
      'msg.name': '🙋 Name',
      'msg.opening': 'Opening WhatsApp…',
    },
  };

  var KEY = 'nb_lang';
  var listeners = [];

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function initial() {
    var s = saved();
    if (s && DICT[s]) return s;
    return /^es\b/i.test(navigator.language || '') ? 'es' : 'en';
  }

  var I18N = {
    lang: initial(),
    t: function (key, vars) {
      var s = (DICT[I18N.lang] && DICT[I18N.lang][key]) || DICT.es[key] || key;
      if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
      return s;
    },
    apply: function (root) {
      root = root || document;
      var t = I18N.t;
      root.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
      root.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
      root.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
      root.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
      document.documentElement.lang = I18N.lang;
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = t('meta.desc');
    },
    set: function (lang) {
      if (!DICT[lang] || lang === I18N.lang) return;
      I18N.lang = lang;
      try { localStorage.setItem(KEY, lang); } catch (e) { /* sin almacenamiento */ }
      I18N.apply();
      listeners.forEach(function (fn) { fn(lang); });
    },
    onChange: function (fn) { listeners.push(fn); },
  };

  window.I18N = I18N;
})();
