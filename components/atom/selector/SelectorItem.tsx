import React, { useEffect } from 'react';
import useSound from 'use-sound';
import { motion } from 'framer-motion';

export default function SelectorItem({
  text = '',
  selected = false,
  onClick = () => {},
}) {
  useEffect(() => {
    // select all items with selector-item class
    const selectorItems = document.getElementsByClassName('selector-item');
    // make height of all items equal to the height of the largest item
    const largestItem = Math.max(
      ...Array.from(selectorItems).map((item) => item.clientHeight),
    );
    Array.from(selectorItems).forEach(
      (item: HTMLElement) => (item.style.height = `${largestItem}px`),
    );
  }, []);

  const [playActive] = useSound('/sounds/pop-down.mp3', { volume: 0.25 });
  const [playOn] = useSound('/sounds/pop-up-on.mp3', { volume: 0.25 });
  const [playOff] = useSound('/sounds/pop-up-off.mp3', { volume: 0.25 });

  return (
    <motion.div
      animate={{
        scale: selected ? [1.1, 1] : 1,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      onClick={onClick}
      onTouchStart={() => playActive()}
      onTouchEnd={() => selected ? playOff() : playOn()}
      onMouseDown={() => playActive()}
      onMouseUp={() => {
        selected ? playOff() : playOn();
      }}
      className={`w-[4rem] flex items-center justify-center 
      cursor-pointer p-[4px] selector-item rounded-md 
      ${selected ? 'bg-white' : 'bg-[#7B7B7B]'}`}
    >
      <p className="text-black text-center">{text}</p>
    </motion.div>
  );
}
