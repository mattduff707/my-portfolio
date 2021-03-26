import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  padding: 20px;
  max-width: 500px;
`;
const Wrapper = styled.div`
  border: var(--color-secondary) 2px solid;
  border-radius: 15px;
  -webkit-box-shadow: 0 0 10px #fff;
  box-shadow: 0 0 8px var(--color-shadow);
  padding: 20px;
`;
const ProjectTitle = styled.h3`
  background-color: var(--color-text-secondary);

  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  font-family: var(--font-family-primary);
  display: inline-block;
  letter-spacing: 1px;
`;
const ProjectSubTitle = styled.h4`
  font-family: var(--font-family-primary);
  color: var(--color-alternative);
  font-size: 1rem;
  padding-bottom: 10px;
`;
const Description = styled.p`
  color: var(--color-text-primary);
  line-height: 1.5;
  padding-bottom: 15px;
`;

const Icon = styled.i`
  font-size: 18px;
  padding: 0px 5px;
`;

const LinkBtn = styled(Link)`
  font-family: var(--font-family-primary);
  font-weight: bolder;
  position: relative;
  background-color: var(--color-primary);
  border: 2px solid var(--color-secondary);
  border-radius: 16px;
  box-shadow: 0 0 3px var(--color-shadow);
  padding: 8px 20px;
  color: var(--color-alternative);
  margin-right: 10px;
  display: inline-block;
  text-decoration: none;
  transition: border-color 500ms ease;
  transition: color 500ms ease;
  &:hover,
  &:focus {
    transition: border-color 500ms ease;
    border-color: var(--color-text-primary);
  }
  &:hover ${Icon}, &:focus ${Icon} {
    transition: color 500ms ease;
    color: var(--color-text-secondary);
  }
`;
const BtnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const MainProject = () => {
  return (
    <ListItem>
      <Wrapper>
        <ProjectTitle>Duffy Web Brain</ProjectTitle>
        <ProjectSubTitle>Personal docs for note-taking</ProjectSubTitle>
        <Description>
          This project was a game changer for my web dev learning. Throughout
          most of my self education I had not been utilizing any solid note
          taking methodology. Learning in the IDE just wasn't cutting it, So I
          made my own solution!
        </Description>
        <LinkBtn to="/projects/duffy-web-brain">
          <BtnContent>
            Details <Icon className="fas fa-arrow-right"></Icon>
          </BtnContent>
        </LinkBtn>
        <LinkBtn>
          <BtnContent>
            GitHub <Icon className="fab fa-github"></Icon>
          </BtnContent>
        </LinkBtn>
      </Wrapper>
    </ListItem>
  );
};

export default MainProject;
