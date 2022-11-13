import "./styles/index.css";

interface Object {
  text: string;
  index: number;
}


const optionsHard: string[] = ["😀", "😀","😇", "😇", "🙂", "🙂","😝", "😝","🙃", "🙃", "😁","😁", "🤞","🤞", "👎 ", "👎 ", "🤜", "🤜" , "👏", "👏", "👧","👧", "😑", "😑", "😞", "😞", "🥲", "🥲", "😂", "😂", "😊", "😊", "😵", "😵", "💩", "💩", "😾", "😾" , "😹", "😹", "😼", "😼", "💀", "💀", "🤧", "🤧", "😷", "😷", "🤒", "🤒", "🤕", "🤕", "🥱", "🥱", "😪", "😪", "😡", "😡", "🤬", "🤬", "🤯", "🤯", "🤖", "🤖", "😈", "😈", "👹", "👹", "🥶", "🥶", "😎", "😎", "🎃", "🎃", "🐶", "🐶", "🐱", "🐱","🐭","🐭", "🐹", "🐹", "🐰", "🐰", "🦊", "🦊", "🐻", "🐻", "🐼", "🐼", "🐻‍❄️", "🐻‍❄️", "🐨", "🐨", "🐯", "🐯", "🐮", "🐮","🐷", "🐷", "🦉", "🦉", "🦇", "🦇","🐺","🐺","🌞","🌞", "🌝","🌝","🌛","🌛","🌜","🌜", "🌚", "🌚", "🌕", "🌕", "🌒", "🌒", "⚡️","⚡️", "🌤","🌤", "🌎", "🌎", "☔️","☔️","🌨","🌨","🌈","🌈","🍟", "🍟", "🍜", "🍜", "🍥", "🍥","🍘", "🍘","🍬", "🍬","🥇", "🥇"];
const optionsHard10x10: string[] = ["😀", "😀","😇", "😇", "🙂", "🙂","😝", "😝","🙃", "🙃", "😁","😁", "🤞","🤞", "👎 ", "👎 ", "🤜", "🤜" , "👏", "👏", "👧","👧", "😑", "😑", "😞", "😞", "🥲", "🥲", "😂", "😂", "😊", "😊", "😵", "😵", "💩", "💩", "😾", "😾" , "😹", "😹", "😼", "😼", "💀", "💀", "🤧", "🤧", "😷", "😷", "🤒", "🤒", "🤕", "🤕", "🥱", "🥱", "😪", "😪", "😡", "😡", "🤬", "🤬", "🤯", "🤯", "🤖", "🤖", "😈", "😈", "👹", "👹", "🥶", "🥶", "😎", "😎", "🎃", "🎃", "🐶", "🐶", "🐱", "🐱","🐭","🐭", "🐹", "🐹", "🐰", "🐰", "🦊", "🦊", "🐻", "🐻", "🐼", "🐼", "🐻‍❄️", "🐻‍❄️", "🐨", "🐨", "🐯", "🐯", "🐮", "🐮","🐷", "🐷"]
const optionsMedium: string[] = ["😀", "😀","😇", "😇", "🙂", "🙂","😝", "😝","🙃", "🙃", "😁","😁", "🤞","🤞", "👎 ", "👎 ", "🤜", "🤜" , "👏", "👏", "👧","👧", "😑", "😑", "😞", "😞", "🥲", "🥲", "😂", "😂", "😊", "😊", "😵", "😵", "💩", "💩", "😾", "😾" , "😹", "😹", "😼", "😼", "💀", "💀", "🤧", "🤧", "😷", "😷", "🤒", "🤒", "🤕", "🤕", "🥱", "🥱", "😪", "😪", "😡","😡", "🤬 ", "🤬", "🤯", "🤯", "🤖", "🤖"];
const optionsMedium6x6: string[] = ["😀", "😀","😇", "😇", "🙂", "🙂","😝", "😝","🙃", "🙃", "😁","😁", "🤞","🤞", "👎 ", "👎 ", "🤜", "🤜" , "👏", "👏", "👧","👧", "😑", "😑", "😞", "😞", "🥲", "🥲", "😂", "😂", "😊", "😊", "😵", "😵", "💩", "💩"];
const optionsEazy: string[] = [ "😇", "😇", "😀", "😀", "🙂", "🙂", "😝", "😝", "🙃", "🙃", "😁", "😁", "👎 ", "👎 ", "🤜", "🤜"];
const optionsEazy2x2: string[] = [ "😇", "😇", "😀", "😀"];

