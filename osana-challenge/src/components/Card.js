import React from 'react';
import styled from "styled-components";

const CardStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 350px;
  background-color: #fff;
  border: 1px solid #0b0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 5px 0px 5px 5px rgba(0,0,0,0.3);
`

function Card(props) {
  return (
  <CardStyled {...props} />
  )
}

export default Card;
