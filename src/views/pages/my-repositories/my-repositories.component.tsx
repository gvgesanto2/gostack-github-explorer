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
      <Title className="mb-md">My Collections</Title>

      <SearchBar submitCallback={handleSubmit} className="mb-xlg" />

      <RepoListsPreview>
        <div className="horizontalChevron chevronLeft">
          <FiChevronLeft size={20} />
        </div>
        <RepoLists>
          <li className="addListItem">
            <FiPlus />
          </li>
          <RepoListsItem>
            <img
              src="https://avatars3.githubusercontent.com/u/69590972?s=200&v=4"
              alt="img"
            />
            <h3>All my repositories</h3>
            <span>Created at 06/09/2019</span>
          </RepoListsItem>

          <RepoListsItem>
            <img
              src="https://avatars3.githubusercontent.com/u/69590972?s=200&v=4"
              alt="img"
            />
            <h3>All my repositories</h3>
            <span>Created at 06/09/2019</span>
          </RepoListsItem>

          <RepoListsItem>
            <img
              src="https://avatars3.githubusercontent.com/u/69590972?s=200&v=4"
              alt="img"
            />
            <h3>All my repositories</h3>
            <span>Created at 06/09/2019</span>
          </RepoListsItem>
        </RepoLists>
        <div className="horizontalChevron chevronRight">
          <FiChevronRight size={20} />
        </div>
      </RepoListsPreview>
    </>
  );
};

export default MyRepositories;
