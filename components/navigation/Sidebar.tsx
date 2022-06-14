import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import Link from 'next/link';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function Sidebar({ open, items, cycleOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            backgroundColor: '#000',
            height: '100vh',
            overflow: 'hidden',
            width: '100%',
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
            },
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.5, ease: 'easeInOut' },
          }}
          className="absolute top-[10vh] bg-secondary-light w-[100vw] h-sb ease-in-out z-20 left-0"
        >
          <motion.ul
            className="flex flex-col items-center justify-center py-5"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {items.map(({ name, action }, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
                className="text-white text-center text-2xl font-bold py-5"
                onClick={() => {
                  action();
                  cycleOpen();
                }}
              >
                {name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
