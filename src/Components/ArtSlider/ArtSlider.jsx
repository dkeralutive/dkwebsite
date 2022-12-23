import React from "react";
import "./ArtSlider.css"
import "../../App.css"
import SlideImg2 from "../../Assets/slide-img-2.png"
import SlideImg3 from "../../Assets/slide-img-3.png"
import SlideImg4 from "../../Assets/slide-img-4.png"



export default function ArtSlider() {
    return (
        <div className="scroll-container page-container">
            <img src={SlideImg3} alt="slide-img-1" />
            <img src={SlideImg2} alt="slide-img-2" />
            <img src={SlideImg3} alt="slide-img-3" />
            <img src={SlideImg4} alt="slide-img-4" />
            <img src={SlideImg4} alt="slide-img-4" />
        </div>
    );
}