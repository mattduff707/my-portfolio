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

const Subtitle = styled.h2`
  color: var(--color-alternative);
  font-size: 1.5rem;
`;

const Title = () => {
  return (
    <StyledContainer>
      <TextGradient tag="h1" size="2.5rem" padding="0px 0px 15px 0px">
        Matthew Duffy
      </TextGradient>
      <Subtitle>Web Developer</Subtitle>
    </StyledContainer>
  );
};

export default Title;
