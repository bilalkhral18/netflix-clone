import { Link } from "react-router";
import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [cards_data, setCards_Data] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiYTgwNTQxNmYxNDI1NjFlOGFkZGE1NjA1NmI5OSIsIm5iZiI6MTc3NzExNDE0NC40NzksInN1YiI6IjY5ZWM5YzIwZjExY2VlYjczNzZiMTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqE3OOgXMNLHaWip_gfu1ySxjN51dsJb_Dl2hp5UBtg",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setCards_Data(res.results))
      .catch((err) => console.error(err));

    const el = cardsRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card_list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w300${card.backdrop_path}`}
              alt={card.name || "thumbnail"}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
