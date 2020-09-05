import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { RepositoryItemContainer } from './repository-item.styles';

type RepositoryItemProps = {
  title: string;
  description: string;
  avatar_url: string;
};

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  title,
  description,
  avatar_url,
}) => {
  return (
    <RepositoryItemContainer>
      <Link to={`/repositories/${title}`}>
        <img src={avatar_url} alt="User" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>

        <FiChevronRight size={20} />
      </Link>
    </RepositoryItemContainer>
  );
};

export default RepositoryItem;
