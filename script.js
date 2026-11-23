console.log('script.js загружен'); // для проверки: должно появиться в Console

// ---------- Дождь из капусточки (работает всегда) ----------
function dropCabbage() {
  const c = document.createElement('div');
  c.className = 'cabbage';
  c.textContent = '🥬';
  const d = 4 + Math.random() * 4;
  c.style.left = Math.random() * 100 + 'vw';
  c.style.fontSize = 20 + Math.random() * 20 + 'px';
  c.style.animationDuration = d + 's';
  // стили прямо здесь, чтобы работало и без style.css
  c.style.position = 'fixed';
  c.style.top = '-50px';
  c.style.zIndex = '5';
  c.style.pointerEvents = 'none';
  document.body.appendChild(c);
  c.animate(
    [{ transform: 'translateY(0) rotate(0deg)' },
     { transform: 'translateY(110vh) rotate(360deg)' }],
    { duration: d * 1000, easing: 'linear' }
  );
  setTimeout(() => c.remove(), d * 1000);
}
setInterval(dropCabbage, 600);

// ---------- Кнопка «Нет» убегает ----------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const answer = document.getElementById('answer');

function runAway() {
  noBtn.style.position = 'fixed';
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}
noBtn?.addEventListener('mouseover', runAway);
noBtn?.addEventListener('touchstart', (e) => { e.preventDefault(); runAway(); });

yesBtn?.addEventListener('click', () => {
  if (answer) answer.textContent = 'Ответ принят. Поздравляем, ты официально лох 🥬';
});

// ---------- Выбор цвета ----------
const colorMsgs = ['Ужасный выбор.', 'Петрикам нравится.', 'Ну такое...', 'Ого, у тебя есть вкус!', 'Этот цвет съела капусточка.'];
document.getElementById('colorPick')?.addEventListener('input', (e) => {
  document.body.style.background = e.target.value;
  const msg = document.getElementById('colorMsg');
  if (msg) msg.textContent = colorMsgs[Math.floor(Math.random() * colorMsgs.length)];
});

// ---------- Счётчик укусов ----------
let bites = 0;
document.querySelectorAll('img[alt*="петрик"]').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', (e) => {
    bites++;
    const counter = document.getElementById('biteCount');
    if (counter) counter.textContent = bites;
    const t = document.createElement('div');
    t.textContent = ['АМ!', 'ГАВ!', 'КУС!', 'НЯМ!'][Math.floor(Math.random() * 4)];
    t.style.cssText = 'position:fixed;z-index:50;pointer-events:none;font-weight:bold;font-size:1.6rem;color:#d32f2f;left:' + e.clientX + 'px;top:' + e.clientY + 'px';
    document.body.appendChild(t);
    t.animate([{ transform: 'translateY(0) scale(1)', opacity: 1 }, { transform: 'translateY(-60px) scale(1.5)', opacity: 0 }], 800);
    setTimeout(() => t.remove(), 800);
  });
});

// ---------- Баннер куки ----------
document.querySelectorAll('.cookie-btn').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById('cookie')?.remove());
});