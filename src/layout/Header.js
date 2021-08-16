import React from 'react';
import styled from 'styled-components';
import Contact from '../components/header/Contact';
import Nav from '../components/header/Nav';
import Title from '../components/header/Title';

const StyledHeader = styled.header`
  //background-color: var(--color-primary);
  height: 100%;
  width: 100%;
  border-bottom: 3px solid var(--color-secondary);
  box-shadow: 0px 1px 15px var(--color-shadow);
  background-color: var(--color-primary);
  grid-area: header;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  position: relative;
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
const StyledContact = styled(Contact)`
  margin-left: auto;
  margin-right: 40px;
  @media (max-width: 1025px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title />
      <Nav />
      <StyledContact />
    </StyledHeader>
  );
};

export default Header;
