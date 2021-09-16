import React from 'react';
import styled from 'styled-components';
import AnimatedWrapper from '../../animation/AnimatedWrapper';
import PageHeader from '../../PageHeader';
import CoolButton from '../../CoolButton';
import { Link } from 'react-router-dom';
import DetailCard from './projectDetails/DetailCard';
import BackArrowIcon from '../../../icons/BackArrow';

const ProjectDetails = ({ title, slides, isAnimated }) => {
  return (
    <AnimatedWrapper isAnimated={isAnimated}>
      <ContentContainer>
        <PageHeader title={title}>Project Details</PageHeader>
        <BtnLinkWrap to="/projects">
          <StyledCoolButton fontSize="1.2rem">
            <BackArrowIcon style={{ display: 'block', width: '40px', height: '40px' }}></BackArrowIcon>
            <ButtonText>Back to Projects</ButtonText>
          </StyledCoolButton>
        </BtnLinkWrap>
        <DetailsContainer>
          {slides.map((slide, index, arr) => {
            return (
              <DetailCard
                key={slide.title}
                image={slide.image}
                imageAlt={slide.imageAlt}
                title={slide.title}
                text={slide.text}
              />
            );
          })}
        </DetailsContainer>
      </ContentContainer>
    </AnimatedWrapper>
  );
};
// const FlexWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   height: 100%;
//   width: 100%;
// `;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1800px;
  width: 100%;
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--shadow-color);
  /* overflow-y: auto; */
  align-items: center;
  position: relative;
  /* padding: 0px 20px; */
  /* border: 2px solid red; */
`;
const BtnLinkWrap = styled(Link)`
  position: absolute;

  padding: 5px 10px;
  background-color: var(--color-primary);
  border-right: 8px solid var(--color-inset);
  border-bottom: 8px solid var(--color-inset);
  left: -8px;
  top: -8px;
  box-shadow: 5px 10px 3px -8px var(--shadow-color);
  border-radius: 0px 0px 15px 0px;
  /* @media (max-width: 500px) {
    top: 20px;
    left: 8px;
  } */
`;
const StyledCoolButton = styled(CoolButton)`
  display: flex;
  align-items: center;
  padding-right: 10px;
  &:hover > svg {
    transition: fill 0.3s ease;
    fill: var(--color-text-primary);
  }
  @media (max-width: 1025px) {
    padding-right: 0px;
  } ;
`;
const ButtonText = styled.p`
  @media (max-width: 1025px) {
    display: none;
  } ;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: red solid 2px; */
  width: 100%;
  max-width: 1800px;
  padding: 20px 10px;
  @media (min-width: 1025px) {
    padding: 20px 0px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: stretch;
    padding: 20px 10px;
  }
`;

export default ProjectDetails;
