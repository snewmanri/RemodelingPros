import React from 'react';

function Services() {
    return (
        <section className="services-preview">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Full Remodeling</h3>
                    <p>Complete bathroom transformation.</p>
                </div>
                <div className="service-card">
                    <h3>Fixture Updates</h3>
                    <p>Modern fixtures and fittings.</p>
                </div>
                <div className="service-card">
                    <h3>Tile Work</h3>
                    <p>Custom tile design and installation.</p>
                </div>
                <div className="service-card">
                    <h3>And More!</h3>
                    <p>Any space, any problem. We do it all!</p>
                </div>

            </div>
        </section>
    );
}

export default Services;