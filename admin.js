/* ===== SAKIYNA MEBEL — ADMIN PANEL ===== */

const PRODUCTS_KEY = 'sm_products';
const SETTINGS_KEY = 'sm_settings';
const PASS_KEY     = 'sm_pass';
const DEFAULT_PASS = 'sakiyna2026';

/* Default products (mirrors the main site's hardcoded array).
   Used when localStorage has no data yet. */
const DEFAULT_PRODUCTS = [
  { id:7,  name:{uz:"To'q Oshxona",              ru:"Тёмная Кухня"},               cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-47%20(2).jpg","img/photo_2026-06-22_11-14-43%20(2).jpg"] },
  { id:3,  name:{uz:"Kulrang Oshxona",            ru:"Серая Кухня"},                cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-42%20(3).jpg","img/photo_2026-06-22_11-14-42%20(4).jpg"] },
  { id:1,  name:{uz:"Oq Oshxona",                 ru:"Белая Кухня"},                cat:"oshxona",
    imgs:["img/oshxona%20oddiy.jpg","img/photo_2026-06-22_11-14-46%20(2).jpg"] },
  { id:4,  name:{uz:"Qora Marmar Oshxona",        ru:"Кухня Чёрный Мрамор"},       cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-48%20(3).jpg","img/photo_2026-06-22_11-14-48%20(4).jpg"] },
  { id:5,  name:{uz:"Oq-Qora Oshxona",            ru:"Бело-Чёрная Кухня"},          cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-30-20.jpg","img/photo_2026-06-22_11-30-30.jpg"] },
  { id:15, name:{uz:"To'q Kulrang Yotoqxona",     ru:"Тёмно-Серая Спальня"},        cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-51.jpg","img/photo_2026-06-22_11-14-51%20(2).jpg"] },
  { id:13, name:{uz:"LED Yotoqxona",              ru:"LED Спальня"},                 cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-46%20(3).jpg","img/photo_2026-06-22_11-14-47.jpg"] },
  { id:11, name:{uz:"Oq Yotoqxona",               ru:"Белая Спальня"},               cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-41.jpg","img/photo_2026-06-22_11-14-41%20(2).jpg"] },
  { id:2,  name:{uz:"Kulrang L-Oshxona",          ru:"Серая Г-образная Кухня"},     cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-40.jpg","img/photo_2026-06-22_11-30-36.jpg"] },
  { id:6,  name:{uz:"Ko'ng'ir Oshxona",           ru:"Коричневая Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-49.jpg","img/photo_2026-06-22_11-14-49%20(2).jpg"] },
  { id:8,  name:{uz:"Zamonaviy Oq-Qora Oshxona", ru:"Современная Кухня"},           cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-50%20(2).jpg","img/photo_2026-06-22_11-14-50%20(3).jpg"] },
  { id:9,  name:{uz:"Qora LED Oshxona",           ru:"Чёрная LED Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-50.jpg","img/photo_2026-06-22_11-14-46.jpg"] },
  { id:10, name:{uz:"Kulrang-Oq Oshxona",         ru:"Серо-Белая Кухня"},            cat:"oshxona",
    imgs:["img/photo_2026-06-22_11-14-49%20(3).jpg"] },
  { id:12, name:{uz:"Krem Yotoqxona",             ru:"Кремовая Спальня"},            cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-44.jpg","img/photo_2026-06-22_11-14-45.jpg"] },
  { id:14, name:{uz:"Krem-Oltin Yotoqxona",       ru:"Кремово-Золотая Спальня"},    cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-48.jpg","img/photo_2026-06-22_11-14-48%20(2).jpg"] },
  { id:16, name:{uz:"Marmar Yotoqxona",           ru:"Мраморная Спальня"},           cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-51%20(3).jpg","img/photo_2026-06-22_11-14-51%20(4).jpg"] },
  { id:17, name:{uz:"Ko'k-Kulrang Yotoqxona",     ru:"Сине-Серая Спальня"},         cat:"yotoqxona",
    imgs:["img/photo_2026-06-22_11-14-52.jpg","img/photo_2026-06-22_11-14-52%20(2).jpg"] },
  { id:18, name:{uz:"Zamonaviy Shisha Shkaf",     ru:"Современный Шкаф"},            cat:"shkaf",
    imgs:["img/photo_2026-06-22_11-14-42.jpg","img/photo_2026-06-22_11-14-42%20(2).jpg"] },
  { id:19, name:{uz:"Kulrang Aynali Shkaf",       ru:"Серый Шкаф-Купе"},             cat:"shkaf",
    imgs:["img/photo_2026-06-22_11-14-43.jpg"] },
];

const DEFAULT_SETTINGS = {
  phone1: '+998 99 387 00 17',
  phone2: '+998 99 531 19 19',
  tg: 'az1mjonow',
  tgch: 'sakiyna_mebel'
};

/* ===== STORAGE ===== */
function getPass()     { return localStorage.getItem(PASS_KEY) || DEFAULT_PASS; }
function getProds()    {
  try {
    const s = localStorage.getItem(PRODUCTS_KEY);
    return s ? JSON.parse(s) : DEFAULT_PRODUCTS;
  } catch { return DEFAULT_PRODUCTS.slice(); }
}
function saveProds(a)  { localStorage.setItem(PRODUCTS_KEY, JSON.stringify(a)); }
function getSettings() {
  try { return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY)) }; }
  catch { return { ...DEFAULT_SETTINGS }; }
}
function saveSets(s)   { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }

/* ===== SESSION — har safar login talab qilinadi ===== */
let _loggedIn = false;

/* ===== IMAGE COMPRESS ===== */
async function compressImg(file, maxSide = 900, q = 0.85) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const ratio = Math.min(maxSide / img.width, maxSide / img.height, 1);
        const w = Math.round(img.width  * ratio);
        const h = Math.round(img.height * ratio);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL('image/jpeg', q));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ===== CAT LABEL ===== */
function catLabel(cat) {
  return cat === 'oshxona' ? '🍳 Oshxona' : cat === 'yotoqxona' ? '🛏 Yotoqxona' : '🗄 Shkaf';
}
function catClass(cat) {
  return cat === 'oshxona' ? 'cat-oshxona' : cat === 'yotoqxona' ? 'cat-yotoqxona' : 'cat-shkaf';
}

/* ===== RENDER PRODUCT LIST ===== */
function renderProdList() {
  const prods = getProds();
  document.getElementById('prodCount').textContent = prods.length;
  const el = document.getElementById('prodList');

  if (!prods.length) {
    el.innerHTML = '<div class="empty-state"><p>Mahsulot yo\'q. Yuqoridagi "+ Yangi mahsulot" tugmasini bosing.</p></div>';
    return;
  }

  el.innerHTML = '';
  prods.forEach((p, idx) => {
    const thumb = (p.imgs && p.imgs[0]) || '';
    const row   = document.createElement('div');
    row.className = 'prod-row';
    row.dataset.idx = idx;
    row.innerHTML = `
      <div class="prod-order-btns">
        <button class="btn-order" data-dir="up" data-idx="${idx}" title="Yuqoriga">▲</button>
        <button class="btn-order" data-dir="dn" data-idx="${idx}" title="Pastga">▼</button>
      </div>
      <img class="prod-thumb" src="${thumb}" alt="${p.name.uz}"
           onerror="this.src='';this.style.background='#e2e8f0'"/>
      <div class="prod-info">
        <div class="prod-name">${p.name.uz} <small style="color:#94a3b8;font-weight:400">/ ${p.name.ru || '—'}</small></div>
        <div class="prod-meta">
          <span class="prod-cat ${catClass(p.cat)}">${catLabel(p.cat)}</span>
          <span class="prod-imgs-count">${p.imgs ? p.imgs.length : 0} ta rasm</span>
        </div>
      </div>
      <div class="prod-actions">
        <button class="btn-edit"   data-idx="${idx}">✏ Tahrirlash</button>
        <button class="btn-delete" data-idx="${idx}">🗑 O'chirish</button>
      </div>
    `;
    el.appendChild(row);
  });

  el.querySelectorAll('.btn-edit').forEach(b =>
    b.addEventListener('click', () => openModal(+b.dataset.idx)));
  el.querySelectorAll('.btn-delete').forEach(b =>
    b.addEventListener('click', () => confirmDelete(+b.dataset.idx)));
  el.querySelectorAll('.btn-order').forEach(b =>
    b.addEventListener('click', () => moveProduct(+b.dataset.idx, b.dataset.dir)));
}

/* ===== REORDER ===== */
function moveProduct(idx, dir) {
  const prods = getProds();
  const to    = dir === 'up' ? idx - 1 : idx + 1;
  if (to < 0 || to >= prods.length) return;
  [prods[idx], prods[to]] = [prods[to], prods[idx]];
  saveProds(prods);
  renderProdList();
  showToast('Tartib saqlandi');
}

/* ===== IMAGE ROWS ===== */
function createImgRow(url = '') {
  const row      = document.createElement('div');
  row.className  = 'img-row';
  const isBase64 = url.startsWith('data:');

  row.innerHTML = `
    <img class="img-preview" alt="" src="${url || ''}"
         style="opacity:${url ? 1 : 0}"
         onerror="this.style.opacity='0'"/>
    <div class="img-row-inputs">
      <input type="text"
             placeholder="img/fayl-nomi.jpg  yoki  https://..."
             value="${isBase64 ? '' : url}"
             ${isBase64 ? 'disabled placeholder="[Yuklangan rasm]"' : ''}/>
      <input type="file" accept="image/jpeg,image/png,image/webp" title="Rasm yuklash"/>
    </div>
    <button class="btn-rm-img" title="Olib tashlash">✕</button>
  `;

  const preview  = row.querySelector('.img-preview');
  const txtInput = row.querySelector('input[type=text]');
  const fileInp  = row.querySelector('input[type=file]');
  const rmBtn    = row.querySelector('.btn-rm-img');

  row._url = url; // current effective URL

  txtInput.addEventListener('input', () => {
    const v = txtInput.value.trim();
    row._url = v;
    preview.src = v;
    preview.style.opacity = v ? '1' : '0';
  });

  preview.addEventListener('load', () => {
    if (preview.src && preview.src !== window.location.href) preview.style.opacity = '1';
  });

  fileInp.addEventListener('change', async () => {
    const file = fileInp.files[0];
    if (!file) return;
    fileInp.disabled = true;
    fileInp.parentElement.querySelector('input[type=text]').value = '⏳ Yuklanmoqda...';
    try {
      const b64  = await compressImg(file);
      row._url   = b64;
      preview.src = b64;
      preview.style.opacity = '1';
      txtInput.value       = '';
      txtInput.placeholder = `✓ ${file.name}`;
      txtInput.disabled    = true;
      // allow clearing the upload
      if (!row._clearSpan) {
        const sp = document.createElement('span');
        sp.textContent = '✕ tozalash';
        sp.style.cssText = 'font-size:.75rem;color:#dc2626;cursor:pointer;margin-left:6px';
        sp.addEventListener('click', () => {
          row._url             = '';
          txtInput.value       = '';
          txtInput.placeholder = 'img/fayl-nomi.jpg  yoki  https://...';
          txtInput.disabled    = false;
          fileInp.disabled     = false;
          fileInp.value        = '';
          preview.src          = '';
          preview.style.opacity= '0';
          sp.remove();
          row._clearSpan = null;
        });
        txtInput.parentNode.appendChild(sp);
        row._clearSpan = sp;
      }
    } catch (e) {
      txtInput.value = '';
      txtInput.placeholder = '⚠ Xato — qaytadan urinib ko\'ring';
    }
    fileInp.disabled = false;
  });

  rmBtn.addEventListener('click', () => row.remove());
  return row;
}

function collectImgUrls() {
  return Array.from(document.querySelectorAll('#imgRows .img-row'))
    .map(r => {
      if (r._url) return r._url;
      const v = r.querySelector('input[type=text]').value.trim();
      return v;
    })
    .filter(Boolean);
}

/* ===== MODAL (ADD / EDIT) ===== */
let editIdx = -1;

function openModal(idx) {
  editIdx = (idx === undefined) ? -1 : idx;
  const prods = getProds();
  const p     = editIdx >= 0 ? prods[editIdx] : null;

  document.getElementById('modalTitle').textContent = p ? 'Mahsulotni tahrirlash' : 'Yangi mahsulot';
  document.getElementById('pNameUz').value = p ? p.name.uz        : '';
  document.getElementById('pNameRu').value = p ? (p.name.ru || '') : '';
  document.getElementById('pCat').value    = p ? p.cat             : 'oshxona';

  const container = document.getElementById('imgRows');
  container.innerHTML = '';
  const imgs = p ? (p.imgs || []) : [];
  if (imgs.length) imgs.forEach(u => container.appendChild(createImgRow(u)));
  else container.appendChild(createImgRow());

  document.getElementById('modalOverlay').classList.remove('hidden');
  document.getElementById('pNameUz').focus();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  editIdx = -1;
}

function saveProduct() {
  const nameUz = document.getElementById('pNameUz').value.trim();
  const nameRu = document.getElementById('pNameRu').value.trim();
  const cat    = document.getElementById('pCat').value;
  const imgs   = collectImgUrls();

  if (!nameUz) {
    document.getElementById('pNameUz').style.borderColor = '#dc2626';
    document.getElementById('pNameUz').focus();
    setTimeout(() => document.getElementById('pNameUz').style.borderColor = '', 1500);
    return;
  }
  if (!imgs.length) {
    showToast('Kamida 1 ta rasm kiriting!', 'err');
    return;
  }

  const prods = getProds();
  if (editIdx >= 0) {
    prods[editIdx] = { ...prods[editIdx], name: { uz: nameUz, ru: nameRu || nameUz }, cat, imgs };
  } else {
    prods.push({ id: Date.now(), name: { uz: nameUz, ru: nameRu || nameUz }, cat, imgs });
  }
  saveProds(prods);
  closeModal();
  renderProdList();
  showToast(editIdx >= 0 ? 'Mahsulot yangilandi ✓' : 'Yangi mahsulot qo\'shildi ✓');
}

/* ===== DELETE ===== */
let delIdx = -1;

function confirmDelete(idx) {
  delIdx = idx;
  const p = getProds()[idx];
  document.getElementById('delName').textContent = p ? p.name.uz : '';
  document.getElementById('delOverlay').classList.remove('hidden');
}

function doDelete() {
  if (delIdx < 0) return;
  const prods = getProds();
  prods.splice(delIdx, 1);
  saveProds(prods);
  delIdx = -1;
  document.getElementById('delOverlay').classList.add('hidden');
  renderProdList();
  showToast('Mahsulot o\'chirildi');
}

/* ===== SETTINGS ===== */
function loadSettingsUI() {
  const s = getSettings();
  document.getElementById('set-phone1').value = s.phone1 || '';
  document.getElementById('set-phone2').value = s.phone2 || '';
  document.getElementById('set-tg').value     = s.tg     || '';
  document.getElementById('set-tgch').value   = s.tgch   || '';
}

function saveSettingsUI() {
  const pass  = document.getElementById('set-pass').value.trim();
  const pass2 = document.getElementById('set-pass2').value.trim();
  const msg   = document.getElementById('setMsg');

  if (pass && pass !== pass2) {
    msg.textContent  = '⚠ Parollar mos kelmadi!';
    msg.className    = 'set-msg err';
    return;
  }
  saveSets({
    phone1: document.getElementById('set-phone1').value.trim(),
    phone2: document.getElementById('set-phone2').value.trim(),
    tg:     document.getElementById('set-tg').value.trim(),
    tgch:   document.getElementById('set-tgch').value.trim(),
  });
  if (pass) {
    localStorage.setItem(PASS_KEY, pass);
    document.getElementById('set-pass').value  = '';
    document.getElementById('set-pass2').value = '';
  }
  msg.textContent = '✓ Saqlandi!';
  msg.className   = 'set-msg ok';
  setTimeout(() => { msg.textContent = ''; }, 2800);
}

/* ===== TOAST ===== */
function showToast(text, type = 'ok') {
  let t = document.getElementById('adm-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'adm-toast';
    t.style.cssText = `
      position:fixed;bottom:24px;right:24px;z-index:9999;
      padding:12px 20px;border-radius:10px;font-size:.88rem;font-weight:600;
      font-family:'Poppins',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.18);
      transition:opacity .35s,transform .35s;pointer-events:none;
    `;
    document.body.appendChild(t);
  }
  t.textContent  = text;
  t.style.background  = type === 'err' ? '#dc2626' : '#15803d';
  t.style.color       = '#fff';
  t.style.opacity     = '1';
  t.style.transform   = 'translateY(0)';
  clearTimeout(t._tid);
  t._tid = setTimeout(() => {
    t.style.opacity   = '0';
    t.style.transform = 'translateY(10px)';
  }, 2400);
}

/* ===== TABS ===== */
document.querySelectorAll('.adm-nav').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.adm-nav').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.adm-tab').forEach(t => t.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
    if (btn.dataset.tab === 'settings') loadSettingsUI();
  });
});

/* ===== AUTH ===== */
function showPanel() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('adminPanel').classList.remove('hidden');
  renderProdList();
}

document.getElementById('loginBtn').addEventListener('click', () => {
  const pwd = document.getElementById('pwdInput').value;
  const err = document.getElementById('loginErr');
  if (pwd === getPass()) {
    _loggedIn = true;
    err.textContent = '';
    showPanel();
  } else {
    err.textContent = '⚠ Parol noto\'g\'ri!';
    document.getElementById('pwdInput').value = '';
    document.getElementById('pwdInput').focus();
  }
});

document.getElementById('pwdInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('loginBtn').click();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  _loggedIn = false;
  document.getElementById('adminPanel').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('pwdInput').value = '';
  document.getElementById('loginErr').textContent = '';
});

/* ===== MODAL EVENTS ===== */
document.getElementById('addProductBtn').addEventListener('click', () => openModal());
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('saveProductBtn').addEventListener('click', saveProduct);
document.getElementById('addImgRow').addEventListener('click', () =>
  document.getElementById('imgRows').appendChild(createImgRow())
);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

/* ===== DELETE EVENTS ===== */
document.getElementById('delCancel').addEventListener('click', () => {
  document.getElementById('delOverlay').classList.add('hidden');
  delIdx = -1;
});
document.getElementById('delConfirm').addEventListener('click', doDelete);
document.getElementById('delOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    document.getElementById('delOverlay').classList.add('hidden');
    delIdx = -1;
  }
});

/* ===== SETTINGS EVENTS ===== */
document.getElementById('saveSettingsBtn').addEventListener('click', saveSettingsUI);

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!document.getElementById('modalOverlay').classList.contains('hidden')) closeModal();
    if (!document.getElementById('delOverlay').classList.contains('hidden')) {
      document.getElementById('delOverlay').classList.add('hidden');
      delIdx = -1;
    }
  }
});

/* ===== INIT ===== */
if (!localStorage.getItem(PRODUCTS_KEY)) {
  saveProds(DEFAULT_PRODUCTS);
}

// Har safar login ekrani ko'rsatiladi
document.getElementById('adminPanel').classList.add('hidden');
document.getElementById('loginScreen').classList.remove('hidden');
document.getElementById('pwdInput').focus();
