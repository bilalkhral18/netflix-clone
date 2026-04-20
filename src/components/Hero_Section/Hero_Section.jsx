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
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" bottom="-208px" />
        <TitleCards title="Only on Netflix" bottom="-418px" />
        <TitleCards title="Upcoming" bottom="-628px" />
        <TitleCards title="Top Pics for You" bottom="-838px" />
      </div>
    </div>
  );
};

export default Hero_Section;
