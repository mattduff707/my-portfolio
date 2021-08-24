import React from 'react';
import Heading from '../../Heading';
import styled from 'styled-components';
import Controller from './Controller';

const AboutContent = ({ aboutData, title, content, handleIncrement, handleDecrement, handleDotClick, activeIndex }) => {
  return (
    <TextContainer aria-labelledby="carouselheading">
      <Heading id="carouselheading" topShadow>
        {title}
      </Heading>
      <OverflowContainer>
        <Text>{content}</Text>
      </OverflowContainer>
      <Controller
        aria-controls="carousel"
        aboutData={aboutData}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDotClick={handleDotClick}
        activeIndex={activeIndex}
      />
    </TextContainer>
  );
};

const OverflowContainer = styled.div`
  overflow-y: auto;
  padding: 0px 0px 10px 0px;
  @media (max-width: 1025px) {
    padding: 10px 10px;
  }
`;
const TextContainer = styled.article`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);

  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1025px) {
    width: 50%;
    margin-left: 0px;
    border-radius: 0px 20px 20px 0px;
    border-left: 0px;
  }
  @media (max-width: 1025px) {
    padding: 3px 0px 0px 0px;
  }
`;

const Text = styled.p`
  text-indent: 30px;
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  font-size: 0.9rem;
  line-height: 30px;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px 15px;
  }
`;

export default AboutContent;
