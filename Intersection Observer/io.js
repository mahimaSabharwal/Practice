const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");
let newCardDetails;
let pageNumber = 1;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loadNewCards();
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

function loadNewCards() {
  fetch(`https://jsonplaceholder.typicode.com/todos/${pageNumber}`)
    .then((response) => response.json())
    .then((json) => {
      newCardDetails = json;
      console.log("New card to be loaded");
      const card = document.createElement("div");
      card.textContent = newCardDetails["title"];
      card.classList.add("card");
      observer.observe(card);
      cardContainer.append(card);

      pageNumber++;
    });
}
