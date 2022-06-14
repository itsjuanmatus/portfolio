import React from 'react';

export default function DownArrow({
  size = 16,
  color = '#fff',
  style = {},
  className = '',
}) {
  return (
    <svg
      width={size}
      height={size * 1.125}
      style={style}
      className={className}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10L8 17L15 10M8 17V1V17Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
