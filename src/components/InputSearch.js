import React from 'react';

const InputSearch = ({ query, onSearch }) => {
  return (
    <input
      className='form-control'
      placeholder='Search for'
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default InputSearch;
