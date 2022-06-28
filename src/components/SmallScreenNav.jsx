import React from 'react'
import {Link} from 'react-router-dom'

function SmallScreenNav() {
  return (
    <div className='small'>
      <ul>
        <li><Link to='/' className='hamburger-link'>Home</Link></li>
        <li><Link to='/about' className='hamburger-link'>About</Link></li>
      </ul>
    </div>
  )
}

export default SmallScreenNav
