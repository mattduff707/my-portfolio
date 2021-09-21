import React from 'react';

const Details = ({ className, style }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      role="img"
      width="20px"
      height="20px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      style={style}
    >
      <path
        fill="url(#grad)"
        d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM19 22H9a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
        className="clr-i-solid clr-i-solid-path-1"
      />

      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: ' #fa709a', stopOpacity: '1' }} />
          <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: '1' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Details;
