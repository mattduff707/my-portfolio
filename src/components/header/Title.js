import React from "react";
import styled from "styled-components";
import TextGradient from "../TextGradient";

const StyledContainer = styled.div`
  /* border: 2px red solid; */
  padding: 20px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
`;

const Title = () => {
  return (
    <StyledContainer>
      <TextGradient tag="h1" size="3rem" padding="0px 0px 15px 0px">
        Matthew Duffy
      </TextGradient>
      <TextGradient tag="h2">Web Developer</TextGradient>
    </StyledContainer>
  );
};

export default Title;
