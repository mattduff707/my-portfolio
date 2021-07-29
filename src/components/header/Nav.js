import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  transition: box-shadow 400ms ease 0s;
  box-shadow: 0px 0px 0px #fb8986;

  &:hover {
    transition: box-shadow 200ms ease 0s;
    box-shadow: 0px 3px 0px var(--color-text-primary);
  }
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
  transition: color 400ms ease 0s;

  &:hover {
    transition: color 650ms ease 0s;
    color: var(--color-text-primary);
  }
`;

const active = {
  color: "var(--color-text-primary)",
};

const Nav = () => {
  return (
    <NavWrapper>
      <NavUl>
        <ListItem>
          <ListLink activeStyle={active} exact to="/">
            Overview
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink activeStyle={active} to="/about">
            About
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink activeStyle={active} to="/projects">
            Projects
          </ListLink>
        </ListItem>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
