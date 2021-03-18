const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
let cards;

fetch('./assets/json/cards.json')
  .then((result) => result.json())
  .then((result) => {
    cards = result;
  });

class Card {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  render() {
    return `<div class="card">
      <div class="card__image"><img src="${this.image}" alt="Slide"></div>
      <div class="card__name">${this.name}</div>
      <div class="card__description">${this.description}</div>
    </div>`;
  }
}

const renderSlider = () => {
  const slidesPanel = document.querySelector('.slides');
  slidesPanel.innerHTML = '';

  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  cards.forEach((card) => {
    const newCard = new Card(card.name, card.description, card.image);
    slidesPanel.innerHTML += newCard.render();
  });
};

slideLeft.addEventListener('click', renderSlider);
slideRight.addEventListener('click', renderSlider);
