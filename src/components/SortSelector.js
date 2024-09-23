import React from 'react';

const SortSelector = ({ sorting, setSorting }) => {
  return (
    <div>
      <label htmlFor="sorting">Sort By: </label>
      <select id="sorting" value={sorting} onChange={e => setSorting(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortSelector;
