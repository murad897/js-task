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
let startTimer: number = 0;
class PlayMemory {
  level: string;
  constructor(level: string) {
    this.level = level;
    this.getLevel();
    this.cardClick();
  }

  startTimer() {
    let totalSeconds: number = 0;
    let result: string;
    const timer: any = setInterval(() => {
      ++totalSeconds;
      let hour: string | number = Math.floor(totalSeconds / 3600);
      let minute: string | number = Math.floor(
        (totalSeconds - hour * 3600) / 60
      );
      let seconds: string | number = totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      return console.log((result = hour + ":" + minute + ":" + seconds));
    }, 1000);
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

  cardClick() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        startTimer += 1;
        if (startTimer === 1) {
          this.startTimer();
        }
        card.classList.add("rototate-card");
      });
    });
  }

  addCard(cardsOnTable: string[]) {
    innerContainer.innerHTML = "";
    cardsOnTable.map((item) => {
      let card = `
        <div class="card">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">${item}</div>
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
