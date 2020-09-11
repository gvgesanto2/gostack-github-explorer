import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ theme }) => theme.sidebar_width}rem;
  height: calc(100% - ${({ theme }) => theme.header_height}rem);
  background: ${({ theme }) => theme.dark_color};
  /* border-radius: 3px; */
  /* box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  position: fixed;
  /* top: calc(${({ theme }) => theme.header_height}rem + 9rem); */
  top: calc(${({ theme }) => theme.header_height}rem + 0rem);
  left: 0;
  z-index: 900;

  @media only screen and (max-width: 950px) {
    flex-direction: row;

    width: 100%;
    /* height: 7rem; */
    position: relative;
    top: 0;
  }

  ul {
    font-size: 1.6rem;
    /* margin-top: 3.5rem; */
    margin-top: 7.5rem;

    @media only screen and (max-width: 950px) {
      flex: 1;
      display: flex;
      align-items: stretch;

      /* height: 100%; */
      margin: 0;
    }

    li {
      position: relative;

      &:not(:last-child) {
        margin-bottom: 0.5rem;

        @media only screen and (max-width: 950px) {
          margin: 0;
        }
      }

      @media only screen and (max-width: 950px) {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    li::before {
      content: '';
      width: 3px;
      height: 100%;
      background-color: ${({ theme }) => theme.primary_color};
      position: absolute;
      top: 0;
      left: 0;
      transform: scaleY(0);
      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
        background-color 0.1s;
    }

    li:hover::before,
    .active::before {
      transform: scaleY(1);
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;

      text-transform: uppercase;
      color: ${({ theme }) => theme.light_grey_color_2};
      position: relative;
      /* padding: 1.5rem 3rem; */
      padding: 1.7rem 3.4rem;
      z-index: 10;

      @media only screen and (max-width: 950px) {
        flex-direction: column;
        padding: 1.5rem 0.5rem;
      }
    }

    svg {
      width: 2.05rem;
      height: 2.05rem;
      color: currentColor;
      margin-right: 2rem;
      /* fill: currentColor; */

      @media only screen and (max-width: 950px) {
        margin-right: 0;
        margin-bottom: 0.7rem;
      }
    }
  }

  div {
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.light_grey_color_1};
    padding: 2.5rem;

    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
`;
