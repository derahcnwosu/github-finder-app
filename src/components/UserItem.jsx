import React from 'react'
import {Link} from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className="user-item">
        <img src={avatar_url} alt="" width={50} className='user-search-image'/>
        <div><Link to= {`/user/${login}`} className="user-search-name">{login}</Link></div>
    </div>
  )
}

export default UserItem