/**
 * This scripts will allow the mobile menu to show and disappear
 */
(() => {
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__container');
  const headerLinks = document.querySelectorAll('.header__link');
  const showMenuClass = 'header__container--visible';

  // Toggle show menu
  hamburger.addEventListener('click', () => {
    if (menu.classList.contains(showMenuClass)) {
      menu.classList.remove(showMenuClass);
    } else {
      menu.classList.add(showMenuClass);
    }
  });

  // When click on link, hide menu
  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove(showMenuClass);
    });
  });
})();
