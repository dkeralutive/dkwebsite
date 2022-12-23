import React from 'react'
import "./Footer.css"
import "../../App.css"
import Logo from "../../Assets/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const dataObject = Object.fromEntries(data.entries())
        console.log(dataObject);

        document.querySelector("#footer-form").reset()
    }
    return (
        <footer>
            <div className="footer-top">
                <div className='footer-col-1'>
                    <img src={Logo} alt="logo" />
                    <span>Clarity gives you the blocks and components you <br/>need to create a truly professional website.</span>
                </div>

                <div className='footer-col-2'>
                    <h4>Company</h4>
                    <Link to="/about">About</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/career">Career</Link>
                </div>

                <div className='footer-col-2'>
                    <h4>HELP</h4>
                    <Link to="/customer-support">Customer Support</Link>
                    <Link to="/delivery-detail" className='red'>Delivery Details</Link>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>

                <div className='footer-col-2 footer-col-3'>
                    <h4>NEWSLETTER</h4>
                    <form id="footer-form" onSubmit={handleSubmit}>
                        <input type="email" name="User Email" placeholder="Enter your email address" />
                        <button>Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className="copyright">© Copyright 2022, All Rights Reserved by ClarityUI</div>
        </footer>
    )
}

export default Footer