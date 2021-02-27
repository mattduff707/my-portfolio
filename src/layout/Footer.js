import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: red;
  height: 100%;
  width: 100%;
  grid-area: footer;
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
