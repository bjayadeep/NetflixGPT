import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../utils/languageSlice';
import { LANGUAGES } from '../utils/languageConstants';

const LanguageSelector = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <select
      className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
      value={selectedLanguage}
      onChange={handleChange}
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;