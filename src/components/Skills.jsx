import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34c26', level: 100 },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#264de4', level: 100 },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3', level: 100 },
    { name: 'Tailwind', icon: 'fa-solid fa-wind', color: '#06b6d4', level: 100 },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e', level: 98 },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6', level: 98 },
    { name: 'React/Vite', icon: 'fa-brands fa-react', color: '#61dafb', level: 99 },
    { name: 'Next.js', icon: 'fa-solid fa-n', color: '#ffffff', level: 95 },
    { name: 'Sass', icon: 'fa-brands fa-sass', color: '#cc6699', level: 98 },
    { name: 'Axios', icon: 'fa-solid fa-cloud-arrow-down', color: '#5a29e4', level: 98 },
    { name: 'Redux', icon: 'fa-solid fa-diagram-project', color: '#764abc', level: 96 },
    { name: 'Database', icon: 'fa-solid fa-database', color: '#eab308', level: 95 },
    { name: 'Supabase', icon: 'fa-solid fa-bolt', color: '#3ecf8e', level: 98 },
    { name: 'Agile', icon: 'fa-solid fa-infinity', color: '#f97316', level: 96 },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#ffffff', level: 95 }
];

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="container pb-5 pt-1">
            <h2 className='reveal tree-node w-100 text-center pb-3 pt-0'>Skills</h2>
            <div ref={ref} className="row row-cols-2 row-cols-md-3 row-cols-lg-5 reveal tree-node justify-content-center p-2 g-4">
                {skills.map((s, i) => (
                    <div key={i} className="col card-container">
                        <div className="premium-skill-card p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center"
                            role="article"
                            aria-label={`${s.name} skill card`}>

                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                                <i className={`${s.icon} fa-2x`} style={{ color: s.color }} aria-hidden="true"></i>
                                <h3 className="m-0 h4">{s.name}</h3>
                            </div>

                            <div className="w-100 px-2 d-flex align-items-center">
                                {/* Progress Bar Track */}
                                <div className="progress-track flex-grow-1"
                                    role="progressbar"
                                    aria-valuenow={inView ? s.level : 0}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label={`${s.name} proficiency`}>
                                    <div
                                        className="progress-bar-fill"
                                        style={{
                                            width: inView ? `${s.level}%` : '0%',
                                            // background is handled by CSS for gradient theme
                                        }}
                                    ></div>
                                </div>
                                {/* Percentage Text */}
                                <div className="skill-percentage">
                                    {inView ? s.level : 0}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
