import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Education from './pages/Education';
import './index.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/publications" element={<PageTransition><Publications /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div id="app-container">
          <GalaxyBackground />
          <Navbar />
          <main className="content">
            <AnimatedRoutes />
          </main>
          <footer className="footer">
            <div className="footer-content">
              <p>Made with &hearts; by Aditya, Claude, and Gemini. &copy; {new Date().getFullYear()} Aditya Tomar.</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
