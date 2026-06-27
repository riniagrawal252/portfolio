import React from 'react';
import './AnimatedText.css';

// The text is now passed in as a prop
const AnimatedText = ({ text }) => {
  return (
    <div className="animated-text-container">
        <h1 className="animated-text1">{text}</h1>
        <h1 className="animated-text2">{text}</h1>
        <h1 className="animated-text1">{text}</h1>
    </div>
  );
};

export default AnimatedText;

// You would use it in another component like this:
// <AnimatedText text="Consulting, Wireframing, Analysis..." />