import styled from 'styled-components';

export const RepositoryItemContainer = styled.div`
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
