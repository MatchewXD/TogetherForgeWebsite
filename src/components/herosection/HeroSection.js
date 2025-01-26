import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-headline">
        By the Community, For the Community
      </h1>

      <p className="hero-mission">
        Twitchy Games is dedicated to creating games that bring people together through collaboration creativity, and community-driven ideas.
      </p>

      <div>
        <Link to="/about" className="hero-button learn more">
          Learn More
        </Link>
        <button className="hero-button submit-idea">
          Submit Your Idea
        </button>
      </div>
    </div>
  );
};

export default HeroSection;