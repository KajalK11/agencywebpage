import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Interacted / Touched State
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    message: false
  });

  // Validation Error State
  const [errors, setErrors] = useState({});

  // Submission Success State
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field Validation Logic
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 3) {
          error = 'Name must be at least 3 characters long';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = 'Email address is required';
        } else if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        const phoneDigits = value.replace(/\D/g, '');
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (value !== phoneDigits) {
          error = 'Only numbers are allowed in the phone number';
        } else if (phoneDigits.length < 10) {
          error = 'Phone number must be at least 10 digits long';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 20) {
          error = 'Message must be at least 20 characters long';
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Only validate dynamically if user has already exited (touched) the field
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Blur Handler (Interacted)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger validation for all fields
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        validationErrors[key] = error;
      }
    });

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      message: true
    });

    setErrors(validationErrors);

    // If no errors, submit successfully
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      
      // Reset forms
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        company: false,
        message: false
      });
      setErrors({});

      // Auto fade success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact NorthPeak Digital">
      {/* Visual background separation elements */}
      <div className="contact-background-effects" aria-hidden="true">
        <div className="contact-glow-1"></div>
        <div className="contact-glow-2"></div>
      </div>

      <div className="container">
        <div className="section-header center-align">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="section-subtitle">
            Tell us about your project and our team will get back to you shortly.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* LEFT SIDE: CONTACT INFORMATION CARD */}
          <div className="card contact-info-card">
            <h3 className="info-card-title">Contact Information</h3>
            <p className="info-card-desc">
              Reach out directly or fill out the form, and we'll respond within 24 hours.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <span className="detail-label">Email Us</span>
                <a href="mailto:hello@northpeakdigital.com" className="detail-link">
                  hello@northpeakdigital.com
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Call Us</span>
                <a href="tel:+919876543210" className="detail-link">
                  +91 98765 43210
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Our Office</span>
                <address className="detail-address">Gurgaon, India</address>
              </div>
            </div>

            {/* Social Media Link Icons */}
            <div className="contact-socials-wrapper">
              <span className="socials-title">Follow Us</span>
              <div className="social-links-row">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label="Visit NorthPeak Digital's LinkedIn profile"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label="Visit NorthPeak Digital's Twitter feed"
                >
                  <FaTwitter aria-hidden="true" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label="Visit NorthPeak Digital's Instagram profile"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="card contact-form-card">
            {isSubmitted && (
              <div className="form-success-banner" role="alert">
                <span className="success-banner-icon">✓</span>
                <div className="success-banner-text">
                  <strong>Thank you!</strong> We will contact you soon.
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Full Name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input-field ${errors.name ? 'field-error' : ''}`}
                  placeholder="Enter your name"
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error-msg' : undefined}
                />
                {errors.name && (
                  <span className="field-error-message" id="name-error-msg" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span className="required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input-field ${errors.email ? 'field-error' : ''}`}
                  placeholder="Enter your email"
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error-msg' : undefined}
                />
                {errors.email && (
                  <span className="field-error-message" id="email-error-msg" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label">
                  Phone Number <span className="required-asterisk">*</span>
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input-field ${errors.phone ? 'field-error' : ''}`}
                  placeholder="Enter phone number"
                  required
                  aria-required="true"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error-msg' : undefined}
                />
                {errors.phone && (
                  <span className="field-error-message" id="phone-error-msg" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Company Field (Optional) */}
              <div className="form-group">
                <label htmlFor="contact-company" className="form-label">
                  Company Name <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input-field"
                  placeholder="Enter company name"
                />
              </div>

              {/* Project Message Field */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Project Message <span className="required-asterisk">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  className={`form-input-field form-textarea-field ${errors.message ? 'field-error' : ''}`}
                  placeholder="Tell us about your project"
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error-msg' : undefined}
                ></textarea>
                {errors.message && (
                  <span className="field-error-message" id="message-error-msg" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-action-btn-row">
                <button 
                  type="submit" 
                  className="btn btn-primary contact-form-submit-btn"
                  aria-label="Send your project contact details to NorthPeak Digital"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
