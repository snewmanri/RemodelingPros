import React, { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah J",
        text: "The bathroom remodel exceeded our expectations. Professional work and attention to detail throughout the project.",
    },
    {
        id: 2,
        name: "Michael C",
        text: "Outstanding service! They completed our master bathroom renovation on time and within budget. Highly recommended!",
    },
    {
        id: 3,
        name: "Emily R",
        text: "Transformed our outdated bathroom into a modern spa-like retreat. Couldn't be happier with the results.",
    }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextTestimonial = () => {
        setIsTransitioning(true);
        // Wait for fade out
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
            // Remove transition class after content change
            requestAnimationFrame(() => {
                setIsTransitioning(false);
            });
        }, 300);
    };

    const prevTestimonial = () => {
        setIsTransitioning(true);
        // Wait for fade out
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
            // Remove transition class after content change
            requestAnimationFrame(() => {
                setIsTransitioning(false);
            });
        }, 300);
    };

    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-carousel">
                <button 
                    className="carousel-arrow left"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                >
                    ←
                </button>
                <div className={`testimonial-card ${isTransitioning ? 'transitioning' : ''}`}>
                    <blockquote>{testimonials[currentIndex].text}</blockquote>
                    <div className="testimonial-author">
                        <span className="author-name">{testimonials[currentIndex].name}</span>
                    </div>
                </div>
                <button 
                    className="carousel-arrow right"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                >
                    →
                </button>
            </div>
        </section>
    );
}

export default Testimonials;