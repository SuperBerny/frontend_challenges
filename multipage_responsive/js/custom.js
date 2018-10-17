// hero-bottom-nav toggle active class on click
let inactiveTabs = document.querySelectorAll('.bottom-nav-tab');

for (let i = 0; i< inactiveTabs.length; i++) {
  inactiveTabs[i].addEventListener('click', function() {
    inactiveTabs.forEach(el => el.classList.remove('active'));
    if(inactiveTabs[i].classList.contains('active') === false) {
      this.classList.toggle('active');
    } else {
      this.classList.remove('active');
    }
  });
};