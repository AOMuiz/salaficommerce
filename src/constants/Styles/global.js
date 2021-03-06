import { createGlobalStyle } from "styled-components";

import { colors } from "../colors";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;

    /* 768px */
    @media screen and (max-width: 48em) {
      font-size: 56.25%;
    }

    /* 576px */
    @media screen and (max-width: 36em) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    overflow-y: scroll;
    color: ${colors.primary};
    background-color: ${colors.white};
    padding-bottom: 2rem;
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
