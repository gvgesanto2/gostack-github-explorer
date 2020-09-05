import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const SearchBarForm = styled.form<FormProps>`
  display: flex;

  max-width: 71.5rem;

  input {
    flex: 1;

    height: 7rem;
    color: ${({ theme }) => theme.dark_color};
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 2.4rem;

    ${({ hasError, theme }) =>
    hasError &&
    css`
        border-color: ${theme.error_color};
      `}

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
