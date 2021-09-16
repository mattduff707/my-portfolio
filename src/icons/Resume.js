import React from 'react';

const Resume = ({ className, style }) => {
  return (
    <svg
      className={className}
      fill="url(#grad)"
      aria-hidden="true"
      role="img"
      width="18px"
      height="18px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      style={style}
    >
      <path d="M25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z" />
      <path d="M10 22h12v2H10z" />
      <path d="M10 16h12v2H10z" />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: ' #fa709a', stopOpacity: '1' }} />
          <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: '1' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Resume;
