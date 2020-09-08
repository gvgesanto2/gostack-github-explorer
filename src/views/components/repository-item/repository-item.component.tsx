import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiX, FiPlus, FiStar, FiTrash2 } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
        <FiX className="x-icon" size={20} />
        <img src={avatar_url} alt="User" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <div className="actionContainer">
          <button type="button">
            <FiPlus className="plus-icon" size={20} />
          </button>
          <button type="button">
            <AiOutlineStar className="star-icon" size={20} />
          </button>
        </div>
        <FiChevronRight className="chevron-icon" size={20} />
      </Link>
    </RepositoryItemContainer>
  );
};

export default RepositoryItem;
