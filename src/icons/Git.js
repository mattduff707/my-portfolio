import React from 'react';

const Git = ({ className, style }) => {
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
        d="M31.396 14.573L17.422.604a2.06 2.06 0 0 0-2.917 0l-2.896 2.901l3.682 3.677a2.444 2.444 0 0 1 2.516.589c.688.688.88 1.677.589 2.531l3.542 3.547a2.439 2.439 0 0 1 2.531.583c.964.958.964 2.51 0 3.469a2.447 2.447 0 0 1-3.464 0a2.462 2.462 0 0 1-.542-2.661l-3.318-3.302v8.703c.234.115.458.271.651.464c.953.964.953 2.51 0 3.469a2.465 2.465 0 0 1-3.479 0a2.453 2.453 0 0 1 .807-4.005v-8.786a2.587 2.587 0 0 1-.802-.536a2.442 2.442 0 0 1-.526-2.677l-3.615-3.635l-9.583 9.578a2.078 2.078 0 0 0 0 2.917l13.974 13.969a2.06 2.06 0 0 0 2.917 0l13.906-13.906a2.06 2.06 0 0 0 0-2.917z"
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

export default Git;
