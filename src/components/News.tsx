import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import newsData from '../data/news.json';

const renderContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="terminal-strong">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const News: React.FC = () => {
    return (
        <section className="section news-terminal-section">
            <div className="section-header">
                <div className="status-badge">
                    <Sparkles size={14} />
                    Live Momentum
                </div>
                <h2 className="section-title">Research Feed</h2>
                <p className="section-subtitle">Active updates from the AI research frontier.</p>
            </div>

            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <span className="control red"></span>
                        <span className="control yellow"></span>
                        <span className="control green"></span>
                    </div>
                    <div className="terminal-title">
                        <TerminalIcon size={14} />
                        research_updates — aditya@tomar
                    </div>
                    <div className="terminal-placeholder"></div>
                </div>
                
                <div className="terminal-body">
                    {newsData.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            className="terminal-line"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <span className="terminal-prompt">
                                <span className="prompt-user">aditya</span>
                                <span className="prompt-at">@</span>
                                <span className="prompt-host">research</span>
                                <span className="prompt-sep">:</span>
                                <span className="prompt-path">~</span>
                                <span className="prompt-char">$</span>
                            </span>
                            <span className="terminal-date">[{item.date}]</span>
                            <span className="terminal-content">
                                {renderContent(item.content)}
                            </span>
                        </motion.div>
                    ))}
                    <motion.div 
                        className="terminal-cursor-line"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                    >
                        <span className="terminal-prompt">
                            <span className="prompt-user">aditya</span>
                            <span className="prompt-at">@</span>
                            <span className="prompt-host">research</span>
                            <span className="prompt-sep">:</span>
                            <span className="prompt-path">~</span>
                            <span className="prompt-char">$</span>
                        </span>
                        <span className="terminal-cursor">█</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default News;
