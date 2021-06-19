import styled from "styled-components";
import { CardType } from "../../store/deck/types";

const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid transparent;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100px;
  margin: 10px;
`;

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return <CardWrapper>{card.suit + " - " + card.value}</CardWrapper>;
};

export default Card;
