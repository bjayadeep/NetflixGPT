import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    // User is not logged in, redirect to login
    return <Navigate to="/" replace />;
  }

  // User is logged in, render the protected component
  return children;
};

export default ProtectedRoute;
