const FEEDBACK_KEY = "feedback";

// Get all feedback
export const getFeedback = () => {
  return JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
};

// Save new feedback
export const saveFeedback = (newFeedback) => {
  const existing = getFeedback();
  existing.push(newFeedback);
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(existing));
};

// Check duplicate
export const isDuplicate = (studentId, subject) => {
  const existing = getFeedback();

  return existing.find(
    (f) => f.studentId === studentId && f.subject === subject
  );
};
