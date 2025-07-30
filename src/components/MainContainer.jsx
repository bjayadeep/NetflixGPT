import { useSelector } from "react-redux";
import Hero from "./Hero";
import MovieList from "./MovieList";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * Math.min(4, movies.length));
  const mainMovie = movies[randomIndex];

  return (
    <div>
      <Hero
        movieId={mainMovie.id}
        title={mainMovie.title}
        overview={mainMovie.overview}
      />
    </div>
  );
};

export default MainContainer;
