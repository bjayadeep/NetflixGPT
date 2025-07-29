import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="w-32 md:w-40 flex-shrink-0 cursor-pointer"
      onDragStart={(e) => e.preventDefault()}
      style={{ touchAction: 'pan-y' }}>
      <img 
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="rounded-md hover:scale-105 transition duration-300 ease-in-out shadow-lg draggable={false}"
        draggable="false"
      />
    </div>
  );
};

export default MovieCard;
