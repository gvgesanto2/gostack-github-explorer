import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import {
  Header,
  RepositoryInfo,
  RepositoryInfoHeader,
  RepositoryInfoList,
} from './repository-details.styles';
import logoImg from '../../../assets/images/logo.svg';

interface RepositoryDetailsParams {
  fullName: string;
}

const RepositoryDetails: React.FC = () => {
  const { fullName } = useParams<RepositoryDetailsParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <nav>
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </nav>
      </Header>
      <RepositoryInfo>
        <RepositoryInfoHeader>
          <img
            src="https://avatars3.githubusercontent.com/u/64566209?s=460&u=5af45d6849ec9b1427eff85b29723c9358f1645e&v=4"
            alt="Me"
          />
          <div>
            <strong>gvgesanto/githubExplorer</strong>
            <p>Description</p>
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
            <span>Issues</span>
          </li>
        </RepositoryInfoList>
      </RepositoryInfo>
    </>
  );
};

export default RepositoryDetails;
