import styled from "styled-components";
import Header from "./layout/Header";
import MainBody from "./layout/MainBody";
import Footer from "./layout/Footer";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html {
  --color-primary: #151d38;
  --font-primary: 'Raleway', sans-serif;
  }
  body {
    background-color: var(--color-primary)
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
  grid-template-rows: 250px 1fr 75px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

function App() {
  return (
    <Router>
      <GridWrapper>
        <GlobalStyle />
        <Header />
        <MainBody />
        <Footer />
      </GridWrapper>
    </Router>
  );
}

export default App;
