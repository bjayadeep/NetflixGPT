import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { gptMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames?.length || !gptMovies?.length) return null;

  return (
    <div className="mt-8 px-4 w-full md:w-1/2 mx-auto">
      {gptMovies.map((movies, i) => (
        movies?.length > 0 && (
          <MovieList
            key={movieNames[i]}
            title={movieNames[i]}
            movies={movies}
            transparentBg={false}
          />
        )
      ))}
    </div>
  );
};

export default GptMovieSuggestions;