import "./PopularCategoriesCard.css"

const PopularCategoriesCard = ({backgroundImage, title, description}) => {
    const cardStyles = {
        backgroundImage: `url(${backgroundImage})` 
    }
    return (
        <div className="popular-categories-card-container" style={cardStyles}>
            <h1>{title}</h1>
            <span>{description}</span>
            <button>Shop Now</button>
        </div>
    )
}

export default PopularCategoriesCard