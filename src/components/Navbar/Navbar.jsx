import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <h1>Food <span>Store</span></h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/categories"><li>Categories</li></Link>
                <Link to="/random"> <li>Random</li></Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar