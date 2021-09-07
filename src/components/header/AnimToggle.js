import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AnimationIcon } from '../../icons/animation.svg';
import CoolToggle from '../CoolToggle';
import VisuallyHidden from '../VisuallyHidden';

const AnimToggle = ({ isAnimated, handleToggle, className }) => {
  return (
    <Wrapper aria-live="polite" className={className}>
      <label onClick={handleToggle} htmlFor="animation-toggle">
        <AnimationIcon />
      </label>
      <HiddenCheckbox onClick={handleToggle} tabIndex="-1" checked={isAnimated} type="checkbox" id="animation-toggle" />

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
`;
const HiddenCheckbox = styled.input`
  position: absolute;
  visibility: hidden;
`;
const AnimationToggler = styled(CoolToggle)`
  /* border-radius: 50%; */
  padding: 5px;
`;

export default AnimToggle;
