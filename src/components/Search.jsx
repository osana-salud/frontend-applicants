import React, { useState, useContext } from 'react';
import UserContext from '../reducers/userContext';

const Search = () => {
  const userContext = useContext(UserContext);
  const PROHIBIDA = 'osana salud';
  const [text, setText] = useState('');
  const [api, setApi] = useState('searchUsers');

  //funcion del onchange
  const selectApi = (e) => {
    const target =
      e.target.value === 'github' ? 'searchUsers' : 'searchUsersgl';
    setApi(target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === PROHIBIDA) {
      return null;
    }
    setText('');

    userContext[api](text);
  };

  const searchOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={searchOnChange}
          minLength={4}
          className="input-group-text mx-auto d-block mb-2"
        />
        {text === PROHIBIDA
          ? `forbiden word ${PROHIBIDA} type another one`
          : text === ''
          ? 'find an user :'
          : ``}
        {/* Seach Input */}
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block mt-4'
        />

        {/* select the API */}
        <select
          name='api'
          className='btn btn-light btn-block my-2 bg-dark text-light mb-2 '
          onChange={selectApi}
        >
          <option disabled value='Select A Services'>
            Select A Service
          </option>
          <option value='github'>GitHub</option>
          <option value='gitlab'>GitLab</option>
        </select>
      </form>

      {userContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block mb-5'
          onClick={userContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
