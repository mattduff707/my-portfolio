import React from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import OverviewTwo from "../components/body/OverviewTwo";
import AboutTwo from "../components/body/AboutTwo";
import Projects from "../components/body/Projects";
import ProjectDetails from "../components/body/projects/ProjectDetails";
import { AnimatePresence } from "framer-motion";
import { projectsData } from "../constants";

const StyledMain = styled.main`
  //background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: main;
  overflow: hidden;
  background-color: var(--color-inset-bg);
`;

const MainBody = () => {
  const location = useLocation();
  return (
    <StyledMain>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={OverviewTwo} />
          <Route path="/about" component={AboutTwo} />
          <Route exact path="/projects" component={Projects} />

          {projectsData.map((project) => (
            <Route path={project.path}>
              <ProjectDetails title={project.title} slides={project.slides} />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </StyledMain>
  );
};

export default MainBody;
