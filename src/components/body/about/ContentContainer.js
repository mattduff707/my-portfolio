import AboutContent from "./AboutContent";
import styled from "styled-components";
import CoolButton from "../../CoolButton";

const ArrowButton = styled(CoolButton)`
  padding: 5px 15px;
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
          <ArrowButton margin={"0px 20px"} handleClick={decrementKey}>
            <Icon className="fas fa-angle-left"></Icon>
          </ArrowButton>
          <ArrowButton margin={"0px 20px"} handleClick={incrementKey}>
            <Icon className="fas fa-angle-right"></Icon>
          </ArrowButton>
        </ButtonWrapper>
      </AboutContentContainer>
    </>
  );
};

const PictureContainer = styled.div`
  width: 45%;
  height: 100%;
  max-height: 100%;
  padding: 20px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0px 0px 15px var(--color-shadow);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
`;
const Connector = styled.div`
  height: 10px;
  width: 10%;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  border-top: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  box-shadow: 0 0 8px var(--color-shadow);
`;
const AboutContentContainer = styled.article`
  width: 45%;
  height: 100%;
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

const Icon = styled.i`
  font-size: 4rem;
`;
export default ContentContainer;
