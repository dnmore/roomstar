function showCards() {
  var cards = document.querySelectorAll(".hotel__item");
  var delay = 0;
  for (const card of cards) {
    delay++;
    card.style.animation = `fade-in 0.5s ${delay}s ease-in-out forwards`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showCards();
});
