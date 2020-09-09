import React, { useState } from 'react';

import { SearchBarForm } from './search-bar.styles';

type SearchBarProps = {
  submitCallback: (searchInput: string) => void;
  placeholder: string;
  hasError?: boolean;
  searchButtonText?: string;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  submitCallback,
  placeholder,
  className = '',
  hasError = false,
  searchButtonText = 'Search',
}) => {
  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();

    submitCallback(searchInput);
    setSearchInput('');
  }

  return (
    <SearchBarForm
      onSubmit={handleSubmit}
      hasError={hasError}
      className={className}
    >
      <input
        type="text"
        value={searchInput}
        onChange={ev => setSearchInput(ev.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">{searchButtonText}</button>
    </SearchBarForm>
  );
};

export default SearchBar;
