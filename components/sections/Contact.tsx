import React from 'react';
import Title from '../atom/Title';
import { social } from '../../data/social';

export default function Contact() {
  return (
    <div className="flex flex-col top-[17vh] absolute">
      <Title title="contact" />
      <div className="flex flex-col items-center gap-y-5 text-white font-extralight mt-5">
        <p>Find me on:</p>
        <div className="grid grid-cols-2 place-content-center md:flex gap-5 items-center mx-auto">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-md underline underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
