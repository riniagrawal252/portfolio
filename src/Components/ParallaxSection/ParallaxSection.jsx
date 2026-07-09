import React, { useState, useEffect } from "react";
import "./ParallaxSection.css";

const Mainnavbar = ({
  navItems = [
    { id: "home", label: "Home" },
    { id: "background", label: "Background" },
    { id: "projects", label: "Projects" },
    { id: "coreinfo", label: "Core Info" },
    
    { id: "extras", label: "Extras" },
    { id: "contact", label: "Contact" },
  ],
  initialActive = "",
}) => {
  const [activeCircle, setActiveCircle] = useState(initialActive);
  const [isHovered, setIsHovered] = useState(false);

  // Optional: Update active circle on scrolling manually (sync navbar with scroll position)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = initialActive;

      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }
      setActiveCircle(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, initialActive]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveCircle(sectionId);
    }
  };

  return (
    <nav
      className="navbar2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Main navigation"
    >
      {navItems.map(({ id, label }) => (
        <div key={id} className="nav-section">
          <button
            type="button"
            className={`nav-link ${isHovered ? "visible" : ""}`}
            onClick={() => scrollToSection(id)}
            aria-current={activeCircle === id ? "page" : undefined}
            aria-label={`Navigate to ${label}`}
          >
            {label}
          </button>
          <button
            type="button"
            className={`nav-circle ${activeCircle === id ? "highlighted" : ""}`}
            onMouseEnter={() => scrollToSection(id)}
            aria-label={`Scroll to ${label} section`}
          />
        </div>
      ))}
    </nav>
  );
};

export default Mainnavbar;
