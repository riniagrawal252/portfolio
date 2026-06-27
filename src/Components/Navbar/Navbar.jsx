import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import LottieAnimation from "../lottie/Lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const parallaxRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        parallaxRef.current &&
        !parallaxRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close dropdown on Esc
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const parallax = parallaxRef.current;
    if (!parallax) return;

    const layers = parallax.querySelectorAll(".layer");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer, index) => {
        const speed = index + 1;
        layer.style.transform = `translateY(${scrollY / speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav
      ref={parallaxRef}
      className="navbar"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="lottie layer">
        <LottieAnimation />
        <div className="spacer" aria-hidden="true" />

        {/* Circle with Dropdown */}
        <div className="circle" role="region" aria-label="Language selection">
          <span>En</span>
          <button
            onClick={toggleDropdown}
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-controls="language-dropdown"
            type="button"
          >
            <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
          </button>

          {/* Dropdown Content */}
          <div
            id="language-dropdown"
            className={`dropdown-content ${isOpen ? "open" : ""}`}
            role="menu"
            aria-hidden={!isOpen}
          >
            <button role="menuitem" tabIndex={isOpen ? 0 : -1}>
              Blog 1
            </button>
            <button role="menuitem" tabIndex={isOpen ? 0 : -1}>
              Blog 2
            </button>
            <button role="menuitem" tabIndex={isOpen ? 0 : -1}>
              Blog 3
            </button>
          </div>
        </div>
         

        {/* Rotated Labels */}
      
        <div className="circle-text-layer">
          My Portfolio is Here!!!
        </div>
    
        <div className="circle-text-layer2">
      Rini Agrawal
        </div>
        
      </div>
     
    </nav>
    
  );
};

export default Navbar;
