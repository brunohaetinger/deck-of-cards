import { CardSuit, CardValue } from "./types";

const cardValues: CardValue[] = [
  2,
  "A",
  "K",
  "Q",
  "J",
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
];
const cardSuits: CardSuit[] = ["H", "D", "C", "S"];

export const isValueValid = (value: string | number) => {
  return cardValues.includes((Number(value) || value) as CardValue);
};
export const isSuitValid = (suit: string) => {
  return cardSuits.includes(suit as CardSuit);
};
