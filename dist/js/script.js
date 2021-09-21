const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelector('.menu__close'),
    overlayElem = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});
overlayElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const count = document.querySelectorAll('.skills__scale-count'),
    lines = document.querySelectorAll('.skills__scale-line span')

    count.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });