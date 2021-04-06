import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  //background-color: var(--color-primary);
  border-top: 3px solid var(--color-secondary);
  box-shadow: 0px -1px 15px var(--color-shadow);
  height: 100%;
  width: 100%;
  grid-area: footer;
  z-index: 1;
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/*email or contact form link*/}
      {/*page controls: Light / Dark mode. Toggle Animations. etc*/}
    </StyledFooter>
  );
};

export default Footer;
