import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to= '/' className='logo'><h3>github-finder <FaGithub /></h3> </Link>
        <ul>
            <li><Link to= '/' className='nav-link'>Home</Link></li>
            <li><Link to= '/about' className='nav-link'>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar