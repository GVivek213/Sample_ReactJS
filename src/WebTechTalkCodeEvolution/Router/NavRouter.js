import React from 'react'
import { Link } from 'react-router-dom'
import './NavRouter.css'
import { useAuth } from './Auth'
const NavRouter = () => {

    const auth = useAuth()
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Product</Link>
            <Link to="/info">Info</Link>
            <Link to='/profile'>Profile</Link>
            {
                !auth.user && (<Link to='/login'>
                    Login
                </Link>)
            }
        </nav>
    )
}

export default NavRouter
