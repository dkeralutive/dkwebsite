import React from 'react'

const CategoriesCard = ({ icon, title, text, translate }) => {
    const cardStyles = {
        width: "522px",
        height: "200px",
        background: "white",
        boxShadow: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
        borderRadius: "14px",
        padding: "32px 23px",
        display: "flex",
        alignItems: "flex-start",
        gap: "24px",
        transform: `translateY(${translate})`
    }

    const imgStyles = {
        objectFit: "fill"
    }

    const groupStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px"
    }

    const h1Style = {
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "23px",
        lineHeight: "26px",
        color: "#2F2C4A",
        overflow: "hidden"
    }

    const spanStyle = {
        width: '372px',
        height: '84px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#888888',
    }
    return (
        <div style={cardStyles}>
            <img style={imgStyles} src={icon} alt="cat-card-icon" width={77} height={77} />
            <div style={groupStyle}>
                <h1 style={h1Style}>{title}</h1>
                <span style={spanStyle}>{text}</span>
            </div>
        </div>
    )
}

export default CategoriesCard