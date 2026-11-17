// Lightbox: any button with data-full opens that image full screen.
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var img = box.querySelector('img');
  var caption = box.querySelector('.lightbox-caption');
  var closeBtn = box.querySelector('.lightbox-close');
  var lastFocus = null;

  function open(src, alt, title) {
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    caption.textContent = title || '';
    box.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    box.classList.remove('is-open');
    document.body.style.overflow = '';
    img.src = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('[data-full]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var thumb = btn.querySelector('img');
      open(btn.getAttribute('data-full'), thumb ? thumb.alt : '', btn.getAttribute('data-title'));
    });
  });

  box.addEventListener('click', function (e) { if (e.target !== img) close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('is-open')) close();
  });
})();
