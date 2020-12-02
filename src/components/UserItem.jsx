import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({
  user: { login, avatar_url, id, username, web_url, html_url },
}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='rounded-circle d-block mx-auto my-1'
        style={{ width: '60px' }}
      />
      <h5>
        {login} {username}
      </h5>
      <h5>ID:{id}</h5>
      <div>
        <a href={html_url || web_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
