import logo from './logo.svg';
import './App.css';
import './Commons/Components/Container/Container.scss';
import Container from './Commons/Components/Container/Container';
import { BrowserRouter as Router } from "react-router-dom";
import CardsContainer from './Components/CardsContainer/CardsContainer';



function App() {
  return (
    <>
      <Router>
        <CardsContainer />
        <Container />

      </Router>

    </>
  );
}

export default App;
