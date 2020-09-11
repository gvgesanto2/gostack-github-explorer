import styled from 'styled-components';

import githubBg from '../../../assets/images/github.svg';

export const Container = styled.li`
  width: 100%;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    background: #fff;
    border-radius: 5px;
    position: relative;
    padding: 2.4rem;
    overflow: hidden;
    transition: transform 0.2s;

    &::before {
      content: '';
      display: block;
      height: 12rem;
      width: 12rem;
      background: #000;
      position: absolute;
      top: -1rem;
      right: -1rem;
      opacity: 0.1;

      mask-image: url(${githubBg});
      mask-size: cover;
    }

    &:hover {
      transform: translateX(1rem);
    }

    div {
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

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: auto;
      color: ${({ theme }) => theme.light_grey_color_1};
    }
  }
`;
