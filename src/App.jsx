// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails'; // New component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden antialiased">
        <Header />
        <AnimatedRoutes /> {/* Wrap Routes in a component for transitions */}
        <Footer />
      </div>
    </Router>
  );
}

// Component to handle route transitions with Framer Motion
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> {/* New route */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;