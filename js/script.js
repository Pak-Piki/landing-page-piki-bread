// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// Hambuerger menu on click
document.querySelector('#hamburger').onclick = () => {
  navbarNav.classList.toggle('active');
};

// click diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
