import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from '.'
import imgBackground from '../statics/img-background.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body::before, body::after {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
  }

  body::before {
    left: 0;
    background-color: #000;
  }

  body::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, rgba(0, 0, 0, 1)), url(${imgBackground}) no-repeat center center;
    filter: blur(1px);
    opacity: 0.7;
    background-size: cover;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #09090A;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    body::before, body::after {
      width: 100%;
    }

    body::after {
      opacity: 0.3;
    }
  }
`
