import React from 'react';

const Email = ({ className, style }) => {
  return (
    <svg
      className={className}
      fill="url(#grad)"
      aria-hidden="true"
      role="img"
      width="20px"
      height="20px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      style={style}
    >
      <path className="clr-i-solid clr-i-solid-path-1" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39z" />
      <path
        className="clr-i-solid clr-i-solid-path-2"
        d="M33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61zM5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21z"
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

export default Email;
