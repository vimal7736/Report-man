import React, { useEffect, useRef } from 'react';

export const CircularProgressBar = ({ progress }) => {
  const meterRef = useRef(null);

  useEffect(() => {
    const meter = meterRef.current;
    const dashArray = 2 * Math.PI * 40; // Circumference of the circle

    const progAnimation = () => {
      const keyframes = [
        { strokeDashoffset: dashArray },
        { strokeDashoffset: dashArray * (1 - progress / 100) },
        { strokeDashoffset: 0 },
      ];

      const timing = {
        duration: 10000 * (progress / 100),
        iterations: 1,
        fill: 'forwards',
      };

      meter.animate(keyframes, timing);
    };

    const glowAnimation = () => {
      const keyframes = [
        { filter: 'drop-shadow(0 0 3px #ff7a59)' },
      ];

      const timing = {
        duration: 1000,
        delay: 9000 * (progress / 100),
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards',
      };

      meter.animate(keyframes, timing);
    };

    progAnimation();
    glowAnimation();
  }, [progress]);

  return (
    <section>
      <svg viewBox="0 0 100 100">
        <circle className="bg" cx="50" cy="50" r="40" />
        <circle ref={meterRef} className="meter" cx="50" cy="50" r="40" />
      </svg>
    </section>
  );
};

