function setLanguage(lang) {
  document.querySelectorAll('[data-ja]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// アニメーション：スクロール時フェードイン
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-section]').forEach(el => {
  el.classList.remove('fade-in'); // 初期化
  observer.observe(el);
});
