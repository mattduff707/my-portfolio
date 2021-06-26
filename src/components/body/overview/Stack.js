import React from "react";
import styled from "styled-components";
import MainImage from "./MainImage";
import Connector from "../../Connector";

const Stack = () => {
  return (
    <>
      <StackContainer>
        <StackWrapper>
          <TitleWrapper>
            <StackTitle>Stack</StackTitle>
          </TitleWrapper>
          <StackList>
            <StackItem>
              <Icon className="fab fa-html5" />
              HTML
            </StackItem>
            <StackItem>
              <Icon className="fab fa-css3-alt" />
              CSS
            </StackItem>
            <StackItem>
              <Icon className="fab fa-js-square" />
              Javascript
            </StackItem>
            <StackItem>
              <Icon className="fab fa-react" />
              React
            </StackItem>
          </StackList>
        </StackWrapper>
        <Separator />
        <Connector noDisplayAtMax="1024px" />
        <MainImage noDisplayAt="1024px" />
        <Connector noDisplayAtMax="1024px" />
        <StackWrapper>
          <TitleWrapper>
            <StackTitle>Skills</StackTitle>
          </TitleWrapper>
          <StackList>
            <StackItem>
              <Icon className="fab fa-html5" />
              HTML
            </StackItem>
            <StackItem>
              <Icon className="fab fa-css3-alt" />
              CSS
            </StackItem>
            <StackItem>
              <Icon className="fab fa-js-square" />
              Javascript
            </StackItem>
            <StackItem>
              <Icon className="fab fa-react" />
              React
            </StackItem>
          </StackList>
        </StackWrapper>
      </StackContainer>
    </>
  );
};

const StackContainer = styled.div`
  padding: 5px 10px 5px 10px;
  width: 95%;
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 900px;
  @media (min-width: 1025px) {
    border: none;
    box-shadow: none;
    padding: 0px;
    max-width: 1100px;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    max-width: 1300px;
  }
`;
const StackWrapper = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    border: 2px solid var(--color-secondary);
    border-radius: 20px;
    padding: 20px;
    flex: 1;
    box-shadow: 0px 0px 15px var(--color-shadow);
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-secondary);
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const StackTitle = styled.h3`
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--font-family-primary);
  font-size: var(--font-size-title);
  /* border: 2px solid blue; */
  display: inline-block;

  margin: 0px auto 5px auto;
`;
const StackList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;
const StackItem = styled.li`
  font-size: var(--font-size-subtitle);
  font-family: var(--font-family-secondary);
  color: var(--color-alternative);
  /* border: 2px solid green; */
  /* text-align: center; */
  display: block;

  @media (min-width: 1024px) {
    padding: 5px 0px;
  }
`;
const Icon = styled.i`
  color: var(--color-text-primary);
  font-size: 1.15rem;
  max-width: 40px;

  margin-right: 4px;
  text-align: center;
  background-color: #fa709a;
  background-image: linear-gradient(180deg, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 1024px) {
    font-size: 1.35rem;
    margin-right: 6px;
  }
  /* border: 2px solid yellow; */
`;
const Separator = styled.div`
  height: 100px;
  width: 2px;
  background-color: var(--color-secondary);
  @media (min-width: 1025px) {
    display: none;
  }
`;

export default Stack;
