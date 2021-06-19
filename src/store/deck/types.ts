export type DeckState = {
  isLoading: boolean;
  error: string | null;
  deckId: string;
  rotationCard: CardType | null;
  pile: CardType[];
};

export type CardType = {
  value: CardValue;
  suit: CardSuit;
};

export type CardValue =
  | 2
  | "A"
  | "K"
  | "Q"
  | "J"
  | 10
  | 9
  | 8
  | 7
  | 6
  | 5
  | 4
  | 3;

export type CardSuit = "H" | "D" | "C" | "S";
