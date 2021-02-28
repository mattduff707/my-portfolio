import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-primary);
  border-top: 2px solid #22315d;
  box-shadow: 0px -1px 5px black;
  height: 100%;
  width: 100%;
  grid-area: footer;
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
