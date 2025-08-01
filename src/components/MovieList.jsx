import React from "react";
import MovieCard from "./MovieCard";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

const MovieList = ({ title, movies, transparentBg }) => {
  const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll();

  if (!movies || movies.length === 0) return null;

  return (
    <div className={`px-4 py-6 ${transparentBg ? "bg-transparent" : ""}`}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <div className="space-x-2">
          <button
            onClick={scrollLeft}
            className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
