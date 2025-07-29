import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo || !trailerVideo.key) {
    return null;
  }

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo.key}`;

  return (
    <div className="absolute top-0 left-0 w-full -z-10">
      <iframe
        className="w-full aspect-video"
        src={youtubeEmbedUrl}
        title="YouTube Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
