import styled from 'styled-components';
import Header from './layout/Header';
import MainBody from './layout/MainBody';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  html {

    height: 100%;
  //color
  --color-primary: hsl(226, 45%, 15%);
  --color-secondary: hsl(225, 46%, 32%);
  --color-alternative: hsl(225, 46%, 85%);
 
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
  --font-size-page-heading: 1.1rem;
  @media (min-width: 501px) {
    --font-size-page-heading: 1.2rem;
  
  }
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

  // Shadow
  --shadow-color: hsl(226, 45%, 8%);
  --shadow-card: 2px 2px 8px 0px var(--shadow-color);

  svg {
    @media(max-width: 1025px) {
      display: none;
    }
  }
  
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
