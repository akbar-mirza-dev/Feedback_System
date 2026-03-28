import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getFeedback } from "../services/feedbackService";
function AdminDashboard() {
  const [data, setData] = useState([]);
useEffect(() => {
  const loadData = () => {
    const data = getFeedback();
    setData(data);
  };

  loadData();

  // 🔥 Auto refresh every 1 sec (important for demo)
  const interval = setInterval(loadData, 1000);

  return () => clearInterval(interval);
}, []);
  
  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("feedback")) || [];
    setData(d);
  }, []);

  const avg =
    data.length > 0
      ? (
          data.reduce((a, b) => a + b.rating, 0) / data.length
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
          <table className="w-full border">
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
                <tr key={i} className="border-t text-center">
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
