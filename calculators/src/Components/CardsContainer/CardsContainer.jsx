import React from "react";
import "../CardsContainer/CardsContainer.scss";
import CardsRoute from "../Cards/Routes/CardsRoute";

const CardsContainer = () => {
  return (
    <>
      <div className="cards-container-wrapper">
        <div className="cards-container">
          <CardsRoute />
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
