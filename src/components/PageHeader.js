import React from "react";
import styled from "styled-components";

const PageHeader = ({ children }) => {
  return (
    <HeaderContainer>
      <Header>{children}</Header>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid var(--color-secondary);
  border-right: 3px solid var(--color-secondary);
  border-left: 3px solid var(--color-secondary);
  border-radius: 0px 0px 25px 25px;
  padding: 10px 30px;
`;

const Header = styled.h3`
  font-family: var(--font-family-primary);
  font-size: 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default PageHeader;
