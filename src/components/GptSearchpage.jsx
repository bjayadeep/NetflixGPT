import React from 'react';
import { useSelector } from 'react-redux';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LANGUAGES } from '../utils/languageConstants';

const GptSearchPage = () => {
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.language.language);
  const currentLang = LANGUAGES.find(lang => lang.identifier === selectedLang);

  return (
    <div className="relative w-full min-h-screen pt-[100px] bg-black bg-opacity-90">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[.3]"
        style={{ backgroundImage: "url('/movies_background.jpg')" }}
      />
      <div className="relative z-10 flex flex-col items-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          {currentLang?.greeting || 'Hello'}, {user?.displayName || 'Guest'}
        </h2>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;