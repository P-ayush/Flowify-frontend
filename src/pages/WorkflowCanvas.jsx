import React, { useCallback } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "react-flow-renderer";
import { useWorkflowStore } from "../store/workflowStore";
import Sidebar from "../components/Sidebar";
import CustomNode from "../components/CustomNode";

const WorkflowCanvas = () => {
  const { nodes: storeNodes, edges: storeEdges, addNode, addEdge: addEdgeStore, setNodes: setStoreNodes, setEdges: setStoreEdges } = useWorkflowStore();

  const [nodes, setNodes, onNodesChange] = useNodesState(storeNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(storeEdges);

  // Connect nodes
  const onConnect = useCallback(
    (params) => {
      const newEdge = addEdge(params, edges);
      setEdges(newEdge);
      addEdgeStore(params);
    },
    [edges, setEdges, addEdgeStore]
  );

  // Remove edge
  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      const edgeIdsToRemove = elementsToRemove
        .filter((el) => el.source && el.target)
        .map((e) => e.id);

      // Remove edges
      setEdges((eds) => eds.filter((e) => !edgeIdsToRemove.includes(e.id)));
      setStoreEdges((eds) => eds.filter((e) => !edgeIdsToRemove.includes(e.id)));

      // Optionally remove nodes
      const nodeIdsToRemove = elementsToRemove
        .filter((el) => el.position) // nodes have position
        .map((n) => n.id);

      setNodes((nds) => nds.filter((n) => !nodeIdsToRemove.includes(n.id)));
      setStoreNodes((nds) => nds.filter((n) => !nodeIdsToRemove.includes(n.id)));
    },
    [setNodes, setEdges, setStoreNodes, setStoreEdges]
  );

  // Drop node from sidebar
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const position = { x: event.clientX - reactFlowBounds.left, y: event.clientY - reactFlowBounds.top };
      const newNode = { id: `${type}-${Date.now()}`, type: "customNode", position, data: { label: type } };

      setNodes((nds) => nds.concat(newNode));
      addNode(newNode);
    },
    [setNodes, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // Update node config/label
  const handleNodeChange = useCallback(
    (newData, id) => {
      setNodes((nds) =>
        nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, config: newData, label: newData.label } } : n))
      );
      setStoreNodes((nds) =>
        nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, config: newData, label: newData.label } } : n))
      );
    },
    [setNodes, setStoreNodes]
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          nodeTypes={{ customNode: (props) => <CustomNode {...props} onChange={handleNodeChange} /> }}
        />
      </div>
    </div>
  );
};

export default WorkflowCanvas;
