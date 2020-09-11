import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ theme }) => theme.header_height}rem;
  background: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  padding: 4px 9vw 0;
  z-index: 900;

  @media only screen and (max-width: 950px) {
    position: relative;
  }

  nav {
    display: flex;
    /* align-items: center; */
    height: 100%;

    div {
      display: flex;
      align-items: center;

      height: 100%;
      border-bottom: 4px solid transparent;

      &:active {
        border-color: ${({ theme }) => theme.primary_color};

        a {
          color: ${({ theme }) => theme.primary_color};
          background: #fff;
        }
      }
    }

    & > div:not(:last-child) {
      margin-right: 0.8rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      height: calc(100%);

      color: ${({ theme }) => theme.light_color};
      border-radius: 5px;

      padding: 0 2rem;
      transition: all 0.2s;

      &:hover {
        background: ${({ theme }) => theme.light_grey_color_2};
        /* background: #f1f1f1; */
        color: #666;
      }

      /* span {
        border-bottom: 2px solid transparent;
        padding-bottom: 2px;
        transition: border-color 0.2s;
      }
      &:hover span {
        border-color: #666;
      } */

      svg {
        margin-right: 2px;
      }
    }
  }
`;
