export interface Object {
  text: string;
  index: number;
}

export interface PlayMemoryimplements {
  play(): void;
  startTimer(): void;
  getLevel(): void;
  addCard(cardsOnTable: string[]): void;
  cardClick(): void;
}
