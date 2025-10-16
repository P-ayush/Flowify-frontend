import React from "react";
import { Handle, Position } from "react-flow-renderer";

const CustomNode = ({ data, id }) => {
  const handleChange = (e) => {
    if (data?.onChange) {
      data.onChange({ ...data.config, label: e.target.value }, id);
    }
  };

  return (
    <div className="p-2 border rounded shadow bg-white">
      <Handle type="target" position={Position.Top} />
      <input
        type="text"
        value={data.config?.label || data.label || ""}
        onChange={handleChange}
        className="w-full border p-1 rounded text-sm"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
