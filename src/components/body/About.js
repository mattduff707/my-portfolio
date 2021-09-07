import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedWrapper from '../animation/AnimatedWrapper';
import PageHeader from '../PageHeader';
import { aboutData } from '../../constants';
import AboutImage from './about/AboutImage';
import AboutContent from './about/AboutContent';

const About = ({ isAnimated }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAbout, setActiveAbout] = useState(aboutData[activeIndex]);

  useEffect(() => {
    setActiveAbout(aboutData[activeIndex]);
  }, [activeIndex]);

  const handleIncrement = () => {
    if (activeIndex === aboutData.length - 1) {
      setActiveIndex(() => 0);
    } else {
      setActiveIndex(() => activeIndex + 1);
    }
  };
  const handleDecrement = () => {
    if (activeIndex === 0) {
      setActiveIndex(() => aboutData.length - 1);
    } else {
      setActiveIndex(() => activeIndex - 1);
    }
  };
  const handleDotClick = (e) => {
    console.log(e.target.value);
    setActiveIndex(() => e.target.value);
  };

  return (
    <AnimatedWrapper isAnimated={isAnimated}>
      <ContentContainer>
        <PageHeader>About</PageHeader>
        <AboutContainer aria-live="polite">
          <AboutImage imageSrc={activeAbout.picture} />
          <AboutContent
            aboutData={aboutData}
            title={activeAbout.title}
            content={activeAbout.text}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDotClick={handleDotClick}
            activeIndex={activeIndex}
          />
        </AboutContainer>
      </ContentContainer>
    </AnimatedWrapper>
  );
};

const ContentContainer = styled.section`
  /* border: 2px solid red; */

  isolation: isolate;
  /* z-index: -1; */
  width: 100%;
  max-width: 1800px;
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--shadow-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding-bottom: 20px; */
  /* @media (min-width: 1440px) {
    width: 100%;
  } */
`;
const AboutContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  /* max-height: 575px; */
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 20px;
  /* margin-top: -20px; */
  @media (min-width: 769px) {
    max-width: 800px;
  }
  @media (min-width: 1025px) {
    margin-top: 0px;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1500px;
    padding: 20px 20px 40px;
  }
`;

export default About;
