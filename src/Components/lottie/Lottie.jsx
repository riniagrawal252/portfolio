import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the animation data (assuming it's a JavaScript object)
    import('../mydb/db.js')
      .then(module => {
        setAnimationData(module.default); // assuming the exported data is the animation JSON
        console.log('Animation Data Loaded:', module.default);  // Log animation data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading animation data:", error);  // Log error if data fails to load
        setLoading(false);
      });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Log loading state and animation data check
  useEffect(() => {
    console.log('Loading State:', loading);
    if (animationData) {
      console.log('Animation Data is available:', animationData);
    }
  }, [loading, animationData]);

  // Loading message before data is fetched
  if (loading) {
    return <div>Loading animation...</div>;
  }

  return (
    <div>
      {animationData ? (
        <Lottie options={defaultOptions} height={150} width={150} />
      ) : (
        <div>Animation data not loaded properly.</div>
      )}
    </div>
  );
};

export default LottieAnimation;
