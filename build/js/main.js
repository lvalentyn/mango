const miniNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav_item');
    const dark = document.querySelector('.darkbg');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        dark.classList.toggle('dark');/* затемнение */
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
// sticky menu 
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__top');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// paralax


$(".header__leaf1, .header__leaf2, .header__leaf3, .header__leaf4, .advantages__leaf1, .advantages__leaf2").paroller({ factor: -0.02, type: 'foreground', direction: 'vertical', transition: 'transform 0.2s ease-in' });
$(".header__mango1, .header__mango2, .header__mango3, .advantages__mango1, .advantages__mango2").paroller({ factor: 0.02, type: 'foreground', direction: 'vertical' });

// Animations

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-off')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);

}