import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Loginuser from "./Loginuser";
import Browse from "./Browse";
import MovieDetailPage from "./MovieDetailPage";
import LikedMoviesPage from "./LikedMoviesPage";

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
      {
        path: "/movie/:movieId",
        element: <MovieDetailPage />,
      },
      {
        path: "/liked",
        element: <LikedMoviesPage />,
      },
    ],
  },
]);

export default appRouter;
