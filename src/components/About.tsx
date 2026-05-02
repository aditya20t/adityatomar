import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section className="section about-section gray-bg">
            <div className="section-header">
                <h2 className="section-title">The "Brief" Summary</h2>
                <p className="section-subtitle">Decoding the human behind the terminal.</p>
            </div>
            <motion.div
                className="about-content-card sketch-outline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="about-text-container">
                    <p className="about-paragraph">
                        I’m currently a CSE student at IIT Bombay, a title that sounds incredibly prestigious until you realize it mostly involves a 90/10 split between debugging obscure errors and wondering
                        why I didn’t pick a career that happens outdoors. As a Research Student in AI/ML and NLP, I spend my days teaching machines how to talk, though they usually end up hallucinating with
                        a level of creative flair that puts my post-hackathon delirium to shame. My existence is a constant battle between minimizing cross-entropy loss and maximizing my own caffeine-to-blood ratio,
                        primarily because my brain is essentially a transformer model that requires a steady stream of high-quality espresso to keep its attention mechanism from drifting.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
