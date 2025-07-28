import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await response.json();

      const trailer =
        json.results?.find((video) => video.type === "Trailer") ||
        json.results?.[0];

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieTrailer();
  }, [movieId]);
};

export default useTrailer;
