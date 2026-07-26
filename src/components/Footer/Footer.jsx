import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
];

const servicesLinks = [
  { label: 'Website Development', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'SEO Optimization', href: '#services' },
  { label: 'AI Automation', href: '#services' }
];

const contactInfo = [
  { label: 'hello@northpeakdigital.com', href: 'mailto:hello@northpeakdigital.com' },
  { label: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'Gurgaon, India', href: null }
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com',
    label: 'Twitter/X'
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com',
    label: 'Instagram'
  },
  {
    icon: FaGithub,
    href: 'https://github.com',
    label: 'GitHub'
  }
];

export default function Footer() {
  return (
    <footer className="footer-section" aria-label="NorthPeak Digital Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* COLUMN 1: BRAND */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo" aria-label="NorthPeak Digital home page">
              NorthPeak Digital
            </a>
            <p className="brand-description">
              We create high-performance digital experiences that help businesses grow.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={`Visit our ${social.label} page`}
                  >
                    <IconComponent aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="footer-links-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <nav aria-label="Footer services navigation">
              <ul className="footer-links-list">
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links-list contact-list">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  {info.href ? (
                    <a href={info.href} className="footer-link contact-link">
                      {info.label}
                    </a>
                  ) : (
                    <span className="contact-text">{info.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 NorthPeak Digital. All rights reserved.
          </p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-training-link"
          >
            Built for Digital Heroes Training Task
          </a>
        </div>
      </div>
    </footer>
  );
}
