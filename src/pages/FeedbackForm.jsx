import { useState } from "react";
import Navbar from "../components/Navbar";
import { SUBJECTS } from "../utils/constants";
import { saveFeedback, isDuplicate } from "../services/feedbackService";

function FeedbackForm() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
  if (!subject || !rating) {
    alert("Required fields missing");
    return;
  }

  // 🚫 Duplicate check
  if (isDuplicate(user.hallticket, subject)) {
    alert("You already submitted feedback for this subject");
    return;
  }

  const feedback = {
    studentId: user.hallticket,
    subject,
    teacher,
    rating: Number(rating),
    comment,
    date: new Date().toISOString(),
  };

  saveFeedback(feedback);

  alert("Feedback submitted successfully!");

  setSubject("");
  setTeacher("");
  setRating("");
  setComment("");
};

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl w-96 shadow">
          <h2 className="text-xl font-bold mb-4">
            Submit Feedback
          </h2>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="">Select Subject</option>
            {SUBJECTS.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>

          <input
            placeholder="Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          >
            <option value="">Rating</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedbackForm;
