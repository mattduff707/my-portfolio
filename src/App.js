import styled from "styled-components";
import Header from "./layout/Header";
import MainBody from "./layout/MainBody";
import Footer from "./layout/Footer";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html {
  --color-primary: hsl(226, 45%, 15%);
  --color-secondary: hsl(225, 46%, 25%);
  --color-alternative: hsl(225, 46%, 70%);
  --color-shadow: hsl(226, 45%, 3%);
  --color-text-primary: hsl(51, 99%, 72%);
  --color-text-secondary: hsl(2, 94%, 75%);
  --font-family-primary: 'Raleway', sans-serif;
  --font-family-secondary: 'Khula', sans-serif;
  }
  body {
    background-color: var(--color-primary);
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
  grid-template-rows: 200px 1fr 50px;
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
