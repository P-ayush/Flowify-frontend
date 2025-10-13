import { create } from "zustand";

export const useWorkflowStore = create((set) => ({
  nodes: [],
  edges: [],
  workflows: [],
  selectedNode: null,

  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setWorkflows: (workflows) => set({ workflows }),
  setSelectedNode: (node) => set({ selectedNode: node }),

}));
