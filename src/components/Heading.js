import React from 'react';
import styled from 'styled-components';

const Heading = ({ className, children, title, tag, topShadow }) => {
  return (
    <HeadingContainer topShadow={topShadow} className={className}>
      <HeadingText as={tag}>{title || children}</HeadingText>
    </HeadingContainer>
  );
};
const HeadingContainer = styled.div`
  /* min-width: 200px; */
  z-index: 10;
  transform: translateY(-30px);
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  border: 3px solid var(--color-secondary);

  border-radius: 25px;
  box-shadow: 0px -8px 8px -8px var(--shadow-color);
  padding: 10px 30px;
  margin-bottom: -32px;
  @media (max-width: 500px) {
    padding: 10px 20px;
    min-width: 100px;
  } ;
`;

const HeadingText = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-heading);
  background-color: #fa709a;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default Heading;
