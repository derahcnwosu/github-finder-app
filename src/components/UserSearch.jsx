import React, {useContext, useState} from 'react'
import {searchUsers} from '../actions/githubActions'
import githubContext from '../context/githubContext'
import UserList from './UserList'
import Spinner from '../assets/Spinner'
import {motion} from 'framer-motion'

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
        <motion.h1 className='lead-txt' 
            initial = {{opacity: 0.05}}
            animate = {{opacity: 1}}
            transition = {{delay: 0.5, duration: 2}}
        >Search github users</motion.h1>
        <motion.div className="input-group" 
            initial = {{opacity: 0.1}}
            animate = {{opacity: 1}}
            transition = {{delay: 0.5, duration: 1}}
        >
            <input type="text" className="find-input" value={text} onChange = {(e) => setText(e.target.value)}/>
            <button className="btn" onClick={submit}>Search</button>
        </motion.div>
        {loading ? <Spinner /> : <UserList />}
    </div>
  )
}

export default UserSearch