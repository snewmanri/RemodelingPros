import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The bathroom remodel exceeded our expectations. Professional work and attention to detail throughout the project.",
    location: "San Francisco"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Outstanding service! They completed our master bathroom renovation on time and within budget. Highly recommended!",
    location: "Bay Area"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Transformed our outdated bathroom into a modern spa-like retreat. Couldn't be happier with the results.",
    location: "Oakland"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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
        <div className="testimonial-card">
          <blockquote>{testimonials[currentIndex].text}</blockquote>
          <div className="testimonial-author">
            <span className="author-name">{testimonials[currentIndex].name}</span>
            <span className="author-location">{testimonials[currentIndex].location}</span>
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