import React from 'react';
import styled from 'styled-components';
import Heading from '../../Heading';
import { ReactComponent as SmileIcon } from '../../../icons/smile.svg';

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  /* border: 2px solid red; */
  /* border: 6px solid var(--color-inset);
  border-right: 6px solid var(--color-inset-light);
  border-bottom: 6px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow); */
  /* border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow); */
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  @media (min-width: 1025px) {
    padding-top: 30px;
    max-width: 1100px;
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    max-width: 1300px;
  }
`;

const DescriptionWrapper = styled.div`
  background-color: var(--color-primary);
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionText = styled.p`
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  padding: 10px;
  font-size: 0.9rem;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px 20px 20px;
  }
`;
const StyledSmile = styled(SmileIcon)`
  margin-top: -20px;
  margin-left: 5px;
  transform: translateY(8px);
  /* display: block; */
`;

const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionWrapper>
        <Heading>Matthew Duffy</Heading>
        <DescriptionText>
          A fresh new face to the world of Web Development. I am a self-taught developer who loves to build apps that
          fulfill a meaningful purpose. I am a patient learner, motivated collaborator, dedicated employee, and gradient
          aficionado. Currently, I operate in the front-end with a desire to transition into full-stack development down
          the line. I primarily use React due to its popularity and massive catalog of educational material. Enjoy your
          stay!
          <StyledSmile />
        </DescriptionText>
      </DescriptionWrapper>
    </DescriptionContainer>
  );
};

export default Description;
