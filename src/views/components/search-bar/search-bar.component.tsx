import React, { useState } from 'react';

import { SearchBarForm } from './search-bar.styles';

type SearchBarProps = {
  submitCallback: (searchInput: string) => void;
  hasError?: boolean;
  data: {
    placeholder?: string;
    searchButtonText?: string;
  };
};

const SearchBar: React.FC<SearchBarProps> = ({
  submitCallback,
  hasError = false,
  data: { placeholder = 'Search...', searchButtonText = 'Search' },
}) => {
  console.log('@@SearchBar/rendered');
  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();

    submitCallback(searchInput);
    setSearchInput('');
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>): void {
    setSearchInput(ev.target.value);
  }

  return (
    <SearchBarForm onSubmit={handleSubmit} hasError={hasError}>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button type="submit">{searchButtonText}</button>
    </SearchBarForm>
  );
};

export default SearchBar;
