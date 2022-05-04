import 'tailwindcss/tailwind.css';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="overflow-x-hidden dark:bg-gray-background lg:flex min-h-screen m-auto w-full">
        <Sidebar />
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
