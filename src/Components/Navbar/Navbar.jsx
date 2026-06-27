import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import LottieAnimation from "../lottie/Lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    content:"My code, my life, my time, my work!!"
    
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "Hello, This is my work!!",
  }
  
];

const Navbar = () => {
  const parallaxRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Parallax Effect
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

        {/* Blog Dropdown */}
        <div className="circle" role="region" aria-label="Blog Menu">
          <span>Blogs</span>

          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
          </button>

          {isOpen && (
            <div
              id="language-dropdown"
              className="dropdown-content open"
              role="menu"
            >
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                  <h4>{blog.title}</h4>
                  <p>{blog.content}</p>
                </div>
              ))}
            </div>
          )}
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