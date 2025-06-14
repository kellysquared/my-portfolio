import React from "react";
import './index.css';

const projects = [
  {
    title: "Vaccine Sentiment Classifier",
    description: "Built a machine learning pipeline to detect sarcasm and sentiment in vaccine-related tweets using TF-IDF and logistic regression.",
    tags: ["NLP", "Python", "Scikit-learn"]
  },
  {
    title: "UX Redesign: Meal Planning App",
    description: "Conducted user interviews, created personas, and redesigned the interface of a meal planning app to improve user retention.",
    tags: ["UX Research", "Figma", "User Testing"]
  }
];

function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "#fff",
      padding: "1rem",
      borderBottom: "1px solid #eee",
      display: "flex",
      gap: "1rem",
      fontWeight: "500",
      zIndex: 10
    }}>
      <a href="#about" style={{ textDecoration: "none", color: "#333" }}>About</a>
      <a href="#projects" style={{ textDecoration: "none", color: "#333" }}>Projects</a>
    </nav>
  );
}

export default function Portfolio() {
  return (
    <div>
      <Navbar />

      <header style={{ padding: "2rem 0" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Kelly Lee</h1>
        <p>Data Science & UX Design</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a statistics and data science student with a passion for designing user-centric systems.
          I’ve worked on projects in predictive modeling, public health, and UX research—bridging data with human experience.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
