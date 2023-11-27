import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    font-family: 'Istok Web', sans-serif; /* Substitua 'Sua Fonte' pelo nome da fonte que você deseja usar */
  }
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: bold;}
`;
