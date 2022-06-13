import Head from 'next/head';
import { useEffect, useReducer, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Home() {
  const initialState = {
    showing: 'home',
  };

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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Head>
        <title>Juan Matus</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col items-center h-screen">
        <Navbar state={state} actions={actions} />
      </main>
    </div>
  );
}
