import logo from './logo.svg';
import './App.css';
import './Commons/Components/Container/Container.scss';
import './Commons/Components/Header/Header.scss';
import './Commons/Components/Popup/Popup.scss';
import Container from './Commons/Components/Container/Container';
import { BrowserRouter as Router } from "react-router-dom";
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Header from './Commons/Components/Header/Header';




function App() {
  return (
    <>
      <Header />
      <Router>
        <CardsContainer />
        <Container />

      </Router>

    </>
  );
}

export default App;
