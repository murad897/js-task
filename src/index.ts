import "./styles/index.css";

const optionsHard: string[] = ["🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥭","🍍","🍌","🥭","🍍","🥭","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥭","🍍","🥭","🍍","🍌","🥭","🍍","🥭"];
const optionsMedium: string[] = ["🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌","🥔","🍒","🥑","🌽","🥕","🍇","🍉","🍌"];
const optionsEazy: string[] = ["🥔", "🍒", "🥑", "🌽", "🥔", "🍒", "🥑", "🌽"];
let cardsOnTable: string[];

const innerContainer: HTMLElement = document.querySelector("#inner-container");
const finishedTextPopup: HTMLElement = document.querySelector(".timer-popup");
const buttons: HTMLElement[] = Array.from(
  document.querySelectorAll(".inner-popup button")
);
let chosenLevel: string;
let startTimer: number = 0;
let timer: any;
let gamefinishedText: string;
interface Object {
  text: string;
  index: number;
}
class PlayMemory {
  level: string;
  constructor(level: string) {
    this.level = level;
    this.getLevel();
    this.cardClick();
  }

  startTimer() {
    let totalSeconds: number = 0;
    timer = setInterval(() => {
      ++totalSeconds;
      let hour: string | number = Math.floor(totalSeconds / 3600);
      let minute: string | number = Math.floor(
        (totalSeconds - hour * 3600) / 60
      );
      let seconds: string | number = totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      gamefinishedText = `<div>
      <p>Congrats you finished this level in</p>
      <p>${hour}: ${minute}: ${seconds}</p>
      </div>`;
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
    const cards: NodeListOf<any> = document.querySelectorAll(".card");
    let history: Object[] = [];

    cards.forEach((card, index) => {
      card.addEventListener("click", (e: any) => {
        card.classList.add("rototate-card");
        startTimer += 1;
        if (startTimer === 1) {
          this.startTimer();
        }
        history.push({
          text: e.path[1].innerText,
          index,
        });
        if (history.length === cardsOnTable.length) {
          clearInterval(timer);
          finishedTextPopup.classList.add("active");
          finishedTextPopup.innerHTML = gamefinishedText;
          history = [];
          setTimeout(() => {
            finishedTextPopup.classList.remove("active");
            cardsOnTable = optionsEazy
              .concat(optionsEazy)
              .sort(() => Math.random() - 0.5);
            cards.forEach((item) => {
              item.classList.remove("rototate-card");
            });
          }, 3000);
        }

        if (history.length > 1) {
          history.map((item, index) => {
            if (
              index !== 0 &&
              item.text === history[index - 1].text &&
              index! % 2
            ) {
              console.log("yes");
            } else if (index !== 0 && index! % 2) {
              let removeActive = history.slice(-2);
              removeActive.forEach((item) => {
                setTimeout(() => {
                  cards[item.index].classList.remove("rototate-card");
                }, 700);
              });
              history.splice(history.length - 2, 2);
            }
          });
        }
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
