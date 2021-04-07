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
  line-height: 1.8;
`;

const StyledTitle = styled.h3`
  font-family: var(--font-family-primary);
  letter-spacing: 3px;
  font-size: 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--color-secondary);
`;
const StyledText = styled.p`
  color: var(--color-text-primary);
  font-family: var(--font-family-secondary);
  font-size: 1.3rem;
  text-indent: 40px;
`;

export default AboutContent;
