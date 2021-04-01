import React from "react";
import styled, { keyframes } from "styled-components";
import MainProject from "./projects/MainProject";
import PageHeader from "../PageHeader";

const growHeight = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 90%
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledWrapper = styled.div`
  border: 3px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 0%;
  overflow: hidden;
  animation: ${growHeight} 900ms 1 200ms ease;
  animation-fill-mode: forwards;
`;
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
      <StyledWrapper>
        <PageHeader>My Projects</PageHeader>
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
      </StyledWrapper>
    </Wrapper>
  );
};

export default Projects;
