import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./appLayout";
import Loginuser from "./Loginuser";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      {
        path: "/",
        element: <Loginuser />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

export default appRouter;
