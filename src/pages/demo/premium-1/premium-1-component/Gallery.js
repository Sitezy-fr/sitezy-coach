import React from 'react';
import lea1 from '../premium-1-images/lea-1.jpg';
import lea2 from '../premium-1-images/lea-2.jpg';
import lea3 from '../premium-1-images/lea-3.jpg';
import lea4 from '../premium-1-images/lea-4.jpg';

const Gallery = () => {
  const images = [
    { src: lea1, alt: '1', overlayText: 'MOTIVATION' },
    { src: lea2, alt: '2', overlayText: 'NUTRITION' },
    { src: lea3, alt: '3', overlayText: 'CONSEILS' },
    { src: lea4, alt: '4', overlayText: 'PREPARATION' },
  ];

  return (
    <section id='image-gallery' className='image-gallery' >
      {images.map((image, index) => (
        <div className="image-item" data-aos="fade-up" key={index}>
          <div className="overlay">{image.overlayText}</div>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
