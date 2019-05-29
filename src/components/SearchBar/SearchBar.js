import React, { useState } from 'react';
import Styles from './SearchBar.module.css';

const SearchBar = props => {
  const [sbState, sbSetState] = useState({ term: '' });

  const onChangeHandler = e => {
    sbSetState({ term: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    props.submitHandler(sbState.term);
  };
  return (
    <div className={`ui compact segment ${Styles.search_bar}`}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="search-bar" />
        <input
          id="search-bar"
          value={sbState.term}
          onChange={onChangeHandler}
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBar;
