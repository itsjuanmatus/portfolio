import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX + 5;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

 

  if (!isLoaded) {
    return <></>;
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          // add a small delay to the exit animation
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div className="overflow-x-hidden md:overflow-hidden h-screen bg-black flex flex-col">
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
