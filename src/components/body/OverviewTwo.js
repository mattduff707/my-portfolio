import React from 'react';
import AnimatedWrapper from '../animation/AnimatedWrapper';
import PageHeader from '../PageHeader';
import styled from 'styled-components';
import MainImage from './overview/MainImage';
import Stack from './overview/Stack';
import Description from './overview/Description';
import Contact from '../header/Contact';

const ContentWrapper = styled.section`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  max-width: 1800px;
  width: 100%;
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow);
  /* overflow-y: auto; */
  align-items: center;
  padding: 0px 20px;
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
const StyledContact = styled(Contact)`
  margin: 40px 0px 0px 0px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const OverviewTwo = () => {
  return (
    <AnimatedWrapper>
      <ContentWrapper>
        <PageHeader>Overview</PageHeader>
        <ContentFlexItem noDisplayAt={'1025px'} flex={'flex'} justify={'center'}>
          <MainImage />
        </ContentFlexItem>
        <StyledContact />
        <Stack />
        <Description />
      </ContentWrapper>
    </AnimatedWrapper>
  );
};

export default OverviewTwo;
