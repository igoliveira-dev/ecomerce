import { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#eeeeee',
  black: '#111',
  gray: '#333',
  pink: '#9845b1c7',
  blue: '#43b1ccff',
  lightGray: '#A3a3a3',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}

  .container {
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
  max-width: 80%;
  }
}
`
