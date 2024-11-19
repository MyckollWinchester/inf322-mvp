import React, { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(0); // Estado para la calificación seleccionada
  const [hoverRating, setHoverRating] = useState(0); // Estado para la calificación en hover

  const handleClick = (star: number) => {
    setRating(star);
    if (onRatingChange) {
      onRatingChange(star); // Notifica al padre el cambio de calificación
    }
  };

  const handleMouseOver = (star: number) => {
    setHoverRating(star);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div className="mini-profile__rating-container">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            onClick={() => handleClick(starIndex)}
            onMouseOver={() => handleMouseOver(starIndex)}
            onMouseOut={handleMouseOut}
            style={{
              fontSize: "2rem",
              color: starIndex <= (hoverRating || rating) ? "var(--main-accent)" : "#ccc",
            }}
          >
            ✦
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
