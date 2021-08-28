import React from 'react';
import styled from 'styled-components';
import picture from '../../../images/gip.jpg';

const MainImage = ({ noDisplayAt }) => {
  return (
    <>
      <ImageContainer noDisplayAt={noDisplayAt}>
        <Image src={picture} alt="Matt duffy looking like michael cera" />
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  height: 100%;
  width: auto;
  margin-top: 20px;
  /* margin-bottom: 40px; */
  max-width: 400px;
  @media (min-width: 1025px) {
    height: auto;
    width: 33%;
    max-width: 400px;
    margin: 20px;
  }

  ${(props) => {
    return `
        @media(max-width: ${props.noDisplayAt}){
            display: none;
        }
      `;
  }}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
  border: 4px solid var(--color-secondary);
  box-shadow: var(--shadow-card);
`;

export default MainImage;
