import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getFeedback } from "../services/feedbackService";

function AdminDashboard() {
  const [data, setData] = useState([]);

  // Load data
  const loadData = () => {
    const feedback = getFeedback();
    setData(feedback);
  };

  useEffect(() => {
    loadData();

    // 🔥 Listen for updates
    const handleUpdate = () => {
      loadData();
    };

    window.addEventListener("feedbackUpdated", handleUpdate);

    return () => {
      window.removeEventListener("feedbackUpdated", handleUpdate);
    };
  }, []);

  const avg =
    data.length > 0
      ? (
          data.reduce((sum, f) => sum + f.rating, 0) /
          data.length
        ).toFixed(2)
      : 0;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Admin Dashboard
        </h1>

        <p className="mb-4">Average Rating: {avg}</p>

        {data.length === 0 ? (
          <p>No feedback available</p>
        ) : (
          <table className="w-full border text-center">
            <thead className="bg-gray-200">
              <tr>
                <th>Student</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Rating</th>
                <th>Comment</th>
              </tr>
            </thead>

            <tbody>
              {data.map((f, i) => (
                <tr key={i} className="border-t">
                  <td>{f.studentId}</td>
                  <td>{f.subject}</td>
                  <td>{f.teacher}</td>
                  <td>{f.rating}</td>
                  <td>{f.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;
