import React from "react";
import styled from "styled-components";

const TextGradient = ({ children, size, tag }) => {
  return (
    <AddGradient size={size} as={tag}>
      {children}
    </AddGradient>
  );
};

const AddGradient = styled.h2`
  font-size: ${(props) => props.size};

  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default TextGradient;
