import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container } from './collections-preview.styles';

import CollectionList from '../collection-list/collection-list.component';

const CollectionsPreview: React.FC = () => {
  return (
    <Container>
      <div className="horizontalChevron chevronLeft">
        <FiChevronLeft size={20} />
      </div>

      <CollectionList />

      <div className="horizontalChevron chevronRight">
        <FiChevronRight size={20} />
      </div>
    </Container>
  );
};

export default CollectionsPreview;
