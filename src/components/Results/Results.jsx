import React, { useState, useEffect, useRef } from 'react';
import './Results.css';

const statsData = [
  { id: 1, number: '250+', label: 'Projects Delivered' },
  { id: 2, number: '95%', label: 'Client Satisfaction' },
  { id: 3, number: '3x', label: 'Average Growth Increase' },
  { id: 4, number: '24/7', label: 'Support Availability' }
];

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: "NorthPeak Digital completely transformed our online presence. Our website became faster and generated more qualified leads.",
    name: "Sarah Mitchell",
    role: "Founder, NovaTech",
    initials: "SM",
    avatarClass: "avatar-1"
  },
  {
    id: 2,
    rating: 5,
    quote: "Their attention to design and performance was outstanding. The final product exceeded our expectations.",
    name: "David Wilson",
    role: "CEO, Vertex Labs",
    initials: "DW",
    avatarClass: "avatar-2"
  },
  {
    id: 3,
    rating: 5,
    quote: "Professional team, excellent communication, and amazing technical execution.",
    name: "Emily Carter",
    role: "Marketing Director, Lumina",
    initials: "EC",
    avatarClass: "avatar-3"
  }
];

function StatCard({ number, label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef(null);
  
  // Extract numerical value and any suffix (like +, %, x, /7)
  const numValue = parseInt(number.replace(/\D/g, ''), 10);
  const suffix = number.replace(/[\d]/g, '');

  useEffect(() => {
    let observer;
    let frame = 0;
    const totalFrames = 60; // 1s at 60fps

    const startCount = () => {
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const ease = 1 - Math.pow(2, -10 * progress); // easeOutExpo
        const current = Math.floor(ease * numValue);
        
        if (frame >= totalFrames) {
          setDisplayValue(numValue);
          clearInterval(counter);
        } else {
          setDisplayValue(current);
        }
      }, 16);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCount();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
    } else {
      setDisplayValue(numValue);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [numValue]);

  return (
    <div className="card stat-card" ref={cardRef}>
      <div className="stat-number">
        {displayValue}
        {suffix}
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function Results() {
  return (
    <section className="results-section" id="results" aria-label="Our impact and client testimonials">
      {/* Background separation and visual accents */}
      <div className="results-background-effects" aria-hidden="true">
        <div className="results-glow-1"></div>
        <div className="results-glow-2"></div>
      </div>

      <div className="container">
        {/* PART 1: RESULTS / STATISTICS */}
        <div className="stats-block">
          <div className="section-header center-align">
            <span className="section-badge">OUR IMPACT</span>
            <h2 className="section-title">Numbers That Speak For Our Work</h2>
            <p className="section-subtitle">
              We combine creativity, technology, and strategy to deliver measurable growth for businesses.
            </p>
          </div>

          <div className="grid stats-grid">
            {statsData.map((stat) => (
              <StatCard key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>

        {/* PART 2: CLIENT TESTIMONIALS */}
        <div className="testimonials-block">
          <div className="section-header center-align">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="grid testimonials-grid">
            {testimonialsData.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.id}>
                {/* Visual Star Rating */}
                <div className="testimonial-stars" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <span key={idx} className="star-icon" aria-hidden="true">★</span>
                  ))}
                </div>
                {/* Client Quote */}
                <blockquote className="testimonial-quote">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                {/* Author Block */}
                <div className="testimonial-author">
                  <div className={`avatar-placeholder ${testimonial.avatarClass}`} aria-hidden="true">
                    {testimonial.initials}
                  </div>
                  <div className="author-details">
                    <h3 className="author-name">{testimonial.name}</h3>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
