import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Music, Trophy, Palette, Code, Film } from 'lucide-react';

interface InterestsSketchbookProps {
    isOpen: boolean;
    onClose: () => void;
}

const interests = [
    { name: "AI Research", icon: <Code size={20} />, color: "#ffd97d" },
    { name: "Building Products", icon: <Palette size={20} />, color: "#a5f3bc" },
    { name: "Opensource", icon: <Heart size={20} />, color: "#ffadad" },
    { name: "Badminton", icon: <Trophy size={20} />, color: "#9bf6ff" },
    { name: "Cricket", icon: <Trophy size={20} />, color: "#caffbf" },
    { name: "Music", icon: <Music size={20} />, color: "#bdb2ff" },
    { name: "Anime", icon: <Film size={20} />, color: "#ffc6ff" },
];

const InterestsSketchbook: React.FC<InterestsSketchbookProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="sketchbook-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="sketchbook-page"
                        initial={{ scale: 0.8, y: 50, rotate: -2 }}
                        animate={{ scale: 1, y: 0, rotate: 0 }}
                        exit={{ scale: 0.8, y: 50, rotate: 2 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    >
                        <button className="sketchbook-close" onClick={onClose} aria-label="Close sketchbook">
                            <X size={24} />
                        </button>

                        <div className="sketchbook-header">
                            <h3 className="sketchbook-title">My Sketchbook</h3>
                            <p className="sketchbook-subtitle">A glimpse into my world beyond the chalkboard.</p>
                        </div>

                        <div className="interests-stickers">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={interest.name}
                                    className="interest-sticker"
                                    initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 10 - 5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                    style={{ borderColor: interest.color }}
                                >
                                    <span className="sticker-icon" style={{ color: interest.color }}>{interest.icon}</span>
                                    <span className="sticker-name">{interest.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="sketchbook-footer">
                            <p>Always exploring, always learning.</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InterestsSketchbook;
