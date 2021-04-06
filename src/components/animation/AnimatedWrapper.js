import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  initial: {
    height: "0%",
  },
  enter: {
    height: "90%",
    transition: { duration: 1, delay: 0.1, delayChildren: 0.75 },
  },
  bottomEnter: {
    height: "95%",
    transition: { duration: 1, delay: 0.1, delayChildren: 0.75 },
  },
  exit: { height: "0%", transition: { duration: 1, delay: 0.1 } },
};
const childVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  bottomEnter: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedWrapper = ({ children, tag, bottom }) => {
  if (bottom) {
    return (
      <StyledWrapperBottom
        initial="initial"
        animate="bottomEnter"
        as={tag}
        exit="exit"
        variants={variants}
      >
        <FadeWrapper variants={childVariants}>{children}</FadeWrapper>
      </StyledWrapperBottom>
    );
  }
  return (
    <StyledWrapper
      initial="initial"
      animate="enter"
      as={tag}
      exit="exit"
      variants={variants}
    >
      <FadeWrapper variants={childVariants}>{children}</FadeWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(motion.div)`
  border: 3px solid var(--color-secondary);
  border-top: none;
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 0px 0px 25px 25px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 0px auto;
`;
const StyledWrapperBottom = styled(StyledWrapper)`
  border: 3px solid var(--color-secondary);
  border-bottom: none;
  border-radius: 25px 25px 0px 0px;
`;
const FadeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default AnimatedWrapper;
