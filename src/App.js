import styled from "styled-components";
import Header from "./layout/Header";
import MainBody from "./layout/MainBody";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { device } from "./constants";

const GlobalStyle = createGlobalStyle`
  html {

  //color
  --color-primary: hsl(226, 45%, 15%);
  --color-secondary: hsl(225, 46%, 25%);
  --color-alternative: hsl(225, 46%, 85%);
  --color-shadow: hsl(226, 45%, 3%);
  --color-text-primary: hsl(51, 99%, 72%);
  --color-text-secondary: hsl(2, 94%, 75%);
  --font-family-primary: 'Raleway', sans-serif;
  --font-family-secondary: 'Khula', sans-serif;
  

  //page grid
  --grid-size: 140px 1fr;

  // header title
  --font-size-name: 1.6rem;
  --font-size-subtitle: 1.2rem;


  //nav
  --font-size-nav: 1.2rem;
  --link-container-width: 130px;
  --link-container-height: 50px;

    // content
  --font-size-content: 1rem;

      //headings
  --font-size-heading: 1.5rem;

    //arrow buttons
  --arrow-font-size: 2rem;
  --arrow-button-width: 60px;
  --arrow-button-wrapper-padding: 0px ;

    //About Toggle
  --toggle-font-size: 1rem;
  --toggle-button-width: 120px;
  --toggle-button-padding: 5px 5px;

  // Connector
  --connector-length: 40px;

  @media (max-width: 500px) {
  --link-container-width: 110px;
  --link-container-height: 50px;
  }
  @media ${device.laptop} {
    --font-size-content: 1.1rem;
    --grid-size: 110px 1fr;
  }

  @media ${device.laptopL} {
    --font-size-content: 1.1rem;
    --connector-width: 10%;
  }

  @media ${device.desktop} {
  --grid-size: 120px 1fr;

  --font-size-name: 2rem;
  --font-size-subtitle: 1.4rem;

  --font-size-nav: 1.2rem;
  --link-container-width: 140px;
  --link-container-height: 50px;

  --font-size-content: 1.2rem;

  --font-size-heading: 1.8rem;

  --arrow-font-size: 3rem;
  --arrow-button-width: 60px;


  --toggle-font-size: 1.2rem;
  --toggle-button-width: 160px;
  --toggle-button-padding: 10px 10px;
  }
  @media ${device.desktopL} {
    

    --font-size-content: 1.5rem;

    --font-size-nav: 1.3rem;
  --link-container-width: 160px;
  --link-container-height: 60px;

 

  --font-size-heading: 2.2rem;

  --arrow-font-size: 4rem;
  --arrow-button-width: 80px;


  }





  body {
    background-color: var(--color-primary);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  }
`;

const GridWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--grid-size);
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;

function App() {
  return (
    <Router>
      <GridWrapper>
        <GlobalStyle />
        <Header />
        <MainBody />
      </GridWrapper>
    </Router>
  );
}

export default App;
