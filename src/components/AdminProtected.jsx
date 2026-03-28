import { Navigate } from "react-router-dom";

function AdminProtected({ children }) {
  const admin = localStorage.getItem("admin");
  return admin ? children : <Navigate to="/admin" />;
}

export default AdminProtected;