import AboutContent from "./AboutContent";
import styled from "styled-components";

const ContentContainer = ({
  activeObj,
  activeContent,
  incrementKey,
  decrementKey,
}) => {
  // const returnActiveKeyVal = (obj) => {
  //   const activeKeyVal = Object.entries(obj).filter(([key, value]) => {
  //     return value.active;
  //   });

  //   return activeKeyVal;
  // };

  // const [activeAbout, setActiveAbout] = useState(returnActiveKeyVal(activeObj));

  // useEffect(() => {
  //   setActiveAbout(returnActiveKeyVal(activeObj));
  // }, [activeObj]);

  // const handleClick = (e) => {
  //   setActiveAbout(() => {
  //     const currentKey = activeAbout.key;
  //   });
  // };

  return (
    <>
      <PictureContainer></PictureContainer>
      <Connector />
      <AboutContentContainer>
        <AboutContent activeContent={activeContent} />
        <ButtonWrapper>
          <ArrowButton onClick={decrementKey}>
            <i className="fas fa-angle-left"></i>
          </ArrowButton>
          <ArrowButton onClick={incrementKey}>
            <i className="fas fa-angle-right"></i>
          </ArrowButton>
        </ButtonWrapper>
      </AboutContentContainer>
    </>
  );
};

const PictureContainer = styled.div`
  width: 600px;
  height: 600px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  border-radius: 50%;
  z-index: 1;
`;
const Connector = styled.div`
  height: 10px;
  width: 300px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-top: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
`;
const AboutContentContainer = styled.article`
  width: 600px;
  height: 600px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
const ArrowButton = styled.button`
  margin: 10px 20px;
`;
export default ContentContainer;
