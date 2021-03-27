import styled from "styled-components";

// todo:
// * Toggle: developer / person
// ? Developer: Self Taught, Why I got into Web Development, Ambitions?
// ! Person: Lifting, Travel, Music, Tennis

const AboutContent = ({ activeContent }) => {
  return (
    <>
      {activeContent.map(([key, value]) => {
        return (
          <div key={value.title}>
            <StyledTitle>{value.title}</StyledTitle>
            <StyledSubTitle>{value.subtitle}</StyledSubTitle>
            <StyledText>{value.text}</StyledText>
          </div>
        );
      })}
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
