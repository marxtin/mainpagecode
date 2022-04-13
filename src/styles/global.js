import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  .opacity{
    opacity: 1;
    transition: opacity .1s ease-in;
  }

  .opacity_zero{
    opacity:0;
  }
  
 `


    /*  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; */