import { useState } from "react";

const VideoOverlay = ({ title, overview }) => {
  const [showFullOverview, setFullOverview] = useState(false);
  const OVERVIEW_MAX_LENGTH = 150;

  const trim =
    overview && overview.length > OVERVIEW_MAX_LENGTH
      ? overview.substring(0, OVERVIEW_MAX_LENGTH).trim() + "..."
      : overview;

  const handleMoreInfoClick = (e) => {
    e.preventDefault();
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
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition cursor-pointer">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button
          onClick={handleMoreInfoClick}
          className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition cursor-pointer"
        >
          <i className="fa-solid fa-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoOverlay;
