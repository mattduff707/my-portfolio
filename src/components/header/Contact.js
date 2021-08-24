import React from 'react';
import styled from 'styled-components';
import CoolButton from '../CoolButton';
import Heading from '../Heading';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedIn.svg';
import { ReactComponent as ResumeIcon } from '../../icons/resume.svg';
import { ReactComponent as GithubIcon } from '../../icons/github.svg';

const Contact = ({ className }) => {
  return (
    <Wrapper className={className}>
      <StyledHeading>Contact</StyledHeading>
      <FlexWrap>
        <Container>
          <a href="https://github.com/mattduff707" target="_blank" rel="noreferrer">
            <StyledCoolButton tabIndex="-1">
              <GithubIcon style={{ marginRight: '5px', marginTop: '1px' }} />
              <Text>GitHub</Text>
            </StyledCoolButton>
          </a>
        </Container>
        <Container>
          <StyledCoolButton tabIndex="-1">
            <ResumeIcon style={{ marginRight: '2px' }} />
            <Text>Resume</Text>
          </StyledCoolButton>
        </Container>
        <Container>
          <a href="https://www.linkedin.com/in/matthew-duffy-940112210/" target="_blank" rel="noreferrer">
            <StyledCoolButton tabIndex="-1">
              <LinkedInIcon style={{ marginRight: '5px', marginTop: '1px' }} />
              <Text>LinkedIn</Text>
            </StyledCoolButton>
          </a>
        </Container>
      </FlexWrap>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 350px;
  height: 72%;
  padding: 5px 0px;
  margin-top: 15px;
  /* border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow); */
  background-color: var(--color-primary);
  box-shadow: var(--shadow-card);
  border: 4px solid var(--color-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 320px;
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const StyledHeading = styled(Heading)`
  align-self: center;
  padding: 5px 20px;
  /* margin-bottom: 10px; */
  /* @media (min-width: 1025px) {
    display: none;
  } */
`;
const FlexWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 8px;
`;
const Container = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;

const StyledCoolButton = styled(CoolButton)`
  padding: 8px 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: stretch;
  @media (max-width: 1200px) {
    padding: 8px 5px;
  }
  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const Text = styled.p`
  display: block;
  padding-top: 2px;
`;

export default Contact;
