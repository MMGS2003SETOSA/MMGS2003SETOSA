/* =====================================================================
   MMGS 2003 Set Old Students Association - site behaviour
   Reads window.MMGS_* datasets (news, gallery, profiles, offices, roll,
   minutes, decisions, constitution) from data.js. No libraries are needed.
   ===================================================================== */
(function () {
  'use strict';

  var CFG = window.MMGS_CONFIG || {};
  var NEWS = window.MMGS_NEWS || [];
  var G = window.MMGS_GALLERY || [];
  var P = window.MMGS_PROFILES || [];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function pad(n) { return String(n).padStart(3, '0'); }
  function norm(s) { return String(s || '').toLowerCase(); }
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v === false || v == null) continue;
      if (k === 'class') el.className = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(el, x); }); return; }
    el.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('on'); }, 2400);
  }
  function copyText(text) {
    function fallback() {
      var ta = h('textarea', { 'aria-hidden': 'true', style: 'position:fixed;left:-9999px;top:0' });
      ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
      ta.remove(); toast(ok ? 'Copied' : 'Select the text and copy it');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast('Copied'); }, fallback);
    } else fallback();
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || 'null');
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function safeImg(src) {
    return typeof src === 'string' && /^data:image\/(jpeg|png);base64,[A-Za-z0-9+\/=]+$/.test(src) ? src : '';
  }
  function imgPath(x, folder) {
    if (typeof x === 'number') return 'images/' + (folder || 'gallery') + '/' + pad(x) + '.jpg';
    return x || '';
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-copy]');
    if (b) copyText(b.getAttribute('data-copy'));
  });

  /* ---------- header, menu, active link, reveal ---------- */
  var top = $('#top'), nav = $('#nav'), burger = $('#burger');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1400) setMenu(false); });

  if ('IntersectionObserver' in window) {
    var links = {};
    $$('.nav a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          $$('.nav a.on').forEach(function (a) { a.classList.remove('on'); });
          links[en.target.id].classList.add('on');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

    var rv = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach(function (el) { rv.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
  /* safety net: never leave content hidden */
  setTimeout(function () { $$('.reveal:not(.in)').forEach(function (el) {
    var r = el.getBoundingClientRect(); if (r.top < window.innerHeight * 1.2) el.classList.add('in'); }); }, 2500);

  $('#factMembers').textContent = P.length;
  $('#factPhotos').textContent = G.length;

  /* =================================================================
     NEWS AND EVENTS
     ================================================================= */
  var fmtDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  var fmtMonth = new Intl.DateTimeFormat('en-GB', { month: 'short' });
  var fmtTime = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true });

  function parseDT(date, time) {
    if (!date) return null;
    var p = String(date).split('-').map(Number);
    if (p.length !== 3 || p.some(isNaN)) return null;
    var t = time ? String(time).split(':').map(Number) : null;
    return new Date(p[0], p[1] - 1, p[2], t ? t[0] : 0, t ? (t[1] || 0) : 0, 0);
  }
  function prepare(item) {
    var o = Object.assign({}, item);
    o.start = parseDT(item.date, item.time);
    o.hasTime = !!(item.date && item.time);
    if (o.start) {
      var end = item.endTime ? parseDT(item.date, item.endTime) : null;
      o.end = end || (o.hasTime ? new Date(o.start.getTime() + 3 * 3600000) : new Date(o.start.getTime() + 86400000));
    }
    return o;
  }
  function whenText(o) {
    if (o.start) return fmtDate.format(o.start) + (o.hasTime ? ' · ' + fmtTime.format(o.start).toLowerCase() : '');
    return o.dateText || '';
  }
  function ymd(d) { return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0'); }
  function ymdhms(d) { return ymd(d) + 'T' + String(d.getHours()).padStart(2, '0') + String(d.getMinutes()).padStart(2, '0') + '00'; }
  function calLinks(o) {
    var s, e;
    if (o.hasTime) { s = ymdhms(o.start); e = ymdhms(o.end); }
    else { s = ymd(o.start); e = ymd(o.end); }
    var google = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(o.title)
      + '&dates=' + s + '/' + e
      + '&details=' + encodeURIComponent(o.summary || '')
      + '&location=' + encodeURIComponent(o.venue || '');
    function esc(t) { return String(t || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//MMGS 2003 Set//Events//EN', 'BEGIN:VEVENT',
      'UID:' + s + '-' + Math.random().toString(36).slice(2) + '@mmgs2003set',
      'DTSTAMP:' + ymdhms(new Date()),
      o.hasTime ? 'DTSTART:' + s : 'DTSTART;VALUE=DATE:' + s,
      o.hasTime ? 'DTEND:' + e : 'DTEND;VALUE=DATE:' + e,
      'SUMMARY:' + esc(o.title), 'DESCRIPTION:' + esc(o.summary), 'LOCATION:' + esc(o.venue),
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    return { google: google, ics: ics };
  }
  function downloadIcs(o) {
    var blob = new Blob([calLinks(o).ics], { type: 'text/calendar;charset=utf-8' });
    var a = h('a', { href: URL.createObjectURL(blob), download: o.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.ics' });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  }
  function linkBtn(o, cls) {
    if (!o.link) return null;
    var a = h('a', { class: cls, href: o.link.href || '#' }, o.link.label || 'Learn more');
    if (o.link.photo) a.addEventListener('click', function (e) { e.preventDefault(); openPhoto(o.link.photo); });
    return a;
  }

  var cdTimer = null;
  function renderNews() {
    var now = new Date();
    var items = NEWS.map(prepare);
    var upcoming = [], news = [], recaps = [];
    items.forEach(function (o) {
      if (o.type === 'event') {
        if (o.end && o.end < now) {
          recaps.push(Object.assign({}, o, { type: 'news', tag: 'Event recap', place: o.venue || '' }));
        } else upcoming.push(o);
      } else news.push(o);
    });
    recaps.sort(function (a, b) { return b.start - a.start; });
    news = recaps.concat(news);

    /* order upcoming: dated soonest first, then undated in listed order */
    var dated = upcoming.filter(function (o) { return o.start; }).sort(function (a, b) { return a.start - b.start; });
    var undated = upcoming.filter(function (o) { return !o.start; });
    var ordered = dated.concat(undated);
    var featured = ordered.filter(function (o) { return o.featured; })[0] || ordered[0] || null;
    var rest = ordered.filter(function (o) { return o !== featured; });

    renderFeatured(featured);

    var grid = $('#eventGrid'); grid.textContent = '';
    if (!rest.length && !featured) grid.appendChild(h('div', { class: 'empty' }, 'No upcoming events are listed yet. Join the WhatsApp group to hear first.'));
    rest.forEach(function (o) { grid.appendChild(eventCard(o)); });
    if (!rest.length && featured) $('#eventGrid').previousElementSibling.hidden = true;

    var ng = $('#newsGrid'); ng.textContent = '';
    if (!news.length) ng.appendChild(h('div', { class: 'empty' }, 'News will appear here.'));
    news.forEach(function (o) { ng.appendChild(newsCard(o)); });
  }

  function renderFeatured(o) {
    var box = $('#nextEvent'); box.textContent = ''; clearInterval(cdTimer);
    if (!o) { box.hidden = true; return; }
    box.hidden = false;
    var actions = h('div', { class: 'next-actions' });
    var lb = linkBtn(o, 'btn btn-gold'); if (lb) actions.appendChild(lb);
    if (o.start) {
      actions.appendChild(h('a', { class: 'btn btn-line', href: calLinks(o).google, target: '_blank', rel: 'noopener noreferrer' }, 'Add to Google Calendar'));
      actions.appendChild(h('button', { class: 'btn btn-line', type: 'button', onclick: function () { downloadIcs(o); } }, 'Download .ics'));
    }
    var body = h('div', { class: 'next-body' },
      h('span', { class: 'badge' }, 'Next event'),
      h('h3', null, o.title),
      h('p', { class: 'when' }, whenText(o)),
      h('p', { class: 'sum' }, o.summary || ''),
      (o.venue || o.tag) ? h('div', { class: 'venue' }, o.venue ? h('span', null, o.venue) : null, o.tag ? h('span', null, o.tag) : null) : null,
      actions);

    var side = h('div', { class: 'next-side' });
    var bgImg = o.image ? imgPath(o.image) : 'images/brand/hero.jpg';
    side.appendChild(h('img', { class: 'bg', src: bgImg, alt: '', loading: 'lazy' }));
    if (o.start && o.start > new Date()) {
      var nums = {};
      var cells = ['days', 'hours', 'mins', 'secs'].map(function (k) {
        nums[k] = h('b', null, '00');
        return h('div', null, nums[k], h('small', null, k));
      });
      side.appendChild(h('div', { class: 'cd' }, h('span', { class: 'cd-label' }, 'Counting down'), h('div', { class: 'cd-grid', role: 'timer', 'aria-label': 'Time until ' + o.title }, cells)));
      var tick = function () {
        var d = Math.max(0, o.start - new Date());
        var s = Math.floor(d / 1000);
        nums.days.textContent = String(Math.floor(s / 86400));
        nums.hours.textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, '0');
        nums.mins.textContent = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
        nums.secs.textContent = String(s % 60).padStart(2, '0');
        if (d === 0) { clearInterval(cdTimer); renderNews(); }
      };
      tick(); cdTimer = setInterval(tick, 1000);
    } else {
      side.appendChild(h('div', { class: 'cd' },
        h('img', { class: 'crest', src: 'images/brand/crest.png', alt: '', width: 150, height: 147 }),
        h('span', { class: 'cd-label' }, o.dateText || 'Date to be announced'),
        h('p', { class: 'cd-note' }, 'The date will be shared in the WhatsApp group and on this page.')));
    }
    box.appendChild(body); box.appendChild(side);
  }

  function eventCard(o) {
    var when = o.start
      ? h('div', { class: 'when' }, h('span', { class: 'dateplate' }, h('b', null, String(o.start.getDate())), h('small', null, fmtMonth.format(o.start))), h('span', null, whenText(o)))
      : h('div', { class: 'when' }, o.dateText || '');
    var go = linkBtn(o, 'go');
    return h('article', { class: 'ev' },
      o.tag ? h('span', { class: 'tag' }, o.tag) : null,
      h('h4', null, o.title), when,
      o.venue ? h('p', null, o.venue) : null,
      h('p', null, o.summary || ''), go);
  }

  function newsCard(o) {
    var src = o.image ? imgPath(o.image) : '';
    var pic = h('div', { class: 'pic' }, src ? h('img', { src: src, alt: '', loading: 'lazy', width: 600, height: 375 }) : h('img', { src: 'images/brand/hero.jpg', alt: '', loading: 'lazy', width: 600, height: 375 }));
    var metaBits = [o.dateText || (o.start ? fmtDate.format(o.start) : ''), o.place].filter(Boolean).join(' · ');
    return h('article', { class: 'nw' }, pic,
      h('div', { class: 'body' },
        o.tag ? h('span', { class: 'tag' }, o.tag) : null,
        h('h4', null, o.title),
        metaBits ? h('p', { class: 'meta' }, metaBits) : null,
        h('p', { class: 'sum' }, o.summary || ''),
        linkBtn(o, 'go')));
  }
  renderNews();
  /* refresh once an hour so past events move to news on long-open pages */
  setInterval(renderNews, 3600000);

  /* =================================================================
     GALLERY
     ================================================================= */
  var DUR = 5200;
  var CATS = [['all', 'All photos'], ['school', 'School and alma mater'], ['events', 'Reunions and gatherings'], ['members', 'Our members']];
  var cat = 'all', list = G.slice(), idx = 0, playing = !reduce, inView = false, hover = false, timer = null;
  var gImg = $('#gImg'), gBg = $('#gBg'), gCap = $('#gCap'), gMeta = $('#gMeta'), gCount = $('#gCount'),
      gBar = $('#gBar'), gPlay = $('#gPlay'), strip = $('#gStrip'), viewer = $('#viewer'), stage = $('#stage');

  function renderFilters() {
    var box = $('#gFilters'); box.textContent = '';
    CATS.forEach(function (c) {
      var n = c[0] === 'all' ? G.length : G.filter(function (g) { return g.c === c[0]; }).length;
      box.appendChild(h('button', { class: 'chip', type: 'button', 'aria-pressed': String(cat === c[0]), onclick: function () { setCat(c[0]); } }, c[1], h('small', null, String(n))));
    });
  }
  function setCat(k, keepId) {
    cat = k; list = k === 'all' ? G.slice() : G.filter(function (g) { return g.c === k; });
    renderFilters(); buildStrip();
    var at = 0;
    if (keepId) for (var i = 0; i < list.length; i++) if (list[i].id === keepId) at = i;
    show(at);
  }
  function buildStrip() {
    strip.textContent = '';
    list.forEach(function (g, i) {
      strip.appendChild(h('button', { class: 'th', type: 'button', 'aria-label': g.t + (g.p ? ', ' + g.p : ''), onclick: function () { show(i); } },
        h('img', { src: 'images/thumbs/' + pad(g.id) + '.jpg', alt: '', loading: 'lazy', width: 84, height: 84 })));
    });
  }
  function show(i) {
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    var g = list[idx];
    gImg.classList.remove('in');
    gImg.alt = g.t + (g.p ? ', ' + g.p : '');
    gImg.src = 'images/gallery/' + pad(g.id) + '.jpg';
    void gImg.offsetWidth; if (!reduce) gImg.classList.add('in');
    gBg.style.backgroundImage = "url('images/thumbs/" + pad(g.id) + ".jpg')";
    gCap.textContent = g.t;
    gMeta.textContent = [g.p, g.r].filter(Boolean).join(' · ') || 'MMGS 2003 Set';
    gCount.textContent = (idx + 1) + ' / ' + list.length;
    $$('.th', strip).forEach(function (b, j) {
      if (j === idx) {
        b.setAttribute('aria-current', 'true');
        strip.scrollTo({ left: b.offsetLeft - (strip.clientWidth - b.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
      } else b.removeAttribute('aria-current');
    });
    [1, -1].forEach(function (d) { var n = list[(idx + d + list.length) % list.length]; if (n) new Image().src = 'images/gallery/' + pad(n.id) + '.jpg'; });
    schedule();
  }
  function schedule() {
    clearTimeout(timer); gBar.style.transition = 'none'; gBar.style.width = '0';
    if (!playing || !inView || hover || document.hidden) return;
    void gBar.offsetWidth;
    gBar.style.transition = 'width ' + DUR + 'ms linear'; gBar.style.width = '100%';
    timer = setTimeout(function () { show(idx + 1); }, DUR);
  }
  function setPlay(p) { playing = p; gPlay.textContent = p ? 'Pause' : 'Play'; gPlay.setAttribute('aria-label', p ? 'Pause slideshow' : 'Play slideshow'); schedule(); }
  $('#gPrev').addEventListener('click', function () { show(idx - 1); });
  $('#gNext').addEventListener('click', function () { show(idx + 1); });
  gPlay.addEventListener('click', function () { setPlay(!playing); });
  stage.addEventListener('mouseenter', function () { hover = true; schedule(); });
  stage.addEventListener('mouseleave', function () { hover = false; schedule(); });
  var sx = null;
  stage.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  stage.addEventListener('pointerup', function (e) { if (sx == null) return; var dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 45) show(idx + (dx < 0 ? 1 : -1)); });
  viewer.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { show(idx + 1); e.preventDefault(); } else if (e.key === 'ArrowLeft') { show(idx - 1); e.preventDefault(); } });
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { inView = es[0].isIntersecting; schedule(); }, { threshold: .25 }).observe(viewer);
  else inView = true;
  var fs = $('#gFull');
  if (document.fullscreenEnabled) {
    fs.hidden = false;
    fs.addEventListener('click', function () {
      var p = document.fullscreenElement ? document.exitFullscreen() : viewer.requestFullscreen();
      if (p && p.catch) p.catch(function () { toast('Full screen is not available here'); });
    });
  }
  function openPhoto(id) {
    if (!G.some(function (g) { return g.id === id; })) return;
    setCat('all', id);
    $('#gallery').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    viewer.focus({ preventScroll: true });
  }
  renderFilters(); buildStrip(); setPlay(playing); show(0);

  /* =================================================================
     MEMBER DIRECTORY
     ================================================================= */
  var SERVE = ['Mentoring', 'Fundraising', 'Welfare', 'Events and reunions', 'Media and ICT', 'School projects'];
  var ENDPOINT = (CFG.signupEndpoint || '').trim();
  var LS_LIST = 'mmgs2003_signups_v1', LS_ME = 'mmgs2003_me_v1';
  var remote = [], query = '';

  function initials(n) { return String(n || '?').trim().split(/\s+/).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }
  function avatarBtn(p) {
    return h('button', { class: 'ph', type: 'button', 'aria-label': 'Open photos of ' + p.n, onclick: function () { openPhoto(p.img); } },
      h('img', { src: 'images/thumbs/' + pad(p.img) + '.jpg', alt: '', loading: 'lazy', width: 260, height: 260 }));
  }
  function seededCard(p) {
    return h('article', { class: 'card' }, avatarBtn(p),
      h('div', { class: 'meta' }, h('h3', null, p.n), h('p', { class: 'where' }, p.p || 'Class of 2003'), p.r ? h('p', { class: 'role' }, p.r) : null));
  }
  function joinedCard(m) {
    var src = safeImg(m.photo);
    var ph = h('div', { class: 'ph', style: 'cursor:default' }, src ? h('img', { src: src, alt: 'Picture of ' + m.name, width: 240, height: 240 }) : h('span', { class: 'ini' }, initials(m.name)));
    return h('article', { class: 'card' }, ph,
      h('div', { class: 'meta' }, h('h3', null, m.name), h('p', { class: 'where' }, m.location || ''), h('p', { class: 'role' }, m.profession || ''),
        m.skills ? h('p', { class: 'where' }, 'Skills: ' + m.skills) : null,
        (m.serve && m.serve.length) ? h('div', { class: 'serve' }, m.serve.map(function (s) { return h('em', null, s); })) : null,
        h('span', { class: 'new' }, 'Joined online')));
  }
  function joinedList() {
    var byId = {};
    (store(LS_LIST) || []).forEach(function (m) { if (m && m.id) byId[m.id] = m; });
    remote.forEach(function (m) { if (m && m.id) byId[m.id] = m; });
    return Object.keys(byId).map(function (k) { return byId[k]; }).filter(function (m) { return m.name; })
      .sort(function (a, b) { return (b.at || 0) - (a.at || 0); });
  }
  function renderDir() {
    var q = norm(query.trim()), dir = $('#dir'); dir.textContent = '';
    var joined = joinedList().filter(function (m) { return !q || norm([m.name, m.location, m.profession, m.skills, (m.serve || []).join(' ')].join(' ')).indexOf(q) >= 0; });
    var seeded = (q ? P : P.filter(function (p) { return !p.x; })).filter(function (p) { return !q || norm([p.n, p.p, p.r, p.x].join(' ')).indexOf(q) >= 0; });
    joined.forEach(function (m) { dir.appendChild(joinedCard(m)); });
    seeded.forEach(function (p) { dir.appendChild(seededCard(p)); });
    $('#leaders').hidden = !!q;
    var total = P.length + joinedList().length, shown = joined.length + seeded.length + (q ? 0 : P.filter(function (p) { return p.x; }).length);
    $('#dirCount').textContent = q ? shown + ' of ' + total + ' members' : total + ' members';
    $('#factMembers').textContent = total;
    if (!dir.children.length) dir.appendChild(h('div', { class: 'empty', style: 'grid-column:1/-1' }, 'No member matches “' + query.trim() + '”. Try a city, a country or part of a name.'));
  }
  function renderLeaders() {
    var box = $('#leaders'); box.textContent = '';
    var order = ['Chairman', 'General Secretary', 'Financial Secretary', 'Treasurer'];
    P.filter(function (p) { return p.x; }).sort(function (a, b) { return order.indexOf(a.x) - order.indexOf(b.x); }).forEach(function (p) {
      box.appendChild(h('div', { class: 'exec' }, avatarBtn(p), h('div', null, h('span', { class: 'role' }, p.x), h('b', null, p.n), h('span', { class: 'where' }, p.p))));
    });
  }
  function renderPlaceChips() {
    var c = {}; P.forEach(function (p) { if (p.p) p.p.split(' / ').forEach(function (x) { var k = x.split(',')[0].trim(); c[k] = (c[k] || 0) + 1; }); });
    var box = $('#placeChips'); box.textContent = '';
    Object.keys(c).sort(function (a, b) { return c[b] - c[a] || a.localeCompare(b); }).forEach(function (k) {
      box.appendChild(h('button', { class: 'chip', type: 'button', 'aria-pressed': String(norm(query) === norm(k)), onclick: function () {
        query = norm(query) === norm(k) ? '' : k; $('#q').value = query; renderPlaceChips(); renderDir(); } }, k, h('small', null, String(c[k]))));
    });
  }
  $('#q').addEventListener('input', function (e) { query = e.target.value; renderPlaceChips(); renderDir(); });
  renderLeaders(); renderPlaceChips(); renderDir();

  /* =================================================================
     SIGN-UP FORM
     ================================================================= */
  var serveBox = $('#serveOpts');
  SERVE.forEach(function (s, i) {
    serveBox.appendChild(h('label', { class: 'opt' }, h('input', { type: 'checkbox', value: s, id: 'sv' + i }), h('span', null, s)));
  });
  var f = { name: $('#fName'), phone: $('#fPhone'), email: $('#fEmail'), prof: $('#fProf'), loc: $('#fLoc'), skills: $('#fSkills'), consent: $('#fConsent') };
  var photoData = '';
  var me = store(LS_ME) || {};

  function prefill() {
    if (!me || !me.name) return;
    f.name.value = me.name || ''; f.phone.value = me.phone || ''; f.email.value = me.email || '';
    f.prof.value = me.profession || ''; f.loc.value = me.location || ''; f.skills.value = me.skills || ''; f.consent.checked = true;
    $$('input', serveBox).forEach(function (i) { i.checked = (me.serve || []).indexOf(i.value) >= 0; });
    var src = safeImg(me.photo);
    if (src) { photoData = src; var a = $('#avatar'); a.textContent = ''; a.appendChild(h('img', { src: src, alt: 'Your saved picture' })); }
    $('#joinBtn').textContent = 'Update my details';
  }
  prefill();

  function squareJpeg(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var s = Math.min(img.naturalWidth, img.naturalHeight), sx0 = (img.naturalWidth - s) / 2, sy0 = (img.naturalHeight - s) * .25;
        var c = document.createElement('canvas'); c.width = c.height = 240;
        c.getContext('2d').drawImage(img, sx0, sy0, s, s, 0, 0, 240, 240);
        URL.revokeObjectURL(url); resolve(c.toDataURL('image/jpeg', .74));
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('bad image')); };
      img.src = url;
    });
  }
  $('#photo').addEventListener('change', function (e) {
    var file = e.target.files[0], err = $('#e-photo'); err.textContent = ''; if (!file) return;
    if (file.size > 20 * 1024 * 1024) { err.textContent = 'That file is over 20 MB. Choose a smaller picture.'; return; }
    squareJpeg(file).then(function (d) {
      photoData = d; var a = $('#avatar'); a.textContent = ''; a.appendChild(h('img', { src: d, alt: 'Preview of your picture' }));
    }, function () { err.textContent = 'This picture could not be read. Use a JPG or PNG file.'; });
  });

  function setErr(k, m) {
    var e = $('#e-' + k); if (e) e.textContent = m || '';
    var el = { fName: f.name, fPhone: f.phone, fEmail: f.email, fProf: f.prof, fLoc: f.loc }[k];
    if (el) el.setAttribute('aria-invalid', m ? 'true' : 'false');
  }
  function gather() {
    return {
      name: f.name.value.trim(), phone: f.phone.value.trim(), email: f.email.value.trim(), profession: f.prof.value.trim(),
      location: f.loc.value.trim(), skills: f.skills.value.trim(),
      serve: $$('input:checked', serveBox).map(function (i) { return i.value; })
    };
  }
  function validate(v) {
    var ok = true;
    function chk(k, bad, m) { setErr(k, bad ? m : ''); if (bad) ok = false; }
    chk('fName', v.name.length < 3, 'Enter your full name.');
    chk('fPhone', v.phone.replace(/\D/g, '').length < 7, 'Enter a phone number with at least 7 digits.');
    chk('fEmail', !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email), 'Enter a valid email address.');
    chk('fProf', v.profession.length < 2, 'Enter your profession.');
    chk('fLoc', v.location.length < 2, 'Enter your city and country.');
    $('#e-fConsent').textContent = f.consent.checked ? '' : 'Tick the box to appear in the directory.';
    if (!f.consent.checked) ok = false;
    return ok;
  }
  function detailsText(v) {
    return ['MMGS 2003 Set member details', 'Name: ' + v.name, 'Phone: ' + v.phone, 'Email: ' + v.email, 'Profession: ' + v.profession,
      'Location: ' + v.location, 'Skills: ' + (v.skills || '-'), 'Willing to serve in: ' + (v.serve.join(', ') || '-')].join('\n');
  }
  function showFallback() { $('#fallback').hidden = false; }
  $('#fbCopy').addEventListener('click', function () {
    var v = gather(); if (!v.name && !v.phone) { toast('Fill in the form first'); return; } copyText(detailsText(v));
  });
  $('#fbWa').addEventListener('click', function (e) {
    var v = gather(); e.currentTarget.href = 'https://wa.me/' + (CFG.whatsappNumber || '2347038245976') + '?text=' + encodeURIComponent(detailsText(v));
  });

  function saveLocal(pub) {
    var all = store(LS_LIST) || []; all = all.filter(function (m) { return m.id !== pub.id; }); all.push(pub); store(LS_LIST, all);
  }

  $('#joinForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = $('#joinMsg'); msg.className = 'msg'; msg.textContent = '';
    if ($('#fTrap').value) return; /* honeypot */
    var v = gather();
    if (!validate(v)) { msg.className = 'msg bad'; msg.textContent = 'Check the highlighted fields and try again.'; return; }
    var id = me.id || ('m' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7));
    var existed = !!me.id;
    var pub = { id: id, name: v.name, profession: v.profession, location: v.location, skills: v.skills, serve: v.serve, photo: photoData || '', at: me.at || Date.now() };
    var btn = $('#joinBtn'); btn.disabled = true; msg.textContent = 'Saving…';

    function done(online) {
      me = Object.assign({}, v, { id: id, photo: photoData || '', at: pub.at }); store(LS_ME, me);
      saveLocal(pub);
      query = ''; $('#q').value = ''; renderPlaceChips(); renderDir();
      btn.disabled = false; btn.textContent = 'Update my details';
      if (online) {
        msg.className = 'msg ok';
        msg.textContent = existed ? 'Your details are updated. Your card is in the directory below.' : 'You are in. Your card is now in the member directory.';
        $('#fallback').hidden = true;
      } else {
        msg.className = 'msg ok';
        msg.textContent = 'Your card is added on this device. Please also send your details to the executive using the options below.';
        showFallback();
      }
      toast(online ? 'Saved to the directory' : 'Saved on this device');
    }
    if (!ENDPOINT) { done(false); return; }
    var payload = Object.assign({}, v, { id: id, photo: photoData || '', consent: true });
    fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.text(); })
      .then(function (t) {
        var j = null; try { j = JSON.parse(t); } catch (x) {}
        if (j && j.ok === false) throw new Error(j.error || 'rejected');
        done(true);
      })
      .catch(function () {
        btn.disabled = false; msg.className = 'msg bad';
        msg.textContent = 'Could not reach the sign-up service. Check your connection and try again, or use the options below.';
        showFallback();
      });
  });

  /* load the shared directory when a backend is configured */
  if (ENDPOINT) {
    var note = $('#liveNote'); note.hidden = false; note.textContent = 'Checking for new sign-ups…';
    var slow = setTimeout(function () { note.textContent = 'New sign-ups cannot be reached yet. The profiles below may be out of date.'; }, 10000);
    fetch(ENDPOINT + (ENDPOINT.indexOf('?') >= 0 ? '&' : '?') + 'action=list')
      .then(function (r) { return r.json(); })
      .then(function (j) { clearTimeout(slow); remote = (j && j.members) || []; note.hidden = true; renderDir(); })
      .catch(function () { clearTimeout(slow); note.textContent = 'New sign-ups cannot be shown right now.'; });
  }

  /* =================================================================
     DROPDOWN MENUS
     ================================================================= */
  var MIN = window.MMGS_MINUTES || [], DEC = window.MMGS_DECISIONS || [], OFF = window.MMGS_OFFICES || [],
      ROLL = window.MMGS_ROLL || [], MISS = window.MMGS_MISSING || [], LATE = window.MMGS_LATE || [],
      CON = window.MMGS_CONSTITUTION || {}, WEL = window.MMGS_WELFARE || [];
  MIN.forEach(function (m) { $('#ddMinutes').appendChild(h('a', { href: '#minutes/' + m.id }, m.title + ' · ' + m.date)); });
  DEC.forEach(function (m) { $('#ddDecisions').appendChild(h('a', { href: '#decisions/' + m.id }, m.title + ' · ' + m.date)); });
  function closeDD(except) {
    $$('.dd.open').forEach(function (d) {
      if (d === except) return;
      d.classList.remove('open'); $('.dd-btn', d).setAttribute('aria-expanded', 'false');
    });
  }
  $$('.dd-btn').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var d = b.parentNode, o = !d.classList.contains('open');
      closeDD(d); d.classList.toggle('open', o); b.setAttribute('aria-expanded', String(o));
    });
  });
  document.addEventListener('click', function () { closeDD(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDD(); });
  nav.addEventListener('click', function (e) { if (e.target.closest('.dd-menu a')) closeDD(); });

  /* =================================================================
     DOCUMENT PAGES (constitution, members lists, minutes, decisions)
     ================================================================= */
  function blocksEl(blocks) {
    var box = h('div', { class: 'doc' });
    blocks.forEach(function (b) {
      if (b.k === 'h') box.appendChild(h('h4', { class: 'doc-h' }, b.t));
      else if (b.k === 'li') box.appendChild(h('p', { class: 'doc-li l' + b.l }, h('span', { class: 'm' }, b.m), h('span', null, b.t)));
      else box.appendChild(h('p', { class: 'doc-p' }, b.n ? h('span', { class: 'm' }, b.n) : null, h('span', null, b.t)));
    });
    return box;
  }
  function body(id) { return $('[data-body="' + id + '"]'); }

  function renderDocList(id, items, opts) {
    var wrapEl = body(id); wrapEl.textContent = '';
    var q = h('input', { type: 'search', placeholder: 'Search by name', autocomplete: 'off', 'aria-label': 'Search names' });
    var count = h('span', { class: 'dir-count', 'aria-live': 'polite' });
    var list = h('ol', { class: 'names' });
    if (opts.note) wrapEl.appendChild(h('p', { class: 'doc-note' }, opts.note));
    wrapEl.appendChild(h('div', { class: 'tools' }, h('label', { class: 'sr' }, 'Search names'), q, count));
    wrapEl.appendChild(list);
    function draw() {
      var t = norm(q.value.trim()); list.textContent = '';
      var n = 0;
      items.forEach(function (name, i) {
        if (t && norm(name).indexOf(t) < 0) return;
        n++; list.appendChild(h('li', { value: i + 1, class: opts.memorial ? 'mem' : '' }, name));
      });
      count.textContent = t ? n + ' of ' + items.length : items.length + ' ' + opts.noun;
      if (!n) list.appendChild(h('li', { class: 'empty' }, 'No name matches “' + q.value.trim() + '”.'));
    }
    q.addEventListener('input', draw); draw();
  }

  function renderOffices() {
    var box = body('offices'); box.textContent = '';
    box.appendChild(h('p', { class: 'doc-note' }, 'Office holders are the members nominated and approved at the interim committee meeting of 26 December 2025. Regional Coordinators are the coordinators for each region and state chapter.'));
    var tools = h('div', { class: 'tools' }, h('button', { class: 'btn btn-ghost btn-sm', type: 'button', id: 'offAll' }, 'Expand all duties'));
    box.appendChild(tools);
    var list = h('div', { class: 'acc' });
    OFF.forEach(function (o, i) {
      var who = (o.holders || []);
      list.appendChild(h('details', { class: 'acc-i', 'data-key': 'o' + i },
        h('summary', null, h('span', { class: 'acc-n' }, String(i + 1).padStart(2, '0')),
          h('span', { class: 'acc-t' }, h('b', null, o.office), who.length ? h('em', null, who.join(' · ')) : null)),
        h('div', { class: 'acc-b' }, h('p', { class: 'acc-h' }, 'Assigned duties'), h('ol', { class: 'duties' }, o.duties.map(function (d) { return h('li', null, d); })))));
    });
    box.appendChild(list);
    var all = $('#offAll'), open = false;
    all.addEventListener('click', function () {
      open = !open; $$('details', list).forEach(function (d) { d.open = open; }); all.textContent = open ? 'Collapse all duties' : 'Expand all duties';
    });
  }

  function renderMeetings(id, items, noun) {
    var box = body(id); box.textContent = '';
    box.appendChild(h('p', { class: 'doc-note' }, id === 'minutes'
      ? 'Minutes are shown as recorded by the General Secretary. Select a meeting to read it.'
      : 'Summaries of the decisions taken at each meeting. Select a meeting to read it.'));
    var list = h('div', { class: 'acc big' });
    items.forEach(function (m, i) {
      list.appendChild(h('details', { class: 'acc-i', 'data-key': m.id },
        h('summary', null, h('span', { class: 'acc-n' }, String(i + 1).padStart(2, '0')),
          h('span', { class: 'acc-t' }, h('b', null, m.title), h('em', null, m.date + ' · ' + m.sub))),
        h('div', { class: 'acc-b' }, blocksEl(m.blocks))));
    });
    box.appendChild(list);
  }

  function renderConstitution() {
    var box = body('constitution'); box.textContent = '';
    var tabs = h('div', { class: 'tabs', role: 'tablist' });
    var panelC = h('div', { class: 'con-wrap', role: 'tabpanel' }), panelW = h('div', { role: 'tabpanel', hidden: true });
    function setTab(w) {
      panelC.hidden = w; panelW.hidden = !w;
      $$('button', tabs).forEach(function (b, i) { b.setAttribute('aria-selected', String((i === 1) === w)); });
    }
    [['Constitution', false], ['Welfare Scheme Agreement', true]].forEach(function (t) {
      tabs.appendChild(h('button', { type: 'button', role: 'tab', 'aria-selected': String(!t[1]), onclick: function () { setTab(t[1]); } }, t[0]));
    });
    box.appendChild(tabs);

    var toc = h('aside', { class: 'toc', 'aria-label': 'Articles' }, h('b', null, 'Contents'));
    var main = h('div', { class: 'con' });
    main.appendChild(h('div', { class: 'con-card pre' }, h('h3', null, 'Preamble'), h('p', null, CON.preamble),
      h('ol', { class: 'alpha' }, (CON.preambleItems || []).map(function (x) { return h('li', null, x); })), h('p', null, CON.preambleEnd)));
    toc.appendChild(h('a', { href: '#constitution', onclick: function (e) { e.preventDefault(); jump('conP'); } }, 'Preamble'));
    main.firstChild.id = 'conP';
    (CON.articles || []).forEach(function (a) {
      var id = 'conA' + a.n;
      var card = h('article', { class: 'con-card', id: id }, h('p', { class: 'art-n' }, 'Article ' + a.n), h('h3', null, a.t));
      a.items.forEach(function (it) { card.appendChild(h('p', { class: 'ci l' + it[0] }, h('span', { class: 'm' }, it[1]), h('span', null, it[2]))); });
      if (a.offices) card.appendChild(h('p', { class: 'ci l0' }, h('span', { class: 'm' }), h('a', { class: 'btn btn-ghost btn-sm', href: '#offices' }, 'See offices and assigned duties')));
      main.appendChild(card);
      toc.appendChild(h('a', { href: '#constitution', onclick: function (e) { e.preventDefault(); jump(id); } }, a.n + '. ' + a.t));
    });
    var sig = h('div', { class: 'con-card sign' }, h('p', { class: 'art-n' }, 'Signatories'),
      h('div', { class: 'sig-row' }, (CON.signed || []).map(function (s) { return h('div', null, h('b', null, s[0]), h('span', null, s[1])); })),
      h('p', { class: 'doc-note' }, 'Date of adoption: ' + (CON.adopted || '')));
    main.appendChild(sig);
    panelC.appendChild(toc); panelC.appendChild(main);
    panelW.appendChild(h('p', { class: 'doc-note' }, 'The welfare contributory scheme is voluntary. This is the agreement as supplied to the General Secretary.'));
    panelW.appendChild(blocksEl(WEL));
    box.appendChild(panelC); box.appendChild(panelW);
    function jump(id) { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
  }

  renderConstitution(); renderOffices();
  renderDocList('nominal-roll', ROLL, { noun: 'members', note: 'Names are shown in the order of the association’s nominal roll.' });
  renderDocList('missing-members', MISS, { noun: 'members yet to be reconnected', note: 'These classmates are yet to be reconnected or identified with the association. If you know where any of them is, please tell the General Secretary or any Exco member.' });
  renderDocList('deceased', LATE, { noun: 'members remembered', memorial: true, note: 'We remember our late classmates with love and gratitude. May their souls rest in peace.' });
  renderMeetings('minutes', MIN); renderMeetings('decisions', DEC);


  /* =================================================================
     ANTHEM, FLASHBACK MEMES AND LIGHTBOX
     ================================================================= */
  (function () {
    var ANT = window.MMGS_ANTHEM || [], FL = window.MMGS_FLASHBACK || [];
    var ab = body('anthem'); ab.textContent = '';
    var stz = h('div', { class: 'anthem' });
    ANT.forEach(function (st, i) {
      stz.appendChild(h('div', { class: 'stanza' }, h('span', { class: 'sn' }, String(i + 1)), h('p', null, st.map(function (l, k) { return [l, k < st.length - 1 ? h('br') : null]; }))));
    });
    ab.appendChild(h('div', { class: 'anthem-wrap' }, h('div', null, h('h2', { class: 'anthem-t' }, 'MMGS Anthem'), stz,
      h('p', { class: 'rally' }, 'Upward Still and Onward!')),
      h('figure', { class: 'flyer' }, h('img', { src: 'images/brand/anthem-sheet.jpg', alt: 'Printed sheet of the MMGS anthem', loading: 'lazy', width: 450, height: 700 }), h('figcaption', null, 'The anthem as printed for the school.'))));

    var flat = [];
    FL.forEach(function (c, ci) { c.i.forEach(function (im) { flat.push({ n: im[0], t: c.t, ci: ci }); }); });
    var fb = body('flashback'); fb.textContent = '';
    fb.appendChild(h('p', { class: 'doc-note' }, FL.length + ' flashbacks with ' + flat.length + ' pictures. Select a picture to enlarge it.'));
    var grid = h('div', { class: 'memes' });
    FL.forEach(function (c) {
      var ims = h('div', { class: 'm-imgs n' + c.i.length }, c.i.map(function (im) {
        var at = flat.findIndex(function (f) { return f.n === im[0]; });
        return h('button', { type: 'button', class: 'm-btn', 'aria-label': 'Enlarge: ' + c.t, onclick: function () { openLB(at); } },
          h('img', { src: 'images/flashback/' + pad(im[0]) + '.jpg', alt: c.t, loading: 'lazy', width: im[1], height: im[2] }));
      }));
      grid.appendChild(h('figure', { class: 'meme' }, ims, h('figcaption', null, c.t)));
    });
    fb.appendChild(grid);

    var lb = h('div', { class: 'lb', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Picture viewer', hidden: true });
    var lbImg = h('img', { alt: '' }), lbCap = h('p', { class: 'lb-cap' }), lbCount = h('span', { class: 'lb-count' }), cur = 0;
    function paint() { var f = flat[cur]; lbImg.src = 'images/flashback/' + pad(f.n) + '.jpg'; lbImg.alt = f.t; lbCap.textContent = f.t; lbCount.textContent = (cur + 1) + ' / ' + flat.length; }
    function openLB(i) { cur = i; paint(); lb.hidden = false; document.body.style.overflow = 'hidden'; closeB.focus(); }
    function closeLB() { lb.hidden = true; document.body.style.overflow = ''; }
    function step(d) { cur = (cur + d + flat.length) % flat.length; paint(); }
    var closeB = h('button', { type: 'button', class: 'lb-x', 'aria-label': 'Close', onclick: closeLB }, '×');
    lb.appendChild(closeB);
    lb.appendChild(h('button', { type: 'button', class: 'lb-a prev', 'aria-label': 'Previous picture', onclick: function () { step(-1); } }, '‹'));
    lb.appendChild(h('div', { class: 'lb-box' }, lbImg, h('div', { class: 'lb-bar' }, lbCap, lbCount)));
    lb.appendChild(h('button', { type: 'button', class: 'lb-a next', 'aria-label': 'Next picture', onclick: function () { step(1); } }, '›'));
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLB(); else if (e.key === 'ArrowRight') step(1); else if (e.key === 'ArrowLeft') step(-1);
    });
    window.addEventListener('hashchange', closeLB);
    document.body.appendChild(lb);
  })();

  /* =================================================================
     ROUTER: home sections or one document page, chosen by the URL hash
     ================================================================= */
  var PAGES = ['constitution', 'offices', 'nominal-roll', 'missing-members', 'deceased', 'minutes', 'decisions', 'financial-report', 'anthem', 'flashback'];
  var TITLES = { constitution: 'Constitution', offices: 'Portfolios and Assigned Duties', 'nominal-roll': 'Nominal Roll', 'missing-members': 'Missing Members', deceased: 'Deceased Members', minutes: 'Minutes of Previous Meetings', decisions: 'Summary of Major Decisions', 'financial-report': 'Financial Report', anthem: 'MMGS Anthem', flashback: 'Flashback Memes' };
  var homeEls = $$('main > section:not(.page)'), baseTitle = document.title, wasPage = false;
  function markNav(hash) {
    $$('.nav a.on').forEach(function (a) { a.classList.remove('on'); });
    $$('.dd-btn.has-on').forEach(function (b) { b.classList.remove('has-on'); });
    var a = $('.nav a[href="#' + hash + '"]'); if (!a) return;
    a.classList.add('on'); var dd = a.closest('.dd'); if (dd) $('.dd-btn', dd).classList.add('has-on');
  }
  function route() {
    var parts = decodeURIComponent(location.hash.slice(1)).split('/'), id = parts[0];
    if (PAGES.indexOf(id) >= 0) {
      homeEls.forEach(function (s) { s.hidden = true; });
      $$('.page').forEach(function (p) { p.hidden = p.id !== id; });
      document.body.classList.add('is-page'); wasPage = true;
      document.title = TITLES[id] + ' | ' + baseTitle;
      markNav(parts[1] ? id : id);
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (parts[1]) {
        var d = $('#' + id + ' [data-key="' + parts[1] + '"]');
        if (d) { d.open = true; setTimeout(function () { d.scrollIntoView({ block: 'start' }); window.scrollBy(0, -96); }, 60); }
      } else if (id === 'minutes' || id === 'decisions') { var f = $('#' + id + ' details'); if (f) f.open = true; }
    } else {
      var was = wasPage; wasPage = false;
      homeEls.forEach(function (s) { s.hidden = false; });
      $$('.page').forEach(function (p) { p.hidden = true; });
      document.body.classList.remove('is-page'); document.title = baseTitle;
      var el = id ? document.getElementById(id) : null;
      if (was || (id && !el)) {
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' }); else window.scrollTo({ top: 0, behavior: 'instant' });
      }
      $$('.nav a.on').forEach(function (a) { a.classList.remove('on'); }); $$('.dd-btn.has-on').forEach(function (b) { b.classList.remove('has-on'); });
      if (el) markNav(id);
      $$('.reveal').forEach(function (r) { var q = r.getBoundingClientRect(); if (q.top < window.innerHeight * 1.2) r.classList.add('in'); });
    }
  }
  window.addEventListener('hashchange', route);
  route();
})();
