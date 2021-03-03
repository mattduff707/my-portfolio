import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  //border: 2px yellow solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavUl = styled.ul`
  display: flex;
  // border: green 2px solid;
  list-style: none;
`;

const Li = styled.li`
  height: 60px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 400ms ease 0s;
  box-shadow: 0px 0px 0px #fb8986;

  &:hover {
    transition: box-shadow 200ms ease 0s;
    box-shadow: 0px 3px 0px #fee140;
  }
`;

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

const ListLink = styled(NavLink)`
  color: #fb8986;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-family: var(--font-primary);
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: color 400ms ease 0s;

  &:hover {
    transition: color 650ms ease 0s;
    color: #fee140;
  }
`;

const active = {
  color: "#fee140",
  boxShadow: "0px 3px 0px #fb8986",
};

const Nav = () => {
  return (
    <NavWrapper>
      <NavUl>
        <Li>
          <ListLink activeStyle={active} exact to="/">
            Overview
          </ListLink>
        </Li>
        <Li>
          <ListLink activeStyle={active} to="/about">
            About
          </ListLink>
        </Li>
        <Li>
          <ListLink activeStyle={active} to="/projects">
            Projects
          </ListLink>
        </Li>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
