import styled from "styled-components";
import Header from "./layout/Header";
import MainBody from "./layout/MainBody";
import Footer from "./layout/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  --color-primary: #1a2438;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GridWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 300px 1fr 50px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

function App() {
  return (
    <GridWrapper>
      <GlobalStyle />
      <Header />
      <MainBody />
      <Footer />
    </GridWrapper>
  );
}

export default App;
