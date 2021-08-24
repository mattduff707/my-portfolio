import React from 'react';
import styled from 'styled-components';
import CoolButton from '../../CoolButton';
import { ReactComponent as BackArrowIcon } from '../../../icons/backArrow.svg';
import { ReactComponent as NextArrowIcon } from '../../../icons/nextArrow.svg';
const Controller = ({ aboutData, handleIncrement, handleDecrement, handleDotClick, activeIndex }) => {
  return (
    <ControlContainer aria-controls="carousel" aria-label="carousel buttons">
      <ArrowButton ariaLabel="previous slide" handleClick={handleDecrement}>
        <BackArrowIcon style={{ display: 'block' }} />
      </ArrowButton>
      <DotContainer>
        {aboutData.map((item, index) => {
          return <Dot key={index} handleDotClick={handleDotClick} isActive={index === activeIndex} />;
        })}
      </DotContainer>
      <ArrowButton ariaLabel="next slide" handleClick={handleIncrement}>
        <NextArrowIcon style={{ display: 'block' }} />
      </ArrowButton>
    </ControlContainer>
  );
};
const ControlContainer = styled.fieldset`
  width: 100%;
  border: none;
  border-top: 2px solid var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  margin-top: auto;
`;
const ArrowButton = styled(CoolButton)`
  /* padding: 5px 10px; */
  &:hover > svg {
    transition: fill 0.3s ease;
    fill: var(--color-text-primary);
  }
`;
// const Icon = styled.i`
//   font-size: 48px;
// `;
const DotContainer = styled.div`
  /* border: 2px solid red; */
  /* width: 100px; */
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dot = styled.span`
  width: 25px;
  height: 25px;
  border: 3px solid var(--color-secondary);
  border-radius: 50%;
  margin: 0px 5px;
  background: ${(props) => (props.isActive ? ' linear-gradient(140deg, #fa709a 0%, #fee140 100%)' : 'none')};
`;

export default Controller;
