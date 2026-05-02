import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.8, 
                ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a smooth "expensive" feel
            }}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
