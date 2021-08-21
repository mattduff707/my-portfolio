import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CoolButton from '../../CoolButton';
import Heading from '../../Heading';
import { ReactComponent as DetailsIcon } from '../../../icons/details.svg';
import { ReactComponent as GithubIcon } from '../../../icons/github.svg';

const ProjectCard = ({ title, subtitle, description, stack, path }) => {
  return (
    <CardContainer>
      <TitleWrap>
        <Heading topShadow>{title}</Heading>
        <SubTitle>{subtitle}</SubTitle>
      </TitleWrap>
      <ContentWrap>
        <Text>{description}</Text>
        <Stack>
          {stack.map((e) => (
            <StackItem key={e}>{e}</StackItem>
          ))}
        </Stack>
      </ContentWrap>

      <LinkWrap>
        <ButtonWrapper>
          <Link to={path} style={{ marginRight: '10px' }}>
            <StyledCoolButton>
              <DetailsIcon style={{ marginRight: '5px' }} />
              <LinkText>Details</LinkText>
            </StyledCoolButton>
          </Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <StyledCoolButton>
              <GithubIcon style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              <LinkText>GitHub</LinkText>
            </StyledCoolButton>
          </a>
        </ButtonWrapper>
      </LinkWrap>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  width: 100%;
  max-width: 450px;
  padding: 0px 20px 10px;
  margin: 0px 10px 50px;
  background-color: var(--color-primary);
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const FlexWrap = styled.div`
  /* border: 2px solid yellow; */
  color: var(--color-alternative);
`;
const TitleWrap = styled(FlexWrap)`
  margin-bottom: 5px;
  border-bottom: 2px solid var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h4`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-subtitle);
  padding-bottom: 15px;
  /* @media (min-width: 500px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  } */
`;
const ContentWrap = styled(FlexWrap)`
  padding-top: 5px;
  height: 100%;
  border-bottom: 2px solid var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding-right: 10px;
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LinkWrap = styled(FlexWrap)`
  margin-top: auto;
  padding: 5px 0px;
`;
const ButtonWrapper = styled.div`
  padding: 12px 0px 5px;
`;
const StyledCoolButton = styled(CoolButton)`
  padding: 8px 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: stretch;
`;
const LinkText = styled.p`
  display: block;
  padding-top: 2px;
`;
export default ProjectCard;
