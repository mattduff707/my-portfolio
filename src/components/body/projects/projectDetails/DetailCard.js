import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';

const ArticleContainer = styled.article`
  flex: 1;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0px 10px 30px;
  /* border: 2px solid var(--color-secondary); */
  /* border-radius: 20px; */
  /* box-shadow: 0px 0px 15px var(--color-shadow); */
  @media (min-width: 1440px) {
    width: auto;
    padding-bottom: 0px;
  }
`;
const ImageContainer = styled.div`
  padding-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 8px 2px var(--color-shadow);
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 8px 2px var(--color-shadow);
  border-radius: 20px;
  margin-top: 30px;
  background-color: var(--color-primary);
`;

const Description = styled.p`
  text-indent: 20px;
  color: var(--color-alternative);
  font-family: var(--font-family-secondary);
  padding: 15px;
  font-size: 0.9rem;
  max-width: 1000px;

  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px 15px;
  }
`;

const DetailCard = ({ title, text, image, imageAlt }) => {
  return (
    <ArticleContainer>
      <ImageContainer>
        <Image src={image} alt={imageAlt} />
      </ImageContainer>
      <ContentContainer>
        <Heading topShadow>{title}</Heading>
        <Description>{text}</Description>
      </ContentContainer>
    </ArticleContainer>
  );
};

export default DetailCard;
