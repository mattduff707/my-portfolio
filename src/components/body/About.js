import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import ContentContainer from "./about/ContentContainer";
import { aboutData } from "../../constants";
import PageHeader from "../PageHeader";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import CoolToggle from "../CoolToggle";

const About = () => {
  const { devObj, personObj } = aboutData;
  const person = "person";
  const developer = "developer";
  const defaultKey = 0;

  const returnActiveKeyVal = (obj) => {
    const activeKeyVal = Object.entries(obj).filter(([key, value]) => {
      return value.active;
    });

    return activeKeyVal;
  };

  const makeFalse = (arr) => {
    const newArr = arr.map((obj) => {
      if (obj.active) {
        const newObj = {
          ...obj,
          active: false,
        };
        return newObj;
      } else {
        return { ...obj };
      }
    });
    return newArr;
  };

  const makeTrue = (arr, key) => {
    const newArr = arr.map((obj, index) => {
      if (index === key) {
        const newObj = {
          ...obj,
          active: true,
        };
        return newObj;
      } else {
        return { ...obj };
      }
    });
    return newArr;
  };

  //Creates memoized newActive callback function. Fixes linting error on useEffect dependencies
  // ! more learning required on this topic
  const newActive = useCallback((arr, newKey) => {
    const allFalseArr = makeFalse(arr);
    const newArr = makeTrue(allFalseArr, newKey);
    return newArr;
  }, []);

  const defaultActive = (arr, key) => {
    const newArr = makeTrue(arr, key);
    return newArr;
  };

  const [activeKey, setActiveKey] = useState(defaultKey);
  const [activeObj, setActiveObj] = useState(defaultActive(devObj, activeKey));
  const [activeContent, setActiveContent] = useState(
    returnActiveKeyVal(activeObj)
  );
  const [activeTag, setActiveTag] = useState(developer);

  //sets activeContent to the  activeKey whenever the key changes
  useEffect(() => {
    setActiveContent(returnActiveKeyVal(newActive(activeObj, activeKey)));
  }, [activeKey, activeObj, newActive]);

  //Sets active key back to default when toggling between Dev object and Person Obj
  useEffect(() => {
    setActiveKey(defaultKey);
  }, [activeObj]);

  const handleChange = (e) => {
    setActiveObj(() =>
      e.target.value === developer
        ? newActive(devObj, defaultKey)
        : e.target.value === person
        ? newActive(personObj, defaultKey)
        : null
    );
    setActiveTag(() => e.target.value);
  };

  const incrementKey = () => {
    setActiveKey(() => {
      if (parseInt(activeKey) < activeObj.length - 1) {
        const incrementedKey = parseInt(activeKey) + 1;
        return incrementedKey;
      }
      return activeKey;
    });
  };
  const decrementKey = () => {
    setActiveKey(() => {
      if (parseInt(activeKey) > 0) {
        const decrementedKey = parseInt(activeKey) - 1;
        return decrementedKey;
      }
      return activeKey;
    });
  };

  return (
    <AnimatedWrapper>
      <PageHeader>About Me</PageHeader>
      <ToggleContainer>
        <StyledCoolToggle
          isActive={activeTag === developer}
          htmlFor="about-developer"
          margin={"0px 10px"}
        >
          Developer
          <Radio
            checked={activeTag === developer}
            type="radio"
            id="about-developer"
            value={developer}
            name="about-toggle"
            onChange={handleChange}
          />
        </StyledCoolToggle>
        <StyledCoolToggle
          isActive={activeTag === person}
          htmlFor="about-person"
          margin={"0px 10px"}
        >
          Person
          <Radio
            checked={activeTag === person}
            type="radio"
            id="about-person"
            value={person}
            name="about-toggle"
            onChange={handleChange}
          />
        </StyledCoolToggle>
      </ToggleContainer>
      <ContentContainerWrapper>
        <ContentContainer
          activeObj={activeObj}
          activeContent={activeContent}
          incrementKey={incrementKey}
          decrementKey={decrementKey}
        />
      </ContentContainerWrapper>
    </AnimatedWrapper>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 0px;
  //border: 4px solid yellow;
`;

const StyledCoolToggle = styled(CoolToggle)`
  font-size: var(--toggle-font-size);
  width: var(--toggle-button-width);
  padding: var(--toggle-button-padding);
`;

// Test for accessibility
const Radio = styled.input`
  position: absolute;
  visibility: hidden;
`;
const ContentContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid yellow; */
  height: 75%;
  width: 95%;
  @media (max-width: 1024px) {
    align-items: flex-start;
  }
  @media (max-width: 500px) {
    height: 80%;
  }
`;

export default About;
