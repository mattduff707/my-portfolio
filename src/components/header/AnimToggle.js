import React from 'react';
import styled from 'styled-components';
import AnimationIcon from '../../icons/Animation';
import CoolToggle from '../CoolToggle';
import VisuallyHidden from '../VisuallyHidden';

const AnimToggle = ({ isAnimated, handleToggle, className }) => {
  return (
    <Wrapper aria-live="polite" className={className}>
      <label htmlFor="animation-toggle">
        <AnimationIcon />
      </label>
      <HiddenCheckbox
        onChange={handleToggle}
        tabIndex="-1"
        checked={isAnimated}
        type="checkbox"
        id="animation-toggle"
      />

      <AnimationToggler aria-checked={isAnimated} role="checkbox" handleClick={handleToggle} isActive={isAnimated}>
        <VisuallyHidden>Toggle Animation</VisuallyHidden>
        {isAnimated ? 'On' : 'Off'}
      </AnimationToggler>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 15px 20px 0px auto;
  position: relative;
  height: 72%;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover:before {
    content: 'Animations';
    position: absolute;
    top: 50%;
    left: -200%;
    transform: translateY(-50%);
    background-color: var(--color-primary);
    /* box-shadow: var(--shadow-card); */
    border: 4px solid var(--color-secondary);
    border-right: none;
    border-radius: 20px 0px 0px 20px;
    /* padding: 5px 7px 2px; */
    padding-top: 2px;
    padding-left: 2px;
    font-family: var(--font-family-secondary);
    color: var(--color-alternative);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100px;
  }
`;
const HiddenCheckbox = styled.input`
  position: absolute;
  visibility: hidden;
`;
const AnimationToggler = styled(CoolToggle)`
  /* border-radius: 50%; */
  padding: 5px;
  width: 32px;
`;

export default AnimToggle;
