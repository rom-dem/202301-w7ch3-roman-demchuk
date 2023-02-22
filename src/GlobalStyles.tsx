import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer
  }
`;
export default GlobalStyle;
