import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Info } from 'lucide-react';

const VideoOverlay = ({ title, overview, movieId, onPlayClick, isHero = false }) => {
  const [showFullOverview, setFullOverview] = useState(false);
  const OVERVIEW_MAX_LENGTH = 150;
  const navigate = useNavigate();

  const trim =
    overview && overview.length > OVERVIEW_MAX_LENGTH
      ? overview.substring(0, OVERVIEW_MAX_LENGTH).trim() + "..."
      : overview;

  const handleMoreInfoClick = () => {
    navigate(`/movie/${movieId}`);
  };
  
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent flex flex-col justify-center px-12 pt-24 text-white z-10"> 
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-sm md:text-base max-w-xl mb-4 leading-relaxed">
        {showFullOverview ? overview : trim}
        {overview && overview.length > OVERVIEW_MAX_LENGTH && (
          <span
            className="text-gray-400 hover:text-white cursor-pointer ml-1"
            onClick={() => setFullOverview(!showFullOverview)}
          >
            {showFullOverview ? " Show Less" : " See More"}
          </span>
        )}
      </p>
      <div className="flex gap-4">
        <button
          onClick={onPlayClick}
          className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition cursor-pointer flex items-center gap-2"
        >
          <Play size={20} /> Play
        </button>
        {isHero && (
          <button
            onClick={handleMoreInfoClick}
            className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition cursor-pointer flex items-center gap-2"
          >
            <Info size={20} /> More Info
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoOverlay;