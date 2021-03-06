import React from 'react';
import { FiEye, FiAlertCircle } from 'react-icons/fi';
import { ImStarEmpty } from 'react-icons/im';
import { BiGitRepoForked } from 'react-icons/bi';

import {
  RepositoryInfo,
  RepositoryInfoHeader,
  RepositoryInfoList,
} from './repository-details.styles';

import { Repository } from '../../../redux/ducks/common/common.types';

import IssueList from '../../components/issue-list/issue-list.component';

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
  issues: [],
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
    issues,
  } = repository;

  console.log('@@RepositoryDetails/rendered');
  console.log(repository);
  return (
    <>
      <RepositoryInfo className="mb-xlg">
        <RepositoryInfoHeader>
          <img src={avatar_url} alt={login} />
          <div>
            <a
              href={`https://github.com/${full_name}`}
              target="_blank"
              rel="noreferrer"
            >
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

      <IssueList issues={issues} />
    </>
  );
};

export default RepositoryDetails;
