import React from 'react';

import { RepositoryListContainer } from './repository-list.styles';

import { Repository } from '../../../redux/ducks/common/common.types';

import RepositoryItem from '../repository-item/repository-item.component';

interface RepositoryListProps {
  handleRemoveRepository: (repositoryId: number) => void;
  repositories: Repository[];
  data: {
    emptyListMsg: string;
    baseLinkUrl: string;
  };
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  handleRemoveRepository,
  repositories,
  data: { emptyListMsg, baseLinkUrl },
}) => {
  console.log('@@RepositoryList/rendered');
  return (
    <RepositoryListContainer>
      {repositories.length > 0 ? (
        repositories.map(
          ({ id, full_name, description, owner: { avatar_url } }) => (
            <RepositoryItem
              key={id}
              id={id}
              title={full_name}
              description={description}
              avatar_url={avatar_url}
              baseLinkUrl={baseLinkUrl}
              removeRepositoryCallback={handleRemoveRepository}
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
