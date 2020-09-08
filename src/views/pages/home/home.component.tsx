import React, { useState, useEffect } from 'react';

import { Title, Error } from './home.styles';

import api from '../../../services/api';
import SearchBar from '../../components/search-bar/search-bar.component';
import RepositoryList from '../../components/repository-list/repository-list.component';
import Header from '../../components/header/header.component';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

function inRepositories(
  repositories: Repository[],
  { id }: Repository,
): boolean {
  const reposIds = repositories.map(repo => repo.id);

  return reposIds.includes(id);
}

const Home: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStoragedRepos = localStorage.getItem(
      '@githubExplorer:repositories',
    );

    return localStoragedRepos ? JSON.parse(localStoragedRepos) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(repoFullName: string): Promise<void> {
    if (!repoFullName.includes('/')) {
      setInputError('Enter the repository in this format: "author/name".');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${repoFullName}`);

      const repository = response.data;

      if (inRepositories(repositories, repository)) {
        setInputError('Repository already added.');
      } else {
        setRepositories([...repositories, repository]);
        setInputError('');
      }
    } catch (error) {
      const { status } = error.response ? error.response : null;

      if (status === 404) {
        setInputError('Repository not found.');
      } else {
        setInputError('Error searching for this repository.');
      }
    }
  }

  return (
    <>
      <Header />
      <Title className="mb-md">Explore repositories in Github</Title>

      <SearchBar submitCallback={handleAddRepository} hasError={!!inputError} />
      {inputError && <Error className="mt-xxm">{inputError}</Error>}

      <RepositoryList
        className="mt-xlg"
        emptyListMsg="No repositories added."
        repositories={repositories}
      />
    </>
  );
};

export default Home;
