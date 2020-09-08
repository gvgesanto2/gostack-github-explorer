import styled from 'styled-components';

export const Container = styled.li`
  flex: 0 0 18rem;

  height: 12.3rem;

  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  outline-offset: 0;
  -moz-outline-radius: 12px;
  position: relative;
  padding: 1rem 2rem;
  transition: all 0.2s;

  &:hover,
  &:focus {
    /* outline: 3px solid ${({ theme }) => theme.primary_color}; */
    /* box-shadow: 0 0 0.5rem ${({ theme }) => theme.primary_color}; */
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    color: ${({ theme }) => theme.dark_color};
    background: transparent;
    border: 0;
    outline: 0;

    position: absolute;
    top: 0;
    left: 0;

    transition: color 0.2s;

    &.removeButton {
      transform: translate(1rem, 1rem);

      &:hover {
        color: ${({ theme }) => theme.error_color};
      }
    }

    &.editButton {
      transform: translate(1rem, 3.5rem);

      &:hover {
        color: ${({ theme }) => theme.primary_color};
      }
    }
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 6px;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
  }
`;
