import styled from 'styled-components';
import Header from './layout/Header';
import MainBody from './layout/MainBody';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { device } from './constants';

const GlobalStyle = createGlobalStyle`

  html {

    height: 100%;
  //color
  --color-primary: hsl(226, 45%, 15%);
  --color-secondary: hsl(225, 46%, 32%);
  --color-alternative: hsl(225, 46%, 85%);
  --color-shadow: hsl(226, 45%, 8%);
  --color-text-primary: hsl(51, 99%, 72%);
  --color-text-secondary: hsl(2, 94%, 75%);
  --color-inset: hsl(225, 46%, 24%);
  --color-inset-light: hsl(225, 46%, 30%);
  --color-inset-bg: hsl(226, 45%, 13%);

  //Typography
  --font-family-primary: 'Raleway', sans-serif;
  --font-family-secondary: 'Khula', sans-serif;

  --font-size-content: 1rem;
  --font-size-heading: 1.2rem;
  --font-size-page-heading: 1.3rem;
  @media(min-width: 768px){
    --font-size-heading: 1.3rem;
    --font-size-page-heading: 1.6rem;
  }
  @media(min-width: 1024px){
    --font-size-heading: 1.4rem;
    --font-size-page-heading: 1.8rem;
  }
  @media(min-width: 1440px) {
    --font-size-heading: 1.5rem;
    --font-size-page-heading: 1.8rem;
  }
  svg {
    @media(max-width: 1025px) {
      display: none;
    }
  }
  


  /* //page grid
  --grid-size: 140px 1fr;

  // header title
  --font-size-name: 1.6rem;
  --font-size-subtitle: 1.2rem;


  //nav
  --font-size-nav: 1rem;
  --link-container-width: 110px;
  --link-container-height: 50px;

    // content
  --font-size-content: 1rem;

      //headings
  --font-size-title: 1.25rem;
  --font-size-subtitle: 1rem;
  --font-size-heading: 1.3rem;

    //arrow buttons
  --arrow-font-size: 2rem;
  --arrow-button-width: 60px;
  --arrow-button-wrapper-padding: 0px ;

    //About Toggle
  --toggle-font-size: 1rem;
  --toggle-button-width: 120px;
  --toggle-button-padding: 5px 5px;

  // Connector
  --connector-length: 20px;
  --connector-width: 10px;

    @media (min-width: 500px){
    --connector-length: 30px;
    --connector-width: 10px;
    --font-size-title: 1.35rem;
    --font-size-subtitle: 1.1rem;
    }
    @media (min-width: 768px){
      --connector-length: 40px;
      --connector-width: 12px;
      
    
    }
    @media (min-width: 1024px){
      --font-size-title: 1.6rem;
      --font-size-subtitle: 1.2rem;
    }
    @media (min-width: 1440px) {
      --connector-length: 60px;
    --connector-width: 14px;
    --font-size-heading: 1.8rem;
    }


  @media ${device.laptop} {
    --font-size-content: 1.1rem;
    --grid-size: 110px 1fr;
  }

  @media ${device.laptopL} {
    --font-size-content: 1.1rem;
    
  }

  @media ${device.desktop} {
  --grid-size: 120px 1fr;

  --font-size-name: 2rem;
  --font-size-subtitle: 1.4rem;

  --font-size-nav: 1.2rem;
  --link-container-width: 140px;
  --link-container-height: 50px;

  --font-size-content: 1.2rem;

  

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

 

  

  --arrow-font-size: 4rem;
  --arrow-button-width: 80px; */


  }





  body {
    background-color: var(--color-primary);
    height: 100%;
  }
  #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;

const GridWrapper = styled.div`
  height: 100%;
  /* border: 2px solid red; */
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main';
  @media (max-width: 1024px) {
    grid-template-rows: 130px 1fr;
  }
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
