import { motion, type Variants } from 'framer-motion';

const eraserVariants: Variants = {
    initial: {
        x: "100%",
        width: "100%"
    },
    animate: {
        x: "100%",
        width: "0%",
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    exit: {
        x: "0%",
        width: "100%",
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {/* The Eraser Block */}
            <motion.div
                className="chalk-eraser-transition"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={eraserVariants}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    backgroundColor: 'var(--bg-color)',
                    zIndex: 9990,
                    transformOrigin: 'left'
                }}
            >
                {/* Visual texture on the eraser */}
                <div style={{
                    width: '40px',
                    height: '100%',
                    position: 'absolute',
                    left: -20,
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1) 50%, transparent)',
                    filter: 'blur(5px)'
                }} />
            </motion.div>

            {/* The page content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
