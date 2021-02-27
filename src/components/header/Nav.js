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
const LinkContainer = styled.li`
  padding: 10px;
  width: 100px;
  background-color: blue;
  margin: 0px 20px;
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  color: red;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavUl>
        <LinkContainer>
          <StyledLink to="/">Overview</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/about">About</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/projects">Projects</StyledLink>
        </LinkContainer>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
