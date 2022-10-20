$(function () {
    $('.menu__btn').on('click', function () {
        $(this).toggleClass('menu__btn--active');
        menuOverflow.toggleClass('menu-overflow--active');
    });
    // $('.menu__list-link').on('click', function () {
    //   $('.menu__btn').removeClass('menu__btn--active');
    //   $('.menu__list').removeClass('menu__list--active');
    // });
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
