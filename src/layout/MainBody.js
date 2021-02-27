import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  grid-area: main;
`;

const MainBody = () => {
  return <StyledMain></StyledMain>;
};

export default MainBody;
