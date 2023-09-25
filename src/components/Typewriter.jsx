import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 50); // Adjust the delay (in milliseconds) between each character here

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;