import styled from 'styled-components';

// Import children styled components
import { RepositoryListContainer as RepositoryList } from '../../components/repository-list/repository-list.styles';
import { Container as Error } from '../../components/error/error.styles';

export const Title = styled.h1`
  max-width: 45rem;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.dark_color};
  line-height: 5.6rem;
`;

export const Container = styled.div`
  ${Title} {
    margin-bottom: 4rem;
  }

  ${RepositoryList} {
    margin-top: 8rem;
  }

  ${Error} {
    margin-top: 1rem;
  }
`;
