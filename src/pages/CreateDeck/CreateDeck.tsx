import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CardsTable from "../../components/CardsTable/CardsTable";
import { createDeck } from "../../store/deck/deckSlice";
import { CardType } from "../../store/deck/types";
import { useAppDispatch } from "../../store/store";
import { isSuitValid, isValueValid } from "../../store/deck/deckUtils";

const CreateDeck = () => {
  const dispatch = useAppDispatch();
  const [pile, setPile] = useState<CardType[]>([]);
  const [cardToAddInput, setCardToAddInput] = useState<string>("");
  const [rotationCardInput, setRotationCardInput] = useState<string>("");

  useEffect(() => {
    dispatch(createDeck());
  }, []);

  const isValidCard = (input: string) => {
    const length = input.length;
    const value = input.substring(0, length - 1);
    const suit = input.substring(length - 1);
    return isValueValid(value) && isSuitValid(suit);
  };

  const addToPile = () => {
    const length = cardToAddInput.length;
    const value = cardToAddInput.substring(0, length - 1);
    const suit = cardToAddInput.substring(length - 1);
    if (isValidCard(cardToAddInput)) {
      if (!pile.some((card) => card.value === value && card.suit === suit)) {
        setPile((prevPile) => {
          const newCard = { value, suit } as CardType;
          return [...prevPile, newCard];
        });
      }
    }
  };

  return (
    <>
      <CardsTable>
        {pile &&
          pile.map((card) => (
            <Card key={`${card.value}${card.suit}`} card={card} />
          ))}

        <p>Add cards to the pile</p>
        <div>
          <input
            value={cardToAddInput}
            onChange={(ev) => setCardToAddInput(ev.target.value)}
          />
          <button onClick={addToPile}>Add</button>
        </div>
      </CardsTable>
      <div>
        <p>Add cards to the pile</p>
        <div>
          <input
            value={rotationCardInput}
            onChange={(ev) => setRotationCardInput(ev.target.value)}
          />
          <button>Submit deck</button>
        </div>
      </div>
    </>
  );
};

export default CreateDeck;
