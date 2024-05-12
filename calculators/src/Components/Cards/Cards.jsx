import React from "react";
import "./Cards.scss";
import { cardsData } from "../Cards/Constants/constants";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      {cardsData.map((card) => (
        <Link className="cards-link" to={card.redirect}>
          <div className="card-wrapper">
            <img className="cards-background-image" src={card.image} />
            <div className="cards-title">{card.title}</div>
            <div className="cards-description">{card.desc}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
