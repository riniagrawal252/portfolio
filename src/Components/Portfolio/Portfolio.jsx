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
         <AnimatedText/>
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
        <AnimatedText/>
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
          <AnimatedText/>
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
                <span className="skill-label">Programming:</span> Javascript, Java, HTML, CSS
              </li>
              <li>
                <span className="skill-label">Frameworks:</span> Tailwind CSS, React Js, Spring boot
              </li>
              <li>
                <span className="skill-label">Databases:</span> Sql
              </li>
            </ul>
          </div>
          
        </section>
        <AnimatedText/>
      </div>
      </div>

      {/* Experience Section */}
      <div className="section">

      <div className="experience-section">
        <section className="paintable" id="experience">
          <div className="experiences-container">
            <h2 className="section-title">Experience</h2>
            <p className="experience-text">
             Internship At Scope Global Skills University.
            </p>
          </div>
         
        </section>
         <AnimatedText/>
      </div>
</div>
      {/* Extras Section */}
      <div className="section">

      <div className="extras-section">
        <section className="paintable" id="extras">
          <div className="extras-container">
            <h2 className="section-title">Extras</h2>
            <ul className="extras-list">
              <li><strong>Certifications:</strong> Java Full Stack Development at Cybrom Technology</li>
              <li><strong>Open Source Contributions:</strong> Played Cricket and earn Rs 5000 At cybrom technology</li>
              <li><strong>Hobbies:</strong> Reading books, making blogs, making posters using canvas</li>
            </ul>
          </div>
          
        </section>
         <AnimatedText/>
      </div>
      
      </div>
      
    
      

     

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
              <li>Email: riniagrawal678@gmail.com</li>
              <li>
                LinkedIn:{" "}
                <a href="www.linkedin.com/in/rini-agrawal-076619287" target="_blank" rel="noopener noreferrer">
                  Placeholder LinkedIn Profile
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/riniagrawal252/" target="_blank" rel="noopener noreferrer">
                  Placeholder GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </section>
         <AnimatedText/>
      </div>
      </div>
      </div>
    </>
  );
};

export default Portfolio;
