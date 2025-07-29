import Body from "./Body";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Body />
      <Header />
      <Outlet /> 
    </>
  );
};

export default AppLayout;
