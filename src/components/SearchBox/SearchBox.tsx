import React from 'react';
import css from './SearchBox.module.css';

type SearchBoxPropsType = {
  value: string;
  handleSearchBoxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ value, handleSearchBoxInputChange }: SearchBoxPropsType) => {
  return (
    <input
      className={css.searchbox}
      type='text'
      value={value}
      onChange={(e) => handleSearchBoxInputChange(e)}
      placeholder='Search...'
    />
  );
};

export { SearchBox };
