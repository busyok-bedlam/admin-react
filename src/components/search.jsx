import React from 'react';

const Search = () => {

  return (
    <form className="search-form" >
      <label for="field-inp">Search</label>
      <input className="field-input" id="field-inp" type="text" placeholder="Type filter" />
      <input className="value-input" type="text" placeholder="Type smth" />
    </form>
  )
}
export default Search;
