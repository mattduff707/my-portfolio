import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import ContentContainer from "./about/ContentContainer";
import { aboutData } from "../../constants";
import testPic from "../../images/backgroundUs.jpeg";
import testPicTwo from "../../images/image0.jpeg";
import testPicThree from "../../images/image1.jpeg";

const About = () => {
  const { devObj, personObj } = aboutData;
  const person = "person";
  const developer = "developer";

  const makeImgArr = (...imgs) => {
    const newArr = [...imgs];
    return newArr;
  };
  console.log(makeImgArr(testPic, testPicTwo, testPicThree));

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

  const defaultKey = 0;
  const [activeKey, setActiveKey] = useState(defaultKey);
  const [activeObj, setActiveObj] = useState(defaultActive(devObj, activeKey));
  const [activeContent, setActiveContent] = useState(
    returnActiveKeyVal(activeObj)
  );
  const [activeImg, setActiveImg] = useState();

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
    <ComponentWrapper>
      <FormWrapper>
        <ToggleWrapper>
          <ToggleLabel devObj={activeObj} htmlFor="about-developer">
            Developer
            <Radio
              type="radio"
              id="about-developer"
              value={developer}
              name="about-toggle"
              onChange={handleChange}
            />
          </ToggleLabel>
        </ToggleWrapper>
        <ToggleWrapper>
          <ToggleLabel htmlFor="about-person">
            Person
            <Radio
              type="radio"
              id="about-person"
              value={person}
              name="about-toggle"
              // checked={activeKey === person}
              onChange={handleChange}
            />
          </ToggleLabel>
        </ToggleWrapper>
      </FormWrapper>
      <ContentContainerWrapper>
        <ContentContainer
          testPic={testPic}
          activeObj={activeObj}
          activeContent={activeContent}
          incrementKey={incrementKey}
          decrementKey={decrementKey}
        />
      </ContentContainerWrapper>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    "toggleKeys"
    "aboutContent";
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 100%;
`;
const ToggleWrapper = styled.div`
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  box-shadow: 0px 0px 8px var(--color-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 0px 10px;
  width: 160px;
  height: 50px;
`;
const ToggleLabel = styled.label`
  font-family: var(--font-family-primary);
  font-weight: bolder;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  width: 100%;
  color: ${(props) =>
    props.active ? "var(--color-text-primary)" : "var(--color-alternative)"};
`;
const Radio = styled.input`
  position: absolute;
  visibility: hidden;
`;
const ContentContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
