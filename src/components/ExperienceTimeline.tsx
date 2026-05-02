import React from 'react';
import { motion } from 'framer-motion';

const IBMIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 2.5} height={size} viewBox="0 0 80 32" fill="currentColor">
        <defs>
            <pattern id="ibm-stripes" width="10" height="4" patternUnits="userSpaceOnUse">
                <rect width="10" height="2" fill="currentColor" />
            </pattern>
        </defs>
        <text x="0" y="26" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="36" letterSpacing="-2" fill="url(#ibm-stripes)">IBM</text>
    </svg>
);

export const experienceData = [
    {
        id: 1,
        title: 'AI Research Intern',
        institution: 'IBM Research Labs India',
        date: 'May 2025 - July 2025',
        description: (
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Designed and implemented an agentic RAG pipeline using a generate-then-retrieve approach with BM25 and FAISS retrievers to improve multi-hop question answering and reasoning.</li>
                <li style={{ marginBottom: '0.5rem' }}>Achieved consistent performance gains over baseline (ReAct) across datasets like HotpotQA, FEVER, and Z/OS, with improvements in F1, ROUGE, precision, and recall.</li>
                <li>Integrated knowledge-ingested models, along with grading and re-ranking modules, to enhance retrieval relevance and output accuracy.</li>
            </ul>
        ),
        icon: <IBMIcon size={24} />
    },
    {
        id: 2,
        title: 'AI Research Extern',
        institution: 'IBM Research Labs India',
        date: 'May 2024 - July 2024',
        description: (
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Worked on the problem of bias and stereotype detection using a multi-task learning framework.</li>
                <li style={{ marginBottom: '0.5rem' }}>Experimented with different encoder models and LLMs in single-task and multi-task setups using the StereoSet and ToxicBias datasets.</li>
                <li>Achieved up to 13.9% F1 improvement in bias detection by integrating stereotype detection into bias tasks.</li>
            </ul>
        ),
        icon: <IBMIcon size={24} />
    }
];

const ExperienceTimeline: React.FC = () => {
    return (
        <section className="experience-section fade-in section">
            <div className="section-header">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional experience and internships.</p>
            </div>

            <div className="timeline-container">
                {experienceData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="timeline-dot">
                            <div className="timeline-dot-inner"></div>
                        </div>
                        <div className="timeline-content project-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                                <div>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <h4 className="timeline-institution">{item.institution}</h4>
                                    <span className="timeline-date">{item.date}</span>
                                </div>
                                <div style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                                    {item.icon}
                                </div>
                            </div>
                            <div className="timeline-desc" style={{ marginTop: '1.5rem' }}>{item.description}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
