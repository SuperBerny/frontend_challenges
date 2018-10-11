$(document).ready(function(){

  var owl = $('.owl-carousel');
  
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false
  });

  $('.customNextBtn').click(function(){
    owl.trigger('next.owl.carousel');
  });

  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.caorusel');
  });

});