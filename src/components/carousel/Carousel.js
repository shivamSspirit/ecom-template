import React, { useState } from "react";
import Carouselitem from "../carouselItem/Carouselitem";
import './carousel.css'

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { text: <h1 className="c-title">GET START <br /> YOUR favourite SHOPING</h1>, btntext: "buy now" },
        { text: <h1 className="c-title">GET START <br /> WITH YOUR favourite DEALS</h1>, btntext: "buy now" },
        { text: <h1 className="c-title">GET START <br /> YOUR favourite PRODUCTS</h1>, btntext: "buy now" },
    ];

    const handleNext = () => {
        setActiveIndex(prevIndex =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setActiveIndex(prevIndex =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carosuel-container">
            <span className="clickbox">
                <img className="moveicon" src="/less-than.png" alt="less-than" onClick={handlePrev} />
            </span>
            {<Carouselitem ctext={items[activeIndex]?.text} btntext={items[activeIndex]?.btntext} />}
            <span className="clickbox">
                <img className="moveicon" src="/more-than.png" alt="more-than" onClick={handleNext} />
            </span>
        </div>
    );
};

export default Carousel;
