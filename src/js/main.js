const miniNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav_item');
    const dark = document.querySelector('.darkbg');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        dark.classList.toggle('dark');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `burgerFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        burger.classList.toggle('close');
    });
};
miniNav();

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__top');
    header.classList.toggle('sticky', window.scrollY > 0);
});

