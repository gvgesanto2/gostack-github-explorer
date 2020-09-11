import styled from 'styled-components';

import githubBg from '../../../assets/images/github.svg';

export const RepositoryInfo = styled.section``;

export const RepositoryInfoHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    a {
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }

      strong {
        font-size: 3.6rem;
        color: ${({ theme }) => theme.dark_grey_color_1};
      }

      P {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.dark_grey_color_3};
        margin-top: 0.4rem;
      }
    }
  }
`;

export const RepositoryInfoList = styled.ul`
  display: flex;
  margin-top: 4rem;

  & li:not(:last-child) {
    margin-right: 8rem;
  }

  li {
    strong {
      display: block;

      font-size: 3.6rem;
      color: dark_grey_color_1;
    }

    span {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.dark_grey_color_2};
      margin-top: 0.4rem;

      svg {
        width: 1.9rem;
        height: 1.9rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const IssueList = styled.div`
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  /* span {
    font-style: italic;
    font-size: 1.4rem;
    color: ${({
  theme,
}) => theme.dark_color};
    padding: 0 1rem;
  } */
`;

export const Issue = styled.div`
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
      margin-left: auto;
      color: ${({ theme }) => theme.light_grey_color_1};
    }
  }
`;
