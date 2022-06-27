import React, {useContext} from 'react'
import githubContext from '../context/githubContext'
import UserItem from './UserItem'

function UserList() {
    const {users} = useContext(githubContext)
  return (
    <div className="user-list">
        {users.map((user) => (
            <UserItem key={user.id} user = {user}/>
        ))}
    </div>
  )
}

export default UserList