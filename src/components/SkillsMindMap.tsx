import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Artificial Intelligence",
        skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Transformers", "RAG Pipeline", "Agentic AI", "LLM Fine-tuning"]
    },
    {
        title: "Engineering & Tools",
        skills: ["Python", "PyTorch", "TensorFlow", "HuggingFace", "FAISS", "React", "TypeScript", "Git", "Docker"]
    }
];

const SkillsMindMap: React.FC = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Expertise & Tools</h2>
                <p className="section-subtitle">Core technologies I use for research and development.</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                {skillCategories.map((category, catIndex) => (
                    <motion.div 
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                        <h3 style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: 600, 
                            color: 'var(--text-primary)', 
                            marginBottom: '1rem',
                            paddingBottom: '0.5rem',
                            borderBottom: '1px solid var(--border-color)'
                        }}>
                            {category.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ y: -2, backgroundColor: 'var(--border-color)' }}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: 'var(--card-bg)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '100px',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: 'var(--text-secondary)',
                                        cursor: 'default',
                                        transition: 'color 0.2s ease, border-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsMindMap;
