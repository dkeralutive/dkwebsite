import React from 'react'
import "./CategoriesCard.css"

const CategoriesCard = ({ icon, title, text, translate }) => {

    return (
        <div className='categories-card-container'>
            <img className='categories-card-img' src={icon} alt="cat-card-icon"  />
            <div>
                <h1 className='categories-card-h1'>{title}</h1>
                <span className='categories-card-text'>{text}</span>
            </div>
        </div>
    )
}

export default CategoriesCard