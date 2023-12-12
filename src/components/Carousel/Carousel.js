import React, { useState } from "react";
import "./Carousel.scss";

function Carousel({ pictures }) {
    // Using the state hook to manage the index of the currently displayed image.
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next image in the carousel.
    const NextImg = () => {
        // If at the end of the array, go back to the first element; otherwise, go to the next element.
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    // Function to move to the previous image in the carousel.
    const PrevImg = () => {
        // If at the beginning of the array, go to the last element; otherwise, go to the previous element.
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    // Rendering JSX element representing the carousel.
    return (
        <div className="carousel">
            {/* Displaying the previous button only if there is more than one image in the carousel. */}
            {pictures.length > 1 && (
                <div className="prev" onClick={PrevImg}>
                    <div className="prevTop"></div>
                    <div className="prevBottom"></div>
                </div>
            )}

            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />

            
            {/* Displaying the position indicator only if there is more than one image in the carousel. */}
            {pictures.length > 1 && (
                <div className="positionIndicator">
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}


            {/* Displaying the next button only if there is more than one image in the carousel. */}
            {pictures.length > 1 && (
                <div className="next" onClick={NextImg}>
                    <div className="nextTop"></div>
                    <div className="nextBottom"></div>
                </div>
            )}
        </div>
    );
}

export default Carousel;