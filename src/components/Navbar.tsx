import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Publications', path: '/publications' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Education', path: '/education' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Aditya Tomar
                </Link>
                <div className="nav-actions">
                    <div className="nav-links">
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
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
