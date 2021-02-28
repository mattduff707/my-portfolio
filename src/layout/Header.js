import React from "react";
import styled from "styled-components";
import Nav from "../components/header/Nav";
import Title from "../components/header/Title";

const StyledHeader = styled.header`
  background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #22315d;
  box-shadow: 0px 1px 5px black;
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  z-index: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
