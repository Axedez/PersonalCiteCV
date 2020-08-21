new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true,
  },
});
if (document.body.clientWidth <= 835) {
  $(function () {
    $('.hero-avatar').attr('data-wow-delay', '0.5s');
  });
}
