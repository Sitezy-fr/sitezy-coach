import React from 'react';
import Slider from 'react-slick';
import insta1 from '../premium-1-images/insta-1.jpg';
import insta2 from '../premium-1-images/insta-2.jpg';
import insta3 from '../premium-1-images/insta-3.jpg';
import insta4 from '../premium-1-images/insta-4.jpg';
import insta5 from '../premium-1-images/insta-5.jpg';
import insta6 from '../premium-1-images/insta-6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const InstagramCarousel = () => {
  const images = [
    { src: insta1, alt: 'Instagram 1', link: 'https://instagram.com/photo1' },
    { src: insta2, alt: 'Instagram 2', link: 'https://instagram.com/photo2' },
    { src: insta3, alt: 'Instagram 3', link: 'https://instagram.com/photo3' },
    { src: insta4, alt: 'Instagram 4', link: 'https://instagram.com/photo4' },
    { src: insta5, alt: 'Instagram 5', link: 'https://instagram.com/photo5' },
    { src: insta6, alt: 'Instagram 6', link: 'https://instagram.com/photo6' },
  ];

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 images when the viewport is <= 1024px
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2, // 2 images when the viewport is <= 800px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 image when the viewport is <= 480px
        },
      },
    ],
  };

  return (
    <section id="instagram-carousel">
      <a className='sub-title' href='https://instagram.com'>
        <i><FontAwesomeIcon icon={faSquareInstagram} /></i>@lea_martinez
      </a>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='image-container'>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.alt}
                className='carousel-image'
                style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </a>
            <div className='icon-container'>
              <div className="hover-icon">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowUp} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InstagramCarousel;
