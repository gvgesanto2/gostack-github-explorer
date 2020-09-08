import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import {
  RepositoryInfo,
  RepositoryInfoHeader,
  RepositoryInfoList,
  IssueList,
  Issue,
} from './repository-details.styles';

import Header from '../../components/header/header.component';

interface RepositoryDetailsParams {
  fullName: string;
}

const RepositoryDetails: React.FC = () => {
  const { fullName } = useParams<RepositoryDetailsParams>();

  return (
    <>
      <Header />
      <RepositoryInfo className="mb-xlg">
        <RepositoryInfoHeader>
          <img
            src="https://avatars3.githubusercontent.com/u/64566209?s=460&u=5af45d6849ec9b1427eff85b29723c9358f1645e&v=4"
            alt="Me"
          />
          <div>
            <a href="#">
              <strong>gvgesanto/githubExplorer</strong>
              <p>Description</p>
            </a>
          </div>
        </RepositoryInfoHeader>
        <RepositoryInfoList>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Opened issues</span>
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
