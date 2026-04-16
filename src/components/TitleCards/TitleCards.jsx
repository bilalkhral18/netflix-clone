import "./TitleCards.css";
import cards_data from "../../assets/js/cards";
import { useEffect, useRef } from "react";
const TitleCards = ({ title, bottom }) => {
  const cardsRef = useRef();
  useEffect(() => {
    const el = cardsRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className="titlecards" style={bottom ? { bottom: bottom } : {}}>
      <h2>Popular on Netflix</h2>

      <div className="card_list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="image not found" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
