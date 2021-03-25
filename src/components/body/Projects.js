import React from "react";
import styled from "styled-components";
import MainProject from "./projects/MainProject";

const Wrapper = styled.div`
  width: 100%;
  max-width: 2500px;
  margin: 0px auto;
  padding: 0px 100px;
  display: flex;
  justify-content: center;
`;
const ProjectList = styled.ul`
  list-style: none;
  padding: 50px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
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
      </ProjectList>
    </Wrapper>
  );
};

export default Projects;
