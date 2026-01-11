export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    const appData = { nodeType: type };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";

    event.currentTarget.style.cursor = "grabbing";
  };

  const onDragEnd = (event) => {
    event.currentTarget.style.cursor = "grab";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
        userSelect: "none",
      }}
    >
      <span style={{ color: "#fff", fontSize: "13px" }}>{label}</span>
    </div>
  );
};