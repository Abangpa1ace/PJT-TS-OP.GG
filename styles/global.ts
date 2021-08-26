import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  }
  body {
    max-width: 500px;
    min-height: 100vh;
    margin: 0 800px;
    border: 2px solid red;
  }
  ul, li {
    list-style: none;
  }
  input {
    background: transparent;
    border: 0;
    outline: 0;
  }
  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  svg {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalReset;