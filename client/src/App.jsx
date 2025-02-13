import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import ProjectGallery from './components/ProjectGallery';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import { AnalyticsWrapper } from './components/AnalyticsWrapper';

function App() {
  return (
    <Router>
      <div className="app" id="top">
        <Navbar />
        <main>
          <Hero />
          <div id="services">
            <Services />
          </div>
          <div id="projects">
          <ProjectGallery />
          </div>
          <div id="testimonials">
          <Testimonials />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </main>
        <AnalyticsWrapper />
      </div>
    </Router>
  );
}

export default App;