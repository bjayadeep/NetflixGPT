// components/MainContainer.jsx
import { useSelector } from "react-redux";
import Hero from "./Hero";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0]; 

  return (
    <Hero
      movieId={mainMovie.id}
      title={mainMovie.title}
      overview={mainMovie.overview}
    />
  );
};

export default MainContainer;
