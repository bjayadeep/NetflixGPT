import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch : false,
        gptMovies: null,      
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, gptMovies } = action.payload;
            state.movieNames = movieNames;
            state.gptMovies = gptMovies;
        },
    }
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;