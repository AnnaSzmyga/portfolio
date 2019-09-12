// MOBILE MENU:

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__list');

const toggleMenu = () => {
    menu.classList.toggle('show');
}

hamburger.addEventListener('click', toggleMenu);


// start animation when element is in viewport
const animatedElements = document.querySelectorAll('.section__title');

const checkIfInViewport = (element, callbackIfYes, callbackIfNot) => {
    const elementCoordinates = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = element.offsetHeight;
    if ( (elementCoordinates.top >= 0) && (elementCoordinates.bottom < (viewportHeight + elementHeight)) ) {
        console.log('in viewport!');
        callbackIfYes()
    } else {
        console.log('not...');
        callbackIfNot();
    }
}

const startAnimation = (element) => {
    element.classList.add('animated');
}
const takeOffAnimation = (element) => {
    element.classList.remove('animated');
}

animatedElements.forEach((element) => {
    window.addEventListener('scroll', () => checkIfInViewport(element, () => startAnimation(element), () => takeOffAnimation(element)));
})


