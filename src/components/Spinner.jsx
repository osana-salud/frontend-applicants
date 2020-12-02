import React from 'react';
import '../assets/Spinner.css';

const Spinner = () => {
  return (
    <div className='lds-ellipsis m-auto d-block'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
