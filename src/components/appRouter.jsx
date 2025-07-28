import { createBrowserRouter } from "react-router-dom";
import Loginuser from "./Loginuser";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Loginuser />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
