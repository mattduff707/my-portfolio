import React from 'react';
import styled from 'styled-components';
import ProjectCardTwo from './projects/ProjectCard';
import PageHeader from '../PageHeader';
import AnimatedWrapper from '../animation/AnimatedWrapper';
import { projectsData } from '../../constants';

const Projects = () => {
  return (
    <AnimatedWrapper>
      <ContentContainer>
        <PageHeader>Projects</PageHeader>
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
      </ContentContainer>
    </AnimatedWrapper>
  );
};

const ContentContainer = styled.section`
  width: 100%;
  max-width: 1800px;
  /* padding: 20px 0px; */
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--shadow-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
// `;

const ProjectList = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 30px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1500px;
  margin-bottom: -50px;
  /* border: 2px solid red; */
`;

export default Projects;
