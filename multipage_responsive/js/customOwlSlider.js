$(document).ready(function(){

  var owl = $('.owl-carousel');
  
  owl.owlCarousel({
    loop:true,
    items:1,
    nav:false,
    smartSpeed: 1200
  });

  $('.customNextBtn').click(function(){
    owl.trigger('next.owl.carousel');
  });
  
  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.caorusel');
  });

});

