import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../../animation/AnimatedWrapper";
import PageHeader from "../../PageHeader";
import CoolButton from "../../CoolButton";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <FlexWrapper>
      <AnimatedWrapper bottom>
        <PageHeader>Project Details</PageHeader>
        <BtnLinkWrap to="/projects">
          <CoolButton padding="5px 10px" fontSize="1.2rem">
            Back to Projects <i className="fas fa-arrow-right"></i>
          </CoolButton>
        </BtnLinkWrap>
      </AnimatedWrapper>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;
const BtnLinkWrap = styled(Link)`
  position: absolute;
  left: 25px;
  top: 25px;
`;

export default ProjectDetails;
