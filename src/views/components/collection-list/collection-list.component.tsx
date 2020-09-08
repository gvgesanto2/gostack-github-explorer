import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container } from './collection-list.styles';

import CollectionListItem from '../collection-list-item/collection-list-item.component';

const CollectionList: React.FC = () => {
  return (
    <Container>
      <li className="addListItem">
        <FiPlus />
      </li>

      <CollectionListItem />
      <CollectionListItem />
      <CollectionListItem />
    </Container>
  );
};

export default CollectionList;
