import React from 'react';

const NextArrow = ({ className, style }) => {
  return (
    <svg
      className={className}
      fill="hsl(225, 46%, 85%)"
      aria-hidden="true"
      role="img"
      width="50px"
      height="50px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={style}
    >
      <path d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
    </svg>
  );
};

export default NextArrow;
