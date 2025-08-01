import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { XCircle } from "lucide-react";

const VideoBackground = ({ movieId, isPlaying, onVideoClose }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo || !trailerVideo.key) {
    return null;
  }

  const baseYoutubeEmbedUrl = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo.key}`;

  const allowAttributes = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";

  return isPlaying ? (
    <div className="fixed inset-0 z-[100] bg-black flex justify-center items-center">
      <button
        onClick={onVideoClose}
        className="absolute top-4 left-1/2 -translate-x-1/2 text-white z-[101] cursor-pointer bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition-all duration-200"
      >
        <XCircle size={32} />
      </button>
      <iframe
        className="w-full h-full aspect-video"
        src={`${baseYoutubeEmbedUrl}&mute=0`}
        title="YouTube Video player"
        allow={allowAttributes}
      ></iframe>
    </div>
  ) : (
    <div className="absolute top-0 left-0 w-full aspect-video z-10">
      <iframe
        className="w-full h-full"
        src={`${baseYoutubeEmbedUrl}&mute=1`}
        title="YouTube Video player"
        allow={allowAttributes}
      ></iframe>
    </div>
  );
};

export default VideoBackground;