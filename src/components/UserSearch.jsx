import React, {useContext, useState} from 'react'
import {searchUsers} from '../actions/githubActions'
import githubContext from '../context/githubContext'
import UserList from './UserList'
import Spinner from '../assets/Spinner'

function UserSearch() {
    const {dispatch, loading} = useContext(githubContext)
    const [text, setText] = useState('')

    const submit = async(e) => {
        dispatch({
            type: 'SET_LOADING_TRUE',
            payload: true
        })
        const users = await searchUsers(text)
        dispatch({
            type: 'SEARCH_USERS',
            payload: users
        })
        dispatch({
            type: 'SET_LOADING_FALSE',
            payload: false
        })

        e.preventDefault()
    }


  return (
    <div className='user-search'>
        <h1 className='lead-txt'>Search github users</h1>
        <div className="input-group">
            <input type="text" className="find-input" value={text} onChange = {(e) => setText(e.target.value)}/>
            <button className="btn" onClick={submit}>Search</button>
        </div>
        {loading ? <Spinner /> : <UserList />}
        
    </div>
  )
}

export default UserSearch