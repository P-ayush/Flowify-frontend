import axiosInstance from "./axiosInstance";

export const createNode = async (workflowId, nodeData) => {
  const res = await axiosInstance.post(`/workflows/${workflowId}/nodes`, nodeData);
  return res.data;
};

export const updateNode = async (workflowId, nodeId, nodeData) => {
  const res = await axiosInstance.put(`/workflows/${workflowId}/nodes/${nodeId}`, nodeData);
  return res.data;
};

export const deleteNode = async (workflowId, nodeId) => {
  const res = await axiosInstance.delete(`/workflows/${workflowId}/nodes/${nodeId}`);
  return res.data;
};

export const getNodes = async (workflowId) => {
  const res = await axiosInstance.get(`/workflows/${workflowId}/nodes`);
  return res.data;
};
