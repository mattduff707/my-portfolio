import styled from "styled-components";

const AboutContent = ({ title, subtitle, text }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
      <StyledText>{text}</StyledText>
    </>
  );
};

const StyledTitle = styled.h3`
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
  font-size: 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const StyledSubTitle = styled.h4`
  color: var(--color-alternative);
  font-size: 1.5rem;
  font-family: var(--font-family-primary);
`;
const StyledText = styled.p`
  color: var(--color-text-primary);
  font-family: var(--font-family-secondary);
`;

export default AboutContent;
