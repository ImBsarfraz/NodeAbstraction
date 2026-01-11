import BaseNode from "./BaseNode";
import { FiCpu } from "react-icons/fi";

const LLMNode = () => {
  return (
    <BaseNode
      title="LLM"
      icon={<FiCpu />}
      inputs={[{ id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >
      <p>Language model processing</p>
    </BaseNode>
  );
};

export default LLMNode;
