import React from "react";
import { useInView } from 'react-intersection-observer';

export default function SocialLinks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contacts = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      color: '#1877F2',
      link: 'https://www.facebook.com/'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      color: '#0077B5',
      link: 'https://www.linkedin.com/in/ashraf-ahmed-b8b58b222'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      color: '#E1306C',
      link: 'https://www.instagram.com/'
    },
    {
      name: 'Gmail',
      icon: 'fa-solid fa-envelope',
      color: '#DB4437', // Gmail red
      link: 'mailto:ashrafahmedfarid@gmail.com'
    }
  ];

  return (
    <section id="contact" className="container py-5">
      <h2 className='reveal tree-node w-100 text-center p-3'>Contact Us</h2>

      <div ref={ref} className="row reveal tree-node justify-content-center p-3 gap-4">
        {contacts.map((c, i) => (
          <div key={i} className="col-12 col-md-5 col-lg-3 card-container">
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label={`Contact via ${c.name}`}
            >
              <div className="premium-contact-card p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                  <i
                    className={`${c.icon} fa-3x`}
                    style={{ color: c.color }}
                  ></i>
                  <h3 className="m-0 h4 text-light">{c.name}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
