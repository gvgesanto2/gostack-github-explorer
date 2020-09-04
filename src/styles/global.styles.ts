import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/images/gitbg.svg';

export default createGlobalStyle`
  /* Resetting */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
  }

  /* Defining 1rem=10px */
  html {
    font-size: 62.5%;
  }

  /* Base styles */
  #root {
    max-width: 96rem;
    padding: 4rem 2rem;
    margin: 0 auto;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;

    font-family:'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button, input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    list-style: none;
  }

  /* Utilities classes */

  /* Margin bottom */
  .mb-xm {
    margin-bottom: 2rem;
  }
  .mb-sm {
    margin-bottom: 3rem;
  }
  .mb-md {
    margin-bottom: 4rem;
  }
  .mb-lg {
    margin-bottom: 6rem;
  }
  .mb-xlg {
    margin-bottom: 8rem;
  }

  /* Margin top */
  .mt-xm {
    margin-bottom: 2rem;
  }
  .mt-sm {
    margin-bottom: 3rem;
  }
  .mt-md {
    margin-bottom: 4rem;
  }
  .mt-lg {
    margin-bottom: 6rem;
  }
  .mt-xlg {
    margin-bottom: 8rem;
  }
`;
