import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../../animation/AnimatedWrapper";
import PageHeader from "../../PageHeader";
import CoolButton from "../../CoolButton";
import { Link } from "react-router-dom";
import DetailCard from "./projectDetails/DetailCard";
import Connector from "../../Connector";

const ProjectDetails = ({ title, slides }) => {
  return (
    <FlexWrapper>
      <AnimatedWrapper bottom>
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
              return (
                <DetailCard
                  image={slide.image}
                  imageAlt={slide.imageAlt}
                  title={slide.title}
                  text={slide.text}
                />
              );
            }
            return (
              <>
                <DetailCard
                  image={slide.image}
                  imageAlt={slide.imageAlt}
                  title={slide.title}
                  text={slide.text}
                />
                <MobileConnector vertical />
                <DesktopConnector />
              </>
            );
          })}
        </DetailsContainer>
      </AnimatedWrapper>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
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
  padding: 40px 10px;
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const DesktopConnector = styled(Connector)`
  align-self: center;
  @media (max-width: 1439px) {
    display: none;
  }
  @media (max-width: 1700px) {
    width: 30px;
  }
`;
const MobileConnector = styled(Connector)`
  @media (min-width: 1440px) {
    display: none;
  }
`;

export default ProjectDetails;
