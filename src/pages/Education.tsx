import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const educationData = [
    {
        id: 1,
        title: 'MS By Research, Computer Science and Engineering',
        institution: 'IIT Bombay, Mumbai',
        date: '2023 - 2026',
        description: 'Grade: 8.55/10',
        icon: <BookOpen size={24} />
    },
    {
        id: 2,
        title: 'BTech, Electrical and Electronics Engineering',
        institution: 'Lakshmi Narain College of Technology, Bhopal',
        date: '2018 - 2022',
        description: 'Grade: 8.32/10',
        icon: <BookOpen size={24} />
    }
];

const Education: React.FC = () => {
    return (
        <section className="experience-section fade-in">
            <h1 className="section-title chalk-text text-center">Education</h1>
            <p className="section-subtitle text-center" style={{ marginBottom: '3rem' }}>
                My academic background.
            </p>

            <div className="timeline-container">
                {educationData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="timeline-dot">
                            {item.icon}
                        </div>
                        <div className="timeline-content project-card sketch-outline">
                            <h3 className="timeline-title chalk-text">{item.title}</h3>
                            <h4 className="timeline-institution">{item.institution}</h4>
                            <span className="timeline-date">{item.date}</span>
                            <p className="timeline-desc">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
