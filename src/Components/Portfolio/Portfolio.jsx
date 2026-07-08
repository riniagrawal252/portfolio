import React from "react";
import "./Portfolio.css";
import ProjectCard from "../Dynamic/Projectcard";
import AnimatedText from "../Animated/Animated";

import SpotifyClone from "../assets/Spotify-Clone.png";
import Ecommerce from "../assets/Ecommerce.png";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "A responsive Spotify clone built using HTML, CSS and JavaScript. Users can browse playlists and control music playback through an interactive interface.",
    image: SpotifyClone,
    link: "https://github.com/riniagrawal252/Spotifyclone",
  },
  {
    title: "Flora E-Commerce",
    description:
      "A full-stack e-commerce application developed with React, Node.js and MongoDB featuring authentication, shopping cart and product management.",
    image: Ecommerce,
    link: "https://github.com/riniagrawal252/flora",
  },
];

const skills = {
  languages: ["Java", "JavaScript", "HTML", "CSS"],
  frameworks: ["React", "Node.js", "Spring Boot", "Tailwind CSS"],
  database: ["MySQL"],
  tools: ["Git", "GitHub", "VS Code"],
};

const Portfolio = () => {
  return (
    <main className="portfolio">

      {/* Home */}

      <section className="section paintable" id="home">
        <div className="hero">
<center>
          <h1>
            Hi, I'm <span className="highlight">Rini Agrawal</span>
          </h1>

          <h3>Graphic Designer</h3>
</center>
          <p>
            Passionate about building modern web applications using React,
            Figma graphics designing. I enjoy solving coding problems and learning
            new technologies.
          </p>

          <AnimatedText text="React • Graphic Design • Figma • Node.js • MySQL • JavaScript • GitHub" />


        </div>
      </section>

      {/* About */}
      

      <section className="section paintable" id="background">
        
      
<div>
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I recently completed my B.Tech in Computer Science and Engineering
          from RGPV. I enjoy designing responsive web
          applications and continuously improving my programming skills through
          projects, coding challenges and internships by using React, Node.js, MySQL and other modern technologies. I am passionate about creating user-friendly interfaces and delivering high-quality graphics.
        </p>
     </div>   
        

      </section>

      {/* Projects */}

      <section className="section paintable" id="projects">

        <h2 className="section-title">Projects</h2>

        <div className="project-cards">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}

        </div>

      </section>

      {/* Skills */}

      <section className="section paintable" id="skills">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>
            <p>{skills.languages.join(", ")}</p>
          </div>

          <div className="skill-card">
            <h3>Frameworks</h3>
            <p>{skills.frameworks.join(", ")}</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>{skills.database.join(", ")}</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>{skills.tools.join(", ")}</p>
          </div>

        </div>

      </section>

      {/* Experience */}

      

      
          

      
      <section className="section paintable" id="coreinfo">
    
       <h2 className="skills-list">Core Information </h2> <span className="skill-label">10th Class:</span>
       CBSE Board, 2017, 6.4 CGPA
       <li> <span className="skill-label">12th Class:</span> </li><li>MP open state Board, 2019 4.2 CGPA </li>
      <li> <span className="skill-label">Graduation:</span> B.Tech ,CSE RGPV</li>
      <li> <span className="skill-label">Graduation Year:</span> 2024</li>
      <li> <span className="skill-label">Graduation CGPA:</span> 8.14 CGPA</li>
        
</section>
      {/* Contact */}
         <section className="section paintable" id="extras">
        <h2 className="section-title">Extras</h2>
        <h6>Blogs:</h6>
        <p>
          My name is rini agrawal and I am a passionate web developer and designer. I have been working on various web development projects and have gained experience in front-end and back-end technologies. In my blog, I share my knowledge, experiences, and insights on web development, design, and related topics. I hope you find my blog posts informative and helpful. Thank you for visiting!
        </p>
        <h2 className="section-title">Achievements</h2>

        

          <li>
            Internship in Cybrom Technology
          </li>

          <li>
            Participated in University Hackathons
          </li>

          <li>
            Figma Graphics Designing
          </li>
          <li>
            Poster Designing using Canva
          </li>

         </section>

<center>
      <section className="section paintable" id="contact">

        <h1 className="contact-text">Contact Me</h1>

        <div className="contact-list">

          <p>

            <strong>Email:</strong>{" "}

            <a href="mailto:riniagrawal678@gmail.com">
              riniagrawal678@gmail.com
            </a>

          </p>

          <p>

            <strong>LinkedIn:</strong>{" "}

            <a
              href="https://www.linkedin.com/in/rini-agrawal-076619287"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rini-agrawal-076619287
            </a>

          </p>

          <p>

            <strong>GitHub:</strong>{" "}

            <a
              href="https://github.com/riniagrawal252"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/riniagrawal252
            </a>

          </p>

        </div>
                 <AnimatedText text="React • Graphic Design • Figma • Node.js • MySQL • JavaScript • GitHub" />




      </section>
      </center>

    </main>
  );
};

export default Portfolio;