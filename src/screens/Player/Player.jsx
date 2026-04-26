import React, { useEffect, useState } from "react";
import "./Player.css";
import icons from "../../assets/js/icons";
import { useParams, useNavigate } from "react-router";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApi_Data] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiYTgwNTQxNmYxNDI1NjFlOGFkZGE1NjA1NmI5OSIsIm5iZiI6MTc3NzExNDE0NC40NzksInN1YiI6IjY5ZWM5YzIwZjExY2VlYjczNzZiMTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqE3OOgXMNLHaWip_gfu1ySxjN51dsJb_Dl2hp5UBtg",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApi_Data(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img
        src={icons.back_arrow_icon}
        alt="back-arrow"
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="MF GABHRU! (Official Video) KARAN AUJLA | IKKY | Latest Punjabi Songs 2025"
        allowFullScreen
      ></iframe>
      <div className="movieDetails">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

{
  /* <iframe
  width="769"
  height="577"
  src="https://www.youtube.com/embed/Fbv6-50S1lc?list=RDFbv6-50S1lc"
  title="MF GABHRU! (Official Video) KARAN AUJLA | IKKY | Latest Punjabi Songs 2025"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
