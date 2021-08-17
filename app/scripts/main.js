// Slick slider
$(document).ready(function () {
  $('.review__list').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
