// src/hooks/useMovieData.js
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieData = (movieId) => {
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllMovieData = async () => {
            if (!movieId) {
                setMovieData(null);
                setIsLoading(false);
                return;
            }
            
            setIsLoading(true);
            setMovieData(null);

            try {
                const [detailsResponse, creditsResponse, videosResponse] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS),
                    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, API_OPTIONS),
                    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS),
                ]);

                const [detailsJson, creditsJson, videosJson] = await Promise.all([
                    detailsResponse.json(),
                    creditsResponse.json(),
                    videosResponse.json(),
                ]);

                const trailerArray = videosJson.results.filter((video) => video.type === "Trailer");
                const trailer = trailerArray.length ? trailerArray[0] : videosJson.results[0];

                setMovieData({
                    details: detailsJson,
                    cast: creditsJson.cast?.slice(0, 5) || [],
                    trailer: trailer,
                });
            } catch (error) {
                console.error("Failed to fetch movie data:", error);
                setMovieData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllMovieData();

        return () => {
            setMovieData(null);
        };
    }, [movieId]);

    return { movieData, isLoading };
};

export default useMovieData;