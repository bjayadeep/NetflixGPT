import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch : JSON.parse(sessionStorage.getItem("showGptSearch")) || false,
        gptMovies: null,      
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;

            sessionStorage.setItem("showGptSearch", JSON.stringify(state.showGptSearch));
            if(!state.showGptSearch){
                state.gptMovies = null;
                state.movieNames = null;
            }
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