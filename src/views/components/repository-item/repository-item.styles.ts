import styled from 'styled-components';

import filledStar from '../../../assets/images/filled_star.png';

export const RepositoryItemContainer = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    background: #fff;
    border-radius: 5px;
    position: relative;
    padding: 2.4rem;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(1rem);
    }

    svg {
      color: ${({ theme }) => theme.light_grey_color_1};
    }

    .x-icon {
      position: absolute;
      top: 0;
      left: 0;
      margin: 1rem 0 0 1rem;
    }

    .actionContainer {
      display: flex;
      align-items: center;

      margin-right: 3rem;

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
        }

        &:last-child {
          border-radius: 0 100px 100px 0;
          padding: 1rem 2rem 1rem 1rem;
        }

        &:not(:last-child) {
          margin-right: 0.2rem;
        }
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      margin-left: 1.5rem;
    }

    div:first-of-type {
      flex: 1;
      margin: 0 1.6rem;

      strong {
        font-size: 2rem;
        color: ${({ theme }) => theme.dark_grey_color_1};
      }

      p {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.light_color};
        margin-top: 0.4rem;
      }
    }

    .chevron-icon {
      margin-left: auto;
    }
  }
`;
