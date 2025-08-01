import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";

const useFetchMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    const fetchMovieDetails = async () => {
        if (!movieId) return;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
            const data = await response.json();
            dispatch(addMovieDetails(data));
        } catch (error) {
            console.error("Failed to fetch movie details:", error);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [movieId, dispatch]);
};

export default useFetchMovieDetails;