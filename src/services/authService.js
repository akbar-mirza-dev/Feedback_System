import { STUDENTS, ADMIN } from "../utils/constants";

export const loginStudent = (hallticket, password) => {
  const user = STUDENTS.find(
    (s) => s.hallticket === hallticket && s.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return { success: true };
  }

  return { success: false, message: "Invalid credentials" };
};

export const loginAdmin = (username, password) => {
  if (username === ADMIN.username && password === ADMIN.password) {
    localStorage.setItem("admin", true);
    return { success: true };
  }

  return { success: false, message: "Invalid admin credentials" };
};

export const logout = () => {
  localStorage.clear();
};