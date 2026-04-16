import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.5 5.5 0 0 0-.15-3.84s-1.15-.4-3.9 1.5a13.3 13.3 0 0 0-7 0c-2.75-1.9-3.9-1.5-3.9-1.5a5.5 5.5 0 0 0-.15 3.84 5.5 5.5 0 0 0-1.5 3.89c0 5.25 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" /><path d="M9 19c-4.3 1.4-5.3-2-8-3" /></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="hero-eyebrow">Hello, I'm</span>
                <h1 className="hero-title chalk-text">Aditya Tomar</h1>
                <p className="hero-subtitle">
                    Researcher & Developer specializing in Natural Language Processing and AI Bias.
                </p>
                <div className="hero-socials">
                    <a href="https://scholar.google.com/citations?user=83aelMAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <GraduationCap size={24} />
                    </a>
                    <a href="https://github.com/aditya20t" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <GithubIcon size={24} />
                    </a>
                    <a href="https://linkedin.com/in/adityatomar" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <LinkedinIcon size={24} />
                    </a>
                    <a href="mailto:aditya20tomar@gmail.com" className="social-icon">
                        <Mail size={24} />
                    </a>
                </div>
            </motion.div>
            <div className="hero-background">
                <div className="chalk-smudge smudge-1"></div>
                <div className="chalk-smudge smudge-2"></div>
            </div>
        </section>
    );
};

export default Hero;
