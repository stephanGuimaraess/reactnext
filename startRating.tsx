import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
 
  
  
 const styleStar = {
    fontSize: "20px",
    }
    
  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        
        const starClass = i <= rating ? "text-yellow-500" : "text-black" ;
        stars.push(<span key={i} className={`${starClass}`} style={styleStar}>&#9733;</span>);
      }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;