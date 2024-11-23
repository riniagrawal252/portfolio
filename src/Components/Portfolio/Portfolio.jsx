import React from "react";
import "./Portfolio.css";
import ProjectCard from "../Dynamic/Projectcard";
import Spotify_Clone from '../assets/Spotify-Clone.png'
import Ecommerce from '../assets/Ecommerce.png'
import AnimatedText from '../Animated/Animated'
const Portfolio = () => {
  
  return (
    <>
    <div className="portfolio">
     
      <div className="section">
      <section className="paintable" id="home">
      <div className="text">
        {/* Home Section */}
        
          <div className="text-container">
            <h1 className="text-effect">
              Hey! It's <span className="highlight">Rini</span>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis.
            </h1>
          </div>
        
      </div>
      </section>
      </div>
      
      {/* About Me Section */}
      <div className="section">

      <div className="about-me-section">
        <section className="paintable" id="background">
          <div className="about-container">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra nisi at semper malesuada. Proin vehicula libero non purus fringilla, id vulputate purus luctus. Nam nec justo nisi. Suspendisse potenti.
            </p>
          </div>
        </section>
      </div>
      </div>

      {/* Projects Section */}
      <div className="section">

      <div className="projects-section">
        <section className="paintable" id="projects">
          <div className="project-container">
            <h2 className="section-title">Projects</h2>
            <div className="project-cards">
              <ProjectCard
                title="Spotify Clone"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada facilisis arcu."
                link="https://github.com/yourusername/spotify-clone"
                image={Spotify_Clone}
              />
              <ProjectCard
                title="Ecommerce Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt metus et venenatis."
                link="https://yourusername.netlify.app"
                image={Ecommerce}
              />
            </div>
          </div>
        </section>
      </div>
      </div>

      {/* Skills Section */}
      <div className="section">

      <div className="skills-section">
        <section className="paintable" id="coreinfo">
          <div className="skills-container">
            <h2 className="section-title">Skills</h2>
            <ul className="skills-list">
              <li>
                <span className="skill-label">Programming:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <span className="skill-label">Frameworks:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <span className="skill-label">Databases:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
        </section>
      </div>
      </div>

      {/* Experience Section */}
      <div className="section">

      <div className="experience-section">
        <section className="paintable" id="experience">
          <div className="experiences-container">
            <h2 className="section-title">Experience</h2>
            <p className="experience-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices lectus non justo vehicula, in aliquam eros posuere. Etiam sed ligula eu mi vestibulum dapibus.
            </p>
          </div>
        </section>
      </div>
</div>
      {/* Extras Section */}
      <div className="section">

      <div className="extras-section">
        <section className="paintable" id="extras">
          <div className="extras-container">
            <h2 className="section-title">Extras</h2>
            <ul className="extras-list">
              <li><strong>Certifications:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li><strong>Open Source Contributions:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li><strong>Hobbies:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </section>
        
      </div>
      
      </div>
      <AnimatedText/>
    
      

     

      {/* Contact Section */}
      <div className="section">

      <div className="contact-section">
        <section className="paintable" id="contact">
          <div className="contact-container">
            <h2 className="section-title">Contact</h2>
            <p className="contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </p>
            <ul className="contact-list">
              <li>Email: lorem@example.com</li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer">
                  Placeholder LinkedIn Profile
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer">
                  Placeholder GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      </div>
      </div>
    </>
  );
};

export default Portfolio;
