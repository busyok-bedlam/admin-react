import React from 'react';

const Search = ({ filterUsers }) => {
  let select = null;
  let input = null;
  const createFilter = (filter,value) => filter && value && {filter,value} || null;
  const submitHandle = e => {
    e.preventDefault();
    const selectVal = select.value;
    const inputVal = input.value;
    const filter = createFilter(selectVal,inputVal);
    filterUsers(filter);
  }

  return (
    <form className="search-form" onSubmit={ submitHandle } >
      <label for="field-inp">Search</label>
      <select
        className="select-filter"
        ref={node => select = node }
      >
        <option value="status">status</option>
        <option>age</option>
        <option>firstName</option>
        <option>lastName</option>
      </select>
      <input
        className="value-input"
        type="text"
        placeholder="Type smth"
        ref={ node => input = node}
      />
    </form>
  )
}
export default Search;
