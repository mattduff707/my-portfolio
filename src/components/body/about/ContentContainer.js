import AboutContent from "./AboutContent";
import styled from "styled-components";
import CoolButton from "../../CoolButton";

const ArrowButton = styled(CoolButton)`
  width: var(--arrow-button-width);
  font-size: var(--arrow-font-size);
`;

const ContentContainer = ({ activeContent, incrementKey, decrementKey }) => {
  return (
    <>
      <PictureContainer>
        <Image src={activeContent[0][1].picture} alt="test" />
      </PictureContainer>
      <Connector />
      <AboutContentContainer>
        <AboutContent activeContent={activeContent} />
        <ButtonWrapper>
          <ArrowButton handleClick={decrementKey}>
            <Icon className="fas fa-angle-left"></Icon>
          </ArrowButton>
          <ArrowButton handleClick={incrementKey}>
            <Icon className="fas fa-angle-right"></Icon>
          </ArrowButton>
        </ButtonWrapper>
      </AboutContentContainer>
    </>
  );
};

const PictureContainer = styled.div`
  /* width: 47.5%; */
  flex: 1 1;
  height: 100%;
  max-height: 100%;
  padding: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  border: 3px solid var(--color-secondary);
`;
const Connector = styled.div`
  height: 10px;
  width: var(--connector-length);
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-top: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
  @media (max-width: 1024px) {
    display: none;
  }
`;
const AboutContentContainer = styled.article`
  /* width: 47.5%; */
  flex: 1 1;
  height: 100%;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 95%;
    height: auto;
  }
  @media (max-width: 500px) {
    box-shadow: none;
    border: none;
    width: 100%;
    padding-bottom: 0px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px 5px;
  border-top: 2px solid var(--color-secondary);
`;

const Icon = styled.i`
  /* font-size: 4rem; */
`;
export default ContentContainer;
