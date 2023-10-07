'use strict';
$(document).ready(function () {
  const menu = $('.menu__body');
  const menuBtn = $('.js-hamburger');
  const body = $('body');

  if (menu.length && menuBtn.length) {
    menuBtn.click(function (e) {
      menu.toggleClass('is-active');
      menuBtn.toggleClass('is-active');
      body.toggleClass('lock');
    });

    menu.click(function (e) {
      if ($(e.target).hasClass('menu__body')) {
        menu.removeClass('is-active');
        menuBtn.removeClass('is-active');
        body.removeClass('lock');
      }
    });

    menu.find('.menu__list li a').click(function () {
      menu.removeClass('is-active');
      menuBtn.removeClass('is-active');
      body.removeClass('lock');
    });
  }
  // плавна прокрутка до якоря

  let $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      400
    );
    return false;
  });

  //==============================================
  window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  // =============-modal-========================

  // Модальное окно
  function bindModal(trigger, modal, close) {
    (trigger = document.querySelector(trigger)),
      (modal = document.querySelector(modal)),
      (close = document.querySelector(close));

    const body = document.body;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      body.classList.add('locked');
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      body.classList.remove('locked');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('locked');
      }
    });
  }

  // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
  // ВТОРОЙ аргумент - класс самого модального окна.
  // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
  bindModal('.home-modal', '.modal__wrapper', '.modal__close');
});

// Бібліотека АОS:
//? Загальні налаштування
//? michalsnik.github.io/aos/   ссилка на документацію
//? https://animista.net/       ссилка на додаткові анімації

AOS.init({
  // Global settings:
  disable: false, // приймає такі значення: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // назва події, надісланої в документі, яку AOS має ініціалізувати
  initClassName: 'aos-init', // class застосовується після ініціалізації
  animatedClassName: 'aos-animate', // class застосовується до анімації
  useClassNames: false, // якщо істина, додаватиме вміст `data-aos` як класи під час прокручування
  disableMutationObserver: false, // вимикає автоматичне виявлення мутацій (додатково)
  debounceDelay: 50, // затримка на усунення дребезгу, яка використовується під час зміни розміру вікна (додатково)
  throttleDelay: 99, // затримка на газі під час прокручування сторінки (додатково)

  //Параметри, які можна перевизначати для кожного елемента за допомогою атрибутів data-aos-*:
  offset: 100, // зсув (у пікселях) від початкової точки запуску
  delay: 0, // значення від 0 до 3000 з кроком 50 мс
  duration: 400, // значення від 0 до 3000 з кроком 50 мс
  easing: 'ease', // ослаблення за замовчуванням для анімацій AOS
  once: false, // чи має відбуватися анімація тільки один раз - під час прокручування вниз
  mirror: false, // чи повинні елементи анімуватися під час прокручування повз них
  anchorPlacement: 'top-bottom', //визначає, яка позиція елемента щодо вікна має запускати анімацію
});
//
//? вствити в html
// data-aos="fade-up"  --затухання
// data-aos-offset="200" --зміщення
// data-aos-delay="50" --затримка 50mls.l
// data-aos-duration="1000" --довжина анімації
// data-aos-easing="ease-in-out" --легкий вхід вихід
// data-aos-anchor-placement="top-center" --верх центр
// data-aos-mirror="true" --zerkalo
// data-aos-once="false" --???

// ==========================================================
//? Додавання спеціальних анімацій: Приклад(animista)
// [data-aos="new-animation"] {
//   opacity: 0;
//   transition-property: transform, opacity;

//   &.aos-animate {
//     opacity: 1;
//   }
// }
//? Потім використовуйте його в HTML:
// <div data-aos="new-animation"></div>

// =Anchor====================================================
// ?  перший елемент не занімується доти поки не з'явиться перший
// div data-aos='fade-up' data-aos-anchor='.other-element'></div;
// div clasa='other-element' data-aos='fade-up'></div>;

// ==АОS=========================================================

// ==========================================================================================================================================================================================================================
