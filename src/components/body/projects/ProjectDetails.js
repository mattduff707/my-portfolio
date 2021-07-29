import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../../animation/AnimatedWrapper";
import PageHeader from "../../PageHeader";
import CoolButton from "../../CoolButton";
import { Link } from "react-router-dom";
import DetailCard from "./projectDetails/DetailCard";

const ProjectDetails = ({ title, slides }) => {
  return (
    <AnimatedWrapper>
      <ContentContainer>
        <PageHeader title={title}>Project Details</PageHeader>
        <BtnLinkWrap to="/projects">
          <StyledCoolButton padding="5px 10px" fontSize="1.2rem">
            <Icon className="fas fa-arrow-left"></Icon>
            <ButtonText>Back to Projects</ButtonText>
          </StyledCoolButton>
        </BtnLinkWrap>
        <DetailsContainer>
          {slides.map((slide, index, arr) => {
            const lastSlideIndex = arr.length - 1;
            if (index === lastSlideIndex) {
              return <DetailCard image={slide.image} imageAlt={slide.imageAlt} title={slide.title} text={slide.text} />;
            }
            return (
              <>
                <DetailCard image={slide.image} imageAlt={slide.imageAlt} title={slide.title} text={slide.text} />
              </>
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
  box-shadow: inset 0px 0px 4px var(--color-shadow);
  /* overflow-y: auto; */
  align-items: center;
  /* padding: 0px 20px; */
  /* border: 2px solid red; */
`;
const BtnLinkWrap = styled(Link)`
  position: fixed;
  left: 25px;
  top: 25px;
  @media (max-width: 500px) {
    top: 20px;
    left: 8px;
  }
`;
const StyledCoolButton = styled(CoolButton)`
  display: flex;
`;
const ButtonText = styled.p`
  @media (max-width: 768px) {
    display: none;
  } ;
`;
const Icon = styled.i`
  padding-right: 5px;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 1.8rem;
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
  padding: 20px 5px;
  @media (min-width: 768px) {
    padding: 20px 0px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: stretch;
    padding: 20px 10px;
  }
`;

export default ProjectDetails;
