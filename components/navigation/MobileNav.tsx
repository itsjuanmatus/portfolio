import React from 'react';
import { useCycle } from 'framer-motion';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import { MainContext } from '../../pages';

export default function MobileNav() {
  const { state, actions } = useContext(MainContext);
  const [open, cycleOpen] = useCycle(false, true);

  const items = [
    {
      name: 'home',
      action: actions.goToHome,
    },
    {
      name: 'about',
      action: actions.goToAbout,
    },
    {
      name: 'experience',
      action: actions.goToExperience,
    },
    {
      name: 'contact',
      action: actions.goToContact,
    },
  ];

  return (
    <div
      className={
        'absolute top-5 flex items-center justify-between w-full px-[7.5%] md:hidden ' +
        (state.showing === 'home' ? 'hidden' : 'block')
      }
    >
      <Hamburger open={open} cycleOpen={cycleOpen} />
      <h2 className="text-white font-bold ">Juan Matus</h2>
      <Sidebar open={open} items={items} cycleOpen={cycleOpen} />
    </div>
  );
}
