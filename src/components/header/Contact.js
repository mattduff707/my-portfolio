import React from "react";
import styled from "styled-components";

const Contact = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  width: 500px;
  height: 100px;
  margin-left: auto;
  margin-right: 20px;
  border: 8px solid var(--color-inset);
  border-right: 8px solid var(--color-inset-light);
  border-bottom: 8px solid var(--color-inset-light);
  background-color: var(--color-inset-bg);
  border-radius: 15px;
  box-shadow: inset 0px 0px 4px var(--color-shadow);
`;

export default Contact;
