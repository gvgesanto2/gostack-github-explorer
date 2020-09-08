import React from 'react';
import { FiChevronRight, FiChevronLeft, FiPlus } from 'react-icons/fi';

import { Container, CollectionItemEmpty } from './collections-panel.styles';

import CollectionListItem from '../collection-list-item/collection-list-item.component';

const CollectionsPanel: React.FC = () => {
  return (
    <Container>
      <div className="horizontalChevron chevronLeft">
        <FiChevronLeft size={20} />
      </div>
      <ul>
        <li className="addListItem">
          <FiPlus />
        </li>

        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />

        <CollectionItemEmpty>
          <span>Empty</span>
        </CollectionItemEmpty>
        <CollectionItemEmpty>
          <span>Empty</span>
        </CollectionItemEmpty>
        <CollectionItemEmpty>
          <span>Empty</span>
        </CollectionItemEmpty>
        <CollectionItemEmpty>
          <span>Empty</span>
        </CollectionItemEmpty>
        <CollectionItemEmpty>
          <span>Empty</span>
        </CollectionItemEmpty>
      </ul>

      <div className="horizontalChevron chevronRight">
        <FiChevronRight size={20} />
      </div>
    </Container>
  );
};

export default CollectionsPanel;
