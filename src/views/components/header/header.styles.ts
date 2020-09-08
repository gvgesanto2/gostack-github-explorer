import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;

    & > a:not(:last-child) {
      margin-right: 2rem;
    }

    a {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.light_color};
      transition: color 0.2s;

      &:hover {
        color: #666;
      }

      span {
        border-bottom: 2px solid transparent;
        padding-bottom: 2px;
        transition: border-color 0.2s;
      }
      &:hover span {
        border-color: #666;
      }

      svg {
        margin-right: 2px;
      }
    }
  }
`;
