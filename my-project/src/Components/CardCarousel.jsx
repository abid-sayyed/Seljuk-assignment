import React, { useState, useRef, useEffect } from 'react';
import data from './data.json';

const CardCarousel = ({ children }) => {
    const carouselContainerRef = useRef(null);
    const cardData = data; // Use the JSON data here

    return (
        <div className="carousel-container my-8 py-35 pb-8 pl-5 bg-white">
            <div>
                <h1 className="text-5xl font-bold mb-6 pt-3 text-center">Blog</h1>
                <p className="text-center pb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et pm</p>
            </div>
            <div className="carousel-wrapper flex flex-wrap justify-between" ref={carouselContainerRef}>
                {cardData.map((card, index) => (
                    <div key={index} className="carousel-card pr-6 transform transition-transform hover:scale-110">
                        {React.cloneElement(children, { data: card })} {/* Pass 'data' prop to the Card component */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
