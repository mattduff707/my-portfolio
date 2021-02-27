import React from "react";
import styled from "styled-components";
import TextGradient from "../TextGradient";

const StyledContainer = styled.div`
  //border: 2px red solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = () => {
  return (
    <StyledContainer>
      <TextGradient tag="h1" size="3rem">
        Matthew Duffy
      </TextGradient>
      <TextGradient tag="h2">Web Developer</TextGradient>
    </StyledContainer>
  );
};

export default Title;
