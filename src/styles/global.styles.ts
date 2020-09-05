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

  /* Vertical Margins */
  .m-xxm {
    margin: 1rem 0;
  }
  .m-xm {
    margin: 2rem 0;
  }
  .m-sm {
    margin: 3rem 0;
  }
  .m-md {
    margin: 4rem 0;
  }
  .m-lg {
    margin: 6rem 0;
  }
  .m-xlg {
    margin: 8rem 0;
  }

  /* Margin bottom */
  .mb-xxm {
    margin-bottom: 1rem;
  }
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
  .mt-xxm {
    margin-top: 1rem;
  }
  .mt-xm {
    margin-top: 2rem;
  }
  .mt-sm {
    margin-top: 3rem;
  }
  .mt-md {
    margin-top: 4rem;
  }
  .mt-lg {
    margin-top: 6rem;
  }
  .mt-xlg {
    margin-top: 8rem;
  }
`;
