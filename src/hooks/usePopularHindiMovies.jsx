import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularHindiMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularHindiMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularHindi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularHindiMovies(json.results));
  };

  useEffect(() => {
    fetchPopularHindi();
  }, []);
};

export default usePopularHindiMovies;
