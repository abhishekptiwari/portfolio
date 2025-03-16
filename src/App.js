import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const BlogRedirect = () => {
    React.useEffect(() => {
        window.open("https://hashnode.com/@abhishekptiwari", "_blank");
    }, []);
    
    return <Navigate to="/" replace />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<BlogRedirect />} />
            </Routes>
        </Router>
    );
};

export default App;
