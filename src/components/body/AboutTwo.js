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
          <Connector vertical />
          <TextContainer>
            <TitleWrapper>
              <Title>{aboutData[0].title}</Title>
            </TitleWrapper>
            <Text>{aboutData[0].text}</Text>
          </TextContainer>
        </AboutContainer>
        <ControlContainer>
          <ArrowButton>
            <Icon className="fas fa-angle-left" />
          </ArrowButton>
          <ArrowButton>
            <Icon className="fas fa-angle-right" />
          </ArrowButton>
        </ControlContainer>
      </ContentContainer>
    </AnimatedWrapper>
  );
};
const ContentContainer = styled.section`
  border: 2px solid red;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
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
`;
const ImageContainer = styled.div`
  width: auto;

  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
`;
const TextContainer = styled.article`
  width: 100%;
  height: auto;
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 8px var(--color-shadow);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  justify-content: space-around;
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
