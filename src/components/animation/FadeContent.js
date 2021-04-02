import styled from "styled-components";
import { motion } from "framer-motion";

const FadeContent = ({ children }) => {
  return (
    <FadeWrapper animate={{ opacity: [0, 1] }} transition={{ delay: 0.7 }}>
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
