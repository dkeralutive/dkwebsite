import React from 'react'
import "./HomeMain.css"
import NavBar from "../../Components/NavBar/NavBar"
import { FiSearch } from 'react-icons/fi';

const HomeMain = () => {
  return (
    <div>
      <NavBar />
      <main className="main">
        <h1>Find the best High <br />Quality outfit in one tap</h1>
        <span>We have a wide range of products that serves various Demographic <br />groups and markets. Our product Range are Trendy and always On point</span>

        <form id="home-main-search-form">
          <div>
            <FiSearch className='form-search-icon' />
            <input type="text" placeholder='Try joggers, Polo, T-shirts etc...' className='search-input' />
          </div>
          <button>SEARCH NOW</button>
        </form>
        <div className='achievements'>
          <span>
            <h1>38,942</h1>
            Order Delivered
          </span>
          <span>
            <h1>14,344</h1>
            Registered Customers
          </span>
        </div>
      </main>
    </div>
  )
}

export default HomeMain