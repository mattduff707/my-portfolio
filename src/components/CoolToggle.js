import React from "react";
import styled from "styled-components";

const CoolToggle = ({
  children,
  className,
  handleClick,
  margin,
  padding,
  width,
  fontSize,
  isActive,
  labelFor,
}) => {
  return (
    <Btn
      width={width}
      margin={margin}
      padding={padding}
      onClick={handleClick}
      isActive={isActive}
    >
      <Shadow isActive={isActive}></Shadow>
      <Edge></Edge>
      <Front
        isActive={isActive}
        padding={padding}
        fontSize={fontSize}
        className={className}
        htmlFor={labelFor}
      >
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
  transform: ${(props) =>
    props.isActive ? "translateY(1px)" : "translateY(4px)"};
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
    hsl(226 45% 27%) 8%,
    hsl(226 45% 27%) 92%,
    hsl(226 45% 11%) 100%
  );
`;

const Front = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  border: 2px solid;
  border-color: ${(props) =>
    props.isActive ? "var(--color-text-secondary)" : "var(--color-secondary)"};
  border-radius: 12px;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) =>
    props.isActive ? "var(--color-text-primary)" : "var(--color-alternative)"};
  background-color: var(--color-primary);
  will-change: transform;
  transform: ${(props) =>
    props.isActive ? "translateY(-2px);" : "translateY(-4px)"};
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1),
    color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
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
  width: ${(props) => props.width};
  ${(props) => {
    if (!props.isActive) {
      return `
  &:hover ${Front} {
    transform: translateY(-6px);
    color: var(--color-text-secondary);

    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
      border-color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
 `;
    }
  }}
`;

export default CoolToggle;
