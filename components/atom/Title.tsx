import React from 'react';

export default function Title({ title = '' }) {
  return (
    <h1 className="text-white text-[2rem] font-extrabold text-center">{title}</h1>
  );
}
