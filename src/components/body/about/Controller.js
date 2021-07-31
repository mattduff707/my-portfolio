import React from "react";
import styled from "styled-components";
import CoolButton from "../../CoolButton";

const Controller = ({ aboutData, handleIncrement, handleDecrement, handleDotClick, activeIndex }) => {
  return (
    <ControlContainer>
      <ArrowButton handleClick={handleDecrement}>
        <Icon className="fas fa-angle-left" />
      </ArrowButton>
      <DotContainer>
        {aboutData.map((item, index) => {
          return <Dot key={index} handleDotClick={handleDotClick} isActive={index === activeIndex} />;
        })}
      </DotContainer>
      <ArrowButton handleClick={handleIncrement}>
        <Icon className="fas fa-angle-right" />
      </ArrowButton>
    </ControlContainer>
  );
};
const ControlContainer = styled.div`
  width: 100%;
  border-top: 2px solid var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  margin-top: auto;
`;
const ArrowButton = styled(CoolButton)`
  padding: 5px 10px;
`;
const Icon = styled.i`
  font-size: 48px;
`;
const DotContainer = styled.div`
  /* border: 2px solid red; */
  /* width: 100px; */
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dot = styled.span`
  width: 25px;
  height: 25px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  margin: 0px 5px;
  background: ${(props) => (props.isActive ? "linear-gradient(to right, #fa709a 0%, #fee140 100%)" : "none")};
`;

export default Controller;
