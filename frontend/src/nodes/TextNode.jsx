import React, { useMemo, useState } from "react";
import BaseNode from "./BaseNode";
import { FiEdit } from "react-icons/fi";

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

const TextNode = () => {
    const [text, setText] = useState("");

    const variables = useMemo(() => {
        const matches = [...text.matchAll(VAR_REGEX)];
        return [...new Set(matches.map(m => m[1]))];
    }, [text]);

    const lines = text.split("\n");
    const longestLine = Math.max(...lines.map(l => l.length), 10);

    const width = Math.min(420, Math.max(200, longestLine * 8));
    const height = Math.min(300, Math.max(80, lines.length * 22));

    return (
        <BaseNode
            title="Text"
            icon={<FiEdit />}
            inputs={variables.map(v => ({ id: v }))}
            outputs={[{ id: "output" }]}
            style={{ width, height }}
        >
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    background: "#020617",
                    color: "#e5e7eb",
                    border: "1px solid #1e293b",
                    borderRadius: "6px",
                    padding: "6px",
                    fontSize: "13px",
                }}
            />
        </BaseNode>
    );
};

export default TextNode;
