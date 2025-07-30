import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addHorrorMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const fetchHorror = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    fetchHorror();
  }, []);
};

export default useHorrorMovies;
