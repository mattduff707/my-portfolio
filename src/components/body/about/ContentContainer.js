import AboutContent from "./AboutContent";
import styled from "styled-components";

const ContentContainer = ({ activeContent, incrementKey, decrementKey }) => {
  return (
    <>
      <PictureContainer>
        <Gradient>
          <Image src={activeContent[0][1].picture} alt="test" />
        </Gradient>
      </PictureContainer>
      <Connector />
      <AboutContentContainer>
        <AboutContent activeContent={activeContent} />
        <ButtonWrapper>
          <ArrowButton onClick={decrementKey}>
            <Icon className="fas fa-angle-left"></Icon>
          </ArrowButton>
          <ArrowButton onClick={incrementKey}>
            <Icon className="fas fa-angle-right"></Icon>
          </ArrowButton>
        </ButtonWrapper>
      </AboutContentContainer>
    </>
  );
};

const PictureContainer = styled.div`
  width: 600px;
  height: 500px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gradient = styled.div`
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Connector = styled.div`
  height: 10px;
  width: 200px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-top: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
`;
const AboutContentContainer = styled.article`
  width: 600px;
  height: 500px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
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
  width: 60px;
  padding: 0px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  border-radius: 20px;
`;
const Icon = styled.i`
  font-size: 4rem;
  color: var(--color-alternative);
`;
export default ContentContainer;
