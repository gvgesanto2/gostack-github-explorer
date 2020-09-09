import React from 'react';

import { Title } from './my-collections.styles';

import SearchBar from '../../components/search-bar/search-bar.component';

import Header from '../../components/header/header.component';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';
import CollectionsDisplay from '../../components/collections-display/collections-display.component';

function handleSubmit(input: string): void { }

const MyCollections: React.FC = () => {
  return (
    <>
      <Header />
      <Title className="mb-md">My Collections</Title>

      {/* <SearchBar submitCallback={handleSubmit} className="mb-xlg" /> */}

      <CollectionsDisplay />
    </>
  );
};

export default MyCollections;
