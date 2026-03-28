const FEEDBACK_KEY = "feedback";

// Get all feedback
export const getFeedback = () => {
  return JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
};

// Save feedback
export const saveFeedback = (feedback) => {
  const existing = getFeedback();
  existing.push(feedback);
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(existing));

  // 🔥 Trigger update event
  window.dispatchEvent(new Event("feedbackUpdated"));
};

// Check duplicate
export const isDuplicate = (studentId, subject) => {
  const existing = getFeedback();

  return existing.some(
    (f) => f.studentId === studentId && f.subject === subject
  );
};
