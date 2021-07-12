import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CoolButton from "../../CoolButton";

const ProjectCardTwo = ({ title, subtitle, description, stack, path }) => {
  return (
    <CardContainer>
      <FlexWrap
        style={{
          marginBottom: "5px",
          paddingBottom: "5px",
          borderBottom: "2px solid var(--color-secondary)",
        }}
      >
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </FlexWrap>
      <FlexWrap
        style={{
          paddingTop: "5px",
          height: "100%",
          borderBottom: "2px solid var(--color-secondary)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>{description}</Text>
        <Stack>
          {stack.map((e) => (
            <StackItem>{e}</StackItem>
          ))}
        </Stack>
      </FlexWrap>

      <FlexWrap style={{ marginTop: "auto" }}>
        <ButtonWrapper>
          <Link to={path} style={{ marginRight: "10px" }}>
            <StyledCoolButton>
              Details <i className="fas fa-arrow-right"></i>
            </StyledCoolButton>
          </Link>
          <Link>
            <StyledCoolButton>
              GitHub <i className="fab fa-github"></i>
            </StyledCoolButton>
          </Link>
        </ButtonWrapper>
      </FlexWrap>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  width: 100%;
  max-width: 450px;
  padding: 10px 20px;
  margin: 10px;
  border: 6px solid var(--color-inset);
  border-right: 6px solid var(--color-inset-light);
  border-bottom: 6px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow);
  /* border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--color-shadow); */
  display: flex;
  flex-direction: column;
`;
const FlexWrap = styled.div`
  /* border: 2px solid yellow; */
  color: var(--color-alternative);
`;
const Title = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-title);
  display: inline-block;
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* @media (min-width: 500px) {
    font-size: 1.35rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  } */
`;

const SubTitle = styled.h4`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-subtitle);
  /* @media (min-width: 500px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  } */
`;
const Text = styled.p`
  font-family: var(--font-family-secondary);
  line-height: 18px;
  @media (min-width: 768px) {
    line-height: 22px;
    font-size: 1.1rem;
  } ;
`;
const Stack = styled.ul`
  font-family: var(--font-family-secondary);
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 5px 0px;
`;
const StackItem = styled.li`
  padding: 0px 10px;
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ButtonWrapper = styled.div`
  padding: 12px 0px 5px;
`;
const StyledCoolButton = styled(CoolButton)`
  padding: 5px 10px;
  font-size: 0.9rem;
`;
export default ProjectCardTwo;
