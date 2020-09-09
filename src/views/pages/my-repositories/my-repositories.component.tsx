import React from 'react';
import { FiChevronRight, FiChevronLeft, FiPlus } from 'react-icons/fi';

import {
  Title,
  RepoListsPreview,
  RepoLists,
  RepoListsItem,
} from './my-repositories.styles';

import SearchBar from '../../components/search-bar/search-bar.component';

import Header from '../../components/header/header.component';

function handleSubmit(input: string): void { }

const MyRepositories: React.FC = () => {
  return (
    <>
      <Header />
      <Title className="mb-md">My Repositories</Title>

      {/* <SearchBar submitCallback={handleSubmit} className="mb-xlg" /> */}
    </>
  );
};

export default MyRepositories;
