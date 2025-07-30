import { API_OPTIONS } from './constants';

export const searchMovieTMDB = async (movie) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error('TMDB error:', err);
    return [];
  }
};
