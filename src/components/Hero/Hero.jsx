import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="NorthPeak Digital Introduction">
      <div className="hero-background-effects">
        <div className="hero-glow-spot-1" aria-hidden="true"></div>
        <div className="hero-glow-spot-2" aria-hidden="true"></div>
      </div>

      <div className="container hero-layout-container">
        {/* Left Side: Content Block */}
        <div className="hero-content">
          <h1 className="hero-title">
            We Build Digital Experiences <span className="gradient-text-accent">That Grow Businesses</span>
          </h1>
          <p className="hero-description">
            We help startups and businesses build high-performance websites, powerful digital strategies, and experiences that turn visitors into customers.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary hero-btn-primary" aria-label="Start your project with NorthPeak Digital">
              Start Your Project
            </a>
            <a href="#results" className="btn btn-secondary hero-btn-secondary" aria-label="View our case studies and results">
              View Our Work
            </a>
          </div>

          {/* Trust Element */}
          <div className="hero-trust">
            <p className="hero-trust-title">Trusted by ambitious brands worldwide</p>
            <div className="hero-trust-logos">
              <span className="trust-logo">NovaTech</span>
              <span className="trust-logo">Vertex</span>
              <span className="trust-logo">Lumina</span>
              <span className="trust-logo">Orbit</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive CSS Agency Mockup Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="browser-mockup">
            {/* Browser Header Bar */}
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot red"></span>
                <span className="browser-dot yellow"></span>
                <span className="browser-dot green"></span>
              </div>
              <div className="browser-address">northpeak.digital</div>
            </div>

            {/* Dashboard Mockup Content */}
            <div className="browser-content">
              <div className="dashboard-layout">
                <div className="dashboard-metric">
                  <span className="metric-label">Monthly Growth</span>
                  <div className="metric-value-row">
                    <span className="metric-value">+48.2%</span>
                    <span className="metric-badge">Live</span>
                  </div>
                </div>

                {/* Growth SVG Graph */}
                <div className="chart-container">
                  <svg viewBox="0 0 300 120" className="hero-chart" width="100%" height="100%">
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.35"/>
                        <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                    {/* Background Grid Line */}
                    <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4" />
                    <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    {/* Gradient fill area */}
                    <path
                      d="M0,100 C30,95 60,70 90,65 C120,60 150,85 180,45 C210,5 240,25 270,10 C285,3 295,1 300,0 L300,120 L0,120 Z"
                      fill="url(#chart-grad)"
                    />
                    {/* Accent chart line */}
                    <path
                      d="M0,100 C30,95 60,70 90,65 C120,60 150,85 180,45 C210,5 240,25 270,10 C285,3 295,1 300,0"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 1: Conversions */}
          <div className="floating-card float-card-1">
            <div className="float-card-header">
              <span className="float-card-icon">⚡</span>
              <span className="float-card-title">Conversion Rate</span>
            </div>
            <div className="float-card-body">
              <span className="float-card-big-val">3.85%</span>
              <span className="float-card-change positive">+12.4%</span>
            </div>
          </div>

          {/* Floating Card 2: ROAS */}
          <div className="floating-card float-card-2">
            <div className="float-card-header">
              <span className="float-card-icon">📈</span>
              <span className="float-card-title">ROAS Boost</span>
            </div>
            <div className="float-card-body">
              <span className="float-card-big-val">4.2x</span>
              <span className="float-card-change positive">Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
