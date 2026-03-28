import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("currentUser");
  return user ? children : <Navigate to="/" />;
}

export default ProtectedRoute;