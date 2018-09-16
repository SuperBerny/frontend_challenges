window.onscroll = function() {
  stickyFunction()
};

//Get NavBar
const navbar = document.getElementById('navbar');

//Get the offset position of the navbar
const sticky = navbar.offsetTop;

//Add sticky class to navbar reaches its scroll position.
//Remove 'sticky' class when you leave the scroll position

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}