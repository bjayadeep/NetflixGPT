import React from "react";

const CastList = ({ cast }) => {
  if (!cast || cast.length === 0) return null;

  const handleCastClick = (castName) => {
    const wikiUrl = `https://en.wikipedia.org/wiki/${castName.replace(
      / /g,
      "_"
    )}`;
    window.open(wikiUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 left-12 flex space-x-4 z-20">
      {cast.map((member) => (
        <div
          key={member.id}
          onClick={() => handleCastClick(member.name)}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-400"
          />
          <p className="mt-2 text-sm text-white font-semibold text-center">
            {member.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
