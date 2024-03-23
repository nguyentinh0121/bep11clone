import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Home } from './pages';
import { Footer, Header } from './components';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <p>Hello</p>
        </Router>
    );
}
