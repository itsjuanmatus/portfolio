import React from 'react';

export default function Card({
  name = '',
  position = '',
  description = [{}],
  time = '',
}) {
  return (
    <div
      className="w-[85vw] h-[60vh] md:w-[45vw] lg:w-[30vw] md:h-[40vh] bg-white rounded-md text-black flex flex-col 
            p-[1.5rem] gap-1 items-center justify-center font-light text-[0.8rem]"
    >
      <h3 className="font-bold text-[1rem]">{name}</h3>
      <p>Position: {position}</p>
      <p>{time}</p>
      <p className="font-bold">Description</p>
      <ul className="flex flex-col items-center">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
