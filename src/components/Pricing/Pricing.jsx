import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "₹29,999",
    period: "/project",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "Responsive Website",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Mobile Optimization"
    ],
    buttonText: "Get Started",
    isFeatured: false,
    ctaLink: "#contact"
  },
  {
    id: 2,
    name: "Growth",
    price: "₹59,999",
    period: "/project",
    badge: "Most Popular",
    description: "Designed for businesses looking to scale and increase conversions.",
    features: [
      "Everything in Starter",
      "Advanced UI/UX Design",
      "SEO Optimization",
      "Analytics Integration",
      "Performance Optimization",
      "Priority Support"
    ],
    buttonText: "Choose Growth",
    isFeatured: true,
    ctaLink: "#contact"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Complete digital solutions for large organizations.",
    features: [
      "Custom Development",
      "AI Automation",
      "Dedicated Support",
      "Advanced Integrations"
    ],
    buttonText: "Contact Sales",
    isFeatured: false,
    ctaLink: "#contact"
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing" aria-label="Our pricing plans">
      {/* Background decoration elements */}
      <div className="pricing-background-effects" aria-hidden="true">
        <div className="pricing-glow" ></div>
      </div>

      <div className="container">
        <div className="section-header center-align">
          <span className="section-badge">PRICING</span>
          <h2 className="section-title">Simple Plans For Every Stage Of Growth</h2>
          <p className="section-subtitle">
            Choose the plan that fits your business needs. Upgrade anytime as your goals grow.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article 
              key={plan.id} 
              className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <span className="pricing-card-badge">{plan.badge}</span>
              )}
              
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price-row">
                  <span className="plan-price">{plan.price}</span>
                  {plan.period && <span className="plan-period">{plan.period}</span>}
                </div>
              </div>

              <ul className="plan-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature-item">
                    <span className="feature-check" aria-hidden="true">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card-action">
                <a 
                  href={plan.ctaLink} 
                  className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-secondary'} plan-cta-btn`}
                  aria-label={`Get started with our ${plan.name} plan`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
