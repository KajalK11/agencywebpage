import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "Web Design",
    description: "Stunning designs tailored to elevate your brand presence."
  },
  {
    id: 2,
    title: "Development",
    description: "Next-gen frontend systems engineered for speed and reliability."
  },
  {
    id: 3,
    title: "Marketing",
    description: "Data-driven growth strategies to acquire and retain users."
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services" aria-label="Our Services">
      <div className="container services-container">
        <div className="section-header center-align">
          <span className="section-badge">SERVICES</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We build premium software tailored to your goals.</p>
        </div>
        <div className="grid grid-cols-3 services-grid">
          {servicesData.map((service) => (
            <article className="card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
