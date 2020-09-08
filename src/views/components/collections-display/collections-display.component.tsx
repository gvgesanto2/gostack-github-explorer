import React from 'react';

import { Options } from './collections-display.styles';

import CollectionsPreview from '../collections-preview/collections-preview.component';
import CollectionsPanel from '../collections-panel/collections-panel.component';

const CollectionsDisplay: React.FC = () => {
  return (
    <>
      <Options>
        <li className="active">Preview</li>
        <li>Panel</li>
      </Options>

      <CollectionsPreview />

      <div className="mb-lg" />

      <CollectionsPanel />
    </>
  );
};

export default CollectionsDisplay;
