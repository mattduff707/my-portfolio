import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  width: 95%;
  max-width: 900px;
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow);
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 1025px) {
    max-width: 1100px;
  }
  @media (min-width: 1440px) {
    max-width: 1300px;
  }
`;
const TitleWrapper = styled.div`
  width: 30%;
  min-width: 200px;
  border-bottom: 2px solid var(--color-secondary);
  display: flex;
  justify-content: center;
`;

const DescriptionTitle = styled.h3`
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--font-family-primary);
  font-size: 1.25rem;
  /* border: 2px solid blue; */
  display: inline-block;
  margin-bottom: 5px;
  @media (min-width: 500px) {
    font-size: 1.35rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const DescriptionText = styled.p`
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  padding: 5px;
  font-size: 0.9rem;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

const Description = () => {
  return (
    <DescriptionContainer>
      <TitleWrapper>
        <DescriptionTitle>Matthew Duffy</DescriptionTitle>
      </TitleWrapper>
      <DescriptionText>
        Passionate self taught developer who revels in c oasdo dosod asodoasod
        asd oasod aosdo aosod oasod oaosdo oasodo as Passionate self taught
        developer who revels in c oasdo dosod asodoasod asd oasod aosdo aosod
        oasod oaosdo oasodo as Passionate self taught asd asd asd asd asd asd
        asd s ad
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default Description;
