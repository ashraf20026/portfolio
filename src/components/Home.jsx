import React, { useState, useEffect } from "react";
import myProfile from "../assets/images/my_profile.jpg";


const TypeWriter = ({ sequences, speed = 100, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= sequences.length) {
      setIndex(0); // Reset to first word
      return;
    }

    if (subIndex === sequences[index].length + 1 && !reverse) {
      setReverse(true);
      return; // Wait a bit before deleting (handled by timeout below logic?) 
      // Actually simpler logic: if full word, wait pause, then reverse
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % sequences.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 1 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, speed, sequences]);

  // Handling pause at the end of word
  useEffect(() => {
    if (!reverse && subIndex === sequences[index].length) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, sequences, pause, reverse]);

  return (
    <span>
      {sequences[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export default function Home() {
  return (
    <section id="home" className="container home-section w-100 vh-75 d-flex align-items-center">
      <div className="row w-100 align-items-center">
        {/* Profile Image Section */}
        <div className="col-md-5 d-flex justify-content-center pt-5  mb-md-0 reveal tree-node">
          <div className="profile-container">
            <img
              src={myProfile}
              alt="Ashraf Ahmed"
              className="profile-pic premium-profile-pic"
            />
          </div>
        </div>

        {/* Text & Typing Animation Section */}
        <div className="col-md-7 reveal tree-node d-flex flex-column justify-content-center ps-md-5">
          <div className="text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3">
              Hello, I'm <br />
              <span className="text-gradient">
                <TypeWriter
                  sequences={['Ashraf Ahmed', 'Web Developer']}
                  speed={100}
                  pause={2000}
                />
              </span>
            </h1>

            <div className="d-flex flex-column gap-2 mb-4">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="fa-solid fa-bolt text-warning me-2"></i>
                <span className="h5 m-0 opacity-75">Building dynamic web experiences</span>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="fa-brands fa-react text-info me-2"></i>
                <span className="h5 m-0 opacity-75">Specialized in React, Next.js & TypeScript</span>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="fa-solid fa-laptop-code text-success me-2"></i>
                <span className="h5 m-0 opacity-75">Focused on performance & scalability</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start mt-4">
              <a href="#contact" className="btn btn-primary premium-cta-btn px-5 py-3 rounded-pill text-white text-decoration-none">
                <h5 className="m-0 fw-bold">Contact Me</h5>
              </a>

              <a href="https://drive.google.com/uc?export=download&id=16vqm81Wl2NtNRv56rmNbF-eQ1mCjRGe0" className="btn btn-outline-info px-5 py-3 rounded-pill floating-btn text-decoration-none" style={{ borderWidth: '2px' }}>
                <h5 className="m-0 fw-bold">Download CV</h5>
              </a>
            </div>

            {/* Social Mini Icons */}
            <div className="d-flex gap-4 mt-4 justify-content-center justify-content-md-start social-mini-links">
              <a href="mailto:ashrfahmd413@gmail.com" target="_blank" rel="noopener noreferrer" className="fs-4 social-icon-email"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://wa.me/01119598746" target="_blank" rel="noopener noreferrer" className="fs-4 social-icon-whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://github.com/Ashraf20026" target="_blank" rel="noopener noreferrer" className="fs-4 social-icon-github"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ashraf-ahmed-b8b58b222" target="_blank" rel="noopener noreferrer" className="fs-4 social-icon-linkedin"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
