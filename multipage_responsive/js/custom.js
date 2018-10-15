// hero-bottom-nav toggle active class
let heroBottomTab = document.querySelectorAll('.bottom-nav-tab');

for (let i = 0; i < heroBottomTab.length; i++) {
  heroBottomTab[i].addEventListener('click', function() {

    if (heroBottomTab[i].classList.contains('active') === true) {
      this.classList.remove('active');
    } else if(heroBottomTab[i].classList.contains('active') === false) {
    this.classList.toggle('active');
    }
  }
)};


// let inactiveTabs = document.querySelectorAll('.bottom-nav-tab');

// for (let i = 0; i < inactiveTabs.length; i++) {
//   inactiveTabs[i].addEventListener('click', toggleActive);
// }

// function toggleActive() {
//   let activeToggle = document.getElementsByClassName('bottom-nav-tab');
//   if (activeToggle.classList.contains('active') === true) {
//     activeToggle.classList.remove('active');
//   } else {
//     activeToggle.classList.add('active');
//   }

// }