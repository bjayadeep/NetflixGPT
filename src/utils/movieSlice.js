import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trendingMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    popularTeluguMovies: [],
    popularHindiMovies: [],
    romanticMovies: [],
    thrillerMovies: [],
    horrorMovies: [],
    comedyMovies: [],
    animeMovies: [],
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularTeluguMovies: (state, action) => {
      state.popularTeluguMovies = action.payload;
    },
    addPopularHindiMovies: (state, action) => {
      state.popularHindiMovies = action.payload;
    },
    addRomanticMovies: (state, action) => {
      state.romanticMovies = action.payload;
    },
    addThrillerMovies: (state, action) => {
      state.thrillerMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addAnimeMovies: (state, action) => {
      state.animeMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addPopularTeluguMovies,
  addPopularHindiMovies,
  addRomanticMovies,
  addThrillerMovies,
  addHorrorMovies,
  addComedyMovies,
  addAnimeMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
