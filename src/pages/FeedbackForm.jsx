import { useState } from "react";
import Navbar from "../components/Navbar";
import { SUBJECTS } from "../utils/constants";
import {
  saveFeedback,
  isDuplicate,
} from "../services/feedbackService";

function FeedbackForm() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!subject || !rating) {
      alert("Please select subject and rating");
      return;
    }

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

    // Reset form
    setSubject("");
    setTeacher("");
    setRating("");
    setComment("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Submit Feedback
          </h2>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          >
            <option value="">Select Subject</option>
            {SUBJECTS.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Comments (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedbackForm;
