import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
    title,
    icon,
    inputs = [],
    outputs = [],
    children,
    style = {},
}) => {
    return (
        <div className="node-container" style={style}>
            <div className="node-header">
                <span className="node-icon">{icon}</span>
                <span className="node-title">{title}</span>
            </div>

            {inputs.map((input, index) => (
                <Handle
                    key={input.id}
                    id={input.id}
                    type="target"
                    position={Position.Left}
                    style={{ top: 60 + index * 24 }}
                />
            ))}

            <div className="node-body">{children}</div>

            {outputs.map((output, index) => (
                <Handle
                    key={output.id}
                    id={output.id}
                    type="source"
                    position={Position.Right}
                    style={{ top: 60 + index * 24 }}
                />
            ))}
        </div>
    );
};

export default BaseNode;
