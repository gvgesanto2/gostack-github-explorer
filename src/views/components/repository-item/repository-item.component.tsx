import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiX, FiPlus, FiStar, FiTrash2 } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { RepositoryItemContainer } from './repository-item.styles';

type RepositoryItemProps = {
  id: number;
  title: string;
  description: string;
  avatar_url: string;
  baseLinkUrl: string;
  removeRepositoryCallback: (repositoryId: number) => void;
};

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  id,
  title,
  description,
  avatar_url,
  baseLinkUrl,
  removeRepositoryCallback,
}) => {
  console.log('@@RepositoryItem/rendered');
  return (
    <RepositoryItemContainer>
      <button type="button" onClick={() => removeRepositoryCallback(id)}>
        <FiX className="x-icon" size={20} />
      </button>
      <Link to={`${baseLinkUrl}/${title}?explorer=true`}>
        <img src={avatar_url} alt="User" />
        <div className="content">
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      </Link>
      <div className="actionContainer">
        <button type="button">
          <FiPlus className="plus-icon" size={20} />
        </button>
        <button type="button">
          <AiOutlineStar className="star-icon" size={20} />
        </button>
      </div>
      <Link to={`${baseLinkUrl}/${title}`}>
        <FiChevronRight className="chevron-icon" size={20} />
      </Link>
    </RepositoryItemContainer>
  );
};

export default RepositoryItem;
