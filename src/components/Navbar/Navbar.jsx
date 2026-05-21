import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import icons from "../../assets/js/icons";
import images from "../../assets/js/images";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav_dark");
      } else {
        navRef.current.classList.remove("nav_dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar_left">
        <img src={icons.logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={icons.search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={icons.bell_icon} alt="bell" className="icons" />
        <div className="navbar_profile">
          <img src={images.profile_img} alt="profileIcon" className="profile" />
          <img src={icons.caret_icon} alt="caret" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
