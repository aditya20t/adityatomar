import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import PublicationCard from '../components/PublicationCard';
import projectsData from '../data/projects.json';
import publicationsData from '../data/publications.json';

const Home: React.FC = () => {
    const featuredProjects = projectsData.filter(project => (project as any).featured);
    const featuredPublications = publicationsData.slice(0, 3);

    return (
        <div className="page home-page">
            <Hero />

            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">A collection of my recent work in AI and development.</p>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="section gray-bg">
                <div className="section-header">
                    <h2 className="section-title">Recent Publications</h2>
                    <p className="section-subtitle">Research papers and articles on computational linguistics and bias.</p>
                </div>
                <div className="publications-list">
                    {featuredPublications.map(pub => (
                        <PublicationCard key={pub.slug} pub={pub} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
