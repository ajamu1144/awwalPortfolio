import React from "react";

function Projects() {
    const projects = [1, 2, 3];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((num) => (
                    <div key={num} className="project-card">
                        <h3>Project {num}</h3>
                        <p>A short description about this project goes here.</p>
                        <a href="#" className="btn outline">View More</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
