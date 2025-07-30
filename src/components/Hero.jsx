import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import VideoOverlay from "./VideoOverlay";
import { useSelector } from "react-redux";

const Hero = ({ movieId, title, overview }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="relative w-full h-screen">
      {trailerVideo?.key && <VideoBackground movieId={movieId} />}
      <VideoOverlay title={title} overview={overview} movieId={movieId} />
    </div>
  );
};

export default Hero;
