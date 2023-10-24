const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input" },
    position,
  },
  {
    id: "2",
    data: { label: "node 2" },
    position,
  },
  {
    id: "2a",
    data: { label: "node 2a" },
    position,
  },
  {
    id: "2b",
    data: { label: "node 2b" },
    position,
  },
  {
    id: "3",
    data: { label: "node 3" },
    position,
  },
  {
    id: "3a",
    data: { label: "node 3a" },
    position,
  },
  {
    id: "3b",
    data: { label: "node 3b" },
    position,
  },
  {
    id: "4",
    data: { label: "node 4" },
    position,
  },
  {
    id: "4a",
    data: { label: "node 4a" },
    position,
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: false },
  { id: "e13", source: "1", target: "3", type: edgeType, animated: false },
  { id: "e22a", source: "2", target: "2a", type: edgeType, animated: false },
  { id: "e22b", source: "2", target: "2b", type: edgeType, animated: false },
  { id: "e33a", source: "3", target: "3a", type: edgeType, animated: false },
  { id: "e33b", source: "3", target: "3b", type: edgeType, animated: false },
  { id: "e14", source: "1", target: "4", type: edgeType, animated: false },
  { id: "e44a", source: "4", target: "4a", type: edgeType, animated: false },
];
