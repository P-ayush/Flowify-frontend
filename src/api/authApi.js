import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
  const res = await axiosInstance.post("/auth/login", { email, password });
  return res.data;
};

export const signupUser = async (name, email, password) => {
  const res = await axiosInstance.post("/auth/signup", { name, email, password });
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
