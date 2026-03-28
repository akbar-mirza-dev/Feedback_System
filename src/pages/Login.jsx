import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [hallticket, setHallticket] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!hallticket || !password) {
      alert("All fields are required");
      return;
    }

    const res = loginStudent(hallticket, password);

    if (res.success) {
      navigate("/student");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Student Login
        </h2>

        <input
          placeholder="Hall Ticket"
          value={hallticket}
          onChange={(e) => setHallticket(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/admin")}
          className="text-center text-blue-500 mt-3 cursor-pointer"
        >
          Login as Admin
        </p>
      </div>
    </div>
  );
}

export default Login;