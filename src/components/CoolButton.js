import React from "react";
import styled from "styled-components";

const CoolButton = ({
  children,
  className,
  handleClick,
  margin,
  padding,
  fontSize,
}) => {
  return (
    <Btn margin={margin} padding={padding} onClick={handleClick}>
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
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(4px);
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
    hsl(226 45% 16%) 0%,
    hsl(226 45% 32%) 8%,
    hsl(226 45% 32%) 92%,
    hsl(226 45% 16%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  border: 2px solid var(--color-secondary);
  border-radius: 12px;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};

  background-color: var(--color-primary);
  //background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;
const Btn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  margin: ${(props) => props.margin};
  color: var(--color-alternative);

  &:hover {
    filter: brightness(110%);
    color: var(--color-text-secondary);
    transition: color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:hover ${Front} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  /* &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  } */
  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
export default CoolButton;
