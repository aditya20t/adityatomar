import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
    return (
        <div className="page projects-page">
            <section className="section">
                <div className="section-header">
                    <h1 className="page-title">Projects</h1>
                    <p className="section-subtitle">A comprehensive list of my research projects and software development work.</p>
                </div>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
