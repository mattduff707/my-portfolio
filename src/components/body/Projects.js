import React from "react";
import styled from "styled-components";
import ProjectCard from "./projects/ProjectCard";
import PageHeader from "../PageHeader";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import { projectsData } from "../../constants";

const Projects = () => {
  return (
    <Wrapper>
      <AnimatedWrapper>
        <PageHeader>My Projects</PageHeader>
        <ProjectList>
          {/* <ProjectCard
            title={"s"}
            subTitle={"s"}
            description={"s"}
            linkToDetails={"s"}
            linkToGitHub={"s"}
          />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          {projectsData.map((project, index) => {
            return (
              <ProjectCard
                key={project.title + index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                path={project.path}
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
  padding: 10px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default Projects;
