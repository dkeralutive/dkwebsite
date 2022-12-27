import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./HomePage.css"
import "../../App.css"
import Logo from "../../Assets/logo.png"
import Technology from "../../Assets/home-bg-group-text.png"
import Company from "../../Assets/company-name-round.png"
import Play from "../../Assets/play-icon.png"
import PlayVector from "../../Assets/play-vector.png"
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import SoftwareIcon from "../../Assets/softaware-dev.png"
import ArtCraftIcon from "../../Assets/art-craft-icon.png"
import FashionIcon from "../../Assets/fashionIcon.png"
import DesignIcon from "../../Assets/designIcon.png"
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Box2 from "../../Assets/box-2-bg.png"
import Box3 from "../../Assets/box-3-bg.png"
import Box4 from "../../Assets/box-4-bg.png"
import Box5 from "../../Assets/box-5-bg.png"
import Box6 from "../../Assets/box-6-bg.png"
import ArrowUp from "../../Assets/arrow-up.png"
import Photograph from "../../Assets/photograph-content.png"
import Website from "../../Assets/website-content.png"
import ArtSlider from '../../Components/ArtSlider/ArtSlider'
import Footer from '../../Components/Footer/Footer'


const TestimonialCard = ({ description, name, title }) => {
    const cardStyle = {
        width: '100%',
        height: 'fit-content',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        lineHeight: '27px',
        textAlign: 'center',
        color: '#090914',
    }

    const nameStyle = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '27px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.2px',
        color: '#090914',
    }

    const titleStyle = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#71717A',
    }

    const groupStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    return (
        <div style={cardStyle}>
            <span>{description}</span>
            <div style={groupStyle}>
                <span style={nameStyle}>{name}</span>
                <span style={titleStyle}>{title}</span>
            </div>
        </div>
    )
}

const DeliveryBox = ({ title, label, image }) => {
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        width: "100%",
        position: "relative",
    }
    const h1Style = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '22px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '-0.5px',
        color: '#FFFFFF',
        marginTop: '7.5rem',
    }
    const labelStyle = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '13px',
        lineHeight: '22px',
        color: '#E4E4E7',
    }
    return (
        <div style={cardStyle} className="box-2">
            <div>
                <h2 style={h1Style}>{title}</h2>
                <span style={labelStyle}>{label}</span>
            </div>
        </div>
    )
}

const AboutCard = ({ image, description, date }) => {

    return (
        <div className='aboutCard-container'>
<<<<<<< HEAD
            <img className="aboutCard-img" src={image} alt="photograph-img" />
=======
            <img classname="aboutCard-img" src={image} alt="photograph-img" />
>>>>>>> df49910b88bd66632a9849990cf3bac48e0210e4
            <div className="content-right-group">
                <h3>{description}</h3>
                <span>{date}</span>
            </div>
        </div>
    )
}

