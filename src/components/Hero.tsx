import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, BookOpen } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.5 5.5 0 0 0-.15-3.84s-1.15-.4-3.9 1.5a13.3 13.3 0 0 0-7 0c-2.75-1.9-3.9-1.5-3.9-1.5a5.5 5.5 0 0 0-.15 3.84 5.5 5.5 0 0 0-1.5 3.89c0 5.25 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" /><path d="M9 19c-4.3 1.4-5.3-2-8-3" /></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Hero: React.FC = () => {
    const roles = ["NLP", "ML", "Speech AI", "Diffusion AI", "AI Alignment"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                setTypingSpeed(150);

                if (displayText.length === currentRole.length) {
                    // Pause at the end
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setTypingSpeed(50);

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section className="hero-section">
            {/* Background Particles Specific to Hero */}
            <div className="hero-cosmic-particles">
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="hero-particle"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hero-header-stack">
                    <span className="hero-eyebrow">AI Research Student @ CFIL Lab, IIT Bombay</span>
                    <h1 className="hero-title">Aditya Tomar</h1>
                    <p className="hero-tagline">Architecting the future of Alignment and Multimodal Intelligence.</p>
                </div>

                <div className="glass-console">
                    <div className="console-header">
                        <div className="console-dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="console-tab">latent_exploration.sh</div>
                    </div>
                    <div className="typing-container">
                        <span className="typing-static">Exploring:</span>
                        <span className="typing-dynamic">{displayText}</span>
                        <span className="typing-cursor">█</span>
                    </div>
                </div>

                <div className="hero-actions">
                    <motion.a
                        href={`${import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/'}resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cosmic"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <BookOpen size={18} />
                        <span>Download CV</span>
                    </motion.a>

                    <div className="hero-social-strip">
                        <a href="https://scholar.google.com/citations?user=83aelMAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="cosmic-icon" title="Google Scholar">
                            <GraduationCap size={20} />
                        </a>
                        <a href="https://github.com/aditya20t" target="_blank" rel="noopener noreferrer" className="cosmic-icon" title="GitHub">
                            <GithubIcon size={20} />
                        </a>
                        <a href="https://linkedin.com/in/aditya20t" target="_blank" rel="noopener noreferrer" className="cosmic-icon" title="LinkedIn">
                            <LinkedinIcon size={20} />
                        </a>
                        <a href="mailto:aditya20tomar@gmail.com" className="cosmic-icon" title="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
