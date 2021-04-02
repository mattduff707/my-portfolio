import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, tag }) => {
  return (
    <StyledWrapper
      animate={{
        height: ["0%", "90%"],
      }}
      transition={{ delay: 0.1 }}
      as={tag}
    >
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled(motion.div)`
  border: 3px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 25px;
  width: 90%;
  height: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export default AnimatedWrapper;
