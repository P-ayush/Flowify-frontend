import React from "react";
import { useWorkflowStore } from "../store/workflowStore";

const NodeEditor = () => {
  const { nodes, setNodes } = useWorkflowStore();
  const [selectedNodeId, setSelectedNodeId] = React.useState(null);
  const [config, setConfig] = React.useState({});

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  const handleSave = () => {
    setNodes(
      nodes.map((n) =>
        n.id === selectedNodeId ? { ...n, data: { ...n.data, config } } : n
      )
    );
  };

  return (
    <div className="w-64 bg-white p-4 border-l">
      <h2 className="font-bold text-lg mb-4">Node Editor</h2>
      <select
        className="w-full mb-2 p-2 border rounded"
        value={selectedNodeId || ""}
        onChange={(e) => setSelectedNodeId(e.target.value)}
      >
        <option value="">Select Node</option>
        {nodes.map((n) => (
          <option key={n.id} value={n.id}>
            {n.data.label || n.id}
          </option>
        ))}
      </select>

      {selectedNode && (
        <>
          <textarea
            className="w-full p-2 border rounded mb-2"
            rows={4}
            value={JSON.stringify(config, null, 2)}
            onChange={(e) => setConfig(JSON.parse(e.target.value))}
          />
          <button
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSave}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default NodeEditor;
