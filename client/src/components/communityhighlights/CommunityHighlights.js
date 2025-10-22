import React from "react";
import "./CommunityHighlights.css";

const CommunityHighlights = () => {
  return (
    <div className="community-highlights-container">
      <h2 className="section-title">Community Highlights!</h2>
      <div className="highlights-grid">
        {/* Highlights Card */}
        <div className="highlight-card">
          <h3 className="highlight-title">Jane Doe</h3>
          <p className="highlight-description">
            "I submitted an idea for a cooperative puzzle game, and it became one of the top-voted suggestions! It's amazing to be part of this community!"
          </p>
        </div>
        <div className="highlight-card">
          <h3 className="highlight-title">John Smith</h3>
          <p className="highlight-description">
            "Together Forge helped me connect with other developers and share my passion for gaming. The community is incredible!"
          </p>
        </div>
      </div>

    </div>
  );
};

export default CommunityHighlights;