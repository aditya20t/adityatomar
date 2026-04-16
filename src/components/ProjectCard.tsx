import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

interface Project {
    title: string;
    summary: string;
    tags: string[];
    external_link: string;
    slug: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            className="project-card sketch-outline"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="project-header">
                <h3 className="project-title chalk-text">{project.title}</h3>
                {project.external_link && (
                    <a href={project.external_link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>
            <p className="project-summary">{project.summary}</p>
            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="tag">
                        <Tag size={12} style={{ marginRight: '4px' }} />
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
