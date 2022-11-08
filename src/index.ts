import "./styles/index.css";

const optionsHard: string[] = [
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🥭",
  "🍍",
];
const optionsMedium: string[] = [
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥔",
  "🍒",
];
const optionsEazy: string[] = ["🥔", "🍒", "🥑", "🌽", "🥔", "🍒", "🥑", "🌽"];

let cardsOnTable: string[];
const innerContainer: HTMLElement = document.querySelector("#inner-container");
const buttons: HTMLElement[] = Array.from(
  document.querySelectorAll(".inner-popup button")
);
let chosenLevel: string;

class PlayMemory {
  level: string;
  constructor(level: string) {
    this.level = level;
    this.getLevel();
  }

  getLevel() {
    this.level === "eazy"
      ? (cardsOnTable = optionsEazy
          .concat(optionsEazy)
          .sort(() => Math.random() - 0.5))
      : null;
    this.level === "medium"
      ? (cardsOnTable = optionsMedium
          .concat(optionsMedium)
          .sort(() => Math.random() - 0.5))
      : null;

    this.level === "hard"
      ? (cardsOnTable = optionsHard
          .concat(optionsHard)
          .sort(() => Math.random() - 0.5))
      : null;

    innerContainer.className = "";
    innerContainer.classList.add(`prison${this.level}`);
    this.addCard(cardsOnTable);
  }

  addCard(cardsOnTable: string[]) {
    innerContainer.innerHTML = "";
    cardsOnTable.map((item) => {
      let card = `
        <div class="card">
        <div class="card-front"></div>
        <div class="card-back">${item}</div>
      </div>`;
      innerContainer.innerHTML += card;
    });
  }
}

buttons.map((button) => {
  button.addEventListener("click", () => {
    chosenLevel = button.dataset.level;
    let newGame = new PlayMemory(chosenLevel);
  });
});
