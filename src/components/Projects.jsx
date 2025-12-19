import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
    {
        title: "CRUD App",
        img: project1,
        description: "Developed a JavaScript CRUD app with RegEx form validation",
        category: "JavaScript",
        demo: "https://ashraf20026.github.io/cruds-opiration/"
    },
    {
        title: "Calculator",
        img: project2,
        description: "Calculator built with React",
        category: "React + Vite",
        demo: "https://ashraf20026.github.io/Calculator-App/"
    },
    {
        title: "Portfolio",
        img: project3,
        description: "React & JavaScript & Bootstrap & CSS",
        category: "React + Vite",
        demo: "#"
    },
    {
        title: "Photo Editor",
        img: project4,
        description: "JavaScript | Responsive App Design",
        category: "JavaScript",
        demo: "https://ashraf20026.github.io/photo_editor/"
    },
];

const categories = ["All" , "React + Vite", "Next", "JavaScript"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section reveal tree-node text-center p-5">
            <h2 className="mb-5">Projects</h2>

            <div className="project-filters mb-5 mt-4 d-flex justify-content-center flex-wrap gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((p, i) => (
                        <div key={i} className="project-card glow-card">
                            <img src={p.img} alt={p.title} loading="lazy" />
                            <div className="overlay">
                                <h3>{p.title}</h3>
                                <p className="mb-2 text-sm opacity-75">{p.category}</p>
                                <p>{p.description}</p>
                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">Live Demo</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-projects text-muted opacity-75">
                        <p>No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
