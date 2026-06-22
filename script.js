/* ===== LOADER ===== */
(function () {
  const ld = document.getElementById('loader');
  if (!ld) return;
  document.body.style.overflow = 'hidden';

  // bar finishes at ~2.4s — hide loader at 2.6s
  setTimeout(() => {
    ld.classList.add('ld-hide');
    document.body.style.overflow = '';
    ld.addEventListener('transitionend', () => ld.remove(), { once: true });
  }, 2600);
})();

/* ===== TRANSLATIONS ===== */
const T = {
  uz:{
    nav_catalog:"Katalog",
    nav_services:"Xizmatlar",
    nav_whyus:"Nega biz?",
    nav_contact:"Bog'lanish",
    nav_order:"📦 Buyurtma",
    hero_badge:"✦ Sifat va Zamonaviylik ✦",
    h1_line1:"Uyingizni",
    h1_line2:"Bezash",
    h1_line3:"vaqti keldi",
    hero_desc:"Oshxona, yotoqxona va shkaf — har bir mahsulot buyurtmaga asoslangan, professional sifatda tayyorlanadi.",
    hero_btn1:"Katalogni ko'rish",
    hero_btn2:"✈ Telegram",
    trust1:"200+ Loyiha",
    trust2:"Yetkazib berish",
    trust3:"Kafolat",
    stat1_lbl:"Bajarilgan loyiha",
    stat2_lbl:"Yillik tajriba",
    stat3_lbl:"Sifat kafolati",
    stat4_lbl:"Yo'nalish",
    cat_h1:"Bizning",
    cat_h2:"Mahsulotlar",
    cat_sub:"Har bir mahsulot — yuksak sifat va professional ish",
    f_all:"Barchasi",
    f_kitchen:"Oshxonalar",
    f_bedroom:"Yotoqxonalar",
    f_wardrobe:"Shkaflar",
    cta:"📞 Buyurtma berish",
    dlv1_title:"Tez yetkazib berish",
    dlv1_desc:"Buyurtmangiz tayyor bo'lganidan so'ng darhol yetkazamiz",
    dlv2_title:"Professional o'rnatish",
    dlv2_desc:"Tajribali ustalar tomonidan o'rnatish va sozlash",
    dlv3_title:"Buyurtmaga tayyorlash",
    dlv3_desc:"O'lcham va rang bo'yicha shaxsiy buyurtma qabul qilinadi",
    dlv4_title:"Kafolat xizmati",
    dlv4_desc:"Barcha mahsulotlarga kafolat va texnik xizmat",
    ft_desc:"Zamonaviy mebel ishlab chiqarish va sotish. Har bir buyurtma o'lcham va rangga qarab tayyorlanadi.",
    ft_services_h:"Xizmatlar",
    srv1:"Mebel yasash",
    srv2:"Yetkazib berish",
    srv3:"Professional o'rnatish",
    srv4:"Kafolat ta'miri",
    srv5:"Bepul maslahat",
    footer_contact:"Bog'lanish",
    fp1_lbl:"Telefon 1",
    fp2_lbl:"Telefon 2",
    footer_rights:"Barcha huquqlar himoyalangan",
    btn_more:"Ko'proq ko'rsatish",
    btn_less:"Kamroq ko'rsatish",
    srv_h1:"Bizning", srv_h2:"Xizmatlar",
    srv_sub:"Professional yondashuv va yuqori sifat — har bir bosqichda",
    srv_t1:"Mebel yasash",    srv_d1:"Har qanday o'lcham va rangda buyurtmaga asoslangan individual ishlab chiqarish",
    srv_t2:"Yetkazib berish", srv_d2:"Buyurtma tayyor bo'lgach, O'zbekiston bo'ylab tez va xavfsiz yetkazib berish",
    srv_t3:"Professional o'rnatish", srv_d3:"Tajribali ustalar tomonidan aniq va sifatli o'rnatish va sozlash",
    srv_t4:"Dizayn maslahat", srv_d4:"Xona o'lchamiga mos dizayn va rang kombinatsiyasini tanlashda bepul yordam",
    srv_t5:"Kafolat xizmati", srv_d5:"Barcha mahsulotlarga kafolat beriladi. Muammo bo'lsa — darhol hal qilamiz",
    srv_t6:"Buyurtmaga tayyorlash", srv_d6:"Foto va o'lchamingizni yuboring — kerakli mebel tayyorlanadi",
    why_h1:"Nega", why_h2:"Biz?",
    why_sub:"Mijozlarimiz bizni qayta-qayta tanlashining sabablari",
    why_t1:"Yuqori sifat",    why_d1:"Faqat sertifikatlangan materiallar. Har bir buyurtma tekshiriladi",
    why_t2:"O'z vaqtida",     why_d2:"Kelishilgan muddatda bajariladi. Kechikish yo'q — bu bizning qoidamiz",
    why_t3:"Tajribali jamoa", why_d3:"5+ yillik tajribaga ega professional ustalar va dizaynerlar",
    why_t4:"Narx maqbul",     why_d4:"Bozordagi eng yaxshi narx-sifat nisbati. Aniq narx beriladi",
    why_t5:"Individual dizayn",why_d5:"Sizning xohishingiz va xona o'lchamiga mos dizayn ishlab chiqiladi",
    why_t6:"Doim aloqada",    why_d6:"Buyurtma berganingizdan o'rnatilgunga qadar doimiy aloqa",
    c_oshxona:"Oshxona",
    c_yotoqxona:"Yotoqxona",
    c_shkaf:"Shkaf",
    hvc_nm1:"Krem-Oltin Yotoqxona",
    hvc_nm2:"Oq Oshxona",
    hvc_nm3:"Zamonaviy Shkaf",
    mq1:"✦ Oshxona meblari",
    mq2:"✦ Yotoqxona meblari",
    mq3:"✦ Shkaflar",
    mq4:"✦ Professional o'rnatish",
    mq5:"✦ Yetkazib berish",
    mq6:"✦ Kafolat xizmati",
  },
  ru:{
    nav_catalog:"Каталог",
    nav_services:"Услуги",
    nav_whyus:"Почему мы?",
    nav_contact:"Контакты",
    nav_order:"📦 Заказать",
    hero_badge:"✦ Качество и Современность ✦",
    h1_line1:"Время",
    h1_line2:"Украсить",
    h1_line3:"ваш дом",
    hero_desc:"Кухни, спальни и шкафы — каждый продукт изготавливается по индивидуальному заказу профессионально.",
    hero_btn1:"Смотреть каталог",
    hero_btn2:"✈ Telegram",
    trust1:"200+ Проектов",
    trust2:"Доставка",
    trust3:"Гарантия",
    stat1_lbl:"Выполненных проектов",
    stat2_lbl:"Лет опыта",
    stat3_lbl:"Гарантия качества",
    stat4_lbl:"Направления",
    cat_h1:"Наши",
    cat_h2:"Товары",
    cat_sub:"Каждый продукт — высокое качество и профессиональная работа",
    f_all:"Все",
    f_kitchen:"Кухни",
    f_bedroom:"Спальни",
    f_wardrobe:"Шкафы",
    cta:"📞 Заказать",
    dlv1_title:"Быстрая доставка",
    dlv1_desc:"Доставляем сразу после готовности заказа",
    dlv2_title:"Профессиональная установка",
    dlv2_desc:"Установка и настройка опытными мастерами",
    dlv3_title:"Изготовление на заказ",
    dlv3_desc:"Принимаем индивидуальные заказы по размеру и цвету",
    dlv4_title:"Гарантийное обслуживание",
    dlv4_desc:"Гарантия и техническое обслуживание всех товаров",
    ft_desc:"Производство и продажа современной мебели. Каждый заказ изготавливается по размеру и цвету.",
    ft_services_h:"Услуги",
    srv1:"Изготовление мебели",
    srv2:"Доставка",
    srv3:"Профессиональная установка",
    srv4:"Гарантийный ремонт",
    srv5:"Бесплатная консультация",
    footer_contact:"Контакты",
    fp1_lbl:"Телефон 1",
    fp2_lbl:"Телефон 2",
    footer_rights:"Все права защищены",
    btn_more:"Показать ещё",
    btn_less:"Скрыть",
    srv_h1:"Наши", srv_h2:"Услуги",
    srv_sub:"Профессиональный подход и высокое качество на каждом этапе",
    srv_t1:"Изготовление мебели",  srv_d1:"Индивидуальное производство под заказ любого размера и цвета",
    srv_t2:"Доставка",             srv_d2:"Быстрая и безопасная доставка по Узбекистану",
    srv_t3:"Профессиональная установка", srv_d3:"Точная и качественная установка опытными мастерами",
    srv_t4:"Дизайн-консультация",  srv_d4:"Бесплатная помощь в выборе дизайна и цветовой комбинации",
    srv_t5:"Гарантийный сервис",   srv_d5:"Гарантия на все товары. Проблема? Решаем немедленно",
    srv_t6:"Изготовление на заказ",srv_d6:"Отправьте фото и размеры — изготовим нужную мебель",
    why_h1:"Почему", why_h2:"Мы?",
    why_sub:"Причины, по которым наши клиенты выбирают нас снова и снова",
    why_t1:"Высокое качество",   why_d1:"Только сертифицированные материалы. Каждый заказ проверяется",
    why_t2:"В срок",             why_d2:"Выполняется в оговорённые сроки. Без задержек — это наше правило",
    why_t3:"Опытная команда",    why_d3:"Команда профессионалов с 5+ лет опыта в мебельном производстве",
    why_t4:"Доступные цены",     why_d4:"Лучшее соотношение цены и качества. Точная цена без доплат",
    why_t5:"Индивидуальный дизайн",why_d5:"Дизайн разрабатывается по вашему желанию и размерам помещения",
    why_t6:"Всегда на связи",    why_d6:"Постоянная связь от оформления заказа до установки",
    c_oshxona:"Кухня",
    c_yotoqxona:"Спальня",
    c_shkaf:"Шкаф",
    hvc_nm1:"Кремово-Золотая Спальня",
    hvc_nm2:"Белая Кухня",
    hvc_nm3:"Современный Шкаф",
    mq1:"✦ Кухонная мебель",
    mq2:"✦ Мебель для спальни",
    mq3:"✦ Шкафы",
    mq4:"✦ Профессиональная установка",
    mq5:"✦ Доставка",
    mq6:"✦ Гарантийный сервис",
  }
};

