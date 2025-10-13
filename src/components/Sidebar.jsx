import React from "react";

const nodeTypes = ["Trigger", "Action", "Condition", "Wait"];

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-40 p-2 bg-gray-200">
      <h3 className="mb-2 font-bold">Nodes</h3>
      {nodeTypes.map((type) => (
        <div
          key={type}
          className="p-2 mb-2 bg-white rounded shadow cursor-move text-center"
          draggable
          onDragStart={(e) => onDragStart(e, type)}
        >
          {type}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
