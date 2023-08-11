import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
    return (
        <>
            <div>
                <h3>Products page</h3>
                <input type='text' placeholder='Search Products' className='input-products' />
            </div>
            <nav>
                <Link to="featured" className="nested-route">Featured</Link>
                <Link to="new" className="nested-route"> New</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products
