import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    transition: { delay: 1 },
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const FadeContent = ({ children }) => {
  return (
    <FadeWrapper
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </FadeWrapper>
  );
};

const FadeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default FadeContent;
