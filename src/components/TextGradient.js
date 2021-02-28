import React from "react";
import styled from "styled-components";

const TextGradient = ({ children, size, tag, padding }) => {
  return (
    <AddGradient size={size} as={tag} padding={padding}>
      {children}
    </AddGradient>
  );
};

const AddGradient = styled.p`
  font-size: ${(props) => props.size};
  padding: ${(props) => props.padding};

  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default TextGradient;
