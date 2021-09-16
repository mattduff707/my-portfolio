import React from 'react';
import styled from 'styled-components';
import MainImage from './MainImage';
import Heading from '../../Heading';
import GatsbyIcon from '../../../icons/Gatsby.js';
import ReactIcon from '../../../icons/ReactIcon.js';
import JavascriptIcon from '../../../icons/Javascript.js';
import CssIcon from '../../../icons/Css.js';
import HtmlIcon from '../../../icons/Html.js';
import StyledIcon from '../../../icons/Styled.js';
import SassIcon from '../../../icons/Sass.js';
import OopIcon from '../../../icons/Oop.js';
import AccessibilityIcon from '../../../icons/Accessibility';
import GitIcon from '../../../icons/Git';
import TasksIcon from '../../../icons/Tasks';
import ScrumIcon from '../../../icons/Scrum';
import ResponsiveIcon from '../../../icons/Responsive';
import SolvingIcon from '../../../icons/Solving';

const Stack = () => {
  const IconStyle = {
    marginRight: '8px',
  };
  return (
    <>
      <StackContainer>
        <StackWrapper>
          <Heading topShadow>Stack</Heading>
          <StackList>
            <StackItem>
              <HtmlIcon style={IconStyle} />
              HTML
            </StackItem>
            <StackItem>
              <CssIcon style={IconStyle} />
              CSS
            </StackItem>
            <StackItem>
              <StyledIcon style={IconStyle} />
              styled-components
            </StackItem>
            <StackItem>
              <SassIcon style={IconStyle} />
              SASS
            </StackItem>
            <StackItem>
              <JavascriptIcon style={IconStyle} />
              Javascript
            </StackItem>
            <StackItem>
              <ReactIcon style={IconStyle} />
              React
            </StackItem>
            <StackItem>
              <GatsbyIcon style={IconStyle} />
              Gatsby
            </StackItem>
          </StackList>
        </StackWrapper>
        <MainImage noDisplayAt="1024px" />
        <StackWrapper>
          <Heading topShadow>Skills</Heading>
          <StackList>
            <StackItem>
              <OopIcon style={IconStyle} />
              Object-Oriented Design
            </StackItem>
            <StackItem>
              <GitIcon style={IconStyle} />
              Git / Github
            </StackItem>
            <StackItem>
              <ResponsiveIcon style={IconStyle} />
              Responsive Design
            </StackItem>
            <StackItem>
              <AccessibilityIcon style={IconStyle} />
              Accessibility
            </StackItem>
            <StackItem>
              <ScrumIcon style={{ marginRight: '6px' }} />
              Agile / Scrum
            </StackItem>
            <StackItem>
              <TasksIcon style={{ marginRight: '6px' }} />
              Task Management
            </StackItem>
            <StackItem>
              <SolvingIcon style={IconStyle} />
              Problem Solving
            </StackItem>
          </StackList>
        </StackWrapper>
      </StackContainer>
    </>
  );
};

const StackContainer = styled.div`
  padding: 20px 10px 5px 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  max-width: 900px;
  margin-top: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px;
  }
  @media (min-width: 1025px) {
    /* border: none; */
    box-shadow: none;
    padding: 0px;
    max-width: 1100px;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    max-width: 1300px;
  }
`;
const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  border-radius: 15px;
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);
  border-radius: 20px;
  padding: 0px 10px;
  flex: 1;
  margin: 0px 5px;
  @media (min-width: 1025px) {
    margin: 0px;
  }
  @media (max-width: 700px) {
    padding: 0px;
    margin: 0px;
    &:first-child {
      margin-bottom: 40px;
    }
  }
`;

const StackList = styled.ul`
  padding: 5px 0px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;
const StackItem = styled.li`
  font-size: var(--font-size-subtitle);
  font-family: var(--font-family-secondary);
  color: var(--color-alternative);

  display: flex;
  align-items: center;

  padding: 5px 0px;
`;
export default Stack;
