import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'section1', title: 'Section 1', content: 'Content for section 1' },
  { id: 'section2', title: 'Section 2', content: 'Content for section 2' },
  { id: 'section3', title: 'Section 3', content: 'Content for section 3' },
  // Add more sections here
];

const PageWithControlledLottieScroll = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isScrollAllowed = useRef(true); // Prevents manual scroll before animation done

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    const sectionId = sections[index].id;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(index);
    }
  };

  // Lock manual scroll via wheel / touch when scroll not allowed
  useEffect(() => {
    const handleWheel = (e) => {
      if(!isScrollAllowed.current) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });

    const handleTouch = (e) => {
      if(!isScrollAllowed.current) {
        e.preventDefault();
      }
    };
    window.addEventListener('touchmove', handleTouch, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  // Called when Lottie animation completes in current section
  const onAnimationComplete = () => {
    // Enable scrolling only after animation finishes
    isScrollAllowed.current = true;

    // Scroll to next section automatically if exists
    if (currentSectionIndex + 1 < sections.length) {
      scrollToSection(currentSectionIndex + 1);
    }
  };

  // On mount, scroll to first section and lock scroll until animation complete
  useEffect(() => {
    scrollToSection(0);
    isScrollAllowed.current = false;
  }, []);

  return (
    <div>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          style={{ minHeight: '100vh', padding: 20, position: 'relative' }}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>

          {/* Render LottieAnimation only for current section */}
          {index === currentSectionIndex && (
            <LottieAnimation onAnimationComplete={onAnimationComplete} />
          )}
        </section>
      ))}
    </div>
  );
};

export default PageWithControlledLottieScroll;
