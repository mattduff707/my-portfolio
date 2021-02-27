import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: header;
  box-shadow: 0px 1px 30px black;
  z-index: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Hello World</h1>
    </StyledHeader>
  );
};

export default Header;
