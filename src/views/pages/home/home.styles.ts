import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  max-width: 45rem;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.dark_color};
  line-height: 5.6rem;
`;

export const Form = styled.form`
  display: flex;

  max-width: 71.5rem;

  input {
    flex: 1;

    height: 7rem;
    color: ${({ theme }) => theme.dark_color};
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 2.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.light_color};
    }
  }

  button {
    flex: 0 0 21rem;

    font-weight: bold;
    color: #fff;
    background: ${({ theme }) => theme.primary_color};
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.primary_color)};
    }
  }
`;

export const RepositoryList = styled.div`
  max-width: 71.5rem;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Repository = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 2.4rem;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(1rem);
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.6rem;

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
