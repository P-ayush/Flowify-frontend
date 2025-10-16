import axiosInstance from "./axiosInstance";

export const getWorkflows = async () => {
  const res = await axiosInstance.get("/workflows");
  return res.data;
};

export const createWorkflow = async (data) => {
  const res = await axiosInstance.post("/workflows", data);
  return res.data;
};

export const updateWorkflow = async (id, data) => {
  const res = await axiosInstance.put(`/workflows/${id}`, data);
  return res.data;
};

export const deleteWorkflow = async (id) => {
  const res = await axiosInstance.delete(`/workflows/${id}`);
  return res.data;
};

export const getWorkflowById = async (id) => {
  const res = await axiosInstance.get(`/workflows/${id}`);
  return res.data;
};
