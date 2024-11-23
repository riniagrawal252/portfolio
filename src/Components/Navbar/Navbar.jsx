import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import LottieAnimation from "../lottie/Lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const parallaxRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown Toggle
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown on click outside
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

  // Parallax Scroll Effect
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
    <nav ref={parallaxRef}>
      <div className="lottie">
        <LottieAnimation />
        <br />
        <br />
        <br />
        <div className="circle">
          <span>En</span>
          <div onClick={toggleDropdown} className="dropdown-toggle">
            <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
          </div>

          {/* Dropdown Content */}
          <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        </div>

        <div className="circle-text">
          <span>Serial Entrepreneur</span>
        </div>
        <div className="circle-text">
          <span>Rini Agrawal</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
