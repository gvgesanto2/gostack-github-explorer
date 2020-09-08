import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import { Container } from './collection-list-item.styles';

const CollectionListItem: React.FC = () => {
  return (
    <Container>
      <a href="#">
        <img
          src="https://avatars3.githubusercontent.com/u/69590972?s=200&v=4"
          alt="img"
        />
        <h3>All my repositories</h3>
        <span>Created at 06/09/2019</span>
      </a>
      <button className="removeButton" type="button">
        <FiTrash2 size={15} />
      </button>
      <button className="editButton" type="button">
        <FiEdit size={15} />
      </button>
    </Container>
  );
};

export default CollectionListItem;
