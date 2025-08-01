import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTeluguMovies from "../hooks/usePopularTeluguMovies";
import usePopularHindiMovies from "../hooks/usePopularHindiMovies";
import useRomanticMovies from "../hooks/useRomanticMovies";
import useThrillerMovies from "../hooks/useThrillerMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import SecondaryContainer from "./SecondaryContainer";
import useAnimeMovies from "../hooks/useAnimeMovies";
import GptSearchpage from "./GptSearchpage";
import { useSelector } from "react-redux";
import SimplifiedHero from "./SimplifiedHero";

const Browse = () => {
 const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 const isPlaying = useSelector((store) => store.movies.isPlaying);
 
 useNowPlayingMovies();
 useTrendingMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 usePopularTeluguMovies();
 usePopularHindiMovies();
 useRomanticMovies();
 useThrillerMovies();
 useHorrorMovies();
 useComedyMovies();
 useAnimeMovies();

 return (
 <div className="relative">
   {showGptSearch ? (
 <GptSearchpage />
 ) : (
 <>
 <SimplifiedHero />
 {!isPlaying && <SecondaryContainer />}
  </>
 )}
 </div>
 );
};

export default Browse;