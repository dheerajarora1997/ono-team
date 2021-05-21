$(function () {
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    // loop: true,
    margin: 0,
    stagePadding: 5,
    nav: false,
    navigation: false,
    autoWidth: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 3
      }
    },
  });