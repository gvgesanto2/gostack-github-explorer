import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiAlertCircle, FiChevronRight } from 'react-icons/fi';
import { ImStarEmpty } from 'react-icons/im';
import { BiGitRepoForked } from 'react-icons/bi';

import {
  RepositoryInfo,
  RepositoryInfoHeader,
  RepositoryInfoList,
  IssueList,
  Issue,
} from './repository-details.styles';

import { Repository } from '../../../redux/ducks/common/common.types';

interface RepositoryDetailsProps {
  repository?: Repository;
}

const RepositoryDefault = {
  full_name: 'Repository title',
  description: 'Repository description',
  owner: {
    avatar_url: '',
    login: '',
  },
  watchers_count: 0,
  stargazers_count: 0,
  forks_count: 0,
  open_issues_count: 0,
};

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
  repository = RepositoryDefault,
}) => {
  const {
    full_name,
    description,
    owner: { avatar_url, login },
    watchers_count,
    stargazers_count,
    forks_count,
    open_issues_count,
  } = repository;

  console.log('@@RepositoryDetails/rendered');
  console.log(repository);
  return (
    <>
      <RepositoryInfo className="mb-xlg">
        <RepositoryInfoHeader>
          <img src={avatar_url} alt="{login}" />
          <div>
            <a href={`https://github.com/${full_name}`} target="_blank">
              <strong>{full_name}</strong>
              <p>{description}</p>
            </a>
          </div>
        </RepositoryInfoHeader>
        <RepositoryInfoList>
          <li>
            <strong>{watchers_count}</strong>
            <span>
              <FiEye />
              Watchers
            </span>
          </li>
          <li>
            <strong>{stargazers_count}</strong>
            <span>
              <ImStarEmpty />
              Stars
            </span>
          </li>
          <li>
            <strong>{forks_count}</strong>
            <span>
              <BiGitRepoForked />
              Forks
            </span>
          </li>
          <li>
            <strong>{open_issues_count}</strong>
            <span>
              <FiAlertCircle />
              Open issues
            </span>
          </li>
        </RepositoryInfoList>
      </RepositoryInfo>

      <IssueList>
        <Issue>
          <Link to="/repositories/">
            <div>
              <strong>title</strong>
              <p>description</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </Issue>

        <Issue>
          <Link to="/repositories/">
            <div>
              <strong>title</strong>
              <p>description</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </Issue>
      </IssueList>
    </>
  );
};

export default RepositoryDetails;
