import React from 'react'
import { Link } from 'react-router-dom';
import './Navstyle.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">Logo</div>
        <nav className='Links'>
            <Link className='Link' to='/'>Home</Link>
            <Link className='Link' to='/about'>About</Link>
            <Link className='Link' to='/experience'>Experience</Link>
            <Link className='Link' to='/services'>Services</Link> 
        </nav>
      
    </div>
  )
}

export default Navbar
