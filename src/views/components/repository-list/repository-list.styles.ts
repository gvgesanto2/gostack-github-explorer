import styled from 'styled-components';

export const RepositoryListContainer = styled.div`
  max-width: 71.5rem;

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
