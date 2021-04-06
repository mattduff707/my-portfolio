import React from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import Overview from "../components/body/Overview";
import About from "../components/body/About";
import Projects from "../components/body/Projects";
import ProjectDetails from "../components/body/projects/ProjectDetails";
import { AnimatePresence } from "framer-motion";

const StyledMain = styled.main`
  //background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: main;
`;

const MainBody = () => {
  const location = useLocation();
  return (
    <StyledMain>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Overview} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/duffy-web-brain" component={ProjectDetails} />
        </Switch>
      </AnimatePresence>
    </StyledMain>
  );
};

export default MainBody;
