import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import ProjectGallery from './components/ProjectGallery';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <div id="services">
            <Services />
          </div>
          <div id="projects">
          <ProjectGallery />
          </div>
          <Testimonials />
          <div id="contact">
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;