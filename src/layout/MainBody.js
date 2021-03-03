import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Overview from "../components/body/Overview";
import About from "../components/body/About";
import Projects from "../components/body/Projects";

const StyledMain = styled.main`
  //background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: main;
`;

const MainBody = () => {
  return (
    <StyledMain>
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </StyledMain>
  );
};

export default MainBody;
