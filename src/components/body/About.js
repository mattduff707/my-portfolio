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
    <ComponentWrapper>
      <HeaderContainer>
        {/* <HeaderWrapper> */}
        <Header>About me</Header>
        {/* </HeaderWrapper> */}
      </HeaderContainer>
      <StyledWrapper>
        <ToggleContainer>
          <ToggleWrapper isActive={activeTag === developer}>
            <ToggleLabel htmlFor="about-developer">
              Developer
              <Radio
                checked={activeTag === developer}
                type="radio"
                id="about-developer"
                value={developer}
                name="about-toggle"
                onChange={handleChange}
              />
            </ToggleLabel>
          </ToggleWrapper>
          <ToggleWrapper isActive={activeTag === person}>
            <ToggleLabel htmlFor="about-person">
              Person
              <Radio
                checked={activeTag === person}
                type="radio"
                id="about-person"
                value={person}
                name="about-toggle"
                onChange={handleChange}
              />
            </ToggleLabel>
          </ToggleWrapper>
        </ToggleContainer>
        <ContentContainerWrapper>
          <ContentContainer
            testPic={testPic}
            activeObj={activeObj}
            activeContent={activeContent}
            incrementKey={incrementKey}
            decrementKey={decrementKey}
          />
        </ContentContainerWrapper>
      </StyledWrapper>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 50px;
`;
const HeaderWrapper = styled.div`
  padding: 10px 40px;
  border: 2px solid var(--color-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 8px var(--color-shadow);
`;
const Header = styled.h3`
  font-family: var(--font-family-primary);
  font-size: 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const StyledWrapper = styled.div`
  border: 3px solid var(--color-secondary);
  box-shadow: 0px 0px 8px var(--color-shadow);
  border-radius: 25px;
  width: 85%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
  //border: 4px solid yellow;
`;
const ToggleWrapper = styled.div`
  border: 2px solid var(--color-secondary);
  border-color: ${(props) =>
    props.isActive ? "var(--color-text-primary)" : "var(--color-secondary)"};
  color: ${(props) =>
    props.isActive
      ? "var(--color-text-secondary)"
      : "var(--color-alternative)"};
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
`;
const Radio = styled.input`
  position: absolute;
  visibility: hidden;
`;
const ContentContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 75%;
  width: 75%;
`;

export default About;
