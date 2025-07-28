import Body from "./Body";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Body /> {/* Sets up onAuthStateChanged listener once */}
      <Header />
      <Outlet /> 
    </>
  );
};

export default AppLayout;
