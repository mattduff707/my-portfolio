import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  /* border: 2px red solid; */
  padding: 0px 30px 0px 30px;
  border-right: 2px solid var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
  @media (max-width: 1024px) {
    border-right: none;
    padding-top: 10px;
    padding-bottom: 10px;
    /* border-bottom: 2px solid var(--color-secondary); */
  }
`;
const Name = styled.h1`
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0px 0px 5px 0px;
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  color: var(--color-alternative);
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

const Title = () => {
  return (
    <StyledContainer>
      <Name>Matthew Duffy</Name>
      <Subtitle>Web Developer</Subtitle>
    </StyledContainer>
  );
};

export default Title;