/* ===== PRODUCTS — ordered: to'q oshxona, kulrang, oq, marmar, oq-qora, to'q kulrang, LED yotoq ... ===== */
const defaultProducts = [
  /* --- birinchi 8: ko'p so'raladigan --- */
  { id:7,  name:{uz:"To'q Oshxona",            ru:"Тёмная Кухня"},               cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-47%20(2).jpg","img/photo_2026-06-22_11-14-43%20(2).jpg"] },
  { id:3,  name:{uz:"Kulrang Oshxona",         ru:"Серая Кухня"},                cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-42%20(3).jpg","img/photo_2026-06-22_11-14-42%20(4).jpg"] },
  { id:1,  name:{uz:"Oq Oshxona",             ru:"Белая Кухня"},                cat:"oshxona",
    imgs:["img/oshxona%20oddiy.jpg","img/photo_2026-06-22_11-14-46%20(2).jpg"] },
  { id:4,  name:{uz:"Qora Marmar Oshxona",     ru:"Кухня Чёрный Мрамор"},       cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-48%20(3).jpg","img/photo_2026-06-22_11-14-48%20(4).jpg"] },
  { id:5,  name:{uz:"Oq-Qora Oshxona",         ru:"Бело-Чёрная Кухня"},          cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-30-20.jpg","img/photo_2026-06-22_11-30-30.jpg"] },
  { id:15, name:{uz:"To'q Kulrang Yotoqxona",  ru:"Тёмно-Серая Спальня"},        cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-51.jpg","img/photo_2026-06-22_11-14-51%20(2).jpg"] },
  { id:13, name:{uz:"LED Yotoqxona",           ru:"LED Спальня"},                 cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-46%20(3).jpg","img/photo_2026-06-22_11-14-47.jpg"] },
  { id:11, name:{uz:"Oq Yotoqxona",            ru:"Белая Спальня"},               cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-41.jpg","img/photo_2026-06-22_11-14-41%20(2).jpg"] },
  /* --- qolganlar --- */
  { id:2,  name:{uz:"Kulrang L-Oshxona",       ru:"Серая Г-образная Кухня"},     cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-40.jpg","img/photo_2026-06-22_11-30-36.jpg"] },
  { id:6,  name:{uz:"Ko'ng'ir Oshxona",        ru:"Коричневая Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-49.jpg","img/photo_2026-06-22_11-14-49%20(2).jpg"] },
  { id:8,  name:{uz:"Zamonaviy Oq-Qora Oshxona",ru:"Современная Кухня"},         cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-50%20(2).jpg","img/photo_2026-06-22_11-14-50%20(3).jpg"] },
  { id:9,  name:{uz:"Qora LED Oshxona",        ru:"Чёрная LED Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-50.jpg","img/photo_2026-06-22_11-14-46.jpg"] },
  { id:10, name:{uz:"Kulrang-Oq Oshxona",      ru:"Серо-Белая Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-49%20(3).jpg"] },
  { id:12, name:{uz:"Krem Yotoqxona",          ru:"Кремовая Спальня"},            cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-44.jpg","img/photo_2026-06-22_11-14-45.jpg"] },
  { id:14, name:{uz:"Krem-Oltin Yotoqxona",    ru:"Кремово-Золотая Спальня"},    cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-48.jpg","img/photo_2026-06-22_11-14-48%20(2).jpg"] },
  { id:16, name:{uz:"Marmar Yotoqxona",        ru:"Мраморная Спальня"},           cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-51%20(3).jpg","img/photo_2026-06-22_11-14-51%20(4).jpg"] },
  { id:17, name:{uz:"Ko'k-Kulrang Yotoqxona",  ru:"Сине-Серая Спальня"},         cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-52.jpg","img/photo_2026-06-22_11-14-52%20(2).jpg"] },
  { id:18, name:{uz:"Zamonaviy Shisha Shkaf",  ru:"Современный Шкаф"},            cat:"shkaf",
    imgs:["img/photo_2026-06-22_11-14-42.jpg","img/photo_2026-06-22_11-14-42%20(2).jpg"] },
  { id:19, name:{uz:"Kulrang Aynali Shkaf",    ru:"Серый Шкаф-Купе"},             cat:"shkaf",
    imgs:["img/photo_2026-06-22_11-14-43.jpg"] },
];

/* ===== LOAD FROM LOCALSTORAGE (admin edits merge here) ===== */
let products;
(function () {
  const KEY = 'sm_products';
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, JSON.stringify(defaultProducts));
  }
  try { products = JSON.parse(localStorage.getItem(KEY)); }
  catch (e) { products = defaultProducts; }
})();

/* ===== STATE ===== */
let lang         = 'uz';
let activeFilter = 'all';
let dark         = true;
let countDone    = false;
const timers     = [];
let rendered     = 0;

function getColCount() {
  const w = window.innerWidth;
  if (w <= 560) return 1;
  if (w <= 720) return 2;
  return 3;
}

/* ===== LANGUAGE ===== */
function applyLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll('[data-key]').forEach(el => {
    if (t[el.dataset.key] !== undefined) el.textContent = t[el.dataset.key];
  });
  document.querySelectorAll('.lbtn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );
  render(activeFilter);
  // load more text update handled inside render → updateLoadMore
}
document.querySelectorAll('.lbtn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);

/* ===== THEME ===== */
const tbtn  = document.getElementById('tbtn');
const ticon = document.getElementById('ticon');
tbtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  ticon.textContent = dark ? '☀' : '🌙';
  // sync right fade gradient
  const fade = document.querySelector('.grid-fade-r');
  if (fade) fade.style.background =
    `linear-gradient(to right,transparent,${dark ? '#080808' : '#f0ebe0'})`;
});

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 22px rgba(0,0,0,0.3)' : '';
}, { passive: true });

/* ===== ORDER — image share + Telegram fallback ===== */
async function orderProduct(imgSrc, name) {
  const msg = lang === 'uz'
    ? `Salom! 🪑 "${name}" dizayniga buyurtma bermoqchiman.`
    : `Здравствуйте! 🪑 Хочу заказать "${name}".`;

  // Try Web Share API with image (works on mobile)
  if (typeof navigator.share === 'function') {
    try {
      const resp = await fetch(imgSrc);
      const blob = await resp.blob();
      const file = new File([blob], name + '.jpg', { type: blob.type || 'image/jpeg' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ text: msg, files: [file] });
        return;
      }
    } catch (e) { /* fall through */ }
  }

  // Fallback: open Telegram with pre-filled message
  window.open(`https://t.me/az1mjonow?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ===== HELPERS ===== */
function getList() {
  return activeFilter === 'all'
    ? products
    : products.filter(p => p.cat === activeFilter);
}

function buildCard(p) {
  const t     = T[lang];
  const multi = p.imgs.length > 1;

  const slides = p.imgs.map(src =>
    `<div class="slide"><img src="${src}" alt="${p.name[lang]}" loading="lazy" draggable="false"/></div>`
  ).join('');

  const dots = multi
    ? p.imgs.map((_, j) =>
        `<button class="dot${j === 0 ? ' active' : ''}" data-i="${j}"></button>`
      ).join('')
    : '';

  const ctrls = multi ? `
    <button class="slider-btn prev">&#8249;</button>
    <button class="slider-btn next">&#8250;</button>
    <div class="slider-dots">${dots}</div>
    <div class="slider-counter">1 / ${p.imgs.length}</div>
  ` : '';

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="slider" id="sl${p.id}">
      <div class="slider-track">${slides}</div>
      ${ctrls}
    </div>
    <div class="card-body">
      <div class="card-category">${t['c_' + p.cat]}</div>
      <div class="card-title">${p.name[lang]}</div>
      <button class="card-btn">${t.cta}</button>
    </div>
  `;

  card.querySelector('.card-btn').addEventListener('click', () => {
    const ci = card.getCur ? card.getCur() : 0;
    orderProduct(p.imgs[ci], p.name[lang]);
  });

  return card;
}

function updateButtons() {
  const t    = T[lang];
  const list = getList();

  const moreBtn = document.getElementById('loadMoreBtn');
  const lessBtn = document.getElementById('showLessBtn');
  if (!moreBtn || !lessBtn) return;

  const cols = getColCount();
  const left = list.length - rendered;
  if (left > 0) {
    moreBtn.style.display = '';
    moreBtn.textContent   = `↓ ${t.btn_more} (${Math.min(cols, left)})`;
  } else {
    moreBtn.style.display = 'none';
  }

  if (rendered > cols) {
    lessBtn.style.display = '';
    lessBtn.textContent   = `↑ ${t.btn_less} (${Math.min(cols, rendered - cols)})`;
  } else {
    lessBtn.style.display = 'none';
  }
}
// alias for old references
const updateLoadMore = updateButtons;

function appendCards(count) {
  const list  = getList();
  const slice = list.slice(rendered, rendered + count);
  const grid  = document.getElementById('pgrid');

  slice.forEach((p, i) => {
    const card = buildCard(p);
    grid.appendChild(card);
    setTimeout(() => card.classList.add('show'), i * 55);
    initSlider(card, p);
  });
  rendered += slice.length;
  updateLoadMore();
}

/* ===== RENDER ===== */
function render(filter) {
  activeFilter = filter;
  timers.forEach(clearInterval);
  timers.length = 0;
  rendered = 0;
  document.getElementById('pgrid').innerHTML = '';
  appendCards(getColCount());
}

/* ===== SLIDER ===== */
function initSlider(card, p) {
  const root  = card.querySelector(`#sl${p.id}`);
  const track = root.querySelector('.slider-track');
  const dots  = root.querySelectorAll('.dot');
  const ctr   = root.querySelector('.slider-counter');
  const total = p.imgs.length;
  let cur = 0, tid;

  function go(n) {
    cur = n < 0 ? total - 1 : n >= total ? 0 : n;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    if (ctr) ctr.textContent = `${cur + 1} / ${total}`;
  }

  function startAuto() { tid = setInterval(() => go(cur + 1), 4500); timers.push(tid); }
  function stopAuto()  { clearInterval(tid); }

  // expose current index for order button
  card.getCur = () => cur;

  if (total > 1) {
    root.querySelector('.prev').addEventListener('click', e => {
      e.stopPropagation(); stopAuto(); go(cur - 1); startAuto();
    });
    root.querySelector('.next').addEventListener('click', e => {
      e.stopPropagation(); stopAuto(); go(cur + 1); startAuto();
    });
    dots.forEach(d => d.addEventListener('click', e => {
      e.stopPropagation(); stopAuto(); go(+d.dataset.i); startAuto();
    }));
    root.addEventListener('mouseenter', stopAuto);
    root.addEventListener('mouseleave', startAuto);
    startAuto();
  }

  // Click on image → open lightbox
  track.addEventListener('click', e => {
    if (!e.target.closest('.slider-btn') && !e.target.closest('.slider-dots')) {
      openLb(p.imgs, cur, p.name[lang]);
    }
  });

  let tx = 0;
  root.addEventListener('touchstart', e => { tx = e.touches[0].clientX; stopAuto(); }, { passive: true });
  root.addEventListener('touchend',   e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) go(d > 0 ? cur + 1 : cur - 1);
    startAuto();
  }, { passive: true });
}

/* ===== LOAD MORE / LESS ===== */
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  appendCards(getColCount());
});

document.getElementById('showLessBtn').addEventListener('click', () => {
  const cols = getColCount();
  const target = Math.max(cols, rendered - cols);
  timers.forEach(clearInterval);
  timers.length = 0;
  rendered = 0;
  document.getElementById('pgrid').innerHTML = '';
  appendCards(target);
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
});

/* ===== FILTERS ===== */
document.querySelectorAll('.fbtn').forEach(btn =>
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  })
);

/* ===== PARTICLES ===== */
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
function resize() { cvs.width = innerWidth; cvs.height = innerHeight; }
resize();
window.addEventListener('resize', resize, { passive: true });

const pts = Array.from({ length: 50 }, () => ({
  x:  Math.random() * innerWidth,
  y:  Math.random() * innerHeight,
  vx: (Math.random() - .5) * .34,
  vy: (Math.random() - .5) * .34,
  r:  Math.random() * 1.5 + .4,
  a:  Math.random() * .18 + .04,
  rot: Math.random() * Math.PI,
  rv:  (Math.random() - .5) * .006,
  diamond: Math.random() > .6,
}));

function drawPts() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  const col = dark ? 'rgba(201,169,110,' : 'rgba(154,112,32,';

  pts.forEach(p => {
    p.x  = (p.x + p.vx + cvs.width)  % cvs.width;
    p.y  = (p.y + p.vy + cvs.height) % cvs.height;
    p.rot += p.rv;

    ctx.save();
    ctx.globalAlpha = p.a;
    ctx.fillStyle = col + '1)';
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);

    if (p.diamond) {
      const s = p.r * 2.5;
      ctx.beginPath();
      ctx.moveTo(0,-s); ctx.lineTo(s,0);
      ctx.lineTo(0,s);  ctx.lineTo(-s,0);
      ctx.closePath(); ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });

  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 110) {
        ctx.save();
        ctx.globalAlpha = .06 * (1 - d / 110);
        ctx.strokeStyle = col + '1)';
        ctx.lineWidth = .5;
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
  requestAnimationFrame(drawPts);
}
drawPts();

/* ===== SCROLL REVEAL ===== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: .1 });
document.querySelectorAll('.anim-up').forEach(el => revObs.observe(el));

/* ===== COUNTER ===== */
function animCount(el, target, suf) {
  const dur = 1700, t0 = performance.now();
  (function step(t) {
    const p = Math.min((t - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * target) + suf;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}

const cntObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countDone) {
    countDone = true;
    document.querySelectorAll('.snum').forEach(el =>
      animCount(el, +el.dataset.to, el.dataset.suf || '')
    );
    cntObs.disconnect();
  }
}, { threshold: .4 });
const statsSec = document.querySelector('.stats-sec');
if (statsSec) cntObs.observe(statsSec);

/* ===== LIGHTBOX ===== */
(function () {
  // Build DOM once
  const lb = document.createElement('div');
  lb.id = 'lb';
  lb.innerHTML = `
    <div class="lb-bg"></div>
    <button class="lb-x">&#10005;</button>
    <button class="lb-arr lb-p">&#8249;</button>
    <button class="lb-arr lb-n">&#8250;</button>
    <div class="lb-body">
      <img id="lb-img" src="" alt=""/>
      <div class="lb-meta">
        <span id="lb-name"></span>
        <span id="lb-ctr"></span>
      </div>
    </div>
  `;
  document.body.appendChild(lb);

  const lbEl   = lb;
  const lbImg  = lb.querySelector('#lb-img');
  const lbName = lb.querySelector('#lb-name');
  const lbCtrEl= lb.querySelector('#lb-ctr');
  const lbP    = lb.querySelector('.lb-p');
  const lbN    = lb.querySelector('.lb-n');

  let lbImgs = [], lbIdx = 0, lbTitle = '';

  function setImg(i) {
    lbIdx = i;
    lbImg.style.animation = 'none';
    void lbImg.offsetWidth;
    lbImg.style.animation = '';
    lbImg.src    = lbImgs[i];
    lbName.textContent = lbTitle;
    lbCtrEl.textContent = lbImgs.length > 1 ? `${i + 1} / ${lbImgs.length}` : '';
    lbP.classList.toggle('hide', lbImgs.length <= 1);
    lbN.classList.toggle('hide', lbImgs.length <= 1);
  }

  window.openLb = function (imgs, idx, title) {
    lbImgs = imgs; lbTitle = title;
    setImg(idx);
    lbEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeLb() {
    lbEl.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  lb.querySelector('.lb-bg').addEventListener('click', closeLb);
  lb.querySelector('.lb-x').addEventListener('click', closeLb);
  lbP.addEventListener('click', () => setImg(lbIdx > 0 ? lbIdx - 1 : lbImgs.length - 1));
  lbN.addEventListener('click', () => setImg(lbIdx < lbImgs.length - 1 ? lbIdx + 1 : 0));

  document.addEventListener('keydown', e => {
    if (!lbEl.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLb();
    if (e.key === 'ArrowLeft')   setImg(lbIdx > 0 ? lbIdx - 1 : lbImgs.length - 1);
    if (e.key === 'ArrowRight')  setImg(lbIdx < lbImgs.length - 1 ? lbIdx + 1 : 0);
  });
})();

/* ===== HAMBURGER MENU ===== */
(function () {
  const burger  = document.getElementById('navBurger');
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mmOverlay');
  const closeBtn= document.getElementById('mmClose');
  if (!burger || !menu) return;

  function open()  {
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.querySelectorAll('.mm-link').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ===== ADMIN TRIGGER (3-second long press) ===== */
(function () {
  const el = document.getElementById('adm-trig');
  if (!el) return;

  // add the ring overlay element
  const ring = document.createElement('span');
  ring.className = 'adm-ring';
  el.appendChild(ring);

  let tid = null;

  function start(e) {
    e.preventDefault();
    el.classList.add('holding');
    tid = setTimeout(() => {
      el.classList.remove('holding');
      window.location.href = 'admin.html';
    }, 3000);
  }

  function cancel() {
    clearTimeout(tid);
    tid = null;
    el.classList.remove('holding');
  }

  el.addEventListener('mousedown',   start);
  el.addEventListener('touchstart',  start, { passive: false });
  el.addEventListener('mouseup',     cancel);
  el.addEventListener('mouseleave',  cancel);
  el.addEventListener('touchend',    cancel);
  el.addEventListener('touchcancel', cancel);
  el.addEventListener('contextmenu', e => e.preventDefault());
})();

/* ===== INIT ===== */
render('all');
