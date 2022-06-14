import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useMemo } from 'react';

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};

export default function Hamburger({ open, cycleOpen }) {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useEffect(() => {
    if (open) {
      // @ts-ignore
      document.querySelector('.great-parent').style['overflow-y'] = 'hidden';
    } else {
      // @ts-ignore
      document.querySelector('.great-parent').style['overflow-y'] = 'auto';
    }
  }, [open]);

  useMemo(async () => {
    if (open) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  }, [open]);

  const onClick = async () => {
    cycleOpen();
  };

  return (
    <button onClick={onClick} className="z-20">
      <svg width="34" height="34" viewBox="0 0 24 24">
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
      </svg>
    </button>
  );
}
