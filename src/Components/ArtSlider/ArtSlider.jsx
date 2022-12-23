import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./ArtSlider.css";

import SlideImg1 from "../../Assets/slide-img-1.png"
import SlideImg2 from "../../Assets/slide-img-2.png"
import SlideImg3 from "../../Assets/slide-img-3.png"
import SlideImg4 from "../../Assets/slide-img-4.png"
import SlideImg5 from "../../Assets/slide-img-5.png"

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function ArtSlider() {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper page-container"
            >
                <SwiperSlide>
                    <div>
                        <img src={SlideImg1} alt="slideImg-1" />
                        Handx Opr
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg2} alt="slideImg-2" />
                    Handx Opr
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={SlideImg3} alt="slideImg-3" />
                        Handx Opr
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={SlideImg4} alt="slideImg-4" />
                        Handx Opr
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={SlideImg5} alt="slideImg-5" />
                        Handx Opr
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}