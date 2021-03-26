import { useState } from "react";
import styled from "styled-components";
import AboutContent from "../body/about/AboutContent";

const About = () => {
  // todo:
  // * Toggle: developer / person
  // ? Developer: Self Taught, Why I got into Web Development, Ambitions?
  // ! Person: Lifting, Travel, Music, Tennis
  const devKeys = {
    active: true,
    selfTaught: {
      active: false,
      title: "Self Taught Developer",
      subtitle: "The journey so far...",
      text: "Self taught dev yo",
    },
    whyDev: {
      active: true,
      title: "Why I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
    },
    ambitions: {
      active: false,
      title: "My ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
    },
  };
  const personKeys = {
    active: false,
    selfTaught: {
      active: false,
      title: "Person Taught Developer",
      subtitle: "The journey so far...",
      text: "Self taught dev yo",
    },
    whyDev: {
      active: true,
      title: "Person I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
    },
    ambitions: {
      active: false,
      title: "Person ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
    },
  };
  const [activeKey, setActiveKey] = useState(devKeys);

  console.log(activeKey);
  return (
    <ComponentWrapper>
      <ToggleWrapper>
        <label htmlFor="about-toggle">
          <Toggle active={activeKey}>Developer</Toggle>
          <Toggle active={false}>Person</Toggle>
        </label>
        <input
          style={{ visibility: "hidden" }}
          type="checkbox"
          name="about-toggle"
          id="about-toggle"
        />
      </ToggleWrapper>
      <Wrapper>
        <PictureContainer></PictureContainer>
        <Connector />
        <AboutContentContainer>
          {Object.entries(activeKey).map(([key, value]) => {
            if (value.active) {
              return (
                <AboutContent
                  key={key}
                  title={value.title}
                  subtitle={value.subtitle}
                  text={value.text}
                />
              );
            }
            return null;
          })}
          {/* <AboutContent /> */}
        </AboutContentContainer>
      </Wrapper>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: 140px 1fr;
  grid-template-areas:
    "toggleKeys"
    "aboutContent";
`;

const ToggleWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
`;
const Toggle = styled.span`
  font-family: var(--font-family-primary);
  font-weight: bolder;
  font-size: 1.2rem;
  padding: 10px;
  display: inline-block;
  width: 140px;
  text-align: center;
  border: ${(props) =>
    props.active
      ? "var(--color-text-secondary) 2px solid"
      : "var(--color-alternative) 2px solid"};
  color: ${(props) =>
    props.active ? "var(--color-text-primary)" : "var(--color-alternative)"};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PictureContainer = styled.div`
  width: 600px;
  height: 600px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  border-radius: 50%;
  z-index: 1;
`;
const Connector = styled.div`
  height: 10px;
  width: 300px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-top: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
`;
const AboutContentContainer = styled.article`
  width: 600px;
  height: 600px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export default About;
