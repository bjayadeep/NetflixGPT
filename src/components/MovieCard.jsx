import React, { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { toggleMovieLike, checkIfMovieLiked } from "../utils/firestoreUtils";

const MovieCard = ({ movieId, posterPath }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkLikeStatus = async () => {
      if (user && movieId) {
        try {
          const liked = await checkIfMovieLiked(user.uid, movieId);
          setIsLiked(liked);
        } catch (error) {
          console.error("Failed to check like status:", error);
        }
      } else {
        setIsLiked(false);
      }
    };
    checkLikeStatus();
  }, [user, movieId]);
  
  const handleLikeToggle = async (e) => {
    e.stopPropagation();
    if (!user) {
      console.log("Please sign in to like movies!");
      return;
    }
    try {
      await toggleMovieLike(user.uid, movieId, isLiked);
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error("Error liking/unliking movie:", error);
    }
  };

  const handleCardClick = () => {
    navigate(`/movie/${movieId}`);
  };

  if (!posterPath || !movieId) return null;

  return (
    <div
      onClick={handleCardClick}
      className="relative w-32 md:w-40 flex-shrink-0 cursor-pointer group"
      onDragStart={(e) => e.preventDefault()}
      style={{ touchAction: 'pan-y' }}>
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="rounded-md hover:scale-105 transition duration-300 ease-in-out shadow-lg"
        draggable="false"
      />
      {user && (
        <button onClick={handleLikeToggle} className="absolute top-2 right-2 p-1 bg-black bg-opacity-75 rounded-full hidden group-hover:block transition-opacity duration-300">
          <Heart size={20} color={isLiked ? "red" : "white"} fill={isLiked ? "red" : "none"} />
        </button>
      )}
    </div>
  );
};

export default MovieCard;
