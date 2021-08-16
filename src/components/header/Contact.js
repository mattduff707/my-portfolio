import React from 'react';
import styled from 'styled-components';
import CoolButton from '../CoolButton';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedIn.svg';
import { ReactComponent as ResumeIcon } from '../../icons/resume.svg';
import { ReactComponent as GithubIcon } from '../../icons/github.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';

const Contact = () => {
  return (
    <Wrapper>
      <GithubWrapper>
        <a href="https://github.com/mattduff707" target="_blank" rel="noreferrer">
          <StyledCoolButton>
            <GithubIcon style={{ marginRight: '5px', marginTop: '1px' }} />
            <Text>GitHub</Text>
          </StyledCoolButton>
        </a>
      </GithubWrapper>
      <ResumeWrapper>
        <StyledCoolButton>
          <ResumeIcon style={{ marginRight: '2px' }} />
          <Text>Resume</Text>
        </StyledCoolButton>
      </ResumeWrapper>
      <LinkedInWrapper>
        <a href="https://www.linkedin.com/in/matthew-duffy-940112210/" target="_blank" rel="noreferrer">
          <StyledCoolButton>
            <LinkedInIcon style={{ display: 'block', marginRight: '5px', marginTop: '1px' }} />
            <Text>LinkedIn</Text>
          </StyledCoolButton>
        </a>
      </LinkedInWrapper>

      <EmailWrapper>
        <EmailIcon style={{ marginRight: '3px' }} />
        <EmailText>mattduff707@hotmail.com</EmailText>
      </EmailWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 350px;
  height: 80%;
  margin-left: auto;
  margin-right: 40px;
  padding: 5px 0px;
  /* border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow); */
  background-color: var(--color-primary);
  box-shadow: 0px 0px 8px 2px var(--color-shadow);
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'github resume linkedIn'
    'email email email';
  @media (max-width: 1200px) {
    width: 320px;
    margin-right: 20px;
  }
  @media (max-width: 1025px) {
    display: none;
  }
`;
const Container = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
`;
const EmailWrapper = styled(Container)`
  grid-area: email;
`;
const LinkedInWrapper = styled(Container)`
  grid-area: linkedIn;
`;
const ResumeWrapper = styled(Container)`
  grid-area: resume;
`;
const GithubWrapper = styled(Container)`
  grid-area: github;
`;
const StyledCoolButton = styled(CoolButton)`
  padding: 8px 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: stretch;
`;
const Icon = styled.i`
  /* border: 2px solid red; */
  display: block;
  padding-right: 5px;
  font-size: 1.15rem;
  background-color: #fa709a;
  background-image: linear-gradient(180deg, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text = styled.p`
  display: block;
  padding-top: 2px;
`;
const EmailText = styled.p`
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  display: block;
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
  padding-top: 2px;
`;

export default Contact;
