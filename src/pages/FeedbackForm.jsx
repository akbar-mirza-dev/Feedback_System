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
    // ✅ Validation
    if (!subject || !rating) {
      alert("Please select subject and rating");
      return;
    }

    // 🚫 Duplicate Check
    if (isDuplicate(user.hallticket, subject)) {
      alert("You have already submitted feedback for this subject");
      return;
    }

    // 📦 Create Feedback Object
    const feedback = {
      studentId: user.hallticket,
      subject,
      teacher,
      rating: Number(rating),
      comment,
      date: new Date().toISOString(),
    };

    // 💾 Save Feedback (also triggers admin update)
    saveFeedback(feedback);

    // ✅ Success
    alert("Feedback submitted successfully!");

    // 🔄 Reset Form
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

          {/* Subject */}
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

          {/* Teacher */}
          <input
            type="text"
            placeholder="Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          />

          {/* Rating */}
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full mb-3 p-2 border rounded-lg"
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Average</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          {/* Comment */}
          <textarea
            placeholder="Comments (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          {/* Submit */}
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
