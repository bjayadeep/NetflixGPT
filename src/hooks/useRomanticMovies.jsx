import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addRomanticMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useRomanticMovies = () => {
  const dispatch = useDispatch();

  const fetchRomantic = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?with_genres=10749&include_adult=false&language=en-US&sort_by=popularity.desc&vote_count.gte=600&vote_average.gte=8";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addRomanticMovies(json.results));
  };

  useEffect(() => {
    fetchRomantic();
  }, []);
};

export default useRomanticMovies;
