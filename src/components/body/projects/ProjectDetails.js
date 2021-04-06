import React from "react";
import styled from "styled-components";
import AnimatedWrapper from "../../animation/AnimatedWrapper";
import PageHeader from "../../PageHeader";

const ProjectDetails = () => {
  return (
    <FlexWrapper>
      <AnimatedWrapper bottom>
        <PageHeader>Project Details</PageHeader>
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

export default ProjectDetails;
