import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='head'>
        <h1 className='tab'>TREVOR FITZGERALD</h1>
        <div className='tabs'>
            <h1 className='tab'>PROJECTS</h1>
            <h1 className='tab'>ABOUT</h1>
            <h1 className='tab'>RESUME</h1>
        </div>
    </div>
  )
}

export default Header