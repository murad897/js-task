import "./styles/index.css";
import { Object, IPlayMemory } from "./types";
import { emojis } from "./constants";

class PlayMemory implements IPlayMemory {
  selectMenuItems: HTMLElement[];
  buttons: HTMLElement[];
  selector: HTMLButtonElement;
  level: string;
  totalSeconds: number;
  selectorMenu: HTMLDListElement;
  innerContainer: HTMLElement;
  chosenLevelPopup: HTMLElement;
  startTimerFromZero: number;
  cardsOnTable: string[];
  interval: any;
  finishedTextPopup: HTMLElement;
  gamefinishedText: string;
  constructor() {    
    this.selectMenuItems = Array.from(
      document.querySelectorAll(".selector-item")
    );
    this.buttons = Array.from(document.querySelectorAll(".inner-popup button"));
    this.selectorMenu = document.querySelector("#selector");
    this.selector = document.querySelector(".selector-value");
    this.innerContainer = document.querySelector("#inner-container");
    this.finishedTextPopup = document.querySelector(".timer-popup");
    this.chosenLevelPopup = document.querySelector(".popup");
    this.level = "";
    this.totalSeconds;
    this.startTimerFromZero = 0;
    this.cardsOnTable = [];
    this.interval;
    this.gamefinishedText;
  }

  play() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.className !== "selector-value") {
          this.level = button.dataset.level;
          this.getLevel();
        }
      });
    });

    this.selector.addEventListener("click", () => {
      this.selectorMenu.classList.toggle("active-menu");
    });

    this.selectMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.selectorMenu.classList.remove("active-menu");
        this.selector.innerHTML = `<p>${item.textContent}&#x21d3;</p>`;
        const customLevel = item.dataset.level;
        this.level = customLevel;
        this.getLevel();
      });
    });
  }

  startTimer() {
    this.totalSeconds = 0;
    this.interval = setInterval(() => {
      ++this.totalSeconds;
      let hour: string | number = Math.floor(this.totalSeconds / 3600);
      let minute: string | number = Math.floor(
        (this.totalSeconds - hour * 3600) / 60
      );
      let seconds: string | number =
        this.totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      this.gamefinishedText = `<div>
      <p>Congrats you finished this level in</p>
      <p>${hour}: ${minute}: ${seconds}</p>
      </div>`;
    }, 1000);
  }

  getLevel() {
    this.startTimerFromZero = 0;
    clearInterval(this.interval);
    this.level === "2"
      ? (this.cardsOnTable = emojis.slice(0, 4).sort(() => Math.random() - 0.5))
      : null;
    this.level === "6"
      ? (this.cardsOnTable = emojis
          .slice(0, 36)
          .sort(() => Math.random() - 0.5))
      : null;
    this.level === "10"
      ? (this.cardsOnTable = emojis
          .slice(0, 100)
          .sort(() => Math.random() - 0.5))
      : null;
    this.level === "eazy"
      ? (this.cardsOnTable = emojis
          .slice(0, 16)
          .sort(() => Math.random() - 0.5))
      : null;
    this.level === "medium"
      ? (this.cardsOnTable = emojis
          .slice(0, 64)
          .sort(() => Math.random() - 0.5))
      : null;
    this.level === "hard"
      ? (this.cardsOnTable = emojis.sort(() => Math.random() - 0.5))
      : null;

    this.innerContainer.className = "";
    this.innerContainer.classList.add(`prison${this.level}`);
    this.addCard(this.cardsOnTable);
  }

  addCard(cardsOnTable: string[]) {
    this.innerContainer.innerHTML = "";
    this.cardsOnTable.map((item) => {
      const card = document.createElement("div");
      card.className = "card";
      const frontSide = document.createElement("div");
      frontSide.className = "card-face card-front";
      const backSide = document.createElement("div");
      backSide.innerText = `${item}`;
      backSide.className = "card-face card-back";
      card.appendChild(frontSide);
      card.appendChild(backSide);
      this.innerContainer.appendChild(card);
    });
    this.cardClick();
  }

  cardClick() {
    const cards: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".card");
    let history: Object[] = [];
    cards.forEach((card, index) => {
      card.addEventListener("click", (e: any) => {
        card.classList.add("rototate-card");
        this.startTimerFromZero += 1;
        if (this.startTimerFromZero === 1) {
          this.chosenLevelPopup.classList.add("hide-popup");
          this.startTimer();
        }
        history.push({
          text: e.path[1].innerText,
          index,
        });
        if (history.length === this.cardsOnTable.length) {
          clearInterval(this.interval);
          this.startTimerFromZero = 0;
          this.finishedTextPopup.classList.add("active");
          this.finishedTextPopup.innerHTML = this.gamefinishedText;
          history = [];
          setTimeout(() => {
            this.finishedTextPopup.classList.remove("active");
            cards.forEach((item) => {
              item.classList.remove("rototate-card");
              this.chosenLevelPopup.classList.remove("hide-popup");
            });
            this.getLevel();
          }, 3000);
        }
        if (history.length > 1) {
          history.map((item, index) => {
            if (
              index !== 0 &&
              item.text === history[index - 1].text &&
              index! % 2
            ) {
              return null;
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
}

let game = new PlayMemory();
game.play();
