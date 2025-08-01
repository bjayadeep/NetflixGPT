import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import VideoBackground from './VideoBackground';
import VideoOverlay from './VideoOverlay';
import { setIsPlaying } from '../utils/movieSlice';

const SimplifiedHero = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const dispatch = useDispatch();
    const isPlaying = useSelector(store => store.movies.isPlaying);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    
    const [mainMovie, setMainMovie] = useState(null);

    useEffect(() => {
        if (movies?.length > 0 && !mainMovie) {
            const randomIndex = Math.floor(Math.random() * Math.min(4, movies.length));
            setMainMovie(movies[randomIndex]);
        }
    }, [movies, mainMovie]);

    useMovieTrailer(mainMovie?.id);

    const handlePlayClick = () => {
        dispatch(setIsPlaying(true));
    };

    const handleVideoClose = () => {
        dispatch(setIsPlaying(false));
    };

    if (!mainMovie) return null;

    // Conditionally render based on isPlaying state
    return (
        <div className="relative w-full h-screen">
            {isPlaying && trailerVideo?.key ? (
                // Fullscreen player view
                <VideoBackground movieId={mainMovie.id} isPlaying={true} onVideoClose={handleVideoClose} />
            ) : (
                // Default hero section view
                <>
                    <VideoBackground movieId={mainMovie.id} isPlaying={false} />
                    <VideoOverlay 
                        title={mainMovie.title} 
                        overview={mainMovie.overview} 
                        movieId={mainMovie.id} 
                        onPlayClick={handlePlayClick} 
                        isHero={true} 
                    />
                </>
            )}
        </div>
    );
};

export default SimplifiedHero;