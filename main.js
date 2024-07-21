'use strict';

{
  // ハンバーガーメニュー
  document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('navbar-collapse-with-animation');
    menu.classList.toggle('hidden');

    var menuOpenIcons = document.querySelectorAll('.menu-open');
    menuOpenIcons.forEach(function(icon) {
        icon.classList.toggle('hidden');
    });
  });

  // フェードインアニメーション
  const observer = new IntersectionObserver((entries, observer) => {
    let delay = 0;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), delay);
        delay += 100;
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(element => observer.observe(element));
}
