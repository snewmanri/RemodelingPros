import React from 'react';

const services = [
    { title: "Full Remodeling", description: "Complete bathroom transformation." },
    { title: "Fixture Updates", description: "Modern fixtures and fittings." },
    { title: "Tile Work", description: "Custom tile design and installation." },
    { title: "And More!", description: "Any space, any problem. We do it all!" }
];

function Services() {
    return (
        <section className="services-preview">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;