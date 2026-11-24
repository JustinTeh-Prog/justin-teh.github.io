/* Arts page: renders the five acts, the role filter, the lightbox, and the
   act tracker that drives the page's light colour. Vanilla JS, no build. */
(function () {
  "use strict";
  var D = window.ARTS_DATA;
  if (!D) return;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LOADING = navigator.webdriver ? "eager" : "lazy";   // review captures need every photo loaded

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function slug(s) { return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
    album: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5-5-9 9"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z"/></svg>',
    expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>'
  };

  /* ---------------- acts + pieces ---------------- */
  var host = $("#acts");
  var all = D.productions.map(function (p) { p.kind = "stage"; p.media = p.images; return p; })
    .concat(D.screen.map(function (s) { s.kind = "screen"; s.media = s.frames; return s; }));
  var byId = {};
  all.forEach(function (p) { byId[p.id] = p; });

  function roleTags(roles) {
    return roles.map(function (r) {
      var key = r === "Organiser";
      return '<span class="role' + (key ? " role-key" : "") + '">' + (key ? ICON.star : "") + esc(r) + "</span>";
    }).join("");
  }
  function links(p) {
    if (!p.links || !p.links.length) return "";
    return '<div class="piece-links">' + p.links.map(function (l) {
      return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener noreferrer">' + (l.type === "album" ? ICON.album : ICON.play) + esc(l.label) + "</a>";
    }).join("") + "</div>";
  }
  function credit(p) {
    if (!p.credit) return "";
    return '<p class="piece-credit">' + esc(p.credit.prefix) + ': <a href="' + esc(p.credit.url) + '" target="_blank" rel="noopener noreferrer">' + esc(p.credit.handle) + "</a></p>";
  }
  function img(m, sizes) {
    // 640px and 1600px copies when both exist; the viewer always uses the 1600px one
    var srcset = m.thumb ? ' srcset="' + esc(m.thumb) + " 640w, " + esc(m.src) + ' 1600w" sizes="' + sizes + '"' : "";
    var pos = m.pos ? ' style="object-position:' + esc(m.pos) + '"' : "";
    return '<img src="' + esc(m.thumb || m.src) + '"' + srcset + pos + ' alt="' + esc(m.alt) + '" loading="' + LOADING + '" decoding="async">';
  }
  function media(p) {
    var first = p.media[0];
    var rest = p.media.slice(1, 4);
    var h = '<div class="piece-media' + (p.kind === "screen" ? " is-screen" : "") + '">' +
      '<button class="shot shot-main" type="button" data-piece="' + p.id + '" data-i="0" aria-label="Open ' + esc(p.title) + ' photos (' + p.media.length + ')">' +
        img(first, "(min-width: 961px) 640px, 100vw") +
        (p.media.length > 1 ? '<span class="shot-count">' + ICON.expand + p.media.length + "</span>" : "") +
      "</button>";
    if (rest.length) {
      h += '<div class="shot-row">' + rest.map(function (m, i) {
        return '<button class="shot" type="button" data-piece="' + p.id + '" data-i="' + (i + 1) + '" aria-label="Open photo ' + (i + 2) + " of " + esc(p.title) + '">' +
          '<img src="' + esc(m.thumb || m.src) + '" alt="' + esc(m.alt) + '" loading="' + LOADING + '" decoding="async"></button>';
      }).join("") + "</div>";
    }
    return h + "</div>";
  }
  function piece(p, n) {
    var where = p.venue ? '<span>' + esc(p.date) + '</span><span>' + esc(p.venue) + "</span>" : "<span>" + esc(p.date) + "</span>";
    return '<article class="piece' + (n % 2 ? " flip" : "") + (p.roles.indexOf("Organiser") !== -1 ? " is-organiser" : "") + '" id="' + p.id + '" data-roles="' + esc(p.roles.join("|")) + '">' +
      media(p) +
      '<div class="piece-text">' +
        '<div class="piece-head">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="piece-meta">' + where + "</p>" +
          '<div class="roles">' + roleTags(p.roles) + "</div>" +
        "</div>" +
        '<div class="piece-body">' +
          '<p class="piece-note">' + esc(p.note) + "</p>" +
          links(p) + credit(p) +
        "</div>" +
      "</div>" +
    "</article>";
  }

  D.acts.forEach(function (act, i) {
    // release order within each act; `sort` is an ISO date, ties keep data order
    var items = all.filter(function (p) { return p.act === act.id; })
      .map(function (p, k) { return { p: p, k: k }; })
      .sort(function (a, b) { return (a.p.sort || "").localeCompare(b.p.sort || "") || a.k - b.k; })
      .map(function (o) { return o.p; });
    var sec = document.createElement("section");
    sec.className = "act";
    sec.id = act.id;
    sec.setAttribute("data-act", String(i + 1));
    sec.setAttribute("aria-labelledby", act.id + "-h");
    sec.innerHTML =
      '<header class="act-head">' +
        '<span class="act-num" aria-hidden="true">' + act.numeral + "</span>" +
        '<div class="act-titles">' +
          '<h2 id="' + act.id + '-h"><span class="sr-only">Act ' + act.numeral + ": </span>" + esc(act.title) + "</h2>" +
          '<p class="act-years">' + esc(act.years) + '<span class="act-role">' + esc(act.role) + "</span></p>" +
          '<p class="act-intro">' + esc(act.intro) + "</p>" +
        "</div>" +
      "</header>" +
      '<div class="pieces">' + items.map(piece).join("") + "</div>" +
      '<p class="act-empty" hidden></p>';
    host.appendChild(sec);
  });

  /* ---------------- role filter ---------------- */
  var bar = $("#role-filter");
  var counts = {};
  all.forEach(function (p) { p.roles.forEach(function (r) { counts[r] = (counts[r] || 0) + 1; }); });
  bar.innerHTML = '<button type="button" class="rf" data-role="All" aria-pressed="true">All credits<span>' + all.length + "</span></button>" +
    D.roles.filter(function (r) { return counts[r]; }).map(function (r) {
      var key = r === "Organiser";
      return '<button type="button" class="rf' + (key ? " rf-key" : "") + '" data-role="' + esc(r) + '" aria-pressed="false">' + (key ? ICON.star : "") + esc(r) + "<span>" + counts[r] + "</span></button>";
    }).join("");
  function applyRole(role) {
    bar.querySelectorAll(".rf").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.role === role)); });
    document.querySelectorAll(".act").forEach(function (sec) {
      var shown = 0;
      sec.querySelectorAll(".piece").forEach(function (el) {
        var on = role === "All" || el.dataset.roles.split("|").indexOf(role) !== -1;
        el.hidden = !on;
        if (on) shown++;
      });
      sec.classList.toggle("is-empty", shown === 0);
      var empty = sec.querySelector(".act-empty");
      empty.hidden = shown !== 0;
      empty.textContent = "No " + role + " credits in this act.";
    });
    var band = document.querySelector(".filter-band");
    if (band) band.classList.toggle("is-filtering", role !== "All");
    // keep the chosen chip visible in the one-row sticky band
    var on = bar.querySelector('.rf[aria-pressed="true"]');
    if (on) bar.scrollLeft += on.getBoundingClientRect().left - bar.getBoundingClientRect().left - 24;
    if (role !== "All") {
      var first = document.querySelector(".piece:not([hidden])");
      if (first) first.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
    var status = $("#role-status");
    if (status) status.textContent = role === "All" ? "Showing all credits." : "Showing " + (counts[role] || 0) + (counts[role] === 1 ? " credit" : " credits") + " as " + role + ".";
  }
  bar.addEventListener("click", function (e) {
    var b = e.target.closest(".rf");
    if (!b) return;
    var role = b.dataset.role;
    applyRole(b.getAttribute("aria-pressed") === "true" && role !== "All" ? "All" : role);
  });

  /* ---------------- lightbox ---------------- */
  var lb = $("#lb"), lbCap = $("#lb-cap"), set = [], at = 0, lastFocus = null;
  var lbImg = null;   // created on first open, so the page never holds an <img> without a source
  function show() {
    if (!lbImg) {
      lbImg = document.createElement("img");
      lbImg.id = "lb-img";
      lbCap.parentNode.insertBefore(lbImg, lbCap);
    }
    var m = set.items[at];
    lbImg.src = m.src; lbImg.alt = m.alt;
    lbCap.textContent = set.title + " · " + (at + 1) + " / " + set.items.length;
    lb.classList.toggle("is-single", set.items.length < 2);
  }
  function openLb(id, i) {
    var p = byId[id];
    set = { title: p.title, items: p.media }; at = i || 0;
    lastFocus = document.activeElement;
    show();
    lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add("is-open"); });
    document.documentElement.style.overflow = "hidden";
    $("#lb-close").focus();
  }
  function closeLb() {
    lb.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    setTimeout(function () { lb.hidden = true; }, reduceMotion ? 0 : 220);
    if (lastFocus) lastFocus.focus();
  }
  function step(d) { at = (at + d + set.items.length) % set.items.length; show(); }
  host.addEventListener("click", function (e) {
    var b = e.target.closest(".shot");
    if (b) openLb(b.dataset.piece, +b.dataset.i);
  });
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", function () { step(-1); });
  $("#lb-next").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {           // keep focus inside the viewer
      var f = Array.prototype.slice.call(lb.querySelectorAll("button:not([hidden])"));
      var i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx == null) return;
    var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---------------- act tracker: drives the light colour + act nav ---------------- */
  var acts = Array.prototype.slice.call(document.querySelectorAll(".act"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-act-link]"));
  var current = 0;
  function setAct(n) {
    if (n === current) return;
    current = n;
    document.documentElement.setAttribute("data-act", String(n));
    var lr = $("#ladder-role");
    if (lr) lr.textContent = n ? D.acts[n - 1].role : "";
    navLinks.forEach(function (a) {
      var on = a.getAttribute("data-act-link") === String(n);
      a.classList.toggle("is-current", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  function track() {
    var line = window.innerHeight * 0.45, n = 0;
    acts.forEach(function (sec, i) { if (sec.getBoundingClientRect().top <= line) n = i + 1; });
    setAct(n);
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; track(); });
  }, { passive: true });
  track();

  /* ---------------- reveal as pieces enter ---------------- */
  // Automated browsers (review captures) get the settled page, never a half-faded one.
  if ("IntersectionObserver" in window && !reduceMotion && !navigator.webdriver) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    document.querySelectorAll(".piece, .act-head").forEach(function (el) { el.classList.add("rise"); io.observe(el); });
  }

  /* ---------------- deep links (#rockafall-2025 etc.) ---------------- */
  function landOnHash() {
    var id = location.hash.slice(1);
    var el = id && document.getElementById(id);
    if (!el || !el.classList.contains("piece")) return;
    el.classList.add("in", "is-target");
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    setTimeout(function () { el.classList.remove("is-target"); }, 2400);
  }
  window.addEventListener("hashchange", landOnHash);
  if (location.hash) setTimeout(landOnHash, 150);

  /* ---------------- curtain call ---------------- */
  var rec = $("#recognition");
  if (rec) rec.innerHTML = D.recognition.map(function (r) {
    var t = r.href ? '<a href="' + esc(r.href) + '" target="_blank" rel="noopener noreferrer">' + esc(r.title) + "</a>" : esc(r.title);
    return "<li>" + t + "<span>" + esc(r.year) + "</span></li>";
  }).join("");
  var tk = $("#toolkit");
  if (tk) tk.innerHTML = D.toolkit.map(function (g) {
    return '<div class="tool-group"><p>' + esc(g.label) + "</p><ul>" + g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  /* expose for hero controls */
  window.ARTS_UI = { applyRole: applyRole, openLb: openLb };
})();
