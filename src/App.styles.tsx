import { createGlobalStyle } from "styled-components"

export const AppGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    /* colors */
    --colors-primary: #000;
    --primary-purple: #3D2D6B;
    --primary-purple-transparent: rgba(73,58,117,0.33);
    --primary-blue: #2825A6;
    --primary-blue-transparent: rgba(40,37,166,0.33);

    --navbar-height: 70px;
  }

  html,
  body {
    margin: 0;
    padding: 0;

    min-height: 100%;
  }

  body {
    font-family: sans-serif;
    width: 100%;
    color: var(--colors-primary);
  }

  html,
  body,
  #root {
    height: 100%;
  }
`
