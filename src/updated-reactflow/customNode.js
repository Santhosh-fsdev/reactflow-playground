import { useCallback } from "react";
import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "150px",
          height: "50px",
        }}
      >
        <div></div>
        <h1 style={{ fontSize: "14px", padding: 5, margin: 0 }}>Hello</h1>
        <p
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          {" "}
          123
        </p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
