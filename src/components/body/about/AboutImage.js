import React from 'react';
import styled from 'styled-components';

const AboutImage = ({ imageSrc }) => {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt="1" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: auto;
  /* padding: 0px 10px 10px 10px; */
  border-radius: 20px;
  padding-bottom: 30px;
  /* border: 2px solid var(--color-secondary); */
  /* box-shadow: 0px 0px 8px var(--color-shadow); */
  @media (min-width: 1025px) {
    height: 100%;
    width: 50%;
    padding-bottom: 0px;
    margin-right: 10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  border: 4px solid var(--color-secondary);
  box-shadow: var(--shadow-card);
  object-fit: cover;
`;

export default AboutImage;
