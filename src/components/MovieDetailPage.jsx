import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMovieData from "../hooks/useMoviesData"; // <-- New hook import
import VideoBackground from "./VideoBackground";
import VideoOverlay from "./VideoOverlay";
import Header from "./Header";
import CastList from "./CastList";
import { ChevronLeft } from "lucide-react";
import { setIsPlaying } from "../utils/movieSlice";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movieData, isLoading } = useMovieData(movieId);

  const isPlaying = useSelector((store) => store.movies.isPlaying);

  if (isLoading || !movieData) {
    return (
      <div className="text-white text-center p-8 bg-black min-h-screen">
        Loading movie details...
      </div>
    );
  }

  const { details, trailer, cast } = movieData;

  const handlePlayClick = () => {
    dispatch(setIsPlaying(true));
  };

  const handleVideoClose = () => {
    dispatch(setIsPlaying(false));
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      {isPlaying ? (
        <VideoBackground
          movieId={movieId}
          isPlaying={true}
          onVideoClose={handleVideoClose}
        />
      ) : (
        <>
          <Header />
          <div className="pt-20 md:pt-0">
            <button
              onClick={() => navigate("/browse")}
              className="absolute top-24 left-6 z-20 text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full flex items-center hover:bg-gray-700 transition-all duration-200"
            >
              <ChevronLeft size={20} />{" "}
              <span className="ml-2 hidden md:block">Back to Browse</span>
            </button>
            {trailer?.key && (
              <VideoBackground movieId={movieId} isPlaying={false} />
            )}
            <VideoOverlay
              title={details.title}
              overview={details.overview}
              movieId={movieId}
              onPlayClick={handlePlayClick}
              isHero={false}
            />
          </div>
          {cast && <CastList cast={cast} />}
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;
