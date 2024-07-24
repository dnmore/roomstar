const hamburgerButton = document.getElementById("hamburger__button");
const mobileMenu = document.getElementById("mobile__menu");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
