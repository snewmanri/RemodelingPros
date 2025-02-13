import React from 'react';

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
  return (
    <section className="project-gallery">
      <h2>Our Recent Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
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
    </section>
  );
}

export default ProjectGallery;
