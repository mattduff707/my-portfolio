import { useState, useEffect } from "react";
import styled from "styled-components";
import ContentContainer from "./about/ContentContainer";

const About = () => {
  const person = "person";
  const developer = "developer";
  const devObj = [
    {
      active: false,
      title: "Self Taught Developer",
      subtitle: "The journey so far...",
      text: "Self taught dev yo",
    },
    {
      active: false,
      title: "Why I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
    },
    {
      active: false,
      title: "My ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
    },
  ];

  const personObj = [
    {
      active: false,
      title: "Person Taught Developer",
      subtitle: "The journey so far...",
      text: "Self taught dev yo",
    },
    {
      active: false,
      title: "Person I got into Web Development",
      subtitle: "A computer nerd finds his passion",
      text: "I didn't even know it was an option...",
    },
    {
      active: false,
      title: "Person ambitions",
      subtitle: "What I want to achieve",
      text: "I plan to achieve this...",
    },
  ];

  const returnActiveKeyVal = (obj) => {
    const activeKeyVal = Object.entries(obj).filter(([key, value]) => {
      return value.active;
    });

    return activeKeyVal;
  };

  const getKey = (arr) => {
    const keyStr = arr
      .map(([key, value]) => {
        return key;
      })
      .toString();
    return keyStr;
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
        return obj;
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
        return obj;
      }
    });
    return newArr;
  };

  const findActiveVal = (arr, key) => {
    const active = arr[key];
    return active;
  };

  // const incrementKey = (keyStr) => {
  //   const newKey = parseInt(keyStr) + 1;
  //   return newKey;
  // };
  // const decrementKey = (keyStr) => {
  //   const newKey = parseInt(keyStr) - 1;
  //   return newKey;
  // };

  const newActive = (arr, newKey) => {
    // const activeKeyVal = returnActiveKeyVal(arr);
    // const activeKey = getKey(activeKeyVal);
    const allFalseArr = makeFalse(arr);
    // const newKey = mathFunc(activeKey);
    const newArr = makeTrue(allFalseArr, newKey);
    return newArr;
  };

  const defaultKey = 0;
  const [activeKey, setActiveKey] = useState(defaultKey);
  const [activeObj, setActiveObj] = useState(newActive(devObj, activeKey));
  const [activeContent, setActiveContent] = useState(
    returnActiveKeyVal(activeObj)
  );

  useEffect(() => {
    setActiveContent(returnActiveKeyVal(activeObj));
  }, [activeObj]);

  // useEffect(() => {
  //   setActiveKey(getKey(returnActiveKeyVal(activeObj)));
  // }, [activeObj]);

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
          <ToggleLabel htmlFor="about-developer">
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
  grid-template-rows: 140px 1fr;
  grid-template-areas:
    "toggleKeys"
    "aboutContent";
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  padding-top: 10px;
`;
const ToggleWrapper = styled.div`
  border: 2px solid var(--color-alternative);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 50%;
`;
const ToggleLabel = styled.label`
  font-family: var(--font-family-primary);
  font-weight: bolder;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: ${(props) =>
    props.active ? "var(--color-text-primary)" : "var(--color-alternative)"};
`;
const Radio = styled.input`
  padding-right: 10px;
`;
const ContentContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
