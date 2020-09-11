import React from 'react';
import { Link } from 'react-router-dom';
import { FiMap, FiFolder, FiBook, FiGlobe, FiSearch } from 'react-icons/fi';
import { ImStarEmpty } from 'react-icons/im';
import { RiMap2Line, RiGitRepositoryLine, RiFoldersLine } from 'react-icons/ri';

import { Container } from './sidebar.styles';

const Sidebar: React.FC = () => {
  console.log('@@Sidebar/rendered');
  return (
    <Container>
      <ul>
        <li className="active">
          <Link to="/">
            <FiSearch />
            EXPLORER
          </Link>
        </li>
        <li>
          <Link to="/collections">
            <FiGlobe />
            PUBLIC COLLECTIONS
          </Link>
        </li>
        <li>
          <Link to="/collections">
            <FiFolder />
            MY COLLECTIONS
          </Link>
        </li>
        <li>
          <Link to="/my">
            <FiBook />
            MY REPOSITORIES
          </Link>
        </li>
        <li>
          <Link to="/">
            <ImStarEmpty />
            FAVORITES
          </Link>
        </li>
      </ul>
      <div>&copy; 2020 by GithubExplorer. All rights reserved.</div>
    </Container>
  );
};

export default Sidebar;
