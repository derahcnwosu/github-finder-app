import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img src={spinner} alt="Loading..." width={70} height={70} className = 'spinner'/>
  )
}

export default Spinner