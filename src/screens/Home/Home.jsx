import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_Section from "../../components/Hero_Section/Hero_Section";
import TitleCards from "../../components/TitleCards/TitleCards";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero_Section />
    </div>
  );
};

export default Home;
