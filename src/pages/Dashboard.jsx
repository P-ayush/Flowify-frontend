import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("workflows") || "[]");
    setWorkflows(saved);
  }, []);

  const handleCreate = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
    const updated = workflows.filter((wf) => wf.id !== id);
    setWorkflows(updated);
    localStorage.setItem("workflows", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Workflows</h2>
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Create Workflow
          </button>
        </div>

        {workflows.length === 0 ? (
          <p className="text-gray-500">No workflows created yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {workflows.map((wf) => (
              <div
                key={wf.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{wf.name}</h3>
                  <p className="text-sm text-gray-500">{wf.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/workflow?id=${wf.id}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(wf.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
