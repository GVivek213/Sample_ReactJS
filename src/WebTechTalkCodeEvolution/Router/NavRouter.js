import React from 'react'
import { Link } from 'react-router-dom'
import './NavRouter.css'
const NavRouter = () => {
    return (
        <nav className='nav'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Product</Link>
            <Link to="/info">Info</Link>
        </nav>
    )
}

export default NavRouter
