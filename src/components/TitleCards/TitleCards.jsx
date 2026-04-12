import React from "react";
import "./TitleCards.css";
import cards_data from "../../assets/js/cards";

const TitleCards = () => {
  return (
    <div className="titlecards">
      <h2>Popular on Netflix</h2>

      <div className="card_list">
        {cards_data.map((card, index) => (
          <div key={index}>
            <img src={card.image} alt="image not found" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
