(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('kk-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var cur = root.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('kk-theme', next); } catch (e) {}
  });
  document.getElementById('yr').textContent = new Date().getFullYear();

  document.querySelectorAll('.spot').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  var words = ['Full-Stack Developer', 'Software Developer Trainee', 'MERN Stack Builder', 'n8n Automation', 'ML Explorer'];
  var i = 0, el = document.getElementById('role-word');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(function () { i = (i + 1) % words.length; el.textContent = words[i]; }, 2400);
  }

  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy'));
      var text = src.textContent.trim();
      function done() { var o = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = o; }, 1400); }
      function fallback() {
        var r = document.createRange(); r.selectNodeContents(src);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        btn.textContent = 'Selected'; setTimeout(function () { btn.textContent = 'Copy'; }, 1400);
      }
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
    });
  });

  /* motion: parallax, cursor glow, card tilt */
  var fine = window.matchMedia('(pointer: fine)').matches;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fine && !calm) {
    var cur = document.querySelector('.cursor'), tx = 0, ty = 0, raf = 0;
    window.addEventListener('pointermove', function (e) {
      root.style.setProperty('--px', ((e.clientX / window.innerWidth) - .5).toFixed(3));
      root.style.setProperty('--py', ((e.clientY / window.innerHeight) - .5).toFixed(3));
      tx = e.clientX; ty = e.clientY; cur.classList.add('on');
      if (!raf) raf = requestAnimationFrame(function () { cur.style.transform = 'translate(' + tx + 'px,' + ty + 'px)'; raf = 0; });
    }, { passive: true });
    document.addEventListener('pointerleave', function () { cur.classList.remove('on'); });
    document.querySelectorAll('.proj').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-6px)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });
  }
})();
