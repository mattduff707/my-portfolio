import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import CoolToggle from "../CoolToggle";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  /* border: 2px solid blue; */
`;
const NavUl = styled.ul`
  display: flex;

  list-style: none;
`;

const ListItem = styled.li`
  height: var(--link-container-height);
  width: var(--link-container-width);
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: box-shadow 400ms ease 0s; */
  /* box-shadow: 0px 0px 0px #fb8986;

  &:hover {
    transition: box-shadow 200ms ease 0s;
    box-shadow: 0px 3px 0px var(--color-text-primary);
  } */
`;

const ListLink = styled(NavLink)`
  color: var(--color-text-secondary);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-family: var(--font-family-primary);
  font-weight: bold;
  font-size: var(--font-size-nav);
  letter-spacing: 1px;
  /* transition: color 400ms ease 0s; */
  padding: 0px 10px;
  /* 
  &:hover {
    transition: color 650ms ease 0s;
    color: var(--color-text-primary);
  } */
`;

const active = {
  color: "var(--color-text-primary)",
};

const CoolLink = styled(CoolToggle)`
  font-family: var(--font-family-primary);
  width: 80px;
  padding: 5px 0px;
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: 1024px) {
    width: 100px;
    padding: 10px 0px;
  }
`;

console.log(window.location.pathname);
const OverviewPath = "/";
const AboutPath = "/about";
const ProjectsPath = "/projects";
const ProjectsPathRegex = /\/projects/;

const Nav = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const handleNav = (e) => {
    const path = e.currentTarget.attributes.path.value;
    console.log(path);

    setCurrentPath(() => path);
  };

  return (
    <NavWrapper>
      <NavUl>
        <ListItem>
          <ListLink onClick={handleNav} path={OverviewPath} activeStyle={active} exact to={OverviewPath}>
            <CoolLink isActive={currentPath === OverviewPath}>Overview</CoolLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={handleNav} path={AboutPath} activeStyle={active} to={AboutPath}>
            <CoolLink isActive={currentPath === AboutPath}>About</CoolLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={handleNav} path={ProjectsPath} activeStyle={active} to={ProjectsPath}>
            <CoolLink isActive={ProjectsPathRegex.test(currentPath)}>Projects</CoolLink>
          </ListLink>
        </ListItem>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
