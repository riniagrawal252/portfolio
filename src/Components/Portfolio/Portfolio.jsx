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
<<<<<<< HEAD
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
=======
    <>
    <div className="portfolio">
     
      <div className="section">
      <section className="paintable" id="home">
      <div className="text">
        {/* Home Section */}
        
          <div className="text-container">
            <h1 className="text-effect">
              Hey! It's <span className="highlight">Rini</span>. Welcome to my portfolio!! I am here to showcase my skills and projects. Please feel free to explore and reach out if you have any questions or opportunities.
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
>>>>>>> d2872ed9148da927a9dc44f718ce503e2ee20e8c
  );
};

export default Portfolio;
