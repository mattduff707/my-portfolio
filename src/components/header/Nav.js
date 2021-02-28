import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TextGradient from "../TextGradient";

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

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0px 20px;
  margin: 0px 20px;
  transition: box-shadow 400ms ease 0s;
  box-shadow: 0px 0px 0px #22315d;
  &:hover {
    transition: box-shadow 150ms ease 0s;
    box-shadow: 0px 3px 0px #4247d6;
  }
`;
const LinkContainer = styled.li`
  padding: 10px;
  text-align: center;
  font-family: var(--font-primary);
  font-weight: bold;
  letter-spacing: 1px;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavUl>
        <StyledLink to="/">
          <LinkContainer>
            <TextGradient size="1.3rem">Overview</TextGradient>
          </LinkContainer>
        </StyledLink>
        <StyledLink to="/about">
          <LinkContainer>
            <TextGradient size="1.3rem">About</TextGradient>
          </LinkContainer>
        </StyledLink>
        <StyledLink to="/projects">
          <LinkContainer>
            <TextGradient size="1.3rem">Projects</TextGradient>
          </LinkContainer>
        </StyledLink>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
