import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'
import Products from './Products'
import Info from './Info'
import NavRouter from './NavRouter'
const RoutingSample = () => {
    return (
        <div>
            <NavRouter />
            <Routes>
                <Route path="home" element={<HomePage />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="info" element={<Info />}></Route>
                <Route path="*" element={<Info />}></Route>

            </Routes>
        </div>
    )
}

export default RoutingSample
