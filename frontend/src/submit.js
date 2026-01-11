import { useStore } from "./store";

// API call
export const submitPipeline = async (nodes, edges) => {
  const res = await fetch("http://localhost:8000/pipelines/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges }),
  });

  const data = await res.json();

  alert(
    `Pipeline Analysis\n\n` +
    `Nodes: ${data.num_nodes}\n` +
    `Edges: ${data.num_edges}\n` +
    `Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
  );
};

// Button component
export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};