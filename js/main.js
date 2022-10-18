$(function () {
  let menuOverflow = $('.menu-overflow');
  $('.menu__list-item').each(function () {
    menuOverflow.append($(this));
  });

  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
    menuOverflow.toggleClass('menu-overflow--active');
  });
  // $('.menu__list-link').on('click', function () {
  //   $('.menu__btn').removeClass('menu__btn--active');
  //   $('.menu__list').removeClass('menu__list--active');
  // });
});
