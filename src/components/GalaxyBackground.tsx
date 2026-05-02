import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Atom, Orbit, Cpu, Zap } from 'lucide-react';

const GalaxyBackground: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Parallax values
    const starX = useSpring(useTransform(mouseX, [0, window.innerWidth], [20, -20]), { stiffness: 50, damping: 20 });
    const starY = useSpring(useTransform(mouseY, [0, window.innerHeight], [20, -20]), { stiffness: 50, damping: 20 });
    
    const nodeX = useSpring(useTransform(mouseX, [0, window.innerWidth], [40, -40]), { stiffness: 60, damping: 15 });
    const nodeY = useSpring(useTransform(mouseY, [0, window.innerHeight], [40, -40]), { stiffness: 60, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="galaxy-container">
            {/* Deep Space Base */}
            <div className="space-base" />
            
            {/* Nebula Layers */}
            <div className="nebula nebula-1" />
            <div className="nebula nebula-2" />
            <div className="nebula nebula-3" />

            {/* Parallax Starfield */}
            <motion.div 
                className="starfield"
                style={{ x: starX, y: starY }}
            >
                {Array.from({ length: 100 }).map((_, i) => (
                    <div 
                        key={i} 
                        className="star" 
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`,
                            opacity: 0.1 + Math.random() * 0.5,
                            animationDelay: `${Math.random() * 5}s`
                        }} 
                    />
                ))}
            </motion.div>

            {/* Floating Technical Nodes (The 'Galaxy' of Data) */}
            <motion.div 
                className="node-layer"
                style={{ x: nodeX, y: nodeY }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="cosmic-node"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: [0.05, 0.15, 0.05],
                            y: [0, Math.random() * 50 - 25, 0],
                            rotate: [0, 360]
                        }}
                        transition={{ 
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    >
                        {i % 4 === 0 && <Atom size={24} />}
                        {i % 4 === 1 && <Orbit size={20} />}
                        {i % 4 === 2 && <Cpu size={22} />}
                        {i % 4 === 3 && <Zap size={18} />}
                    </motion.div>
                ))}
            </motion.div>

            {/* Central Glow (The Singular Core) */}
            <div className="singular-core" />
        </div>
    );
};

export default GalaxyBackground;
