import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

const onVariants = {
  initial: {
    transform: 'translateY(-100%)',
  },
  testInitial: {
    transform: 'translateY(0%)',
  },

  enter: {
    transform: 'translateY(0%)',
    transition: { duration: 1, delay: 0.1, delayChildren: 1 },
  },
  exit: {
    transform: 'translateY(-100%)',
    transition: { duration: 1, delay: 0.1 },
  },
  testExit: {
    transform: 'translateY(0%)',
  },
};
const offVariants = {
  initial: {
    transform: 'translateY(0%)',
  },
  enter: {
    transform: 'translateY(0%)',
  },
  exit: {
    transform: 'translateY(0%)',
  },
};

const childOnVariants = {
  initial: { opacity: 0 },

  enter: { opacity: 1 },

  exit: { opacity: 0, transition: { delay: 0.2 } },
};
const childOffVariants = {
  initial: { opacity: 1 },

  enter: { opacity: 1 },

  exit: { opacity: 1 },
};

const AnimatedWrapper = ({ children, tag, className, isAnimated }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledWrapper
      initial="initial"
      animate="enter"
      as={tag}
      exit="exit"
      variants={shouldReduceMotion ? offVariants : isAnimated ? onVariants : offVariants}
    >
      <FadeWrapper className={className} variants={isAnimated ? childOnVariants : childOffVariants}>
        {children}
      </FadeWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(motion.div)`
  background-color: var(--color-primary);
  border: 3px solid var(--color-secondary);
  border-top: none;
  box-shadow: 0px 0px 15px 2px var(--shadow-color);
  border-radius: 0px 0px 25px 25px;
  width: 95%;
  height: 97%;
  max-height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  /* padding: 0px 10px; */
  /* padding-bottom: 10px; */
  position: relative;
  @media (max-width: 720px) {
    width: 95%;
  }
  /* @media (max-width: 500px) {
    height: auto;
    padding-bottom: 15px;
    margin-bottom: 10px;
  } */
`;
const FadeWrapper = styled(motion.div)`
  padding: 30px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-inset);
    border-radius: 5px;
    border: 4px solid var(--color-primary);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-inset-light);
  }
`;

export default AnimatedWrapper;
