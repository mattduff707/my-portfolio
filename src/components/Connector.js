import React from "react";
import styled from "styled-components";

const StylishConnector = styled.div`
  z-index: 1;
  height: ${(props) =>
    props.vertical ? "var(--connector-length)" : `var(--connector-width)`};
  width: ${(props) =>
    props.vertical ? "var(--connector-width)" : `var(--connector-length)`};
  /* flex: 1 10; */

  box-shadow: 0 0 8px var(--color-shadow);
  ${(props) => {
    if (props.vertical) {
      return `
      border-left: 2px solid var(--color-secondary);
      border-right: 2px solid var(--color-secondary);
      background-image: linear-gradient(to bottom, #fa709a 0%, #fee140 100%);
  
  `;
    } else {
      return `
      border-top: 2px solid var(--color-secondary);
      border-bottom: 2px solid var(--color-secondary);
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
      
      `;
    }
  }};

  ${(props) =>
    props.left
      ? ` background-image: linear-gradient(to left, #fa709a 0%, #fee140 100%);`
      : ` background-color: var(--color-text-primary)`};

  @media (max-width: ${(props) => props.noDisplayAtMax}) {
    display: none;
  }
  @media (min-width: ${(props) => props.noDisplayAtMin}) {
    display: none;
  }
`;

const Connector = ({
  vertical,
  left,
  noDisplayAtMin,
  noDisplayAtMax,
  className,
}) => {
  return (
    <>
      <StylishConnector
        className={className}
        noDisplayAtMin={noDisplayAtMin}
        noDisplayAtMax={noDisplayAtMax}
        vertical={vertical}
        left={left}
      />
    </>
  );
};

export default Connector;
