import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedWrapper = ({ children, tag }) => {
  return (
    <AnimatePresence>
      <StyledWrapper
        animate={{
          height: ["0%", "95%"],
        }}
        transition={{ delay: 0.1 }}
        as={tag}
        exit={{ height: "0%" }}
      >
        {children}
      </StyledWrapper>
    </AnimatePresence>
  );
};

const StyledWrapper = styled(motion.div)`
  border: 3px solid var(--color-secondary);
  border-top: none;
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 0px 0px 25px 25px;
  width: 90%;
  height: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export default AnimatedWrapper;
