import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_Section from "../../components/Hero_Section/Hero_Section";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero_Section />
      <Footer />
    </div>
  );
};

export default Home;
