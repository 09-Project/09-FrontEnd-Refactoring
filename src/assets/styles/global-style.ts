import { createGlobalStyle } from "styled-components";
import normalize from "normalize-package-data";

const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  font-weight: normal;
}
input {
  padding: 0;
  outline: none;
}
a {
  text-decoration: none;
  color: black;
}
p {
  margin: 0%;
}
ul,
li {
  padding: 0;
  list-style: none;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`
export default GlobalStyle;