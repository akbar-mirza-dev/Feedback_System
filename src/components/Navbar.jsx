import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-3">
      <h1 className="text-xl font-semibold">Feedback System</h1>

      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
