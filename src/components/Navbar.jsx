import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>
      <ul className='nav justify-content-center bg-dark mb-5'>
        <AiFillGithub style={iconStyle} />
        <AiFillGitlab style={iconStyle} />
        <li className='nav-item'>
          <Link className='nav-link text-decoration-none text-light' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link text-decoration-none text-light'
            to='/about'
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

const iconStyle = {
  color: 'white',
  width: '36px',
  height: '36px',
  marginRight: '1rem',
};

export default Navbar;
