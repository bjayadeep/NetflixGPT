// src/hooks/useMovieCast.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setSelectedMovieCast } from "../utils/movieSlice";

const useMovieCast = (movieId) => {
    const dispatch = useDispatch();

    const fetchMovieCredits = async () => {
        if (!movieId) {
            dispatch(setSelectedMovieCast(null));
            return;
        }
        dispatch(setSelectedMovieCast(null));
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/credits`,
                API_OPTIONS
            );
            const json = await data.json();
            dispatch(setSelectedMovieCast(json.cast?.slice(0, 5)));
        } catch (error) {
            console.error("Failed to fetch movie credits:", error);
        }
    };

    useEffect(() => {
        fetchMovieCredits();
    }, [movieId, dispatch]);
};

export default useMovieCast;