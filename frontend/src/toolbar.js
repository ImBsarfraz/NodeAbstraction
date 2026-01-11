import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: "10px" }}>
            <h4 style={{ marginBottom: "10px" }}>Nodes</h4>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                {/* Core Nodes */}
                <DraggableNode type="customInput" label="Input" />
                <DraggableNode type="llm" label="LLM" />
                <DraggableNode type="text" label="Text" />
                <DraggableNode type="customOutput" label="Output" />

                {/* Demo / Custom Nodes */}
                <DraggableNode type="math" label="Math" />
                <DraggableNode type="delay" label="Delay" />
                <DraggableNode type="condition" label="Condition" />
                <DraggableNode type="logger" label="Logger" />
                <DraggableNode type="formatter" label="Formatter" />
            </div>
        </div>
    );
};
