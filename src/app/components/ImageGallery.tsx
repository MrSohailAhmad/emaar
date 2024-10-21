"use client"; // Ensure this is included for client-side rendering

import React, { useState } from 'react';
import Image from 'next/image';

const images = [
    "/books.jpg",
    "/book.jpg",
    "/book.jpg", // Replace with your actual image paths
    "/book.jpg",
    // Add more images as needed
];

const ImageGallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <div className="carousel" data-carousel="static">
                {/* Carousel Items */}
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item transition-transform duration-500 ease-in-out ${index === currentIndex ? 'active opacity-100' : 'opacity-0 translate-x-full'}`} // Animation classes
                        data-carousel-item
                        style={{ display: index === currentIndex ? 'block' : 'none' }} // Show only the current image
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            layout="responsive"
                            width={1920}
                            height={300} // Reduced height
                            className="object-cover rounded" // Add rounded corners
                        />
                    </div>
                ))}

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-0 z-30 inline-flex items-center justify-center h-10 w-10 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                    type="button"
                    onClick={handlePrev}
                >
                    <span className="material-icons">chevron_left</span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="absolute top-1/2 right-0 z-30 inline-flex items-center justify-center h-10 w-10 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                    type="button"
                    onClick={handleNext}
                >
                    <span className="material-icons">chevron_right</span>
                    <span className="sr-only">Next</span>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-2 left-1/2 z-30 flex space-x-2 transform -translate-x-1/2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white opacity-60 hover:bg-white'}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-current={index === currentIndex ? "true" : "false"}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
