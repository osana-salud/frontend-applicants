import React from 'react'
import { Link } from 'react-router-dom';

function UserCard(props) {
    const { login, avatar_url, id } = props.state;
    return (
        <div>
            <h1>{login}</h1>
            <h3>{id}</h3>
            <img src={avatar_url} alt='avatar' />
            <Link to={{
                pathname: `/${login}`,
                state: { user: props.state }
            }} className='btn btn-warning'>More info...</Link>
        </div>
    )
}

export default UserCard
