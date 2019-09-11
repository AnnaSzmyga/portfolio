// MOBILE MENU:

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__list');

const toggleMenu = () => {
    menu.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);
