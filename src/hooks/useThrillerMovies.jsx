import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addThrillerMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useThrillerMovies = () => {
  const dispatch = useDispatch();

  const fetchThriller = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&vote_count.gte=100',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addThrillerMovies(json.results));
  };

  useEffect(() => {
    fetchThriller();
  }, []);
};

export default useThrillerMovies;
