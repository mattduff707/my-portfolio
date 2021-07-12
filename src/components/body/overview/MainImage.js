import React from "react";
import styled from "styled-components";
import picture from "../../../images/me.jpg";

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
  height: 150px;
  width: 150px;
  margin: 0px 30px;
  /* margin: 0px auto 0px auto; */
  @media (min-width: 500px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 769px) {
    height: 400px;
    width: 400px;
  }
  @media (min-width: 1440px) {
    height: 500px;
    width: 500px;
  }
  @media (min-width: 1800px) {
    height: 600px;
    width: 600px;
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
  height: auto;
  display: block;
  border-radius: 50%;
  border: 4px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
`;

export default MainImage;
