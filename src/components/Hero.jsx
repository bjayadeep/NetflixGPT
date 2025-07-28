import useTrailer from "../hooks/useTrailer";
import VideoBackground from "./VideoBackground";
import VideoOverlay from "./VideoOverlay";

const Hero = ({ movieId, title, overview }) => {
  useTrailer(movieId); 

  return (
    <div className="relative w-full h-[90vh]">
      <VideoBackground />
      <VideoOverlay title={title} overview={overview} />
    </div>
  );
};

export default Hero;
