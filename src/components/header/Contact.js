import React from 'react';
import styled from 'styled-components';
import CoolButton from '../CoolButton';
import Heading from '../Heading';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedIn.svg';
import { ReactComponent as ResumeIcon } from '../../icons/resume.svg';
import { ReactComponent as GithubIcon } from '../../icons/github.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';

const Contact = ({ className }) => {
  return (
    <Wrapper className={className}>
      <StyledHeading>Contact</StyledHeading>
      <FlexWrap>
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
              <LinkedInIcon style={{ marginRight: '5px', marginTop: '1px' }} />
              <Text>LinkedIn</Text>
            </StyledCoolButton>
          </a>
        </LinkedInWrapper>
      </FlexWrap>
      <div>
        <EmailWrapper>
          <EmailIcon style={{ marginRight: '3px' }} />
          <EmailText>mattduff707@hotmail.com</EmailText>
        </EmailWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 350px;
  height: 80%;
  padding: 5px 0px;
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
  /* margin-bottom: 10px; */
  @media (min-width: 1025px) {
    display: none;
  }
`;
const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1025px) {
    margin-top: 10px;
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
  padding-top: 0px;
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
  padding: 8px 5px;
  font-size: 0.9rem;
  display: flex;
  align-items: stretch;
  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
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
