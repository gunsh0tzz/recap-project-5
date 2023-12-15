import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  ul, li {
    list-style-type: none;
  }

  .debug {
    border: 2px dashed red;

    width: fit-content;
    height: fit-content;
  }
`;
