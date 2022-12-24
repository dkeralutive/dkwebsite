import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"
import Logo from "../../Assets/logo.png"
import User from "../../Assets/user.png"
import Lock from "../../Assets/lock.png"
import Heart from "../../Assets/heart.png"
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
  const [activeSideNav, setActiveSideNav] = useState(false)

  function handleClick() {
    setActiveSideNav(prev => !prev)
  }

  const styles = {
    right: activeSideNav ? "0px" : "-500px"
  }
  return (
    <nav className="navbar fixed-top navbar-light bg-white">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="list-inline nav-menu-list" style={styles}>
        <li className="nav-item active list-inline-item">
          <Link className="nav-link text-dark" to="/men">Men<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item list-inline-item">
          <Link className="nav-link text-dark" to="/women">Women</Link>
        </li>
        <li className="nav-item list-inline-item">
          <Link className="nav-link text-dark" to="/all-brands">All Brands</Link>
        </li>
        <li className="nav-item list-inline-item">
          <Link className="nav-link text-dark" to="/store">Stores</Link>
        </li>
        <li className="nav-item list-inline-item">
          <Link className="nav-link text-dark" to="/customise">Customise</Link>
        </li>
      </ul>

      <div className="nav-icons-container">
        <img src={User} alt="user" />
        <img src={Heart} alt="heart" />
        <img src={Lock} alt="lock" className='cart-icon' />
        <span className='cart-notification-count'>2</span>
      </div>

      <HiOutlineMenuAlt1 onClick={handleClick} className='side-open-icon' />
    </nav >
  )
}

export default NavBar