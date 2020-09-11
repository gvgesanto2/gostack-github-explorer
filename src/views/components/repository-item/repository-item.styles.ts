import styled from 'styled-components';

import filledStar from '../../../assets/images/filled_star.png';

export const RepositoryItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background: #fff;
  border-radius: 5px;
  position: relative;
  padding: 2.4rem;
  transition: transform 0.2s;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;

    padding: 0;
  }

  &:hover {
    transform: translateX(1rem);
  }

  svg {
    color: ${({ theme }) => theme.light_grey_color_1};
    width: 2rem;
    height: 2rem;
  }

  .x-icon {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem 0 0 1rem;
    z-index: 10;

    &:hover {
      color: ${({ theme }) => theme.error_color};
    }
  }

  a:first-of-type {
    flex: 1;

    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
      flex-direction: column;

      width: 100%;
      position: relative;

      &::before {
        content: '';
        background: red;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      margin-left: 1.5rem;

      @media only screen and (max-width: 750px) {
        width: 7rem;
        height: 7rem;
        margin-left: 3rem;
        /* width: 50%;
        height: 50%;
        border-radius: 5px;
        margin: 0 0 1.2rem 0; */
      }

      @media only screen and (max-width: 600px) {
        width: 50%;
        height: 50%;
        border-radius: 5px;
        margin: 0 0 1.6rem 0;
        z-index: 2;
      }
    }

    .content {
      flex: 1;
      margin: 0 1.6rem;

      strong {
        font-size: 2rem;
        color: ${({ theme }) => theme.dark_grey_color_1};

        @media only screen and (max-width: 600px) {
          font-size: 2.4rem;
          position: relative;
          z-index: 2;
        }
      }

      p {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.light_color};
        margin-top: 0.4rem;

        @media only screen and (max-width: 750px) {
          display: none;
        }
      }
    }
  }

  .actionContainer {
    display: flex;
    align-items: center;

    margin-right: 3rem;

    @media only screen and (max-width: 750px) {
      margin: 0 5rem;
    }

    button {
      display: flex;
      align-items: center;

      color: #fff;
      /* background: #666; */
      background-color: ${({ theme }) => theme.light_color};
      z-index: 10;

      svg {
        color: #fff;
      }

      &:hover {
        background-color: ${({ theme }) => theme.dark_color};

        .star-icon {
          color: transparent;
          background: url(${filledStar}) no-repeat center center/cover;
        }
      }

      &:first-child {
        border-radius: 100px 0 0 100px;
        padding: 1rem 1rem 1rem 2rem;

        @media only screen and (max-width: 750px) {
          padding: 1.2rem 1.2rem 1.2rem 2.2rem;
        }
      }

      &:last-child {
        border-radius: 0 100px 100px 0;
        padding: 1rem 2rem 1rem 1rem;

        @media only screen and (max-width: 750px) {
          padding: 1.2rem 2.2rem 1.2rem 1.2rem;
        }
      }

      &:not(:last-child) {
        margin-right: 0.2rem;

        @media only screen and (max-width: 750px) {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .chevron-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
