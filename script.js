// スクロール時にフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// 波紋クリックエフェクト
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const circle = document.createElement('span');
      circle.classList.add('ripple');
      const rect = link.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;
      link.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});

// ハンバーガーメニュー切り替え
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// ページ読み込み時に保存された言語で表示
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ja';
  updateLanguage(savedLang);
});
