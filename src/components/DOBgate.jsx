import { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/rug2.png"

export default function DOBGate({ onUnlock }) {

  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const SECRET_DOB = "2026-03-12";

  const handleSubmit = () => {
    if (dob === SECRET_DOB) {
      onUnlock();
    } else {
      setError("Extremely Appologies! This surprise is only for someone special ❤️");
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center  flex items-center justify-center bg-gradient-to-br from-rose-600 via-rose-800 to-red-900 px-6"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[white]/80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl w-full max-w-sm hover:bg-[white]/10 hover:border-2 hover:border-[white]"
      >

        <h1 className="text-2xl font-bold text-center text-rose-700">
          Birthday Surprise 🎂
        </h1>

        <p className="text-sm text-center text-gray-600 mt-2">
          Enter your birthday to unlock something special
        </p>

        <input
          type="date"
          className="mt-6 w-full border border-rose-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
          onChange={(e) => setDob(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Unlock Surprise ❤️
        </button>
      </motion.div>
      
    </div>
  );
}