const HomePage = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [activeSideNav, setActiveSideNav] = useState(false)

    const handleClick = () => {
        setActiveSideNav(prev => !prev)
    }

    const styles = {
        right: activeSideNav ? "0px" :  "-500px"
    }

    useEffect(() => {
        setActiveLink("home")
    }, [])
    return (
        <div>
            <main>
                <div className="home-nav">
                    <img src={Logo} alt="home-logo" className='home-logo' />
                    <div className="menu-list" style={styles}>
                        <Link to="/" onClick={() => setActiveLink("home")} className={activeLink === "home" ? "home-active" : ""}>Home</Link>
                        <Link to="/fashion" onClick={() => setActiveLink("fashion")} className={activeLink === "fashion" ? "home-active" : ""}>Fashion</Link>
                        <Link to="/software" onClick={() => setActiveLink("software")} className={activeLink === "software" ? "home-active" : ""}>Software</Link>
                        <Link to="/art-craft" onClick={() => setActiveLink("art-craft")} className={activeLink === "art-craft" ? "home-active" : ""}>Art/Craft</Link>
                        <Link to="/about" onClick={() => setActiveLink("about")} className={activeLink === "about" ? "home-active" : ""}>About</Link>
                        <Link to="/contact-us" onClick={() => setActiveLink("contact-us")} className={activeLink === "contact-us" ? "home-active" : ""}>Contact Us</Link>
                    </div>
                    <HiOutlineMenuAlt1 onClick={handleClick} className='menu-open-icon' />
                </div>

                <img className="technology-text" src={Technology} alt="home-text" />
                <img className="home-compant-text" src={Company} alt="company-text" />
                <div className='main-group'>
                    <figure>
                        <img className='play-img' src={Play} alt="play-icon" />
                        <figcaption>
                            <img className="play-vector" src={PlayVector} alt="play-vector" />
                        </figcaption>
                    </figure>
                    <span>Intrigued by beauty, fascinated by technology and fuelled with
                        an everlasting devotion to digital craftsmanship and meaningful
                        aesthetics.</span>
                </div>
            </main>

            <section className='categories'>
                <div className='page-container'>
                    <h1 className='category-title'>Your total solution to grow with D’kerulative</h1>
                    <span className="category-text">Acquire high-value clients at a low cost, increase retention
                        and grow revenue through targeted referral and loyalty programs.</span>

                    {/* CATEGORY CARDS */}
                    <div className='category-cards'>
                        <CategoriesCard icon={SoftwareIcon}
                            title="Software Development"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
                            translate="0px"
                        />

                        <CategoriesCard className="category-down" icon={FashionIcon}
                            title="Fashion Store"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
                            translate="43px"
                        />

                        <CategoriesCard icon={DesignIcon}
                            title="Design"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
                            translate="0px"
                        />

                        <CategoriesCard className="category-down" icon={ArtCraftIcon}
                            title="Arts and Craft"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
                            translate="43px"
                        />
                    </div>

                    {/* VIDEO CARD */}
                    <div className='video-card'>
                        <iframe width="100%" height="508" src="https://www.youtube.com/embed/Fm0kqv1p5kM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: "20px" }} />
                    </div>

                    {/* TESTIMONIAL */}
                    <div className='testimonials'>
                        <TestimonialCard
                            description="We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."
                            name="Chioma Chioma"
                            title="Head of Software"
                        />
                        <TestimonialCard
                            description="I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind."
                            name="James Doe"
                            title="Head of Design"
                        />
                        <TestimonialCard
                            description="We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."
                            name="Philip Louis"
                            title="Head of Arts and Crafts"
                        />
                    </div>

                    {/* DELIVERY BOX */}
                    <div className='delivery-box'>
                        <div className='box-1'>
                            <h1>Delivering the best fashion outfit</h1>
                            <span>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. </span>
                        </div>
                        <DeliveryBox
                            title="Red Quality Joggers"
                            label="Unsex Red joggers"
                            image={Box2}
                        />
                        <DeliveryBox
                            title="T-Shirt High-Quality"
                            label="Lapel Polo Shirt M-5XL Blue"
                            image={Box3}
                        />

                        <div className='box-4'>
                            <div className='d-flex align-items-center gap-3'>
                                Our Store
                                <img src={ArrowUp} alt="arrow-up" />
                            </div>
                        </div>

                        <DeliveryBox
                            title="Top Quality Joggers Pant"
                            label="Black With White Stripes"
                            image={Box4}
                        />
                        <DeliveryBox
                            title="SMART CONTOUR DESIGN"
                            label="MEN/Women(man- Kneel)"
                            image={Box5}
                        />
                        <DeliveryBox
                            title="Round Neck Collection"
                            label="MEN/Women(man- Kneel)"
                            image={Box6}
                        />
                    </div>

                    {/* ART GALLERY */}
                    <div className='art-top'>
                        <h1>Delivering the best fashion outfit</h1>
                        <span className='art-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tortor cum dictum nulla.</span>
                        <div style={{ display: "flex", flexDirection: "column", alignItem: "center", gap: "10px" }}>
                            <button className='art-btn'>See Our Art Shop</button>
                            <span className='icons'>
                                <i className="bx bx-left-arrow-alt" />
                                <i className="bx bx-right-arrow-alt" />
                            </span>
                        </div>
                    </div>
                </div>
                {/* SLIDER */}
                <ArtSlider />
            </section>

            <section className="home-about page-container">
                <div className='content-left'>
                    <span className="content-left-header">We teach devs how to write better content.</span>
                    <span className="content-left-body">Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</span>
                    <span className="content-left-footer">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</span>
                </div>
                <div className='content-right'>
                    <AboutCard
                        image={Photograph}
                        description="How to write content about your photographs"
                        date="August 15, 2021"
                    />
                    <AboutCard
                        image={Website}
                        description="How to choose the right colors when creating a website?"
                        date="March 21, 2021"
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default HomePage