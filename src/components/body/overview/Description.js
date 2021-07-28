import React from "react";
import styled from "styled-components";
import PageHeader from "../../PageHeader";

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  /* border: 2px solid red; */
  /* border: 6px solid var(--color-inset);
  border-right: 6px solid var(--color-inset-light);
  border-bottom: 6px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow); */
  /* border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow); */
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  @media (min-width: 1025px) {
    padding-top: 30px;
    max-width: 1100px;
  }
  @media (min-width: 1440px) {
    max-width: 1300px;
  }
`;
// const TitleWrapper = styled.div`
//   /* width: 30%; */
//   /* min-width: 200px; */
//   border: 2px solid var(--color-secondary);
//   padding: 10px 20px;
//   box-shadow: 0px 0px 8px var(--color-shadow);
//   border-radius: 20px;
//   background-color: var(--color-primary);
//   display: flex;
//   justify-content: center;
//   margin-bottom: 10px;
// `;

// const DescriptionTitle = styled.h3`
//   background-color: #fa709a;
//   background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   font-family: var(--font-family-primary);
//   font-size: var(--font-size-title);
//   /* border: 2px solid blue; */
//   display: inline-block;
//   /* margin-bottom: 5px; */
// `;

const DescriptionWrapper = styled.div`
  background-color: var(--color-primary);
  box-shadow: 0px 0px 6px var(--color-shadow);
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      {/* <TitleWrapper>
        <DescriptionTitle>Matthew Duffy</DescriptionTitle>
      </TitleWrapper> */}
      <DescriptionWrapper>
        <PageHeader topShadow>Matthew Duffy</PageHeader>
        <DescriptionText>
          Passionate self taught developer who revels in c oasdo dosod asodoasod asd oasod aosdo aosod oasod oaosdo
          oasodo as Passionate self taught developer who revels in c oasdo dosod asodoasod asd oasod aosdo aosod oasod
          oaosdo oasodo as Passionate self taught asd asd asd asd asd asd asd s ad
        </DescriptionText>
      </DescriptionWrapper>
    </DescriptionContainer>
  );
};

export default Description;
