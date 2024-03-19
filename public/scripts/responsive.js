const hamburgerButton = document.getElementById("hamburger__button");
const mobileMenu = document.getElementById("mobile__menu");

function toggleMenu() {
  mobileMenu.classList.toggle("open");
}

hamburgerButton.addEventListener("click", toggleMenu);
