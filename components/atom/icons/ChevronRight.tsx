import React from 'react';

export default function ChevronRight({
  size = 19,
  color = 'white',
  className = '',
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.9}
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L9 9.5L1 17.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
