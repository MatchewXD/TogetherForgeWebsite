import React from "react";
import HeroSection from "../components/herosection/HeroSection.js";
import WhatsNew from "../components/whatsnew/WhatsNew.js";
import PopularIdeas from "../components/popularideas/PopularIdeas.js";
import CommunityHighlights from "../components/communityhighlights/CommunityHighlights.js";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-container">
      <HeroSection className="home-section" />
      <PopularIdeas className="home-section popular-ideas-section" />
      <WhatsNew className="home-section" />
      <CommunityHighlights className="home-section" />
    </main>
  );
}

export default Home;