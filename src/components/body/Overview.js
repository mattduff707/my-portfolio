import React from "react";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import PageHeader from "../PageHeader";
import styled from "styled-components";
import picture from "../../images/me.jpg";

const Overview = () => {
  return (
    <AnimatedWrapper>
      <PageHeader>Overview</PageHeader>
      <Wrapper>
        <FlexContainer center>
          <StackContainer>
            <StackHeader>Stack</StackHeader>
            <StackList>
              <StackListItem>
                <Icon className="fab fa-html5" />
                HTML
              </StackListItem>
              <StackListItem>
                <Icon className="fab fa-css3-alt" />
                CSS
              </StackListItem>
              <StackListItem>
                <Icon className="fab fa-js-square" />
                Javascript
              </StackListItem>
              <StackListItem>
                <Icon className="fab fa-react" />
                React
              </StackListItem>
            </StackList>
          </StackContainer>
          <Connector left />
          <ImageWrapper>
            <Image src={picture} alt="Matt duffy looking like michael cera" />
          </ImageWrapper>
          <Connector />
          <StackContainer>
            <StackHeader>Skills</StackHeader>
            <StackList>
              <StackListItem>Scrum</StackListItem>
              <StackListItem>Accessibility</StackListItem>
              <StackListItem></StackListItem>
            </StackList>
          </StackContainer>
        </FlexContainer>
        <FlexContainer column>
          <Connector vertical />
          <DescriptionContainer>
            <h2 style={{ fontSize: "30px" }}>Matthew Duffy</h2>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nihil distinctio vitae incidunt perferendis quod
              officiis voluptates dicta? Ducimus aut perferendis culpa amet
              officiis iure architecto nihil corporis, vero sapiente. Cupiditate
              nisi totam voluptatibus atque iusto deleniti et, enim ratione id
              quisquam. Laboriosam sequi harum ullam! Voluptatum laboriosam
              officiis nesciunt exercitationem Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Velit, harum. Voluptatem ratione
              odit molestiae enim provident fugiat! Est, illum neque!
            </Text>
          </DescriptionContainer>
        </FlexContainer>
      </Wrapper>
    </AnimatedWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: 2px solid yellow;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: center;

  height: 50%;
  width: 100%;
  border: 2px solid blue;
`;

const StackContainer = styled.div`
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 15px var(--color-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  //flex: 1 2 150px;
  width: 250px;
  height: 100%;
`;

const StackHeader = styled.h3`
  font-size: 2rem;
  font-family: var(--font-family-primary);
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  border-bottom: 2px solid var(--color-secondary);
  padding-bottom: 5px;
`;
const StackList = styled.ul`
  list-style: none;
`;

const StackListItem = styled.li`
  font-size: 1.3rem;
  padding: 10px;
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  display: flex;
  align-items: center;
`;
const Icon = styled.i`
  color: var(--color-text-primary);
  font-size: 30px;
  max-width: 40px;
  height: auto;
  margin-right: 8px;
  text-align: center;
  background-image: linear-gradient(180deg, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* border: 2px solid yellow; */
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  //flex: 1 2 150px;
  max-width: 500px;
  height: 100%;
  border: 2px solid red;
  flex-shrink: 3;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  z-index: 1;
`;

const Connector = styled.div`
  height: ${(props) => (props.vertical ? "var(--connector-length)" : `12px`)};
  width: ${(props) => (props.vertical ? "12px" : `var(--connector-length)`)};
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

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: auto;
  padding: 10px 40px;
  font-family: var(--font-family-secondary);
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  color: var(--color-alternative);
`;

export default Overview;
