import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Publications', path: '/publications' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Education', path: '/education' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    Aditya Tomar
                </Link>

                <div className="nav-actions">
                    {/* PC Links */}
                    <div className="nav-links desktop-only">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="nav-underline"
                                        initial={false}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-controls">
                        <ThemeToggle />

                        {/* Mobile Menu Toggle */}
                        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-nav-overlay"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="mobile-links">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
