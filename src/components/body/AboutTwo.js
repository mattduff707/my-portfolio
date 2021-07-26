import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import PageHeader from "../PageHeader";
import CoolButton from "../CoolButton";
// import Connector from "../Connector";
import { aboutData } from "../../constants";

const AboutTwo = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <PageHeader>About</PageHeader>
        <AboutContainer>
          <ImageContainer>
            <Image src={aboutData[0].picture} alt="1" />
          </ImageContainer>

          <TextContainer>
            <TitleWrapper>
              <Title>{aboutData[0].title}</Title>
            </TitleWrapper>
            <OverflowContainer>
              <Text>{aboutData[0].text}</Text>
            </OverflowContainer>
            <ControlContainer>
              <ArrowButton>
                <Icon className="fas fa-angle-left" />
              </ArrowButton>
              <ArrowButton>
                <Icon className="fas fa-angle-right" />
              </ArrowButton>
            </ControlContainer>
          </TextContainer>
        </AboutContainer>
      </ContentContainer>
    </Wrapper>
  );
};
const Wrapper = styled(AnimatedWrapper)`
  padding: 20px 20px;
  /* justify-content: center; */
  @media (min-width: 1025px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;
const ContentContainer = styled.section`
  /* border: 2px solid red; */
  isolation: isolate;
  /* z-index: -1; */
  width: 100%;
  max-width: 2000px;
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* @media (min-width: 1440px) {
    width: 100%;
  } */
`;
const AboutContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    max-width: 800px;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%;
    padding: 15px 20px 60px;
  }
`;

const ImageContainer = styled.div`
  width: auto;
  padding: 0px 10px 10px 10px;
  border-radius: 20px;
  /* border: 2px solid var(--color-secondary); */
  /* box-shadow: 0px 0px 8px var(--color-shadow); */
  @media (min-width: 1025px) {
    height: 100%;
    width: 50%;
    padding-right: 10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 8px 2px var(--color-shadow);
  object-fit: cover;
`;
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

  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1025px) {
    width: 50%;
  }
  @media (max-width: 1025px) {
    padding: 10px 0px 0px 0px;
  }
`;
const TitleWrapper = styled.div`
  border: 2px solid var(--color-secondary);
  padding: 10px 20px;
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 20px;
  margin-bottom: 5px;
  background-color: var(--color-primary);
`;
const Title = styled.h3`
  display: inline-block;
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--font-family-primary);
  font-size: var(--font-size-title);
`;
const Text = styled.p`
  text-indent: 30px;
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  font-size: 0.9rem;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;
const ControlContainer = styled.div`
  width: 100%;
  border-top: 2px solid var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  margin-top: auto;
`;
const ArrowButton = styled(CoolButton)`
  padding: 5px 10px;
`;
const Icon = styled.i`
  font-size: 48px;
`;

export default AboutTwo;