const selector: HTMLButtonElement = document.querySelector(".selector-value");
const selectorMenu: HTMLDListElement = document.querySelector("#selector");
const innerContainer: HTMLElement = document.querySelector("#inner-container");
const finishedTextPopup: HTMLElement = document.querySelector(".timer-popup");
const selectorMenuItems: HTMLElement[] = Array.from(
  document.querySelectorAll(".selector-item")
);
const buttons: HTMLElement[] = Array.from(
  document.querySelectorAll(".inner-popup button")
);

let cardsOnTable: string[];
let chosenLevel: string;
let startTimer: number = 0;
let timer: any;
let gamefinishedText: string;

class PlayMemory {
  selectMenuItems: HTMLElement[];
  buttons: HTMLElement[];
  selector: HTMLButtonElement;
  level: string;
  constructor(
    selectMenuItems: HTMLElement[],
    buttons: HTMLElement[],
    selector: HTMLButtonElement
  ) {
    this.selectMenuItems = selectMenuItems;
    this.buttons = buttons;
    this.selector = selector;
    this.level = "";
  }

  play() {
    this.buttons.map((button) => {
      button.addEventListener("click", () => {
        if (button.className !== "selector-value") {
          chosenLevel = button.dataset.level;
          this.level = chosenLevel;
          this.getLevel();
        }
      });
    });

    this.selector.addEventListener("click", () => {
      selectorMenu.classList.toggle("active-menu");
    });

    selectorMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectorMenu.classList.remove("active-menu");
        selector.innerHTML = `<p>${item.textContent}&#x21d3;</p>`;
        const customLevel: string = item.dataset.level;
        this.level = customLevel;
        this.getLevel();
      });
    });
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
    startTimer = 0;
    clearInterval(timer);
    this.level === "2"
      ? (cardsOnTable = optionsEazy2x2.sort(() => Math.random() - 0.5))
      : null;
    this.level === "6"
      ? (cardsOnTable = optionsMedium6x6.sort(() => Math.random() - 0.5))
      : null;
    this.level === "10"
      ? (cardsOnTable = optionsHard10x10.sort(() => Math.random() - 0.5))
      : null;
    this.level === "eazy"
      ? (cardsOnTable = optionsEazy.sort(() => Math.random() - 0.5))
      : null;
    this.level === "medium"
      ? (cardsOnTable = optionsMedium.sort(() => Math.random() - 0.5))
      : null;
    this.level === "hard"
      ? (cardsOnTable = optionsHard.sort(() => Math.random() - 0.5))
      : null;

    innerContainer.className = "";
    innerContainer.classList.add(`prison${this.level}`);
    this.addCard(cardsOnTable);
  }

  addCard(cardsOnTable: string[]) {
    innerContainer.innerHTML = "";
    console.log('yes')
    cardsOnTable.map((item) => {
      let card = document.createElement("div");
      card.className = "card";
      let frontSide = document.createElement("div");
      frontSide.className = "card-face card-front";
      let backSide = document.createElement("div");
      backSide.innerText = `${item}`;
      backSide.className = "card-face card-back";
      card.appendChild(frontSide);
      card.appendChild(backSide);
      innerContainer.appendChild(card);
    });
    this.cardClick();
  }

  cardClick() {
    const cards: NodeListOf<any> = document.querySelectorAll(".card");
    let history: Object[] = [];
    cards.forEach((card, index) => {
      card.addEventListener("click", (e: any) => {
        console.log(card, "card");
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
          startTimer = 0;
          finishedTextPopup.classList.add("active");
          finishedTextPopup.innerHTML = gamefinishedText;
          history = [];
          setTimeout(() => {
            finishedTextPopup.classList.remove("active");
            cards.forEach((item) => {
              item.classList.remove("rototate-card");
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

let game = new PlayMemory(selectorMenuItems, buttons, selector);
game.play();
