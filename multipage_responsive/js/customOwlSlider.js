$(document).ready(function(){

  var owl = $('.owl-carousel');
  var customNext = $('.customNextBtn');
  var customPrev = $('.customPrevBtn');
  
  owl.owlCarousel({
    loop:true,
    items:1,
    nav:true,
    smartSpeed: 1200
  });

 customNext.click(function(){
    owl.trigger('next.owl.carousel');
  });
  
  customPrev.click(function() {
    owl.trigger('prev.owl.caorusel');
  });

});

