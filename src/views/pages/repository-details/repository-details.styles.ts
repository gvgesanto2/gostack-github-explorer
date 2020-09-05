import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.light_color};
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 2px;
    }
  }
`;

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

    strong {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.dark_grey_color_1};
    }

    P {
    }
  }
`;

export const RepositoryInfoList = styled.ul``;
