import React, { useState } from 'react';

import { SearchBarForm } from './search-bar.styles';

type SearchBarProps = {
  submitCallback: (repoFullName: string) => void;
  hasError?: boolean;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  submitCallback,
  className = '',
  hasError = false,
}) => {
  const [repoToAdd, setRepoToAdd] = useState('');

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();

    submitCallback(repoToAdd);
    setRepoToAdd('');
  }

  return (
    <SearchBarForm
      onSubmit={handleSubmit}
      hasError={hasError}
      className={className}
    >
      <input
        type="text"
        value={repoToAdd}
        onChange={ev => setRepoToAdd(ev.target.value)}
        placeholder="Enter the repository..."
      />
      <button type="submit">Search</button>
    </SearchBarForm>
  );
};

export default SearchBar;
