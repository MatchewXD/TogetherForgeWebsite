import React from "react";
import "./WhatsNew.css";

const WhatsNew = () => {
  return (
    <div className="highlights-container">
      <h2 className="section-title"> What's New</h2>
      <div className="updates-grid">
        <div className="update-card">
          <h3 className="update-title">Exciting News!</h3>
          <p className="update-date">January 25, 2025</p>
          <p className="update-description">
            We've launched the Together Forge website!
          </p>
        </div>
        <div className="update-card">
          <h3 className="update-title">Community Input Open!</h3>
          <p className="update-date">January 20, 2025</p>
          <p className="update-description">
            Submit your game ideas to help shape the future of Together Forge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;