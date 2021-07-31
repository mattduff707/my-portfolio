import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  initial: {
    transform: "translateY(-100%)",
  },
  bottomInitial: {
    transform: "translateY(100%)",
  },
  enter: {
    transform: "translateY(0%)",
    transition: { duration: 1, delay: 0.1, delayChildren: 1 },
  },
  bottomEnter: {
    transform: "translateY(0%)",
    transition: { duration: 1, delay: 0.1, delayChildren: 1 },
  },
  exit: {
    transform: "translateY(-100%)",
    transition: { duration: 1, delay: 0.1 },
  },
  bottomExit: {
    transform: "translateY(100%)",
    transition: { duration: 1, delay: 0.1 },
  },
};
const childVariants = {
  initial: { opacity: 0 },
  bottomInitial: { opacity: 0 },
  enter: { opacity: 1 },
  bottomEnter: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  bottomExit: { opacity: 0, transition: { delay: 0.2 } },
};

const AnimatedWrapper = ({ children, tag, bottom, className }) => {
  if (bottom) {
    return (
      <StyledWrapperBottom initial="bottomInitial" animate="bottomEnter" as={tag} exit="bottomExit" variants={variants}>
        <FadeWrapper className={className} variants={childVariants}>
          {children}
        </FadeWrapper>
      </StyledWrapperBottom>
    );
  }
  return (
    <StyledWrapper initial="initial" animate="enter" as={tag} exit="exit" variants={variants}>
      <FadeWrapper className={className} variants={childVariants}>
        {children}
      </FadeWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(motion.div)`
  background-color: var(--color-primary);
  border: 3px solid var(--color-secondary);
  border-top: none;
  box-shadow: 0px 0px 15px var(--color-shadow);
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
const StyledWrapperBottom = styled(StyledWrapper)`
  border: 3px solid var(--color-secondary);
  border-bottom: none;
  border-radius: 25px 25px 0px 0px;
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
`;

export default AnimatedWrapper;
