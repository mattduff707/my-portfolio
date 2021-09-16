import React from 'react';

const Animation = ({ className, style }) => {
  return (
    <svg
      className={className}
      fill="url(#grad)"
      aria-hidden="true"
      role="img"
      width="30px"
      height="30px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={style}
    >
      <path d="M4 2c-1.11 0-2 .89-2 2v10h2V4h10V2H4m4 4c-1.11 0-2 .89-2 2v10h2V8h10V6H8m4 4c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-8c0-1.11-.89-2-2-2h-8z" />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: ' #fa709a', stopOpacity: '1' }} />
          <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: '1' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Animation;
