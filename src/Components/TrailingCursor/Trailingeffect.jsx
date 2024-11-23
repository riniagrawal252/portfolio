import React, { useEffect, useState } from "react";
import './Trailingcursor.css'; // Ensure you have appropriate CSS for the trail effect

const TrailingCursor = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newTrail = {
        id: Date.now() + Math.random(), // Unique key
        x: event.clientX,
        y: event.clientY,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`, // Random color
      };

      setTrails((prevTrails) => [...prevTrails, newTrail]);

      // Remove trail after animation duration
      setTimeout(() => {
        setTrails((prevTrails) => prevTrails.filter((trail) => trail.id !== newTrail.id));
      }, 1000); // Adjust timing to match animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="trail-area">
      {trails.map((trail) => (
        <div
          key={trail.id} // Use the unique id
          className="trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            background: trail.color,
          }}
        />
      ))}
    </div>
  );
};

export default TrailingCursor;
