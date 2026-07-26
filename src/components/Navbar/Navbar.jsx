import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run scroll check on mount in case page starts scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo Link */}
        <a href="#home" className="navbar-logo" onClick={closeMenu} aria-label="NorthPeak Digital Home">
          NorthPeak Digital
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Primary Desktop Navigation">
          <ul className="navbar-links">
            <li>
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#services" className="navbar-link">Services</a>
            </li>
            <li>
              <a href="#results" className="navbar-link">Results</a>
            </li>
            <li>
              <a href="#pricing" className="navbar-link">Pricing</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary navbar-cta">
            Book a Free Call
          </a>
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="navbar-mobile-nav" aria-label="Primary Mobile Navigation">
          <ul className="navbar-mobile-links">
            <li>
              <a href="#home" className="navbar-mobile-link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="navbar-mobile-link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#results" className="navbar-mobile-link" onClick={closeMenu}>
                Results
              </a>
            </li>
            <li>
              <a href="#pricing" className="navbar-mobile-link" onClick={closeMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-mobile-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li className="navbar-mobile-cta-wrapper">
              <a href="#contact" className="btn btn-primary navbar-cta navbar-mobile-cta" onClick={closeMenu}>
                Book a Free Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
