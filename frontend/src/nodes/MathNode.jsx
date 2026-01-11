import BaseNode from "./BaseNode";
import { FiPlus } from "react-icons/fi";

const MathNode = () => (
  <BaseNode
    title="Math"
    icon={<FiPlus />}
    inputs={[{ id: "a" }, { id: "b" }]}
    outputs={[{ id: "result" }]}
  >
    <p>Add two numbers</p>
  </BaseNode>
);

export default MathNode;
