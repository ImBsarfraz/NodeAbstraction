import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  // ===== STATE =====
  nodes: [],
  edges: [],
  nodeIDs: {},

  // ===== HELPERS =====
  getNodeID: (type) => {
    const nodeIDs = { ...get().nodeIDs };

    if (!nodeIDs[type]) {
      nodeIDs[type] = 0;
    }

    nodeIDs[type] += 1;
    set({ nodeIDs });

    return `${type}-${nodeIDs[type]}`;
  },

  // ===== NODE ACTIONS =====
  addNode: (node) =>
    set({
      nodes: [...get().nodes, node],
    }),

  setNodes: (nodes) => set({ nodes }),

  onNodesChange: (changes) =>
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    }),

  updateNodeField: (nodeId, fieldName, fieldValue) =>
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                [fieldName]: fieldValue,
              },
            }
          : node
      ),
    }),

  // ===== EDGE ACTIONS =====
  setEdges: (edges) => set({ edges }),

  onEdgesChange: (changes) =>
    set({
      edges: applyEdgeChanges(changes, get().edges),
    }),

  onConnect: (connection) =>
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
          },
        },
        get().edges
      ),
    }),
}));