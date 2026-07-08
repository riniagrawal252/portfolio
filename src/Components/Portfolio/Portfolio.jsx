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
    link: " https://riniagrawal252.github.io/Spotifyclone/",
  },
  {
    title: "Flora E-Commerce",
    description:
      "A graphic designer e-commerce application developed with React, Node.js and MongoDB featuring authentication, shopping cart and product management.",
    image: Ecommerce,
    link: "https://github.com/riniagrawal252/flora",
    
  },
  {
    title: "My designs",
    description:
      "A collection of my graphic design projects created using Figma and Canva, showcasing my skills in creating visually appealing designs for various purposes.",
    image: Ecommerce,
    link: "https://github.com/riniagrawal252/My-design",
  }
];

const skills = {
  languages: [ "JavaScript", "HTML", "CSS"],
  frameworks: ["React","Canvas","Figma"],
  database: ["MySQL"],
  tools: ["Git", "GitHub", "VS Code"],
};

const Portfolio = () => {
  return (
    <main className="portfolio">

      {/* Home */}

      <section className="section paintable" id="home">

  <div className="objective-box">

    <h2 className="section-title">Career Objective</h2>

    <p>
      To begin my career as a Graphic Designer and Frontend Developer in a
      growth-oriented organization where I can apply my creativity,
      technical knowledge, and problem-solving skills. I aim to contribute
      to innovative projects while continuously learning modern design and
      web technologies to grow as a professional.
    </p>

  </div>

</section>

      {/* About */}
      

      <section className="section paintable" id="background">
        
      
<div className="about-content">
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

      {/* Skills */}

<section className="section paintable" id="skills">

  <h2 className="section-title">Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <h3>💻 Languages</h3>
      <p>{skills.languages.join(", ")}</p>
    </div>

    <div className="skill-card">
      <h3>⚛️ Frameworks</h3>
      <p>{skills.frameworks.join(", ")}</p>
    </div>

    <div className="skill-card">
      <h3>🗄️ Database</h3>
      <p>{skills.database.join(", ")}</p>
    </div>

    <div className="skill-card">
      <h3>🛠️ Tools</h3>
      <p>{skills.tools.join(", ")}</p>
    </div>

  </div>

</section>
      

      {/* Experience */}

      

      
          

      
     <section className="section paintable" id="coreinfo">

<div className="content-box">

<h2 className="section-title">
Core Information
</h2>

<ul>

<li><strong>10th:</strong> CBSE Board (2017) - 6.4 CGPA</li>

<li><strong>12th:</strong> MP Open Board (2019) - 4.2 CGPA</li>

<li><strong>B.Tech:</strong> Computer Science & Engineering</li>

<li><strong>University:</strong> RGPV</li>

<li><strong>Graduation:</strong> 2024</li>

<li><strong>CGPA:</strong> 8.14</li>

</ul>

</div>

</section>
      {/* Contact */}
        <section className="section paintable" id="extras">

  <div className="extras-box">

    <h2 className="section-title">Extras</h2>

    <h3>Blogs</h3>

    <p>
      I enjoy writing about React, Graphic Design, UI/UX, and modern web
      development. I share my learning experience, project ideas, and tips
      that help beginners improve their skills.
    </p>

    <h3>Achievements</h3>

    <ul>
      <li>🏆 TCS iON Certification</li>
      <li>🎨 Graphic Design Portfolio</li>
      <li>💻 React Portfolio Website</li>
      <li>🚀 Completed Multiple Frontend Projects</li>
    </ul>

  </div>

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