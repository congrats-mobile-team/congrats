import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [
    'ethan.jpg',
    'daniel.jpg',
    'gary.jpg',
    'kryzl.jpg'
  ];

  const shapes = ['circle', 'rounded', 'hexagon'];

  const getRandomShape = () => {
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  return (
    <div className="App">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <h1>Congrats Mobile App Development Dept.</h1>
      {images.map((image, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={`Random ${index + 1}`}
          className={`image ${getRandomShape()} image${index + 1}`}
        />
      ))}
    </div>
  );
}

export default App
