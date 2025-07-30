import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAnimeMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useAnimeMovies = () => {
  const dispatch = useDispatch();

  const fetchAnimeMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?with_keywords=210024&with_original_language=ja&include_adult=false&sort_by=popularity.desc&vote_count.gte=100";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addAnimeMovies(json.results));
  };

  useEffect(() => {
    fetchAnimeMovies();
  }, []);
};

export default useAnimeMovies;
