import React from "react";

export default function About() {
  const stats = [
    { icon: "fa-solid fa-laptop-code", title: "Experience", value: "1+ Years" },
    { icon: "fa-solid fa-diagram-project", title: "Completed Projects", value: "10+" },
    { icon: "fa-solid fa-comments", title: "Communication", value: "Excellent" },
  ];

  return (
    <section id="about" className="container pt-5 pb-2 reveal tree-node">
      <h2 className="w-100 text-center mb-4 p-2">About</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="premium-about-card p-4 p-md-5 position-relative overflow-hidden">
            {/* Background Decorative Glow (Optional) */}
            <div className="about-glow-bg"></div>

            <div className="row align-items-center position-relative z-1">
              {/* Text Section */}
              <div className="col-md-7 mb-4 mb-md-0">
                <h3 className="display-6 fw-bold mb-4">
                  Building <span className="text-gradient">Responsive Websites</span>
                </h3>

                <p className="about-description lead mb-4" style={{ lineHeight: '1.7' }}>
                  I'm a passionate <strong className="about-text-highlight">Front-End Developer</strong> specializing in creating modern,
                  high-performance web applications using <strong className="about-text-highlight">React.js</strong> and <strong className="about-text-highlight">Next.js</strong>.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="p-2 rounded-circle bg-white bg-opacity-10 me-3 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-code text-primary"></i>
                    </div>
                    <span className="about-text">Expert in <strong className="about-text-highlight">HTML5, CSS3, JavaScript (ES6+)</strong></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="p-2 rounded-circle bg-white bg-opacity-10 me-3 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-layer-group text-primary"></i>
                    </div>
                    <span className="about-text">State Management with <strong className="about-text-highlight">Redux & Context API</strong></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="p-2 rounded-circle bg-white bg-opacity-10 me-3 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-rocket text-primary"></i>
                    </div>
                    <span className="about-text">Performance Optimization <strong className="about-text-highlight">(SSR / SSG)</strong></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="p-2 rounded-circle bg-white bg-opacity-10 me-3 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-palette text-primary"></i>
                    </div>
                    <span className="about-text">Creative UI/UX & Responsive Design</span>
                  </div>
                </div>
              </div>

              {/* Stats/Visual Section */}
              <div className="col-md-5">
                <div className="d-flex flex-wrap flex-md-column justify-content-center gap-3 ps-md-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="about-stat-card flex-fill d-flex align-items-center p-3 rounded-4 justify-content-center justify-content-md-start">
                      <div className="stat-icon-wrapper me-3 d-flex align-items-center justify-content-center rounded-circle">
                        <i className={`${stat.icon}`}></i>
                      </div>
                      <div className="text-center text-md-start">
                        <h3 className="m-0 fw-bold">{stat.value}</h3>
                        <span className="small text-uppercase fw-bold text-spacing">{stat.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
