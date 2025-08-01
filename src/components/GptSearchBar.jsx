import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import { LANGUAGES } from "../utils/languageConstants";
import { fetchGptMovieSuggestions } from "../utils/geminiAi";
import { searchMovieTMDB } from "../utils/tmdb";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.language.language);
  const englishLang = LANGUAGES.find((lang) => lang.identifier === "en");
  const currentLang = LANGUAGES.find((lang) => lang.identifier === langKey);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const query = searchText.current.value.trim();
    if (!query) {
      setError(currentLang?.placeholder || "Please enter a search query.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const prompt = `${englishLang?.gptPromptPrefix || ""}${query}${
        englishLang?.gptPromptSuffix || ""
      }`;

      const gptText = await fetchGptMovieSuggestions(prompt);
      console.log("Gemini's raw response",gptText);

      const movieNames = gptText.split(",").map((m) => m.trim());
      const movieResults = await Promise.all(movieNames.map(searchMovieTMDB));

      if(!gptText){
        setError(currentLang?.noSuggestions || "No suggestions found." );
        return;
      }

      dispatch(addGptMovieResult({ movieNames, gptMovies: movieResults }));
    } catch (err) {
      console.error("GPT Search error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-black bg-opacity-80 text-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
      <form
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={
            currentLang?.placeholder || "What would you like to watch today?"
          }
          className="w-full sm:w-3/4 py-3 px-4 rounded-md text-black text-lg focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
        />
        <button
          type="submit"
          className="w-full sm:w-1/4 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-semibold"
          disabled={loading}
        >
          {loading
            ? (currentLang?.loading || "Loading...")
            : (currentLang?.searchButton || "Search")}
        </button>
      </form>

      {error && <p className="mt-2 text-red-400 text-center">{error}</p>}
    </div>
  );
};

export default GptSearchBar;
