import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import ProjectGallery from './components/ProjectGallery';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
      </div>
    </Router>
  );
}

export default App;