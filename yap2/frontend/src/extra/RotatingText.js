import React, { useState, useEffect } from 'react';

const RotatingText = ({ words, interval = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordChangeInterval); // Clean up the interval on unmount
  }, [words.length, interval]);

  return (
    <span>{words[currentWordIndex]}</span>
  );
};

export default RotatingText;
