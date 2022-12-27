import "./ItemsCard.css"
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import Cart from "../../Assets/cart-icon.png"

const ItemsCard = ({ deletedAmount, price, title, description, bgImage }) => {
    const cardStyle = {
        background: `linear-gradient(0deg, #090914 0%, rgba(9, 9, 20, 0) 98.51%), url(${bgImage})`
    }
    return (
        <div className="items-card-container" style={cardStyle}>
            <span className="items-card-prices">
                <del>{deletedAmount}</del>
                {price}
            </span>
            <h1 className="items-card-title">{title}</h1>
            <span className="items-card-description">{description}</span>
            <div className="stars d-flex align-items-center gap-2">
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiOutlineStar className="star-icon" />
            </div>
            <img src={Cart} alt="cart-icon" />
        </div>
    )
}

export default ItemsCard