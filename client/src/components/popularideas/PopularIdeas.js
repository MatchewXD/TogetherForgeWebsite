import React from "react";
import "./PopularIdeas.css";

const PopularIdeas = () => {
  return (
    <div className="popular-ideas-container">
      <h2 className="section-title">Popular Game Ideas</h2>
      <div className="ideas-grid">
        { /* Idea Cards */}
        <div className="idea-card">
          <h3 className="idea-title">Filler Idea 1</h3>
          <p className="idea-description">
            This is a placeholder description for an awesome game idea.
          </p>
        </div>
        <div className="idea-card">
          <h3 className="idea-title">Filler Idea 2</h3>
          <p className="idea-description">
            Another placeholder description for a creative game concept.
          </p>
        </div>
        <div className="idea-card">
          <h3 className="idea-title">Filler Idea 3</h3>
          <p className="idea-description">
            A third placeholder idea for a potential hit game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularIdeas;