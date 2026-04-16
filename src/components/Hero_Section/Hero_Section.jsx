import images from "../../assets/js/images";
import icons from "../../assets/js/icons";
import "./Hero_Section.css";
import TitleCards from "../TitleCards/TitleCards";
const Hero_Section = () => {
  return (
    <div className="hero">
      <img src={images.hero_banner} alt="hero_img" className="hero_img" />
      <div className="hero_caption">
        <img
          src={images.hero_title}
          alt="caption_img"
          className="caption_img"
        />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          a modern Istanbul embarks on a quest to save the city from an immortal
          enemy
        </p>
        <div className="hero_btns">
          <button className="btn">
            <img src={icons.play_icon} alt="play btn" />
            play
          </button>
          <button className="btn dark_btn">
            <img src={icons.info_icon} alt="play btn" />
            More Info
          </button>
          <TitleCards />
        </div>
      </div>
      <TitleCards title="Top Rated" bottom="-500px" />
      <TitleCards title="Action Movies" bottom="-700px" />
      <TitleCards title="Comedy" bottom="-900px" />
      <TitleCards title="Thriller" bottom="-1100px" />
    </div>
  );
};

export default Hero_Section;
