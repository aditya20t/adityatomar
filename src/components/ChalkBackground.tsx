import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const doodleTemplates = [
    <svg viewBox="0 0 100 100"><circle cx="20" cy="50" r="8" /><circle cx="50" cy="20" r="8" /><circle cx="50" cy="50" r="8" /><circle cx="50" cy="80" r="8" /><circle cx="80" cy="50" r="8" /><path d="M28 50 L42 28 M28 50 L42 50 M28 50 L42 72 M58 28 L72 50 M58 50 L72 50 M58 72 L72 50" /></svg>,
    <svg viewBox="0 0 100 60"><path d="M10 50 Q 50 10 90 50" /></svg>,
    <svg viewBox="0 0 80 80"><path d="M10 10 L10 70 M15 10 L10 10 M15 70 L10 70 M65 10 L70 10 L70 70 L65 70" /><text x="25" y="45" fontSize="12">M</text></svg>,
    <svg viewBox="0 0 60 60"><path d="M10 20 L30 20 L30 40 L10 40 Z M30 20 L50 20 L50 40 L30 40 Z" /></svg>,
    <svg viewBox="0 0 80 80"><path d="M40 10 L40 70 M20 70 L60 70 M20 30 L60 40" /><circle cx="20" cy="40" r="8" /><circle cx="60" cy="50" r="8" /></svg>,
    <text x="0" y="30" fontSize="30" fontFamily="Architects Daughter">∑</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">∂</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">λ</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">∞</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">π</text>,
    <svg viewBox="0 0 100 100"><circle cx="50" cy="20" r="5" /><circle cx="20" cy="80" r="5" /><circle cx="80" cy="80" r="5" /><path d="M50 25 L25 75 M50 25 L75 75" /></svg>,
    <text x="0" y="20" fontSize="14">0101</text>,
    <svg viewBox="0 0 100 60"><path d="M10 50 Q 30 10 50 50 Q 70 10 90 50" /></svg>,
    <text x="0" y="40" fontSize="30" fontFamily="Architects Daughter">∫</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">β</text>,
    <text x="0" y="30" fontSize="25" fontFamily="Architects Daughter">∇</text>,
    <svg viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="none" strokeWidth="2" strokeDasharray="5" /></svg>,
    <svg viewBox="0 0 100 100"><path d="M10 10 Q 50 90 90 10" /></svg>
];

const NUM_DOODLES = 45; // Fill the background with many doodles

const MagneticDoodle = ({ doodle, mouseX, mouseY }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

    useEffect(() => {
        const unsubscribe = mouseX.on("change", (mx: number) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const my = mouseY.get();
            const dx = mx - centerX;
            const dy = my - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Repel radius
            if (distance < 150 && distance > 0) {
                const force = (150 - distance) / 150;
                x.set(-(dx / distance) * force * 40);
                y.set(-(dy / distance) * force * 40);
            } else {
                x.set(0);
                y.set(0);
            }
        });
        return () => unsubscribe();
    }, [mouseX, mouseY, x, y]);

    return (
        <motion.div
            ref={ref}
            className="global-doodle"
            style={{
                top: doodle.top,
                left: doodle.left,
                x: springX,
                y: springY
            }}
            initial={{
                scale: doodle.scale,
                rotate: doodle.initialRotate,
                opacity: 0
            }}
            animate={{
                opacity: "var(--doodle-opacity)" as any, // Animate to theme-aware var
                rotate: [doodle.initialRotate, doodle.initialRotate + (Math.random() * 30 - 15), doodle.initialRotate]
            }}
            transition={{
                rotate: { duration: doodle.duration, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2, delay: doodle.delay }
            }}
        >
            <motion.div
                animate={{
                    x: [0, doodle.floatX, 0],
                    y: [0, doodle.floatY, 0]
                }}
                transition={{
                    duration: doodle.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="doodle-svg-wrapper"
            >
                {doodle.svg}
            </motion.div>
        </motion.div>
    );
};

const ChalkBackground: React.FC = () => {
    const [doodles, setDoodles] = useState<any[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        // Generate random fields dynamically on mount so they cover the entire viewport
        const generatedDoodles = Array.from({ length: NUM_DOODLES }).map((_, i) => ({
            id: i,
            svg: doodleTemplates[Math.floor(Math.random() * doodleTemplates.length)],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: 0.4 + Math.random() * 1.2,
            initialRotate: Math.random() * 360,
            floatX: Math.random() * 40 - 20,
            floatY: Math.random() * 40 - 20,
            duration: 15 + Math.random() * 25,
            delay: Math.random() * 2
        }));
        setDoodles(generatedDoodles);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="global-doodle-container">
            {doodles.map((doodle) => (
                <MagneticDoodle key={doodle.id} doodle={doodle} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </div>
    );
};

export default ChalkBackground;
