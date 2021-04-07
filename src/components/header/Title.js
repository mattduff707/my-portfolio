import React from "react";
import styled from "styled-components";
import TextGradient from "../TextGradient";

const StyledContainer = styled.div`
  /* border: 2px red solid; */
  padding: 0px 30px 0px 30px;
  border-right: 2px solid var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
`;

const Subtitle = styled.h2`
  color: var(--color-alternative);
  font-size: 1.3rem;
`;

const Title = () => {
  return (
    <StyledContainer>
      <TextGradient tag="h1" size="2.0rem" padding="0px 0px 15px 0px">
        Matthew Duffy
      </TextGradient>
      <Subtitle>Web Developer</Subtitle>
    </StyledContainer>
  );
};

export default Title;
