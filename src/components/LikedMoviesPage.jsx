import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLikedMovies } from '../utils/firestoreUtils';
import MovieList from './MovieList';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';

const LikedMoviesPage = () => {
    const user = useSelector((store) => store.user);
    const [likedMovies, setLikedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikedMovies = async () => {
            if (user?.uid) {
                try {
                    const likedMovieIds = await getLikedMovies(user.uid);
                    const movieDetailsPromises = likedMovieIds.map(id => 
                        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS)
                            .then(res => res.json())
                    );
                    const movieDetails = await Promise.all(movieDetailsPromises);
                    setLikedMovies(movieDetails);
                } catch (error) {
                    console.error("Failed to fetch liked movies:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        fetchLikedMovies();
    }, [user]);

    if (loading) {
        return <div className="text-white">Loading your liked movies...</div>;
    }

    if (!user) {
        return <div className="text-white">Please sign in to view your liked movies.</div>;
    }
    
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <div className="pt-24">
                <MovieList title="Your Liked Movies" movies={likedMovies} transparentBg={true} />
            </div>
        </div>
    );
};

export default LikedMoviesPage;
