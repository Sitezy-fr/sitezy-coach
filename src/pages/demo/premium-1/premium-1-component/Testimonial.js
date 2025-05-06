import React, { useState } from 'react';
import avatar1 from '../premium-1-images/avatar1.webp';
import avatar2 from '../premium-1-images/avatar2.webp';
import avatar3 from '../premium-1-images/avatar3.webp';

const testimonials = [
    {
        name: "Jean",
        date: "12 Janvier 2024",
        testimonial: "Une excellente coach qui m’a aidé à atteindre mes objectifs de remise en forme. Très professionnelle et à l’écoute !",
        photo: avatar1
    },
    {
        name: "Marie",
        date: "5 Février 2024",
        testimonial: "Des entraînements motivants et efficaces. Je recommande fortement cette coach !",
        photo: avatar2
    },
    {
        name: "Louisa",
        date: "18 Mars 2024",
        testimonial: "Un suivi régulier et des programmes variés, parfait pour atteindre ses objectifs !",
        photo: avatar3
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const { name, date, testimonial, photo } = testimonials[currentIndex];

    return (
        <section id="testimonials-carousel" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className='title'>
                <h2>Vos Témoignages</h2>
                <p className="sub-title">Vos retours sont très importants pour moi. Voici un aperçu des clients que j'ai accompagné récemment.</p>
            </div>
            <div className="testimonial-card">
                <img src={photo} alt={`${name}`} className="testimonial-photo" />
                <div className="testimonial-content">
                    <h3>{name}</h3>
                    <p className="date">{date}</p>
                    <p className="testimonial">{testimonial}</p>
                </div>
                <div className="dots carousel-controls">
                    <button className="arrow" onClick={prevTestimonial}>&lt;</button>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                     <button className="arrow" onClick={nextTestimonial}>&gt;</button>
                </div>
            </div>
            
        </section>
    );
};

export default Testimonial;
