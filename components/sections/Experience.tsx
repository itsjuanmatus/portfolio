import React from 'react';
import { experience } from '../../data/experience';
import Card from '../atom/carousel/Card';
import Icon from '../atom/icons';
import Title from '../atom/Title';
import useSound from 'use-sound';

export default function Experience() {
  const [imageOnView, setImageOnView] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const [playActive] = useSound('/sounds/pop-down.mp3', { volume: 0.25 });
  const [playOn] = useSound('/sounds/pop-up-on.mp3', { volume: 0.25 });
  const [playOff] = useSound('/sounds/pop-up-off.mp3', { volume: 0.25 });

  const prevCard = () => {
    playOff();
    if (imageOnView > 0) {
      setImageOnView(imageOnView - 1);
    } else {
      setImageOnView(experience.length - 1);
    }
  };

  const nextCard = () => {
    if (imageOnView < experience.length - 1) {
      setImageOnView(imageOnView + 1);
    } else {
      setImageOnView(0);
    }
    playOn();
  };

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 30) {
      if (imageOnView < experience.length - 1) {
        nextCard();
      }
    }

    if (touchStart - touchEnd < -30) {
      if (imageOnView > 0) {
        prevCard();
      }
    }
  }

  return (
    <div className="flex flex-col top-[17vh] absolute">
      <Title title="experience" />
      <div className="flex flex-col md:flex-row items-center md:gap-x-10 mt-8 mx-auto">
        <button onClick={prevCard} className="z-10 hidden md:flex">
          <Icon
            name="chevron-right"
            size={10}
            color="white"
            className="rotate-180"
          />
        </button>
        <div
          className="flex w-[85vw] md:w-[45vw] lg:w-[30vw] h-[60vh] md:h-[40vh] flex-nowrap transition-all duration-700 relative"
          style={{
            transform: `translateX(${imageOnView * -100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {experience.map((item, index) => (
            <div
              key={index}
              className="mx-auto"
              style={{
                opacity: imageOnView === index ? 1 : 0,
                transition: 'opacity 500ms',
                zIndex: -1,
              }}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
        <button onClick={nextCard} className="z-10 hidden md:flex">
          <Icon name="chevron-right" size={10} color="white" />
        </button>
        <div className="md:hidden flex justify-between w-[85vw] mt-5">
          <button onClick={prevCard} className="z-10">
            <Icon
              name="down-arrow"
              size={13}
              color="white"
              className="rotate-90 stroke-2"
            />
          </button>
          <button onClick={nextCard} className="z-10">
            <Icon
              name="down-arrow"
              size={13}
              color="white"
              className="-rotate-90 stroke-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
