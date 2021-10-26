import { createGlobalStyle } from "styled-components";
import normalize from "normalize-package-data";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }
`
export default GlobalStyle;