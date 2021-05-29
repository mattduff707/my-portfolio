import React from "react";
import styled from "styled-components";
import ProjectCardTwo from "./projects/ProjectCardTwo";
import PageHeader from "../PageHeader";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import { projectsData } from "../../constants";

const Projects = () => {
  return (
    <Wrapper>
      <AnimatedWrapper>
        <PageHeader>My Projects</PageHeader>
        <ProjectList>
          {projectsData.map((project, index) => {
            return (
              <ProjectCardTwo
                key={project.title + index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                path={project.path}
                stack={project.stack}
              />
            );
          })}
        </ProjectList>
      </AnimatedWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1500px;
  /* border: 2px solid red; */
`;

export default Projects;
