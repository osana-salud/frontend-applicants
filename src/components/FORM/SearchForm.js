import React, { useEffect, useState } from 'react'
import { getUser, getUsers } from '../../API/request'
import UserCard from '../USERS/UserCard'

function SearchForm() {
    const [state, setState] = useState({
        userSearched: ''
    })
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        getUsers()
            .then(u => setUserList(u))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        getUser(state.userSearched)
            .then(u => setUser(u))
            .then(() => setUserList([user]))

        setState({ userSearched: '' })
    }

    const handleChange = (e) => {
        setState({ [e.target.name]: e.target.value })
    }

    const handleReset = () => {
        getUsers().then(u => setUserList(u))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className=""
                    name='userSearched'
                    placeholder='Search user...'
                    value={state.userSearched}
                    onChange={handleChange}
                />
                <input type='submit' value='Search user' />
                <input type='button' value='clear' onClick={handleReset} />
            </form>
            <ul>
                {userList && userList.map(e =>
                    <UserCard key={e.id} state={e} />
                )}
            </ul>
        </div>
    )
}

export default SearchForm
