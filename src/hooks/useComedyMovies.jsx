import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addComedyMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useComedyMovies = () => {
  const dispatch = useDispatch();

  const fetchComedy = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addComedyMovies(json.results));
  };

  useEffect(() => {
    fetchComedy();
  }, []);
};

export default useComedyMovies;
