import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import ProjectGallery from './components/ProjectGallery';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <div className="home">
                <Hero />
                <section className="services-preview">
                  <h2>Our Services</h2>
                  <div className="service-cards">
                    <div className="service-card">
                      <h3>Full Remodeling</h3>
                      <p>Complete bathroom transformation</p>
                    </div>
                    <div className="service-card">
                      <h3>Fixture Updates</h3>
                      <p>Modern fixtures and fittings</p>
                    </div>
                    <div className="service-card">
                      <h3>Tile Work</h3>
                      <p>Custom tile design and installation</p>
                    </div>
                  </div>
                </section>
                <ProjectGallery />
                <Testimonials />
              </div>
            } />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;