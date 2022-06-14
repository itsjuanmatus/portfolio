import Head from 'next/head';
import { useEffect, useReducer, useRef, createContext } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import useWindowResize from '../hooks/useWindowResize';
import MobileNav from '../components/navigation/MobileNav';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import { sections } from '../components/animations/sections';
import DownloadCV from '../components/atom/DownloadCV';

export const MainContext = createContext(
  {} as {
    state: any;
    actions: {
      goToHome: () => void;
      goToAbout: () => void;
      goToExperience: () => void;
      goToContact: () => void;
    };
  },
);

export default function Home() {
  const initialState = {
    showing: 'home',
  };

  const size = useWindowResize();
  let isMobile = size.width < 768;

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'goToAbout':
        return {
          ...state,
          showing: 'about',
        };
      case 'goToHome':
        return {
          ...state,
          showing: 'home',
        };
      case 'goToExperience':
        return {
          ...state,
          showing: 'experience',
        };
      case 'goToContact':
        return {
          ...state,
          showing: 'contact',
        };
      default:
        return state;
    }
  }, initialState);

  const actions = {
    // page sections
    goToAbout: () => dispatch({ type: 'goToAbout' }),
    goToHome: () => dispatch({ type: 'goToHome' }),
    goToExperience: () => dispatch({ type: 'goToExperience' }),
    goToContact: () => dispatch({ type: 'goToContact' }),
  };

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <MainContext.Provider value={{ state, actions }}>
      <div
        className="flex flex-col items-center h-screen bg-black relative"
        onClick={() => {
          if (state.showing === 'home') {
            isMobile && actions.goToAbout();
          }
        }}
      >
        <Head>
          <title>Juan Matus</title>
          <link rel="icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <main className="flex flex-col items-center h-screen">
          <Navbar state={state} actions={actions} />
          <MobileNav />
        </main>
        {state.showing === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: 'easeInOut',
              },
            }}
            className="-mt-[30vh] hidden md:flex"
          >
            <DownloadCV />
          </motion.div>
        )}
        {state.showing === 'about' && (
          <motion.div
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={sections}
          >
            <About />
          </motion.div>
        )}
        {state.showing === 'experience' && (
          <motion.div
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={sections}
          >
            <Experience />
          </motion.div>
        )}
        {state.showing === 'contact' && (
          <motion.div
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={sections}
          >
            <Contact />
          </motion.div>
        )}
      </div>
    </MainContext.Provider>
  );
}
