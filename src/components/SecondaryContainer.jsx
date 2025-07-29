import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-10 -mt-[100px] pl-4">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} transparentBg={true} />
      <div className="bg-black bg-opacity-90 pb-10">
        <MovieList title="Trending" movies={movies.trendingMovies} />
        <MovieList title="Top IMDB movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
