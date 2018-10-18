// hero-bottom-nav toggle active class on click
let inactiveTabs = document.querySelectorAll('.bottom-nav-tab');

for (let i = 0; i< inactiveTabs.length; i++) {
  inactiveTabs[i].addEventListener('click', function() {
    inactiveTabs.forEach(el => el.classList.remove('bottom-nav-clicked'));
    if(inactiveTabs[i].classList.contains('bottom-nav-clicked') === false) {
      this.classList.toggle('bottom-nav-clicked');
    } else {
      this.classList.remove('bottom-nav-clicked');
    }
  });
};

// Owl Carousel Item add text flip animation when nav arrow clicked

let carouselItems = document.querySelectorAll('.owl-item');
let navArrows = document.querySelectorAll('.home-slider-btn');

for(let i = 0; i < navArrows.length; i++) {
  navArrows[i].addEventListener('click', function() {
    carouselItems.forEach(el => carouselItems.classList.add('active'));
  })
};