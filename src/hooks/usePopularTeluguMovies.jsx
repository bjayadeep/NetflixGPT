import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTeluguMovies } from "../utils/movieSlice";

const usePopularTeluguMovies = () => {
  const dispatch = useDispatch();

  const getPopularTeluguMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=te",
        API_OPTIONS
      );
      const json = await response.json();
      dispatch(addPopularTeluguMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch popular Telugu movies:", error);
    }
  };

  useEffect(() => {
    getPopularTeluguMovies();
  }, []); 
};

export default usePopularTeluguMovies;