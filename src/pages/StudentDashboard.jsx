import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.hallticket}
        </h1>

        <button
          onClick={() => navigate("/feedback")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Give Feedback
        </button>
      </div>
    </>
  );
}

export default StudentDashboard;