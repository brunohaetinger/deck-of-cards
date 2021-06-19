import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import CardsTable from "../../components/CardsTable/CardsTable";
import { selectDeck } from "../../store/deck/deckSlice";
import { DeckState } from "../../store/deck/types";
import { useTypedSelector } from "../../store/store";

const DeckDetails = () => {
  const { id } = useParams<any>();
  const { pile, rotationCard } = useTypedSelector<DeckState>(selectDeck);

  return (
    <CardsTable>
      <h2>DeckDetails {id}</h2>

      {rotationCard && (
        <>
          <h2>Rotation Card</h2>
          <Card card={rotationCard} />
        </>
      )}
    </CardsTable>
  );
};

export default DeckDetails;
