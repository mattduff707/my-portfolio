import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import Overview from '../components/body/Overview';
import About from '../components/body/About';
import Projects from '../components/body/Projects';
import ProjectDetails from '../components/body/projects/ProjectDetails';
import { AnimatePresence } from 'framer-motion';
import { projectsData } from '../constants';

const StyledMain = styled.main`
  //background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: main;
  overflow: hidden;
  background-color: var(--color-inset-bg);
`;

const MainBody = ({ isAnimated }) => {
  const location = useLocation();
  return (
    <StyledMain>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Overview isAnimated={isAnimated} />
          </Route>
          <Route path="/about">
            <About isAnimated={isAnimated} />
          </Route>
          <Route exact path="/projects">
            <Projects isAnimated={isAnimated} />
          </Route>
          {projectsData.map((project) => (
            <Route key={project.title} path={project.path}>
              <ProjectDetails isAnimated={isAnimated} title={project.title} slides={project.slides} github={project.github} demo={project.live} />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </StyledMain>
  );
};

export default MainBody;
