import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsMindMap from '../components/SkillsMindMap';
import ProjectCard from '../components/ProjectCard';
import PublicationCard from '../components/PublicationCard';
import projectsData from '../data/projects.json';
import publicationsData from '../data/publications.json';

import News from '../components/News';
import SectionReveal from '../components/SectionReveal';

const Home: React.FC = () => {
    const featuredProjects = projectsData.filter(project => (project as any).featured);
    const featuredPublications = publicationsData.slice(0, 3);

    return (
        <div className="page home-page">
            <Hero />
            
            <SectionReveal className="gray-bg">
                <News />
            </SectionReveal>

            <SectionReveal>
                <section className="section">
                    <div className="section-header">
                        <h2 className="section-title">Selected Research</h2>
                        <p className="section-subtitle">Publications and academic articles on AI, NLP, and multimodal bias.</p>
                    </div>
                    <div className="publications-list">
                        {featuredPublications.map(pub => (
                            <PublicationCard key={pub.slug} pub={pub} />
                        ))}
                    </div>
                </section>
            </SectionReveal>

            <SectionReveal className="gray-bg">
                <ExperienceTimeline />
            </SectionReveal>

            <SectionReveal>
                <section className="section">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Applied ML and full-stack development work.</p>
                    </div>
                    <div className="projects-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </section>
            </SectionReveal>

            <SectionReveal className="gray-bg">
                <About />
            </SectionReveal>
            
            <SectionReveal>
                <SkillsMindMap />
            </SectionReveal>
        </div>
    );
};

export default Home;
