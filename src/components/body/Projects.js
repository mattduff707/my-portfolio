import React from "react";
import styled from "styled-components";
import MainProject from "./projects/MainProject";
import PageHeader from "../PageHeader";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import FadeContent from "../animation/FadeContent";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
// const StyledWrapper = styled(motion.div)`
//   border: 3px solid var(--color-secondary);
//   box-shadow: 0px 0px 8px var(--color-shadow);
//   border-radius: 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 90%;
//   height: 0%;
//   overflow: hidden;
// `;
const ProjectList = styled.ul`
  list-style: none;
  padding: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Projects = () => {
  return (
    <Wrapper>
      <AnimatedWrapper>
        <PageHeader>My Projects</PageHeader>
        <FadeContent>
          <ProjectList>
            <MainProject
              title={"s"}
              subTitle={"s"}
              description={"s"}
              linkToDetails={"s"}
              linkToGitHub={"s"}
            />
            <MainProject />
            <MainProject />
            <MainProject />
          </ProjectList>
        </FadeContent>
      </AnimatedWrapper>
    </Wrapper>
  );
};

export default Projects;
