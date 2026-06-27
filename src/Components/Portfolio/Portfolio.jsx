import React from "react";
import "./Portfolio.css";
import ProjectCard from "../Dynamic/Projectcard";
import Spotify_Clone from "../assets/Spotify-Clone.png";
import Ecommerce from "../assets/Ecommerce.png";
import AnimatedText from "../Animated/Animated";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "HTML, CSS, and JavaScript project that replicates Spotify's web interface, allowing users to browse and play music.",
    link: "https://github.com/riniagrawal252/spotify-clone",
    image: Spotify_Clone,
  },
  {
    title: "Ecommerce Website",
    description:
      "A full-stack e-commerce app built with React and Node.js, featuring authentication, product listings, and a shopping cart.",
    link: "https://github.com/riniagrawal252/flora",
    image: Ecommerce,
  },
];

const portfolioData = [
  {
    id: "home",
    content: (
      <div className="text-container">
        <h1 className="text-effect">
          Hey! It&apos;s <span className="highlight">Rini</span>. Welcome to my portfolio!!
        </h1>
      </div>
    ),
  },
  {
    id: "background",
    title: "About Me",
    content: (
      <div className="about-container">
        <p className="about-text">
          My name is Rini Agrawal. I completed my B.Tech in Computer Science and Engineering from SGSU. 
          I’m passionate about web development and have experience with React, Node.js, and JavaScript. 
          I enjoy learning new technologies and improving my skills.
        </p>
      </div>
    ),
  },
  {
    id: "projects",
    title: "Projects",
    content: (
      <div className="project-cards">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    ),
  },
  {
    id: "coreinfo",
    title: "Skills",
    content: (
      <ul className="skills-list">
        <li>
          <span className="skill-label">Programming:</span> Java, JavaScript, HTML, CSS
        </li>
        <li>
          <span className="skill-label">Frameworks:</span> Tailwind CSS, React, Node.js, SpringBoot
        </li>
        <li>
          <span className="skill-label">Databases:</span> MySQL
        </li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: <p className="experience-text">Pursuing Internship at SGSU.</p>,
  },
  {
    id: "extras",
    title: "Extras",
    content: (
      <>
        <ul className="extras-list">
          <li>
            <strong>Certifications:</strong> Java Full Stack Web Development at Cybrom Technology
          </li>
          <li>
            <strong>Open Source Contributions:</strong> Hackathon in SGSU
          </li>
          <li>
            <strong>Hobbies:</strong> Reading books, making posters using canvas
          </li>
        </ul>
        <span>
          <AnimatedText text="JavaScript CSS HTML TailwindCSS ReactJS Java NodeJS GitHub VisualStudioCode" />
        </span>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <address className="contact-section">
        <p className="contact-text">You can reach me at:</p>
        <ul className="contact-list">
          <li>
            Email:{" "}
            <a href="mailto:riniagrawal678@gmail.com">riniagrawal678@gmail.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rini-agrawal-076619287"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/riniagrawal252"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </address>
    ),
  },
];

const Portfolio = () => {
  return (
    <main className="portfolio">
      {portfolioData.map(({ id, title, content }) => (
        <section
          key={id}
          className="paintable section"
          id={id}
          aria-label={title || id}
        >
          {title && <h2 className="section-title">{title}</h2>}
          {content}
        </section>
      ))}
    </main>
  );
};

export default Portfolio;
