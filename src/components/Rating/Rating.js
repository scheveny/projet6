import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

function Rating({ rating }) {
    const filledStars = parseInt(rating);
    const emptyStars = 5 - filledStars;

    const filledStarIcon = <FontAwesomeIcon icon={faStar} />; // Utilise l'icône d'étoile remplie
    const emptyStarIcon = <FontAwesomeIcon icon={faStar} />; // Utilise l'icône d'étoile vide

    return (
        <div className="rating">
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="filledStar">
                    {filledStarIcon}
                </span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="emptyStar">
                    {emptyStarIcon}
                </span>
            ))}
        </div>
    );
}

export default Rating;