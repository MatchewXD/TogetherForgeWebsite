import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to Twitchy Games!</h1>
      <p>This is the Homepage of our amazing community-driven game development platform.</p>
      {/* Hero Section */}
      <section id="hero" style={{ textAlign: 'center', padding: '50px 20px', background: '#f4f4f4' }}>
        <h2>By the Community, For the Community!</h2>
        <p>Join us in redefining gaming as a global force for unity, creativity, and collaboration.</p>
        <button style={{ padding: '10px 20px', margin: '10px' }}>Learn More</button>
        <button style={{ padding: '10px 20px', margin: '10px' }}>Share Your Game Idea</button>
      </section>

      {/* Mission Statement */}
      <section id="mission" style={{ padding: '20px' }}>
        <h3>Our Mission</h3>
        <p>
          By the community, for the community! Twitchy Games organizes and supports the development of games created
          collaboratively by gamers, streamers, and massive online communities. We empower creativity, foster teamwork,
          and prioritize inclusivity to build games that unite people, celebrate collaboration, and deliver meaningful,
          fun experiences free from corporate influence.
        </p>
      </section>

      {/* Vision Statement */}
      <section id="vision" style={{ background: '#f4f4f4', padding: '20px' }}>
        <h3>Our Vision</h3>
        <p>
          To redefine gaming as a global force for unity, creativity, and collaboration. Twitchy Games envisions a future
          where players and creators work together to craft extraordinary games that connect people across the world.
          By embracing community-driven innovation and remaining free from corporate agendas, we aim to create a thriving
          ecosystem of games that inspire, engage, and bring people closer together.
        </p>
      </section>

      {/* Community Engagement */}
      <section id="community" style={{ padding: '20px' }}>
        <h3>Get Involved</h3>
        <p>
          Share your game ideas, participate in discussions, or volunteer to bring amazing concepts to life.
        </p>
        <button style={{ padding: '10px 20px' }}>Join the Community</button>
      </section>
    </div>
  );
}

export default Home;