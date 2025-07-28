const VideoOverlay = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent flex flex-col justify-center px-12 pt-24 text-white z-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-base md:text-lg max-w-xl mb-6">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition cursor-pointer">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition cursor-pointer">
          <i className="fa-solid fa-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoOverlay;
