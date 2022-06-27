import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear()
  return (
    <div className='footer primary'>
        Developed by Dera &copy; {currentYear}
    </div>
  )
}

export default Footer