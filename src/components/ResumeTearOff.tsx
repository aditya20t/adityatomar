import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ResumeTearOff: React.FC = () => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const handleTearOff = async () => {
        // Construct path correctly: ensure no double slashes
        const basePath = import.meta.env.BASE_URL;
        const pdfPath = `${basePath.endsWith('/') ? basePath : basePath + '/'}resume.pdf`;

        // Trigger the download/open IMMEDIATELY to preserve user gesture context
        window.open(pdfPath, '_blank');

        // Start tear off animation
        controls.start({
            y: [0, 50, window.innerHeight],
            rotate: [0, 15, 45, 90],
            opacity: [1, 1, 0],
            transition: { duration: 0.8, ease: "easeIn" }
        });

        // Reset paper position after a short delay
        setTimeout(() => {
            controls.set({ y: -100, rotate: 0, opacity: 0 });
            controls.start({ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } });
        }, 1500);
    };

    return (
        <motion.div
            animate={controls}
            onClick={handleTearOff}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ y: 0 }}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                width: '160px',
                height: '110px',
                zIndex: 1000,
                cursor: 'pointer',
                perspective: '1000px'
            }}
            whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                rotate: [0, -1, 1, -1, 1, 0],
                scale: 1.05,
                transition: { duration: 0.4, repeat: 0 }
            }}
        >
            {/* Paper that pops out (Tucked deeper) */}
            <motion.div
                animate={{
                    y: isHovered ? -55 : 30,
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '20px',
                    width: '120px',
                    height: '130px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    borderRadius: '2px',
                    pointerEvents: 'none'
                }}
            >
                <div style={{ width: '80%', height: '2px', backgroundColor: '#f0f0f0', marginBottom: '8px' }} />
                <div style={{ width: '60%', height: '2px', backgroundColor: '#f0f0f0', marginBottom: '8px' }} />
                <div style={{ width: '70%', height: '2px', backgroundColor: '#f0f0f0' }} />
            </motion.div>

            {/* Envelope Back */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '80px',
                backgroundColor: '#fde68a', // Darker yellow for back
                border: '2px solid var(--border-color)',
                borderRadius: '4px',
                zIndex: 0
            }} />

            {/* Envelope Front (The one with the 'V' tear) */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '85px',
                backgroundColor: '#fef3c7',
                border: '2px solid var(--border-color)',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
                zIndex: 2,
                boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible'
            }}>
                {/* Torn Top Edge - Visible ONLY on Hover */}
                <motion.svg
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    style={{ position: 'absolute', top: -12, left: -2, width: 'calc(100% + 4px)', height: '15px', zIndex: 3 }}
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                >
                    <path
                        d="M 0 10 L 0 5 L 10 2 L 20 6 L 30 1 L 40 5 L 50 2 L 60 7 L 70 3 L 80 6 L 90 2 L 100 5 L 100 10 Z"
                        fill="#fef3c7"
                        stroke="var(--border-color)"
                        strokeWidth="0.5"
                    />
                </motion.svg>

                {/* Normal Closed Flap - Visible ONLY when NOT Hovered */}
                <motion.div
                    animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
                    style={{
                        position: 'absolute',
                        top: -30,
                        left: 0,
                        width: '100%',
                        height: '35px',
                        backgroundColor: '#fef3c7',
                        border: '2px solid var(--border-color)',
                        clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
                        zIndex: 3
                    }}
                />

                {/* Envelope Folds (X shape) */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom right, transparent 49.5%, var(--border-color) 50%, transparent 50.5%), linear-gradient(to bottom left, transparent 49.5%, var(--border-color) 50%, transparent 50.5%)',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }} />

                <span style={{
                    fontFamily: '"Architects Daughter", cursive',
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: '#1e352f',
                    zIndex: 4,
                    textAlign: 'center',
                    lineHeight: 1.1,
                    marginTop: '10px'
                }}>
                    Grab my<br />resume
                </span>
            </div>
        </motion.div>
    );
};

export default ResumeTearOff;
