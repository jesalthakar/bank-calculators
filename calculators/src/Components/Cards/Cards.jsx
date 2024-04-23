import React from "react";
import "./Cards.scss";
import { cardsData } from "../Cards/Constants/constants";

const Cards = () => {
  return (
    <>
      {cardsData.map((card) => (
        <a className="cards-link">
          <div className="card-wrapper">
            <img className="cards-background-image" src={`${card.image}`} />
            <div className="cards-title">{card.title}</div>
            <div className="cards-description">{card.desc}</div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Cards;
