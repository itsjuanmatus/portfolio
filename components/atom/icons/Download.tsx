import React from 'react';

export default function Download({
  size = 16,
  color = 'white',
  className = '',
}) {
  return (
    <svg
      width={size * 1.25}
      height={size}
      className={className}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12L14 7H11V0H9V7H6L10 12Z" fill={color} />
      <path
        d="M18 14H2V7H0V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V7H18V14Z"
        fill={color}
      />
    </svg>
  );
}
