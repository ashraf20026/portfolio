import React, { useState } from "react";
import useNavbarEffects from "../hooks/useNavbarEffects";

export default function Navbar({ toggleTheme }) {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const { navRef, activeSection } = useNavbarEffects(sections);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg fixed-top px-4 py-3 ${isMenuOpen ? "mobile-open" : ""}`}
      aria-label="Main navigation"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="#home" className="navbar-brand glow-text" onClick={closeMenu}>
          Ashraf Ahmed
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Desktop & Mobile Menu */}
        <div className={`nav-links-container ${isMenuOpen ? "show" : ""}`}>
          <div className="nav-links d-flex gap-4 align-items-center flex-column flex-lg-row">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
                aria-current={activeSection === section ? "page" : undefined}
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            <button
              className="btn theme-btn"
              onClick={() => { toggleTheme(); closeMenu(); }}
              aria-label="Toggle theme"
            >
              <i className="fa-solid fa-circle-half-stroke"></i>
            </button>

            {/* Mobile Social Icons */}
            <div className="d-lg-none mt-3 d-flex gap-4 justify-content-center align-items-center w-100">
              <a href="https://github.com/Ashraf20026" target="_blank" rel="noopener noreferrer" className="nav-link p-0 w-auto border-0">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/ashraf-ahmed-b8b58b222" target="_blank" rel="noopener noreferrer" className="nav-link p-0 w-auto border-0">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
              <a href="mailto:ashrafahmedfarid@gmail.com" className="nav-link p-0 w-auto border-0">
                <i className="fa-solid fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
