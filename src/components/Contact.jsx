import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you! Your message has been sent (Placeholder Action).');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactLinks = [
        {
            name: 'Email',
            icon: 'fa-solid fa-envelope',
            color: '#DB4437',
            link: 'mailto:ashrfahmd413@gmail.com'
        },
        {
            name: 'WhatsApp',
            icon: 'fa-brands fa-whatsapp',
            color: '#25D366',
            link: 'https://wa.me/01119598746'
        },
        {
            name: 'LinkedIn',
            icon: 'fa-brands fa-linkedin',
            color: '#0077B5',
            link: 'https://www.linkedin.com/in/ashraf-ahmed-b8b58b222'
        },
        {
            name: 'GitHub',
            icon: 'fa-brands fa-github',
            color: 'var(--github-color)',
            link: 'https://github.com/ashraf20026'
        }
    ];

    return (
        <section id="contact" className="container pb-5">
            <h2 className="reveal tree-node w-100 text-center p-3">
                Contact me
            </h2>

            <div className="row justify-content-center gap-4 mb-5 reveal tree-node">
                {/* Contact Information Section */}
                <div className="col-12 col-lg-5">
                    <div className="premium-contact-card p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
                        <h3 className="mb-4 text-gradient fw-bold">Get in Touch</h3>
                        <p className="contact-text-muted mb-4">
                            Open to new opportunities! Whether you have a question, feedback, or a project in mind, I'd love to hear from you.
                        </p>

                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="contact-icon-box">
                                    <i className="fa-solid fa-location-dot fa-lg text-primary"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1 contact-text-light">Location</h5>
                                    <span className="contact-text-muted">October Gardens, Giza, Egypt</span>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <div className="contact-icon-box">
                                    <i className="fa-solid fa-envelope fa-lg text-primary"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1 contact-text-light">Email</h5>
                                    <a href="mailto:ashrfahmd413@gmail.com" className="contact-text-muted text-decoration-none hover-text-primary">
                                        ashrfahmd413@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <div className="contact-icon-box">
                                    <i className="fa-solid fa-phone fa-lg text-primary"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1 contact-text-light">Phone</h5>
                                    <a href="tel:+201119598746" className="contact-text-muted text-decoration-none hover-text-primary">
                                        +20 111 959 8746
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit} className="premium-contact-card p-4 p-lg-5 h-100">
                        <h3 className="mb-4 text-gradient fw-bold">Message Me</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="contact-label mb-2">Name</label>
                            <input
                                type="text"
                                className="form-control contact-input"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="contact-label mb-2">Email</label>
                            <input
                                type="email"
                                className="form-control contact-input"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="contact-label mb-2">Message</label>
                            <textarea
                                className="form-control contact-input"
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="How can I help you?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="premium-cta-btn w-100 py-3 rounded-3 text-white fw-bold border-0">
                            Send Message <i className="fa-solid fa-paper-plane ms-2"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* Social Links */}
            <div className="row justify-content-center gap-3 reveal tree-node">
                {contactLinks.map((link, i) => (
                    <div key={i} className="col-4 col-md-3 col-lg-2">
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            aria-label={`Contact via ${link.name}`}
                        >
                            <div className="premium-contact-card p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                                <i
                                    className={`${link.icon} fa-2x mb-2`}
                                    style={{ color: link.color }}
                                ></i>
                                <span className="small">{link.name}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
