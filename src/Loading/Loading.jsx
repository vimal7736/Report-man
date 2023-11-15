import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Make sure to create a corresponding CSS file

const Loading = () => {
  const [dots, setDots] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        const colors = ['#3498db', '#e74c3c', '#2ecc71']; // Example colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return [...prevDots, { color: randomColor, id: prevDots.length + 1 }];
      });

      // Simulate loading progress from 1 to 100 in 2 seconds
      setProgress((prevProgress) => {
        const increment = 100 / (2 * 1000 / 500); // Adjust the time and interval here
        return prevProgress + increment;
      });

      // Stop the interval when reaching 100%
      if (progress >= 100) {
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading-screen">
      <h1 className="title">Ichef</h1>
      <div className="dots-container">
        {dots.map((dot) => (
          <div key={dot.id} className="dot" style={{ backgroundColor: dot.color }}></div>
        ))}
      </div>
      {/* <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div> */}
      <p className="progress-text">
        {/* {Math.round(progress)}% */}
         {/* Loaded */}
         </p>
    </div>
  );
};

export default Loading;
