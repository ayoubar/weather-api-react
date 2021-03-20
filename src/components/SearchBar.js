import React from 'react';

function SearchBar() {
  return (
    <form className="form-style">
      <input
        type="text"
        name="search"
        id=""
        placeholder="Search the weather in..."
      />
      <button>
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
