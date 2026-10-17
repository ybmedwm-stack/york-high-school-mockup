/* York Wildcats Spirit Store. Mockup behaviour.
   Everything here is portable into DecoNetwork's footer code snippet.
   One orchestrated motion system: scroll reveal, hero rail drift, stat count-up, mobile nav. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  /* Scroll reveal */
  var targets = document.querySelectorAll('.fade-target');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('animate-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('animate-in'); });
  }

  /* Hero rail drift: pointer and scroll parallax, two depths */
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.rail .tile'));
  var hero = document.querySelector('.hero');
  if (tiles.length && hero && !reduce && window.matchMedia('(hover: hover) and (min-width: 769px)').matches) {
    var px = 0, py = 0, tx = 0, ty = 0, sy = 0, raf = null;
    function frame() {
      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;
      tiles.forEach(function (t) {
        var d = parseFloat(t.getAttribute('data-depth')) || 0.5;
        var x = px * 14 * d;
        var y = py * 10 * d - sy * 0.06 * d;
        t.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
      });
      if (Math.abs(tx - px) > 0.002 || Math.abs(ty - py) > 0.002) raf = requestAnimationFrame(frame); else raf = null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    });
    hero.addEventListener('pointerleave', function () { tx = 0; ty = 0; kick(); });
    window.addEventListener('scroll', function () {
      var r = hero.getBoundingClientRect();
      sy = Math.max(0, -r.top);
      kick();
    }, { passive: true });
  }

  /* Count-up on the stats band */
  var counts = document.querySelectorAll('.count');
  function fmt(n, plain) { return plain ? String(n) : n.toLocaleString('en-US'); }
  function run(el) {
    var end = parseInt(el.getAttribute('data-count'), 10) || 0;
    var plain = el.hasAttribute('data-plain');
    if (reduce || end === 0) { el.textContent = fmt(end, plain); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(Math.round(end * eased), plain);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counts.forEach(function (c) { cio.observe(c); });
  } else {
    counts.forEach(run);
  }

  /* Mobile nav */
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('mobile-nav');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      panel.hidden = open;
    });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* FAQ: only one open at a time */
  var faqs = document.querySelectorAll('.faq__list details');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
})();
