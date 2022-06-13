import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ state, actions }) {
  const homeLi = useRef(null),
    aboutLi = useRef(null),
    experienceLi = useRef(null),
    contactLi = useRef(null);
  return (
    <motion.div
      animate={{
        y: state.showing === 'home' ? '35vh' : '-10vh',
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.h1
        className="text-white text-[5rem] font-bold"
        animate={{
          opacity: state.showing === 'home' ? 1 : 0,
          transition: {
            duration: 1.5,
            ease: 'easeInOut',
          },
        }}
      >
        Juan Matus
      </motion.h1>
      <motion.ul className="flex items-center gap-x-10 w-full">
        <li
          className="w-full text-white font-light text-center cursor-pointer"
          onClick={actions.goToHome}
          ref={homeLi}
        >
          home
        </li>
        <li
          className="w-full text-white font-light text-center cursor-pointer"
          onClick={actions.goToAbout}
          ref={aboutLi}
        >
          about me
        </li>
        <li
          className="w-full text-white font-light text-center cursor-pointer"
          onClick={actions.goToExperience}
          ref={experienceLi}
        >
          experience
        </li>
        <li
          className="w-full text-white font-light text-center cursor-pointer"
          onClick={actions.goToContact}
          ref={contactLi}
        >
          contact
        </li>
      </motion.ul>
      <motion.div
        className="bg-white h-[9px] w-[9px] rounded-full"
        animate={{
          // center behind first li
          x:
            state.showing === 'home'
              ? homeLi && homeLi.current
                ? homeLi.current.offsetLeft + homeLi.current.offsetWidth / 2 - 5
                : 0
              : state.showing === 'about'
              ? aboutLi && aboutLi.current
                ? aboutLi.current.offsetLeft +
                  aboutLi.current.offsetWidth / 2 -
                  5
                : 0
              : state.showing === 'experience'
              ? experienceLi && experienceLi.current
                ? experienceLi.current.offsetLeft +
                  experienceLi.current.offsetWidth / 2 -
                  5
                : 0
              : state.showing === 'contact'
              ? contactLi && contactLi.current
                ? contactLi.current.offsetLeft +
                  contactLi.current.offsetWidth / 2 -
                  5
                : 0
              : 0,

          transition: {
            duration: 1.5,
            ease: 'easeInOut',
          },
        }}
      />
    </motion.div>
  );
}
