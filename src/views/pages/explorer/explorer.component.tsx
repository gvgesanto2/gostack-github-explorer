// Import React and vendors modules
import React from 'react';

// Import styled components
import { Container, Title } from './explorer.styles';

// Import container components
import ExplorerSearchBar from '../../containers/explorer/explorer-search-bar.container';
import ExplorerRepoList from '../../containers/explorer/explorer-repo-list.container';
import ExplorerError from '../../containers/explorer/explorer-error.container';

interface ExplorerPageProps {
  title: string;
}

const ExplorerPage: React.FC<ExplorerPageProps> = ({ title }) => {
  console.log('@@ExplorerPage/rendered');
  return (
    <Container>
      <Title>{title}</Title>

      <ExplorerSearchBar />
      <ExplorerError />

      <ExplorerRepoList />
    </Container>
  );
};

export default ExplorerPage;
