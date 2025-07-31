import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}
    />
  );
};

export default SearchBar;
