import styled from "styled-components";
import CreateDeck from "../../pages/CreateDeck/CreateDeck";
import DeckDetails from "../../pages/DeckDetails/DeckDetails";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const Background = styled.div`
  background-color: var(--blue-green);
  height: 100vh;
  padding: 40px 80px;
`;

const Title = styled.h1`
  margin-top: 0;
`;

function App() {
  return (
    <Background>
      <Title>Deck of cards</Title>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CreateDeck}></Route>
          <Route exact path="/deck/new" component={CreateDeck}></Route>
          <Route exact path="/deck/:id" component={DeckDetails}></Route>
        </Switch>
      </BrowserRouter>
    </Background>
  );
}

export default App;
