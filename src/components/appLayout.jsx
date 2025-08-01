import Body from "./Body";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AppLayout = () => {
 const isPlaying = useSelector((store) => store.movies.isPlaying);

 useEffect(() => {
 if (isPlaying) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "auto";
 }
 }, [isPlaying]);

 return (
 <>
 <Body />
 <Header />
 <Outlet /> 
 </>
 );
};
export default AppLayout;