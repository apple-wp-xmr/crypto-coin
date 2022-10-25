$(function () {
    let isMenuOpen = false;
    function disableScroll() {
        if (!isMenuOpen) {
            $('html, body').animate({ scrollTop: 0 }, 500, function () {
                // disable scroll on body
                $('body').css('overflow', 'hidden');
            });
            isMenuOpen = true;
        } else {
            $('body').css('overflow', 'auto');
            isMenuOpen = false;
        }
    }

    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('header__menu-btn--active');
        $('.header__menu').toggleClass('header__menu--active');
        disableScroll();
    });

    $('.header__menu-item').on('click', function () {
        disableScroll();
        $('.header__menu').removeClass('header__menu--active');
        $('.header__menu-btn').removeClass('header__menu-btn--active');
    });

    const countUp1 = new CountUp('count-one', 300, {
        startVal: 0,
        duration: 4,
        useEasing: true,
        suffix: '+',
    });
    const countUp2 = new CountUp('count-two', 140, {
        startVal: 0,
        duration: 4,
        useEasing: true,
        prefix: '$',
    });
    const countUp3 = new CountUp('count-three', 250, {
        startVal: 0,
        duration: 4,
        useEasing: true,
        suffix: '+',
    });

    let firstPlanet = document.querySelector('.potential__circle--one');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (
                entry.target.className === 'potential__circle potential__circle--one' &&
                entry.isIntersecting
            ) {
                countUp1.start();
                countUp2.start();
                countUp3.start();
            }
        });
    });

    observer.observe(firstPlanet);
});
