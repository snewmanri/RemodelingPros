import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: "Modern Master Bathroom",
    description: "Complete renovation with custom tile work and glass shower enclosure",
    type: "Full Remodel",
    image: "/images/modern-master-bath.jpg"
  },
  {
    id: 2,
    title: "Spa-Inspired Retreat",
    description: "Luxury renovation featuring freestanding tub and heated floors",
    type: "Luxury Remodel",
    image: "/images/spa-bathroom.jpg"
  },
  {
    id: 3,
    title: "Contemporary Guest Bath",
    description: "Updated fixtures, lighting, and modern vanity installation",
    type: "Partial Remodel",
    image: "/images/guest-bath.jpg"
  }
];

function ProjectGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex]);

  return (
    <section className="project-gallery">
      <h2>Our Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div 
              className="project-image"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {selectedImageIndex !== null && (
          <img 
            src={projects[selectedImageIndex].image} 
            alt={projects[selectedImageIndex].title} 
          />
        )}
      </Modal>
    </section>
  );
}

export default ProjectGallery;
