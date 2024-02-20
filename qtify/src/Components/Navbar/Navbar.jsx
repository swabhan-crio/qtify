import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../FeedbackButton/FeedbackButton";
import Logo from "../Logo/Logo";

const Navbar = ({ onFeedbackButtonClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="searchbar-items">
        <Searchbar />
      </div>
      <Feedback onFeedbackButtonClick={onFeedbackButtonClick} />
    </div>
  );
};

export default Navbar;