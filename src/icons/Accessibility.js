import React from 'react';

const Accessibility = ({ className, style }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      role="img"
      width="24px"
      height="24px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      style={style}
    >
      <path
        fill="url(#grad)"
        d="M23 14v-2H9v2h5v2.734l-3.868 6.77l1.736.992L15.58 18h.84l3.712 6.496l1.736-.992L18 16.734V14h5z"
      />
      <circle fill="url(#grad)" cx="16" cy="9" r="2" />
      <path
        fill="url(#grad)"
        d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4z"
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

export default Accessibility;
