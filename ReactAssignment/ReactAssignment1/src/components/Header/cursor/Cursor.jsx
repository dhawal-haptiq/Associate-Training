import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: 'back.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="bg-black h-8 w-8 rounded-full fixed pointer-events-none z-50 opacity-50"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
      </div>
    </div>
  );
};

export default Cursor;
