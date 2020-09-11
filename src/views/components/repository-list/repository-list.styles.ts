import styled from 'styled-components';

export const RepositoryListContainer = styled.div`
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  span {
    font-style: italic;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.dark_color};
    padding: 0 1rem;
  }
`;
