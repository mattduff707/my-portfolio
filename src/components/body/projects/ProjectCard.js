import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CoolButton from "../../CoolButton";

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
  overflow: hidden;
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
const Content = styled.p`
  color: var(--color-text-primary);
  font-size: 1.1rem;
  line-height: 1.5;
  padding-bottom: 15px;
  font-family: var(--font-family-secondary);
`;

const buttonPadding = "5px 10px";
const buttonFontSize = "1rem";

const ProjectCard = ({ title, subtitle, path, description }) => {
  return (
    <ListItem>
      <Wrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubTitle>{subtitle}</ProjectSubTitle>
        <Content>{description}</Content>
        <Link to={path} style={{ marginRight: "10px" }}>
          <CoolButton padding={buttonPadding} fontSize={buttonFontSize}>
            Details <i className="fas fa-arrow-right"></i>
          </CoolButton>
        </Link>
        <Link>
          <CoolButton padding={buttonPadding} fontSize={buttonFontSize}>
            GitHub <i className="fab fa-github"></i>
          </CoolButton>
        </Link>
      </Wrapper>
    </ListItem>
  );
};

export default ProjectCard;
