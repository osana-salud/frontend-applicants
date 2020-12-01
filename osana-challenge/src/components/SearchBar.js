import React from 'react';
import styled from "styled-components";

const SearchStyle = styled.input`
  display: flex;
  justify-content: center;
  aling-items: center;
  width: 100%;
  height: 39px;
  border-radius: 10px; 
  border: 1px solid #005500;
  outline: none;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`

function SearchBar(props) {
  return (
    <SearchStyle {...props} />
  )
}

export default SearchBar;
