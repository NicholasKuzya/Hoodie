document.addEventListener('DOMContentLoaded', function() {

  const showSlider = new Swiper('.b-showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    spped: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.b-showcase-navigation__next',
      prevEl: '.b-showcase-navigation__prev',

    }
  });

	document.querySelector('.b-showcase__video').playbackRate = 2;

})
