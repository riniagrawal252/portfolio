import React, { useState } from "react";
import "./ParallaxSection.css";

const Mainnavbar = () => {
  const [activeCircle, setActiveCircle] = useState(""); // Track active circle
  const [isHovered, setIsHovered] = useState(false); // Track if navbar container is hovered

  // Update isHovered on mouse enter/leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle smooth scroll on circle hover (move to section)
  const handleCircleHover = (sectionId) => {
    setActiveCircle(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "background", label: "Background" },
    { id: "projects", label: "Projects" },
    { id: "coreinfo", label: "Core Info" },
    { id: "extras", label: "Extras" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="navbar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {navItems.map(({ id, label }) => (
        <div key={id} className="nav-section">
          <div
            className={`nav-link ${isHovered ? "visible" : ""}`}
            onClick={() => handleCircleHover(id)} // Allow manual scroll on click
          >
            {label}
          </div>
          <div
            className={`nav-circle ${activeCircle === id ? "highlighted" : ""}`}
            onMouseEnter={() => handleCircleHover(id)} // Scroll on circle hover
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Mainnavbar;
