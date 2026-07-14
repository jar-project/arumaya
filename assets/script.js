/* ============================================================
   ARUMAYA RESIDENCES — SCRIPT
   ============================================================ */

const WA_NUMBER = '6281382443832'; // <- ganti di sini kalau nomor sales berubah

/* ---------- Navbar shadow saat scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- Burger menu ---------- */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

/* ---------- Active link on scroll ---------- */
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...menu.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

/* ---------- Tabs (Arumaya / Garden Villa) ---------- */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('is-active', t === tab));
    document.querySelectorAll('.tabpanel').forEach(p => p.classList.toggle('is-active', p.id === target));
  });
});

/* ---------- Slider per unit ---------- */
document.querySelectorAll('.slider').forEach(slider => {
  const track  = slider.querySelector('.slider__track');
  const slides = slider.querySelectorAll('.slider__slide');
  const dots   = slider.querySelectorAll('.slider__dot');
  let index = 0;

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  };
  const go = step => {
    index = (index + step + slides.length) % slides.length;
    render();
  };

  slider.querySelector('.slider__btn--prev').addEventListener('click', () => go(-1));
  slider.querySelector('.slider__btn--next').addEventListener('click', () => go(1));
  dots.forEach((d, i) => d.addEventListener('click', () => { index = i; render(); }));

  // swipe di mobile
  let startX = null;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 45) go(diff < 0 ? 1 : -1);
    startX = null;
  }, { passive: true });
});

/* ---------- Modal detail unit ---------- */
const modal      = document.getElementById('unitModal');
const modalName  = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalBed   = document.getElementById('modalBed');
const modalBath  = document.getElementById('modalBath');
const modalArea  = document.getElementById('modalArea');
const modalWa    = document.getElementById('modalWa');

const openModal = btn => {
  const d = btn.dataset;
  modalName.textContent  = d.name;
  modalPrice.textContent = d.price;
  modalBed.textContent   = d.bed + ' Kamar Tidur';
  modalBath.textContent  = d.bath + ' Kamar Mandi';
  modalArea.textContent  = d.area;
  modalWa.href = `https://wa.me/${WA_NUMBER}?text=` +
    encodeURIComponent(`Halo, saya tertarik dengan unit ${d.name} (${d.area}) di Arumaya Residences. Boleh minta info ketersediaan dan skema pembayarannya?`);
  modal.classList.add('is-open');
  document.body.classList.add('no-scroll');
};

const closeModal = () => {
  modal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
};

document.querySelectorAll('.js-detail').forEach(btn =>
  btn.addEventListener('click', () => openModal(btn))
);
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq__q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ---------- Form -> WhatsApp ---------- */
const form = document.getElementById('waForm');
form.addEventListener('submit', e => {
  e.preventDefault();

  const nama    = document.getElementById('f-nama').value.trim();
  const telepon = document.getElementById('f-telepon').value.trim();
  const unit    = document.getElementById('f-unit').value;
  const pesan   = document.getElementById('f-pesan').value.trim();

  if (!nama || !telepon) {
    alert('Nama dan nomor WhatsApp wajib diisi.');
    return;
  }

  const lines = [
    'Halo, saya mau konsultasi unit Arumaya Residences.',
    '',
    `Nama: ${nama}`,
    `No. WhatsApp: ${telepon}`,
    `Unit diminati: ${unit}`,
  ];
  if (pesan) lines.push(`Pertanyaan: ${pesan}`);

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
});
