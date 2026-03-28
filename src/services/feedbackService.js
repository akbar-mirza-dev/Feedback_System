const FEEDBACK_KEY = "feedback";

// Get all feedback
export const getFeedback = () => {
  const data = localStorage.getItem(FEEDBACK_KEY);
  return data ? JSON.parse(data) : [];
};

// Save feedback
export const saveFeedback = (feedback) => {
  const existing = getFeedback();
  existing.push(feedback);

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(existing));

  // 🔥 Notify update (same tab)
  window.dispatchEvent(new Event("feedbackUpdated"));
};

// Check duplicate
export const isDuplicate = (studentId, subject) => {
  const existing = getFeedback();

  return existing.some(
    (f) => f.studentId === studentId && f.subject === subject
  );
};
