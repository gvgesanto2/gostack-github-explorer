import React from 'react';

import { RepositoryListContainer } from './repository-list.styles';

import RepositoryItem from '../repository-item/repository-item.component';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepositoryListProps extends React.HTMLAttributes<HTMLDivElement> {
  repositories: Repository[];
  emptyListMsg?: string;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  className,
  emptyListMsg = '',
}) => {
  return (
    <RepositoryListContainer className={className}>
      {repositories.length > 0 ? (
        repositories.map(
          ({ id, full_name, description, owner: { avatar_url } }) => (
            <RepositoryItem
              key={id}
              title={full_name}
              description={description}
              avatar_url={avatar_url}
            />
          ),
        )
      ) : (
          <span>{emptyListMsg}</span>
        )}
    </RepositoryListContainer>
  );
};

export default RepositoryList;
