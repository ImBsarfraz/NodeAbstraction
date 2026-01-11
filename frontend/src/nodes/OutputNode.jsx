import BaseNode from "./BaseNode";
import { FiArrowUpCircle } from "react-icons/fi";

const OutputNode = () => {
  return (
    <BaseNode
      title="Output"
      icon={<FiArrowUpCircle />}
      inputs={[{ id: "input" }]}
    >
      <p>Pipeline output</p>
    </BaseNode>
  );
};

export default OutputNode;
