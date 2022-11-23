export interface Object {
  text: string;
  index: number;
}

export interface IPlayMemory {
  play(): void;
  startTimer(): void;
  getLevel(): void;
  addCard(cardsOnTable: string[]): void;
  cardClick(): void;
}
