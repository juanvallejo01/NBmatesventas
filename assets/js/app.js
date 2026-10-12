(function () {
  'use strict';

  var CFG = window.CONFIG || {};
  // Destilados solo aparecen si hay número de licencia OCM en config.js
  var CANNABIS_ON = !!String(CFG.cannabisLicense || '').trim();
  var PRODUCTS = (window.PRODUCTS || []).concat(CANNABIS_ON ? (window.CANNABIS || []).map(function (p) {
    return Object.assign({ puffs: 0 }, p, { type: 'destilado' });
  }) : []);
  var COMBOS = window.COMBOS || [];
  var I18N = window.I18N;
  var t = I18N.t;
  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  var TYPES = ['all', 'desechable', 'recargable', 'pod', 'open', 'destilado'];
  var IMG_FALLBACK = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect x="128" y="40" width="44" height="200" rx="14" fill="#8a8a92" opacity=".35"/><rect x="128" y="150" width="44" height="90" rx="14" fill="#c9a227" opacity=".7"/><rect x="138" y="20" width="24" height="26" rx="6" fill="#55555c" opacity=".5"/></svg>');

  var ICON_BOLT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>';
  var ICON_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6Z"/></svg>';

  var $ = function (id) { return document.getElementById(id); };
  var state = { type: 'all', q: '', sort: 'puffs-asc' };
  var order = { item: null, qty: 1, spot: null };

  // ───────── Helpers ─────────
  function money(n) {
    n = Number(n || 0);
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  }
  function num(n) { return Number(n).toLocaleString('en-US'); }
  function pname(p) { return (I18N.lang === 'en' && p.nameEn) || p.name; }
  function pnote(p) { return (I18N.lang === 'en' && p.noteEn) || p.note || ''; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function img(p) {
    if (p.image) return p.image;
    return p.type === 'destilado' ? IMG_FALLBACK : 'assets/img/products/' + p.id + '.webp';
  }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  function puffsLabel(p) {
    if (p.type === 'destilado') return [p.size, p.thc ? p.thc + '% THC' : '', p.strain ? t('strain.' + p.strain) : ''].filter(Boolean).join(' · ');
    if (p.puffs > 0) return num(p.puffs) + ' ' + t('p.puffs');
    if (p.type === 'open') return t('p.open');
    return t('p.battery');
  }
  function puffsPill(p) {
    return '<span class="puffs' + (p.puffs > 0 ? '' : ' puffs--muted') + '">' +
      (p.puffs > 0 ? ICON_BOLT : '') + esc(puffsLabel(p)) + '</span>';
  }

  function waLink(number, text) {
    var n = String(number || '').replace(/\D/g, '');
    return 'https://wa.me/' + n + '?text=' + encodeURIComponent(text);
  }

  var toastTimer;
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  // ───────── Branding & counts ─────────
  document.querySelectorAll('[data-brand]').forEach(function (el) { el.textContent = CFG.brand || el.textContent; });
  function setTitle() { document.title = (CFG.brand || 'NBmates') + ' · ' + t('meta.title'); }
  if ($('heroCount')) $('heroCount').textContent = PRODUCTS.length;
  $('factModels').textContent = PRODUCTS.length;
  if (CANNABIS_ON) {
    $('cannabisLegal').hidden = false;
    $('cannabisLicense').textContent = CFG.cannabisLicense;
    $('gateText').dataset.i18n = 'gate.textCannabis';
  }
  var maxPuffs = Math.max.apply(null, PRODUCTS.map(function (p) { return p.puffs; }));
  document.querySelector('.fact:nth-child(2) strong').textContent = Math.round(maxPuffs / 1000) + 'K';

  // ───────── Chips ─────────
  var chips = $('chips');
  function renderChips() {
    chips.innerHTML = TYPES.map(function (type) {
      var count = type === 'all' ? PRODUCTS.length : PRODUCTS.filter(function (p) { return p.type === type; }).length;
      if (!count) return '';
      return '<button class="chip" type="button" role="tab" data-type="' + type + '" aria-selected="' + (type === state.type) + '">' +
        esc(t('type.' + type)) + '<small>' + count + '</small></button>';
    }).join('');
  }
  chips.addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    state.type = b.dataset.type;
    chips.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-selected', c === b); });
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    render();
  });

  var qTimer;
  $('q').addEventListener('input', function (e) {
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { state.q = norm(e.target.value.trim()); render(); }, 120);
  });
  $('sort').addEventListener('change', function (e) { state.sort = e.target.value; render(); });

  // ───────── Catalog ─────────
  function sorted(list) {
    var s = state.sort;
    return list.slice().sort(function (a, b) {
      if (s === 'price-asc') return a.price - b.price;
      if (s === 'price-desc') return b.price - a.price;
      // Sin puffs (baterías/open) al final en ambos órdenes de puffs
      var pa = a.puffs || (s === 'puffs-asc' ? Infinity : -1);
      var pb = b.puffs || (s === 'puffs-asc' ? Infinity : -1);
      return s === 'puffs-desc' ? pb - pa : pa - pb || a.price - b.price;
    });
  }

  function card(p, i) {
    var badge = '';
    if (p.soldOut) badge = '<span class="card__badge card__badge--soft">' + esc(t('p.soldOut')) + '</span>';
    else if (p.oldPrice) badge = '<span class="card__badge">' + esc(t('p.sale')) + '</span>';
    else if (p.tags && p.tags.length) badge = '<span class="card__badge card__badge--soft">' + esc(p.tags[0]) + '</span>';

    return '<button type="button" class="card' + (p.soldOut ? ' is-out' : '') + '" data-id="' + p.id + '" style="animation-delay:' + Math.min(i, 12) * 30 + 'ms"' +
      ' aria-label="' + esc(t('p.order')) + ' ' + esc(pname(p)) + ', ' + esc(puffsLabel(p)) + ', ' + money(p.price) + '">' +
      '<div class="card__media">' + badge +
      '<img src="' + img(p) + '" alt="" loading="lazy" decoding="async" width="300" height="300"></div>' +
      '<div class="card__body">' +
      '<span class="card__brand">' + esc(p.brand) + '</span>' +
      '<span class="card__name">' + esc(pname(p)) + '</span>' +
      puffsPill(p) +
      '<div class="card__foot"><span class="price">' + (p.oldPrice ? '<s>' + money(p.oldPrice) + '</s>' : '') + money(p.price) + '</span>' +
      '<span class="card__go" aria-hidden="true">' + ICON_ARROW + '</span></div>' +
      '</div></button>';
  }

  function render() {
    var list = PRODUCTS.filter(function (p) {
      if (state.type !== 'all' && p.type !== state.type) return false;
      if (state.q && norm(p.name + ' ' + (p.nameEn || '') + ' ' + p.brand + ' ' + p.puffs).indexOf(state.q) === -1) return false;
      return true;
    });
    list = sorted(list);
    $('grid').innerHTML = list.map(card).join('');
    $('empty').hidden = list.length > 0;
    $('count').textContent = list.length + (list.length === 1 ? ' vape' : ' vapes');
  }

  $('grid').addEventListener('click', function (e) {
    var c = e.target.closest('.card');
    if (!c) return;
    var p = byId[c.dataset.id];
    if (p.soldOut) { toast(t('p.soldOutToast')); return; }
    openSheet(p, c);
  });

  // ───────── Combos ─────────
  function comboView(c) {
    var items = c.items.map(function (id) { return byId[id]; });
    var regular = items.reduce(function (s, p) { return s + p.price; }, 0);
    var puffs = items.reduce(function (s, p) { return s + p.puffs; }, 0);
    return {
      id: c.id, name: c.name, price: c.price, items: items, combo: true,
      puffs: puffs, save: regular - c.price,
      meta: function () { return t('combo.meta', { n: items.length, p: num(puffs) }); },
    };
  }
  var comboViews = COMBOS.map(comboView);
  if (!comboViews.length) {
    $('combos').hidden = true;
    document.querySelectorAll('a[href="#combos"]').forEach(function (a) { a.hidden = true; });
  }
  var comboById = {};
  comboViews.forEach(function (c) { comboById[c.id] = c; });

  function renderCombos() {
    $('comboRail').innerHTML = comboViews.map(function (c) {
    return '<button type="button" class="combo" data-combo="' + c.id + '" aria-label="' + esc(t('combo.order')) + ' ' + esc(c.name) + ', ' + money(c.price) + '">' +
      '<div class="combo__media">' + c.items.map(function (p) {
        return '<img src="' + img(p) + '" alt="" loading="lazy" decoding="async">';
      }).join('') + '</div>' +
      '<div class="combo__body"><span class="combo__name">' + esc(c.name) + '</span>' +
      '<span class="combo__meta">' + esc(c.meta()) + '</span>' +
      '<div class="combo__foot"><span class="price">' + money(c.price) + '</span>' +
      (c.save > 0 ? '<span class="combo__save">' + esc(t('combo.save', { x: money(c.save) })) + '</span>' : '') +
      '</div></div></button>';
    }).join('');
  }

  $('comboRail').addEventListener('click', function (e) {
    var b = e.target.closest('.combo');
    if (b) openSheet(comboById[b.dataset.combo], b);
  });

  // ───────── Order sheet ─────────
  var sheet = $('sheet');
  var form = $('orderForm');
  var lastFocus = null;
  var max = CFG.maxQty || 10;

  if (!(CFG.pickupPoints || []).length) $('pickupBox').hidden = true;
  $('spots').innerHTML = (CFG.pickupPoints || []).map(function (s) {
    return '<button type="button" class="chip" data-spot="' + esc(s) + '" aria-pressed="false">' + esc(s) + '</button>';
  }).join('');

  function openSheet(item, from) {
    order.item = item;
    order.qty = 1;
    lastFocus = from || document.activeElement;

    var pics = item.combo ? item.items : [item];
    $('sheetMedia').innerHTML = pics.map(function (p) { return '<img src="' + img(p) + '" alt="">'; }).join('');
    $('sheetBrand').textContent = item.combo ? t('combo.label') : item.brand;
    $('sheetName').textContent = item.combo ? item.name : pname(item);
    $('sheetPuffs').innerHTML = item.combo
      ? '<span class="puffs">' + ICON_BOLT + esc(item.meta()) + '</span>'
      : puffsPill(item);
    var note = item.combo ? (item.save > 0 ? t('combo.saveNote', { x: money(item.save) }) : '') : pnote(item);
    $('sheetNote').textContent = note;
    $('sheetNote').hidden = !note;
    $('orderError').hidden = true;
    form.querySelectorAll('.invalid').forEach(function (el) { el.classList.remove('invalid'); });
    $('flavor').value = '';

    updateQty();
    sheet.hidden = false;
    document.body.classList.add('locked');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { sheet.classList.add('open'); });
    });
    setTimeout(function () { sheet.querySelector('.sheet__close').focus({ preventScroll: true }); }, 50);
  }

  function closeSheet() {
    if (sheet.hidden) return;
    sheet.classList.remove('open');
    document.body.classList.remove('locked');
    setTimeout(function () { sheet.hidden = true; }, 380);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  sheet.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeSheet(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });

  function updateQty() {
    $('qty').textContent = order.qty;
    $('total').textContent = money(order.item.price * order.qty);
    form.querySelector('[data-step="-1"]').disabled = order.qty <= 1;
    form.querySelector('[data-step="1"]').disabled = order.qty >= max;
  }
  form.querySelectorAll('[data-step]').forEach(function (b) {
    b.addEventListener('click', function () {
      order.qty = Math.min(max, Math.max(1, order.qty + Number(b.dataset.step)));
      updateQty();
    });
  });

  function mode() { return form.querySelector('input[name="mode"]:checked').value; }
  form.addEventListener('change', function (e) {
    if (e.target.name !== 'mode') return;
    var pickup = mode() === 'pickup';
    $('pickupBox').hidden = !pickup || !(CFG.pickupPoints || []).length;
    $('deliveryBox').hidden = pickup;
    $('orderError').hidden = true;
    if (!pickup) setTimeout(function () { $('place').focus(); }, 50);
  });

  $('spots').addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    order.spot = b.dataset.spot;
    $('spots').querySelectorAll('.chip').forEach(function (c) {
      var on = c === b;
      c.setAttribute('aria-pressed', on);
    });
    $('orderError').hidden = true;
  });

  function fail(msg, el) {
    var err = $('orderError');
    err.textContent = msg;
    err.hidden = false;
    if (el) { el.classList.add('invalid'); el.focus(); } else { err.scrollIntoView({ block: 'nearest' }); }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var it = order.item;
    var pickup = mode() === 'pickup';
    var place = $('place').value.trim();
    var flavor = $('flavor').value.trim();
    var time = $('time').value.trim();
    var name = $('name').value.trim();

    $('place').classList.remove('invalid');
    if (pickup && !order.spot && (CFG.pickupPoints || []).length) return fail(t('order.errSpot'));
    if (!pickup && !place) return fail(t('order.errPlace'), $('place'));

    var lines = [t(it.combo ? 'msg.hiCombo' : 'msg.hiVape'), ''];
    if (it.combo) {
      lines.push('*' + it.name + '*');
      lines.push(it.meta());
    } else {
      lines.push('*' + pname(it) + '* — ' + puffsLabel(it));
    }
    lines.push(t('msg.qty') + ': ' + order.qty);
    if (flavor) lines.push(t('msg.flavor') + ': ' + flavor);
    lines.push(t('msg.total') + ': ' + money(it.price * order.qty) + ' USD');
    lines.push('');
    lines.push(pickup ? t('msg.pickup') + ': ' + (order.spot || t('msg.tbd')) : t('msg.delivery') + ': ' + place);
    if (time) lines.push(t('msg.time') + ': ' + time);
    if (name) lines.push(t('msg.name') + ': ' + name);

    store('nb_name', name);
    window.open(waLink(CFG.whatsapp, lines.join('\n')), '_blank', 'noopener');
    closeSheet();
    toast(t('msg.opening'));
  });

  var savedName = store('nb_name');
  if (savedName) $('name').value = savedName;

  // ───────── Wholesale ─────────
  function setWholesale() { $('wholesaleBtn').href = waLink(CFG.whatsappWholesale, t('wh.msg')); }

  if (!CFG.whatsapp) console.warn('[config] Falta el número de WhatsApp de pedidos en assets/js/config.js');
  if (!CFG.whatsappWholesale) console.warn('[config] Falta el número de WhatsApp mayorista en assets/js/config.js');

  // ───────── Age gate ─────────
  var gate = $('gate');
  if (store('nb_age21_ok') !== '1') {
    gate.hidden = false;
    document.body.classList.add('locked');
    setTimeout(function () { $('gateYes').focus(); }, 50);
  }
  $('gateYes').addEventListener('click', function () {
    store('nb_age21_ok', '1');
    gate.hidden = true;
    document.body.classList.remove('locked');
  });
  $('gateNo').addEventListener('click', function () {
    $('gateDeny').hidden = false;
    $('gateYes').hidden = true;
    $('gateNo').hidden = true;
  });

  // ───────── Nav & reveal ─────────
  var nav = $('nav');
  window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 8); }, { passive: true });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // ───────── Idioma ─────────
  var langBtn = $('langBtn');
  function applyLang() {
    I18N.apply();
    langBtn.textContent = I18N.lang === 'es' ? 'EN' : 'ES';
    setTitle();
    setWholesale();
    renderChips();
    renderCombos();
    render();
  }
  langBtn.addEventListener('click', function () { I18N.set(I18N.lang === 'es' ? 'en' : 'es'); });
  I18N.onChange(applyLang);

  applyLang();
})();
