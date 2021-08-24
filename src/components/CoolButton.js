import React from 'react';
import styled from 'styled-components';

const CoolButton = ({ children, className, handleClick, margin, padding, fontSize, tabIndex, ariaLabel }) => {
  return (
    <Btn aria-label={ariaLabel} tabIndex={tabIndex} margin={margin} padding={padding} onClick={handleClick}>
      <Shadow></Shadow>
      <Edge></Edge>
      <Front padding={padding} fontSize={fontSize} className={className}>
        {children}
      </Front>
    </Btn>
  );
};

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 102%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.15);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(226 45% 11%) 0%,
    hsl(226 45% 27%) 12%,
    hsl(226 45% 27%) 88%,
    hsl(226 45% 11%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  border: 2px solid var(--color-secondary);
  border-radius: 12px;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: var(--color-alternative);
  background-color: hsl(226, 45%, 16%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1), color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
    border 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
`;
const Btn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  margin: ${(props) => props.margin};

  &:hover ${Front} {
    transform: translateY(-6px);
    color: var(--color-text-primary);
    /* border-color: var(--color-text-secondary); */
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5), border-color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
export default CoolButton;
