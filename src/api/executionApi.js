import axiosInstance from "./axiosInstance";

export const triggerWorkflow = async (workflowId, triggerPayload) => {
    const res = await axiosInstance.post(`/workflowExecutions/${workflowId}`, {
        trigger_payload: triggerPayload
    });
    return res.data;
};

export const getExecutionLogs = async (executionId) => {
    const res = await axiosInstance.get(`/workflowExecutions/${executionId}/logs`);
    return res.data;
};