import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import PageHeader from "../PageHeader";
import CoolButton from "../CoolButton";
import Connector from "../Connector";
import { aboutData } from "../../constants";

const AboutTwo = () => {
  return (
    <AnimatedWrapper>
      <PageHeader>About</PageHeader>
      <ContentContainer>
        <AboutContainer>
          <ImageContainer>
            <Image src={aboutData[0].picture} alt="1" />
          </ImageContainer>
          <Connector noDisplayAtMin="1024px" vertical />
          <Connector noDisplayAtMax="1023px" />
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
    </AnimatedWrapper>
  );
};
const ContentContainer = styled.section`
  /* border: 2px solid red; */
  width: 100%;

  padding: 15px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const AboutContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 90%;
  }
`;
const ImageContainer = styled.div`
  width: auto;

  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  object-fit: cover;
`;
const OverflowContainer = styled.div`
  overflow-y: auto;
  padding: 0px 0px 10px 0px;
`;
const TextContainer = styled.article`
  width: 100%;
  height: 100%;
  border: 6px solid var(--color-inset);
  border-right: 6px solid var(--color-inset-light);
  border-bottom: 6px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow);
  /* border-style: inset; */
  /* box-shadow: 0px 0px 8px var(--color-shadow); */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
const TitleWrapper = styled.div`
  border-bottom: 2px solid var(--color-secondary);
  padding: 0px 20px 5px;
  margin-bottom: 5px;
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
