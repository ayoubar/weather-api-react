import React, { useState } from 'react';

/*
    todo : props { nawfel : 'HELLO I m nawfel'} 
*/

function SearchBar(props) {
  const [inputValue, setinputValue] = useState('');

  function handleChange(e) {
    setinputValue(e.target.value);
  }

  function envoiFormulaire(e) {
    e.preventDefault();
    props.recuperezDataparVille(inputValue);
  }
  return (
    <form className="form-style" onSubmit={envoiFormulaire}>
      {props.test}
      <input
        type="text"
        id=""
        onChange={handleChange}
        placeholder="Search the weather in..."
      />
      <button>
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
