import React from "react";
import styled from "styled-components";

const PageHeader = ({ className, children, title, tag, topShadow }) => {
  return (
    <HeaderContainer topShadow={topShadow} className={className}>
      <Header as={tag}>{title || children}</Header>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  /* min-width: 200px; */
  z-index: 10;
  transform: translateY(-8px);
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid var(--color-inset);
  border-left-color: var(--color-inset-light);
  border-top: none;
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 10px 3px -8px var(--color-shadow);
  padding: 10px 30px;
  margin-bottom: -8px;
  max-width: 90%;
  @media (max-width: 500px) {
    padding: 10px 20px;
    min-width: 100px;
  } ;
`;

const Header = styled.h3`
  text-align: center;
  /* border: 2px solid red; */
  display: block;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-page-heading);
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 4px;
  /* margin: 0px auto; */
`;
export default PageHeader;
