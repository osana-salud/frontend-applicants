import React from 'react'
import { Link } from 'react-router-dom'

function UserData(props) {
    const data = props.location.state.user
    return (
        <div>
            <h1>{data.login}</h1>
            <h3>{data.id}</h3>
            <img src={data.avatar_url} alt='avatar' />
            <Link to="/" >Back</Link>
        </div>
    )
}

export default UserData
