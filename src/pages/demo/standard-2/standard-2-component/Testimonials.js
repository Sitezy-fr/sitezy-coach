import React from 'react';
import avatar1 from '../standard-2-images/avatar1.webp'
import avatar2 from '../standard-2-images/avatar2.webp'
import avatar3 from '../standard-2-images/avatar3.webp'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Paul',
            text: 'Grâce à Chloé, j’ai pu atteindre mes objectifs de fitness et je me sens plus en forme que jamais!',
            image: avatar1, 
        },
        {
            name: 'Marie',
            text: 'Le programme de nutrition m’a vraiment aidé à améliorer mes habitudes alimentaires. Je recommande vivement!',
            image: avatar2,
        },
        {
            name: 'Sophie',
            text: 'Les entraînements avec Chloé sont motivants et efficaces. Elle sait comment vous pousser à donner le meilleur de vous-même.',
            image: avatar3,
        },
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2 className="testimonials-title">Ce que disent mes clients&nbsp;💬</h2>
            <div className="testimonials-cards">
                {testimonials.map((testimonial, index) => (
                    <div className='card-container'>
                    <div className="testimonial-card" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
