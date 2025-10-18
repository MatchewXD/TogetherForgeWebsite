import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Early Game",
    description:
      "A small-scale multiplayer game designed to test development pipelines and community engagement.",
    status: "In Development",
    img: "early-game-placeholder.jpg",
  },
  {
    title: "Mid Game",
    description:
      "A mid-sized indie game showcasing more refined mechanics and cooperative gameplay.",
    status: "Concept Phase",
    img: "mid-game-placeholder.jpg",
  },
  {
    title: "Late Game",
    description:
      "A large-scale MMO emphasizing teamwork, resource management, and community-driven goals.",
    status: "Planning Stage",
    img: "late-game-placeholder.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-hero-title">Building Games, Together</h1>
      <p className="projects-hero-subtext">
        Explore the games our community is developing and how you can contribute!
      </p>

      <section className="projects-section">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={`/images/${project.img}`} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className={`status ${project.status.replace(" ", "-").toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        ))}
      </section>

      <section className="projects-call-to-action">
        <h2>Get Involved</h2>
        <p>Join us in shaping the future of Twitchy Games.</p>
        <div className="projects-buttons">
          <a href="/ideaform" className="projects-button">Share Your Ideas</a>
          <a href="/community" className="projects-button">Join the Community</a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
