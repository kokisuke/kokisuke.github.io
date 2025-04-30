function setLanguage(lang) {
  document.querySelectorAll('[data-ja]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// Optional: Animate on scroll
const sections = document.querySelectorAll('[data-section]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.classList.remove('fade-in'); // 初期化
  observer.observe(sec);
});
