import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaGithub, FaBars, FaSun, FaMoon, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [isMenu, setIsMenu] = useState(true)
  const [isMenuIcon, setIsMenuIcon] = useState(true)
  const [menuIcon, setMenuIcon] = useState(<FaBars />)

  const changeMenu = () => {
    setMenuIcon(<FaTimes/>)
  }

  const checkMode = (e) => {
    setIsDark(!isDark)
    isDark ? lightMode() : darkMode()
    e.preventDefault()
  }
  const checkMenu = (e) => {
    setIsMenuIcon(!isMenuIcon)
    setIsMenu(!isMenu)
    isMenu ? menuOn() : menuOff()
    isMenuIcon ? putMenuOn(): putMenuOff()
    e.preventDefault()
  }

  const putMenuOn = () => {
    changeMenu()
    document.querySelectorAll('.hamburger').forEach((one) => one.style.transform = 'rotate(360deg)')
  }
  const putMenuOff = () => {
    setMenuIcon(<FaBars />)
    document.querySelectorAll('.hamburger').forEach((one) => one.style.transform = 'rotate(-360deg)')
  }

 
  const darkMode = () => {
// document.querySelectorAll('.primary').forEach((one) => one.style.background = '#fff')
// document.querySelectorAll('.primary').forEach((one) => one.style.color = '#152238')
document.querySelectorAll('.tertiary').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.tertiary').forEach((one) => one.style.color = '#e5e5e5')
document.querySelectorAll('.lead-txt').forEach((one) => one.className = 'tertiary-txt')
document.querySelectorAll('.bg-light').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.user-item').forEach((one) => one.style.background = '#234681')
document.querySelectorAll('.user-search-name').forEach((one) => one.style.color = '#e5e5e5')
document.querySelectorAll('.btn').forEach((one) => one.style.background = '#fff')
document.querySelectorAll('.btn').forEach((one) => one.style.color = '#152238')
document.querySelectorAll('.repo-item').forEach((one) => one.style.background = '#234681')
document.querySelectorAll('.repo-link').forEach((one) => one.style.color = '#e5e5e5')
document.querySelectorAll('.user-page-name').forEach((one) => one.style.color = '#fff')
document.querySelectorAll('.repo-head').forEach((one) => one.style.color = '#fff')
document.querySelectorAll('.theme-toggle').forEach((one) => one.style.transform = 'rotate(360deg)')
}
  const lightMode = () => {
document.querySelectorAll('.primary').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.primary').forEach((one) => one.style.color = '#fff')
document.querySelectorAll('.tertiary').forEach((one) => one.style.background = '#e5e5e5')
document.querySelectorAll('.tertiary').forEach((one) => one.style.color = '#152238')
document.querySelectorAll('.tertiary-txt').forEach((one) => one.className = 'lead-txt')
document.querySelectorAll('.bg-light').forEach((one) => one.style.background = '#e5e5e5')
document.querySelectorAll('.user-item').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.user-search-name').forEach((one) => one.style.color = 'skyblue')
document.querySelectorAll('.btn').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.btn').forEach((one) => one.style.color = '#fff')
document.querySelectorAll('.repo-item').forEach((one) => one.style.background = '#152238')
document.querySelectorAll('.user-page-name').forEach((one) => one.style.color = '#333')
document.querySelectorAll('.repo-head').forEach((one) => one.style.color = '#333')
document.querySelectorAll('.theme-toggle').forEach((one) => one.style.transform = 'rotate(-360deg)')




}

const menuOn = () => {
  document.querySelector('.user-search').style.display = 'none'
  document.querySelector('.small').style.display = 'flex'
  document.querySelector('.small').style.transform = 'rotate(360deg)'
}
const menuOff = () => {
  document.querySelector('.user-search').style.display = 'flex'
  document.querySelector('.small').style.display = 'none'
}


  return (
    <div className='navbar primary'>
        <Link to= '/' className='logo primary'><h3>github-finder <FaGithub /></h3> </Link>
        <ul>
            <li><Link to= '/' className='nav-link primary'>Home</Link></li>
            <li><Link to= '/about' className='nav-link primary'>About</Link></li>
            <li><button className="theme-toggle" onClick={checkMode}>{isDark ? <FaSun color='skyblue'/> : <FaMoon color='skyblue'/>}</button></li>
            <li className='hamburger' onClick={checkMenu}>{menuIcon}</li>
        </ul>
    </div>
  )
}

export default Navbar