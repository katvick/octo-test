function slider() {
  $('.cards-slider').owlCarousel({
    loop: true,
    smartSpeed: 600,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    }
  })

  $('.slider-prev').click(function() {
    $('.cards-slider').trigger('prev.owl.carousel');
  });

  $('.slider-next').click(function() {
    $('.cards-slider').trigger('next.owl.carousel');
  });
}

export default slider;
