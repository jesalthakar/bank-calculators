import './App.css';
import './Commons/Components/Container/Container.scss';
import './Commons/Components/Header/Header.scss';
import './Commons/Components/Popup/Popup.scss';
import React from 'react';
import Container from './Commons/Components/Container/Container';
import { BrowserRouter as Router } from "react-router-dom";
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Header from './Commons/Components/Header/Header';
import { ApiProvider } from './Context/ApiContext';


function App() {
  return (
    <>
      <ApiProvider>
        <Header />
        <Router>
          <CardsContainer />
          <Container />
        </Router>
      </ApiProvider>
    </>
  );
}

export default App;
