import styled from "styled-components";

const TableWrapper = styled.div`
  background-color: var(--dark-green-blue);
  border: 1px solid var(--black);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

interface CardsTableProps {
  children: React.ReactNode;
}

const CardsTable: React.FC<CardsTableProps> = ({ children }) => {
  return <TableWrapper>{children}</TableWrapper>;
};

export default CardsTable;
