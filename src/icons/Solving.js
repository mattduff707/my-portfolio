import React from 'react';

const Solving = ({ className, style }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      role="img"
      width="24px"
      height="24px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1200 1200"
      style={style}
    >
      <path
        fill="url(#grad)"
        d="M567.663 0v190.423h64.679V0h-64.685h.006zm-264.11 57.225l-52.992 37.103l109.203 155.946l52.963-37.104L303.553 57.225zm592.886 0L787.268 213.171l52.971 37.104L949.44 94.328l-52.992-37.103h-.009zm-296.45 185.299c-158.227 0-286.493 96.083-286.493 214.625l162.772 492.948h247.47l162.758-492.948c0-118.54-128.258-214.625-286.492-214.625h-.015zM85.465 299.673l-22.099 60.814l178.849 65.114l22.181-60.785l-178.935-65.143h.004zm1029.062 0l-178.936 65.148l22.106 60.792l178.936-65.125l-22.106-60.815zM255.756 577.681l-183.9 49.326l16.686 62.431l183.9-49.255l-16.683-62.502h-.003zm688.48 0l-16.674 62.501l183.9 49.247l16.674-62.432l-183.9-49.318v.002zM472.66 986.032v85.686h254.687v-85.673H472.661l-.001-.013zm0 128.282V1200h254.687v-85.672H472.661l-.001-.014z"
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

export default Solving;
