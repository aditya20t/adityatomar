import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { id: 'ml', label: 'Machine Learning', x: 50, y: 50, scale: 1.3 },
    { id: 'dl', label: 'Deep Learning', x: 50, y: 20, scale: 1.1 },
    { id: 'nlp', label: 'NLP', x: 25, y: 40, scale: 1.2 },
    { id: 'transformers', label: 'Transformers', x: 20, y: 70, scale: 1.1 },
    { id: 'rag', label: 'RAG / LLMs', x: 45, y: 80, scale: 1.1 },
    { id: 'agents', label: 'Agentic AI', x: 80, y: 80, scale: 1.1 },
    { id: 'pytorch', label: 'PyTorch / TF', x: 75, y: 30, scale: 1.0 },
    { id: 'python', label: 'Python', x: 80, y: 55, scale: 1.0 },
    { id: 'web', label: 'Web / React', x: 15, y: 15, scale: 1.0 }
];

const connections = [
    { from: 'ml', to: 'dl' },
    { from: 'ml', to: 'nlp' },
    { from: 'dl', to: 'transformers' },
    { from: 'nlp', to: 'transformers' },
    { from: 'transformers', to: 'rag' },
    { from: 'rag', to: 'agents' },
    { from: 'ml', to: 'pytorch' },
    { from: 'dl', to: 'pytorch' },
    { from: 'ml', to: 'python' },
    { from: 'python', to: 'pytorch' },
    { from: 'web', to: 'nlp', dotted: true }
];

const SkillsMindMap: React.FC = () => {
    return (
        <section className="skills-section fade-in" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title chalk-text text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Expertise Graph</h2>
            <div style={{ position: 'relative', width: '100%', height: '500px', margin: '0 auto' }}>

                {/* SVG Connecting Lines */}
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                    {connections.map((conn, i) => {
                        const fromNode = skills.find(s => s.id === conn.from);
                        const toNode = skills.find(s => s.id === conn.to);
                        if (!fromNode || !toNode) return null;

                        return (
                            <motion.path
                                key={i}
                                d={`M ${fromNode.x}% ${fromNode.y}% C ${(fromNode.x + toNode.x) / 2}% ${fromNode.y}%, ${(fromNode.x + toNode.x) / 2}% ${toNode.y}%, ${toNode.x}% ${toNode.y}%`}
                                fill="none"
                                stroke="var(--border-color)"
                                strokeWidth="2.5"
                                strokeDasharray={conn.dotted ? "6, 6" : "none"}
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                            />
                        );
                    })}
                </svg>

                {/* Nodes */}
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.id}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: skill.scale, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 150, delay: i * 0.05 }}
                        style={{
                            position: 'absolute',
                            left: `${skill.x}%`,
                            top: `${skill.y}%`,
                            transform: `translate(-50%, -50%)`
                        }}
                    >
                        <div
                            className="project-card sketch-outline"
                            style={{
                                padding: '0.8rem 1.2rem',
                                borderRadius: '15px 50px 15px 50px/50px 15px 50px 15px',
                                border: '2px solid var(--border-color)',
                                backgroundColor: 'var(--card-bg)',
                                backdropFilter: 'blur(10px)',
                                cursor: 'default',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            <span className="chalk-text" style={{ fontSize: '1.2rem', display: 'block', textAlign: 'center' }}>
                                {skill.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center" style={{ marginTop: '2rem', opacity: 0.6, fontStyle: 'italic' }}>
                * interconnected domains of AI Research
            </div>
        </section>
    );
};

export default SkillsMindMap;
