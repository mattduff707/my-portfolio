import React from "react";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import PageHeader from "../PageHeader";
import styled from "styled-components";
import MainImage from "./overview/MainImage";
import Stack from "./overview/Stack";
import Description from "./overview/Description";

const ContentWrapper = styled.section`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  align-items: center;
`;
const ContentFlexItem = styled.div`
  padding: ${(props) => props.padding};
  display: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  /* border: 2px dashed blue; */
  width: 100%;
  ${(props) => {
    if (props.noDisplayAt) {
      return `
      @media(min-width: ${props.noDisplayAt}){
        display: none
      }
      `;
    }
  }}
`;

const Connector = styled.div`
  z-index: 1;
  height: ${(props) =>
    props.vertical ? "var(--connector-length)" : `var(--connector-width)`};
  width: ${(props) =>
    props.vertical ? "var(--connector-width)" : `var(--connector-length)`};
  /* flex: 1 10; */
  align-self: center;
  box-shadow: 0 0 8px var(--color-shadow);
  ${(props) => {
    if (props.vertical) {
      return `
      border-left: 2px solid var(--color-secondary);
      border-right: 2px solid var(--color-secondary);
      background-image: linear-gradient(to bottom, #fa709a 0%, #fee140 100%);
  
  `;
    } else {
      return `
      border-top: 2px solid var(--color-secondary);
      border-bottom: 2px solid var(--color-secondary);
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
      
      `;
    }
  }}
  ${(props) =>
    props.left
      ? ` background-image: linear-gradient(to left, #fa709a 0%, #fee140 100%);`
      : ` background-color: var(--color-text-primary)`}
`;

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: 15px;
`;

const OverviewTwo = () => {
  return (
    <AnimatedWrapper>
      <ContentWrapper>
        <StyledPageHeader>Overview</StyledPageHeader>
        <ContentFlexItem
          flex={"flex"}
          justify={"center"}
          noDisplayAt={"1025px"}
        >
          <MainImage />
        </ContentFlexItem>
        <ContentFlexItem flex="flex" justify="center" noDisplayAt={"1025px"}>
          <Connector vertical />
        </ContentFlexItem>
        <ContentFlexItem flex="flex" justify="center">
          <Stack />
        </ContentFlexItem>
        <ContentFlexItem flex="flex" justify="center">
          <Connector vertical />
        </ContentFlexItem>
        <ContentFlexItem flex="flex" justify="center">
          <Description />
        </ContentFlexItem>
      </ContentWrapper>
    </AnimatedWrapper>
  );
};

export default OverviewTwo;
