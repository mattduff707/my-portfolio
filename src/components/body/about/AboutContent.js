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
          <Wrapper key={value.title}>
            <StyledTitle>{value.title}</StyledTitle>
            <StyledText>{value.text}</StyledText>
          </Wrapper>
        );
      })}
    </>
  );
};
const Wrapper = styled.article`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0px 5px;
  }
`;

const StyledTitle = styled.h3`
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
  font-size: var(--font-size-heading);
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-secondary);
  text-align: center;
  @media (max-width: 1440px) {
    padding-bottom: 5px;
  }
`;
const StyledText = styled.p`
  color: var(--color-text-primary);
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-content);
  text-indent: 40px;
  line-height: 2.3;
  @media (max-width: 1440px) {
    line-height: 1.8;
  }
  @media (max-width: 1024px) {
    padding-bottom: 20px;
  }
`;

export default AboutContent;
