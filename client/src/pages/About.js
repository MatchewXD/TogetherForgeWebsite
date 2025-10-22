import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-hero-title">Building Games Together for Everyone</h1>
      <p className="about-hero-subtext">
        Discover the mission, vision, and values driving Together Forge forward.
      </p>

      <section className="about-section">
        <h2>Mission Statement</h2>
        <p>
          Together Forge organizes and supports the development of games created
          collaboratively by gamers, streamers, and massive online communities.
          We empower creativity, foster teamwork, and prioritize inclusivity to
          build games that unite people, celebrate collaboration, and deliver
          meaningful, fun experiences free from corporate influences.
        </p>
      </section>

      <section className="about-section">
        <h2>Vision Statement</h2>
        <p>
          To redefine gaming as a global force for unity, creativity, and
          collaboration. Together Forge envisions a future where players and
          creators work together to craft extraordinary games that connect
          people across the world. By embracing community-driven innovation and
          remaining free from corporate agendas, we aim to create a thriving
          ecosystem of games that inspire, engage, and bring people closer
          together.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We build games for one reason: to make great games that bring people
          together. Whether you’re a gamer, a creator, or someone with a great
          idea, Together Forge is your platform to collaborate, contribute, and
          create.
        </p>
        <p>
          Every game we make is shaped by the community, for the community, with
          no hidden agendas or corporate strings attached. From the
          brainstorming process to the final product, your voice matters, and
          the result is something we can all be proud of—games made for the love
          of gaming.
        </p>
      </section>

      <section className="about-section">
        <h2>Why We’re Different</h2>
        <p>
          At Together Forge, we believe games should be made for players—not
          profit. Unlike modern AAA studios that prioritize monetization over
          fun, we’re committed to creating games that are enjoyable, meaningful,
          and free from the endless grind of corporate-driven practices.
        </p>
        <p>
          We don’t do loot boxes. We don’t do pay-to-win. We don’t make you feel
          like your wallet is a requirement to enjoy the game. As a non-profit,
          every dollar we earn goes right back into the community, ensuring that
          the games we create reflect your passion, not corporate agendas.
        </p>
      </section>

      <section className="about-section">
        <h2>Founder's Note</h2>
        <p>
          At Together Forge, our goal is simple: to create games that bring
          people together and reflect the passions of the communities behind
          them. We're excited to have you join us on this journey to reshape
          gaming for the better.
        </p>
      </section>

      <section className="about-call-to-action">
        <h2>Get Involved</h2>
        <div className="about-buttons">
          <Link to="/ideaform" className="about-button">Share Your Ideas</Link>
          <Link to="/community" className="about-button">Join the Community</Link>
        </div>
      </section>
    </div>
  );
};

export default About;