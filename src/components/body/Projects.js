import React from "react";
import styled from "styled-components";
import MainProject from "./projects/MainProject";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2500px;
  margin: 0px auto;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
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
    </Wrapper>
  );
};

export default Projects;
