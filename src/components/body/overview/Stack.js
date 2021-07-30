import React from "react";
import styled from "styled-components";
import MainImage from "./MainImage";
import Heading from "../../Heading";

const Stack = () => {
  return (
    <>
      <StackContainer>
        <StackWrapper>
          <Heading topShadow>Stack</Heading>
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
        <MainImage noDisplayAt="1024px" />
        <StackWrapper>
          <Heading topShadow>Skills</Heading>
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
  padding: 20px 10px 5px 10px;
  width: 100%;
  /* border: 2px solid red; */
  /* border: 2px solid var(--color-secondary); */
  /* border-radius: 20px; */
  /* box-shadow: 0px 0px 15px var(--color-shadow); */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 900px;
  margin-top: 30px;

  @media (min-width: 1025px) {
    /* border: none; */
    box-shadow: none;
    padding: 0px;
    max-width: 1100px;
    justify-content: center;
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
  /* border: 6px solid var(--color-inset);
    border-right: 6px solid var(--color-inset-light);
    border-bottom: 6px solid var(--color-inset-light); */
  background-color: var(--color-primary);
  border-radius: 15px;
  box-shadow: 0px 0px 6px var(--color-shadow);
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  padding: 0px 10px;
  flex: 1;
  margin: 0px 5px;
  @media (min-width: 1025px) {
    margin: 0px;
  }
  /* box-shadow: 0px 0px 15px var(--color-shadow); */
`;
// const TitleWrapper = styled.div`
//   width: 100%;
//   border: 2px solid var(--color-secondary);
//   padding: 10px 20px;
//   box-shadow: 0px 0px 8px var(--color-shadow);
//   border-radius: 20px;
//   background-color: var(--color-primary);
//   display: flex;
//   justify-content: center;
//   margin-bottom: 10px;
//   transform: translateY(-);
// `;
// const StackTitle = styled.h3`
//   background-color: #fa709a;
//   background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   font-family: var(--font-family-primary);
//   font-size: var(--font-size-title);
//   /* border: 2px solid blue; */
//   display: inline-block;

//   /* margin: 0px auto 5px auto; */
// `;
const StackList = styled.ul`
  padding: 5px 0px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  /* border: 2px solid red; */
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

export default Stack;
