import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../../animation/AnimatedWrapper";
import PageHeader from "../../PageHeader";
import CoolButton from "../../CoolButton";
import { Link } from "react-router-dom";
import Connector from "../../Connector";
import image1 from "../../../images/me.jpg";
import image2 from "../../../images/image0.jpeg";
import image3 from "../../../images/image1.jpeg";

const ProjectDetails = ({ title }) => {
  return (
    <FlexWrapper>
      <AnimatedWrapper bottom>
        <PageHeader title={title}>Project Details</PageHeader>
        <BtnLinkWrap to="/projects">
          <StyledCoolButton padding="5px 10px" fontSize="1.2rem">
            <Icon className="fas fa-arrow-left"></Icon>
            <ButtonText>Back to Projects</ButtonText>{" "}
          </StyledCoolButton>
        </BtnLinkWrap>
        <DetailsContainer>
          <ArticleContainer>
            <ImageContainer>
              <Image src={image1} alt="1" />
            </ImageContainer>
            <ContentContainer>
              <TitleWrapper>
                <Title>Planning</Title>
              </TitleWrapper>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium eum quasi excepturi dolor inventore distinctio
                dolores ullam maxime, ipsam amet odio quo consequuntur labore
                libero voluptate rerum unde repellendus quibusdam. Dolores earum
                tempore rem, iste blanditiis voluptates accusamus, quaerat illum
                quis consequatur vitae qui fugit cumque, cupiditate consequuntur
                iure est assumenda neque perspiciatis at similique saepe.
                Deserunt ducimus temporibus repellendus! Consequuntur odit
              </Description>
            </ContentContainer>
          </ArticleContainer>
          <MobileConnector vertical />
          <DesktopConnector />

          <ArticleContainer>
            <ImageContainer>
              <Image src={image2} alt="2" />
            </ImageContainer>
            <ContentContainer>
              <TitleWrapper>
                <Title>Implementation</Title>
              </TitleWrapper>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium eum quasi excepturi dolor inventore distinctio
                dolores ullam maxime, ipsam amet odio quo consequuntur labore
                libero voluptate rerum unde repellendus quibusdam. Dolores earum
                tempore rem, iste blanditiis voluptates accusamus, quaerat illum
                quis consequatur vitae qui fugit cumque, cupiditate consequuntur
                iure est assumenda neque perspiciatis at similique saepe.
                Deserunt ducimus temporibus repellendus! Consequuntur odit
              </Description>
            </ContentContainer>
          </ArticleContainer>

          <MobileConnector vertical />
          <DesktopConnector />

          <ArticleContainer>
            <ImageContainer>
              <Image src={image3} alt="3" />
            </ImageContainer>
            <ContentContainer>
              <TitleWrapper>
                <Title>Features</Title>
              </TitleWrapper>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium eum quasi excepturi dolor inventore distinctio
                dolores ullam maxime, ipsam amet odio quo consequuntur labore
                libero voluptate rerum unde repellendus quibusdam. Dolores earum
                tempore rem, iste blanditiis voluptates accusamus, quaerat illum
                quis consequatur vitae qui fugit cumque, cupiditate consequuntur
                iure est assumenda neque perspiciatis at similique saepe.
                Deserunt ducimus temporibus repellendus! Consequuntur odit
              </Description>
            </ContentContainer>
          </ArticleContainer>
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
  }
`;
const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow);
  @media (min-width: 1440px) {
    width: auto;
  }
`;

const DesktopConnector = styled(Connector)`
  @media (max-width: 1440px) {
    display: none;
  }
`;
const MobileConnector = styled(Connector)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-top: 20px;
  }
`;
const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 30%;
  min-width: 200px;
  border-bottom: 2px solid var(--color-secondary);
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--font-family-primary);
  font-size: 1.25rem;
  /* border: 2px solid blue; */
  display: inline-block;
  margin-bottom: 5px;
  @media (min-width: 500px) {
    font-size: 1.35rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  text-indent: 20px;
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  padding: 15px;
  font-size: 0.9rem;
  max-width: 1000px;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px 30px;
  }
  @media (min-width: 1440px) {
    font-size: 1.3rem;
  }
`;

export default ProjectDetails;
