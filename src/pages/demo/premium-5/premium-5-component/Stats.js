import React, { useEffect, useState, useRef } from 'react';

const AnimatedStat = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  const startCounting = () => {
    let start = 0;
    const increment = endValue / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 1 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <h2 className="stat__number" ref={statRef}>
      {count}
    </h2>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__content">
        <div className="stat">
          <AnimatedStat endValue={5} duration={2000} />
          <p className="stat__text">Années d'expérience</p>
        </div>
        <div className="stat">
          <AnimatedStat endValue={50} duration={2000} />
          <p className="stat__text">Clients transformés</p>
        </div>
        <div className="stat">
          <AnimatedStat endValue={300} duration={2000} />
          <p className="stat__text">Heures de Cours collectifs</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
