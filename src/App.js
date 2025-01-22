import React from 'react';

function App() {
  return (
    <div>
      {/* Header */}
      <header style={{ background: '#333', color: '#fff', padding: '10px 20px' }}>
        <h1>Twitchy Games</h1>
        <nav>
          <a href="#home" style={{ color: '#fff', margin: '0 10px' }}>Home</a>
          <a href="#game-ideas" style={{ color: '#fff', margin: '0 10px' }}>Game Ideas</a>
          <a href="#about-us" style={{ color: '#fff', margin: '0 10px' }}>About Us</a>
          <a href="#contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</a>
        </nav>
      </header>

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

      {/* Footer */}
      <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
        <p>© 2025 Twitchy Games. All Rights Reserved.</p>
        <nav>
          <a href="#privacy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
          <a href="#terms" style={{ color: '#fff', margin: '0 10px' }}>Terms of Use</a>
          <a href="#contact" style={{ color: '#fff', margin: '0 10px' }}>Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
