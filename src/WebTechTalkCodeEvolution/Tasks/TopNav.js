import React from 'react'
import myNav from './TopNav.module.css';
const TopNav = () => {
  return (
    <div className={myNav.nav}>
      <div className={myNav.About}>About</div>
      <div className={myNav.About}>Products</div>
      <div className={myNav.About}>Services</div>
      <div className={myNav.About}>Contact Us</div>
    </div>
  )
}

export default TopNav
